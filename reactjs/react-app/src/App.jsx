import { useState } from 'react';

function App() {
  const [state, setState] = useState({ user: 'tinyRipple' });

  return (
    <div onClick={() => setState(pre => ({ ...pre, user: 'zhengdonghui' }))}>
      {state.user}
    </div>
  );
}

export default App;
