var mapStyleValues = [{
  elementType: 'geometry',
  stylers: [{
    color: '#ebe3cd'
  }]
}, {
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#523735'
  }]
}, {
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#f5f1e6'
  }]
}, {
  featureType: 'administrative',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#c9b2a6'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#dcd2be'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'administrative.land_parcel',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#ae9e90'
  }]
}, {
  featureType: 'landscape.natural',
  elementType: 'geometry',
  stylers: [{
    color: '#b5b292'
  }]
}, {
  featureType: 'poi',
  elementType: 'geometry',
  stylers: [{
    color: '#dfd2ae'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels.text',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#93817c'
  }]
}, {
  featureType: 'poi.attraction',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#dfd2ae'
  }]
}, {
  featureType: 'poi.attraction',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#93817c'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#b2b592'
  }]
}, {
  featureType: 'poi.park',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#b5b292'
  }]
}, {
  featureType: 'poi.place_of_worship',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#dfd2ae'
  }]
}, {
  featureType: 'poi.place_of_worship',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#93817c'
  }]
}, {
  featureType: 'road',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#9E9E9E'
  }]
}, {
  featureType: 'road.highway.controlled_access',
  elementType: 'geometry',
  stylers: [{
    color: '#d5d3bf'
  }]
}, {
  featureType: 'road.highway.controlled_access',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#db8555'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#806b63'
  }]
}, {
  featureType: 'transit',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'geometry',
  stylers: [{
    color: '#dfd2ae'
  }, {
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#8f7d77'
  }, {
    visibility: 'off'
  }]
}, {
  featureType: 'transit.line',
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#ebe3cd'
  }, {
    visibility: 'off'
  }]
}, {
  featureType: 'transit.station',
  elementType: 'geometry',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'water',
  elementType: 'geometry.fill',
  stylers: [{
    color: '#b9d3c2'
  }]
}, {
  featureType: 'water',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#92998d'
  }]
}];

var authorFavorites = [{
  "geometry": {
    "location": {
      "lat": 41.89021020000001,
      "lng": 12.492230899999981
    }
  },
  "placeId": "ChIJrRMgU7ZhLxMRxAOFkC7I8Sg"
},{
  "geometry": {
    "location": {
      "lat": 41.8897697,
      "lng": 12.49060170000007
    }
  },
  "placeId": "ChIJn8yMY7ZhLxMRoGckLEOtWZU"
},{
  "geometry": {
    "location": {
      "lat": 41.8991633,
      "lng": 12.473074199999928
    }
  },
  "placeId": "ChIJPRydwYNgLxMRSjOCLlYkV6M"
},{
  "geometry": {
    "location": {
      "lat": 41.9009325,
      "lng": 12.483312999999953
    }
  },
  "placeId": "ChIJ1UCDJ1NgLxMRtrsCzOHxdvY"
},{
  "geometry": {
    "location": {
      "lat": 41.895833,
      "lng": 12.484298999999965
    }
  },
  "placeId": "ChIJH-4j1LJhLxMR6IviSs42yJ0"
},{"geometry": {
    "location": {
      "lat": 41.8924623,
      "lng": 12.485324999999989
    }
  },
  "placeId": "ChIJ782pg7NhLxMR5n3swAdAkfo"
},{
  "geometry":{
    "location":{
      "lat": 41.8906973,
      "lng": 12.488649500000065
    }
  },
  "placeId": "ChIJX9gmMbRhLxMRc_L8Li9bAhk"
},{
  "geometry": {
    "location": {
      "lat": 41.89925940000001,
      "lng": 12.471616199999971
    }
  },
  "placeId": "ChIJL87HTUVgLxMRMJl5wXE4U5o"
},{
  "geometry": {
    "location": {
      "lat": 41.89412430000001,
      "lng": 12.489454499999965
    }
  },
  "placeId": "ChIJ7avK3rNhLxMRAouSFEzwbkA"
},{
  "geometry": {
    "location": {
      "lat": 41.89592440000001,
      "lng": 12.479862300000036
    }
  },
  "placeId": "ChIJK1-CN0xgLxMRZukH0_lPL70"
},{
  "geometry": {
    "location": {
      "lat": 41.8988438,
      "lng": 12.47255169999994
    }
  },
  "placeId": "ChIJ88WtV0VgLxMRUbkqM8OUa4k"
},{
  "geometry": {
    "location": {
      "lat": 41.9027135,
      "lng": 12.462295499999982
    }
  },
  "placeId": "ChIJL-vHo11gLxMRcD2yiIungXY"
}];

var curPlaceId;
var map;
var infoWindow;
var service;
var markers = [];
var minRating = 4;
var savedPlaces = [];

var title;
var saveImg;
var saveAlt;
var placeImgHTML;
var placeImgURL;
var rating;
var websiteText;
var websiteURL;
var snippet;
var wikiText;
var wikiURL;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 41.88973272,
      lng: 12.49120496

    },
    zoom: 16,
    styles: mapStyleValues
  });

  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  // Get saved locations array, if exists
  var localSave = localStorage.getItem('persistSavedPlaces');
  if (localSave != 'undefined' && localSave !== null) {
    savedPlaces = JSON.parse(localSave);
  }

  google.maps.event.addListenerOnce(map, 'idle', function() {
    performKeywordSearch('Tourist Destination');
  });

}

