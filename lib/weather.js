export default class Weather {
  constructor(weather) {
    this.cloudCover = weather["data"]["attributes"]["overall"]["cloud_cover"]
  }
}
