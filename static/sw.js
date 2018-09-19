importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c296c617f8b29a2e31ac.js",
    "revision": "0a016e48540f0f029901b33d699e31e4"
  },
  {
    "url": "/_nuxt/layouts/default.791bb004c464cc6871a4.js",
    "revision": "2219d61a6f3f04b44f430a297fd67f55"
  },
  {
    "url": "/_nuxt/layouts/empty.1cfcf60c0b92350d11ae.js",
    "revision": "f03ed8d1e9ff164599d89d9a016c7a92"
  },
  {
    "url": "/_nuxt/manifest.6ee8a1ebe3c683fda130.js",
    "revision": "7f30c7150e99f9acff7545fa9bfbb6ff"
  },
  {
    "url": "/_nuxt/pages/api.292e502f6dcab4528c73.js",
    "revision": "65bd24167c48df4e3abee9d0c1c00c33"
  },
  {
    "url": "/_nuxt/pages/index.b022378f04068719c2e4.js",
    "revision": "5b45cb41000a672d5188c9f27f9f6f53"
  },
  {
    "url": "/_nuxt/vendor.c911aa720314c8fcd214.js",
    "revision": "5d5c900bd25108afb88b8995582b8fdc"
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





