---
title: Map
layout: map 
start_coords: [44.967, -103.767]
---

<!-- define JSON object for displaying data from site pages -->
<script id="page-data" type="application/json">
[
  {% assign first = true %}
  {% for page in site.pages %}
    {% if page.geo %}
      {% unless first %},{% endunless %}
      {
        "title": {{ page.title | jsonify }},
        "baseurl": {{ site.baseurl | jsonify }},
        "url": {{ page.url | jsonify }},
        "headerimage": {{ page.header-image | jsonify }},
        "placename": {{ page.placename | jsonify }},
        "summary": {{ page.summary | jsonify }},
        "geo": {{ page.geo | jsonify }}
      }
      {% assign first = false %}
    {% endif %}
  {% endfor %}
]
</script>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<div id="map" style="height: 90vh"></div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // Get the JSON data from the script tag
  const pages = JSON.parse(document.getElementById('page-data').textContent);

  // Initialize the map
  var map = L.map('map').setView({{ page.start_coords | jsonify }}, 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

pages.forEach(p => {
  if (!p.geo) return;
  const marker = L.marker(p.geo).addTo(map);
  const imgHtml = p["headerimage"] ? `<img src="${p.baseurl}${p.url}${p.headerimage}" alt="${p.title}">` : "";
  const html = `
    <div class="popup-wrapper">
      ${imgHtml}
      <div class="popup-text">
        <div class="popup-title"><a href="${p.baseurl}${p.url}">${p.title}</a></div>
        <p class="popup-placename">${p.placename || ""}</p>
        <p class="popup-summary">${p.summary || ""}</p>
      </div>
    </div>`;
  marker.bindPopup(html);
  });
});
</script>

<!-- KML Data Integration -->
<script>
// Load KML file function
function loadKML(url, map) {
  fetch(url)
    .then(response => response.text())
    .then(kmlText => {
      const parser = new DOMParser();
      const kmlDOM = parser.parseFromString(kmlText, 'text/xml');
      
      // Parse placemarks from KML
      const placemarks = kmlDOM.getElementsByTagName('Placemark');
      Array.from(placemarks).forEach(placemark => {
        const name = placemark.getElementsByTagName('name')[0]?.textContent || 'Unnamed';
        const description = placemark.getElementsByTagName('description')[0]?.textContent || '';
        
        // Handle Point geometries
        const point = placemark.getElementsByTagName('Point')[0];
        if (point) {
          const coords = point.getElementsByTagName('coordinates')[0]?.textContent.trim().split(',');
          if (coords && coords.length >= 2) {
            const lat = parseFloat(coords[1]);
            const lng = parseFloat(coords[0]);
            const marker = L.marker([lat, lng]).addTo(map);
            marker.bindPopup(`<strong>${name}</strong><br/>${description}`);
          }
        }
        
        // Handle LineString geometries
        const linestring = placemark.getElementsByTagName('LineString')[0];
        if (linestring) {
          const coords = linestring.getElementsByTagName('coordinates')[0]?.textContent.trim().split('\n');
          const latlngs = coords.map(coord => {
            const parts = coord.trim().split(',');
            return [parseFloat(parts[1]), parseFloat(parts[0])];
          }).filter(coord => !isNaN(coord[0]) && !isNaN(coord[1]));
          if (latlngs.length > 0) {
            L.polyline(latlngs, { color: 'blue', weight: 3 }).addTo(map).bindPopup(name);
          }
        }
      });
    })
    .catch(error => console.error('Error loading KML:', error));
}

// Load KML file after map initialization
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const map = L.map('map');
    loadKML('{{ site.baseurl }}/kml-data/marco-polo-routes.kml', map);
  }, 1000);
});
</script>
