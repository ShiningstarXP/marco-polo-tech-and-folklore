"use strict";

/*
 * Xanthan Google Sheets utilities
 * --------------------------------
 * This module is intentionally generic: it knows how to query spreadsheet rows,
 * but it does not know anything about maps.
 */

(function () {
  var DEFAULT_TARGET_ID = "sheetrock";

  function ensureHiddenTarget(targetId) {
    if (!document.getElementById(targetId)) {
      $('<div id="' + targetId + '"></div>').appendTo(document.body).hide();
    }
  }

  function normalizeTarget(targetId) {
    return targetId || DEFAULT_TARGET_ID;
  }

  function parseJsonCell(rawValue, fallbackValue) {
    if (rawValue === null || rawValue === undefined || rawValue === "") {
      return fallbackValue;
    }

    try {
      return JSON.parse(rawValue);
    } catch (error) {
      return fallbackValue;
    }
  }

  function parseListCell(rawValue) {
    if (!rawValue) {
      return [];
    }

    if (Array.isArray(rawValue)) {
      return rawValue.filter(Boolean);
    }

    var parsedJson = parseJsonCell(rawValue, null);
    if (Array.isArray(parsedJson)) {
      return parsedJson.filter(Boolean);
    }

    return String(rawValue)
      .split(/[|,]/)
      .map(function (entry) {
        return entry.trim();
      })
      .filter(Boolean);
  }

  function fetchRows(options) {
    options = options || {};

    if (!options.sheetUrl) {
      return Promise.reject(new Error("fetchRows requires options.sheetUrl"));
    }

    if (!options.query) {
      return Promise.reject(new Error("fetchRows requires options.query"));
    }

    if (typeof $.fn.sheetrock !== "function") {
      return Promise.reject(new Error("sheetrock plugin is not available"));
    }

    var targetId = normalizeTarget(options.targetId);
    var rowMapper = typeof options.rowMapper === "function"
      ? options.rowMapper
      : function (row) {
          return row;
        };
    var rows = [];

    ensureHiddenTarget(targetId);

    return new Promise(function (resolve, reject) {
      $("#" + targetId).sheetrock({
        url: options.sheetUrl,
        query: options.query,
        fetchSize: options.fetchSize || 0,
        reset: options.reset !== false,
        target: document.getElementById(targetId),
        rowTemplate: function (row) {
          var mapped = rowMapper(row);
          if (mapped !== null && mapped !== undefined) {
            rows.push(mapped);
          }
          return $("<span></span>");
        },
        callback: function (error) {
          if (error) {
            reject(error);
            return;
          }
          resolve(rows);
        }
      });
    });
  }

  window.XanthanSheets = {
    fetchRows: fetchRows,
    parseJsonCell: parseJsonCell,
    parseListCell: parseListCell
  };
})();
