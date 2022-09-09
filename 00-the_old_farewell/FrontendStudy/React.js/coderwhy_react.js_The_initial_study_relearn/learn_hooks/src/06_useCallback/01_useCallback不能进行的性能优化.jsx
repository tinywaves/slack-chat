import React, { useCallback, useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment1 = () => {
    console.log('increment1');
    setCounter(counter + 1);
  };

  const increment2 = useCallback(() => {
    console.log('increment2');
    setCounter(counter + 1);
    // 若依赖中不加入counter,传入一个[]空数组,因为每次返回的是一个相同的函数,上面的回调函数产生了一个闭包,每一次setCounter(counter + 1);使用的counter都是原先定义的初始counter=0,因此界面不会发生变化,一直为1
  }, [counter]);

  return (
    <>
      <h2>当前计数: {counter}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </>
  );
}
