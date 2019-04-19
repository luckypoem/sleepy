webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/PostItem.js":
/*!********************************!*\
  !*** ./components/PostItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/_next@8.1.0@next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/_next@8.1.0@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! medium-zoom */ "./node_modules/_medium-zoom@1.0.4@medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Title */ "./components/Title.js");
/* harmony import */ var _components_Gitting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Gitting */ "./components/Gitting.js");
/* harmony import */ var _components_PageLoad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageLoad */ "./components/PageLoad.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils */ "./utils/index.js");






var _jsxFileName = "/Users/zhaohaiwei/Desktop/github/sleepy/components/PostItem.js";












var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));
    _this.state = {
      id: null,
      post: {},
      navigation: []
    };
    _this.htmlRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(_utils__WEBPACK_IMPORTED_MODULE_16__["searchParams"])('id').then(function (id) {
        _api__WEBPACK_IMPORTED_MODULE_10__["default"].byId(id).then(function (data) {
          _this2.setState(function () {
            return {
              id: id,
              post: data
            };
          });

          _this2.setState(function () {
            return {
              navigation: Object(_utils__WEBPACK_IMPORTED_MODULE_16__["getNavs"])(_this2.htmlRef.current)
            };
          });

          Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.htmlRef.current.querySelectorAll('a')).filter(function (item) {
            return item.children.length === 1 && item.children[0].tagName === 'IMG';
          }).map(function (item) {
            item.href = 'javascript:void(0);';
            return item.children[0];
          }).forEach(function (item) {
            Object(medium_zoom__WEBPACK_IMPORTED_MODULE_9__["default"])(item, {
              background: '#BADA55'
            });
          });
        }).catch(function () {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/error');
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
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_PageLoad__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "post-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "".concat(_sleepy_config__WEBPACK_IMPORTED_MODULE_15__["seo"].title, " | ").concat(post.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "post-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "content",
        style: {
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/post?id=".concat(post.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "title",
        style: {
          marginBottom: 10,
          fontSize: 18
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, post.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "html markdown-body",
        ref: this.htmlRef,
        dangerouslySetInnerHTML: {
          __html: post.html
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "time",
        title: Object(_utils__WEBPACK_IMPORTED_MODULE_16__["format"])(post.created_at),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_16__["relative"])(post.created_at)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        navigation: navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), post.locked ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "locked",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_16__["t"])('commentLocked')) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Gitting__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: this.state.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=post.js.5b5f62c8cb1025ba2d31.hot-update.js.map