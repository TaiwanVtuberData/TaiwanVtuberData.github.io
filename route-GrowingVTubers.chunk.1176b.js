(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(t,e,r){"use strict";var n=r("hosL"),o=r("jUMG"),i="fixedSize__iw3af",c="profileImg__DvgtD";e.a=function(t){var e,r,a;return Object(n.h)("a",{href:"".concat(o.a,"/vtuber/").concat(t.VTuberId)},Object(n.h)("img",{class:"".concat(t.size?i:c),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(r=t.size)&&void 0!==r?r:void 0,height:null!==(a=t.size)&&void 0!==a?a:void 0}))}},Dy4S:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},i=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(n(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(n(t.diff));case"full":return"".concat(n(t.diff))}}},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),o="container__1lsi6",i="textField__bDpXR",c="button__maFzS";e.a=function(t){return Object(n.h)("div",{class:o},Object(n.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:c,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},UBrP:function(t,e,r){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function o(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){a=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var s=r("hosL"),b=r("QRet"),d=r("OhSV"),h=r("ENxA"),f=r("jUMG"),p=r("L9Wd"),y=r("drLk"),g=r("LftB"),v=(r("GFNa"),r("uZiY")),w=r("L9y4"),O=function(t,e){var r=t._7DaysGrowth.percentage,n=e._7DaysGrowth.percentage;return r>n?1:n>r?-1:0},m=function(t,e){var r=t._30DaysGrowth.percentage,n=e._30DaysGrowth.percentage;return r>n?1:n>r?-1:0},j=r("Dy4S"),_=r("y7vS"),x=r("Ud9u"),T=r("sviv");e.default=function(t){document.title="".concat(t.dictionary.header.growingVTubers," | ").concat(t.dictionary.header.title);var e=[{name:Object(s.h)(d.c,{id:"table.displayName"},"Name"),compact:!0,cell:function(t){return Object(s.h)(T.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name,YouTubeId:t.YouTubeId,TwitchId:t.TwitchId})}},{name:Object(s.h)(d.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriberCount},compact:!0,right:!0,sortable:!0},{name:Object(s.h)(d.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),sortFunction:O,cell:function(e){return Object(j.a)(e._7DaysGrowth,t.dictionary.table)},compact:!0,right:!0,sortable:!0,width:"150px",maxWidth:"250px"},{name:Object(s.h)(d.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:function(e){return Object(j.a)(e._30DaysGrowth,t.dictionary.table)},sortFunction:m,compact:!0,right:!0,sortable:!0,width:"150px",maxWidth:"250px"},{name:Object(s.h)(d.c,{id:"table.popularVideo"},"Popular Video"),cell:function(e){return void 0!==e.popularVideo?Object(s.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(x.a)(e.popularVideo)}}):null},width:"100px"},{name:Object(s.h)(d.c,{id:"table.group"},"Group"),cell:function(t){return""!==t.group?Object(s.h)("a",{class:v.a.groupLink,href:"".concat(f.a,"/group/").concat(t.group)},t.group):null},compact:!0,maxWidth:"100px"},{name:Object(s.h)(d.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""},compact:!0,minWidth:"25px",maxWidth:"100px"}],r=u(Object(b.k)([]),2),i=r[0],a=r[1],l=u(Object(b.k)(""),2),A=l[0],D=l[1],G=u(Object(b.k)(""),2),L=G[0],S=G[1],I=u(Object(b.k)(!1),2),C=I[0],P=I[1],V=i.filter((function(t){return t.name&&t.name.toLowerCase().includes(A.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(L.toLowerCase())})),k=Object(b.h)((function(){return Object(s.h)("div",{class:v.a.searchBarGroup},Object(s.h)(p.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return D(t.target.value)},onClear:function(){A&&(P(!C),D(""))},filterText:A}),Object(s.h)(p.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return S(t.target.value)},onClear:function(){L&&(P(!C),S(""))},filterText:L}))}),[A,L,C,t.dictionary]),Y=function(t,e){return c(c({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},z=u(Object(b.k)(!0),2),B=z[0],F=z[1],U=function(){var t,e=(t=function*(){yield y.f("100").then((function(t){a(t.data.VTubers.map((function(t){return t})).map((function(t){return function(t){var e,r,n;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(e=t.Twitch)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null!==(r=t.YouTube.subscriberCount)&&void 0!==r?r:0,_7DaysGrowth:Y(t.YouTube._7DaysGrowth,t.YouTube.subscriberCount),_30DaysGrowth:Y(t.YouTube._30DaysGrowth,t.YouTube.subscriberCount),popularVideo:t.popularVideo,group:null!==(n=t.group)&&void 0!==n?n:"",nationality:t.nationality,activity:t.activity}}(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),F(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,i){function c(t){o(u,n,i,c,a,"next",t)}function a(t){o(u,n,i,c,a,"throw",t)}var u=t.apply(e,r);c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(b.d)((function(){U()}),[]),Object(s.h)(s.Fragment,null,Object(s.h)("h1",null,Object(s.h)(d.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(s.h)(_.a,{width:"300px",fontSize:"13px",text:Object(s.h)(d.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(s.h)(h.a,n({},g.a,{columns:e,data:V,conditionalRowStyles:w.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(s.h)(d.c,{id:"table.loading"},"Loading..."),progressPending:B,subHeader:!0,subHeaderComponent:k})))}},qO1o:function(t,e,r){"use strict";var n=r("hosL"),o="tooltip__vtGmz",i="tooltipText__pA-zc";e.a=function(t){return Object(n.h)("div",{class:o},t.children,Object(n.h)("span",{class:i,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sviv:function(t,e,r){"use strict";var n=r("hosL"),o="container__ajzPI",i="YouTubeImg__LvwUa",c="TwitchImg__ckBvR",a=function(t){var e=function(t,e,r){return void 0===r?null:Object(n.h)("a",{href:e+r,target:"_blank",rel:"noopener noreferrer"},Object(n.h)("img",{class:t}))};return Object(n.h)("div",{class:o},e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(c,"https://www.twitch.tv/",t.TwitchId))},u=r("+Ox3"),l="container__VQnrV",s="profileImageFlex__NQP5p",b="nameFlex__DDBDq",d="channelLinksFlex__AtHrx";e.a=function(t){return Object(n.h)("div",{class:l},Object(n.h)("div",{class:s},Object(n.h)(u.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(n.h)("span",{class:b},t.name),Object(n.h)("div",{class:d},Object(n.h)(a,t)))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),o=r("qO1o"),i="questionMark__RT3wD";e.a=function(t){return Object(n.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:i}))}}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.1176b.js.map