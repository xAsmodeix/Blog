$(document).ready(function($) {
	var menuLink = '.top-menu-link';
	var linkContainer = '.top-menu-item-big';
	var menuDropdown = '.sub-menu';
	var timeOut = 400;

	var smMenuButton = '.menu-button';
	var smMenuDrop = '.dropdown-sm';
	var subMenuButton = '.sm-menu-link';
	var subMenuDrop = '.sub-menu-sm';


	$(menuLink).hover(function(event) {
		var dropdown = $(this).parent().children(menuDropdown);
		if(dropdown.length != 0){
			$(dropdown).slideToggle(timeOut);
		}
	});

	$(subMenuButton).click(function(event) {
		var dropdown = $(this).parent().children(subMenuDrop);
		if(dropdown.length != 0){
			$(dropdown).slideToggle(timeOut);
		}
	});

	$(smMenuButton).click(function(event) {
		$(smMenuDrop).slideToggle(timeOut);
	});


});