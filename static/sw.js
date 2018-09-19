importScripts('/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.77dac811fb4578d807c1.js",
    "revision": "7cd2d63bb86b1909d789c19d6c562377"
  },
  {
    "url": "/_nuxt/layouts/default.7f5d485efd18baf839f1.js",
    "revision": "420b152801211c6ff4d5d73de21bc56d"
  },
  {
    "url": "/_nuxt/layouts/empty.1cfcf60c0b92350d11ae.js",
    "revision": "f03ed8d1e9ff164599d89d9a016c7a92"
  },
  {
    "url": "/_nuxt/manifest.77e81ea5a7c53892a6af.js",
    "revision": "1b44810a7284db17681dfe7a72e00dcc"
  },
  {
    "url": "/_nuxt/pages/api.292e502f6dcab4528c73.js",
    "revision": "65bd24167c48df4e3abee9d0c1c00c33"
  },
  {
    "url": "/_nuxt/pages/index.2a83edbcf6c698eeeb1c.js",
    "revision": "42ae166b902d9e4c225e555331bc87ff"
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





