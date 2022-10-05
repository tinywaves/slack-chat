import React from 'react';
import './App.css';

import Hello from './components/Hello';
import IncrementButton from './components/IncrementButton';
import MouseTracker from './components/MouseTracker';

import withLoader from './components/withLoader';

import useMousePosition from './hooks/useMousePosition';

interface IDodImageData {
  message: string;
  status: string;
}

const DogImage: React.FC<{ data: IDodImageData }> = ({ data }) => {
  return (
    <>
      <h2>status: {data.status}</h2>
      <img src={data.message} alt="dog" />
    </>
  );
};

const App: React.FC = () => {
  const position = useMousePosition();

  const Dog = withLoader(DogImage, 'https://dog.ceo/api/breeds/image/random');

  return (
    <div className="App">
      <header className="App-header">
        <Hello message="Hello, React.js + TypeScript" />
        <IncrementButton number={0} condition={false} />
        <MouseTracker />
        <p>
          X: {position.pointerX}, Y: {position.pointerY}
        </p>
        <Dog />
      </header>
    </div>
  );
};

export default App;
