const CACHE_NAME='travel-wishlist-v1';
const ASSETS=[
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './favicon.ico'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    ))
  );
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(res=>res||fetch(e.request).then(r=>{
      var cache=caches.open(CACHE_NAME);
      cache.then(c=>c.put(e.request,r.clone()));
      return r;
    }).catch(()=>caches.match('./index.html')))
  );
});
