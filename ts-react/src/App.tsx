import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import IncrementButton from './components/IncrementButton';
import MouseTracker from './components/MouseTracker';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello message="Hello, React.js + TypeScript" />
        <IncrementButton number={0} condition={false} />
        <MouseTracker />
      </header>
    </div>
  );
};

export default App;
