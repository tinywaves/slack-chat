import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // 订阅事件componentDidMount
    console.log('订阅事件');

    return () => {
      // 取消订阅事件componentDidUpdate
      console.log('取消订阅事件');
    };
  });

  return <h2>useEffect</h2>;
}
