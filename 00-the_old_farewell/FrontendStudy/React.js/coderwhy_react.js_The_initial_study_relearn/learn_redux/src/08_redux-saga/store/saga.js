import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { FETCH_HOME_MULTIDATA } from './constants'
import { changeBannersAction, changeRecommendsAction } from './actionCreators'

function* fetchHomeMultidata(action) {
  const result = yield axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
  const banners = result.data.data.banner.list
  const recommends = result.data.data.recommend.list
  // yield put(changeBannersAction(banners))
  // yield put(changeRecommendsAction(recommends))
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends))
  ])
}

export default function* sagaProject() {
  // takeLatest一次只能监听一个对应的action,总是执行最后一个action
  // takeEvery每个action都会被执行
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  // yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  yield all([yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)])
}
