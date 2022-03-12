module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="qVkA")}({HteQ:function(t,e){t.exports=require("preact")},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return d})),n.d(e,"route",(function(){return b})),n.d(e,"Router",(function(){return x})),n.d(e,"Route",(function(){return T})),n.d(e,"Link",(function(){return k})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var a=u[1].split("&"),f=0;f<a.length;f++){var s=a[f].split("=");c[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(i,"")),e=l(e||"");for(var p=Math.max(t.length,e.length),h=0;h<p;h++)if(e[h]&&":"===e[h].charAt(0)){var _=e[h].replace(/(^:|[+*?]+$)/g,""),d=(e[h].match(/[+*?]+$/)||o)[0]||"",b=~d.indexOf("+"),v=~d.indexOf("*"),y=t[h]||"";if(!y&&!v&&(d.indexOf("?")<0||b)){r=!1;break}if(c[_]=decodeURIComponent(y),b||v){c[_]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(f).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function f(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var s=null,p=[],h=[],_={};function d(){var t;return""+((t=s&&s.location?s.location:s&&s.getCurrentLocation?s.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function b(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),s&&s[e]?s[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return b(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return y(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(y(e))return g(t)}}while(e=e.parentNode)}}var j=!1;var x=function(t){function e(e){t.call(this,e),e.history&&(s=e.history),this.state={url:e.url||d()},j||("function"==typeof addEventListener&&(s||addEventListener("popstate",(function(){v(d())})),addEventListener("click",O)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;s&&(this.unlisten=s.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(c).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=u[0]||null,a=this.previousUrl;return i!==a&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:a,active:u,current:c})),c},e}(r.Component),k=function(t){return Object(r.createElement)("a",i({onClick:m},t))},T=function(t){return Object(r.createElement)(t.component,t)};x.subscribers=h,x.getCurrentUrl=d,x.route=b,x.Router=x,x.Route=T,x.Link=k,x.exec=u,e.default=x},"ox/y":function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("HteQ"),u=n("Y3FI");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?t:e}var l=e.Match=function(t){function e(){var n,r;c(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=a(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},a(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),f=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){var n=t.matches;return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=f,e.default=l,l.Link=f},qVkA:function(t,e,n){"use strict";n.r(e);var r,o,i,u=n("HteQ"),c=n("Y3FI"),a="home__uRcqa",l=function(){return Object(u.h)("div",{class:a},Object(u.h)("h1",null,"Home"),Object(u.h)("p",null,"This is the Home component."))},f=0,s=[],p=u.options.__b,h=u.options.__r,_=u.options.diffed,d=u.options.__c,b=u.options.unmount;function v(t,e){u.options.__h&&u.options.__h(o,t,f||e),f=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function y(t){return f=1,function(t,e,n){var i=v(r++,2);return i.t=t,i.__c||(i.__=[n?n(e):k(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__=[e,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}(k,t)}function m(){for(var t;t=s.shift();)if(t.__P)try{t.__H.__h.forEach(O),t.__H.__h.forEach(j),t.__H.__h=[]}catch(e){t.__H.__h=[],u.options.__e(e,t.__v)}}u.options.__b=function(t){o=null,p&&p(t)},u.options.__r=function(t){h&&h(t),r=0;var e=(o=t.__c).__H;e&&(e.__h.forEach(O),e.__h.forEach(j),e.__h=[])},u.options.diffed=function(t){_&&_(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==s.push(e)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),g&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);g&&(e=requestAnimationFrame(n))})(m)),o=null},u.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(O),t.__h=t.__h.filter((function(t){return!t.__||j(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],u.options.__e(n,t.__v)}})),d&&d(t,e)},u.options.unmount=function(t){b&&b(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{O(t)}catch(t){e=t}})),e&&u.options.__e(e,n.__v))};var g="function"==typeof requestAnimationFrame;function O(t){var e=o,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),o=e}function j(t){var e=o;t.__c=t.__(),o=e}function x(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function k(t,e){return"function"==typeof e?e(t):e}var T="profile__hKgU4";function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S=function(t){var e,n,i,c=t.user,a=C(y(Date.now()),2),l=a[0],f=a[1],s=C(y(0),2),p=s[0],h=s[1];e=function(){var t=window.setInterval((function(){return f(Date.now())}),1e3);return function(){clearInterval(t)}},n=[],i=v(r++,3),!u.options.__s&&x(i.__H,n)&&(i.__=e,i.__H=n,o.__H.__h.push(i));return Object(u.h)("div",{class:T},Object(u.h)("h1",null,"Profile: ",c),Object(u.h)("p",null,"This is the user profile for a user named ",c,"."),Object(u.h)("div",null,"Current time: ",new Date(l).toLocaleString()),Object(u.h)("p",null,Object(u.h)("button",{onClick:function(){h(p+1)}},"Click Me")," Clicked ",p," times."))},U=n("ox/y"),w="notfound__Ecgkh",H=function(){return Object(u.h)("div",{class:w},Object(u.h)("h1",null,"Error 404"),Object(u.h)("p",null,"That page doesn't exist."),Object(u.h)(U.Link,{href:"/"},Object(u.h)("h4",null,"Back to Home")))},E="title__I4umU",I="navGrid__ay8e5",R="gridItem__oucIQ",M=function(){return Object(u.h)("header",null,Object(u.h)("h1",{class:E},"臺灣 VTuber 列表 (目前無內容)"),Object(u.h)("nav",{class:I},[{text:"首頁",linkTo:"/"},{text:"重大活動月曆",linkTo:"/event-calendar"},{text:"所有 VTuber",linkTo:"/all-vtubers"},{text:"團體列表",linkTo:"/group-calendar"},{text:"熱門 VTuber",linkTo:"/trending-vtubers"},{text:"熱門影片",linkTo:"/trending-videos"},{text:"成長中 VTuber",linkTo:"/growing-vtubers"},{text:"近期出道",linkTo:"/debut-vtubers"},{text:"近期畢業",linkTo:"/graduate-vtubers"},{text:"資料登載/錯誤回報",linkTo:"/report-issue"},{text:"關於",linkTo:"/about"}].map((function(t){return e=t.text,n=t.linkTo,Object(u.h)("div",{class:R},Object(u.h)(U.Link,{href:n},e));var e,n}))))},P=function(){return Object(u.h)("div",{id:"preact_root"},Object(u.h)(M,null),Object(u.h)(c.Router,null,Object(u.h)(c.Route,{path:"/",component:l}),Object(u.h)(c.Route,{path:"/profile/",component:S,user:"me"}),Object(u.h)(c.Route,{path:"/profile/:user",component:S}),Object(u.h)(H,{default:!0})))};e.default=P}});
//# sourceMappingURL=ssr-bundle.js.map