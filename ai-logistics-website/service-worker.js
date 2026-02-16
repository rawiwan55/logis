self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ai-logistics-v1").then(cache => {
      return cache.addAll([
        "index.html",
        "topic.html",
        "innovations.html",
        "case-studies.html",
        "future.html",
        "references.html",
        "style.css",
        "script.js"
      ]);
    })
  );
});
