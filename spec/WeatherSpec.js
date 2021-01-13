describe('Weather', function() {
    
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  // describe("check_weather", function() {
  //   it ('checks the weather', function() {
  //     expect(["sunny","stormy"]).toContain(weather.check_weather)
  //   });
  // });
  it("gives stormy sometimes", function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('gives not stormy other times', function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });

  
})