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

// // this section is dedicated to the schedule-home section of the homepage
// var today = new Date();
// var now = today.getDay();
// var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

// // movie schedule:
// // var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/afa52b62887ed55475d095a8e18c5610b2444d28beb5b6ee2f322e6613374bad._V_SX1100_.jpg' width='341' height='192'>8:00PM THE BOYS</a>\
// // <a class='gallery-item'><img></a></div>"];

// var sunday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e0b488ba27c9c8842ff816ac04cfe2c7.jpe' width='341' height='192'>8:00PM HOW A REALIST HERO REBUILT THE KINGDOM</a>\
// <a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e0b488ba27c9c8842ff816ac04cfe2c7.jpe' width='341' height='192'>8:30PM HOW A REALIST HERO REBUILT THE KINGDOM</a>\
// <a class='gallery-item'><img></a></div>"];

// var weekdays = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='images/pokemon.jpg' width='341' height='192'>6:00PM POKEMON</a>\
// <a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/dcafd7710118830a6185f44f9667fe0c.jpe' width='341' height='192'>6:25PM THAT TIME I GOT REINCARNATED AS A SLIME</a>\
// <a class='gallery-item'><img></a>\
// <a class='gallery-item'><img></a></div>"];

// // var weekdays = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='images/pokemon.jpg' width='341' height='192'>6:00AM POKEMON</a>\
// // <a class='gallery-item'><img src='https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1319704/Latvian/1319704_Latvian\
// // _ShowMasterKeyArt_2f12eb78-deff-e611-8175-020165574d09.jpg' width='341' height='192'>6:25AM ONE PIECE</a>\
// // <a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1920x1080/catalog/crunchyroll/9daa2f17d7ad2727d72fdeaae6e232de.jpeg'\
// //  width='341' height='192'>6:45PM ATTACK ON TITAN</a>\
// // <a class='gallery-item'><img></a></div>"];

// // movie schedule:
// // var saturday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/55106611f3f44e55cb25b4da172baf2a.jpeg' width='341' height='192'>8:00PM DRESS UP DARLING</a>\
// // <a class='gallery-item'><img></a></div>"];

// var saturday = ["<br>", "<div class='gallery'><a class='gallery-item'><img></a><a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e0b488ba27c9c8842ff816ac04cfe2c7.jpe' width='341' height='192'>8:00PM HOW A REALIST HERO REBUILT THE KINGDOM</a>\
// <a class='gallery-item'><img src='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e0b488ba27c9c8842ff816ac04cfe2c7.jpe' width='341' height='192'>8:30PM HOW A REALIST HERO REBUILT THE KINGDOM</a>\
// <a class='gallery-item'><img></a></div>"];

// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// document.open();
// today = ' ' + mm + '/' + dd + '/' + yyyy;
// document.getElementById('schedule-contents').innerHTML += "<br>" + "<strong>" + days[now] + today;

// if(days[now] == "SUNDAY"){
//   for (var i=0; i < sunday.length; i++){
//     document.getElementById('schedule-contents').innerHTML += sunday[i];
//   }
// } else if(days[now] == "MONDAY" || days[now] == "TUESDAY" || days[now] == "WEDNESDAY" || days[now] == "THURSDAY" || days[now] == "FRIDAY"){
//   for (var i=0; i < weekdays.length; i++){
//     document.getElementById('schedule-contents').innerHTML += weekdays[i];
//   }
// } else if(days[now] == "SATURDAY"){
//   for (var i=0; i < saturday.length; i++){
//     document.getElementById('schedule-contents').innerHTML += saturday[i];
//   }
// }

// document.getElementById('schedule-contents').innerHTML += "<br>" + "<br>" + "<a href='airings.html'><center><strong>SEE THE ENTIRE SCHEDULE!</strong></center></a>";
// document.close();





















