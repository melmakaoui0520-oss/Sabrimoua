function searchSite(form) {
  const query = form.elements.q.value.trim();
  if (!query) return false;

  const engines = {
    google: "https://www.google.com/search?q=",
    bing: "https://www.bing.com/search?q=",
    duck: "https://duckduckgo.com/?q="
  };

  const engine = form.elements.engine.value;
  const baseUrl = engines[engine] || engines.google;

  window.open(
    baseUrl + encodeURIComponent(query),
    "_blank",
    "noopener,noreferrer"
  );

  return false;
      }
