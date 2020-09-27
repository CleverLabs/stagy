/******/ (function(modules) { // webpackBootstrap
/******/   // The module cache
/******/   var installedModules = {};
/******/
/******/   // The require function
/******/   function __webpack_require__(moduleId) {
/******/
/******/     // Check if module is in cache
/******/     if(installedModules[moduleId]) {
/******/       return installedModules[moduleId].exports;
/******/     }
/******/     // Create a new module (and put it into the cache)
/******/     var module = installedModules[moduleId] = {
/******/       i: moduleId,
/******/       l: false,
/******/       exports: {}
/******/     };
/******/
/******/     // Execute the module function
/******/     modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/     // Flag the module as loaded
/******/     module.l = true;
/******/
/******/     // Return the exports of the module
/******/     return module.exports;
/******/   }
/******/
/******/
/******/   // expose the modules object (__webpack_modules__)
/******/   __webpack_require__.m = modules;
/******/
/******/   // expose the module cache
/******/   __webpack_require__.c = installedModules;
/******/
/******/   // define getter function for harmony exports
/******/   __webpack_require__.d = function(exports, name, getter) {
/******/     if(!__webpack_require__.o(exports, name)) {
/******/       Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/     }
/******/   };
/******/
/******/   // define __esModule on exports
/******/   __webpack_require__.r = function(exports) {
/******/     if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/       Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/     }
/******/     Object.defineProperty(exports, '__esModule', { value: true });
/******/   };
/******/
/******/   // create a fake namespace object
/******/   // mode & 1: value is a module id, require it
/******/   // mode & 2: merge all properties of value into the ns
/******/   // mode & 4: return value when already ns object
/******/   // mode & 8|1: behave like require
/******/   __webpack_require__.t = function(value, mode) {
/******/     if(mode & 1) value = __webpack_require__(value);
/******/     if(mode & 8) return value;
/******/     if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/     var ns = Object.create(null);
/******/     __webpack_require__.r(ns);
/******/     Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/     if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/     return ns;
/******/   };
/******/
/******/   // getDefaultExport function for compatibility with non-harmony modules
/******/   __webpack_require__.n = function(module) {
/******/     var getter = module && module.__esModule ?
/******/       function getDefault() { return module['default']; } :
/******/       function getModuleExports() { return module; };
/******/     __webpack_require__.d(getter, 'a', getter);
/******/     return getter;
/******/   };
/******/
/******/   // Object.prototype.hasOwnProperty.call
/******/   __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/   // __webpack_public_path__
/******/   __webpack_require__.p = "";
/******/
/******/
/******/   // Load entry module and return exports
/******/   return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_core_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _src_core_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_core_observer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_core_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _src_core_widget__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_core_widget__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_utils_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _src_utils_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_utils_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_scroll_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _src_utils_scroll_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_utils_scroll_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_utils_resize_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _src_utils_resize_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_utils_resize_observer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_utils_scroll_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _src_utils_scroll_control__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_utils_scroll_control__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_utils_vh_hack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _src_utils_vh_hack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_utils_vh_hack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_utils_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _src_utils_scroll_to__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_utils_scroll_to__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_widgets_header_header_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _src_widgets_header_header_mobile__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_header_header_mobile__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_widgets_header_header_fixed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _src_widgets_header_header_fixed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_header_header_fixed__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_widgets_header_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var _src_widgets_header_header__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_header_header__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_widgets_accord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22);
/* harmony import */ var _src_widgets_accord__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_accord__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_widgets_scroll_to__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23);
/* harmony import */ var _src_widgets_scroll_to__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_scroll_to__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_widgets_slideshow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24);
/* harmony import */ var _src_widgets_slideshow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_slideshow__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_widgets_slideshow_mobile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25);
/* harmony import */ var _src_widgets_slideshow_mobile__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_slideshow_mobile__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_widgets_paralax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26);
/* harmony import */ var _src_widgets_paralax__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_paralax__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_widgets_coin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27);
/* harmony import */ var _src_widgets_coin__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_widgets_coin__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(28);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_app__WEBPACK_IMPORTED_MODULE_17__);



















