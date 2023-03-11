import { useCallback, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = useCallback(() => setCounter(pre => pre + 1));

  return (
    <>
      <div>{counter}</div>
      <button onClick={clickHandler}>+1</button>
    </>
  );
};

export default App;
