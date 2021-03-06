/**
* Creates stylized map for planning trips to old Europe
* or merely dreaming of visiting.
*
* Loads a map with vintage effects with markers of recommended places
* Categories to the left allow the user to dive into the most common tourist destinations
* of old Europe (e.g tourist destinations, restuarants, old Catholic Churches)
*
* Created November 2016
*/

// Listing of categories and their click events for UI
// Used with knockout.js functionality
/* global $, ko, google */

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
  }, {
    id: 8,
    categoryName: 'Saved',
    link: function() {
      addMarkersFromList(savedPlaces);
    }
  }]
};

// InfoWindow variables, populated later in code
var infoWindowViewModel = {
  title: ko.observable(""),
  saveClass: ko.observable(""),
  placeImgURL: ko.observable(""),
  rating: ko.observable(""),
  websiteText: ko.observable(""),
  websiteURL: ko.observable(""),
  snippet: ko.observable(""),
  wikiText: ko.observable(""),
  wikiURL: ko.observable(""),
  wikiError: ko.observable(""),
};

// Credits, shown in tab on UI's Navigation Panel
var creditsViewModel = {
  credits: [
  {
    id: 1,
    creditText: 'Marker Icons',
    link: function() {
      openWebsite('https://icons8.com/');
    }
  }, {
    id: 2,
    creditText: 'Tabbed Bootstrap',
    link: function() {
      openWebsite('http://stackoverflow.com/questions/18432577/stacked-tabs-in-bootstrap-3');
    }
  }
]};

// Google's stylineg values; used to create a somewhat vintage look
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
  "place_id":"ChIJrRMgU7ZhLxMRxAOFkC7I8Sg",
  "placeId":"ChIJrRMgU7ZhLxMRxAOFkC7I8Sg",
  "name":"Colosseum",
  "geometry":{
    "location":{
      "lat":41.89021020000001,
      "lng":12.492230899999981
    }
  }
},{
  "place_id":"ChIJ782pg7NhLxMR5n3swAdAkfo",
  "placeId":"ChIJ782pg7NhLxMR5n3swAdAkfo",
  "name":"Roman Forum",
  "geometry":{
    "location":{
      "lat":41.8924623,
      "lng":12.485324999999989
    }
  }
},{
  "place_id":"ChIJH-4j1LJhLxMR6IviSs42yJ0",
  "placeId":"ChIJH-4j1LJhLxMR6IviSs42yJ0",
  "name":"Trajan's Column",
  "geometry":{
    "location":{
      "lat":41.895833,
      "lng":12.484298999999965
    }
  }
},{
  "place_id":"ChIJPRydwYNgLxMRSjOCLlYkV6M",
  "placeId":"ChIJPRydwYNgLxMRSjOCLlYkV6M",
  "name":"Piazza Navona",
  "geometry":{
    "location":{
      "lat":41.8991633,
      "lng":12.473074199999928
    }
  }
},{
  "place_id":"ChIJqUCGZ09gLxMRLM42IPpl0co",
  "placeId":"ChIJqUCGZ09gLxMRLM42IPpl0co",
  "name":"Pantheon",
  "geometry":{
    "location":{
      "lat":41.8986108,
      "lng":12.47687289999999
    }
  }
},{
  "place_id":"ChIJ1UCDJ1NgLxMRtrsCzOHxdvY",
  "placeId":"ChIJ1UCDJ1NgLxMRtrsCzOHxdvY",
  "name":"Trevi Fountain",
  "geometry":{
    "location":{
      "lat":41.9009325,
      "lng":12.483312999999953
    }
  }
},{
  "place_id":"ChIJG6cU-09gLxMR8hkxk2gJcFI",
  "placeId":"ChIJG6cU-09gLxMR8hkxk2gJcFI",
  "name":"Fiumi Fountain",
  "geometry":{
    "location":{
      "lat":41.8989673,
      "lng":12.473087200000009
    }
  }
},{
  "place_id":"ChIJ88WtV0VgLxMRUbkqM8OUa4k",
  "placeId":"ChIJ88WtV0VgLxMRUbkqM8OUa4k",
  "name":"Sant'Agnese in Agone",
  "geometry":{
    "location":{
      "lat":41.8988438,
      "lng":12.47255169999994
    }
  }
},{
  "place_id":"ChIJL87HTUVgLxMRMJl5wXE4U5o",
  "placeId":"ChIJL87HTUVgLxMRMJl5wXE4U5o",
  "name":"Saltimbocca ristorante",
  "geometry":{
    "location":{
      "lat":41.89925940000001,
      "lng":12.471616199999971
    }
  }
},{
  "place_id":"ChIJ7avK3rNhLxMRAouSFEzwbkA",
  "placeId":"ChIJ7avK3rNhLxMRAouSFEzwbkA",
  "name":"Taverna Romana",
  "geometry":{
    "location":{
      "lat":41.89412430000001,
      "lng":12.489454499999965
    }
  }
},{
  "place_id":"ChIJX9gmMbRhLxMRc_L8Li9bAhk",
  "placeId":"ChIJX9gmMbRhLxMRc_L8Li9bAhk",
  "name":"Arch of Titus",
  "geometry":{
    "location":{
      "lat":41.8906973,
      "lng":12.488649500000065
    }
  }
},{
  "place_id":"ChIJr3gt3ExgLxMRYaivihEa9K0",
  "placeId":"ChIJr3gt3ExgLxMRYaivihEa9K0",
  "name":"Piazza Venezia",
  "geometry":{
    "location":{
      "lat":41.89576630000001,
      "lng":12.482573900000034
    }
  }
},{
  "place_id":"ChIJr2C1NU1gLxMRAQ8Cfk1debk",
  "placeId":"ChIJr2C1NU1gLxMRAQ8Cfk1debk",
  "name":"Palazzo Valentini",
  "geometry":{
    "location":{
      "lat":41.8960502,
      "lng":12.484070999999972
    }
  }
},{
  "place_id":"ChIJdQnXoVxgLxMRCQK0txZGq6g",
  "placeId":"ChIJdQnXoVxgLxMRCQK0txZGq6g",
  "name":"St. Angelo Bridge",
  "geometry":{
    "location":{
      "lat":41.901788,
      "lng":12.466461699999968
    }
  }
},{
  "place_id":"ChIJK1-CN0xgLxMRZukH0_lPL70",
  "placeId":"ChIJK1-CN0xgLxMRZukH0_lPL70",
  "name":"Chiesa del Gesù",
  "geometry":{
    "location":{
      "lat":41.89592440000001,
      "lng":12.479862300000036
    }
  }
},{
  "place_id":"ChIJL-vHo11gLxMRcD2yiIungXY",
  "placeId":"ChIJL-vHo11gLxMRcD2yiIungXY",
  "name":"Santa Maria in Traspontina",
  "geometry":{
    "location":{
      "lat":41.9027135,
      "lng":12.462295499999982
    }
  }
}];

