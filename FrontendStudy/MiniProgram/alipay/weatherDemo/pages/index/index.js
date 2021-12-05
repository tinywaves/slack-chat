import { getLocation, request } from '../../utils/index'

Page({
  data: {
    test: 'Hellow World'
  },
  onLoad(query) {
    // 获取当前时间地天气
    this.getRealTimeWeather()
  },
  async realTimeWeatherAPI(params) {
    return request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data: {
        ...params,
        key: 'b04d44fb9e264cdea07a4cf33527219e'
      }
    })
  },
  async getRealTimeWeather() {
    // 获取当前位置
    const { longitude = '', latitude = '', district = '' } = await getLocation()
    const rawRealTimeWeatherData = await this.realTimeWeatherAPI({ location: `${longitude},${latitude}` })
  }
})


