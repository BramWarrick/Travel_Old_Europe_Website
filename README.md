** Instructions **

Clone reposititory to local directory
Open index.html in the root directory of repository
Everything should work automatically, see additional notes below for ideas on usage or testing


** Additional Notes **

Side Navigation Window
 - Reached by clicking the triple line link in upper left
 - Conventional idiom for opening side navigation

Search Bar
 - Returns results limited by bounds of map
 - Recommended searches: piazza, fountain

Category Tab
 - Search types included: place type, keyword, from list of places
 - Searches keyword and place type searches limited to the bounds of the current map
 - Sorted by promience, so zooming out will usually result in higher trafficed locations
 - Each click will load only places with a rating of 4 stars or better
 - Once a category is selected, the markers that load will also be added to the Places tab

Places Tab
 - Mousing over a place on the tab will cause marker to change color
 - Clicking a location on the Places tab will open its infoWindow and change the marker color

Credits tab
 - Allows more transparent attributions
 - A link was required by license for use of icons8's marker icon imagery

Functional
 - Asynchoronous data is pulled from Google Maps and Wikipedia
 - I'd planned to use panoramio also, but that's been folded into Google Maps
 - I looked for /good/ sources of archeological or historical sites with an API, nothing trustworthy appeared. Open source projects were...  not great and varied wildly in the quality of the data.