if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),f={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WfscmA1m-Ofqo8sgwpBWr/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/WfscmA1m-Ofqo8sgwpBWr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/231-8ed474a6af6f7660.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/2443530c-1902ae65bc5ec87f.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/37-af5180faa21c59b4.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/394-923b9c50992ed3dd.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/603-7a2d9ddf9ef3aa82.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/629-c0b131b92bdf86be.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/844-97ed602344ba93b8.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/dmca/page-81dc06a688c8f63a.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/error-60c7dec12450de30.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/info/%5Bslug%5D/page-0ab62f8ead61f826.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/layout-fefec3c867d6f32f.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/loading-76e8319f79522abd.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/not-found-6a16747aa49ff01a.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/page-9984e1ee5c9c6bc1.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/read/mangadex/%5Bslug%5D/page-6fd6f90d016294a1.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/read/mangareader/%5B...params%5D/page-587cf52b1cf671fa.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/search/page-ee19d56597289d90.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/app/tos/page-8ef97b39b4a880ac.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/bb688357-4e4749bfea8cb571.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/main-21f79a2f8c037916.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/main-app-6e5341165e1e28ce.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6ddc9f8951546144.js",revision:"WfscmA1m-Ofqo8sgwpBWr"},{url:"/_next/static/css/0a1daaf8929609c6.css",revision:"0a1daaf8929609c6"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/error.a893477b.gif",revision:"c6ee19d8a999e730174659f53b8a6362"},{url:"/_next/static/media/ff5f2bfa9f5e9f73-s.p.ttf",revision:"26d04666c283b77dca840f6c52ab81a3"},{url:"/_next/static/media/loading1.edd170b4.gif",revision:"ad05910eb34d7495d454962d19b6b26b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
