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

//submit comments and display them
var x = 0;
var reviewArray = Array();

function addComment() {
    reviewArray[x] = document.getElementById("comment").value;
 alert("Comment submitted");
 x++;
 document.getElementById("comment").value = "";
}//function addComment()

function displayComment() {
   var e = "<br>";   
   for (var i=0; i < reviewArray.length; i++){
     e += "Review: " + reviewArray[i] + "<br/>";
   }//for (var i=0; i<reviewArray.length; i++)
   document.getElementById("Result").innerHTML = e;
}//function displayComment()