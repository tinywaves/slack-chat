import React, { createContext } from 'react';

import ChildComponent from './ChildComponent';

export const UserContext = createContext();
export const TokenContext = createContext();

export default function App() {
  return (
    <UserContext.Provider value={{ name: 'tinyRipple', id: 111 }}>
      <TokenContext.Provider value={'xxxxxxxxxx'}>
        <ChildComponent />
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}
