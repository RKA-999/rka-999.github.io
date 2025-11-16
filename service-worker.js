const CACHE_NAME = 'aj-jewellers-cache-v1';
// আপনার সমস্ত গুরুত্বপূর্ণ ফাইল এখানে যোগ করুন
const urlsToCache = [
  '/', 
  'index.html',
  'style.css',
  'script.js', 
  'manifest.json', 
  'icon-512x512.png', 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
