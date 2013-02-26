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

    /*asyncTest("Short Term Forecast", 5, function(){

        weather.updateShortTerm().done(function(data){
            equal(weather.shortterm.length, 4, "4 Periods");
            ok(weather.shortterm[0].english, "English is set");
            ok(weather.shortterm[0].low, "Low is set");
            ok(weather.shortterm[0].high, "High is set");
            ok(weather.shortterm[weather.shortterm.length-1].title, "Title is set");
            start();
        });
    });*/

    /*asyncTest("Long Term Forecast", 0, function(){
        var weather = new wunderground(apikey);

        weather.update_longterm().done(function(data){
            console.log(data);
            
            start();
        });
    });*/
});