// Map, markers, infowindow
var map;
var infoWindow;
var service;
var selectedMarker;
var searchTerm;
var markers = [];
var displayedPlaces = ko.observableArray([]);

// Custom Experience
var minRating = 4;
var savedPlaces = [];

// HTML Management
var curPlaceId;
var placeImgHTML = '';

function googleError() {
  "use strict";
  window.alert('Connection interrupted. Google Maps could not load.');
}

/**
* @description Initializes map
* @description Loads persisted saved place data, if it exists
* @description Runs once html page is loaded
*/
function initMap() {
  "use strict";
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 41.89592440000001,
      lng: 12.479862300000036

    },
    zoom: 15,
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

/**
***** Searches *****
*/

/**
* @description Runs user directed search, allowing search terms
* @description Value is pulled from input box on index.html
*/
function userSearch() {
  "use strict";
  performKeywordSearch(searchTerm);
}

/**
* @description Requests location data based on search terms
* @description Can be multiple words
* @description Results limited to bounds of map
* @param {string} keyword - requests and loads markers based on keyword search
*/
function performKeywordSearch(keyword) {
  "use strict";
  removeMarkers();
  displayedPlaces([]);

  var request = {
    bounds: map.getBounds(),
    language: 'en',
    rankBy: google.maps.places.RankBy.PROMINENCE,
    keyword: [keyword]
  };

  service.nearbySearch(request, callback);
}

