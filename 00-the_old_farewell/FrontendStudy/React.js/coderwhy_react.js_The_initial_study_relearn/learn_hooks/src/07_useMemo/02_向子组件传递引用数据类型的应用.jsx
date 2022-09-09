import React, { memo, useMemo, useState } from 'react';

const InfoComponent = memo(props => {
  return (
    <h2>
      name:{props.info.name}---id:{props.info.id}
    </h2>
  );
});

export default function App() {
  const [flag, setFlag] = useState(true);

  // const info = { name: 'tinyRipple', id: 111 };
  // 表示只有依赖数组([])发生变化时,useMemo传入的回调函数才会重新执行一次并返回一个新的值,否则返回保存的旧值memoized
  const info = useMemo(() => {
    return { name: 'tinyRipple', id: 111 };
  }, []);

  return (
    <div>
      <InfoComponent info={info} />
      <div>{flag ? 'true' : 'false'}</div>
      <button onClick={() => setFlag(!flag)}>change flag</button>
    </div>
  );
}
