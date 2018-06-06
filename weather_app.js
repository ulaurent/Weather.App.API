// Beginning of weather app

//var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";

//console.log(url);

//var request = new XMLHttpRequest();

var lat;
var long;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;
    })
  }
else{
    console.log('Location Not authorized');
    }

var url = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;
console.log(url);