/**
* @description Requests location data based on place type
* @description https://developers.google.com/places/supported_types
* @description Results limited to bounds of map
* @param {string} type - requests and loads markers based on place type
*/
function performTypeSearch(type) {
  "use strict";
  removeMarkers();
  displayedPlaces([]);

  var request = {
    bounds: map.getBounds(),
    language: 'en',
    rankBy: google.maps.places.RankBy.PROMINENCE,
    types: [type]
  };

  service.nearbySearch(request, callback);
}

/**
***** Search Marker Spooling *****
*/


/**
* @description Uses google maps service reply to load markers on screen
* @description Filters based on rating, must be above minRating; ensures quality
* @param {list} results - list of places data (e.g placeId, photos, lat/lng)
* @param {string} status - success/failure message from google api
*/
function callback(results, status) {
  "use strict";
  removeMarkers();
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    console.error(status);
  } else {
    // Success - Write markers to map
    for (var i=0, l=results.length; i<l; i++) {
      // Only write markers with a rating higher than minRating
      // Secondary effect: filters out results with no rating
      if (results[i].rating > minRating) {
        addMarker(results[i]);
      }
    }
  }
}

/**
***** Marker List Spooling *****
*/


/**
* @description Requests location data based on place type
* @description https://developers.google.com/places/supported_types
* @description Results NOT limited to bounds of map
* @param {list} list - list with place information (placeId, lat/lng)
*/
function addMarkersFromList(list) {
  "use strict";
  removeMarkers();
  displayedPlaces([]);

  for (var i=0, l=list.length; i<l; i++) {
    addMarker(list[i]);
  }
}


/**
***** Add and Remove Markers *****
*/

/**
* @description Creates a single marker, based on place data
* @description  - Listener is created for InfoWindow
* @param {json string} place - list of place data (e.g placeId, photos, lat/lng)
*/
function addMarker(place) {
  "use strict";
  var iconOptions = getIconOptions('red');
  var position;

  // position is required by google for marker placement; use best value
  try {
    position = place.geometry.location;
  }
  catch (e) {
    position = place.position;
  }

  var marker = new google.maps.Marker({
    map: map,
    name: place.name,
    icon: iconOptions,
    placeId: place.place_id,
    place_id: place.place_id,
    position: position,
    title: place.name
  });

  // JavaScript events for places tab on UI
  marker.link = function() {
    selectedMarker = marker;
    loadInfoWindow(marker, place);
  };

  marker.mouseover = function() {
    if (marker != selectedMarker) {
      setMarkerColor(marker, 'blue');
    }
  };

  marker.mouseout = function() {
    if (marker != selectedMarker) {
      setMarkerColor(marker, 'red');
    }
  };

  displayedPlaces.push(marker);
  displayedPlaces.sort(sortDisplayedPlacesByName);

  /**
  * @description LISTENER: Loads InfoWindow data asynchronously
  * @description infoWindow is global in scope and reused
  * @description based on marker clicks - ensuring one infoWindow at a time
  * @param {object} marker - marker object with data and functions
  * @param {json string} place - place object with data and functions
  */
  marker.addListener('click', (function(marker, place) {

    return function() {
      selectedMarker = marker;
      // map.panTo(marker.getPosition());
      loadInfoWindow(marker, place);
    };
  })(marker, place));
  if (isInMarkers(marker) === false) {
      markers.push(marker);
    }
}

