import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('tinyRipple');

  useEffect(() => {
    console.log('订阅事件');

    return () => {
      console.log('取消订阅事件');
    };
  }, []);

  useEffect(() => console.log('网络请求'), []);
  // 只有在counter状态变化时才会被调用
  useEffect(() => console.log('counter:' + counter), [counter]);

  return (
    <>
      <h2>当前计数: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h2>{name}</h2>
      <button onClick={() => setName('ZDH')}>change name</button>
    </>
  );
}