/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observer = /*#__PURE__*/function () {
  function Observer() {
    _classCallCheck(this, Observer);

    this.listeners = [];
  }

  _createClass(Observer, [{
    key: "subscribe",
    value: function subscribe(callback) {
      this.listeners.push(callback);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(callback) {
      this.listeners = this.listeners.filter(function (_item) {
        return _item !== callback;
      });
    }
  }]);

  return Observer;
}();

window.Observer = Observer;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Widget = /*#__PURE__*/function () {
  function Widget(node, selector) {
    var breakpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Widget);

    this.$node = node;

    if (!this.$node) {
      return;
    }

    this.selector = selector ? selector.substr(0, 1) === '.' ? selector.substr(1) : selector : null;
    this.breakpoint = breakpoint;
    this.breakpointStatus = null;
  }

  _createClass(Widget, [{
    key: "init",
    value: function init() {
      if (this.breakpoint) {
        onResize(this.updateBreakpointCache.bind(this));
        this.updateBreakpointCache();
      } else {
        this.build();
      }
    }
  }, {
    key: "checkBreakpoint",
    value: function checkBreakpoint() {
      switch (this.breakpoint) {
        case null:
          return true;

        case 'mobile':
          return isMobileLayout();

        case 'tablet':
          return isTabletLayout();

        case 'tablet-mobile':
          return isMobileLayout() || isTabletLayout();

        case 'laptop':
          return isLaptopLayout();

        case 'desktop':
          return isDesktopLayout();

        case 'bigTablet-desktop':
          return isDesktopLayout() || isBigTabletLayout();

        case 'smallTablet-mobile':
          return isMobileLayout() || isTabletLayout() && !isBigTabletLayout() && !isDesktopLayout();

        default:
          return true;
      }
    }
  }, {
    key: "updateBreakpointCache",
    value: function updateBreakpointCache() {
      var check = this.checkBreakpoint();

      if ((this.breakpointStatus === false || this.breakpointStatus === null) && check) {
        this.breakpointStatus = true;

        if (typeof this.build === 'function') {
          this.build();
        }
      } else if (this.breakpointStatus && !check) {
        this.breakpointStatus = false;

        if (typeof this.destroy === 'function') {
          this.destroy();
        }
      }
    }
  }, {
    key: "build",
    value: function build() {}
  }, {
    key: "destroy",
    value: function destroy() {}
    /**
     * @param selector
     * @returns Node
     */

  }, {
    key: "queryElement",
    value: function queryElement(selector) {
      if (!this.$node) return null;
      var $node = null;

      if (selector) {
        if (selector[0] === '.') {
          $node = this.$node.querySelector('.' + this.selector + '__' + selector.substr(1));

          if (!$node) {
            $node = this.$node.querySelector(selector);
          }
        } else {
          $node = this.$node.querySelector(selector);
        }
      }

      if (!$node) {
        throw new Error("Widget \"".concat(this.selector, "\" Error: Child element (selector \"").concat(selector, "\") not found"));
      }

      return $node;
    }
    /**
     * @param selector
     * @returns Node[]
     */

  }, {
    key: "queryElements",
    value: function queryElements(selector) {
      if (!this.$node) return null;
      var $nodes = null;

      if (selector) {
        if (selector[0] === '.') {
          $nodes = this.$node.querySelectorAll('.' + this.selector + '__' + selector.substr(1));

          if (!$nodes) {
            $nodes = this.$node.querySelectorAll(selector);
          }
        } else {
          $nodes = this.$node.querySelectorAll(selector);
        }
      }

      return $nodes;
    }
  }]);

  return Widget;
}();

window.Widget = Widget;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var MOBILE_WIDTH = 767;
var TABLET_WIDTH = 1023;
var LAPTOP_WIDTH = 1279;
var Layout = {
  _listeners: [],
  _documentClickListeners: [],
  is_mobile: 0,
  is_tablet: 0,
  is_laptop: 0,
  isMobileLayout: function isMobileLayout() {
    return $(window).width() <= MOBILE_WIDTH;
  },
  isTabletLayout: function isTabletLayout() {
    return $(window).width() <= TABLET_WIDTH;
  },
  isBigTabletLayout: function isBigTabletLayout() {
    return $(window).width() > TABLET_WIDTH && $(window).width() <= LAPTOP_WIDTH;
  },
  isLaptopLayout: function isLaptopLayout() {
    return $(window).width() <= LAPTOP_WIDTH;
  },
  isDesktopLayout: function isDesktopLayout() {
    return this.isMobileLayout() === false && this.isTabletLayout() === false && this.isLaptopLayout() === false;
  },
  addListener: function addListener(func) {
    this._listeners.push(func);
  },
  _fireChangeMode: function _fireChangeMode() {
    var that = this;
    setTimeout(function () {
      for (var i = 0; i < that._listeners.length; i++) {
        that._listeners[i](that.is_mobile);
      }
    }, 0);
  },
  addDocumentClickHandler: function addDocumentClickHandler(handler) {
    this._documentClickListeners.push(handler);
  },
  fireDocumentClick: function fireDocumentClick(e) {
    this._documentClickListeners.forEach(function (handler) {
      handler(e);
    });
  },
  isTouchDevice: function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
  },
  init: function init() {
    this.is_mobile = this.isMobileLayout();
    $(window).on('resize', function () {
      var isMobile = Layout.isMobileLayout();
      var isTablet = Layout.isTabletLayout();
      var isLaptop = Layout.isLaptopLayout();

      if (isMobile !== Layout.is_mobile) {
        Layout.is_mobile = isMobile;

        Layout._fireChangeMode();
      } else if (isTablet !== Layout.is_tablet) {
        Layout.is_tablet = isTablet;

        Layout._fireChangeMode();
      } else if (isLaptop !== Layout.is_laptop) {
        Layout.is_laptop = isLaptop;

        Layout._fireChangeMode();
      }
    });
    var documentClick = false;
    $(document).on('touchstart', function () {
      documentClick = true;
    });
    $(document).on('touchmove', function () {
      documentClick = false;
    });
    $(document).on('click touchend', function (e) {
      if (e.type === 'click') {
        documentClick = true;
      }

      if (documentClick) {
        Layout.fireDocumentClick(e);
      }
    });
  }
};
Layout.init();
window.Layout = Layout;

