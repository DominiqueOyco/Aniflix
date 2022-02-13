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

var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7d180157b50c4264ad1f\
a33deba3b1898f09ffa22ca26621b2f70b66f77aba68._UY500_UX667_RI_V_TTW_.jpg' width='341' height='192'>8:00PM PERSONA 3</a>\
<a class='gallery-item'><img></a></div>"];

// var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png'\
//  width='341' height='192'>8:00PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png' width='341' height='192'>8:30PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png' width='341' height='192'>9:00PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png' width='341' height='192'>9:30PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img></a></div>"];

var weekdays = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='images/pokemon.jpg' width='341' height='192'>6:45AM POKEMON</a>\
<a class='gallery-item'><img src='https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1319704/Latvian/1319704_Latvian\
_ShowMasterKeyArt_2f12eb78-deff-e611-8175-020165574d09.jpg' width='341' height='192'>7:15AM ONE PIECE</a>\
<a class='gallery-item'><img src='images/p4.jpg'\
 width='341' height='192'>6:45PM PERSONA 4: THE ANIMATION</a>\
<a class='gallery-item'><img src='https://img1.ak.crunchyroll.com/i/spire2/b3b313c3f65e9595ef69742d53cd622e1282761740_full.jpg' width='341' height='192'>7:15PM HAYATE THE COMBAT BUTLER</a>\
<a class='gallery-item'><img></a></div>"];

var saturday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7d180157b50c4264ad1f\
a33deba3b1898f09ffa22ca26621b2f70b66f77aba68._UY500_UX667_RI_V_TTW_.jpg' width='341' height='192'>8:00PM PERSONA 3</a>\
<a class='gallery-item'><img></a></div>"];

// var saturday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7d180157b50c4264ad1f\
// a33deba3b1898f09ffa22ca26621b2f70b66f77aba68._UY500_UX667_RI_V_TTW_.jpg' width='341' height='192'>8:00PM PERSONA 3</a>\
// <a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png' width='341' height='192'>8:30PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png' width='341' height='192'>9:00PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img src='https://static.hidive.com/news/2020/06/domestic-girlfriend-uncensored-hidive-836x470.png' width='341' height='192'>9:30PM DOMESTIC GIRLFRIEND</a>\
// <a class='gallery-item'><img></a></div>"];

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





















