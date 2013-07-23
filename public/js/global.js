function openNav() {
	document.getElementsByTagName('body')[0].className = 'menu-open';
	document.getElementById('menu-button').className = 'active';
	clicked = false;
}
function closeNav() {
	document.getElementsByTagName('body')[0].className = '';
	document.getElementById('menu-button').className = '';
	document.getElementById('menu-button').blur();
	clicked = false;
}
var clicked = false;
function removeMenuButton() {
	var navlinks = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
	for (var i=0; i<navlinks.length; i++) {
		navlinks[i].onfocus = '';
		navlinks[i].onblur = '';
		navlinks[i].onmouseover = '';
		navlinks[i].blur();
	}
}
function addMenuButton() {
	if (!document.getElementById('menu-button')) {
		var button = document.createElement('a');
		button.id = 'menu-button';
		button.href = '#';
		button.onmousedown = function() {
			clicked = true;
		}
		button.onclick = function() {
			if (this.className === 'active') {
				closeNav();
				this.blur();
			}
			else {
				openNav();
				document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0].focus();
			}
			return false;
		}
		document.getElementsByTagName('header')[0].appendChild(button);
	}
	var navlinks = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
	for (var i=0; i<navlinks.length; i++) {
		navlinks[i].onfocus = function() {
			if (document.getElementById('menu-button').className !== 'active') {
				openNav();
			}
		}
		navlinks[i].onblur = function() {
			if (i+1 > navlinks.length && clicked === false) {
				closeNav();
			}
		}
		navlinks[i].onmouseover = function() {
			this.focus();
		}
	}
	return false;
}

window.onload = function() {
	if (window.innerWidth < 800) {
		addMenuButton();
	}
};
window.onresize = function() {
	if (window.innerWidth < 800) {
		addMenuButton();
	}
	else {
		closeNav();
		removeMenuButton();
	}
}