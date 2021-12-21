import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import serverUrl from './globals';

const socket = io(serverUrl);
const client = feathers();

// console.log("!!!", serverUrl, socket)

client.configure(socketio(socket));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

export default client;