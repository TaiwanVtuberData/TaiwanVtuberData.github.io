(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Ox3":function(t,e,a){"use strict";var o=a("hosL"),n="profileImg__DvgtD";e.a=t=>{var e;return Object(o.h)("img",{class:n,src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},"2G8U":function(t,e,a){"use strict";var o=a("hosL"),n="YouTubeImg__LvwUa",r="TwitchImg__ckBvR";e.a=t=>{const e=(t,e,a)=>void 0===a?null:Object(o.h)("a",{href:e+a,target:"_blank",rel:"noopener noreferrer"},Object(o.h)("img",{class:t}));return Object(o.h)("div",null,e(n,"https://www.youtube.com/channel/",t.YouTubeId),e(r,"https://www.twitch.tv/",t.TwitchId))}},"8r9F":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));const o=t=>t.toString().padStart(2,"0"),n=(t,e)=>{const a=t.getTimezoneOffset()/60+e;return t.setTime(t.getTime()+60*a*60*1e3),t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())},r=t=>t.getFullYear()+"-"+o(t.getMonth()+1)+"-"+o(t.getDate())+" "+o(t.getHours())+":"+o(t.getMinutes())+":"+o(t.getSeconds())},DS9q:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));const o=(t,e)=>{const a=t.hasYouTube,o=e.hasYouTube;if(!a&&!o)return 0;if(!o)return 1;if(!a)return-1;const n=t.YouTubeSubscriberCount,r=e.YouTubeSubscriberCount;return void 0===n&&void 0===r?0:void 0===r?1:void 0===n?-1:n>r?1:r>n?-1:0}},L9Wd:function(t,e,a){"use strict";var o=a("hosL"),n="textField__bDpXR",r="button__maFzS";e.a=t=>Object(o.h)("div",null,Object(o.h)("input",{type:"text",class:n,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(o.h)("button",{type:"button",class:r,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(248, 148, 6, 0.9)",color:"white","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,a){"use strict";var o=a("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},TToT:function(t,e){"use strict";e.a=[{when:t=>t.isToday,style:{color:"mediumblue"}}]},drLk:function(t,e,a){"use strict";a.d(e,"h",(function(){return u})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return l})),a.d(e,"f",(function(){return s})),a.d(e,"e",(function(){return d})),a.d(e,"a",(function(){return b})),a.d(e,"b",(function(){return h})),a.d(e,"g",(function(){return g}));var o=a("czhI"),n=a.n(o);let r;const i=async t=>(void 0===r&&await(async()=>{await n.a.get("https://api.github.com/repos/nh60211as/TaiwanVtuberTrackingDataJson/commits/master").then((t=>{r={sha:t.data.sha,date:t.data.commit.author.date}})).catch((()=>{r={sha:"master"}})),n.a.defaults.baseURL=`https://cdn.statically.io/gh/nh60211as/TaiwanVtuberTrackingDataJson/${r.sha}/api/v0`})(),n.a.get(t)),u=()=>i("/vtubers.json"),c=t=>i(`/groups/${t}/vtubers.json`),l=()=>i("/groups.json"),s=()=>i("/popular-vtubers.json"),d=()=>i("/growing-vtubers.json"),b=()=>i("/debut-vtubers.json"),h=()=>i("/graduate-vtubers.json"),g=t=>i(`/trending-videos/${t}.json`)},qjj9:function(t,e,a){"use strict";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},o.apply(this,arguments)}a.r(e);var n=a("hosL"),r=a("QRet"),i=a("OhSV"),u=a("ENxA"),c=a("jUMG"),l=a("2G8U"),s=a("+Ox3"),d=a("L9Wd"),b=a("drLk"),h=a("LftB"),g=a("DS9q"),p=(a("GFNa"),a("uZiY")),v=a("L9y4"),w=a("8r9F"),T=a("TToT");e.default=t=>{document.title=`${t.dictionary.header.debutVTubers} | ${t.dictionary.header.title}`;const e=[{name:Object(n.h)(i.b,{id:"table.debutDate"},"Debut Date"),width:"100px",selector:t=>t.debutDate,sortable:!0},{name:"",width:"75px",cell:t=>t.profileImg},{name:Object(n.h)(i.b,{id:"table.displayName"},"Name"),wrap:!0,selector:t=>t.name},{name:Object(n.h)(i.b,{id:"table.links"},"Links"),minWidth:"50px",maxWidth:"150px",cell:t=>t.channelLinks},{name:Object(n.h)(i.b,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),cell:t=>{var e;return t.hasYouTube?null!==(e=t.YouTubeSubscriberCount)&&void 0!==e?e:Object(n.h)(i.b,{id:"table.hiddenCount"},"hidden"):null},right:!0,sortable:!0,sortFunction:g.a},{name:Object(n.h)(i.b,{id:"table.TwitchFollowerCount"},"Twitch Followers"),selector:t=>t.hasTwitch?t.TwitchFollowerCount:"",right:!0,sortable:!0},{name:Object(n.h)(i.b,{id:"table.group"},"Group"),cell:t=>""!==t.group?Object(n.h)("a",{class:p.a.groupLink,href:`${c.a}/group/${t.group}`},t.group):null},{name:Object(n.h)(i.b,{id:"table.nationality"},"Nationality"),minWidth:"25px",maxWidth:"100px",selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}],[a,m]=Object(r.j)([]),[j,f]=Object(r.j)(""),[O,y]=Object(r.j)(""),[A,C]=Object(r.j)(""),[D,L]=Object(r.j)(!1),x=a.filter((t=>t.debutDate&&t.debutDate.toLowerCase().includes(j.toLowerCase()))).filter((t=>t.name&&t.name.toLowerCase().includes(O.toLowerCase()))).filter((t=>void 0===t.group||t.group.toLowerCase().includes(A.toLowerCase()))),Y=Object(r.g)((()=>Object(n.h)("div",{class:p.a.searchBarGroup},Object(n.h)(d.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:t=>f(t.target.value),onClear:()=>{j&&(L(!D),f(""))},filterText:j}),Object(n.h)(d.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:t=>y(t.target.value),onClear:()=>{O&&(L(!D),y(""))},filterText:O}),Object(n.h)(d.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:t=>C(t.target.value),onClear:()=>{A&&(L(!D),C(""))},filterText:A}))),[j,O,A,D,t.dictionary]),[F,k]=Object(r.j)(!0),S=async()=>{const t=Object(w.b)(new Date,8);await b.a().then((e=>{m(e.data.VTubers.map((t=>t)).sort(((t,e)=>e.debutDate.localeCompare(t.debutDate))).map((e=>((t,e)=>{var a,o,n,r,i,u;return{id:t.id,isToday:t.debutDate===e,debutDate:t.debutDate,profileImg:Object(s.a)({imgUrl:t.imgUrl}),name:t.name,channelLinks:Object(l.a)({YouTubeId:null===(a=t.YouTube)||void 0===a?void 0:a.id,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id}),hasYouTube:void 0!==t.YouTube,YouTubeSubscriberCount:null===(n=t.YouTube)||void 0===n?void 0:n.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchFollowerCount:null!==(r=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==r?r:0,group:null!==(u=t.group)&&void 0!==u?u:"",nationality:t.nationality,activity:t.activity}})(e,t)))),k(!1)}))};return Object(r.d)((()=>{S()}),[]),Object(n.h)(n.Fragment,null,Object(n.h)("h1",null,Object(n.h)(i.b,{id:"header.debutVTubers"},"Debut VTubers")),Object(n.h)(u.a,o({},h.a,{columns:e,data:x,conditionalRowStyles:v.a.concat(T.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:t.dictionary.table.loading,progressPending:F,subHeader:!0,subHeaderComponent:Y})))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-DebutVTubers.chunk.3ea76.esm.js.map