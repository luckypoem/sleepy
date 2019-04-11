webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
var _jsxFileName = "/Users/zhaohaiwei/Desktop/github/sleepy/components/Navigation.js";



function scroll(nav, e) {
  e.stopPropagation();
  e.preventDefault();
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["smoothScroll"])(nav, -10);
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var navigation = _ref.navigation;
  return navigation.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, navigation.map(function (nav, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: index,
      href: "#",
      onClick: function onClick(e) {
        return scroll(nav, e);
      },
      className: "nav-".concat(nav.tagName.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, nav.innerText);
  })) : null;
});

/***/ })

})
//# sourceMappingURL=post.js.5402263ea188ccc79cc1.hot-update.js.map