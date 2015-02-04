var map;
var url = "https://mlh.io/seasons/s2015/events"

var scrape = function(fn) {
  $.getJSON("data", function(data) {
    fn(data)
  })
}

function initialize() {

  scrape(function(data) {

    var mapOptions = {
      zoom:5,
      center: new google.maps.LatLng(38, -98)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    data.forEach(function (event) {
      var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
      $.getJSON(baseUrl + event.location, function (data) {
        var point = data.results[0].geometry.location
        var marker = new google.maps.Marker({
            position: point,
            map: map,
            title:"Hello World!"
        });
      });
    })

  })
}
//end of initialize

google.maps.event.addDomListener(window, 'load', initialize);
// To add the marker to the map, call setMap();
//marker.setMap(map);
