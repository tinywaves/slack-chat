import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
} from './constants'

// banners
export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners
})
// recommends
export const changeRecommendsAction = recommends => ({
  type: CHANGE_RECOMMENDS,
  recommends
})
