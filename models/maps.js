function initialize_gmaps(){
	var myLatlng = new google.map.Latlng(40, -74);
	var mapOptions = {
		center: myLatlng,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map_canvas_obj = document.getElementById('map-canvas');
	var map = new google.maps.Map(map_canvas_obj, mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		title: "Test Title"
	});

	marker.setMap(map);
}

/*
$(document).ready(function(){
	initialize_gmaps();
})
*/