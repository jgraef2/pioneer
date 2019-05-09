var scrolling = false;

$( window ).scroll( function() {
  scrolling = true;
});

setInterval( function() {
  if ( scrolling ) {
    scrolling = false;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
}, 250 );


// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

//function myFunction() {
//  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//  var scrolled = (winScroll / height) * 100;
//  document.getElementById("myBar").style.width = scrolled + "%";
//}
