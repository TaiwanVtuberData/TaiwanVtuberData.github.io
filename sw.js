if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const t=e=>s(e,o),f={module:{uri:o},exports:d,require:t};i[o]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-fQf3df_b.css",revision:null},{url:"assets/index-ViQgcXpk.js",revision:null},{url:"index.html",revision:"8f8eb2b696e1317c38551601b461f12c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"60b50fdf09e31bd5f412d74de2f8d9a5"},{url:"android-chrome-512x512.png",revision:"47b1cf118d4eaa10ac0ef33cd3f90594"},{url:"manifest.webmanifest",revision:"c2614bf31f064d558d4746d03770b0f0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
