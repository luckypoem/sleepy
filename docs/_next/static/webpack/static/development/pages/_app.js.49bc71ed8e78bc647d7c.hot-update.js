webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var stack_blur_to_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stack-blur-to-url */ "./node_modules/stack-blur-to-url/index.js");
/* harmony import */ var stack_blur_to_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(stack_blur_to_url__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/zhaohaiwei/Desktop/github/sleepy/components/Header.js";





var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));
    _this.state = {
      banner: props.banner || _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["images"].banner || '/static/banner.png',
      avatar: props.avatar || _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["images"].avatar || '/static/avatar.png',
      blurBanner: props.banner || _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["images"].banner || '/static/banner.png'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      stack_blur_to_url__WEBPACK_IMPORTED_MODULE_8___default()(this.state.banner, 30).then(function (url) {
        _this2.setState({
          blurBanner: url
        });
      });
      stack_blur_to_url__WEBPACK_IMPORTED_MODULE_8___default()(this.state.banner, 100).then(function (url) {
        document.querySelector('.wrapper').style.backgroundImage = "url(".concat(url, ")");
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.URL.revokeObjectURL(this.state.blurBanner);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          banner = _this$state.banner,
          avatar = _this$state.avatar,
          blurBanner = _this$state.blurBanner;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header",
        style: {
          backgroundImage: "url(".concat(banner, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-top",
        style: {
          backgroundImage: "url(".concat(blurBanner, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "menus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["menus"].map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: item.name,
          className: "menu-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: item.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, item.name)));
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/".concat(_sleepy_config__WEBPACK_IMPORTED_MODULE_6__["github"].owner, "/").concat(_sleepy_config__WEBPACK_IMPORTED_MODULE_6__["github"].repo, "/issues"),
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Github"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["menus"][0].link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "avatar",
        style: {
          backgroundImage: "url(".concat(avatar, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["seo"].title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["seo"].description))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=_app.js.49bc71ed8e78bc647d7c.hot-update.js.map