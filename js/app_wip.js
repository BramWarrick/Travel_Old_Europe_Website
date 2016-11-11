// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());




// $.geolocation.find(function(location) {
//         var lat = location.latitude;
//         var lng = location.longitude;

//         var map = new google.maps.Map($('#mapDiv').get(0), {
//             center: new google.maps.LatLng(lat, lng),
//             zoom: 13,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         });

//         var pinColor = "FE7569";
//         var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
//         new google.maps.Size(21, 34),
//         new google.maps.Point(0,0),
//         new google.maps.Point(10, 34));
//         var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
//         new google.maps.Size(40, 37),
//         new google.maps.Point(0, 0),
//         new google.maps.Point(12, 35))

//         var marker= new google.maps.Marker({
//             position: new google.maps.LatLng(lat, lng),
//             map: map,
//             icon: pinImage,
//             shadow: pinShadow 
//         });        
// });

// http://stackoverflow.com/questions/11866939/google-map-doesnt-load-because-of-marker-object
// http://jsfiddle.net/oscarj24/sPsxh/

    //http://stackoverflow.com/questions/7095574/google-maps-api-3-custom-marker-color-for-default-dot-marker/7686977#7686977