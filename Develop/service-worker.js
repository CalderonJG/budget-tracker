const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/index.js',
    '/style.css',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/dist/bundle.js',
];

const STATIC_CACHE = "static-cache-v2";
const DATA_CACHE = "data-cache-v1";

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
        .open(STATIC_CACHE)
        .then(cache => {
            console.log("Your files were pre-cached!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );


})
