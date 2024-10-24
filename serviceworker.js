var staticCacheName = "skull";

const assets = [
  "./index.html",
  "./src/favicon.ico",
  "./src/main.css",
  "./manifest.json",
  "./serviceworker.js",
  "./src/three.js",
  "./src/fflate.module.js",
  "./src/lil-gui.module.min.js",
  "./src/OrbitControls.js",
  "./src/TrackballControls.js",
  "./src/stats.module.js",
  "./src/VTKLoader.js",
  "./src/NRRDLoader.js",
  "./src/Volume.js",
  "./src/VolumeSlice.js",
  "./src/icon-512x512.png",
  "./src/icon-192x192.png",
  "./src/fflate.module.js",
  "./file/lesion.vtk",
  "./file/skin.vtk",
  "./file/1.vtk",
  "./file/2.vtk",
  "./file/3.vtk",
  "./file/4.vtk",

];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});