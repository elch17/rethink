function initMap() {
	var styledMapType = new google.maps.StyledMapType(
		[{
			"elementType": "geometry",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"elementType": "labels",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#939397"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"lightness": 100
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e2e3e6"
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "poi.attraction",
			"elementType": "geometry",
			"stylers": [{
				"color": "#cccbcd"
			}]
		}, {
			"featureType": "poi.business",
			"elementType": "geometry",
			"stylers": [{
				"color": "#cccbcd"
			}]
		}, {
			"featureType": "poi.government",
			"elementType": "geometry",
			"stylers": [{
				"color": "#cccbcd"
			}]
		}, {
			"featureType": "poi.medical",
			"elementType": "geometry",
			"stylers": [{
				"color": "#cccbcd"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#FFC0CB"
			}]
		}, {
			"featureType": "poi.place_of_worship",
			"elementType": "geometry",
			"stylers": [{
				"color": "#cccbcd"
			}]
		}, {
			"featureType": "poi.school",
			"elementType": "geometry",
			"stylers": [{
				"color": "#d1d0d2"
			}]
		}, {
			"featureType": "poi.sports_complex",
			"elementType": "geometry",
			"stylers": [{
				"color": "#cccbcd"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fbfcff"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#bde1f6"
			}]
		}], {
			name: 'Styled Map'
		});
	var myLatLng = {
		lat: 51.4584,
		lng: -2.6030
	};
	//var bounds = new google.maps.LatLngBounds();
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: myLatLng
	});
	var markerIcon = {
		url: './images/marker-flag.png',
		scaledSize: new google.maps.Size(40, 40),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(40, 40),
		labelOrigin: new google.maps.Point(0, 0)
	};
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
	var current_marker;

	function make_marker(l_lang) {
		if (current_marker) {
			current_marker.setMap(null);
		}
		newMarker = new google.maps.Marker({
			position: l_lang,
			map: map,
			icon: markerIcon,
			title: "New Marker"
		});
		current_marker = newMarker;
	}
	map.addListener('click', function(e) {
		document.getElementById("latlng").innerHTML = e.latLng;
		make_marker(e.latLng)
	});
}
