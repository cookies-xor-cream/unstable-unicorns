import feathers from '@feathersjs/feathers';
import '@feathersjs/transport-commons';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';

import authentication from 'feathers-authentication';
import jwt from  '@feathersjs/authentication-jwt';

import auth from './auth';

import GameService from './services/game';

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// auth settings
app.set('authentication', {
	"entity": null,
	"service": null,
	"secret": "Ej0XhakSOO92QbeyLKDUqsZPQks=",
	"authStrategies": [
		"jwt",
		"local"
	],
	"jwtOptions": {
		"header": {
			"typ": "access"
		},
		"secret": "Ej0XhakSOO92QbeyLKDUqsZPQks=",
		"audience": "http://localhost:3030",
		"issuer": "feathers",
		"algorithm": "HS256",
		"expiresIn": "1d"
	},
	"local": {
		"usernameField": "email",
		"passwordField": "password"
	}
});

// Setup authentication
app.configure(authentication(app.get('authentication')));
app.configure(jwt());
 
// Setup a hook to only allow valid JWTs to authenticate
// and get new JWT access tokens
app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['jwt'])
    ]
  }
});

// Express middleware to parse HTTP JSON bodies
app.use(express.json());
// Express middleware to parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Express middleware to to host static files from the current folder
app.use(express.static(__dirname));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
app.configure(auth)
// Register our messages service
app.use('/game', new GameService());
// Express middleware with a nicer error handler
app.use(express.errorHandler());

console.log(__dirname);
console.log(app.get('authentication'));

app.get('authentication')

// Add any new real-time connection to the `players` channel
app.on('connection', connection => {
	console.log("----------------------------");
	console.log(connection);
	app.channel('players').join(connection)
});
// Publish all events to the `players` channel
app.publish(data => app.channel('players'));

// Start the server
app.listen(3030).on('listening', () =>
	console.log('Feathers server listening on localhost:3030')
);

// For good measure let's create a message
// So our API doesn't look so empty
app.service('game').create({
	text: 'Hello world from the server'
});
