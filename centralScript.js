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

  timer = setTimeout(showSlides, 7000); // Change image every 7 seconds
}

//this section is dedicated to the schedule-home section of the homepage
var today = new Date();
var now = today.getDay();
var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img src='https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/\
AAABfbOU8mKtyRgZVrcJX81wOAhI4pwpIEnyIYMDN2tdxjV7g_iRrqKY57vSUWKNTCMj7cdgSjJ_RtcqL1IlkRlpvNN2cw.jpg?r=aed' width='341' height='192'>\
6:45PM ONE PUNCH MAN</a>\
<a class='gallery-item'><img src='images/hi-score-girl.jpg' width='341' height='192'>7:30PM HI SCORE GIRL</a>\
<a class='gallery-item'><img src='images/ixion-saga-dt.jpg' width='341' height='192'>8:00PM IXION SAGA DT</a>\
<a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/I/616PtfF59vL._UR300,300_BL99_UR987,555_CLa%7C987,555%7C616PtfF59vL\
.jpg%7C0,0,987,555+0,0,987,555_SX329_.jpg' width='341' height='192'>8:30PM UNSTOPPABLE HIGH KICK</a></div>"];

var weekdays = ["<br>", "<div class='gallery'><a class='gallery-item'><img src='images/pokemon.jpg' width='341' height='192'>7:00PM POKEMON</a>\
<a class='gallery-item'><img src='https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1319704/Latvian/1319704_Latvian\
_ShowMasterKeyArt_2f12eb78-deff-e611-8175-020165574d09.jpg' width='341' height='192'>7:30PM ONE PIECE</a>\
<a class='gallery-item'><img src='https://img1.hulu.com/user/v3/artwork/bac63af8-d526-437d-91e1-747ba6192e2e?base_image_bucket_name=image_manager\
&base_image=49f38735-ac6b-4ac5-984a-fff8daa41534&region=US&format=jpeg&size=952x536' width='341' height='192'>8:00PM GUNDAM SEED HD REMASTER</a>\
<a class='gallery-item'><img src='https://occ-0-37-33.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcMnPDGWeDHhf_b_psVFMl3DBPj1schm\
Ngj0hBa1ghsYPeBsdfMj4Nbf5MKsHMEnV9f7vKyf1V-b60hxhEL0XWdg6q0g.jpg?r=81c' width='341' height='192'>8:30PM THE DISASTROUS LIFE OF SAIKI K.</a></div>"];

var saturday = ["<br>", "<div class='gallery'><a class='gallery-item'><img src='https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/\
AAABfbOU8mKtyRgZVrcJX81wOAhI4pwpIEnyIYMDN2tdxjV7g_iRrqKY57vSUWKNTCMj7cdgSjJ_RtcqL1IlkRlpvNN2cw.jpg?r=aed' width='341' height='192'>\
6:45PM ONE PUNCH MAN</a>\
<a class='gallery-item'><img src='images/hi-score-girl.jpg' width='341' height='192'>7:30PM HI SCORE GIRL</a>\
<a class='gallery-item'><img src='images/ixion-saga-dt.jpg' width='341' height='192'>8:00PM IXION SAGA DT</a>\
<a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/I/616PtfF59vL._UR300,300_BL99_UR987,555_CLa%7C987,555%7C616PtfF59vL\
.jpg%7C0,0,987,555+0,0,987,555_SX329_.jpg' width='341' height='192'>8:30PM UNSTOPPABLE HIGH KICK</a></div>"];

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

document.open();
today = ' ' + mm + '/' + dd + '/' + yyyy;
document.getElementById('schedule-contents').innerHTML += "<br>" + "<strong>" + days[now] + today;

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

document.getElementById('schedule-contents').innerHTML += "<br>" + "<br>" + "<a href='airings.html'><center><strong>SEE THE ENTIRE SCHEDULE!</strong></center></a>";
document.close();





















