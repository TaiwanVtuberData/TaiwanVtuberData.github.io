(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Ox3":function(t,e,o){"use strict";var i=o("hosL"),r=o("jUMG"),n="fixedSize__iw3af",u="profileImg__DvgtD";e.a=t=>{var e,o,a;return Object(i.h)("a",{href:`${r.a}/vtuber/${t.VTuberId}`},Object(i.h)("img",{class:`${t.size?n:u}`,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(o=t.size)&&void 0!==o?o:void 0,height:null!==(a=t.size)&&void 0!==a?a:void 0}))}},"4BB4":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));const i={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"7DLW":function(t,e,o){"use strict";var i=o("hosL"),r=o("OhSV"),n=(o("GFNa"),"noWrap__BzT1O");e.a=t=>{const e=t=>Object(i.h)("span",{class:`${n} YouTubeRed`},null!=t?t:Object(i.h)(r.c,{id:"table.hiddenCount"},"hidden")),o=t=>Object(i.h)("span",{class:`${n} TwitchPurple`},t);return Object(i.h)(i.Fragment,null,Object(i.h)((t=>t.hasYouTube&&t.hasTwitch?Object(i.h)(i.Fragment,null,e(t.YouTubeSubscriberCount),Object(i.h)("span",{class:n}," + "),o(t.TwitchFollowerCount)):t.hasYouTube?Object(i.h)(i.Fragment,null,e(t.YouTubeSubscriberCount)):t.hasTwitch?Object(i.h)(i.Fragment,null,o(t.TwitchFollowerCount)):null),t))}},"8f/H":function(t,e,o){"use strict";o.d(e,"b",(function(){return u})),o.d(e,"a",(function(){return a}));const i=(t,e)=>{const o=t.hasYouTube,i=e.hasYouTube;if(!o&&!i)return 0;if(!i)return-1;if(!o)return 1;const r=t.YouTubeSubscriberCount,n=e.YouTubeSubscriberCount;return void 0===r&&void 0===n?0:void 0===n?-1:void 0===r?1:r>n?-1:n>r?1:0},r=(t,e)=>{const o=t.hasTwitch,i=e.hasTwitch;if(!o&&!i)return 0;if(!i)return-1;if(!o)return 1;const r=t.TwitchFollowerCount,n=e.TwitchFollowerCount;return r>n?-1:n>r?1:0},n=(t,e)=>{var o,i,r,n;const u=(null!==(o=t.YouTubeSubscriberCount)&&void 0!==o?o:0)+(null!==(i=t.TwitchFollowerCount)&&void 0!==i?i:0),a=(null!==(r=e.YouTubeSubscriberCount)&&void 0!==r?r:0)+(null!==(n=e.TwitchFollowerCount)&&void 0!==n?n:0);return u>a?-1:a>u?1:0},u=(t,e)=>{var o,i,r,n;const u=(null!==(o=t.YouTubeSubscriberCount)&&void 0!==o?o:0)+(null!==(i=t.TwitchFollowerCount)&&void 0!==i?i:0),a=(null!==(r=e.YouTubeSubscriberCount)&&void 0!==r?r:0)+(null!==(n=e.TwitchFollowerCount)&&void 0!==n?n:0);return u>a?1:a>u?-1:0},a=t=>{switch(t){case"YouTube+Twitch":return n;case"YouTube":return i;case"Twitch":return r}}},"8i/u":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));const i=(t,e)=>{var o,i,r,n,u,a,c,l,s,b;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(o=t.YouTube)||void 0===o?void 0:o.id,YouTubeSubscriberCount:null===(i=t.YouTube)||void 0===i?void 0:i.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollowerCount:null!==(n=null===(u=t.Twitch)||void 0===u?void 0:u.followerCount)&&void 0!==n?n:0,popularVideo:t.popularVideo,group:null!==(a=t.group)&&void 0!==a?a:"",nationality:t.nationality,activity:t.activity,YouTubePopularity:null!==(c=null===(l=t.YouTube)||void 0===l?void 0:l.popularity)&&void 0!==c?c:0,TwitchPopularity:null!==(s=null===(b=t.Twitch)||void 0===b?void 0:b.popularity)&&void 0!==s?s:0,ranking:e}}},L9Wd:function(t,e,o){"use strict";var i=o("hosL"),r="container__1lsi6",n="textField__bDpXR",u="button__maFzS";e.a=t=>Object(i.h)("div",{class:r},Object(i.h)("input",{type:"text",class:n,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(i.h)("button",{type:"button",class:u,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,o){"use strict";var i=o("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:i.a})},Obgd:function(t,e,o){"use strict";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},i.apply(this,arguments)}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){u(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e);var a=o("hosL"),c=o("QRet"),l=o("OhSV"),s=o("ENxA"),b=o("jUMG"),d=o("drLk"),h=o("L9Wd"),p=o("LftB"),w=(o("GFNa"),o("uZiY")),T=o("L9y4"),v=o("8i/u"),O=o("y7vS"),g=o("Ud9u"),f=o("7DLW"),j=o("8f/H"),y=o("iN8o"),m=o("sviv"),x=o("4BB4");e.default=t=>{document.title=`${t.dictionary.header.trendingVTubers} | ${t.dictionary.header.title}`;const e=[{name:"#",selector:t=>t.ranking,sortable:!0,wrap:!1,width:"30px"},{name:Object(a.h)(l.c,{id:"table.displayName"},"Name"),cell:t=>Object(a.h)(m.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name,YouTubeId:t.YouTubeId,TwitchId:t.TwitchId})},{name:Object(a.h)(l.c,{id:"table.popularity"},"Popularity"),sortFunction:y.a,cell:t=>Object(a.h)(f.a,{hasYouTube:t.hasYouTube,YouTubeSubscriberCount:t.YouTubePopularity,hasTwitch:t.hasTwitch,TwitchFollowerCount:t.TwitchPopularity}),sortable:!0,width:"150px"},{name:Object(a.h)(l.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),sortFunction:j.b,cell:t=>Object(a.h)(f.a,t),sortable:!0,width:"150px"},{name:Object(a.h)(l.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(a.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:()=>Object(g.a)(e.popularVideo)}):null,width:"100px"},{name:Object(a.h)(l.c,{id:"table.group"},"Group"),cell:t=>""!==t.group?Object(a.h)("a",{class:w.a.groupLink,href:`${b.a}/group/${t.group}`},t.group):null,maxWidth:"100px"},{name:Object(a.h)(l.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""},minWidth:"25px",maxWidth:"100px"}],[o,r]=Object(c.k)([]),[u,C]=Object(c.k)(""),[Y,_]=Object(c.k)(""),[A,F]=Object(c.k)(!1),L=o.filter((t=>t.name&&t.name.toLowerCase().includes(u.toLowerCase()))).filter((t=>void 0===t.group||t.group.toLowerCase().includes(Y.toLowerCase()))),P=Object(c.h)((()=>Object(a.h)("div",{class:w.a.searchBarGroup},Object(a.h)(h.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>C(t.target.value),onClear:()=>{u&&(F(!A),C(""))},filterText:u}),Object(a.h)(h.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:t=>_(t.target.value),onClear:()=>{Y&&(F(!A),_(""))},filterText:Y}))),[u,Y,A,t.dictionary]),[S,k]=Object(c.k)(!0);return Object(c.d)((()=>{(async()=>{await d.g("100").then((t=>{r(t.data.VTubers.map((t=>t)).map(((t,e)=>Object(v.a)(t,e+1))).sort(y.b).map(((t,e)=>n(n({},t),{},{ranking:e+1})))),k(!1)}))})()}),[]),Object(a.h)(a.Fragment,null,Object(a.h)("h1",null,Object(a.h)(l.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(a.h)(O.a,{width:"300px",fontSize:"13px",text:Object(a.h)(l.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(a.h)(s.a,i({},p.a,{columns:e,data:L,conditionalRowStyles:T.a,customStyles:x.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(a.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:S,subHeader:!0,subHeaderComponent:P})))}},iN8o:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"a",(function(){return r}));const i=(t,e)=>{const o=t.YouTubePopularity+t.TwitchPopularity,i=e.YouTubePopularity+e.TwitchPopularity;return o>i?-1:i>o?1:0},r=(t,e)=>{const o=t.YouTubePopularity+t.TwitchPopularity,i=e.YouTubePopularity+e.TwitchPopularity;return o>i?1:i>o?-1:0}},qO1o:function(t,e,o){"use strict";var i=o("hosL"),r="tooltip__vtGmz",n="tooltipText__pA-zc";e.a=t=>Object(i.h)("div",{class:r},t.children,Object(i.h)("span",{class:n,style:{width:t.width,fontSize:t.fontSize}},t.text))},sviv:function(t,e,o){"use strict";var i=o("hosL"),r="container__ajzPI",n="YouTubeImg__LvwUa",u="TwitchImg__ckBvR";var a=t=>{const e=(t,e,o)=>void 0===o?null:Object(i.h)("a",{href:e+o,target:"_blank",rel:"noopener noreferrer"},Object(i.h)("img",{class:t}));return Object(i.h)("div",{class:r},e(n,"https://www.youtube.com/channel/",t.YouTubeId),e(u,"https://www.twitch.tv/",t.TwitchId))},c=o("+Ox3"),l="container__VQnrV",s="profileImageFlex__NQP5p",b="nameFlex__DDBDq",d="channelLinksFlex__AtHrx";e.a=t=>Object(i.h)("div",{class:l},Object(i.h)("div",{class:s},Object(i.h)(c.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(i.h)("span",{class:b},t.name),Object(i.h)("div",{class:d},Object(i.h)(a,t)))},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,o){"use strict";var i=o("hosL"),r=o("qO1o"),n="questionMark__RT3wD";e.a=t=>Object(i.h)(r.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(i.h)("img",{class:n}))}}]);
//# sourceMappingURL=route-TrendingVTubers.chunk.53eff.esm.js.map