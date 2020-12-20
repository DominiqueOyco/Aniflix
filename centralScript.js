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

var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://derf9v1xhwwx1.cloudfront.net/image/\
upload/oth/FunimationStoreFront/1289756/Latvian/1289756_Latvian_ShowMasterKeyArt_457de37e-deff-e611-8175-020165574d09.jpg'\
 width='341' height='192'>7:30PM GANGSTA</a>\
<a class='gallery-item'><img src='images/arakawa.jpg' width='341' height='192'>8:00PM ARAKAWA UNDER THE BRIDGE</a>\
<a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/I/51kn%2B7NUtLL._SR600%2C315_PIWhiteStrip\
%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg' width='341' height='192'>8:30PM HIGH KICK THROUGH THE ROOF</a>\
<a class='gallery-item'><img></a></div>"];

var weekdays = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='images/pokemon.jpg' width='341' height='192'>6:00PM POKEMON</a>\
<a class='gallery-item'><img src='https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1319704/Latvian/1319704_Latvian\
_ShowMasterKeyArt_2f12eb78-deff-e611-8175-020165574d09.jpg' width='341' height='192'>6:30PM ONE PIECE</a>\
<a class='gallery-item'><img src='https://occ-0-37-33.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSGuGunJ1q8DS1YJwcrkcd03BM3M\
j3NklkDr_hswk6brMQcB4iUBCNCZeLW3sFAxYYgJOlGr2SXgx2IukQJ8sbsyr_w.jpg?r=9ee' width='341' height='192'>7:00PM AVATAR: THE LAST AIRBENDER</a>\
<a class='gallery-item'><img src='images/samurai-champloo.jpg' width='341' height='192'>7:30PM SAMURAI CHAMPLOO</a>\
<a class='gallery-item'><img src='https://occ-0-37-33.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQIB6h1Hz-E86I9HSBytJgj7joTVL6Kt\
btbq9RsfN2xaxpqa-mM0FidPZ7tIdcs3u7z6U7C7pWqvjYXj9o-Rxbegsfo.jpg?r=520' width='341' height='192'>8:00PM FULLMETAL ALCHEMIST</a>\
<a class='gallery-item'><img src='https://occ-0-37-33.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcMnPDGWeDHhf_b_psVFMl3DBPj1schm\
Ngj0hBa1ghsYPeBsdfMj4Nbf5MKsHMEnV9f7vKyf1V-b60hxhEL0XWdg6q0g.jpg?r=81c' width='341' height='192'>8:30PM THE PRINCE OF TENNIS</a>\
<a class='gallery-item'><img></a></div>"];

var saturday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='images/kids-on-a-slope.jpg'\
 width='341' height='192'>7:30PM KIDS ON A SLOPE</a>\
<a class='gallery-item'><img src='images/arakawa.jpg' width='341' height='192'>8:00PM ARAKAWA UNDER THE BRIDGE</a>\
<a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/I/51kn%2B7NUtLL._SR600%2C315_PIWhiteStrip\
%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg' width='341' height='192'>8:30PM HIGH KICK THROUGH THE ROOF</a>\
<a class='gallery-item'><img></a></div>"];

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





















