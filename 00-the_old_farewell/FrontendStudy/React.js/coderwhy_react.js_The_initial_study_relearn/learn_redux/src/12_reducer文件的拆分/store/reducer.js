import { combineReducers } from 'redux';

import { reducer as bannersReducer } from './bannersStore';
import { reducer as counterReducer } from './counterStore';

// export default function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     bannersInfo: bannersReducer(state.bannersInfo, action)
//   };
// }

const reducer = combineReducers({
  counterInfo: counterReducer,
  bannersInfo: bannersReducer
});

export default reducer;