function performKeywordSearch(keyword) {
  deleteMarkers();

  var request = {
    bounds: map.getBounds(),
    language: 'en',
    rankBy: google.maps.places.RankBy.PROMINENCE,
    keyword: [keyword]
  };

  service.nearbySearch(request, callback);
}

function performTypeSearch(type) {
  deleteMarkers();

  var request = {
    bounds: map.getBounds(),
    language: 'en',
    rankBy: google.maps.places.RankBy.PROMINENCE,
    types: [type]
  };

  service.nearbySearch(request, callback);
}

function addMarkersFromList(list) {
  deleteMarkers();

  for (entry in list) {
    addMarker(list[entry]);
  }
}

// deleteMarkers is an adaptation of code found:
// https: developers.google.com/maps/documentation/javascript/examples/marker-remove
// Deletes all markers in the array
function deleteMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function callback(results, status) {
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    console.error(status);
    return;
  }
  // Success - Write markers to map
  for (var i = 0, result; result = results[i]; i++) {
    // Only write markers with a rating higher than minRating
    // Also filters those with no rating
    if (result.rating > minRating) {
      addMarker(result);
    }
  }
}

function addMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    placeId: place.place_id,
    position: place.geometry.location
  });

  // Listener function for marker click
  google.maps.event.addListener(marker, 'click', (function(marker, place) {

    return function() {
      service.getDetails(place, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        // Used for toggleSavedPlace - allows html to refer to variable
        curPlaceId = place;
        // Wikipedia sentences and link are added to infoWindow if/when data is returned
        addWikiInfo(result.name);               // asynchronous
        addPlaceImg(place);                     // asynchronous
        addSavedIndicator(isSavedPlace(place)); // local
        addGMapsInfo(result);                   // Add name, photo, rating, website
        openInfoWindow(marker);
      });
    };
  })(marker, place));
  markers.push(marker);
}

