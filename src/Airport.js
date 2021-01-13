'use strict';

class Airport {
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
  }

  planes(){
    return this._hangar;
  };

  clearForLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot land during storm');
    }
    this._hangar.push(plane);
  };

  clearForTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('cannot takeoff during storm');
    }
    this._hangar = [];
  }

  // isStormy() {
  //   return false;
  // }
};

  // constructor(capacity = 10) {
  //   this.capacity = capacity;
  //   // this.ramp = [];
  //   // this.to_weather = new Weather();
  // }

  // weather() {
  //   const forecast = ["sunny", "sunny", "sunny", "stormy"]
  //   return forecast[Math.floor(Math.random() * forecast.length)]
  // }

  // full() {
  //   return airport.ramp.length >= airport.capacity
  // }

  // land(plane) {
  //   var available = this.full();
  //   if (available == true) {
  //     throw new Error('airport is full');
  //   } else if (this.weather == "stormy") {
  //     throw new Error('bad weather');
  //   }
  // }
