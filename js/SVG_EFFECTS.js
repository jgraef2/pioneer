
window.onload=function() {

  var sendbtn2 = document.getElementById("sendbtn2");

	// Get the Object by ID
	var a = document.getElementById("buttonbglines");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	var svgItem = svgDoc.getElementById("Mask_Group_201");
  window.alert("4");
	// Set the colour to something else
	svgItem.setAttribute("fill", "#5D0000");
  window.alert("5");

  sendbtn2.addEventListener('mouseover', function(){
    window.alert("moused over");
  svgItem.setAttribute("fill", "#F9423A");
  })
  sendbtn2.addEventListener('mouseout', function(){
  svgItem.setAttribute("fill", "#5D0000");
  })

};