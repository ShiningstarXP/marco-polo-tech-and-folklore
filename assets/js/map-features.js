"use strict";

/*
 * Xanthan map utilities
 * ---------------------
 * This module is map-focused and intentionally data-source agnostic.
 * It accepts records and renders them onto Leaflet layers.
 */

(function () {
  function parseGeometry(rawValue) {
    if (!rawValue) {
      return null;
    }

    if (Array.isArray(rawValue)) {
      return rawValue;
    }

    try {
      var parsed = JSON.parse(rawValue);
      return Array.isArray(parsed) ? parsed : null;
    } catch (error) {
      return null;
    }
  }

  function normalizeImages(rawValue) {
    if (!rawValue) {
      return [];
    }

    if (Array.isArray(rawValue)) {
      return rawValue.filter(Boolean);
    }

    try {
      var parsed = JSON.parse(rawValue);
      if (Array.isArray(parsed)) {
        return parsed.filter(Boolean);
      }
    } catch (error) {
      // Continue with delimited parsing below.
    }

    return String(rawValue)
      .split(/[|,]/)
      .map(function (value) {
        return value.trim();
      })
      .filter(Boolean);
  }

  function mapGeometryToLeafletGeometry(geometry) {
    if (
      Array.isArray(geometry) &&
      geometry.length === 2 &&
      typeof geometry[0] === "number" &&
      typeof geometry[1] === "number"
    ) {
      return {
        type: "Point",
        coordinates: [geometry[1], geometry[0]]
      };
    }

    return {
      type: "Polygon",
      coordinates: geometry
    };
  }

  function defaultPopupBuilder(record) {
    var popup = $("<div></div>");

    if (record.name) {
      $("<h2></h2>").text(record.name).appendTo(popup);
    }

    if (record.images && record.images.length) {
      var slider = $("<ul></ul>").addClass("image-slider").appendTo(popup);
      $.each(record.images, function (_idx, url) {
        $("<img>")
          .attr("src", url)
          .appendTo($("<li></li>").appendTo(slider));
      });
    }

    if (record.caption) {
      $("<p></p>").text(record.caption).appendTo(popup);
    }

    if (record.link) {
      $("<a></a>")
        .addClass("read-more")
        .attr("href", record.link)
        .attr("target", "_blank")
        .text("More information »")
        .appendTo($("<p></p>").appendTo(popup));
    }

    return popup.html();
  }

  function createLayerFromRecord(record, options) {
    options = options || {};

    var popupBuilder = typeof options.popupBuilder === "function"
      ? options.popupBuilder
      : defaultPopupBuilder;

    var geometry = parseGeometry(record.geometry);
    if (!geometry) {
      return null;
    }

    var geojsonFeature = {
      type: "Feature",
      properties: {
        name: record.name || "Untitled"
      },
      geometry: mapGeometryToLeafletGeometry(geometry)
    };

    var layer = L.geoJSON(geojsonFeature);
    var popupHtml = popupBuilder(record);

    if (popupHtml) {
      layer.bindPopup(L.popup().setContent(popupHtml));
    }

    if (typeof options.onClick === "function") {
      layer.on("click", function (event) {
        options.onClick(event, record);
      });
    }

    return layer;
  }

  function renderRecords(options) {
    options = options || {};

    var records = options.records || [];
    var outlines = options.outlines;

    if (!outlines) {
      throw new Error("renderRecords requires options.outlines");
    }

    outlines.clearLayers();

    records.forEach(function (record) {
      var layer = createLayerFromRecord(record, options);
      if (layer) {
        outlines.addLayer(layer);
      }
    });

    if (options.map) {
      options.map.addLayer(outlines);
    }
  }

  function enablePopupSliders(map) {
    if (!map) {
      return;
    }

    map.on("popupopen", function (event) {
      var slider = $(event.popup._contentNode).children(".image-slider");
      if (slider.children("li").length > 1 && typeof slider.bxSlider === "function") {
        slider.bxSlider({
          responsive: false,
          controls: false
        });
      }
    });
  }

  function bindHighlightHints(map, options) {
    if (!map) {
      return;
    }

    options = options || {};
    var mapSelector = options.mapSelector || "#map";
    var timeoutMs = options.timeoutMs || 1000;
    var timeoutId = null;

    function highlight() {
      $(mapSelector).addClass("hl-hint");
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        $(mapSelector).removeClass("hl-hint");
      }, timeoutMs);
    }

    map.on("drag", highlight);
    map.on("zoomstart", highlight);
  }

  function parseLegacyMarkerRow(row) {
    var cells = row.cellsArray || [];

    return {
      id: cells[0],
      name: cells[1],
      start_year: Number(cells[2]),
      end_year: Number(cells[3]),
      geometry: cells[4] || cells[6] || "",
      images: normalizeImages(cells[5] || ""),
      link: cells[6] || "",
      row_number: row.num + 1
    };
  }

  window.XanthanMap = {
    parseGeometry: parseGeometry,
    normalizeImages: normalizeImages,
    createLayerFromRecord: createLayerFromRecord,
    renderRecords: renderRecords,
    enablePopupSliders: enablePopupSliders,
    bindHighlightHints: bindHighlightHints,
    parseLegacyMarkerRow: parseLegacyMarkerRow
  };
})();
