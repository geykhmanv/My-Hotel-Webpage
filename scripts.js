const heading = document.getElementById('hotel-title');
function mouseOverColor(){
    heading.style.color = "orange";
}//function mouseOverColor()
function mouseOutColor() {
    heading.style.color = "rgb(76, 128, 161)";
}//function mouseOutColor()
heading.addEventListener('mouseover', mouseOverColor);
heading.addEventListener('mouseout', mouseOutColor);

