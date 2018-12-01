var CACHE_NAME = 'pasyee-cache-v1-b181201-1310';
var urlsToCache = [
    '/',
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

            var requestOnce = e.request.clone();

            return fetch(requestOnce).then(function (response) {
                var responseToCache = response.clone();

                caches.open(CACHE_NAME)
                .then(function (cache) {
                    cache.put(e.request, responseToCache);
                })

                return response;
            });
        })
    );
});