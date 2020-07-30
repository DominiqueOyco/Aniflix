var slideIndex = 1;
var timer = null;
// showSlides();
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n==undefined){
    n = ++slideIndex
  }

  if (n > slides.length){
    slideIndex = 1
  }

  if (n < 1){
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  timer = setTimeout(showSlides, 7000); // Change image every 5 seconds
}

//this section is dedicated to the schedule-home section of the homepage
var today = new Date();
var now = today.getDay();
var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
var sunday = ["<br>", "8:00PM - ONE PUNCH MAN", "<br>", "<br>", "8:30PM - ROBIHACHI", "<br>", "<br>", "9:00PM - UNSTOPPABLE HIGH KICK", "<br>", "<br>"];
var weekdays = ["<br>", "5:00PM - POKEMON", "<br>", "<br>", "5:30PM - ONE PIECE", "<br>", "<br>", "7:45PM - GOLGO 13", "<br>", "<br>", "8:15PM - MONSTER", "<br>", "<br>", "8:45PM - OUTLAW STAR", "<br>", "<br>", "9:15PM - SPACE BROTHERS", "<br>", "<br>"];
var saturday = ["<br>", "8:00PM - HANDA KUN", "<br>", "<br>", "8:30PM - D-FRAG", "<br>", "<br>", "9:00PM - UNSTOPPABLE HIGH KICK", "<br>", "<br>"];
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

document.getElementById('schedule-contents').innerHTML += "<strong>" + days[now];
today = ' ' + mm + '/' + dd + '/' + yyyy;
document.getElementById('schedule-contents').innerHTML += "<strong>" + today + "<br> <br>";

if(days[now] == "SUNDAY"){
  for (var i=0; i < sunday.length; i++){
    document.getElementById('schedule-contents').innerHTML += sunday[i];
  }
} else if(days[now] == "MONDAY" || days[now] == "TUESDAY" || days[now] == "WEDNESDAY" || days[now] == "THURSDAY" || days[now] == "FRIDAY"){
  for (var i=0; i < weekdays.length; i++){
    document.getElementById('schedule-contents').innerHTML += weekdays[i];
  }
} else if(days[now] == "SATURDAY"){
  for (var i=0; i < saturday.length; i++){
    document.getElementById('schedule-contents').innerHTML += saturday[i];
  }
}

document.getElementById('schedule-contents').innerHTML += "<br>" + "<a href='airings.html'><strong>SEE THE ENTIRE SCHEDULE!</strong></a>";




















