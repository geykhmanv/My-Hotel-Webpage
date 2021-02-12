//change heading color on mouseover/mouseout
const heading = document.getElementById('contact-us');
function mouseOverColor(){
    heading.style.color = "orange";
}//function mouseOverColor()
function mouseOutColor() {
    heading.style.color = "rgb(76, 128, 161)";
}//function mouseOutColor()
heading.addEventListener('mouseover', mouseOverColor);
heading.addEventListener('mouseout', mouseOutColor);

//store customer reviews in array and show them on click of button
const reviewsArr = ["great", "wonderful", "terrible"];
function readReviews() {
    for(let i=0; i < reviewsArr.length; i++) {
        document.getElementById('customer-reviews').innerHTML += "<p>" + reviewsArr[i] + "</p><br>";
        console.log(reviewsArr[i]);
    }//for(let i=0; i < reviewsArr.length; i++) 
}//function readReviews()