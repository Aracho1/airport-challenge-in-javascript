// describe('Plane', function(){
//   describe('location', function() {
//     it("has a default location of air", function() {
//       plane = new Plane();
//       expect(plane.location).toEqual("air")
//     })
//   })
// })

'use strict';

describe('Plane', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  }); 

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can take off from an airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  })
});