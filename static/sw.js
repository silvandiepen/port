importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.303b18851b5acfee7a59.js",
    "revision": "4712811a1f96ae66197a6a51c7ee4655"
  },
  {
    "url": "/_nuxt/layouts/default.7f5d485efd18baf839f1.js",
    "revision": "420b152801211c6ff4d5d73de21bc56d"
  },
  {
    "url": "/_nuxt/manifest.da548044865910532352.js",
    "revision": "6c19361c24645e451eecae49a4b2f7b3"
  },
  {
    "url": "/_nuxt/pages/index.6c46d1d0b81b14378c28.js",
    "revision": "1f61295921e4ae89746d81b6005afa8b"
  },
  {
    "url": "/_nuxt/vendor.3558e993401a6a139678.js",
    "revision": "8d9cacc7a295749f7d4c1ed66fd2c12a"
  }
], {
  "cacheId": "port",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





