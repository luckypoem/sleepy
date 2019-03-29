webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/PostItem.js":
/*!********************************!*\
  !*** ./components/PostItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Title */ "./components/Title.js");
/* harmony import */ var _components_Gitting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Gitting */ "./components/Gitting.js");
/* harmony import */ var _components_PageLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PageLoad */ "./components/PageLoad.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils */ "./utils/index.js");






var _dec,
    _class2,
    _jsxFileName = "/Users/zhaohaiwei/Desktop/sleepy/components/PostItem.js";













var _class = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('store'), _dec(_class2 = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class2 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class2, _React$Component);

  function _class2(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class2);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class2).call(this, props));
    _this.state = {
      id: null,
      post: {},
      navigation: []
    };
    _this.htmlRef = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_15__["searchParams"])('id').then(function (id) {
        _api__WEBPACK_IMPORTED_MODULE_9__["default"].byId(id).then(function (data) {
          _this2.setState(function () {
            return {
              id: id,
              post: data,
              navigation: Object(_utils__WEBPACK_IMPORTED_MODULE_15__["getNavs"])(data.html)
            };
          });
        }).catch(function () {
          next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/error');
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          post = _this$state.post,
          navigation = _this$state.navigation;

      if (!post.id) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PageLoad__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "".concat(_sleepy_config__WEBPACK_IMPORTED_MODULE_14__["seo"].title, " | ").concat(post.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        style: {
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/post?id=".concat(post.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "title",
        style: {
          marginBottom: 10,
          fontSize: 18
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, post.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "html markdown-body",
        ref: this.htmlRef,
        dangerouslySetInnerHTML: {
          __html: post.html
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "time",
        title: Object(_utils__WEBPACK_IMPORTED_MODULE_15__["format"])(post.created_at),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_15__["relative"])(post.created_at)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_13__["default"], {
        navigation: navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), post.locked ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "locked",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_15__["t"])('commentLocked')) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Gitting__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: this.state.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }));
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class2) || _class2);



/***/ })

})
//# sourceMappingURL=post.js.4856b0e41b245b6f392f.hot-update.js.map