function addWikiInfo(site) {
  var remoteUrl = "https://en.wikipedia.org/w/api.php?&action=query&prop=info|extracts&inprop=url&exsentences=4&explaintext=&titles=" + site + "&format=json&redirects=1&callback=wikiCallback";
  wikiURL = "";
  snippet = "";
  wikiText = "";
  refreshInfoWindowVM();

  $.ajax({
    url: remoteUrl,
    dataType: 'jsonp',
    success: function(data) {
      var pages = data.query.pages;
 
      // Always maximum of one page returned, but id is unknown; loop
      for (var page in pages) {
        wikiURL = pages[page].fullurl;
        wikiURL = wikiURL.replace(/['"]+/g, '');
        snippet = pages[page].extract;
      }
      wikiText = 'Wiki';

      refreshInfoWindowVM();
      ko.cleanNode(infoWindow.content);
      ko.applyBindings(infoWindowViewModel, infoWindow.content);
    }
  });
}

function addPlaceImg(place) {
  if (typeof place.photos != 'undefined') {
    addGMapsImg(place);        // Get image URL, if image data present
  } else {                    // Perform place search, use resulting photo data
    addMissingGMapsImg(place.placeId);
  }
}

function addMissingGMapsImg(placeId) {
  var request = {
    placeId: placeId
  };
  service.getDetails(request, imgCallback);
}

function imgCallback(place, status) {
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    console.error(status);
    return;
  }
  // Success - Send place to Img
  addGMapsImg(place);
}

function addGMapsImg(place) {
  // Get image URL, if image data present
  placeImgURL = place.photos[0].getUrl({
    'maxWidth': 75,
    'maxHeight': 75
  });
  placeImgHTML = '<div class="col-md-2">' +
              '<img style="float:left" data-bind="attr:{src: placeImgURL, alt: title}" />' +
            '</div>';
  refreshInfoWindow();
}

function addGMapsInfo(place) {
  title = place.name;

  if (typeof place.rating != 'undefined') {
    rating = 'Rating:   ' + place.rating;
  }

  if (typeof place.website != 'undefined') {
    websiteText = 'Website';
    websiteURL = place.website;
  }
  refreshInfoWindow();
}

function addSavedIndicator(saved) {
  if (saved === true) {
    saveImg = "img/star_saved.png";
    saveAlt = "Saved";
  } else {
    saveImg = "img/star_saved_not.png";
    saveAlt = "Not Saved";
  }
  refreshInfoWindow();
}

function refreshInfoWindow() {
  // If infoWindow.content exists, update with new information
  if (typeof infoWindow.content != 'undefined') {
    refreshInfoWindowVM();
    ko.cleanNode(infoWindow.content);
    ko.applyBindings(infoWindowViewModel, infoWindow.content);
  }
}

function refreshInfoWindowVM() {
  infoWindowViewModel = {
    title: title,
    saveImg: saveImg,
    saveAlt: saveAlt,
    placeImgURL: placeImgURL,
    rating: rating,
    websiteText: websiteText,
    websiteURL: websiteURL,
    snippet: snippet,
    wikiText: wikiText,
    wikiURL: wikiURL
  };
}

function openInfoWindow(marker) {
  infoWindow.setContent(createContent());
  ko.cleanNode(infoWindow.content);
  ko.applyBindings(infoWindowViewModel, infoWindow.content);
  infoWindow.open(map, marker);
}

function toggleSavedPlace(place) {
  if (isSavedPlace(place) === false) {
    addSavedPlace(place);
  } else {
    removeSavedPlace(place);
  }
}

function isSavedPlace(place) {
  for (var site in savedPlaces) {
    if (savedPlaces[site].placeId === place.place_id) {
      return true;
    }
  }
  return false;
}

function addSavedPlace(place) {
  var lat;
  var lng;
  // If lat/lng are functions, use functions
  // Else, use the hardcoded numbers from locally persisted file
  try {
    lat = place.geometry.location.lat();
  }
  catch (e) {
    lat = place.geometry.location.lat;
  }
  try {
    lng = place.geometry.location.lng();
  }
  catch (e) {
    lng = place.geometry.location.lng;
  }

  var newPlace = {"placeId": place.place_id,
                  "geometry":
                    {"location":
                      {"lat": lat,
                      "lng": lng
                      }
                    }
                 };
  savedPlaces.push(newPlace);
  addSavedIndicator(true);
  // Save savedPlaces array to localstorage
  localStorage.setItem('persistSavedPlaces', JSON.stringify(savedPlaces));
}

function removeSavedPlace(place) {
  for (var site in savedPlaces) {
    if (savedPlaces[site].placeId === place.place_id) {
      savedPlaces.splice(site, 1);
      // Save savedPlaces array to localstorage
      localStorage.setItem('persistSavedPlaces', JSON.stringify(savedPlaces));
      addSavedIndicator(false);
    }
  }
}

// Adapted from code found at:
// http://stackoverflow.com/questions/31970927/binding-knockoutjs-to-google-maps-infowindow-content
// Implementation in addMarker differs more significantly from example on page
function createContent() {
  var html;
  // Formatted as HTML for readability
  html =  '<div id="infoWindow" class="info-window">' +
            '<div class = "row">' +
              '<h3 class="col-md-11" data-bind="text: title">' +
              '</h3>' +
                '<img class="col-md-1 float:right" data-bind="attr:{src: saveImg, alt: saveAlt}' +
                  ', click: function() {' +
                    'toggleSavedPlace(curPlaceId);' +
                  "}" + 
                  '"/>' +
            '</div>' +
            '<div class="info-content"><p>' +
              '<div class = "row">' +
                placeImgHTML +
                '<div class="col-md-9">' +
                  '<div class = "row">' +
                    '<div class="col-md-12" data-bind="text: rating">' +
                    '</div>' +
                  '</div>' +
                  '<div class = "row">' +
                    '<a class = "col-md-12" target="_blank" data-bind="text: websiteText, attr: {href: websiteURL}"></a>'+
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class = "row">' +
                '<div class="col-md-12" data-bind="text: snippet">' +
                '</div>' +
              '</div>' +
              '<div class = "row">' +
                '<a class = "col-md-12" target="_blank" data-bind="text: wikiText, attr: {href: wikiURL}"></a>'+
                '</div>' +
              '</div>' +
            '</p></div>' +
          '</div>';
  html = $.parseHTML(html)[0];
  return html;
}

// Code for sidebar navigation - expand and collapse
var nav = false;

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  nav = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  nav = false;
}

function toggleNav() {
  if (nav) {
    closeNav();
  } else {
    openNav();
  }
}

var categoryViewModel = {
  categories: [{
    id: 1,
    categoryName: 'Recommended',
    link: function() {
      addMarkersFromList(authorFavorites);
    }
  }, {
    id: 2,
    categoryName: 'Destinations',
    link: function() {
      performKeywordSearch('Tourist Destination');
    }
  }, {
    id: 3,
    categoryName: 'Churches',
    link: function() {
      performKeywordSearch('Catholic Church');
    }
  }, {
    id: 4,
    categoryName: 'Lodging',
    link: function() {
      performTypeSearch('lodging');
    }
  }, {
    id: 5,
    categoryName: 'Museums',
    link: function() {
      performTypeSearch('museum');
    }
  }, {
    id: 6,
    categoryName: 'Restaurants',
    link: function() {
      performTypeSearch('restaurant');
    }
  }, {
    id: 7,
    categoryName: 'Shopping',
    link: function() {
      performTypeSearch('store');
    }
  }]
};

var infoWindowViewModel = {
  title: title,
  placeImgURL: placeImgURL,
  rating: rating,
  websiteText: websiteText,
  websiteURL: websiteURL,
  snippet: snippet,
  wikiText: wikiText,
  wikiURL: wikiURL
};

ko.applyBindings({
  categoryViewModel
});