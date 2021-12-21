import React, { useEffect } from 'react';
import { useEffectOnce } from 'react-use';

import './index.css';

import client from '../../lib/feathers';

const Game = () => {
  const sendMessage = () => {
    client.service('games').create({
      text: "test123"
    });
    console.log("test123");
  };

  const login = () => {
    const _client: any = client
    _client.authenticate({
      strategy: 'local',
      email: 'test@test.com',
      password: 'password',
    }).then((e: any) => console.log("logged in", e))
      .catch((e: any) => console.log("rip", e));


  }

  const auth = () => {
    client.service('users')
      .create({
        email: 'test@test.com',
        password: 'password',
      }).then(login);
  }

  return (
    <div>
      <button onClick={auth}>Auth</button>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  );
};

export default Game;