/**
* @description Removes markers as part of UI refresh
* @description adaptation of code found:
* @description https: developers.google.com/maps/documentation/javascript/examples/marker-remove
*/
function removeMarkers() {
  "use strict";
  for (var i=0, l=markers.length; i<l; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  displayedPlaces([]);
}


/**
* @description Returns true/false of whether marker's placeId is already in markers array
* @param marker - google maps marker for comparison to markers array
* @returns {boolean} - true if marker's placeId is in markers array, else false
*/
function isInMarkers(marker) {
  for (var i=0, l=markers.length; i<l; i++) {
    if (markers[i].placeId === marker.placeId) {
      return true;
    }
  }
  return false;
}

/**
* @description Sets Google markers to visible (true) or invisible (false)
* @param {marker list} list - google maps markers
* @param {boolean} - true if to be visible, else false
*/
function setMarkersVisiblility(list, bool) {
  "use strict";
  for (var i=0, l=list.length; i<l; i++) {
    list[i].setVisible(bool);
  }
}

/**
* @description Helper function to sort displayedPlaces
* @description Place name is ideal sort, helps with Places tab
* @param a - first entry in list
* @param b - next entry in list
* @returns value for sort
*/
function sortDisplayedPlacesByName(a,b) {
  "use strict";
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

/**
***** Marker Controllers *****
*/

/**
* @description Requests location data based on place type
* @description https://developers.google.com/places/supported_types
* @description Results NOT limited to bounds of map
* @param {list} list - list with place information (placeId, lat/lng)
*/
function filterMarkersBySearch(list) {
  "use strict";
  var markerFilter = [];

  // Filter current markers based on search term; create new list
  for (var i=0, l=list.length; i<l; i++) {
    if (list[i].name.search(new RegExp(searchTerm, "i")) !== -1) {
      markerFilter.push(list[i]);
    }
  }
  applyFilter(markerFilter);
}

/**
* @description Requests location data based on place type
* @description https://developers.google.com/places/supported_types
* @description Results NOT limited to bounds of map
* @param {list} list - list with place information (placeId, lat/lng)
*/
function applyFilter(list) {
  "use strict";
  setMarkersVisiblility(markers, false);
  displayedPlaces([]);

  for (var i=0, l=list.length; i<l; i++) {
    list[i].setVisible(true);
    displayedPlaces.push(list[i]);
  }
}

/**
* @description Resets all markers to the color red
* @description Required for when infoWindow is opened elsewhere, but not closed
*/
function setMarkersRed() {
  "use strict";
  var iconOptions = getIconOptions('red');
  for (var i=0, l=markers.length; i<l; i++) {
    markers[i].setIcon(iconOptions);
  }
}

/**
* @description Sets marker to identified color
* @param {google marker} marker - Marker to set color
* @param {string} color - red, blue or brown are supported
*/
function setMarkerColor(marker, color) {
  "use strict";
  var iconOptions = getIconOptions(color);
  marker.setIcon(iconOptions);
}

/**
* @description Creates and returns icon options for markers
* @description Successful response causes updates to observable variables
* @description based on marker clicks - ensuring one infoWindow at a time
* @param {string} color - red, blue or brown are supported
* @returns iconOptions - set of values to ensure proper placement and color of marker
*/
function getIconOptions(color) {
  "use strict";
  var iconOptions = {
      url: 'img/icons8/vintage-' + color + '-512.png',
      size: new google.maps.Size(71, 71),
      anchor: new google.maps.Point(17, 35),
      scaledSize: new google.maps.Size(35, 35)
    };
  return iconOptions;
}

/**
***** InfoWindow Controllers *****
*/

function loadInfoWindow(marker, place) {
  "use strict";
  service.getDetails(place, function(result, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      console.error(status);
    } else {
      // Used for toggleSavedPlace - allows html to refer to variable
      curPlaceId = place;
      // Asynchronous functions
      // Wikipedia sentences and link are added to infoWindow if/when data is returned
      addWikiInfo(result.name);
      addPlaceImg(place);
      // Local data
      addSavedIndicator(isSavedPlace(place));
      // Add name, photo, rating, website
      addGMapsInfo(result);
      openInfoWindow(marker);
    }
  });
}


/**
***** InfoWindow Information Calls *****
*/

/**
  *** Wikipedia ***
*/

/**
* @description Request data from Wikipedia
* @description Successful response causes updates to observable variables
* @description based on marker clicks - ensuring one infoWindow at a time
* @param {string} site - location name
*/
function addWikiInfo(site) {
  "use strict";
  var remoteUrl = "https://en.wikipedia.org/w/api.php?&action=query&prop=info|extracts&inprop=url&exsentences=4&explaintext=&titles=" + site + "&format=json&redirects=1&callback=wikiCallback";
  infoWindowViewModel.wikiURL("");
  infoWindowViewModel.snippet("");
  infoWindowViewModel.wikiText("");
  infoWindowViewModel.wikiError("");

  $.ajax({
    url: remoteUrl,
    dataType: 'jsonp',
    error: function (err) {
            // Other values set appropriately at beginning of function
            infoWindowViewModel.wikiError("No article available. Possible connection interruption.");
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
          },
    success: function(data) {
      var pages = data.query.pages;
      var wikiURL;
      var snippet;
      var wikiText;
      var wikiError;

      // Always maximum of one page returned, but id is unknown; loop
      // Breaks strict rule, due to variability in returned value
      // Uncomment console.log line to see effects
      for (var i in pages) {
        // console.log(i);
        wikiURL = pages[i].fullurl;
        wikiURL = wikiURL.replace(/['"]+/g, '');
        snippet = pages[i].extract;
      }
      wikiText = 'Wiki';

      infoWindowViewModel.wikiURL(wikiURL);
      infoWindowViewModel.wikiText(wikiText);
      if (typeof snippet != 'undefined') {
        infoWindowViewModel.snippet(snippet);
      } else {
        infoWindowViewModel.snippet('No article available');
        infoWindowViewModel.wikiError('Possible connection interruption.');
      }
    }
  });
}

/**
  *** Google Place Image ***
*/

/**
* @description Checks for photos within place
* @description If none found, triggers place refresh
* @description Required because local lists do not store photo functions
* @description Saved only the most immutable data locally
* @param {json string} place - place object with data and functions
*/
function addPlaceImg(place) {
  "use strict";
  if (typeof place.photos != 'undefined') {
    addGMapsImg(place);        // Get image URL, if image data present
  } else {                    // Perform place search, use resulting photo data
    addMissingGMapsImg(place.place_id);
  }
}

/**
* @description Requests updated place data
* @description Success triggers function imgCallback
* @description Required because local lists do not store photo functions
* @description Saved only the most immutable data locally
* @param {string} place_id - place object with data and functions
*/
function addMissingGMapsImg(place_id) {
  "use strict";
  var request = {
    placeId: place_id
  };
  service.getDetails(request, imgCallback);
}

/**
* @description If success message, sends result to addGMapsImg
* @description for addition into infoWindow
* @param {json string} result - list of place json with data and functions
* @param {string} status - success/error message from google api
*/
function imgCallback(result, status) {
  "use strict";
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    console.error(status);
  } else {
    // Success - Send place to Img
    addGMapsImg(result);
  }
}

/**
* @description Requests photo url, creates HTML to display
* @description Added dynamically to infoWindow
* @param {json string} place - place object with data and functions
*/
function addGMapsImg(place) {
  "use strict";
  // Get image URL, if image data present
  var placeImgURL = place.photos[0].getUrl({
    'maxWidth': 75,
    'maxHeight': 75
  });
  placeImgHTML = '<div class="col-md-2">' +
              '<img style="float:left" data-bind="attr:{src: placeImgURL, alt: title}" />' +
            '</div>';
  infoWindowViewModel.placeImgURL(placeImgURL);
}

/**
* @description Adds the Google Maps information (e.g. place's rating & website)
* @param {json string} place - place object with data and functions
*/
function addGMapsInfo(place) {
  "use strict";
  infoWindowViewModel.title(place.name);

  if (typeof place.rating != 'undefined') {
    var rating = 'Rating:   ' + place.rating;
    infoWindowViewModel.rating(rating);
  }

  if (typeof place.website != 'undefined') {
    infoWindowViewModel.websiteText('Website');
    infoWindowViewModel.websiteURL(place.website);
  }
}

/**
***** Open InfoWindow *****
*/

/**
* @description Refreshes infoWindow for use elsewhere on map
* @description Creates correct element class to indicate if location is saved
* @param {object} marker - marker object with data and functions
*/
function openInfoWindow(marker) {
  "use strict";
  infoWindow.setContent(createContent());
  ko.cleanNode(infoWindow.content);
  ko.applyBindings(infoWindowViewModel, infoWindow.content);

  // Required for when infoWindow is moved, rather than closed and opened
  // closeclick event to re-color marker is handled in infoWindow event, below
  setMarkersRed();
  // Active marker is turned brown
  setMarkerColor(marker, 'brown');

  // Re-center after icon shifted infoWindow to the right
  var infoWindowOptions = {
    pixelOffset: new google.maps.Size(-19, 0)
  };
  infoWindow.setOptions(infoWindowOptions);

  infoWindow.open(map, marker);

  infoWindow.addListener('closeclick',function() {
    selectedMarker = '';
    // Marker is no longer active, set color to red
    setMarkerColor(marker, 'red');
  });
}

/**
***** Saved Location UI for InfoWindow*****
*/

/**
* @description User can save locations locally
* @description Creates correct element class to indicate if location is saved
* @param {string} saved - true/false
*/
function addSavedIndicator(saved) {
  "use strict";
  var val;
  if (saved === true) {
    val = "material-icons md-dark";
  } else {
    val = "material-icons md-dark md-inactive text-right";
  }
  infoWindowViewModel.saveClass(val);
}

/**
***** Saved Location Management *****
*/

/**
* @description User can save locations locally
* @description Calls correct function to toggle saved state of place
* @param {string} place - place's place_id (placeId in other forms)
*/
function toggleSavedPlace(place) {
  "use strict";
  if (isSavedPlace(place) === false) {
    addSavedPlace(place);
  } else {
    removeSavedPlace(place);
  }
}

/**
* @description Determines if place is in saved list
* @param {string} place - place's place_id (placeId in other forms)
* @returns {boolean} - true if place is in saved list, else false
*/
function isSavedPlace(place) {
  "use strict";
  for (var i=0, l=savedPlaces.length; i<l; i++) {
    if (savedPlaces[i].place_id === place.place_id) {
      return true;
    }
  }
  return false;
}

/**
* @description Adds place data to savedPlaces list
* @description Lists keep data, not functions
* @description Since Google's API can/will return functions this needed to be deconflicted
* @decription Saves updated savedPlaces locally to persistSavedPlaces
* @param {string} place - place object with data and functions
*/
function addSavedPlace(place) {
  "use strict";
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

  var newPlace = {"place_id": place.place_id,
                  "placeId": place.place_id,
                  "name": place.name,
                  "geometry":
                    {"location":
                      {"lat": lat,
                      "lng": lng
                      }
                    }
                 };
  savedPlaces.push(newPlace);
  addSavedIndicator(true);
  // savedPlaces = [];
  // Save savedPlaces array to localstorage
  localStorage.setItem('persistSavedPlaces', JSON.stringify(savedPlaces));
}

/**
* @description Removes place data to savedPlaces list
* @decription Saves updated savedPlaces locally to persistSavedPlaces
* @param {string} place - place object with data and functions
*/
function removeSavedPlace(place) {
  "use strict";
  for (var i=0, l=savedPlaces.length; i<l; i++) {
    if (savedPlaces[i].place_id === place.place_id) {
      savedPlaces.splice(i, 1);
      // Save savedPlaces array to localstorage
      localStorage.setItem('persistSavedPlaces', JSON.stringify(savedPlaces));
      addSavedIndicator(false);
    }
  }
}

/**
***** InfoWindow Content HTML *****
*/

/**
* @description HTML for use in InfoWindows
* @description Called to dynamically load the HTML into infoWindow
* @description Adapted from code found at:
* @decription http://stackoverflow.com/questions/31970927/binding-knockoutjs-to-google-maps-infowindow-content
* @description Implementation in addMarker differs more significantly from example on page
* @param {string} place - place object with data and functions
*/
function createContent() {
  "use strict";
  var html;
  // Formatted as HTML for readability
  html =  '<div id="infoWindow" class="info-window">' +
            '<div class = "row form-inline">' +
              '<h3 class="col-md-10" data-bind="text: title">' +
              '</h3>' +
              '<h3 class="col-md-2"> ' +
                '<div data-bind="attr:{class: saveClass},' +
                  ' click: function() {' +
                    'toggleSavedPlace(curPlaceId);' +
                  ' closeclick: function() {' +
                    'setMarkersRed();' +
                  '}' +
                '">star_rate</div>' +
              '</h3>' +
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
              '<div class = "row">' +
                '<div class = "col-md-12" target="_blank" data-bind="text: wikiError">'+
                '</div>' +
              '</div>' +
            '</p></div>' +
          '</div>';
  html = $.parseHTML(html)[0];
  return html;
}

/**
***** SideNav Section *****
*/

/**
* @description Code for sidebar navigation - expand and collapse
* @description http://www.w3schools.com/howto/howto_js_sidenav.asp
*/

var nav = false;

function openNav() {
  "use strict";
  document.getElementById("mySidenav").style.width = "350px";
  nav = true;
}

function closeNav() {
  "use strict";
  document.getElementById("mySidenav").style.width = "0px";
  nav = false;
}

function toggleNav() {
  "use strict";
  if (nav) {
    closeNav();
  } else {
    openNav();
  }
}

ko.applyBindings(categoryViewModel);

/**
***** Credits *****
*/

function openWebsite(URL) {
  "use strict";
  window.open(URL);
}