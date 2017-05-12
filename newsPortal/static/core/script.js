var widths = {
	640: 2,
	1024: 3,
	1440: 4
}

var heights = []
var def_space = 10;
var def_width = 340;
var post_class = 'post';
var post_container_class = 'page-content-wrapper-inner';

function placePosts(post_class, cont_class){
	var perRow = countPerRow();
	var container = document.getElementsByClassName(cont_class)[0];
	setPostContainerWidth(perRow, def_width, container);
	var posts = document.getElementsByClassName(post_class);
	placePostsByRows(posts, perRow);
	var container_height = calculateHeight(Array.from(posts), perRow);
	setContainerHeight(container, container_height);

}

function countPerRow(){
	var per_row = 4;
	var size = window.screen['availWidth'];
	for(var width in widths){
		if (size < width){
			per_row = widths[width] - 1;
			break;
		}
	}
	if (per_row == 1){
		def_space = 0;
		def_width = 320;
	}
	return per_row;
}


function placePostsByRows(posts, per_row){
	var left = 0;
	var top = 0;
	var counter = 0;
	Array.from(posts).forEach(function(item, i, arr){
		marginRight = 0;
		if (i % per_row == 0){
			left = 0;
			counter = 0;
		}
		if (i >= per_row){
			var prev_post = posts[i - per_row];
			top = prev_post.offsetHeight + Number(erase_px(prev_post.style.top)) + def_space;
		}
		left = counter*def_width + def_space;
		props = {
			'top': make_px(top), 
			'left': make_px(left),
		};
		applyProps(item, props);
		counter++;
	});
}


function applyProps(post, props){
	post.style.top = props['top'];
	post.style.left = props['left'];
}

function setPostContainerWidth(per_row, post_width, container){
	container.style.width = make_px(post_width*per_row);
}

function setContainerHeight(container, final_height){
	container.style.height = make_px(final_height);
}


function calculateHeight(posts_sequence, per_row){
	var max_height = 0;
	var rowsNum = Number(posts_sequence.length/per_row) + 1;
	var counter = 0;
	var final_height = 0;
	while(counter < posts_sequence.length){
		var end = counter + per_row + 1;
		var row = posts_sequence.slice(counter, end);
		row.forEach(function(item, i, arr){
			if (item.offsetHeight > max_height){
				max_height = item.offsetHeight;
			}
		});
		final_height += max_height;
		counter += per_row;
	}
	return final_height + 50;
}



function make_px(text){
	return text + 'px';
}

function erase_px(text){
	return text.replace(/px/g, '');
}

function print(text){
	console.log(text)
}



$(document).ready(function($) {
	var menuLink = '.top-menu-link';
	var linkContainer = '.top-menu-item-big';
	var menuDropdown = '.sub-menu';
	var timeOut = 400;

	var smMenuButton = '.menu-button';
	var smMenuDrop = '.dropdown-sm';
	var subMenuButton = '.sm-menu-link';
	var subMenuDrop = '.sub-menu-sm';

	placePosts(post_class, post_container_class);


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