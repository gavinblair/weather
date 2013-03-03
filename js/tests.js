//Testing
$(document).ready(function($) {
    var apikey = '160caaa27c885952';
    /*asyncTest("Current Weather, imperial", 3, function(){
        var weather = new wunderground(apikey, 'imperial');

        weather.updateCurrent().done(function(data){
            ok(weather.current.english, "English is set");
            ok(weather.current.feelslike, "Feelslike is set");
            equal("f", weather.unit.code, "imperial means unit is F");
            start();
        });
    });*/

    /*asyncTest("Current Weather, metric", 3, function(){
        var weather = new wunderground(apikey, 'metric');

        weather.updateCurrent().done(function(data){
            ok(weather.current.english, "English is set");
            ok(weather.current.feelslike, "Feelslike is set");
            equal("c", weather.unit.code, "metric means unit is C");
            start();
        });
    });*/

    /*asyncTest("Current Weather, default system", 3, function(){
        var weather = new wunderground(apikey);

        weather.updateCurrent().done(function(data){
            ok(weather.current.english, "English is set");
            ok(weather.current.feelslike, "Feelslike is set");
            equal("c", weather.unit.code, "default unit is C");
            start();
        });
    });*/

    /*asyncTest("Forecast", 4, function(){

        weather.updateForecast().done(function(data){
            ok(weather.forecast[0].english, "English is set");
            ok(weather.forecast[0].low, "Low is set");
            ok(weather.forecast[0].high, "High is set");
            ok(weather.forecast[weather.forecast.length-1].title, "Title is set");
            start();
        });
    });*/
    
    /*asyncTest("numfader animateText", 1, function(){
        var el = document.createElement("el");
        var textfade = new numfader(el);
        var from=1, to=10, interval=100;
        textfade.animateText(from,to,interval);
        setTimeout(function(){
            ok(el.innerHTML == to, "animateText works");
            start();
        }, ((to-from)*interval)+interval);
    });*/

    /*asyncTest("numfader animateBackgroundColour", 1, function(){
        var el = document.createElement("el");
        var colfade = new numfader(el);
        var from={r: 255, g: 0, b: 0}, to={r: 0, g: 255, b: 0}, interval=10;
        colfade.animateBackgroundColour(from,to,interval);
        setTimeout(function(){ console.log(el.style.backgroundColor);
            ok(el.style.backgroundColor == 'rgb('+to.r+', '+to.g+', '+to.b+')', "animateBackgroundColour works");
            start();
        }, (280*interval)+interval);
    });*/
});