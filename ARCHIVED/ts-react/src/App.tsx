import React, { useState, createContext } from 'react';

import Hello from './components/Hello';
import IncrementButton from './components/IncrementButton';
import MouseTracker from './components/MouseTracker';

// import withLoader from './components/withLoader';

// import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';

interface IDodImageData {
  message: string;
  status: string;
}

interface ITheme {
  [key: string]: { color: string; background: string };
}
const theme: ITheme = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#000'
  }
};
export const ThemeContext = createContext(theme.light);

// const DogImage: React.FC<{ data: IDodImageData }> = ({ data }) => {
//   return (
//     <>
//       <h2>status: {data.status}</h2>
//       <img src={data.message} alt="dog" />
//     </>
//   );
// };

const App: React.FC = () => {
  // const position = useMousePosition();
  const [flag, setFlag] = useState(false);

  // const Dog = withLoader(DogImage, 'https://dog.ceo/api/breeds/image/random');
  const [data, loading] = useURLLoader(
    'https://dog.ceo/api/breeds/image/random',
    [flag]
  );
  const result = data as IDodImageData;

  return (
    <ThemeContext.Provider value={theme.light}>
      <div style={{ textAlign: 'center' }}>
        <Hello message="Hello, React.js + TypeScript" />
        <IncrementButton number={0} condition={false} />
        <MouseTracker />
        {/* <p>
          X: {position.pointerX}, Y: {position.pointerY}
        </p> */}
        {/* <Dog /> */}
        <button onClick={() => setFlag(!flag)} style={{ display: 'block' }}>
          change flag
        </button>
        {loading ? (
          <p>dog image is loading···</p>
        ) : (
          <img src={result && result.message} alt={result && result.status} />
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
