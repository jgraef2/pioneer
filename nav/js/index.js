var sidebarBox = document.querySelector('#box'),
sidebarbtn = document.querySelector('#btn'),
pageWrapper = document.querySelector('#page-wrapper');

window.onload=function(){
sidebarbtn.addEventListener('click', function (event) {
		sidebarbtn.classList.toggle('active');
		sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', function (event) {

		if (sidebarBox.classList.contains('active')) {
				sidebarbtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});
}

window.addEventListener('keydown', function (event) {

		if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
				sidebarbtn.classList.remove('active');
				sidebarBox.classList.remove('active');
		}
});
