var CACHE_NAME = 'pasyee-cache-v1-b181201-1310';
var urlsToCache = [
    '/',
    '/roadmap',
    '/cookie-policy',
    '/send-feedback',
    '/dist/build.js',
    '/images/favicon.ico'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => { 
            return cache.addAll(urlsToCache); 
        })
    );
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName === CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener ('fetch', function (e) {
    e.respondWith(
        caches.match(e.request)
        .then(function (response) {
            if (response) {
                return response;
            }
        })
    );

    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            var requestOnce = e.request.clone();

            return fetch(requestOnce)
            .then(function (response) {
                return cache.put(e.request, response);
            });
        })
    );
});