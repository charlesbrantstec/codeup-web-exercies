$(function(){

    let lat0 = 29.421;
    let lon0 = -98.4936;

    function updateWeather(lat0, lon0){
        $.get("http://api.openweathermap.org/data/2.5/onecall", {
            APPID: openWeatherMapKey,
            lat: lat0,
            lon: lon0,
            units: "imperial"
        }).done(function(data){
            // console.log(data);
            for(let i = 0; i < 5; i++){
                let cardId = '#card' + i;
                let date = new Date(data.daily[i].dt * 1000);
                $(cardId + ' #weatherDate').html(date.toDateString());
                $(cardId + " #highLowTemp").html("High " + data.daily[i].temp.max + "&deg;F/Low " + data.daily[0].temp.min + "&deg;F");
                $(cardId + " #humidity").html(data.daily[i].humidity + "% Humidity");
                $(cardId + " #wind").html("Wind Speed: " + data.daily[i].wind_speed + " mph");
                $(cardId + " #pressure").html("Pressure: " + data.daily[i].pressure);
            }
        });
        marker.setLngLat([lon0,lat0]);
    }

    $(document).ready(function (){
        updateWeather(lat0,lon0)
    })

    mapboxgl.accessToken = mapBoxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: ([lon0, lat0]),
        zoom: 4
    });

    var marker = new mapboxgl.Marker({
    })
        .setLngLat([lon0,lat0])
        .addTo(map);

    map.on('click', addMarker);
    function addMarker(e){
        console.log(e);
        marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
        updateWeather(e.lngLat.lat, e.lngLat.lng);
    }

    $('#gbutton').click(function (e){
        e.preventDefault();
        var htmlString = $('#geokode').val();
        geocode(htmlString, mapBoxKey).then(function (coordinates){
            console.log(coordinates)
            updateWeather(coordinates[1], coordinates[0]);
            map.flyTo({
                center: [coordinates[0], coordinates[1]]
            })
        })
    })
})
