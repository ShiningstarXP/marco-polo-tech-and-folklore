"use strict";

/*
 * Xanthan site search
 * -------------------
 * Uses Lunr.js to build a client-side search index from a JSON file
 * that Jekyll generates at build time (assets/search-index.json).
 *
 * How it works:
 *  1. When the search page loads, this script fetches the search index JSON.
 *  2. It feeds every page's title, summary, content, and tags into Lunr,
 *     which builds an inverted index (like a book index, but for every word).
 *  3. When someone types a query, Lunr scores each page by relevance
 *     and this script renders the top results.
 *
 * This file has no opinions about where results appear — it just needs
 * a container element and an input element, both identified by ID.
 */

(function () {
  var DEFAULTS = {
    indexUrl: "/assets/search-index.json",
    inputId: "search-input",
    resultsId: "search-results",
    debounceMs: 250,
    maxResults: 20
  };

  var state = {
    index: null,       // the Lunr index, built once
    documents: null,   // the raw page data, keyed by URL
    ready: false
  };

  // ---- Index loading ----

  function resolveIndexUrl(baseurl) {
    var url = DEFAULTS.indexUrl;
    if (baseurl) {
      url = baseurl.replace(/\/$/, "") + url;
    }
    return url;
  }

  function buildIndex(pages) {
    var docs = {};

    var index = lunr(function () {
      this.ref("url");
      this.field("title", { boost: 10 });
      this.field("tags", { boost: 5 });
      this.field("summary", { boost: 3 });
      this.field("content");

      pages.forEach(function (page) {
        if (!page.url) return;
        docs[page.url] = page;
        this.add(page);
      }, this);
    });

    return { index: index, documents: docs };
  }

  function loadIndex(baseurl, callback) {
    var url = resolveIndexUrl(baseurl);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.error("[xanthan-search] Failed to load search index:", xhr.status);
        callback(new Error("Search index not available"));
        return;
      }

      try {
        var pages = JSON.parse(xhr.responseText);
        var built = buildIndex(pages);
        state.index = built.index;
        state.documents = built.documents;
        state.ready = true;
        callback(null);
      } catch (error) {
        console.error("[xanthan-search] Error building search index:", error);
        callback(error);
      }
    };
    xhr.onerror = function () {
      callback(new Error("Network error loading search index"));
    };
    xhr.send();
  }

  // ---- Search execution ----

  function search(query) {
    if (!state.ready || !query || !query.trim()) {
      return [];
    }

    try {
      // Append a wildcard so partial words match while typing
      var results = state.index.search(query.trim() + "*");
      return results.slice(0, DEFAULTS.maxResults).map(function (result) {
        var doc = state.documents[result.ref];
        return {
          url: result.ref,
          title: doc ? doc.title : result.ref,
          summary: doc ? doc.summary : "",
          score: result.score
        };
      });
    } catch (error) {
      // Lunr throws on some syntax edge cases; fall back gracefully
      return [];
    }
  }

  // ---- Result rendering ----

  function renderResults(results, container, query) {
    container.innerHTML = "";

    if (!query || !query.trim()) {
      return;
    }

    if (results.length === 0) {
      container.innerHTML = '<p class="search-no-results">No pages matched <strong>' +
        escapeHtml(query) + '</strong>. Try fewer or different words.</p>';
      return;
    }

    var list = document.createElement("ul");
    list.className = "search-results-list";

    results.forEach(function (result) {
      var li = document.createElement("li");
      li.className = "search-result-item";

      var link = document.createElement("a");
      link.href = result.url;
      link.className = "search-result-link";
      link.textContent = result.title;

      li.appendChild(link);

      if (result.summary) {
        var summary = document.createElement("p");
        summary.className = "search-result-summary";
        summary.textContent = result.summary;
        li.appendChild(summary);
      }

      list.appendChild(li);
    });

    container.appendChild(list);
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // ---- Input wiring ----

  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    };
  }

  function wireInput(input, container) {
    var onInput = debounce(function () {
      var query = input.value;
      var results = search(query);
      renderResults(results, container, query);
    }, DEFAULTS.debounceMs);

    input.addEventListener("input", onInput);

    // Handle query parameter on page load
    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get("q");
    if (initialQuery) {
      input.value = initialQuery;
      // Search once index is ready
      var checkReady = setInterval(function () {
        if (state.ready) {
          clearInterval(checkReady);
          var results = search(initialQuery);
          renderResults(results, container, initialQuery);
        }
      }, 100);
    }
  }

  // ---- Initialization ----

  function init(options) {
    options = options || {};

    var inputId = options.inputId || DEFAULTS.inputId;
    var resultsId = options.resultsId || DEFAULTS.resultsId;
    var baseurl = options.baseurl || "";

    var input = document.getElementById(inputId);
    var container = document.getElementById(resultsId);

    if (!input || !container) {
      // Search elements not on this page — that's fine, do nothing
      return;
    }

    if (typeof lunr === "undefined") {
      console.error("[xanthan-search] Lunr.js is not loaded. Add it before search.js.");
      container.innerHTML = '<p class="search-no-results">Search is not available (missing library).</p>';
      return;
    }

    wireInput(input, container);

    loadIndex(baseurl, function (error) {
      if (error) {
        container.innerHTML = '<p class="search-no-results">Search index could not be loaded.</p>';
        return;
      }

      // If there was already a query typed before index loaded, run it now
      if (input.value.trim()) {
        var results = search(input.value);
        renderResults(results, container, input.value);
      }
    });
  }

  // Auto-initialize when DOM is ready
  function onReady() {
    // Look for a baseurl data attribute on the search input
    var input = document.getElementById(DEFAULTS.inputId);
    var baseurl = input ? input.getAttribute("data-baseurl") || "" : "";
    init({ baseurl: baseurl });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }

  // Expose for manual use
  window.XanthanSearch = {
    init: init,
    search: search
  };
})();
