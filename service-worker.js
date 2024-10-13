const CACHE_NAME = 'aquasense-v1';
const urlsToCache = [
  '/',
  '/AquaSense.html',
  '/regioes.html',
  '/parametros.html',
  '/dados.html',
  '/contato.html',
  '/styles.css',
  '/script.js',
  '/regioes.js',
  '/parametros.js',
  '/dados.js',
  '/contato.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});