webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils/index.js");





var _jsxFileName = "/Users/zhaohaiwei/Desktop/sleepy/components/PostList.js";







var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.state = {
      posts: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var query = this.props.query;
      _api__WEBPACK_IMPORTED_MODULE_7__["default"].byPage({
        page: query.page || 1
      }).then(function (data) {
        _this2.setState(function () {
          return {
            posts: data
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.state.posts;

      if (!posts.length) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, posts.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: item.id,
          className: "post-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "post/?id=".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "poster",
          style: {
            backgroundImage: "url(".concat(item.poster || _sleepy_config__WEBPACK_IMPORTED_MODULE_9__["images"].poster || "/static/poster.png", ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "post/?id=".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, item.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "excerpt",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, item.excerpt), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, Object(_utils__WEBPACK_IMPORTED_MODULE_10__["relative"])(item.created_at)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "tags",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, item.tags.map(function (tag) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            key: tag,
            href: "archive/?tag=".concat(tag),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            className: "tag",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "#", tag));
        })))));
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,h:r,m:e,s:n,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof S},M=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new S(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var S=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var h=this,f=!!D.u(a)||a,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case o:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,S=(l<g?l+7:l)-g;return d(f?y-S:y+(6-S),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[o]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(a-this.$W):a;return this.$d[d]&&this.$d[d]($),this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.add=function(t,a){var h,f=this;t=Number(t);var c=D.p(a),d=function(n,e){var r=f.clone().set("date",1).set(n,e+t);return r.set("date",Math.min(f.$D,r.daysInMonth()))},$=function(n){var e=new Date(f.$d);return e.setDate(e.getDate()+n*t),D.w(e,f)};if(c===u)return d(u,this.$M);if(c===o)return d(o,this.$y);if(c===i)return $(1);if(c===s)return $(7);var l=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,m=this.valueOf()+t*l;return D.w(m,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=i.weekdays,u=i.months,a=function(t,n,e,r){return t&&t[n]||e[n].substr(0,r)},o=function(t){return D.s(n.$H%12||12,t,"0")},h={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:D.s(this.$M+1,2,"0"),MMM:a(i.monthsShort,this.$M,u,3),MMMM:u[this.$M],D:String(this.$D),DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:a(i.weekdaysMin,this.$W,s,2),ddd:a(i.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:D.s(this.$H,2,"0"),h:o(1),hh:o(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:D.s(this.$m,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):h[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[o]=y/12,c[u]=y,c[a]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=S.prototype,g.extend=function(t,n){return t(n,S,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "./node_modules/dayjs/locale/zh-cn.js":
/*!********************************************!*\
  !*** ./node_modules/dayjs/locale/zh-cn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(_,e){ true?module.exports=e(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):undefined}(this,function(_){"use strict";_=_&&_.hasOwnProperty("default")?_.default:_;var e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(_,e){switch(e){case"W":return _+"周";default:return _+"日"}},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"}};return _.locale(e,null,!0),e});


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){"use strict";return function(e,r,t){var n=r.prototype;t.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var o=function(e,r,n,o){for(var d,i,a=n.$locale().relativeTime,u=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=u.length,s=0;s<f;s+=1){var l=u[s];l.d&&(d=o?t(e).diff(n,l.d,!0):n.diff(e,l.d,!0));var m=Math.ceil(Math.abs(d));if(m<=l.r||!l.r){i=a[l.l].replace("%d",m);break}}return r?i:(d>0?a.future:a.past).replace("%s",i)};n.to=function(e,r){return o(e,r,this,!0)},n.from=function(e,r){return o(e,r,this)},n.toNow=function(e){return this.to(t(),e)},n.fromNow=function(e){return this.from(t(),e)}}});


/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: relative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "./node_modules/dayjs/locale/zh-cn.js");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_2__);



dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);
dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.locale("zh-cn");
function relative(time) {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
}

/***/ })

})
//# sourceMappingURL=index.js.68669dac64c5529789d7.hot-update.js.map