window.isMobileLayout = function () {
  return Layout.isMobileLayout();
};

window.isTabletLayout = function () {
  return Layout.isTabletLayout();
};

window.isBigTabletLayout = function () {
  return Layout.isBigTabletLayout();
};

window.isLaptopLayout = function () {
  return Layout.isLaptopLayout();
};

window.isDesktopLayout = function () {
  return Layout.isDesktopLayout();
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ScrollObserver = /*#__PURE__*/function (_Observer) {
  _inherits(ScrollObserver, _Observer);

  var _super = _createSuper(ScrollObserver);

  function ScrollObserver() {
    var _this;

    _classCallCheck(this, ScrollObserver);

    _this = _super.call(this);
    _this.ticking = false;

    _this.observeScroll();

    return _this;
  }

  _createClass(ScrollObserver, [{
    key: "observeScroll",
    value: function observeScroll() {
      var _this2 = this;

      document.addEventListener('scroll', function () {
        if (_this2.ticking) return null;
        _this2.ticking = true;
        raf(function () {
          _this2.listeners.forEach(function (fn) {
            return fn();
          });

          _this2.ticking = false;
        });
      }, passiveIfSupported);
    }
  }]);

  return ScrollObserver;
}(Observer);

var scrollObserver = new ScrollObserver();

window.onScroll = function (fn) {
  return scrollObserver.subscribe(fn);
};

window.offScroll = function (fn) {
  return scrollObserver.unsubscribe(fn);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResizeObserver = /*#__PURE__*/function () {
  function ResizeObserver() {
    _classCallCheck(this, ResizeObserver);

    this.listeners = [];
    this.observeResize();
  }

  _createClass(ResizeObserver, [{
    key: "observeResize",
    value: function observeResize() {
      var _this = this;

      window.addEventListener('resize', function () {
        if (!_this.listeners.length) return false;

        _this.listeners.forEach(function (fn) {
          return fn();
        });
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      this.listeners.push(callback);
    }
  }]);

  return ResizeObserver;
}();

var resizeObserver = new ResizeObserver();

window.onResize = function (fn) {
  return resizeObserver.subscribe(fn);
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollControl = /*#__PURE__*/function () {
  function ScrollControl() {
    var _this = this;

    _classCallCheck(this, ScrollControl);

    this.isFixedScroll = false;
    this.lastScrollPos = this._getScrollPos();
    onScroll(function () {
      if (_this.isFixedScroll) return false;
      _this.lastScrollPos = _this._getScrollPos();
    });
  }

  _createClass(ScrollControl, [{
    key: "_getScrollPos",
    value: function _getScrollPos() {
      return window.pageYOffset;
    }
  }, {
    key: "showScrollbar",
    value: function showScrollbar() {
      if (!document.body.classList.contains('fixed-scroll')) {
        return false;
      }

      document.body.classList.remove('fixed-scroll');
      document.body.style.paddingRight = "";

      if (isMobileLayout()) {
        this.lastScrollPos = parseFloat(getComputedStyle(document.body).top || '0');
        document.body.style.top = "";
        window.scrollTo(0, this.lastScrollPos * -1);
      }

      this.isFixedScroll = false;
      return true;
    }
  }, {
    key: "hideScrollbar",
    value: function hideScrollbar() {
      if (document.body.classList.contains('fixed-scroll')) {
        return false;
      }

      if (isMobileLayout()) {
        document.body.style.top = "-".concat(this.lastScrollPos, "px");
      }

      document.body.classList.add('fixed-scroll');
      document.body.style.paddingRight = ScrollControl._calcScrollbarWidth();
      this.isFixedScroll = true;
      return true;
    }
  }, {
    key: "getScrollbarState",
    value: function getScrollbarState() {
      return this.isFixedScroll;
    }
  }, {
    key: "getLastScrollPos",
    value: function getLastScrollPos() {
      return this.lastScrollPos;
    }
  }], [{
    key: "_calcScrollbarWidth",
    value: function _calcScrollbarWidth() {
      var scrollbarMeasure = document.createElement('div');
      scrollbarMeasure.className = 'scroll-measure';
      document.body.appendChild(scrollbarMeasure);
      var offsetWidth = scrollbarMeasure.offsetWidth;
      var clientWidth = scrollbarMeasure.clientWidth;
      var scrollbarWidth = "".concat(offsetWidth - clientWidth, "px");
      document.body.removeChild(scrollbarMeasure);
      return scrollbarWidth;
    }
  }]);

  return ScrollControl;
}();

var scrollControl = new ScrollControl();
window.showScrollbar = scrollControl.showScrollbar.bind(scrollControl);
window.hideScrollbar = scrollControl.hideScrollbar.bind(scrollControl);
window.getScrollPos = scrollControl.getLastScrollPos.bind(scrollControl);
window.isFixedSCroll = scrollControl.getScrollbarState.bind(scrollControl);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function () {
  var update = function update() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  };

  window.onResize(update);
  update();
})(); // Example using - `height: calc(var(--vh, 1vh) * 100 - 135px);` equal to height: `calc(100vh - 135px)`

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollTo = /*#__PURE__*/function () {
  function ScrollTo() {
    _classCallCheck(this, ScrollTo);
  }

  _createClass(ScrollTo, null, [{
    key: "startAnimation",
    value: function startAnimation(targetElem) {
      var targetPos = targetElem.getBoundingClientRect().top;

      if ('scrollBehavior' in document.body.style) {
        ScrollTo.respond(targetElem);
        return scrollBy({
          top: targetPos,
          behavior: 'smooth'
        });
      }

      var duration = 1200;
      var startPos = getScrollPos();
      var startTime = performance.now();
      raf(animation);

      function animation(currentTime) {
        var elapsedTime = currentTime - startTime;
        var nextStep = ScrollTo.timingFunction(elapsedTime, startPos, targetPos, duration);
        scrollTo(0, nextStep);
        if (elapsedTime < duration) raf(animation);else ScrollTo.respond(targetElem);
      }
    }
  }, {
    key: "timingFunction",
    value: function timingFunction(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  }, {
    key: "respond",
    value: function respond(targetElem) {
      var event = new CustomEvent('endScroll', {
        detail: {
          targetElem: targetElem
        }
      });
      document.dispatchEvent(event);
    }
  }]);

  return ScrollTo;
}();

window.startScrollTo = ScrollTo.startAnimation;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var header;

var HeaderMobile = /*#__PURE__*/function (_Widget) {
  _inherits(HeaderMobile, _Widget);

  var _super = _createSuper(HeaderMobile);

  function HeaderMobile(node) {
    var _this;

    _classCallCheck(this, HeaderMobile);

    _this = _super.call(this, node, 'js-header', 'smallTablet-mobile');
    _this.$burger = _this.queryElement('.burger');
    _this.onBurgerClick = _this.onBurgerClick.bind(_assertThisInitialized(_this));
    _this.opened = false;

    _this.init();

    return _possibleConstructorReturn(_this, {
      close: _this.close.bind(_assertThisInitialized(_this))
    });
  }

  _createClass(HeaderMobile, [{
    key: "build",
    value: function build() {
      this.$burger.addEventListener('click', this.onBurgerClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$burger.removeEventListener('click', this.onBurgerClick);
      this.close();
    }
  }, {
    key: "onBurgerClick",
    value: function onBurgerClick() {
      this.toggle();
    }
  }, {
    key: "close",
    value: function close() {
      if (this.opened === false) {
        return;
      }

      this.$burger.classList.remove('opened');
      this.$node.classList.remove('opened');
      document.body.classList.remove('menu-opened');
      showScrollbar();
      this.opened = false;
    }
  }, {
    key: "open",
    value: function open() {
      if (this.opened) {
        return;
      }

      this.$burger.classList.add('opened');
      this.$node.classList.add('opened');
      document.body.classList.add('menu-opened');
      hideScrollbar();
      this.opened = true;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }], [{
    key: "init",
    value: function init(el) {
      header = new HeaderMobile(el);
    }
  }, {
    key: "close",
    value: function close() {
      if (header) {
        header.close();
      }
    }
  }]);

  return HeaderMobile;
}(Widget);

window.HeaderMobile = HeaderMobile;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HeaderFixed = /*#__PURE__*/function (_Widget) {
  _inherits(HeaderFixed, _Widget);

  var _super = _createSuper(HeaderFixed);

  function HeaderFixed(node) {
    var _this;

    _classCallCheck(this, HeaderFixed);

    _this = _super.call(this, node);
    _this.isFixed = false;
    _this.busy = false;

    _this.events();

    _this.update();

    _this.updateHeight();

    return _this;
  }

  _createClass(HeaderFixed, [{
    key: "events",
    value: function events() {
      onScroll(this.onScroll.bind(this));
      onResize(this.onResize.bind(this));
    }
  }, {
    key: "setHeaderAsFixed",
    value: function setHeaderAsFixed() {
      var _this2 = this;

      if (this.isFixed) return;
      this.isFixed = true;
      this.onAnimationEnd(this.$node, function () {
        _this2.$node.classList.remove('animate');
      });
      this.busy = true;
      raf2x(function () {
        _this2.$node.classList.add('animate');

        _this2.$node.classList.add('fixed');
      });
    }
  }, {
    key: "setHeaderAsNotFixed",
    value: function setHeaderAsNotFixed() {
      var _this3 = this;

      if (!this.isFixed) return;
      this.isFixed = false;
      this.onAnimationEnd(this.$node, function () {
        _this3.$node.classList.remove('animate');
      });
      this.busy = true;
      raf2x(function () {
        _this3.$node.classList.add('animate');

        _this3.$node.classList.remove('fixed-prepare');

        _this3.$node.classList.remove('fixed');
      });
    }
  }, {
    key: "update",
    value: function update() {
      if (this.$node.classList.contains('opened')) {
        return;
      }

      var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);

      if (scrollTop > document.querySelector('.section').scrollHeight) {
        this.setHeaderAsFixed();
      } else {
        this.setHeaderAsNotFixed();
      }

      if (this.isFixed === false && scrollTop > 100) {
        this.$node.classList.add('fixed-prepare');
      }

      if (scrollTop <= this.baseBeight) {
        this.$node.classList.remove('fixed-prepare');
      }
    }
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd(elem, callback) {
      var _this4 = this;

      this.animationCallback = function (_ref) {
        var target = _ref.target,
            currentTarget = _ref.currentTarget;
        if (target !== currentTarget) return false;

        _this4.removeAnimation();

        callback();
      };

      elem.addEventListener(endEvents.transition, this.animationCallback);
    }
  }, {
    key: "removeAnimation",
    value: function removeAnimation() {
      this.$node.removeEventListener(endEvents.transition, this.animationCallback);
      this.animationCallback = null;
      this.busy = false;
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      this.baseBeight = this.$node.offsetHeight;
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      this.update();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.updateHeight();
    }
  }], [{
    key: "init",
    value: function init(el) {
      new HeaderFixed(el);
    }
  }]);

  return HeaderFixed;
}(Widget);

window.HeaderFixed = HeaderFixed;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = /*#__PURE__*/function (_Widget) {
  _inherits(Header, _Widget);

  var _super = _createSuper(Header);

  function Header(node) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, node, 'js-header');
    HeaderMobile.init(_this.$node);
    HeaderFixed.init(_this.$node);
    return _this;
  }

  _createClass(Header, null, [{
    key: "init",
    value: function init(el) {
      new Header(el);
    }
  }]);

  return Header;
}(Widget);

document.addEventListener('DOMContentLoaded', function () {
  Header.init(document.querySelector('.js-header'));
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var widgetInstances = new Map();

var Accord = /*#__PURE__*/function (_Widget) {
  _inherits(Accord, _Widget);

  var _super = _createSuper(Accord);

  function Accord(item) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Accord);

    _this = _super.call(this, item, 'js-accord');
    _this.$toggle = options.toggleElement ? options.toggleElement : _this.queryElement('.toggle');
    _this.$body = options.bodyElement ? options.bodyElement : _this.queryElement('.body');
    _this.opened = _this.$node.classList.contains('opened');
    _this.busy = false;
    _this.onToggleClick = _this.onToggleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Accord, [{
    key: "build",
    value: function build() {
      this.$toggle.addEventListener('click', this.onToggleClick);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$toggle.removeEventListener('click', this.onToggleClick);
    }
  }, {
    key: "onToggleClick",
    value: function onToggleClick(e) {
      e.preventDefault();
      if (this.busy) return;
      this.busy = true;

      if (this.opened === false) {
        this.$node.classList.add('opened');
        this.expand();
      } else {
        this.collapse();
        this.$node.classList.remove('opened');
      }

      this.opened = !this.opened;
    }
  }, {
    key: "collapse",
    value: function collapse() {
      this.animate({
        from: this.$body.scrollHeight,
        to: 0
      });
    }
  }, {
    key: "expand",
    value: function expand() {
      this.animate({
        from: 0,
        to: this.$body.scrollHeight
      });
    }
  }, {
    key: "animate",
    value: function animate(height) {
      var _this2 = this;

      var elem = this.$body;

      var handler = function handler(e) {
        if (e.target !== e.currentTarget) return false;
        elem.removeEventListener(endEvents.transition, handler);
        elem.classList.remove('animate');
        elem.style.height = '';
        _this2.busy = false; // this.$body.querySelectorAll('.swiper-container').forEach(swiperNode => {
        //   const swiper = swiperNode.swiper;
        //   swiper && swiper.update();
        // });
      };

      elem.addEventListener(endEvents.transition, handler);
      elem.classList.add('animate');
      elem.style.height = "".concat(height.from, "px");
      raf2x(function () {
        elem.style.height = "".concat(height.to, "px");
      });
    }
  }], [{
    key: "destroy",
    value: function destroy(elem) {
      widgetInstances.get(elem).destroy();
    }
  }, {
    key: "init",
    value: function init(elem) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (widgetInstances.has(elem) === false) {
        widgetInstances.set(elem, new Accord(elem, options));
      }

      widgetInstances.get(elem).build();
      return widgetInstances.get(elem);
    }
  }]);

  return Accord;
}(Widget);

document.addEventListener('DOMContentLoaded', function () {
  var accords = document.querySelectorAll('.js-accord');
  accords.forEach(function (item) {
    Accord.init(item);
  });
});
window.Accord = Accord;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollToLink = /*#__PURE__*/function () {
  function ScrollToLink(nodeElement) {
    _classCallCheck(this, ScrollToLink);

    this.nodeElement = nodeElement;
    this.targetElement = document.querySelector(this.nodeElement.getAttribute('href') || this.nodeElement.dataset.scrollTarget);
    if (!this.targetElement) return null;
    this.update = this.update.bind(this);
    this.init();
  }

  _createClass(ScrollToLink, [{
    key: "isInViewport",
    value: function isInViewport() {
      var bounding = this.targetElement.getBoundingClientRect();
      return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isInViewport()) {
        this.nodeElement.classList.add('hidden');
      } else {
        this.nodeElement.classList.remove('hidden');
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      onScroll(this.update);
      onResize(this.update);
      this.update();
      this.nodeElement.addEventListener('click', function (e) {
        e.preventDefault();
        HeaderMobile.close();
        setTimeout(function () {
          raf2x(function () {
            startScrollTo(_this.targetElement);
          });
        });
      });
    }
  }]);

  return ScrollToLink;
}();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-scroll-to').forEach(function (element) {
    return new ScrollToLink(element);
  });
});
window.ScrollToLink = ScrollToLink;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SlideShow = /*#__PURE__*/function (_Widget) {
  _inherits(SlideShow, _Widget);

  var _super = _createSuper(SlideShow);

  function SlideShow(node) {
    var _this;

    _classCallCheck(this, SlideShow);

    _this = _super.call(this, node, '.js-slideshow', 'tablet-desktop');
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    _this.$slides = _this.queryElements('.slide');
    _this.$slideTabs = _this.queryElements('.tab');
    _this.$howItWorks = document.querySelector('.js-how-it-works');
    _this.top = 0;
    _this.slideTops = [];
    _this.tabStates = [];
    _this.onAnimationEndHandlers = [];

    _this.init();

    return _this;
  }

  _createClass(SlideShow, [{
    key: "build",
    value: function build() {
      var _this2 = this;

      this.top = this.$node.getBoundingClientRect().top + getScrollPos();
      this.bottom = this.$slides[this.$slides.length - 1].offsetTop;
      var style = document.querySelector('.js-hero-section').currentStyle || window.getComputedStyle(document.querySelector('.js-hero-section'));
      this.titleTop = document.querySelector('.js-hero-section').scrollHeight + parseInt(style.marginTop) + parseInt(style.marginBottom) - 75;
      this.stickyHeight = document.querySelector('.js-how-it-works').getBoundingClientRect().height - 75;
      this.slideTops = [];
      this.tabStates = [];
      this.$slides.forEach(function (slide) {
        _this2.slideTops.push(slide.getBoundingClientRect().top + getScrollPos() - _this2.stickyHeight + 75);

        _this2.tabStates.push('closed');

        _this2.onAnimationEndHandlers.push(null);
      });
      onScroll(this.onScroll);
      this.setActiveStepNum(1);
      this.onScroll();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      offScroll(this.onScroll);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var pos = getScrollPos();
      this.setHowItWorksAsSticky(this.$slides[this.$slides.length - 1].getBoundingClientRect().top > this.stickyHeight);
      this.setHowItWorksAsDown(pos > this.titleTop);

      if (pos < this.slideTops[0]) {
        this.setActiveStepNum(1);
        return;
      }

      var active = this.slideTops.length;

      for (var i = 0; i < this.slideTops.length - 1; i++) {
        if (pos > this.slideTops[i]) {
          active = i + 2;
        }
      }

      this.setActiveStepNum(active);
    }
  }, {
    key: "setHowItWorksAsSticky",
    value: function setHowItWorksAsSticky(state) {
      if (state) {
        this.$howItWorks.classList.remove('no-sticky');
      } else {
        this.$howItWorks.classList.add('no-sticky');
      }
    }
  }, {
    key: "setHowItWorksAsDown",
    value: function setHowItWorksAsDown(state) {
      if (!state) {
        this.$howItWorks.classList.remove('down');
      } else {
        this.$howItWorks.classList.add('down');
      }
    }
  }, {
    key: "createEndHandler",
    value: function createEndHandler(num, handler) {
      var _this3 = this;

      var body = this.$slideTabs[num].querySelector('.tab-item__body');

      this.onAnimationEndHandlers[num] = function (e) {
        if (e.target !== e.currentTarget) return false;
        body.removeEventListener(endEvents.transition, _this3.onAnimationEndHandlers[num]);
        _this3.onAnimationEndHandlers[num] = null;
        body.classList.remove('animate');
        body.style.height = '';

        if (handler) {
          handler();
        }
      };
    }
  }, {
    key: "breakProcess",
    value: function breakProcess(num) {
      this.$slideTabs[num].removeEventListener(endEvents.transition, this.onAnimationEndHandlers[num]);
      this.onAnimationEndHandlers[num] = null;

      if (this.tabStates[num] === 'opening') {
        this.$slideTabs[num].classList.remove('opened');
        this.tabStates[num] = 'closed';
      } else if (this.tabStates[num] === 'closing') {
        this.$slideTabs[num].classList.remove('opened');
        this.tabStates[num] = 'closed';
      }

      this.$slideTabs[num].querySelector('.tab-item__body').classList.remove('animate');
      this.$slideTabs[num].querySelector('.tab-item__body').style.height = '';
    }
  }, {
    key: "openTab",
    value: function openTab(num) {
      var _this4 = this;

      if (this.tabStates[num] === 'open' || this.tabStates[num] === 'opening') return;

      if (this.tabStates[num] === 'closing') {
        this.breakProcess(num);
      }

      this.tabStates[num] = 'opening';
      this.$slideTabs[num].classList.add('opened');
      this.expand(num, function () {
        if (_this4.tabStates[num] !== 'opening') return;
        _this4.tabStates[num] = 'open';
      });
    }
  }, {
    key: "closeTab",
    value: function closeTab(num) {
      var _this5 = this;

      if (this.tabStates[num] === 'closed' || this.tabStates[num] === 'closing') return;

      if (this.tabStates[num] === 'opening') {
        this.breakProcess(num);
      }

      this.tabStates[num] = 'closing';
      this.collapse(num, function () {
        if (_this5.tabStates[num] !== 'closing') return;
        _this5.tabStates[num] = 'closed';

        _this5.$slideTabs[num].classList.remove('opened');
      });
    }
  }, {
    key: "collapse",
    value: function collapse(num, handler) {
      var elem = this.$slideTabs[num].querySelector('.tab-item__body');
      var height = {
        from: elem.scrollHeight,
        to: 0
      };
      this.createEndHandler(num, handler);
      this.animate(elem, height, this.onAnimationEndHandlers[num]);
    }
  }, {
    key: "expand",
    value: function expand(num, handler) {
      var elem = this.$slideTabs[num].querySelector('.tab-item__body');
      var height = {
        from: 0,
        to: elem.scrollHeight
      };
      this.createEndHandler(num, handler);
      this.animate(elem, height, this.onAnimationEndHandlers[num]);
    }
  }, {
    key: "animate",
    value: function animate(elem, height, onFinishHandler) {
      elem.addEventListener(endEvents.transition, onFinishHandler);
      elem.classList.add('animate');
      elem.style.height = "".concat(height.from, "px");
      raf2x(function () {
        elem.style.height = "".concat(height.to, "px");
      });
    }
  }, {
    key: "setActiveStepNum",
    value: function setActiveStepNum(activeStepNum) {
      for (var i = 0; i < this.$slideTabs.length; i++) {
        if (i === activeStepNum - 1) {
          this.openTab(i);
        } else {
          this.closeTab(i);
        }
      }
    }
  }], [{
    key: "init",
    value: function init(el) {
      new SlideShow(el);
    }
  }]);

  return SlideShow;
}(Widget);

