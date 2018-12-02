export default class BackgroundImage {
  constructor(data) {
    this.url = data['data']['attributes']['sizes']['regular_size']
  }
}
