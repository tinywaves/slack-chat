import React, { useState, useMemo } from 'react';

function calculateSum(count) {
  let total = 0;
  for (let index = 1; index <= count; index++) {
    total += index;
  }

  return total;
}

export default function App() {
  const [counter, setCounter] = useState(10);
  const [flag, setFlag] = useState(true);

  // const total = calculateSum(counter);
  // 表示只有依赖数组(counter)发生变化时,useMemo传入的回调函数才会重新执行一次并返回一个新的值,否则返回保存的旧值memoized
  const total = useMemo(() => calculateSum(counter), [counter]);

  return (
    <>
      <h2>
        计算 1 + 2 + ··· + {counter - 1} + {counter} = {total}
      </h2>
      <div>{flag ? 'true' : 'false'}</div>
      <button onClick={() => setCounter(counter + 1)}>counter + 1</button>
      <button onClick={() => setFlag(!flag)}>change flag</button>
    </>
  );
}
