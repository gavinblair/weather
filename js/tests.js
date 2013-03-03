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
});