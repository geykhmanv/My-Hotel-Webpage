 //change heading color on mouseover/mouseout
 const heading = document.getElementById('hotel-title');
 function mouseOverColor(){
     heading.style.color = "orange";
 }//function mouseOverColor()
 function mouseOutColor() {
     heading.style.color = "rgb(76, 128, 161)";
 }//function mouseOutColor()
 heading.addEventListener('mouseover', mouseOverColor);
 heading.addEventListener('mouseout', mouseOutColor);

 

//access weather API to show current weather in hotel location
window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"HL7SCS5VXL3SLQCDYVVQ9WCEV", //Sign up for your personal key
    location:"Puerto Vallarta, Mexico", //Enter an address
    unitGroup:"us", //"us" or "metric"
    forecastDays:5, //how many days forecast to show
    title:"Forecast, Puerto Vallarta", //optional title to show in the 
    showTitle:true, 
    showConditions:true
});

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
