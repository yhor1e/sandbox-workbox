self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (self.workbox) {
  console.log(`Yay! workbox is loaded`);
} else {
  console.log(`Boo! Workbox didn't load`);
}

self.workbox.routing.registerRoute(
  /\.js$/,
  new self.workbox.strategies.NetworkFirst()
);

self.workbox.routing.registerRoute(
  /\.css$/,
  new self.workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache'
  })
);
