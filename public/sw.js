if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/231-8ed474a6af6f7660.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/2443530c-1902ae65bc5ec87f.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/277-3c1778ab714e6fb9.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/37-af5180faa21c59b4.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/394-923b9c50992ed3dd.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/846-2c719f6e7ec134ce.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/864-318c58d7eb464a08.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/dmca/page-19c16a6b3efbe5d6.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/error-c4e614b7d0f27dfc.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/info/%5Bslug%5D/page-f13a93a53de17547.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/layout-b1493138b70db710.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/loading-1a35cd1487d7b051.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/not-found-a5559cfead94aaff.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/page-bd831a61179ecab6.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/read/mangadex/%5Bslug%5D/page-bf7633579e6f2236.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/read/mangareader/%5Bslug%5D/page-ef61628d520e06e3.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/search/page-7d2417243d7a4151.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/app/tos/page-2b1c7a063d582393.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/b9eae562-7d4dabe9823d4ee2.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/bb688357-4e4749bfea8cb571.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/main-21f79a2f8c037916.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/main-app-6e5341165e1e28ce.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2817e188b9a57426.js",revision:"nqQnDh-lsHYNwZ1uHZt7o"},{url:"/_next/static/css/11c45e86e2720e2e.css",revision:"11c45e86e2720e2e"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/error.a893477b.gif",revision:"c6ee19d8a999e730174659f53b8a6362"},{url:"/_next/static/media/ff5f2bfa9f5e9f73-s.p.ttf",revision:"26d04666c283b77dca840f6c52ab81a3"},{url:"/_next/static/media/loading1.edd170b4.gif",revision:"ad05910eb34d7495d454962d19b6b26b"},{url:"/_next/static/nqQnDh-lsHYNwZ1uHZt7o/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/nqQnDh-lsHYNwZ1uHZt7o/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
