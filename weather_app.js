var lat;
var long;

// This if statement checks to see if the user location is available 
// if it is set there longtitude and latitude to the url/API
// else provide them with a answer not avaialable
// Run in codepen.io

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;
    

var data = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long;


//var data = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
//console.log(data);


$.getJSON(data, function(pro){
  
  
  
  // Get the weather of the current location
  var userWeather = pro.weather[0].main;
  // Changes Temperature to Faranheit
  const temp = (pro.main.temp*1.8)+32;
  
  icon = pro.weather[0].icon;
  var img= "<img src="+icon+">";
  
  // the variable number should display the numerical weather fromHTML
  $("#img").html(img);
  $("#temp").html(parseInt(temp)+"&#176");
  $("#toggle").attr("value","F"); 
  $("#cond").html(pro.weather[0].main);
  
        $("#toggle").on("click",function(){
          if(document.getElementById("toggle").value == "F"){
            $("#temp").html(parseInt(pro.main.temp)+"&#176");  
            $("#toggle").attr("value","C");
          } else {
          if(document.getElementById("toggle").value == "C"){
            $("#temp").html(parseInt(temp)+"&#176");  
            $("#toggle").attr("value","F");
          }
        } 
      });
    });
  });  
}
