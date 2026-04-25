const cacheName = 'repairmate-v1';
const assets = [
  '/',
  '/index.html',
  // এখানে আপনার স্টাইল বা অন্য কোনো ফাইল থাকলে তার নাম দিন
];

// ইনস্টল ইভেন্ট
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// ফেচ ইভেন্ট (অফলাইনেও অ্যাপ খোলার জন্য)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});