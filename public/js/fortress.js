$(document).ready( function() {
	var html5 = new Image();
	html5.src = '/public/img/html5.png';
	html5.alt = 'HTML5';
	html5.id = 'html5';
	html5.onload = function() {
		console.log('loaded');
		$('body').append(html5);
		$('body').append($('<audio id="batman"><source src="/public/audio/batman.ogg" type="audio/ogg"><source src="/public/audio/batman.mp3" type="audio/mpeg"></audio>'));
		$('#html5').addClass('batmobile');
		if (!$('.played').length) {
			var batSound = $('#batman');
			batSound.get(0).play();
			$('#batman').addClass('played');
		}
	}	
});