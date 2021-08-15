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

var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://www.lovehkfilm.com/panasia/aj6293/hero_2007.jpg'\
 width='341' height='192'>8:00PM HERO</a>\
<a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/I/51kn%2B7NUtLL._SR600%2C315_PIWhiteStrip\
%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg' width='341' height='192'>9:10PM HIGH KICK THROUGH THE ROOF</a>\
<a class='gallery-item'><img></a></div>"];

var weekdays = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='images/pokemon.jpg' width='341' height='192'>6:45AM POKEMON</a>\
<a class='gallery-item'><img src='https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1319704/Latvian/1319704_Latvian\
_ShowMasterKeyArt_2f12eb78-deff-e611-8175-020165574d09.jpg' width='341' height='192'>7:15AM ONE PIECE</a>\
<a class='gallery-item'><img src='https://img3.hulu.com/user/v3/artwork/ca21d947-e5b1-4c5d-b973-f638016b112c?base_image_bucket_name=image_manager&base_image=9ab1514f-b4b2-4c1c-8905-4268a709e12f&size=1200x630&format=jpeg'\
 width='341' height='192'>7:30PM MOBILE SUIT GUNDAM WING</a>\
<a class='gallery-item'><img src='images/sket-dance.jpg' width='341' height='192'>7:15PM SKET DANCE</a>\
<a class='gallery-item'><img></a></div>"];

var saturday = ["<br>", "<a class='gallery-item'><img src='https://2.bp.blogspot.com/-eTzJlZTxFxc/VvdmKhBkK8I/AAAAAAAAD2k/XCD1a0HfRvApC0hbbWlJnfg6DPKAH32ug/w1200-h630-p-k-no-nu/My%2BLawyer.jpg' width='341' height='192'>8:00PM MY LAWYER, MR.JO</a>\
<a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/I/51kn%2B7NUtLL._SR600%2C315_PIWhiteStrip\
%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg' width='341' height='192'>9:10PM HIGH KICK THROUGH THE ROOF</a>\
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





















