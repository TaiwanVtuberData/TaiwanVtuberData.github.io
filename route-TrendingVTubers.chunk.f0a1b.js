(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"49Dv":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n("5Sdp"),o=n("8r9F"),i=function(t){return null==t?{hasDebutInfo:!1}:u(t)},u=function(t){return{hasDebutInfo:!0,debutDate:t,isToday:t===r.c,isRecentlyDebut:Object(o.a)(Object(o.b)(t,r.a),r.b)<30}}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"4RMJ":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a}));var r=n("qjhZ"),o=function(t,e){var n=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return n||o?o?n?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(r.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},i=function(t,e){var n=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return n||o?o?n?t.TwitchFollower&&e.TwitchFollower?-1*Object(r.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},u=function(t,e){var n,o,i,u,c=(null!==(n=Object(r.b)(t.YouTubeSubscriber))&&void 0!==n?n:0)+(null!==(o=Object(r.b)(t.TwitchFollower))&&void 0!==o?o:0),a=(null!==(i=Object(r.b)(e.YouTubeSubscriber))&&void 0!==i?i:0)+(null!==(u=Object(r.b)(e.TwitchFollower))&&void 0!==u?u:0);return c>a?1:a>c?-1:0},c=function(t,e){return-1*u(t,e)},a=function(t){switch(t){case"YouTube+Twitch":return c;case"YouTube":return o;case"Twitch":return i}}},"5Sdp":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c}));var r=n("8r9F"),o=n("Dy4S"),i=Object(o.b)("8",8),u=Object(r.d)(new Date,i),c=Object(r.g)(u,i)},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),i=n("CGiE"),u=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(i.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),i=n("Wcfx"),u=function(){return{name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:function(t){return void 0!==t.group?Object(r.h)("a",{href:Object(i.b)({type:"group",name:t.group})},t.group):null}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),i="noWrap__BzT1O",u="YouTubeRed__1JOkf",c="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(i," ").concat(u)},Object(r.h)(o.a,{countType:t}))},n=function(t){return Object(r.h)("span",{class:"".concat(i," ").concat(c)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:i}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null}),t))}},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),i="container__vr1DG",u="profileImageFlex__4VERG",c="nameFlex__WFOO9";e.a=function(t){return Object(r.h)("div",{class:i},Object(r.h)("div",{class:u},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:c},t.name))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}},u=function(t,e){if(void 0!==t){var n=parseInt(t,10);if(!1===isNaN(n))return n}return e}},GHZf:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),i=n("7DLW"),u=n("0Khb"),c=function(t){if(t)return{tag:"has",count:t}},a=function(){return{name:Object(r.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(r.h)(i.a,{YouTubeCount:c(t.YouTubePopularity),TwitchCount:c(t.TwitchPopularity)})},omit:u.c}}},HP4b:function(t,e,n){"use strict";var r=n("hosL"),o="tipText__4DHD3",i=n("otXJ");e.a=function(t){return Object(r.h)("div",null,Object(r.h)("span",{class:o},t.tipText),Object(r.h)("select",{class:i.a.dropDown,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(r.h)("option",{key:t.value,value:t.value},t.option)})):null))}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),i=n("7DLW"),u=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(i.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),i=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},"L4T+":function(t,e,n){"use strict";function r(t,e){return!Object.entries(e).map((function(e){var n=t[e[0]],r=e[1];return null===r||null!=n&&""!==n&&n.toLowerCase().includes(r.toLowerCase())})).some((function(t){return!1===t}))}n.d(e,"a",(function(){return r}))},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",i="textField__bDpXR",u="button__maFzS";e.a=function(t){var e;return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:null!==(e=t.filterText)&&void 0!==e?e:"",onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:u,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"active"===t.activity&&void 0!==t.debutInfo&&!0===t.debutInfo.hasDebutInfo&&!0===t.debutInfo.isRecentlyDebut},style:{backgroundColor:"rgba(156, 205, 196, 0.5)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),i=n("GKGp"),u=function(){var e=Object(i.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},PzPG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t,e){var n,r,o,i,u=(null!==(n=t.YouTubePopularity)&&void 0!==n?n:0)+(null!==(r=t.TwitchPopularity)&&void 0!==r?r:0),c=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(i=e.TwitchPopularity)&&void 0!==i?i:0);return u>c?1:c>u?-1:0},o=function(t,e){return-1*r(t,e)}},QV1m:function(t,e,n){"use strict";n.r(e),function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=n("drLk"),f=n("hosL"),d=n("OhSV"),p=n("QRet"),h=n("ENxA"),y=n("4BB4"),v=n("7Asn"),O=n("69ZN"),j=n("JY+X"),m=n("GHZf"),g=n("sKFU"),w=n("HSXE"),T=n("LftB"),S=n("MJ1U"),P=n("PzPG"),x=n("4RMJ"),C=n("enE3"),L=n("y7vS"),Y=n("uZiY"),D=n("pmH6"),V=n("L9y4"),F=n("Wfbs"),_=n("L4T+"),I=n("HP4b"),k=n("Wcfx"),E=n("0Khb");e.default=function(e){document.title="".concat(e.dictionary.header.trendingVTubers," | ").concat(e.dictionary.header.title);var n=[l(l({},Object(D.a)()),{},{sortable:!0,width:"40px"}),Object(O.a)(),l(l({},Object(m.a)()),{},{sortFunction:P.a,sortable:!0,omit:E.c}),l(l({},Object(w.a)()),{},{sortFunction:x.b,sortable:!0}),Object(g.a)(),Object(v.a)(),Object(j.a)()],r=u(Object(p.l)([]),2),c=r[0],a=r[1],s=u(Object(p.l)({name:null,YouTubeId:null,TwitchId:null,group:null,nationality:null}),2),G=s[0],B=s[1],H=c.filter((function(t){return Object(_.a)(t,G)})),R=Object(p.i)((function(){var t=[{option:Object(f.h)(d.c,{id:"table.livestream"},"Livestream"),value:"livestream"},{option:Object(f.h)(d.c,{id:"table.video"},"Video"),value:"video"},{option:Object(f.h)(d.c,{id:"table.combined"},"Combined"),value:"combined"}],n=new Map([["name",e.dictionary.table.searchByDisplayName],["YouTubeId",e.dictionary.table.searchByYouTubeId],["TwitchId",e.dictionary.table.searchByTwitchId],["group",e.dictionary.table.searchByGroup],["nationality",e.dictionary.table.searchByNationality]]);return Object(f.h)("div",{class:Y.a.searchBarGroup},Object(f.h)(I.a,{tipText:e.dictionary.table.sortingMethod,value:e.modifier,optionValue:t,onChange:function(t){return Object(k.c)({type:"trending-vtubers",sortOrder:t.target.value})}}),Object(f.h)(F.a,{filterModel:G,fieldPlaceHolderMappings:n,openSearchText:e.dictionary.text.openSearch,closeSearchText:e.dictionary.text.closeSearch,onChange:function(t){B(t)}}))}),[G,e.modifier,e.dictionary]),A=u(Object(p.l)(!0),2),M=A[0],U=A[1],z=function(){var t,n=(t=function*(){yield b.h({sortBy:e.modifier,count:"100"}).then((function(t){a(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(C.a)(t,e+1)})).sort(P.b).map((function(t,e){return l(l({},t),{},{ranking:e+1})}))),U(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,o){function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}var a=t.apply(e,n);u(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(p.d)((function(){z()}),[]),Object(f.h)(t,null,Object(f.h)("h1",null,Object(f.h)(d.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(S.a)(),Object(f.h)(L.a,{width:"300px",fontSize:"13px",text:Object(f.h)(d.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(f.h)(h.b,o({},T.a,{columns:n,data:H,conditionalRowStyles:V.a,customStyles:y.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(f.h)(d.c,{id:"text.loading"},"Loading..."),progressPending:M,subHeader:!0,subHeaderComponent:R})))}}.call(this,n("hosL").Fragment)},Wfbs:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=n("hosL"),s=n("QRet"),b=n("L9Wd"),f="floating__uhu4Y",d="floatingHidden__mvSUQ",p="floatingShowing__nwzm5";e.a=function(t){var e=c(Object(s.l)(!1),2),n=e[0],r=e[1],o=c(Object(s.l)(t.filterModel),2),a=o[0],h=o[1],y=function(e){var n=e,r=function(e){var r=function(t){if(null==t)return null;var e=t.trim();return""===e?null:e}(e);h(i(i({},a),{},u({},n,r))),function(e){null!=t.onChange&&t.onChange(e)}(i(i({},a),{},u({},n,r)))};return Object(l.h)(b.a,{key:e,placeholderText:t.fieldPlaceHolderMappings.get(n),filterText:a[n],onFilter:function(t){return r(t.target.value)},onClear:function(){return r(null)}})},v=Object.keys(t.filterModel).map((function(t){return y(t)}));return Object(l.h)("div",null,Object(l.h)((function(){return Object(l.h)("input",{type:"button",value:!0===n?t.closeSearchText:t.openSearchText,onClick:function(){return r(!n)}})}),null),!0===n?Object(l.h)("div",{class:n?"".concat(f," ").concat(p):"".concat(f," ").concat(d)},v):null)}},enE3:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}));var c=n("sPVG"),a=function(t,e){var n,r;return i(i({},Object(c.a)(t)),{},{YouTubePopularity:null===(n=t.YouTube)||void 0===n?void 0:n.popularity,TwitchPopularity:null===(r=t.Twitch)||void 0===r?void 0:r.popularity,ranking:e})}},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},qjhZ:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t){if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=function(t,e){switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),i=n("0yJK"),u=n("0Khb"),c=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(i.a,{popularVideo:t.popularVideo}):null},omit:u.c}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("49Dv"),o=function(t){var e,n,o,i;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollower:null===(i=t.Twitch)||void 0===i?void 0:i.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality,debutInfo:Object(r.b)(t.debutDate)}}},uZiY:function(t,e){"use strict";e.a={searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:i}))}}}]);
//# sourceMappingURL=route-TrendingVTubers.chunk.f0a1b.js.map