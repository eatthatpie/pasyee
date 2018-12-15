var CACHE_NAME = 'pasyee-cache-v1-b181215-1247';
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
    const request = e.request;

    e.respondWith(
        fetch(request)
        .then(function (response) {
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
            .then(function (cache) {
                cache.put(request, responseToCache);
            })

            return response;
        })
        .catch(function () {
            caches.open(CACHE_NAME).then(function (cache) {
                cache.match(e.request)
                .then(function (response) {
                    return response;
                });
            });
        })
    );
});