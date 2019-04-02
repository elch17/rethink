var locations  = [["Brook Bristol", 51.457415, -2.592550, "category1",'Phone number: 0117 929 0090 </p><a href="http://www.brook.org.uk/bristol" target="blank">Visit website</a>',1],
            ["Students' Health Service - University of Bristol", 51.462075, -2.603802, "category1",'Phone number:  0117 330 2720 </p><a href="http://www.bristol.ac.uk/students-health/services/sexual-health/" target="blank">Visit website<a/>',0],
            ["Unity Sexual Health", 51.454382, -2.585885, "category1",'Phone number: 0117 342 6900 </p><a href="https://www.unitysexualhealth.co.uk/" target="blank">Visit website</a>',1],
            ["Bristol Sexual Health Center, University Hospitals Bristol", 51.458513, -2.596324, "category1",'Phone number: 0117 342 6900</p> <a href=" http://www.bristolsexualhealth.nhs.uk" target="blank">View website</a>',0],
            ["South Bristol Sexual Health Clinic", 51.412784, -2.582748, "category1",'Phone number: 0117 342 6900</p> <a href="https://www.wellaware.org.uk/organisation/south-bristol-sexual-health-clinic/" target="blank">Visit website</a>',0],
            ["Boots",51.456999, -2.607489, "category2",'Tampax Regular Tampons 18x Price: £3.15 </p> <a href="https://bit.ly/2HPzqIr" target="blank">Visit website</a>',0],
            ["Co-op",51.461232, -2.602280,"category2",'Tampax Regular Tampons 18x Price: £2.95</p> <a href="https://food.coop.co.uk/" target="blank">Visit website</a>',1],
            ["Sainsbury",51.464562, -2.609819,"category2",'Tampax Regular Tampons 18x Price: £2.00</p> <a href="https://bit.ly/2YHyZ8f" target="blank">Visit website </a>',0],
            ["Tesco",51.452612, -2.599912,"category2",'Tampax Regular Tampons 18x Price: £2.35</p> <a href="https://bit.ly/2FKkOGu" target="blank">Visit website',0],
            ["Wilkos",51.456635, -2.606754,"category2",'Tampax Regular Tampons 18x Price: £3.00</p> <a href="https://bit.ly/2TJvjix" target="blank">Visit website</a>',0],
          ]


var markers = [];
var i, newMarker;
var globalmap; //so can getmap later
var globalbounds;
var g_marker,g_marker_zoom;

function initMap() {
  var styledMapType = new google.maps.StyledMapType(
  [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#939397"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "lightness": 100
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e2e3e6"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffc0cb"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d1d0d2"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#cccbcd"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fbfcff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#bde1f6"
      }
    ]
  }
],
{name: 'Styled Map'});

var myLatLng = {lat: 51.4584, lng: -2.6030};

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: myLatLng
});
globalmap = map; //workaround for setting varible to global

var bounds = new google.maps.LatLngBounds(); //sets up bounds
globalbounds = bounds; //workaround for setting varible to global

var markerIcon = {
  url: './images/markerflag.png',
  scaledSize: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(40,40),
  labelOrigin: new google.maps.Point(0,0)
};

g_marker = markerIcon; //workaround for setting variable to global (again)

var markerIcon_zoom = {
  url: './images/marker-flag.png',
  scaledSize: new google.maps.Size(50, 50),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(50,50), //bottom right corner
  labelOrigin: new google.maps.Point(0,0)
};

g_marker_zoom = markerIcon_zoom;

//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');

var bounds = new google.maps.LatLngBounds; //create new bounds object

//display all locations as default
for (i = 0; i < locations.length; i++) {
   newMarker = new google.maps.Marker({
     position: {lat: locations[i][1], lng: locations[i][2]},
     map: map,
     icon: markerIcon,
     title: locations[i][0]
   });

  //might need to rename this for each marker
  newMarker.name = locations[i][0];
  newMarker.category = locations[i][3];
  newMarker.description = locations[i][4];
  newMarker.discount = locations[i][5];
  newMarker.popupAdded = 0; //tracking popupaddition
  newMarker.setVisible(true); //
  markers.push(newMarker);

  makePopups(newMarker); //make popups currently includes popup and setvisible
  newMarker.popupAdded = 1;
  newMarker.popup.close() //close all popups when change category

  makeHover(newMarker,markerIcon,markerIcon_zoom)

  bounds.extend(
      new google.maps.LatLng(
        newMarker.position.lat(),
        newMarker.position.lng()
      )
    );

 }

globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
} //from initMap


var categories = {
 1: 'category1',
 2: 'category2',
};


function makeHover(m,icon,icon_zoom) {
  google.maps.event.addListener(m, 'mouseover', function() {
  m.setIcon(icon_zoom);
  });

  google.maps.event.addListener(m, 'mouseout', function() {
  m.setIcon(icon);
  });

}

function makePopups(m,icon,icon_zoom) {

  if(m.popupAdded == 0){
  var desc = '<h2>' + m.name +'</h2>' + '</br><p>'+ m.description + '</p>';
  var infowindow = new google.maps.InfoWindow({
    content: desc,
  });

  m.popup = infowindow; //add popup to list that we can retrieve later to close popups

  m.addListener('click', function() {
    //setIconsSmall(icon); //sets all others temporarily to small

    closeAllPopups()
    infowindow.open(map, m);
    });
  }
}


function setvis(m,v) {
  m.setVisible(v);
}



//triggered when changing category
function displayMarkers(category) {
var bounds = new google.maps.LatLngBounds; //create new bounds object

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   var test = categories[category];
   makePopups(markers[i],g_marker,g_marker_zoom); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].category === test) {
     setvis(markers[i],true);

     bounds.extend(
         new google.maps.LatLng(
           markers[i].position.lat(),
           markers[i].position.lng()
         )
       );

   }
   else {
     setvis(markers[i],false);
   }
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}


function closeAllPopups() {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].popup.close() //close all popups when change category
   }

}

function setIconsSmall(icon) {
  //loops through table and closes all popups
   for (i = 0; i < markers.length; i++) {
     markers[i].setIcon(icon);//set all others to small (can still be moused over)
   }

}

function displayDiscounts(discount_bool) { //1 if discount offered, 0 if no discount offered
var bounds = new google.maps.LatLngBounds; //create new bounds object

//decoupled popups from category selector
 for (i = 0; i < markers.length; i++) {
   makePopups(markers[i]); //make popups currently includes popup and setvisible
   markers[i].popupAdded = 1;
   markers[i].popup.close() //close all popups when change category

   if (markers[i].discount === discount_bool) {
     setvis(markers[i],true);

     bounds.extend(
         new google.maps.LatLng(
           markers[i].position.lat(),
           markers[i].position.lng()
         )
       );

   }
   else {
     setvis(markers[i],false);
   }
 }
 globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
}
