(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o=n("jUMG"),a="fixedSize__iw3af",i="profileImg__DvgtD";e.a=function(t){var e,n,c;return Object(r.h)("a",{href:"".concat(o.a,"/vtuber/").concat(t.VTuberId)},Object(r.h)("img",{class:"".concat(t.size?a:i),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(n=t.size)&&void 0!==n?n:void 0,height:null!==(c=t.size)&&void 0!==c?c:void 0}))}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("OhSV"),a=(n("GFNa"),"noWrap__BzT1O");e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(a," YouTubeRed")},null!=t?t:Object(r.h)(o.c,{id:"table.hiddenCount"},"hidden"))},n=function(t){return Object(r.h)("span",{class:"".concat(a," TwitchPurple")},t)};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.hasYouTube&&t.hasTwitch?Object(r.h)(r.Fragment,null,e(t.YouTubeSubscriberCount),Object(r.h)("span",{class:a}," + "),n(t.TwitchFollowerCount)):t.hasYouTube?Object(r.h)(r.Fragment,null,e(t.YouTubeSubscriberCount)):t.hasTwitch?Object(r.h)(r.Fragment,null,n(t.TwitchFollowerCount)):null}),t))}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",a="textField__bDpXR",i="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:a,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return t.isToday},style:{color:"mediumblue"}}]},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",a="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:a,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sviv:function(t,e,n){"use strict";var r=n("hosL"),o="container__ajzPI",a="YouTubeImg__LvwUa",i="TwitchImg__ckBvR",c=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.h)("img",{class:t}))};return Object(r.h)("div",{class:o},e(a,"https://www.youtube.com/channel/",t.YouTubeId),e(i,"https://www.twitch.tv/",t.TwitchId))},u=n("+Ox3"),l="container__VQnrV",s="profileImageFlex__NQP5p",d="nameFlex__DDBDq",h="channelLinksFlex__AtHrx";e.a=function(t){return Object(r.h)("div",{class:l},Object(r.h)("div",{class:s},Object(r.h)(u.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:d},t.name),Object(r.h)("div",{class:h},Object(r.h)(c,t)))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},ueNj:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var c=n("hosL"),u=n("QRet"),l=n("OhSV"),s=n("ENxA"),d=n("jUMG"),h=n("L9Wd"),b=n("drLk"),f=n("LftB"),p=(n("GFNa"),n("uZiY")),v=n("L9y4"),g=n("8r9F"),O=n("TToT"),m=n("y7vS"),w=n("Ud9u"),j=n("7DLW"),y=n("sviv");e.default=function(t){document.title="".concat(t.dictionary.header.graduateVTubers," | ").concat(t.dictionary.header.title);var e=[{name:Object(c.h)(l.c,{id:"table.graduateDate"},"Graduation Date"),selector:function(t){return t.graduateDate},compact:!0,sortable:!0,width:"100px"},{name:Object(c.h)(l.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(c.h)(y.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name,YouTubeId:t.YouTubeId,TwitchId:t.TwitchId})}},{name:Object(c.h)(l.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(c.h)(j.a,t)},compact:!0},{name:Object(c.h)(l.c,{id:"table.popularVideo"},"Popular Video"),cell:function(e){return void 0!==e.popularVideo?Object(c.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(w.a)(e.popularVideo)}}):null},compact:!0,width:"100px"},{name:Object(c.h)(l.c,{id:"table.group"},"Group"),cell:function(t){return""!==t.group?Object(c.h)("a",{class:p.a.groupLink,href:"".concat(d.a,"/group/").concat(t.group)},t.group):null},compact:!0,maxWidth:"150px"},{name:Object(c.h)(l.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""},compact:!0,minWidth:"25px",maxWidth:"100px"}],n=a(Object(u.k)([]),2),i=n[0],T=n[1],x=a(Object(u.k)(""),2),A=x[0],_=x[1],C=a(Object(u.k)(""),2),L=C[0],D=C[1],F=a(Object(u.k)(""),2),I=F[0],S=F[1],V=a(Object(u.k)(!1),2),k=V[0],Y=V[1],z=i.filter((function(t){return t.graduateDate&&t.graduateDate.toLowerCase().includes(A.toLowerCase())})).filter((function(t){return t.name&&t.name.toLowerCase().includes(L.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(I.toLowerCase())})),B=Object(u.h)((function(){return Object(c.h)("div",{class:p.a.searchBarGroup},Object(c.h)(h.a,{placeholderText:t.dictionary.table.searchByDate,onFilter:function(t){return _(t.target.value)},onClear:function(){A&&(Y(!k),_(""))},filterText:A}),Object(c.h)(h.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return D(t.target.value)},onClear:function(){L&&(Y(!k),D(""))},filterText:L}),Object(c.h)(h.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return S(t.target.value)},onClear:function(){I&&(Y(!k),S(""))},filterText:I}))}),[A,L,I,k,t.dictionary]),U=a(Object(u.k)(!0),2),G=U[0],R=U[1],N=function(){var t,e=(t=function*(){var t=Object(g.b)(new Date,8);yield b.c("recent").then((function(e){T(e.data.VTubers.map((function(t){return t})).sort((function(t,e){return e.graduateDate.localeCompare(t.graduateDate)})).map((function(e){return function(t,e){var n,r,o,a,i,c;return{id:t.id,isToday:t.graduateDate===e,graduateDate:t.graduateDate,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(n=t.YouTube)||void 0===n?void 0:n.id,YouTubeSubscriberCount:null===(r=t.YouTube)||void 0===r?void 0:r.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(o=t.Twitch)||void 0===o?void 0:o.id,TwitchFollowerCount:null!==(a=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==a?a:0,popularVideo:t.popularVideo,group:null!==(c=t.group)&&void 0!==c?c:"",nationality:t.nationality,activity:t.activity}}(e,t)}))),R(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,a){function i(t){o(u,r,a,i,c,"next",t)}function c(t){o(u,r,a,i,c,"throw",t)}var u=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(u.d)((function(){N()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(l.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(c.h)(m.a,{width:"300px",fontSize:"13px",text:Object(c.h)(l.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(c.h)(s.a,r({},f.a,{columns:e,data:z,conditionalRowStyles:v.a.concat(O.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(c.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:G,subHeader:!0,subHeaderComponent:B})))}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),a="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:a}))}}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.d404d.js.map