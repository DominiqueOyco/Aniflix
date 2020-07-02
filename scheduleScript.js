function openDate(givenDay) {
  var i;
  var x = document.getElementsByClassName("container-date");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(givenDay).style.display = "block";  
}