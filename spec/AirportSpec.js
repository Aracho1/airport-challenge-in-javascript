'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  
  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false)
    })
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
  
    it('can clear planes for take off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing', function() {
      // spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
    it('does not clear planes for takeoff', function() {
      // spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
//   describe("'when initialized'", function() {
//     it("has a default capacity", function(){
//       //arrange
//       const default_capacity = 2;
//       //act
//       let airport = new Airport(capacity = default_capacity);
//       //assert
//       expect(airport.capacity).toBe(2);
//     });
  
//     it("has an empty ramp", function() {
//       let airport = new Airport(2);
//       expect(airport.ramp).toEqual([]);
//     });
//   })

//   describe("'checks weather'", function() {
//     it("checks weather", function(){
//       //arrange
//       var airport = new Airport();
//       //act
//       spyOn(airport, 'weather').and.returnValue('sunny');
//       //assert
//       expect(airport.weather()).toEqual("sunny");
//     });
//   })
  
//   describe("'full", function() {
//     it ('confirms whether the airport is full', function() {
//       //arrange
//       airport = new Airport(1);
//       //act
//       airport.ramp.push("plane");
//       result = airport.full();
//       //assert
//       expect(result).toBe(true);
//     });
//   });

//   describe("'landing'", function() {
//     beforeEach(function() {
//       airport = new Airport();
//     });

//     it("refuses landing if the airport is full", function() {
//       //arrange
//       airport.ramp.push("plane")
//       //act
//       // result = airport.land("plane");
//       //assert
//       expect( function(){airport.land("plane");}).toThrow(new Error("airport is full"));
//     });

//     it("refuses landing if the weather is stormy", function() {
//       //arrange
//       airport = new Airport(10);
//       spyOn(airport, "weather").and.returnValue("stormy")
//       console.log(airport.ramp);
//       console.log(airport.capacity);
//       console.log(airport.weather());
//       console.log(airport.full());
//       //act
//       //assert
//       expect( function(){airport.land("plane");}).toThrow(new Error("bad weather"));
//     })

//     xit("cannot land if the plane has already landed", function() {
//       airport = new Airport();
      
//     })
//   });
// });