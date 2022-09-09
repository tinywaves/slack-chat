import axios from 'axios';

import { CHANGE_BANNERS } from './constants';

export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners
});

export const axiosBannersAction = dispatch => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    dispatch(changeBannersAction(res.data.data.banner.list));
  });
};
