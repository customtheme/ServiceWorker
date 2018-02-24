importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('onetotech').then(function(cache) {
return cache.addAll([
'/',
'/cache/css/style.css',
'/cache/js/app.js',
]);
})
);
});
self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
