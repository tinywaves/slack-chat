import axios from 'axios'

import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA
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

export const getHomeMultidataAction = (dispatch, getState) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    dispatch(changeBannersAction(res.data.data.banner.list))
    dispatch(changeRecommendsAction(res.data.data.recommend.list))
  })
}

// redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}
