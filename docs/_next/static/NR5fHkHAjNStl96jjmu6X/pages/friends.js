(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iARv:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a=n("0iUn"),c=n("sLSF"),i=n("MI3g"),r=n("a7VT"),l=n("Tit0"),o=n("q1tI"),s=n.n(o),u=n("20a2"),d=n.n(u),f=n("bMwp"),m=n("YFqc"),p=n.n(m),h=n("W9HR"),b=n("cPZa"),v=n("Z69C"),w=n("Qi1R"),E=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(i.default)(this,Object(r.default)(t).call(this,e))).state={post:{}},n}return Object(l.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.label;f.a.byPage({labels:t,type:"PAGE"}).then(function(t){t.length&&e.setState(function(){return{post:t[0]}})}).catch(function(){d.a.push("/error")})}},{key:"render",value:function(){var e=this.state.post,t=this.props,n=t.label,a=t.children;if(!e.id)return s.a.createElement(b.a,null);var c=v.menus.find(function(e){return e.link==="/".concat(n)})||{name:Object(w.e)("notFoundTitle")};return s.a.createElement("div",{className:"post-item"},s.a.createElement(h.a,{title:"".concat(v.seo.title," | ").concat(c.name)}),s.a.createElement("div",{className:"content",style:{padding:0}},s.a.createElement(p.a,{href:"/".concat(n)},s.a.createElement("a",{className:"title",style:{marginBottom:10,fontSize:18}},e.title)),s.a.createElement("div",{className:"html markdown-body",dangerouslySetInnerHTML:{__html:e.html}}),a))}}]),t}(s.a.Component)},nUAz:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),c=n.n(a),i=n("iARv");t.default=function(){return c.a.createElement("div",{className:"page page-friends"},c.a.createElement(i.a,{label:"friends"}))}},z283:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friends",function(){var e=n("nUAz");return{page:e.default||e}}])}},[["z283",1,0]]]);