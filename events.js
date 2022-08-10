// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var image1 = document.getElementById("mydest1");
var image2 = document.getElementById("mydest2");
var image3 = document.getElementById("mydest3");
var image4 = document.getElementById("mydest4");
var image5 = document.getElementById("mydest5");
var image6 = document.getElementById("mydest6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
image1.onclick = function() {
  modal1.style.display = "block";

}
image2.onclick = function() {
    modal2.style.display = "block";
    
span.onclick = function() {
    modal2.style.display = "none";}
  
  }
  image3.onclick = function() {
    modal3.style.display = "block";
  
  }
  image4.onclick = function() {
    modal4.style.display = "block";
  
  }
  image5.onclick = function() {
    modal5.style.display = "block";
  
  }
  image6.onclick = function() {
    modal6.style.display = "block";
  
  }


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";}
    if (event.target == modal2) {
    modal2.style.display = "none"; }
    if (event.target == modal3) {
    modal3.style.display = "none"; }
    if (event.target == modal4) {
    modal4.style.display = "none"; }
    if (event.target == modal5) {
    modal5.style.display = "none";}
    if (event.target == modal6) {
    modal6.style.display = "none";
  }
}