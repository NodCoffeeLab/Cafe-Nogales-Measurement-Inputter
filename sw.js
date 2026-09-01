const CACHE_NAME = 'nogales-measure-qc-v1';
const ASSETS = [
  './',
  './measurement_inputter.html',
  'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
