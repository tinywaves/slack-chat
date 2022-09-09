import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants'

const initialState = {
  banners: [],
  recommends: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}
