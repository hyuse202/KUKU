if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),l={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>l[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Nbf4q5lrlUKzMyWjaRE-T/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/Nbf4q5lrlUKzMyWjaRE-T/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/312-1227a5837290e801.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/361-cfd13c1cf32e745d.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/388-ec8cb2977ada8055.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/396-a1aec8c01cc9d7e3.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/468-7182dcb0ce652114.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/9081a741-a20414459ae7bdaa.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/986-87eee2af89766d91.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/dmca/page-841d34bbc3a8d215.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/error-48b91d48665b427b.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/history/page-e817dbfbac140784.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/info/%5Bslug%5D/page-8b5299bbaf94b9aa.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/layout-b3a0dc63c3ab32cb.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/loading-0cc0526cdd7a07e4.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/not-found-e2e9bb06714ddbe4.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/page-6d812b85f8603cc3.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/read/%5Bid%5D/%5Bprovider%5D/%5Bslug%5D/page-9218b9a5f518a41e.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/search/page-0fc92c69b33502cb.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/app/tos/page-b5a879ab52e488f0.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/b5c10047-94e1ee16651a9802.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/fd9d1056-d4efde728a839238.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/main-app-08dc1093eb31449a.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/main-c2bf3f6f24c3084b.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-96b2f41199bbbeb0.js",revision:"Nbf4q5lrlUKzMyWjaRE-T"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/css/b2c7ceea0e879589.css",revision:"b2c7ceea0e879589"},{url:"/_next/static/media/2f92f105f91262ae-s.p.woff2",revision:"5fa46e45e2f06f7b884469ccf000c442"},{url:"/_next/static/media/954221991f3b6f5a-s.woff2",revision:"1b851e7de47ef6d54800d2b207a85eeb"},{url:"/_next/static/media/error.a893477b.gif",revision:"c6ee19d8a999e730174659f53b8a6362"},{url:"/_next/static/media/ff5f2bfa9f5e9f73-s.p.ttf",revision:"26d04666c283b77dca840f6c52ab81a3"},{url:"/_next/static/media/loading1.edd170b4.gif",revision:"ad05910eb34d7495d454962d19b6b26b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
