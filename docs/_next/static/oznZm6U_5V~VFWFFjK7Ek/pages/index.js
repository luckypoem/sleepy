(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9Jkg":function(e,t,a){e.exports=a("oh+g")},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Z69C"),l=a("PgRs"),o=a.n(l),s=function(e){var t=e.title;return r.a.createElement(o.a,null,r.a.createElement("title",null,t))},c=a("YFqc"),u=a.n(c),p=function(e){var t=e.banner;return r.a.createElement("div",{className:"header",style:{backgroundImage:"url(".concat(t||i.images.banner||"/static/banner.png",")")}},r.a.createElement("div",{className:"header-top"},r.a.createElement("div",{className:"blur",style:{backgroundImage:"url(".concat(t||i.images.banner||"/static/banner.png",")")}}),r.a.createElement("div",{className:"menus"},i.menus.map(function(e){return r.a.createElement("div",{key:e.name,className:"menu-item"},r.a.createElement(u.a,{href:e.link},r.a.createElement("a",null,e.name)))})),r.a.createElement("div",{className:"tool"},r.a.createElement("a",{href:"https://github.com/zhw2590582/sleepy"},"Github"))),r.a.createElement("div",{className:"header-center"}),r.a.createElement("div",{className:"header-bottom"},r.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(i.images.avatar||"/static/avatar.png",")")}}),r.a.createElement("div",{className:"name"},r.a.createElement("div",{className:"title"},i.seo.title),r.a.createElement("div",{className:"description"},i.seo.description))))},f=function(){return r.a.createElement("div",null,i.seo.copyright)},d=function(e){var t=e.children;return r.a.createElement("div",{className:"layout layout-home"},r.a.createElement(s,{title:i.seo.title}),r.a.createElement(p,null),t,r.a.createElement(f,null))};t.default=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,null,r.a.createElement("div",{className:"page page-index"})))}},YFqc:function(e,t,a){e.exports=a("cTJO")},Z69C:function(e,t,a){"use strict";e.exports={seo:{title:"老赵茶馆",keywords:"老赵, 茶馆, 前端, 代码, 扯淡, 音乐, 电影, 分享",description:"Hi, 老赵其实不老, 是一枚前端攻城狮, 就这样. QQ群：320881312",copyright:"© 2018 All Rights Reserved. 粤ICP备15035931号-1."},github:{clientID:"2fa6841ea796af21b439",clientSecret:"4e2196768a4ce9ce143bf2b2ba378efcbd8081f8",repo:"zhw2590582.github.io",owner:"zhw2590582",admin:["zhw2590582"]},images:{banner:"https://img1.doubanio.com/view/photo/l/public/p2402150318.webp",avatar:""},post:{excerpt:120,pageSize:5},menus:[{name:"首页",link:"/"},{name:"关于",link:"/about"},{name:"归档",link:"/archive"},{name:"留言",link:"/message"},{name:"友链",link:"/friends"}]}},cTJO:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("9Jkg")),i=n(a("iZP3")),l=n(a("/HRN")),o=n(a("WaGi")),s=n(a("ZDA2")),c=n(a("/+P4")),u=n(a("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=a("CxY0"),m=p(a("q1tI")),h=(f(a("lgD3")),p(a("20a2"))),v=a("Bu4q");var g=function(e){function t(){var e,a,n,r,o;return(0,l.default)(this,t),(e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:e&&"object"===(0,i.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,i.default)(t)?v.formatWithValidation(t):t}},n=null,r=null,o=null,function(e,t){if(e===n&&t===r)return o;var i=a(e,t);return n=e,r=t,o=i,i}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),l=i.href,o=i.as;if(function(e){var t=d.parse(e,!1,!0),a=d.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(l)){var s=window.location.pathname;l=d.resolve(s,l),o=o?d.resolve(s,o):l,t.preventDefault();var c=e.props.scroll;null==c&&(c=o.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](l,o,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=d.resolve(e,t);h.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var i=m.Children.only(t),l={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(l.href=r||n),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=h.Router._rewriteUrlForNextExport(l.href)),m.default.cloneElement(i,l)}}]),t}(m.Component);t.default=g},"oh+g":function(e,t,a){var n=a("WEpk"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);