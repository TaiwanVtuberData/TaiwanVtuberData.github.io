(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return l}));var c=r("sPVG"),a=function(t,e){return i(i({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},l=function(t){return i(i({},Object(c.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:a(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:a(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"49Dv":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return u}));var n=r("5Sdp"),o=r("8r9F"),i=function(t){return null==t?{hasDebutInfo:!1}:u(t)},u=function(t){return{hasDebutInfo:!0,debutDate:t,isToday:t===n.c,isRecentlyDebut:Object(o.a)(Object(o.b)(t,n.a),n.b)<30}}},"4BB4":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"5Sdp":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return c}));var n=r("8r9F"),o=r("Dy4S"),i=Object(o.b)("8",8),u=Object(n.d)(new Date,i),c=Object(n.g)(u,i)},"69ZN":function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("hosL"),o=r("OhSV"),i=r("CGiE"),u=function(){return{name:Object(n.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(n.h)(i.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"6i5z":function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function i(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=r("drLk"),s=r("hosL"),y=r("OhSV"),d=r("QRet"),h=r("ENxA"),p=r("L9y4"),O=r("4BB4"),v=r("69ZN"),j=r("sKFU"),m=r("U2b0"),g=r("76Fs"),w=r("LftB"),S=r("0kGK"),T=r("y7vS"),P=r("Wcfx");e.a=function(e){var r=[Object(v.a)(),Object(m.a)(),Object(g.a)(e.dictionary.table),l(l({},Object(j.a)()),{},{hide:h.a.SM})],n=u(Object(d.l)([]),2),c=n[0],a=n[1],f=u(Object(d.l)(!0),2),D=f[0],x=f[1],L=function(){var t,e=(t=function*(){yield b.f("10").then((function(t){a(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(S.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),x(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,o){function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}var a=t.apply(e,r);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(d.d)((function(){L()}),[]),Object(s.h)(t,null,Object(s.h)("h3",null,Object(s.h)("a",{href:Object(P.b)({type:"growing-vtubers"})},Object(s.h)(y.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(s.h)(t,null," "),Object(s.h)(y.c,{id:"header.top10"},"Top 10")),Object(s.h)(T.a,{width:"300px",fontSize:"13px",text:Object(s.h)(y.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(s.h)(h.b,o({},w.a,{columns:r,data:c,conditionalRowStyles:p.a,customStyles:O.a,progressComponent:Object(s.h)(y.c,{id:"text.loading"},"Loading..."),progressPending:D})))}}).call(this,r("hosL").Fragment)},"76Fs":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("Dy4S"),u=r("0Khb"),c=function(t){return{name:Object(n.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(i.a)(e._7DaysGrowth,t)},omit:u.c}}},"7DLW":function(t,e,r){"use strict";var n=r("hosL"),o=r("WbG0"),i="noWrap__BzT1O",u="YouTubeRed__1JOkf",c="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(n.h)("span",{class:"".concat(i," ").concat(u)},Object(n.h)(o.a,{countType:t}))},r=function(t){return Object(n.h)("span",{class:"".concat(i," ").concat(c)},Object(n.h)(o.a,{countType:t}))};return Object(n.h)(n.Fragment,null,Object(n.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount),Object(n.h)("span",{class:i}," + "),r(t.TwitchCount)):t.YouTubeCount?Object(n.h)(n.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(n.h)(n.Fragment,null,r(t.TwitchCount)):null}),t))}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),o=r("+Ox3"),i="container__vr1DG",u="profileImageFlex__4VERG",c="nameFlex__WFOO9";e.a=function(t){return Object(n.h)("div",{class:i},Object(n.h)("div",{class:u},Object(n.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(n.h)("span",{class:c},t.name))}},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u}));var n=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(n(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff));case"full":return"".concat(n(t.diff))}},u=function(t,e){if(void 0!==t){var r=parseInt(t,10);if(!1===isNaN(r))return r}return e}},GHZf:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("hosL"),o=r("OhSV"),i=r("7DLW"),u=r("0Khb"),c=function(t){if(t)return{tag:"has",count:t}},a=function(){return{name:Object(n.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(n.h)(i.a,{YouTubeCount:c(t.YouTubePopularity),TwitchCount:c(t.TwitchPopularity)})},omit:u.c}}},HSXE:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("hosL"),o=r("OhSV"),i=r("7DLW"),u=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(n.h)(i.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut},style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LUqa:function(t,e,r){"use strict";(function(t){var n=r("hosL"),o=r("oeP6");e.a=function(e){return Object(n.h)(t,null,e.data.map((function(t,r){return Object(n.h)(o.a,{divPrefix:e.divPrefix,id:r,key:r,VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:t.startTime,now:e.now})})))}}).call(this,r("hosL").Fragment)},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return u}));var n=r("hosL"),o=r("OhSV"),i=r("GKGp"),u=function(){var e=Object(i.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},NF43:function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function i(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=r("drLk"),s=r("hosL"),y=r("OhSV"),d=r("QRet"),h=r("ENxA"),p=r("4BB4"),O=r("69ZN"),v=r("GHZf"),j=r("HSXE"),m=r("LftB"),g=r("PzPG"),w=r("enE3"),S=r("y7vS"),T=r("sKFU"),P=r("pmH6"),D=r("L9y4"),x=r("Wcfx");e.a=function(){var e=[l(l({},Object(P.a)()),{},{width:"30px"}),Object(O.a)(),Object(v.a)(),Object(j.a)(),l(l({},Object(T.a)()),{},{hide:h.a.SM})],r=u(Object(d.l)([]),2),n=r[0],c=r[1],a=u(Object(d.l)(!0),2),f=a[0],L=a[1],V=function(){var t,e=(t=function*(){yield b.h({sortBy:"livestream",count:"10"}).then((function(t){c(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(w.a)(t,e+1)})).sort(g.b).map((function(t,e){return l(l({},t),{},{ranking:e+1})}))),L(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,o){function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}var a=t.apply(e,r);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(d.d)((function(){V()}),[]),Object(s.h)(t,null,Object(s.h)("h3",null,Object(s.h)("a",{href:Object(x.b)({type:"trending-vtubers",sortOrder:"livestream"})},Object(s.h)(y.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(s.h)(t,null," "),Object(s.h)(y.c,{id:"header.top10"},"Top 10")),Object(s.h)(S.a,{width:"300px",fontSize:"13px",text:Object(s.h)(y.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(s.h)(h.b,o({},m.a,{columns:e,data:n,conditionalRowStyles:D.a,customStyles:p.a,progressComponent:Object(s.h)(y.c,{id:"text.loading"},"Loading..."),progressPending:f})))}}).call(this,r("hosL").Fragment)},OPsQ:function(t,e,r){"use strict";function n(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var u=r("hosL"),c=r("OhSV"),a=r("paJy"),l=r("6i5z"),f=r("drLk"),b=r("QRet"),s=r("8r9F"),y=r("v6a3"),d=r("LUqa"),h="horizontalFlex__qr4MR",p=function(t){var e=o(Object(b.l)(),2),r=e[0],i=e[1],a=o(Object(b.l)(!0),2),l=a[0],p=a[1],O=Object(b.k)(null),v=function(){var e,r=(e=function*(){yield f.g(t.modifier).then((function(e){var r=e.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(y.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()}));i(r),p(!1),setTimeout((function(){var e,n,o,i,u=new Date(t.now);u.setHours(u.getHours()-1);var c=Object(s.c)(r,u),a=document.getElementById("".concat(t.divPrefix,"-").concat(Math.min(r.length-1,c))),l=(null!==(e=null==a?void 0:a.offsetLeft)&&void 0!==e?e:0)-(null!==(n=null===(o=O.current)||void 0===o?void 0:o.offsetLeft)&&void 0!==n?n:0);null===(i=O.current)||void 0===i||i.scrollTo({left:l,behavior:"smooth"})}),t.delayMs)}))},function(){var t=this,r=arguments;return new Promise((function(o,i){function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}var a=e.apply(t,r);u(void 0)}))});return function(){return r.apply(this,arguments)}}();Object(b.d)((function(){v()}),[]);return Object(u.h)((function(){return l?Object(u.h)("div",{style:{textAlign:"center"}},Object(u.h)("span",null,Object(u.h)(c.c,{id:"text.loading"},"Loading..."))):void 0===r||0===r.length?Object(u.h)("div",{style:{textAlign:"center"}},Object(u.h)("span",null,Object(u.h)(c.c,{id:"text.noData"},"No Data"))):Object(u.h)("div",{ref:O,class:h},Object(u.h)(d.a,{divPrefix:t.divPrefix,data:r,now:t.now}))}),null)},O=r("shcR"),v=r("NF43"),j=(r("GFNa"),r("MJ1U")),m=r("Wcfx"),g="tableGrid__Ju0u9",w="tableItem__iikA+",S="streamingSection__unwHH";e.default=function(t){"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title));return Object(u.h)(u.Fragment,null,Object(u.h)("h1",null,Object(u.h)(c.c,{id:"header.title"},"Taiwan VTuber Data"),Object(j.a)()),Object(u.h)((function(){var t=new Date;return Object(u.h)("div",{class:S},Object(u.h)("div",null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(u.h)(c.c,{id:"header.debutToday"},"Debut Today"))),Object(u.h)(p,{divPrefix:"debut",delayMs:200,modifier:"debut-no-title",now:t})),Object(u.h)("div",null,Object(u.h)("h3",null,Object(u.h)("a",{href:Object(m.b)({type:"livestreams"})},Object(u.h)(c.c,{id:"header.livestreaming"},"Streaming Now"))),Object(u.h)(p,{divPrefix:"all",delayMs:200,modifier:"all-no-title",now:t})))}),null),Object(u.h)("div",{class:g},Object(u.h)("div",{class:w},Object(u.h)(v.a,null)),Object(u.h)("div",{class:w},Object(u.h)(a.a,null)),Object(u.h)("div",{class:w},Object(u.h)(l.a,{dictionary:t.dictionary})),Object(u.h)("div",{class:w},Object(u.h)(O.a,null))))}},PzPG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(t,e){var r,n,o,i,u=(null!==(r=t.YouTubePopularity)&&void 0!==r?r:0)+(null!==(n=t.TwitchPopularity)&&void 0!==n?n:0),c=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(i=e.TwitchPopularity)&&void 0!==i?i:0);return u>c?1:c>u?-1:0},o=function(t,e){return-1*n(t,e)}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return!0===t.debutInfo.hasDebutInfo&&t.debutInfo.isToday},style:{color:"mediumblue"}}]},U2b0:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),i=function(){return{name:Object(n.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},YRVu:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("hosL"),o=r("OhSV"),i=function(){return{name:Object(n.h)(o.c,{id:"table.debutDate"},"Debut Date"),selector:function(t){return t.debutInfo.debutDate}}}},enE3:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return a}));var c=r("sPVG"),a=function(t,e){var r,n;return i(i({},Object(c.a)(t)),{},{YouTubePopularity:null===(r=t.YouTube)||void 0===r?void 0:r.popularity,TwitchPopularity:null===(n=t.Twitch)||void 0===n?void 0:n.popularity,ranking:e})}},oeP6:function(t,e,r){"use strict";var n=r("hosL"),o=r("8r9F"),i=r("CGiE"),u=r("wnwi"),c="verticalFlex__i3ZgG";e.a=function(t){return Object(n.h)("div",{id:"".concat(t.divPrefix,"-").concat(t.id),class:c},Object(n.h)(i.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(n.h)(u.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(n.h)("div",null,Object(n.h)("span",null,Object(o.f)(t.startTime,t.now))))}},paJy:function(t,e,r){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function i(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=r("drLk"),s=r("hosL"),y=r("OhSV"),d=r("QRet"),h=r("ENxA"),p=r("L9y4"),O=r("4BB4"),v=r("TToT"),j=r("69ZN"),m=r("sKFU"),g=r("HSXE"),w=r("LftB"),S=r("qM+f"),T=r("YRVu"),P=r("Wcfx");e.a=function(){var e=[Object(T.a)(),Object(j.a)(),Object(g.a)(),l(l({},Object(m.a)()),{},{hide:h.a.SM})],r=u(Object(d.l)([]),2),n=r[0],c=r[1],a=u(Object(d.l)(!0),2),f=a[0],D=a[1],x=function(){var t,e=(t=function*(){yield b.b("next-7-days").then((function(t){c(t.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(t){return Object(S.a)(t)}))),D(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,o){function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}var a=t.apply(e,r);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(d.d)((function(){x()}),[]),Object(s.h)(t,null,Object(s.h)("h3",null,Object(s.h)("a",{href:Object(P.b)({type:"debut-vtubers"})},Object(s.h)(y.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(s.h)(h.b,o({},w.a,{columns:e,data:n,conditionalRowStyles:p.a.concat(v.a),customStyles:O.a,progressPending:f,progressComponent:Object(s.h)(y.c,{id:"text.loading"},"Loading...")})))}}).call(this,r("hosL").Fragment)},pmH6:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},"qM+f":function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return l}));var c=r("sPVG"),a=r("49Dv"),l=function(t){return i(i({},Object(c.a)(t)),{},{debutInfo:Object(a.a)(t.debutDate)})}},qO1o:function(t,e,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(n.h)("div",{class:o},t.children,Object(n.h)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),o=r("OhSV"),i=r("0yJK"),u=r("0Khb"),c=function(){return{name:Object(n.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(n.h)(i.a,{popularVideo:t.popularVideo}):null},omit:u.c}}},sPVG:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("49Dv"),o=function(t){var e,r,o,i;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(r=t.YouTube)||void 0===r?void 0:r.subscriber,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(i=t.Twitch)||void 0===i?void 0:i.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(n.b)(t.debutDate)}}},shcR:function(t,e,r){"use strict";(function(t){function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?e(a):Promise.resolve(a).then(n,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=r("drLk"),a=r("hosL"),l=r("OhSV"),f=r("QRet"),b=r("ENxA"),s=r("L9y4"),y=r("4BB4"),d=r("69ZN"),h=r("sKFU"),p=r("HSXE"),O=r("LftB"),v=r("sPVG"),j=r("Wcfx");e.a=function(){var e=[Object(d.a)(),Object(p.a)(),Object(h.a)()],r=i(Object(f.l)([]),2),u=r[0],m=r[1],g=i(Object(f.l)(!0),2),w=g[0],S=g[1],T=function(){var t,e=(t=function*(){yield c.l("10").then((function(t){m(t.data.VTubers.map((function(t){return Object(v.a)(t)}))),S(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,i){function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}var a=t.apply(e,r);u(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(f.d)((function(){T()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)("a",{href:Object(j.b)({type:"all-vtubers"})},Object(a.h)(l.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10"))),Object(a.h)(b.b,n({},O.a,{columns:e,data:u,conditionalRowStyles:s.a,customStyles:y.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,r("hosL").Fragment)},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),o=r("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(n.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:i}))}}}]);
//# sourceMappingURL=route-home.chunk.f0926.js.map