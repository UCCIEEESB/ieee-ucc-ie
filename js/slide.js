$(document).ready(function() {
	var firstimage = document.getElementById('firstimageid');
    firstimage.style.display = 'none';
    firstimage.style.visibility = 'hidden';
    $('.slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});

