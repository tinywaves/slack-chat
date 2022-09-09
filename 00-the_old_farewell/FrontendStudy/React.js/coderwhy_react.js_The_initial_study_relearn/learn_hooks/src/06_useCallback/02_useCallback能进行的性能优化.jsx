import React, { useCallback, useState, memo } from 'react';

const Button = memo(props => {
  console.log('重新渲染' + props.title);
  return <button onClick={props.increment}>+1</button>;
});

export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(true);

  const increment1 = () => {
    console.log('increment1');
    setCounter(counter + 1);
  };

  const increment2 = useCallback(() => {
    console.log('increment2');
    setCounter(counter + 1);
  }, [counter]);

  // const increment3 = useMemo(() => {
  //   return () => {
  //     console.log('increment2');
  //     setCounter(counter + 1);
  //   };
  // }, [counter]);

  return (
    <>
      <h2>当前计数: {counter}</h2>
      <h2>{value ? 'true' : 'false'}</h2>
      <Button title="btn1" increment={increment1} />
      <Button title="btn2" increment={increment2} />
      <button onClick={() => setValue(!value)}>change value</button>
    </>
  );
}