document.addEventListener('DOMContentLoaded', function () {
  SlideShow.init(document.querySelector('.js-slideshow'));
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SlideShow = /*#__PURE__*/function (_Widget) {
  _inherits(SlideShow, _Widget);

  var _super = _createSuper(SlideShow);

  function SlideShow(node) {
    var _this;

    _classCallCheck(this, SlideShow);

    _this = _super.call(this, node, '.js-slideshow', 'mobile');
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    _this.$slides = _this.queryElements('.tab');
    _this.slideTops = [];

    _this.init();

    return _this;
  }

  _createClass(SlideShow, [{
    key: "build",
    value: function build() {
      var _this2 = this;

      this.slideTops = [];
      this.$slides.forEach(function (slide) {
        _this2.slideTops.push(slide.getBoundingClientRect().top + getScrollPos());
      });
      onScroll(this.onScroll);
      this.setActiveStepNum(1);
      this.onScroll();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      offScroll(this.onScroll);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var pos = getScrollPos(); // console.log(pos, this.slideTops);

      if (pos < this.slideTops[0]) {
        this.setActiveStepNum(1);
        return;
      }

      var active = this.slideTops.length;

      for (var i = 0; i < this.slideTops.length - 1; i++) {
        if (pos > this.slideTops[i]) {
          active = i + 2;
        }
      }

      this.setActiveStepNum(active);
    }
  }, {
    key: "setActiveStepNum",
    value: function setActiveStepNum(activeStepNum) {
      for (var i = 0; i < this.$slides.length; i++) {
        if (i === activeStepNum - 1) {
          this.$slides[i].classList.add('active');
        } else {
          this.$slides[i].classList.remove('active');
        }
      }
    }
  }], [{
    key: "init",
    value: function init(el) {
      new SlideShow(el);
    }
  }]);

  return SlideShow;
}(Widget);

document.addEventListener('DOMContentLoaded', function () {
  SlideShow.init(document.querySelector('.js-slideshow'));
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

window.onload = function () {
  lax.setup();

  var updateLax = function updateLax() {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
}; // ??????

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Coin = /*#__PURE__*/function (_Widget) {
  _inherits(Coin, _Widget);

  var _super = _createSuper(Coin);

  function Coin(node) {
    var _this;

    _classCallCheck(this, Coin);

    _this = _super.call(this, node, '.js-coin', 'desktop');
    _this.$image = _this.queryElement('.image');
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    _this.top = 0;
    _this.bottom = 0;
    _this.height = 0;
    _this.k = 0;

    _this.init();

    return _this;
  }

  _createClass(Coin, [{
    key: "build",
    value: function build() {
      this.top = this.$node.getBoundingClientRect().top + getScrollPos();
      this.bottom = this.$node.getBoundingClientRect().bottom + getScrollPos();
      this.height = 155;
      this.k = window.innerHeight / this.height;
      onScroll(this.onScroll);
      this.onScroll();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      offScroll(this.onScroll);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var pos = getScrollPos();

      if (pos >= this.top - window.innerHeight + 300) {
        var delta = Math.max(0, Math.min(this.height, (pos - (this.top - window.innerHeight + 300)) / this.k));
        this.setPosition(delta);
      }
    }
  }, {
    key: "setPosition",
    value: function setPosition(delta) {
      this.$image.style.transform = 'translateY(' + delta + 'px)';
    }
  }], [{
    key: "init",
    value: function init(el) {
      new Coin(el);
    }
  }]);

  return Coin;
}(Widget);

document.addEventListener('DOMContentLoaded', function () {
  Coin.init(document.querySelector('.js-coin'));
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.addEvents();
  }

  _createClass(App, [{
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', function (e) {
        _this.initLibs();

        _this.initModules();
      });
      document.documentElement.addEventListener('touchstart', function (e) {
        if (e.touches.length > 1) e.preventDefault();
      });
    }
  }, {
    key: "initLibs",
    value: function initLibs() {
      window.svg4everybody();
    }
  }, {
    key: "initModules",
    value: function initModules() {// disablingPreloader();
    }
  }]);

  return App;
}();

var app = new App();

/***/ })
/******/ ]);
