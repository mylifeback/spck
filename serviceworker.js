var staticCacheName = "skull";
import { models, names, select } from "./select/data.js";
const folder = "https://mylifeback.github.io/large/model/" + select.folder + "/";

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
  folder + "skin.vtk",
  folder + "lesion.vtk",
  folder + "1.vtk",
  folder + "2.vtk",
  folder + "3.vtk",
  folder + "4.vtk",

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