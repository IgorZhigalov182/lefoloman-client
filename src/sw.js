import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute'
import { clientsClaim } from 'workbox-core'
//
// import { registerRoute } from 'workbox-routing/registerRoute'
// import {NetworkFirst, CacheFirst, CacheOnly, NetworkOnly} from "workbox-strategies";
// import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin';
// import { CacheableResponsePlugin } from 'workbox-cacheable-response/CacheableResponsePlugin';
import { setCacheNameDetails } from  'workbox-core/setCacheNameDetails'

setCacheNameDetails({ prefix: "App" });

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting()
        clientsClaim()
    }
});

precacheAndRoute(self.__WB_MANIFEST)

// registerRoute(
//     ({ url }) => url.pathname.startsWith('/tiles/osm_bright/'),
//     new CacheFirst({
//         cacheName: "tiles",
//         plugins: [
//             new CacheableResponsePlugin({
//                 statuses: [0, 200],
//             }),
//             new ExpirationPlugin({
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 5, // 5 min cache
//                 purgeOnQuotaError: true
//             }),
//         ],
//     })
// )