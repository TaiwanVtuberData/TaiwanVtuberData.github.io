(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(e,t,r){"use strict";var a=r("hosL"),o="profileImg__DvgtD";t.a=e=>{var t;return Object(a.h)("img",{class:o,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},Dy4S:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const a=e=>e>0?`+${e}`:e<0?`${e}`:"0",o=e=>(100*e).toFixed(2),n=(e,t)=>{if(e.percentage)switch(e.recordType){case"none":return t.noRecord;case"partial":return`${t.atLeast} ${a(e.diff)} (${o(e.percentage)}%)`;case"full":return`${a(e.diff)} (${o(e.percentage)}%)`}switch(e.recordType){case"none":return t.noRecord;case"partial":return`${t.atLeast} ${a(e.diff)}`;case"full":return`${a(e.diff)}`}}},L9Wd:function(e,t,r){"use strict";var a=r("hosL"),o="container__1lsi6",n="textField__bDpXR",i="button__maFzS";t.a=e=>Object(a.h)("div",{class:o},Object(a.h)("input",{type:"text",class:n,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(a.h)("button",{type:"button",class:i,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var a=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:a.a})},UBrP:function(e,t,r){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},a.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var c=r("hosL"),s=r("QRet"),l=r("OhSV"),u=r("ENxA"),b=r("jUMG"),h=r("L9Wd"),d=r("drLk"),p=r("LftB"),O=(r("GFNa"),r("uZiY")),g=r("L9y4");const y=(e,t)=>{const r=e._7DaysGrowth.percentage,a=t._7DaysGrowth.percentage;return r>a?1:a>r?-1:0},w=(e,t)=>{const r=e._30DaysGrowth.percentage,a=t._30DaysGrowth.percentage;return r>a?1:a>r?-1:0};var f=r("Dy4S"),j=r("y7vS"),v=r("Ud9u"),m=r("sviv");t.default=e=>{document.title=`${e.dictionary.header.growingVTubers} | ${e.dictionary.header.title}`;const t=[{name:Object(c.h)(l.c,{id:"table.displayName"},"Name"),width:"300px",maxWidth:"500px",cell:e=>Object(c.h)(m.a,e)},{name:Object(c.h)(l.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:e=>e.YouTubeSubscriberCount,right:!0,sortable:!0},{name:Object(c.h)(l.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:t=>Object(f.a)(t._7DaysGrowth,e.dictionary.table),right:!0,sortable:!0,sortFunction:y},{name:Object(c.h)(l.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:t=>Object(f.a)(t._30DaysGrowth,e.dictionary.table),right:!0,sortable:!0,sortFunction:w},{name:Object(c.h)(l.c,{id:"table.popularVideo"},"Popular Video"),width:"100px",cell:t=>void 0!==t.popularVideo?Object(c.h)("input",{type:"button",value:e.dictionary.text.showVideo,onClick:()=>Object(v.a)(t.popularVideo)}):null},{name:Object(c.h)(l.c,{id:"table.group"},"Group"),maxWidth:"150px",cell:e=>""!==e.group?Object(c.h)("a",{class:O.a.groupLink,href:`${b.a}/group/${e.group}`},e.group):null},{name:Object(c.h)(l.c,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}}],[r,o]=Object(s.k)([]),[i,_]=Object(s.k)(""),[x,T]=Object(s.k)(""),[D,A]=Object(s.k)(!1),G=r.filter((e=>e.name&&e.name.toLowerCase().includes(i.toLowerCase()))).filter((e=>void 0===e.group||e.group.toLowerCase().includes(x.toLowerCase()))),L=Object(s.h)((()=>Object(c.h)("div",{class:O.a.searchBarGroup},Object(c.h)(h.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:e=>_(e.target.value),onClear:()=>{i&&(A(!D),_(""))},filterText:i}),Object(c.h)(h.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:e=>T(e.target.value),onClear:()=>{x&&(A(!D),T(""))},filterText:x}))),[i,x,D,e.dictionary]),C=(e,t)=>n(n({},e),{},{percentage:void 0!==t&&0!==t?e.diff/t:0}),[k,S]=Object(s.k)(!0),P=async()=>{await d.f("100").then((e=>{o(e.data.VTubers.map((e=>e)).map((e=>(e=>{var t,r,a;return{id:e.id,name:e.name,imgUrl:e.imgUrl,YouTubeId:e.YouTube.id,TwitchId:null===(t=e.Twitch)||void 0===t?void 0:t.id,YouTubeSubscriberCount:null!==(r=e.YouTube.subscriberCount)&&void 0!==r?r:0,_7DaysGrowth:C(e.YouTube._7DaysGrowth,e.YouTube.subscriberCount),_30DaysGrowth:C(e.YouTube._30DaysGrowth,e.YouTube.subscriberCount),popularVideo:e.popularVideo,group:null!==(a=e.group)&&void 0!==a?a:"",nationality:e.nationality,activity:e.activity}})(e))).sort(((e,t)=>t._7DaysGrowth.percentage-e._7DaysGrowth.percentage))),S(!1)}))};return Object(s.d)((()=>{P()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(l.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(c.h)(j.a,{width:"300px",fontSize:"13px",text:Object(c.h)(l.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(c.h)(u.a,a({},p.a,{columns:t,data:G,conditionalRowStyles:g.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(c.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:k,subHeader:!0,subHeaderComponent:L})))}},qO1o:function(e,t,r){"use strict";var a=r("hosL"),o="tooltip__vtGmz",n="tooltipText__pA-zc";t.a=e=>Object(a.h)("div",{class:o},e.children,Object(a.h)("span",{class:n,style:{width:e.width,fontSize:e.fontSize}},e.text))},sviv:function(e,t,r){"use strict";var a=r("hosL"),o="container__ajzPI",n="YouTubeImg__LvwUa",i="TwitchImg__ckBvR";var c=e=>{const t=(e,t,r)=>void 0===r?null:Object(a.h)("a",{href:t+r,target:"_blank",rel:"noopener noreferrer"},Object(a.h)("img",{class:e}));return Object(a.h)("div",{class:o},t(n,"https://www.youtube.com/channel/",e.YouTubeId),t(i,"https://www.twitch.tv/",e.TwitchId))},s=r("+Ox3"),l="container__VQnrV",u="profileImageFlex__NQP5p",b="nameFlex__DDBDq",h="channelLinksFlex__AtHrx";t.a=e=>Object(a.h)("div",{class:l},Object(a.h)("div",{class:u},Object(a.h)(s.a,e)),Object(a.h)("span",{class:b},e.name),Object(a.h)("div",{class:h},Object(a.h)(c,e)))},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(e,t,r){"use strict";var a=r("hosL"),o=r("qO1o"),n="questionMark__RT3wD";t.a=e=>Object(a.h)(o.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(a.h)("img",{class:n}))}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.f066b.esm.js.map