import React from 'react';

import useShareContext from './hooks/useShareContext';

export default function ChildComponent() {
  const [user, token] = useShareContext();

  return (
    <div>
      {user.name}==={user.id}==={token}
    </div>
  );
}
