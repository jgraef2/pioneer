$(document).ready(function() {
var buttonbglines = document.getElementById("buttonbglines");
var sendbtn2 = document.getElementById("sendbtn2")

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
buttonbglines.addEventListener("load",function(){
  // get the inner DOM of image
  var svgDoc = buttonbglines.contentDocument;
  // get the inner element by id (in my svg I have a path i need to change with
  //id='Hat')
  var area = svgDoc.getElementById("buttonbglines");
  // add behaviour
  sendbtn2.addEventListener("mouseover",function(){
   area.style.fill = '#F9423A'
  });
  sendbtn2.addEventListener('mouseout', function(){
   area.style.fill = '#5D0000'
  })
});
