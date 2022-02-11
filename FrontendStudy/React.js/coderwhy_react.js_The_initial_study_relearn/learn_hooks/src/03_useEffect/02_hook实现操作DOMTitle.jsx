import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  // 在组件渲染至真实DOM上后对useEffect进行回调,不论是创建或更新,即模拟实现了componentDidMount和componentDidUpdate生命周期函数
  useEffect(() => (document.title = counter));

  return (
    <>
      <h2>当前计数: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
}
