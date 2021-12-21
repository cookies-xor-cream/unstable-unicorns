import React, { useEffect } from 'react';
import { useEffectOnce } from 'react-use';

import './index.css';

import feathers from "@feathersjs/client";
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

import serverUrl from '../../lib/globals';

const client = feathers();
const socket = io(serverUrl);
client.configure(socketio(socket));

client.configure(feathers.authentication({
  storage: window.localStorage
}));

const Game = () => {
  const sendMessage = () => {
    client.service('game').create({
      text: "test123"
    });
    console.log("test123");
  };

  const auth = () => {
    // client.authenticate({
    //   strategy: 'local',
    //   email: 'hello@feathersjs.com',
    //   password: 'supersecret'
    // });
  }

  return (
    <div>
      <button onClick={auth}>Auth</button>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  );
};

export default Game;
