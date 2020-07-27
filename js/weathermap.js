$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeatherMapKey,
    // q:     "San Antonio, US",
    lat: 29.4241,
    lon: -98.4936,
    units: "imperial"
}).done(function(data){
    console.log(data);
    for(let i = 0; i < 5; i++){
        let cardId = '#card' + i;
        let date = new Date(data.daily[i].dt * 1000);
        $(cardId + ' #weatherDate').html(date.toDateString());
        $(cardId + " #highLowTemp").html("High " + data.daily[i].temp.max + "&deg;F / Low " + data.daily[0].temp.min + "&deg;F");
        $(cardId + " #humidity").html(data.daily[i].humidity + "% Humidity");
        $(cardId + " #wind").html("Wind Speed: " + data.daily[i].wind_speed + " mph");
        $(cardId + " #pressure").html("Pressure: " + data.daily[i].pressure);
    }
});
mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.491142, 29.424349],
    zoom: 15.8

});


