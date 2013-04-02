
/*
test( "hello test", function() {
  ok( 0 == "1", "Passed!" );
});
*/

var apikey = 'test';

asyncTest("updatecurrent", 2, function(){
    var weather = new Wunderground(apikey, 'metric');

    weather.updateCurrent().done(function(data){
        ok(weather.current.english, "English is set");
        ok(weather.current.feelslike, "Feelslike is set");
        start();
    });
});

asyncTest("Forecast", 4, function(){
    var weather = new Wunderground(apikey, 'metric');
    weather.updateForecast().done(function(data){
        ok(weather.forecast[0].english, "English is set");
        ok(weather.forecast[0].low, "Low is set");
        ok(weather.forecast[0].high, "High is set");
        ok(weather.forecast[weather.forecast.length-1].title, "Title is set");
        start();
    });
});

    /*asyncTest("numfader animateText", 1, function(){
        var el = document.createElement("el");
        var textfade = new numfader(el);
        var from=1, to=10, interval=100;
        textfade.animateText(from,to,interval, function(){
            ok(el.innerHTML == to, "animateText works");
            start();
        });
    });*/

    /*asyncTest("numfader animateBackgroundColour", 1, function(){
        var el = document.createElement("el");
        var colfade = new numfader(el);
        var from={r: 255, g: 0, b: 0}, to={r: 0, g: 255, b: 0}, interval=10;
        colfade.animateBackgroundColour(from,to,interval, function(){
            ok(el.style.backgroundColor == 'rgb('+to.r+', '+to.g+', '+to.b+')', "animateBackgroundColour works");
            start();
        });
    });*/
//});