console.log("Hello from service worker!")

// SERVICE WORKER FILE SNIPPET
const cacheName = "EcomApp";
const filesToCache = ["index.html",
                    "/src/views/Product.jsx",
                      "/src/styles.css", 
                      "/src/App.jsx" ];

// Triggers immediately
self.addEventListener("install", function(event) {
  // Perform install steps - stores all static files
  // Common Pattern
  console.log("[Serviceworker] Install");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});