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
