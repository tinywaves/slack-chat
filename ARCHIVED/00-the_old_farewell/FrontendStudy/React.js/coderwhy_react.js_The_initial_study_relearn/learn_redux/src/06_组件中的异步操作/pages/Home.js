import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import {
  changeBannersAction,
  changeRecommendsAction
} from '../store/actionCreators'

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      this.props.changeBanners(res.data.data.banner.list)
      this.props.changeRecommends(res.data.data.recommend.list)
    })
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    changeBanners(banners) {
      dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
