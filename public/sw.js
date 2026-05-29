var CACHE_NAME = 'quran-app-v3';

var STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/logo.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS).catch(function() {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
             .map(function(n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  var request = event.request;

  if (request.method !== 'GET') return;

  var url = request.url;

  if (url.indexOf('/api/') !== -1) return;

  if (url.indexOf('.mp3') !== -1) return;

  var isExternal = url.indexOf('alquran.cloud') !== -1 ||
                   url.indexOf('mp3quran.net') !== -1 ||
                   url.indexOf('googleapis.com') !== -1 ||
                   url.indexOf('cloudflare.com') !== -1 ||
                   url.indexOf('qrserver.com') !== -1;

  if (isExternal) return;

  event.respondWith(
    fetch(request).then(function(response) {
      if (response.ok) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          clone.text().then(function(text) {
            if (text.indexOf('PreconditionFailed') === -1 && text.indexOf('pending state') === -1) {
              cache.put(request, clone);
            } else {
              cache.delete(request);
            }
          });
        });
      }
      return response;
    }).catch(function() {
      return caches.match(request).then(function(cached) {
        if (cached) return cached;
        if (request.mode === 'navigate') return caches.match('/');
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
