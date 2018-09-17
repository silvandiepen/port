importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.7ad1972a518928a057ff.js",
    "revision": "126f6d8cc9ef01feacc4aa24226e411a"
  },
  {
    "url": "/_nuxt/layouts/default.7f5d485efd18baf839f1.js",
    "revision": "420b152801211c6ff4d5d73de21bc56d"
  },
  {
    "url": "/_nuxt/manifest.53973e156b6df94e62a7.js",
    "revision": "d7702c1d8cfb9ad02120bef299d938ef"
  },
  {
    "url": "/_nuxt/pages/index.42024f06bf654bdffe39.js",
    "revision": "f00636b8ab32afb02744c5d69b29ca6e"
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





