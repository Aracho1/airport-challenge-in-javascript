class Weather {
  constructor() {
    this._CHANCE_OF_STORMY = 0.5
  }

  isStormy() {
    return (Math.random() > this._CHANCE_OF_STORMY);
  }
    
  // check_weather() {
  //   const forecast = ["sunny", "sunny", "sunny", "stormy"]
  //   return forecast[Math.floor(Math.random() * forecast.length)]
  // }
}