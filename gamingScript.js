function openGame(platform) {
  var i;
  var x = document.getElementsByClassName("container-platform");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(platform).style.display = "block";  
}