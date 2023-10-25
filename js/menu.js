var menu = document.getElementById("headerMenu");
var works = document.getElementById("headerWorks");
var worksMover = document.getElementById("headerWorksMover");
var aboutButton = document.getElementById("headerAboutButton");
var about = document.getElementById("headerAbout");


// Menu
works.addEventListener("click", function() {
  menu.classList.toggle("isClicked");
  worksMover.classList.toggle("isClicked");
});

// Click about
closeAbout.addEventListener("click", function(){
  about.classList.toggle("isClicked");
  closeAbout.classList.toggle("isClicked");
});