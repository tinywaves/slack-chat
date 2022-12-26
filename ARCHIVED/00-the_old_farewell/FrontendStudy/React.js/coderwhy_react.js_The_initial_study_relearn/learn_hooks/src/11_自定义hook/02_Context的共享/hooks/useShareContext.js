import { useContext } from 'react';

import { UserContext, TokenContext } from '../App';

export default function useShareContext() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  return [user, token];
}
