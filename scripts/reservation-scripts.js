//change heading color on mouseover/mouseout
const reserve = document.getElementById('reserve');
function mouseOverColor(){
    reserve.style.color = "orange";
}//function mouseOverColor()
function mouseOutColor() {
    reserve.style.color = "rgb(76, 128, 161)";
}//function mouseOutColor()
reserve.addEventListener('mouseover', mouseOverColor);
reserve.addEventListener('mouseout', mouseOutColor);

//form validation for first/last name
function validateForm() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    if(fname == "" || /[^a-zA-Z]/.test(fname) ){
        alert("Please enter a valid first name!");
    }
    else if(lname == "" || /[^a-zA-Z]/.test(lname)) {
        alert("Please enter a valid last name!");
    }
}//function validateForm()
