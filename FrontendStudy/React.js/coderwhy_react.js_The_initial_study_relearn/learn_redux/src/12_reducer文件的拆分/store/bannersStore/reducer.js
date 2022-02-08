import { CHANGE_BANNERS } from './constants';

const initialBannersState = {
  banners: []
};

export default function bannersReducer(state = initialBannersState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
}
