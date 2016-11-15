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

var map;
var infoWindow;
var service;
var markers = [];

var wikiData;
var title;
var imgUrl;
var rating;
var websiteText;
var websiteUrl;
var snippet;
var wikiText;
var wikiUrl;

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

  google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
    performKeywordSearch('Tourist Destination');
  });

}

function performTypeSearch(type) {
  deleteMarkers();

  var request = {
    bounds: map.getBounds(),
    language: 'en',
    rankBy: google.maps.places.RankBy.PROMINENCE,
    types: [type]
  };
  // console.log(request)
  service.nearbySearch(request, callback);
}


function performKeywordSearch(keyword) {
  deleteMarkers();

  var request = {
    bounds: map.getBounds(),
    language: 'en',
    rankBy: google.maps.places.RankBy.PROMINENCE,
    keyword: [keyword]
  };
  // console.log(request)
  service.nearbySearch(request, callback);
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
  // console.log(results);
  for (var i = 0, result; result = results[i]; i++) {
    if (result.rating > 4) {
      addMarker(result);
    }
  }
}

// Adapted from code found at:
// http://stackoverflow.com/questions/31970927/binding-knockoutjs-to-google-maps-infowindow-content
// Implementation in addMarker differs from example on page
function createContent() {
  var html;
  html = '<div id="infoWindow" class="info-window">' +
            '<div class = "row">'+ 
              '<h3 class="col-md-12" data-bind="text: title">' +
              '</h3>' + 
            '</div>' +
            '<div class="info-content"><p>' +
              '<div class = "row">'+ 
                '<div class="col-md-3">' +
                  // '<img style="float:left" data-bind="attr:{src: imageUrl}" />' +
                '</div>' + 
                '<div class="col-md-9">' +
                  '<div class = "row">' +
                    '<div class="col-md-12" data-bind="text: rating">' +
                    '</div>' + 
                  '</div>' + 
                  '<div class = "row">' +
                    '<a href="#" class="col-md-12" data-bind="text: websiteText, click: websiteUrl"></a>' +
                  '</div>' + 
                '</div>' +
              '</div>' +
              '<div class = "row">' +
                '<div class="col-md-12" data-bind="text: snippet">' +
                '</div>' +
              '</div>' +
              '<div class = "row">' +
                '<a href="#" class="col-md-12" data-bind="text: wikiText, click: wikiUrl"></a>' +
                '</div>' +
              '</div>' +
            '</p></div>' +
          '</div>';
  html = $.parseHTML(html)[0];
  return html;
}


function addMarker(place) {
  marker = new google.maps.Marker({
    map: map,
    // animation: google.maps.Animation.DROP,
    position: place.geometry.location
    // icon: place.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
    //icon: markerImage
  });

  google.maps.event.addListener(marker, 'click', (function(marker, place, infoWindow) {
    return function() {
      service.getDetails(place, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }

        var wikiData = getWikiInfo(result.name)

        // console.log(result);

        
        title = result.name
        // Get image URL, if image data present
        if (typeof place.photos[0] != 'undefined') {
          imgUrl =  place.photos[0].getUrl({
                      'maxWidth': 50,
                      'maxHeight': 50
                    });
        }
        // Location rating, if present
        if (typeof result.rating != 'undefined') {
          rating = 'Rating:   ' + result.rating;
        }
        // Location website, if present
        if (typeof result.website != 'undefined') {
          websiteText = 'Website';
          websiteUrl = '"' + result.website + '"';
        }
        console.log(typeof wikiData)
        if (typeof wikiData != "undefined") {
          console.log(wikiData.query)
           // First paragraph(s), from wikipedia
          if (typeof wikiData.query.pages[0].extract != 'undefined') {
            snippet = wikiData.query.pages[0].extract;
          }
          // Wikipedia page, if present
          if (typeof wikiData.query.pages[0].fullurl != 'undefined') {
            wikiText = 'Wiki'
            wikiUrl = wikiData.query.pages[0].fullurl;
          }
        }


      infoWindowViewModel = {
          title: title,
          imgUrl: imgUrl,
          rating: rating,
          websiteText: websiteText,
          websiteUrl: websiteUrl,
          snippet: snippet,
          wikiText: wikiText,
          wikiUrl: wikiUrl
          }

        infoWindow.setContent(createContent());
        ko.applyBindings(infoWindowViewModel, infoWindow.content);
        infoWindow.open(map, marker);

      });
    };
  })(marker, place, infoWindow));

  markers.push(marker);
}

// addInfoWindow modified from code found at:
// http://stackoverflow.com/questions/5868903/marker-content-infowindow-google-maps
function newInfoWindow(marker, place) {
  service.getDetails(place, function(result, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      console.error(status);
      return;
    }

    // console.log(result);

    var body = getWikiInfo(result.name)

    var contentString = '<div class="info-window">' +
      '<h3>' + result.name + '</h3>' +
      '<div class="info-content">' +
      '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>' +
      '</div>' +
      '</div>';

    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    infoWindow.open(map, marker);
  });
}

categoryViewModel = {
  categories: [{
    id: 1,
    categoryName: 'Recommended',
    link: function() {
      performKeywordSearch('Tourist Destination');
    }
  }, {
    id: 2,
    categoryName: 'Churches',
    link: function() {
      performKeywordSearch('Catholic Church');
    }
  }, {
    id: 3,
    categoryName: 'Lodging',
    link: function() {
      performTypeSearch('lodging');
    }
  }, {
    id: 4,
    categoryName: 'Museums',
    link: function() {
      performTypeSearch('museum');
    }
  }, {
    id: 5,
    categoryName: 'Restaurants',
    link: function() {
      performTypeSearch('restaurant');
    }
  }, {
    id: 6,
    categoryName: 'Grocery',
    link: function() {
      performTypeSearch('museum');
    }
  }]
}

ko.applyBindings({
  categoryViewModel
});

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
  nav ? closeNav() : openNav();
}

function getWikiInfo(site) {

  // var wikiRequestTimeout = setTimeout(function(){
  //     $wikiElem.text("Failed to get Wikipedia resources");
  // }, 8000);

  // Using jQuery

  remoteUrlWithOrigin = "https://en.wikipedia.org/w/api.php?&action=query&prop=info|extracts&inprop=url&exintro=&explaintext=&titles=" + site + "&format=json&redirects=1&callback=wikiCallback";

  $.ajax({
    url: remoteUrlWithOrigin,
    dataType: 'jsonp',
    success: function(data) {
      console.log(data);
      console.log(data.query.pages);
      var pages = data.query.pages;
      var wikiUrl;
      for (var page in pages) {
        wikiUrl = pages[page].fullUrl;
        snippet = pages[page].extract;
      }
      var wikiText = 'Wiki';
      
      infoWindowViewModel = {
        title: title,
        imgUrl: imgUrl,
        rating: rating,
        websiteText: websiteText,
        websiteUrl: websiteUrl,
        snippet: snippet,
        wikiText: wikiText,
        wikiUrl: wikiUrl
        };

      ko.cleanNode(infoWindow.content);
      ko.applyBindings(infoWindowViewModel, infoWindow.content);
      return data.query;

      // clearTimeout(wikiRequestTimeout);
    }
  });
}