(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Ox3":function(t,e,n){"use strict";var i=n("hosL"),u=n("jUMG"),r="fixedSize__iw3af",l="profileImg__DvgtD";e.a=function(t){var e,n,a;return Object(i.h)("a",{href:"".concat(u.a,"/vtuber/").concat(t.id)},Object(i.h)("img",{class:"".concat(t.size?r:l),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(n=t.size)&&void 0!==n?n:void 0,height:null!==(a=t.size)&&void 0!==a?a:void 0}))}},"57TX":function(t,e){"use strict";e.a={flexArea:"flexArea__yWrku"}},"7z6i":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t){var e,n,i,u,r,l;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null===(n=t.YouTube)||void 0===n?void 0:n.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(i=t.Twitch)||void 0===i?void 0:i.id,TwitchFollowerCount:null!==(u=null===(r=t.Twitch)||void 0===r?void 0:r.followerCount)&&void 0!==u?u:0,popularVideo:t.popularVideo,group:null!==(l=t.group)&&void 0!==l?l:"",nationality:t.nationality,activity:t.activity,debutDate:t.debutDate,graduateDate:t.graduateDate}}},J6sS:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var i=function(t){return null!==t?"https://www.youtube.com/channel/".concat(t):""},u=function(t){return null!==t?"https://www.twitch.tv/".concat(t):""}},hXYH:function(t,e,n){"use strict";n.r(e),function(t){function i(t,e,n,i,u,r,l){try{var a=t[r](l),o=a.value}catch(t){return void n(t)}a.done?e(o):Promise.resolve(o).then(i,u)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var i,u,r=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);l=!0);}catch(t){a=!0,u=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw u}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var l=n("hosL"),a=n("QRet"),o=n("drLk"),c=(n("GFNa"),n("7z6i")),d=n("tKk3");e.default=function(e){var n,r,b=u(Object(a.k)(),2),h=b[0],s=b[1];document.title="".concat(null!==(n=null==h?void 0:h.name)&&void 0!==n?n:""," | ").concat(e.dictionary.header.title);var v=function(){var t,n=(t=function*(){yield o.j(e.id).then((function(t){s(Object(c.a)(t.data.VTuber))}))},function(){var e=this,n=arguments;return new Promise((function(u,r){function l(t){i(o,u,r,l,a,"next",t)}function a(t){i(o,u,r,l,a,"throw",t)}var o=t.apply(e,n);l(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(a.d)((function(){v()}),[]),Object(l.h)(t,null,Object(l.h)("h1",null,Object(l.h)("span",null," ",null!==(r=null==h?void 0:h.name)&&void 0!==r?r:""," ")),Object(l.h)(d.a,{VTuber:h,dictionary:e.dictionary}))}}.call(this,n("hosL").Fragment)},tKk3:function(t,e,n){"use strict";(function(t){var i=n("hosL"),u=n("OhSV"),r=n("jUMG"),l=n("Ud9u"),a=n("J6sS"),o=n("+Ox3"),c=n("57TX");e.a=function(e){var n,d,b=e.VTuber;return Object(i.h)("div",{class:c.a.flexArea},Object(i.h)("div",null,b&&Object(i.h)("div",null,Object(i.h)(o.a,{id:b.id,imgUrl:b.imgUrl,size:300}))),Object(i.h)("ul",null,(null==b?void 0:b.hasYouTube)&&Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),Object(i.h)("span",null,": "),(d=b.YouTubeSubscriberCount,Object(i.h)("span",null,null!=d?d:Object(i.h)(u.c,{id:"table.hiddenCount"},"hidden"))),Object(i.h)("span",null,"("),(n=b.YouTubeId,Object(i.h)("a",{href:Object(a.b)(n),target:"_blank",rel:"noopener noreferrer"},Object(i.h)(u.c,{id:"text.link"},"Link"))),Object(i.h)("span",null,")")),(null==b?void 0:b.hasTwitch)&&Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.TwitchFollowerCount"},"Twitch Followers"),Object(i.h)("span",null,": ",b.TwitchFollowerCount," ("),function(t){return Object(i.h)("a",{href:Object(a.a)(t),target:"_blank",rel:"noopener noreferrer"},Object(i.h)(u.c,{id:"text.link"},"Link"))}(b.TwitchId),Object(i.h)("span",null,")")),Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.group"},"Group"),Object(i.h)("span",null,": "),Object(i.h)("a",{href:"".concat(r.a,"/group/").concat(null==b?void 0:b.group)},null==b?void 0:b.group)),Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.nationality"},"Nationality"),Object(i.h)("span",null,": ",null==b?void 0:b.nationality)),Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.activity"},"Activity"),Object(i.h)("span",null,": "),function(e){switch(e){case"preparing":return Object(i.h)(u.c,{id:"activityText.preparing"},"Preparing");case"active":return Object(i.h)(u.c,{id:"activityText.active"},"Active");case"graduate":return Object(i.h)(u.c,{id:"activityText.graduated"},"Graduated")}return Object(i.h)(t,null)}(null==b?void 0:b.activity)),Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.debutDate"},"Debut Date"),Object(i.h)("span",null,": ",null==b?void 0:b.debutDate)),(null==b?void 0:b.graduateDate)&&Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.graduateDate"},"Graduation Date"),Object(i.h)("span",null,": ",null==b?void 0:b.graduateDate)),Object(i.h)("li",null,Object(i.h)(u.c,{id:"table.popularVideo"},"PopularVideo"),Object(i.h)("span",null,": "),void 0!==(null==b?void 0:b.popularVideo)?Object(i.h)("input",{type:"button",value:e.dictionary.text.showVideo,onClick:function(){return Object(l.a)(b.popularVideo)}}):null)))}}).call(this,n("hosL").Fragment)}}]);
//# sourceMappingURL=route-VTuber.chunk.57e2a.js.map