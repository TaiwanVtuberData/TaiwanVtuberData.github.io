(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Ox3":function(t,e,r){"use strict";var n=r("hosL"),i=r("jUMG"),o="fixedSize__iw3af",a="profileImg__DvgtD";e.a=function(t){var e,r,u;return Object(n.h)("a",{href:"".concat(i.a,"/vtuber/").concat(t.VTuberId)},Object(n.h)("img",{class:"".concat(t.size?o:a),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(r=t.size)&&void 0!==r?r:void 0,height:null!==(u=t.size)&&void 0!==u?u:void 0}))}},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),i="container__1lsi6",o="textField__bDpXR",a="button__maFzS";e.a=function(t){return Object(n.h)("div",{class:i},Object(n.h)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:a,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},Px4b:function(t,e,r){"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function i(t,e,r,n,i,o,a){try{var u=t[o](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,i)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var u=r("hosL"),c=r("QRet"),l=r("OhSV"),s=r("ENxA"),b=r("jUMG"),d=r("drLk"),h=r("L9Wd"),f=r("LftB"),p=(r("GFNa"),"profileGrid__glJEL"),m=r("uZiY"),v=r("+Ox3"),g=r("qO1o"),y=function(t){return Object(u.h)(g.a,{text:t.VTuber.name},Object(v.a)({VTuberId:t.VTuber.id,imgUrl:t.VTuber.imgUrl,size:t.size}))},O=function(t,e){return t.name.localeCompare(e.name)},j=r("y7vS");e.default=function(t){document.title="".concat(t.dictionary.header.groupList," | ").concat(t.dictionary.header.title);var e=[{name:Object(u.h)(l.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(u.h)("a",{class:m.a.groupLink,href:"".concat(b.a,"/group/").concat(t.name)},t.name)},sortFunction:O,sortable:!0,minWidth:"100px",maxWidth:"150px"},{name:Object(u.h)(l.c,{id:"table.popularity"},"Popularity"),selector:function(t){return t.popularity},right:!0,sortable:!0,minWidth:"50px",maxWidth:"125px"},{name:Object(u.h)(l.c,{id:"table.averageSubscriberCount"},"Average Subscribers"),selector:function(t){return t.averageSubscriberCount},right:!0,sortable:!0,minWidth:"50px",maxWidth:"125px"},{name:Object(u.h)(l.c,{id:"table.totalSubscriberCount"},"Total Subscribers"),selector:function(t){return t.totalSubscriberCount},right:!0,sortable:!0,minWidth:"50px",maxWidth:"125px"},{name:Object(u.h)(l.c,{id:"table.memberCount"},"Member Count"),selector:function(t){return t.memberCount},right:!0,sortable:!0,minWidth:"50px",maxWidth:"125px"},{name:Object(u.h)(l.c,{id:"table.memberList"},"Members"),cell:function(t){return Object(u.h)("div",{class:p},t.memberList.map((function(t){return Object(u.h)(y,{key:t.id,VTuber:t})})))}}],r=o(Object(c.k)([]),2),a=r[0],v=r[1],g=o(Object(c.k)(""),2),x=g[0],A=g[1],w=o(Object(c.k)(""),2),L=w[0],C=w[1],S=o(Object(c.k)(!1),2),T=S[0],_=S[1],z=a.filter((function(t){return void 0===t.name||t.name.toLowerCase().includes(x.toLowerCase())})).filter((function(t){return void 0===t.memberList||t.memberList.map((function(t){return t.name.toLowerCase().includes(L.toLowerCase())})).includes(!0)})),k=Object(c.h)((function(){return Object(u.h)("div",{class:m.a.searchBarGroup},Object(u.h)(h.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return A(t.target.value)},onClear:function(){x&&(_(!T),A(""))},filterText:x}),Object(u.h)(h.a,{placeholderText:t.dictionary.table.searchByGroupMember,onFilter:function(t){return C(t.target.value)},onClear:function(){L&&(_(!T),C(""))},filterText:L}))}),[x,L,T,t.dictionary]),B=function(t,e){var r,n,i,o;return t+(null!==(r=null===(n=e.YouTube)||void 0===n?void 0:n.subscriberCount)&&void 0!==r?r:0)+(null!==(i=null===(o=e.Twitch)||void 0===o?void 0:o.followerCount)&&void 0!==i?i:0)},G=o(Object(c.k)(!0),2),W=G[0],F=G[1],I=function(){var t,e=(t=function*(){yield d.e().then((function(t){v(t.data.groups.map((function(t){return function(t){return{id:t.id,name:t.name,popularity:t.popularity,averageSubscriberCount:0!==t.members.length?Math.round(t.members.reduce(B,0)/t.members.length):0,totalSubscriberCount:t.members.reduce(B,0),memberCount:t.members.length,memberList:t.members}}(t)})).sort((function(t,e){return e.popularity-t.popularity}))),F(!1)}))},function(){var e=this,r=arguments;return new Promise((function(n,o){function a(t){i(c,n,o,a,u,"next",t)}function u(t){i(c,n,o,a,u,"throw",t)}var c=t.apply(e,r);a(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(c.d)((function(){I()}),[]),Object(u.h)(u.Fragment,null,Object(u.h)("h1",null,Object(u.h)(l.c,{id:"header.groupList"},"Group List"),Object(u.h)(j.a,{width:"300px",fontSize:"13px",text:Object(u.h)(l.c,{id:"toolTip.groupList"},"tooltip text")})),Object(u.h)(s.a,n({},f.a,{columns:e,data:z,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(u.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:W,subHeader:!0,subHeaderComponent:k})))}},qO1o:function(t,e,r){"use strict";var n=r("hosL"),i="tooltip__vtGmz",o="tooltipText__pA-zc";e.a=function(t){return Object(n.h)("div",{class:i},t.children,Object(n.h)("span",{class:o,style:{width:t.width,fontSize:t.fontSize}},t.text))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,r){"use strict";var n=r("hosL"),i=r("qO1o"),o="questionMark__RT3wD";e.a=function(t){return Object(n.h)(i.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(n.h)("img",{class:o}))}}}]);
//# sourceMappingURL=route-GroupList.chunk.7f3ad.js.map