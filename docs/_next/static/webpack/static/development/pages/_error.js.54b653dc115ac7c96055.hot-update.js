webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/PageItem.js":
/*!********************************!*\
  !*** ./components/PageItem.js ***!
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Title */ "./components/Title.js");
/* harmony import */ var _components_PageLoad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PageLoad */ "./components/PageLoad.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/zhaohaiwei/Desktop/github/sleepy/components/PageItem.js";








var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.state = {
      post: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var label = this.props.label;
      _api__WEBPACK_IMPORTED_MODULE_7__["default"].byPage({
        labels: label,
        type: 'PAGE'
      }).then(function (data) {
        if (data.length) {
          _this2.setState(function () {
            return {
              post: data[0]
            };
          });
        }
      }).catch(function () {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/error');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var post = this.state.post;
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children;

      if (!post.id) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PageLoad__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      }

      var menu = _sleepy_config__WEBPACK_IMPORTED_MODULE_11__["menus"].find(function (item) {
        return item.link === "/".concat(label);
      }) || {
        name: 'Not Found'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "post-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "".concat(_sleepy_config__WEBPACK_IMPORTED_MODULE_11__["seo"].title, " | ").concat(menu.name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        style: {
          padding: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/".concat(label),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 56
        },
        __self: this
      }, post.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "html markdown-body",
        dangerouslySetInnerHTML: {
          __html: post.html
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), children));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=_error.js.54b653dc115ac7c96055.hot-update.js.map