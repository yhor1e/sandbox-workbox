self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (self.workbox) {
  console.log(`Yay! workbox is loaded`);
} else {
  console.log(`Boo! Workbox didn't load`);
}
