'use strict';
// eslint-disable-next-line no-unused-vars
function initMap() {
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(38, -98)
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  var baseUri = 'https://mlh-events.now.sh';
  var apiUrl = baseUri + '/na-2017';
  // fetch(apiUrl)
  //   .then(function fetchEvents(res) {
  //     return res.json();
  //   })
  //   .then(function handleEvents(apiData) {
  //     apiData.forEach(function createMapPoint(event) {
  //       var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  //       fetch(baseUrl + event.location)
  //         .then(function returnGoogleText(res) {
  //           return res.json();
  //         })
  //         .then(function handleGoogleResponse(data) {
  //           // TODO: make api wrapper to return error if google cannot find location
  //           var point = data.results[0].geometry.location;
  //           var info = '<p>' + event.name + '<br>' + event.location + '<br>' +
  //             event.date + '</p>';

  //           var infowindow = new google.maps.InfoWindow({
  //             content: info
  //           });

  //           var marker = new google.maps.Marker({
  //             position: point,
  //             map: map,
  //             title: event.name
  //           });

  //           // only if point exists
  //           google.maps.event.addListener(marker, 'click', function openDetails() {
  //             infowindow.open(map, marker);
  //           });
  //         });

  //     });
  //   });
}
