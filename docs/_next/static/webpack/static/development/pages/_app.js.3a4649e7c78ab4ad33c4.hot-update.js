webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sleepy.config */ "./sleepy.config.js");
/* harmony import */ var _sleepy_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sleepy_config__WEBPACK_IMPORTED_MODULE_6__);





var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;




var isServer = !true;
Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["useStaticRendering"])(isServer);
var Store = (_class = (_temp = function Store(isServer) {
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Store);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "banner", _descriptor, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "avatar", _descriptor2, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "blurBanner", _descriptor3, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "bodyBg", _descriptor4, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeBanner", _descriptor5, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeAvatar", _descriptor6, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeBodyBg", _descriptor7, this);

  if (initialData.banner) {
    this.banner = initialData.banner;
  }

  if (initialData.avatar) {
    this.avatar = initialData.avatar;
  }
}, _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "banner", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["images"].banner || '/static/banner.png';
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "avatar", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["images"].avatar || '/static/avatar.png';
  }
}), _descriptor3 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "blurBanner", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return _sleepy_config__WEBPACK_IMPORTED_MODULE_6__["images"].banner || '/static/banner.png';
  }
}), _descriptor4 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "bodyBg", [mobx__WEBPACK_IMPORTED_MODULE_4__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '#cabdaf';
  }
}), _descriptor5 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "changeBanner", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return function (banner) {
      _this.banner = banner;
    };
  }
}), _descriptor6 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "changeAvatar", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (avatar) {
      _this2.avatar = avatar;
    };
  }
}), _descriptor7 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__["default"])(_class.prototype, "changeBodyBg", [mobx__WEBPACK_IMPORTED_MODULE_4__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (bodyBg) {
      _this3.bodyBg = bodyBg;
    };
  }
})), _class);
var store = null;
function initializeStore(initialData) {
  if (isServer) {
    return new Store(isServer, initialData);
  }

  if (store === null) {
    store = new Store(isServer, initialData);
  }

  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.3a4649e7c78ab4ad33c4.hot-update.js.map