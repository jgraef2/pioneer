
window.alert("JS connected");

window.onload=function() {
  window.alert("1");

	// Get the Object by ID
	var a = document.getElementById("buttonbglines");
  window.alert("2");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
  window.alert("3");
	// Get one of the SVG items by ID;
	var svgItem = svgDoc.getElementById("poop");
  window.alert("4");
	// Set the colour to something else
	svgItem.setAttribute("fill", "lime");
  window.alert("5");
};

var buttonbglines = document.getElementById("buttonbglines").contentDocument;
var sendbtn2 = document.getElementById("sendbtn2");

var fill = parseFloat(element.getAttributeNS(null, 'fill'));
element.setAttributeNS(null, 'fill', yellow);

sendbtn2.addEventListener('mouseover', function(){
  window.alert("moused over");
buttonbglines.style.fill = 'yellow';
})
sendbtn2.addEventListener('mouseout', function(){
buttonbglines.style.backgroundColor = 'yellow';
})
