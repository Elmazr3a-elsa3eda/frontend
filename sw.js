importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com' ||
             url.origin === 'https://fonts.gstatic.com',
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://api.mapbox.com',
  new workbox.strategies.StaleWhileRevalidate()
);
