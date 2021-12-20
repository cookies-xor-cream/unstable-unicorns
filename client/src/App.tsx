import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Index from './pages';
import Game from './pages/game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
