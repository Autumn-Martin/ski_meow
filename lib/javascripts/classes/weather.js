export default class Weather {
  constructor(data) {
    const generalWeather = data['data']['attributes']['overall']
    const generalWeatherPrecip = data['data']['attributes']['overall']['precip']
    const peakMtnWeather = data['data']['attributes']['peak']
    const midMtnWeather = data['data']['attributes']['mid']
    const baseMtnWeather = data['data']['attributes']['base']
    // column a general precipitation weather
    this.precipChance = Math.round(generalWeatherPrecip['precip_probability']*100)
    this.precipDepth = generalWeatherPrecip['snow_accumulation']
    this.precipType = generalWeatherPrecip['precip_type'].toUpperCase()
    // column b other general weather
    this.cloudCover = generalWeather['cloud_cover'] * 100
    this.visibility = Math.round(generalWeather['visibility'])
    this.windSpeed = generalWeather['wind_speed']
    // column b elevation specific weather
    this.mtnPeakTemp = peakMtnWeather['max_temp']
    this.midChairTemp = midMtnWeather['max_temp']
    this.mtnBaseTemp = baseMtnWeather['max_temp']
  }
}
