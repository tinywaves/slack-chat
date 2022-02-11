import React, { useEffect } from 'react';

export default function App() {
  // 修改DOM
  useEffect(() => console.log('修改DOM'));
  // 订阅事件
  useEffect(() => console.log('订阅事件'), []);
  // 网络请求
  useEffect(() => console.log('网络请求'), []);

  return <div>App</div>;
}
