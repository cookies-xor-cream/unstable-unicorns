import React, { useEffect } from 'react';

import './index.css';

import feathers from "@feathersjs/client";
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

const app = feathers();
const socket = io('http://localhost:3030');
app.configure(socketio(socket));


const Game = () => {
    app.service('messages').create({
      text: "test123"
    });

    return (
        <h1> test </h1>
    );
};

export default Game;
