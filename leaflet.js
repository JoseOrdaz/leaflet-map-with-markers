
document.addEventListener("DOMContentLoaded", () => {

var map = L.map('map').setView([39.479260506629686, -0.3751149835716945], 12);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var baseballIcon = L.icon({
  iconUrl: 'https://clubsdepadelvalencia.es/wp-content/uploads/2022/07/padel-3.png',
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

function onEachFeature(feature, layer, url) {
  var popupContent = `<h3 class="text-2xl font-bold text-gray-900">${feature.properties.name}</h3><p><a style="color:#658529;font-weight:bold" href="${feature.properties.url}">${feature.properties.url}</a></p>`;
  

  layer.bindPopup(popupContent);
  console.log(popupContent)
}


var coorsLayer = L.geoJSON(geoJson, {

  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {icon: baseballIcon});
  },

  onEachFeature: onEachFeature
}).addTo(map);

});
