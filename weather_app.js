// Beginning of weather app

var url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";

//console.log(url);

var request = new XMLHttpRequest();

request.open('GET', url, true);

request.onload = function(){
    var data = JSON.parse(this.response);
   // console.log(data.coord);
   // console.log(data.weather[0].id);
    
    var longtitude = data.coord.lon;
    console.log(longtitude);
    
    var latitude = data.coord.lat;
    console.log(latitude);
    
   
}

request.send();