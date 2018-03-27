module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_LOCALE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_LOCALE_SUCCESS; });
//locale
var LOAD_LOCALE_SUCCESS = 'LOAD_LOCALE_SUCCESS';
var CHANGE_LOCALE_SUCCESS = 'CHANGE_LOCALE_SUCCESS';

/***/ }),

/***/ "./components/home/container/BottomBarContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_BottomBar__ = __webpack_require__("./components/home/presentation/BottomBar.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/BottomBarContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BottomBarContainer = function (_React$Component) {
  _inherits(BottomBarContainer, _React$Component);

  function BottomBarContainer(props) {
    _classCallCheck(this, BottomBarContainer);

    return _possibleConstructorReturn(this, (BottomBarContainer.__proto__ || Object.getPrototypeOf(BottomBarContainer)).call(this, props));
  }

  _createClass(BottomBarContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_BottomBar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    }
  }]);

  return BottomBarContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (BottomBarContainer);

/***/ }),

/***/ "./components/home/container/CarouselContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Carousel__ = __webpack_require__("./components/home/presentation/Carousel.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/CarouselContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CarouselContainer = function (_React$Component) {
  _inherits(CarouselContainer, _React$Component);

  function CarouselContainer(props) {
    _classCallCheck(this, CarouselContainer);

    var _this = _possibleConstructorReturn(this, (CarouselContainer.__proto__ || Object.getPrototypeOf(CarouselContainer)).call(this, props));

    _this.state = {
      loader: true,
      carousel: [{ img: '../static/images/banner/el-nido.jpg', slogan: 'If not now, when?' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Just Go!' }, { img: '../static/images/banner/Asia-Travel-Group.jpg', slogan: 'We all deserve a little wanderlust.' }]
    };
    return _this;
  }

  _createClass(CarouselContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ loader: false });
      }, 800);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Carousel__["a" /* default */], { loader: this.state.loader, carousel: this.state.carousel, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }
  }]);

  return CarouselContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CarouselContainer);

/***/ }),

/***/ "./components/home/container/CitiesContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Cities__ = __webpack_require__("./components/home/presentation/Cities.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/CitiesContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CitiesContainer = function (_React$Component) {
  _inherits(CitiesContainer, _React$Component);

  function CitiesContainer(props) {
    _classCallCheck(this, CitiesContainer);

    var _this = _possibleConstructorReturn(this, (CitiesContainer.__proto__ || Object.getPrototypeOf(CitiesContainer)).call(this, props));

    _this.state = {
      images: [{ img: '../static/images/banner/el-nido.jpg', slogan: 'Cebu' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Bohol' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Alabang' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Makati' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Quezon' }, { img: '../static/images/banner/Asia-Travel-Group.jpg', slogan: 'Ayala' }, { img: '../static/images/banner/el-nido.jpg', slogan: 'Makati' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Baguio' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Iloilo' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Bacolod' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Davao' }, { img: '../static/images/banner/Asia-Travel-Group.jpg', slogan: 'Ilocos' }, { img: '../static/images/banner/el-nido.jpg', slogan: 'Manila' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Tarlac' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Clark' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Paranaque' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Manila' }, { img: '../static/images/banner/Asia-Travel-Group.jpg', slogan: 'Cebu' }]
    };
    return _this;
  }

  _createClass(CitiesContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Cities__["a" /* default */], { images: this.state.images, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      });
    }
  }]);

  return CitiesContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CitiesContainer);

/***/ }),

/***/ "./components/home/container/DealsContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Deals__ = __webpack_require__("./components/home/presentation/Deals.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/DealsContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CitiesContainer = function (_React$Component) {
  _inherits(CitiesContainer, _React$Component);

  function CitiesContainer(props) {
    _classCallCheck(this, CitiesContainer);

    var _this = _possibleConstructorReturn(this, (CitiesContainer.__proto__ || Object.getPrototypeOf(CitiesContainer)).call(this, props));

    _this.state = {
      deals: [{ img: '../static/images/banner/el-nido.jpg', title: 'Cebu', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 10000 }, { img: '../static/images/banner/el-nido.jpg', title: 'Cebu', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 10000 }, { img: '../static/images/banner/el-nido.jpg', title: 'Cebu', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: 10000 }]
    };

    return _this;
  }

  _createClass(CitiesContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Deals__["a" /* default */], { deals: this.state, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      });
    }
  }]);

  return CitiesContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CitiesContainer);

/***/ }),

/***/ "./components/home/container/DestinationContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Destination__ = __webpack_require__("./components/home/presentation/Destination.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/DestinationContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DestinationContainer = function (_React$Component) {
  _inherits(DestinationContainer, _React$Component);

  function DestinationContainer(props) {
    _classCallCheck(this, DestinationContainer);

    var _this = _possibleConstructorReturn(this, (DestinationContainer.__proto__ || Object.getPrototypeOf(DestinationContainer)).call(this, props));

    _this.state = {
      loader: true,
      images: [{ img: '../static/images/banner/el-nido.jpg', slogan: 'Cebu', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }, { img: '../static/images/banner/coastal.jpg', slogan: 'Davao', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }, { img: '../static/images/banner/coastal.jpg', slogan: 'Coron', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }, { img: '../static/images/banner/coastal.jpg', slogan: 'Bohol', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }, { img: '../static/images/banner/coastal.jpg', slogan: 'Palawan', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " }, { img: '../static/images/banner/coastal.jpg', slogan: 'Dumaguete', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " }],
      width: 0
    };
    return _this;
  }

  _createClass(DestinationContainer, [{
    key: 'updateDimensions',
    value: function updateDimensions() {
      if (window.innerWidth < 500) {
        this.setState({ width: 450, height: 102 });
      } else {
        var update_width = window.innerWidth - 100;
        var update_height = Math.round(update_width / 4.4);
        this.setState({ width: update_width, height: update_height });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));

      setTimeout(function () {
        _this2.setState({ loader: false });
      }, 800);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Destination__["a" /* default */], { data: this.state, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
    }
  }]);

  return DestinationContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DestinationContainer);

/***/ }),

/***/ "./components/home/container/GuideContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Guide__ = __webpack_require__("./components/home/presentation/Guide.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/GuideContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GuideContainer = function (_React$Component) {
  _inherits(GuideContainer, _React$Component);

  function GuideContainer(props) {
    _classCallCheck(this, GuideContainer);

    return _possibleConstructorReturn(this, (GuideContainer.__proto__ || Object.getPrototypeOf(GuideContainer)).call(this, props));
  }

  _createClass(GuideContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Guide__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    }
  }]);

  return GuideContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (GuideContainer);

/***/ }),

/***/ "./components/home/container/VideoContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Video__ = __webpack_require__("./components/home/presentation/Video.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/container/VideoContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



//https://www.youtube.com/watch?v=ysz5S6PUM-U

var VideoContainer = function (_React$Component) {
  _inherits(VideoContainer, _React$Component);

  function VideoContainer(props) {
    _classCallCheck(this, VideoContainer);

    var _this = _possibleConstructorReturn(this, (VideoContainer.__proto__ || Object.getPrototypeOf(VideoContainer)).call(this, props));

    _this.state = {
      url: 'place the video here'
    };
    return _this;
  }

  _createClass(VideoContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Video__["a" /* default */], _extends({}, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    }
  }]);

  return VideoContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VideoContainer);

/***/ }),

/***/ "./components/home/presentation/BottomBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/home/presentation/BottomBar.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
	var label = "It's Time For a New Adventure!Dont Wait Any Longer.Contact us!";
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
			{ style: { backgroundColor: "#323232" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 0, sm: 2, md: 3, lg: 3, xl: 3, __source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
				{ xs: 24, sm: 20, md: 18, lg: 18, xl: 18, __source: {
						fileName: _jsxFileName,
						lineNumber: 9
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
					{ style: { height: "200px" }, type: "flex", justify: "center", align: "middle", __source: {
							fileName: _jsxFileName,
							lineNumber: 10
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
						{ xs: { span: 18, order: 1 }, sm: 18, md: 18, lg: 18, xl: 16, __source: {
								fileName: _jsxFileName,
								lineNumber: 11
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							"p",
							{ style: { fontSize: "30px", color: "#ffffff" }, __source: {
									fileName: _jsxFileName,
									lineNumber: 11
								}
							},
							label
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
						{ xs: { span: 6, order: 1 }, sm: 6, md: 6, lg: 6, xl: 8, __source: {
								fileName: _jsxFileName,
								lineNumber: 12
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
							{ type: "flex", justify: "end", align: "top", __source: {
									fileName: _jsxFileName,
									lineNumber: 13
								}
							},
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
								{ style: { width: "360px", height: "60px" }, type: "primary", __source: {
										fileName: _jsxFileName,
										lineNumber: 14
									}
								},
								"BOOK NOW!"
							)
						)
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 0, sm: 2, md: 3, lg: 3, xl: 3, __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			})
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], { style: { borderBottom: "1px solid grey" }, __source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		})
	);
});

/***/ }),

/***/ "./components/home/presentation/Carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/presentation/Carousel.js';




var antIcon = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'loading', style: { fontSize: 32 }, spin: true, __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  }
});

var Spinner = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  fontSize: '30px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  maxHeight: '100%',
  zIndex: 1
};

var renderCarouselItem = function renderCarouselItem(item, index) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { key: index, className: 'carousel-item', style: { backgroundImage: 'url(' + item.img + ')' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
      { type: 'flex', justify: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
        { span: 16, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          { className: 'slogan', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          item.slogan
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var loader = _ref.loader,
      carousel = _ref.carousel;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_antd__["Spin"],
    { spinning: loader, indicator: antIcon, style: Spinner, __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
        { span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Carousel"],
          { vertical: true, autoplay: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          carousel.map(function (item, index) {
            return renderCarouselItem(item, index);
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '2885957337',
        css: '.ant-carousel .slick-list{height:350px !important;}.ant-carousel .slick-slide{padding:0px !important;height:350px !important;border:0px !important;}.ant-carousel .carousel-item{background-size:cover;background-position:bottom;background-repeat:no-repeat;}.ant-carousel .carousel-item .slogan{margin-top:150px;font-size:50px;font-weight:700;color:#ffffff;text-align:left;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9wcmVzZW50YXRpb24vQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN5QixBQUdtQyxBQUdELEFBS0QsQUFLTCxpQkFDRixLQUxXLENBTEYsQ0FIMUIsUUFja0IsZUFWTSxDQVdSLENBTmMsYUFPWixPQVhsQixRQUtBLENBT21CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvcHJlc2VudGF0aW9uL0Nhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdywgQ29sLCBTcGluLCBJY29uLCBDYXJvdXNlbCBhcyBBbnRkQ2Fyb3VzZWx9IGZyb20gJ2FudGQnXG5cbmNvbnN0IGFudEljb24gPSA8SWNvbiB0eXBlPVwibG9hZGluZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiAzMiB9fSBzcGluIC8+O1xuXG5jb25zdCBTcGlubmVyID0ge1xuICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICBoZWlnaHQ6JzEwMCUnLFxuICB3aWR0aDonMTAwJScsXG4gIGZvbnRTaXplOiczMHB4JyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gIG1heEhlaWdodDogJzEwMCUnLFxuICB6SW5kZXg6MVxufVxuXG5jb25zdCByZW5kZXJDYXJvdXNlbEl0ZW0gPSAoaXRlbSwgaW5kZXgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTondXJsKCcgKyBpdGVtLmltZyArICcpJ319PlxuICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPENvbCBzcGFuPXsxNn0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xvZ2FuXCI+e2l0ZW0uc2xvZ2FufTwvcD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCAoe2xvYWRlciwgY2Fyb3VzZWx9KSA9PiAoXG4gIDxTcGluIHNwaW5uaW5nPXtsb2FkZXJ9IGluZGljYXRvcj17YW50SWNvbn0gc3R5bGU9e1NwaW5uZXJ9PlxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgPEFudGRDYXJvdXNlbCB2ZXJ0aWNhbCBhdXRvcGxheT5cbiAgICAgICAgICB7Y2Fyb3VzZWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlckNhcm91c2VsSXRlbShpdGVtLCBpbmRleClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9BbnRkQ2Fyb3VzZWw+XG4gICAgICA8L0NvbD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWxpc3Qge1xuICAgICAgICAgIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuYW50LWNhcm91c2VsIC5zbGljay1zbGlkZSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgIC5hbnQtY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gLnNsb2dhbntcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L1Jvdz5cbiAgPC9TcGluPlxuKVxuIl19 */\n/*@ sourceURL=components/home/presentation/Carousel.js */'
      })
    )
  );
});

/***/ }),

/***/ "./components/home/presentation/Cities.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/presentation/Cities.js';



var tempImage = 'http://via.placeholder.com/140x100';

var cityCardStyle = {
	paddingLeft: "10px",
	paddingTop: "150px",
	fontWeight: "bold",
	fontSize: "20px",
	color: "#ffffff"
};
var padds = {
	padding: "10px"
};
var containerCardStyle = {
	textAlign: "right",
	paddingTop: "20px"
};

var titleStyle = {
	styler: { fontWeight: "bold" }
};
var backTopStyle = {
	fontSize: 40,
	color: "#0275b6"
};

var cityCard = function cityCard(data) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 29
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
			{ gutter: 20, type: 'flex', justify: 'center', __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			},
			data.images.map(function (item, index) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
					{ xs: 16, sm: 12, md: 8, lg: 6, xl: 4, key: index, __source: {
							fileName: _jsxFileName,
							lineNumber: 32
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
						{
							bodyStyle: { height: "220px", backgroundImage: 'url(' + item.img + ')' },
							bordered: true, __source: {
								fileName: _jsxFileName,
								lineNumber: 33
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'p',
							{ style: cityCardStyle, __source: {
									fileName: _jsxFileName,
									lineNumber: 36
								}
							},
							item.slogan
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], { style: padds, __source: {
							fileName: _jsxFileName,
							lineNumber: 38
						}
					})
				);
			})
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (function (images) {
	var CityCards = cityCard(images);
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 48
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_antd__["BackTop"],
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'ant-back-top-inner', __source: {
						fileName: _jsxFileName,
						lineNumber: 50
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'up-circle', style: backTopStyle, __source: {
						fileName: _jsxFileName,
						lineNumber: 50
					}
				})
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
				{ xs: 22, sm: 20, md: 18, lg: 18, xl: 18, __source: {
						fileName: _jsxFileName,
						lineNumber: 54
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 55
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
						{ span: 12, __source: {
								fileName: _jsxFileName,
								lineNumber: 56
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'h1',
							{ style: titleStyle.styler, __source: {
									fileName: _jsxFileName,
									lineNumber: 56
								}
							},
							'Find homes locally'
						)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
						{ span: 12, __source: {
								fileName: _jsxFileName,
								lineNumber: 57
							}
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'p',
							{ style: containerCardStyle, __source: {
									fileName: _jsxFileName,
									lineNumber: 57
								}
							},
							'View All  ',
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'right', __source: {
									fileName: _jsxFileName,
									lineNumber: 57
								}
							})
						)
					)
				),
				CityCards
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			})
		)
	);
});

/***/ }),

/***/ "./components/home/presentation/Deals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/home/presentation/Deals.js";



//CSS here!
var containerCardStyle = {
  textAlign: "right",
  paddingTop: "20px"
};
var titleStyle = {
  styler: { fontWeight: "bold" }
};
var spacerStyle = {
  styler: { paddingTop: "20px", paddingBottom: "20px" }
};
var spacer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], { style: spacerStyle.styler, __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
});
var CardContentStyle = {
  container: { marginBottom: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" },
  cardCover: { height: "300px" },
  title: { fontWeight: "bold", fontSize: "20px", color: "#191d21" },
  price: { fontWeight: "bold", fontSize: "20px", textAlign: "end", color: "#0275b6" },
  Icon: { fontSize: "20px" },
  bottomSpace: { marginTop: "20px" },
  clock: { color: "#768080", textAlign: "end" }
};

var Contents = function Contents(props) {
  var deals = props.deals.deals;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { gutter: 16, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      deals.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { key: index, xs: 24, sm: 24, md: 8, lg: 8, xl: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardContent, { deal: item, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          })
        );
      })
    )
  );
};

var CardContent = function CardContent(deal) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { style: CardContentStyle.container, __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
      {
        hoverable: true,
        bordered: false,
        cover: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "example", src: "../static/images/banner/el-nido.jpg", style: CardContentStyle.cardCover, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { span: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 22, sm: 22, md: 22, lg: 22, xl: 22, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          " ",
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 16, sm: 16, md: 16, lg: 16, xl: 16, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              { style: CardContentStyle.title, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              "Hongkong DisneyLand"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 8, sm: 8, md: 8, lg: 8, xl: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              { style: CardContentStyle.price, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              "Php ",
              "20,000"
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { span: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { span: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 22, sm: 22, md: 22, lg: 22, xl: 22, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { span: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 22, sm: 22, md: 22, lg: 22, xl: 22, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { style: CardContentStyle.bottomSpace, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
              { xs: 14, sm: 14, md: 14, lg: 14, xl: 14, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              "Inclusions:  ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "car", style: CardContentStyle.Icon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              }),
              "   ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "car", style: CardContentStyle.Icon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              }),
              "  ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "car", style: CardContentStyle.Icon, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              }),
              " "
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
              { xs: 10, sm: 10, md: 10, lg: 10, xl: 10, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { style: CardContentStyle.clock, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "clock-circle-o", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                }),
                " 7 Days"
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { span: 1, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { xs: 22, sm: 20, md: 18, lg: 18, xl: 18, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        },
        spacer,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h1",
              { style: titleStyle.styler, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              "Deals & Discounts"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 12, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              { style: containerCardStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              "View All  ",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "right", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          { type: "flex", justify: "center", __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Contents, _extends({}, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            }))
          )
        ),
        spacer
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })
    )
  );
});

/***/ }),

/***/ "./components/home/presentation/Destination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_slick__ = __webpack_require__("react-slick");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_slick__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/home/presentation/Destination.js";



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var antIcon = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: "loading", align: "middle", style: { fontSize: 35, alignContent: "middle" }, spin: true, __source: {
		fileName: _jsxFileName,
		lineNumber: 5
	}
});
var Spinner = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	fontSize: '30px',
	textAlign: 'center',
	backgroundColor: '#ffffff',
	maxHeight: '100%',
	zIndex: 1

	//CSS here!
};var containerCardStyle = {
	textAlign: "right",
	paddingTop: "20px"
};
var contentCardStyle = {
	spaceCardGap: { padding: "10px" },
	bodyStyle: function bodyStyle(image, key) {
		return { borderRadius: "4px", height: "440px", backgroundImage: 'url(' + image.img + ')', backgroundSize: "100% 100%" };
	},
	labelStyle: { marginTop: "250px", paddingLeft: "20px" },
	fontColor: { color: "#ffffff" }
};
var spacerStyle = {
	styler: { paddingTop: "20px", paddingBottom: "20px" }
};

var carouselArrowsStyle = {
	styler: function styler(combinedStyle) {
		return { combinedStyle: combinedStyle, borderRadius: "2px", display: 'block', background: '#DCDCDC', height: "440px", paddingTop: "210px" };
	}
};

var titleStyle = {
	styler: { fontWeight: "bold" }

	// Stateless Components
};var cardContent = function cardContent(image, key) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{ style: contentCardStyle.spaceCardGap, key: key, __source: {
				fileName: _jsxFileName,
				lineNumber: 44
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
			{
				bodyStyle: contentCardStyle.bodyStyle(image, key),
				bordered: false, __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
				{ style: contentCardStyle.labelStyle, __source: {
						fileName: _jsxFileName,
						lineNumber: 48
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"p",
					{ style: contentCardStyle.fontColor, __source: {
							fileName: _jsxFileName,
							lineNumber: 49
						}
					},
					image.description
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"h1",
					{ style: contentCardStyle.fontColor, __source: {
							fileName: _jsxFileName,
							lineNumber: 50
						}
					},
					image.slogan
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
					{ style: { borderRadius: "20px", width: "90px", border: "2px solid white" }, ghost: true, __source: {
							fileName: _jsxFileName,
							lineNumber: 51
						}
					},
					"MORE"
				)
			)
		)
	);
};

var spacer = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], { style: spacerStyle.styler, __source: {
		fileName: _jsxFileName,
		lineNumber: 60
	}
});

var settings = {
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SampleNextArrow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 68
		}
	}),
	prevArrow: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SamplePrevArrow, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	})
};

function SampleNextArrow(props) {
	var className = props.className,
	    style = props.style,
	    onClick = props.onClick;

	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
		className: className,
		style: carouselArrowsStyle.styler.apply(carouselArrowsStyle, _toConsumableArray(style)),
		onClick: onClick, __source: {
			fileName: _jsxFileName,
			lineNumber: 75
		}
	});
}

function SamplePrevArrow(props) {
	var className = props.className,
	    style = props.style,
	    onClick = props.onClick;

	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
		className: className,
		style: carouselArrowsStyle.styler.apply(carouselArrowsStyle, _toConsumableArray(style)),
		onClick: onClick, __source: {
			fileName: _jsxFileName,
			lineNumber: 86
		}
	});
}

var content = function content(images) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			className: "jsx-3194325005",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 96
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css", className: "jsx-3194325005",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 97
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css", className: "jsx-3194325005",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 98
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_3_react_slick___default.a,
			_extends({ autoplay: true }, settings, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}),
			images.map(function (item, index) {
				return cardContent(item, index);
			})
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "3194325005",
			css: ".ant-btn.active,.ant-btn:active,.ant-btn:focus,.ant-btn:hover{color:#4169E1;}.ant-spin-container{width:99.5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9wcmVzZW50YXRpb24vRGVzdGluYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUcyQixBQUd1QixBQUdMLFlBQ2QsRUFIQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvcHJlc2VudGF0aW9uL0Rlc3RpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdywgQ29sLENhcmQsSWNvbixCdXR0b24sU3Bpbn0gZnJvbSAnYW50ZCdcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cblxuY29uc3QgYW50SWNvbiA9IDxJY29uIHR5cGU9XCJsb2FkaW5nXCIgYWxpZ249XCJtaWRkbGVcIiBzdHlsZT17eyBmb250U2l6ZTogMzUsYWxpZ25Db250ZW50OlwibWlkZGxlXCIgfX0gc3BpbiAvPlxuY29uc3QgU3Bpbm5lciA9IHtcbiAgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgaGVpZ2h0OicxMDAlJyxcbiAgd2lkdGg6JzEwMCUnLFxuICBmb250U2l6ZTonMzBweCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgekluZGV4OjFcbn1cblxuLy9DU1MgaGVyZSFcbmNvbnN0IGNvbnRhaW5lckNhcmRTdHlsZSA9IHtcblx0dGV4dEFsaWduOiBcInJpZ2h0XCIsXG5cdHBhZGRpbmdUb3A6XCIyMHB4XCJcbn1cbmNvbnN0IGNvbnRlbnRDYXJkU3R5bGUgPSB7XG5cdHNwYWNlQ2FyZEdhcCA6IHtwYWRkaW5nOlwiMTBweFwifSxcblx0Ym9keVN0eWxlIDogKGltYWdlLGtleSkgPT4ge3JldHVybiB7Ym9yZGVyUmFkaXVzOlwiNHB4XCIsaGVpZ2h0OlwiNDQwcHhcIixiYWNrZ3JvdW5kSW1hZ2U6J3VybCgnICsgaW1hZ2UuaW1nKyAnKScsYmFja2dyb3VuZFNpemU6IFwiMTAwJSAxMDAlXCJ9IH0sXG5cdGxhYmVsU3R5bGUgOiB7bWFyZ2luVG9wOlwiMjUwcHhcIixwYWRkaW5nTGVmdDpcIjIwcHhcIn0sXG5cdGZvbnRDb2xvcjogIHtjb2xvcjpcIiNmZmZmZmZcIn0gXG59XG5jb25zdCBzcGFjZXJTdHlsZSA9IHtcblx0c3R5bGVyIDoge3BhZGRpbmdUb3A6XCIyMHB4XCIscGFkZGluZ0JvdHRvbTpcIjIwcHhcIn1cbn1cblxuY29uc3QgY2Fyb3VzZWxBcnJvd3NTdHlsZSA9IHtcblx0c3R5bGVyIDogKGNvbWJpbmVkU3R5bGUpID0+IHtyZXR1cm4ge2NvbWJpbmVkU3R5bGUsYm9yZGVyUmFkaXVzOlwiMnB4XCIsIGRpc3BsYXk6ICdibG9jaycsIGJhY2tncm91bmQ6ICcjRENEQ0RDJyxoZWlnaHQ6XCI0NDBweFwiLHBhZGRpbmdUb3A6XCIyMTBweFwifX1cbn1cblxuY29uc3QgdGl0bGVTdHlsZSA9IHtcblx0c3R5bGVyIDp7Zm9udFdlaWdodDogXCJib2xkXCJ9XG59XG5cblxuLy8gU3RhdGVsZXNzIENvbXBvbmVudHNcbmNvbnN0IGNhcmRDb250ZW50ID0gKGltYWdlLGtleSkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGRpdiBzdHlsZT17Y29udGVudENhcmRTdHlsZS5zcGFjZUNhcmRHYXB9IGtleT17a2V5fT5cblx0XHRcdDxDYXJkIFxuXHRcdFx0XHRib2R5U3R5bGU9e2NvbnRlbnRDYXJkU3R5bGUuYm9keVN0eWxlKGltYWdlLGtleSl9XG5cdFx0XHRcdGJvcmRlcmVkPXtmYWxzZX0+XG5cdFx0XHRcdDxSb3cgc3R5bGU9e2NvbnRlbnRDYXJkU3R5bGUubGFiZWxTdHlsZX0+XHRcdFx0XG5cdFx0XHRcdFx0PHAgc3R5bGU9e2NvbnRlbnRDYXJkU3R5bGUuZm9udENvbG9yfT57aW1hZ2UuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdDxoMSBzdHlsZT17Y29udGVudENhcmRTdHlsZS5mb250Q29sb3J9PntpbWFnZS5zbG9nYW59PC9oMT5cblx0XHRcdFx0XHQ8QnV0dG9uIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjIwcHhcIix3aWR0aDpcIjkwcHhcIixib3JkZXI6IFwiMnB4IHNvbGlkIHdoaXRlXCJ9fSBnaG9zdD5NT1JFPC9CdXR0b24+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcblx0XHRcdDwvQ2FyZD5cblxuXHRcdDwvZGl2Pilcbn1cblxuY29uc3Qgc3BhY2VyID0oXG5cdFx0PFJvdyBzdHlsZT17c3BhY2VyU3R5bGUuc3R5bGVyfT48L1Jvdz5cbilcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBuZXh0QXJyb3c6IDxTYW1wbGVOZXh0QXJyb3cgLz4sXG4gICAgICBwcmV2QXJyb3c6IDxTYW1wbGVQcmV2QXJyb3cgLz5cbn07XG5cbmZ1bmN0aW9uIFNhbXBsZU5leHRBcnJvdyhwcm9wcykge1xuICBjb25zdCB7Y2xhc3NOYW1lLCBzdHlsZSwgb25DbGlja30gPSBwcm9wc1xuICByZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdFx0c3R5bGU9e2Nhcm91c2VsQXJyb3dzU3R5bGUuc3R5bGVyKC4uLnN0eWxlKX1cblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTYW1wbGVQcmV2QXJyb3cocHJvcHMpIHtcbiAgY29uc3Qge2NsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2t9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiBcdFx0PGRpdlxuIFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHQgICAgICAgIHN0eWxlPXtjYXJvdXNlbEFycm93c1N0eWxlLnN0eWxlciguLi5zdHlsZSl9XG5cdCAgICAgICAgb25DbGljaz17b25DbGlja30+XG5cdFx0PC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGNvbnRlbnQgPSAoaW1hZ2VzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPiAgIFxuXHRcdFx0PFNsaWRlciAgYXV0b3BsYXkgey4uLnNldHRpbmdzfT5cblx0XHRcdFx0XHQgIHtpbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0ICAgICAgICAgICAgcmV0dXJuIGNhcmRDb250ZW50KGl0ZW0saW5kZXgpXG5cdFx0XHQgICAgICAgICAgfSl9XG5cdCAgICAgICA8L1NsaWRlcj5cblx0ICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG5cdCAgICAgXHQuYW50LWJ0bi5hY3RpdmUsIC5hbnQtYnRuOmFjdGl2ZSwgLmFudC1idG46Zm9jdXMsIC5hbnQtYnRuOmhvdmVyIHtcblx0XHRcdCAgICAgY29sb3I6ICM0MTY5RTE7XG5cdFx0XHR9XG5cdFx0XHQuYW50LXNwaW4tY29udGFpbmVyIHtcblx0XHRcdCAgIHdpZHRoOjk5LjUlO1xuXHRcdFx0fVxuXHQgICAgICAgYH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cblxuLy9QcmVzZW50YXRpb24gQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCAoZGF0YSkgPT4ge1xuXG5cdC8vZm9yIGRlc3RpbmF0aW9uIGNhcm91c2VsIHNsaWRlIGltYWdlIG51bWJlciBhZGp1c3RtZW50XG5cdGNvbnNvbGUubG9nKGRhdGEuZGF0YS53aWR0aClcblx0aWYoZGF0YS5kYXRhLndpZHRoIDwgNTc2KXtcblx0XHRzZXR0aW5ncy5zbGlkZXNUb1Nob3cgPSAxXG5cdFx0Y29uc29sZS5sb2coMSlcblx0fWVsc2UgaWYgKGRhdGEuZGF0YS53aWR0aCA+PSA1NzYgJiYgZGF0YS5kYXRhLndpZHRoIDwgOTkyICl7XG5cdFx0c2V0dGluZ3Muc2xpZGVzVG9TaG93ID0gMlxuXHR9ZWxzZSBpZihkYXRhLmRhdGEud2lkdGggPj0gOTkyICYmIGRhdGEuZGF0YS53aWR0aCA8IDEyMDAgKXtcblx0XHRzZXR0aW5ncy5zbGlkZXNUb1Nob3cgPSAzXG5cdH1lbHNlXG5cdHtcblx0XHRzZXR0aW5ncy5zbGlkZXNUb1Nob3cgPSA0XG5cdH1cblx0Ly9cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8U3BpbiBzcGlubmluZz17ZGF0YS5kYXRhLmxvYWRlcn0gaW5kaWNhdG9yPXthbnRJY29ufSBzdHlsZT17U3Bpbm5lcn0+XG5cdFx0XHQ8Um93PlxuXHRcdFx0XHQ8Q29sIHhzPXsxfSBzbT17Mn0gbWQ9ezN9IGxnPXszfSB4bD17M30+PC9Db2w+XG5cdFx0XHQgICAgPENvbCB4cz17MjJ9IHNtPXsyMH0gbWQ9ezE4fSBsZz17MTh9IHhsPXsxOH0+XG5cdFx0XHQgICAgXHR7c3BhY2VyfVxuXHRcdFx0ICAgIFx0PFJvdz5cblx0XHRcdCAgICBcdFx0PENvbCBzcGFuPXsxMn0+PGgxIHN0eWxlPXt0aXRsZVN0eWxlLnN0eWxlcn0+UG9wdWxhciBEZXN0aW5hdGlvbnM8L2gxPjwvQ29sPlxuXHRcdFx0ICAgIFx0XHQ8Q29sIHNwYW49ezEyfT48cCBzdHlsZT17Y29udGFpbmVyQ2FyZFN0eWxlfT5WaWV3IEFsbCAgPEljb24gdHlwZT1cInJpZ2h0XCIgLz48L3A+PC9Db2w+XG5cblx0XHRcdCAgICBcdDwvUm93PlxuXHRcdFx0ICAgIFx0PFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cblx0XHRcdCAgICBcdFx0ICA8Q29sIHhzPXsyM30gc209ezIzfSBtZD17MjN9IGxnPXsyM30geGw9ezIzfT57Y29udGVudChkYXRhLmRhdGEuaW1hZ2VzKX08L0NvbD5cblx0XHRcdCAgICBcdDwvUm93PlxuXHRcdFx0ICAgIFx0e3NwYWNlcn1cblx0XHRcdCAgICA8L0NvbD5cblx0XHRcdCAgICA8Q29sIHhzPXsxfSBzbT17Mn0gbWQ9ezN9IGxnPXszfSB4bD17M30+PC9Db2w+XG5cdFx0XHQ8L1Jvdz5cdFxuXHRcdFx0XG5cdFx0XHQ8L1NwaW4+XHRcblx0XHQ8L2Rpdj5cblxuXG5cdClcbn1cblxuXG5cbiJdfQ== */\n/*@ sourceURL=components/home/presentation/Destination.js */"
		})
	);
};

//Presentation Component
/* harmony default export */ __webpack_exports__["a"] = (function (data) {

	//for destination carousel slide image number adjustment
	console.log(data.data.width);
	if (data.data.width < 576) {
		settings.slidesToShow = 1;
		console.log(1);
	} else if (data.data.width >= 576 && data.data.width < 992) {
		settings.slidesToShow = 2;
	} else if (data.data.width >= 992 && data.data.width < 1200) {
		settings.slidesToShow = 3;
	} else {
		settings.slidesToShow = 4;
	}
	//

	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 136
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_antd__["Spin"],
			{ spinning: data.data.loader, indicator: antIcon, style: Spinner, __source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 138
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
						fileName: _jsxFileName,
						lineNumber: 139
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
					{ xs: 22, sm: 20, md: 18, lg: 18, xl: 18, __source: {
							fileName: _jsxFileName,
							lineNumber: 140
						}
					},
					spacer,
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 142
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
							{ span: 12, __source: {
									fileName: _jsxFileName,
									lineNumber: 143
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								"h1",
								{ style: titleStyle.styler, __source: {
										fileName: _jsxFileName,
										lineNumber: 143
									}
								},
								"Popular Destinations"
							)
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
							{ span: 12, __source: {
									fileName: _jsxFileName,
									lineNumber: 144
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								"p",
								{ style: containerCardStyle, __source: {
										fileName: _jsxFileName,
										lineNumber: 144
									}
								},
								"View All  ",
								__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: "right", __source: {
										fileName: _jsxFileName,
										lineNumber: 144
									}
								})
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
						{ type: "flex", justify: "center", __source: {
								fileName: _jsxFileName,
								lineNumber: 147
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
							{ xs: 23, sm: 23, md: 23, lg: 23, xl: 23, __source: {
									fileName: _jsxFileName,
									lineNumber: 148
								}
							},
							content(data.data.images)
						)
					),
					spacer
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
						fileName: _jsxFileName,
						lineNumber: 152
					}
				})
			)
		)
	);
});

/***/ }),

/***/ "./components/home/presentation/Guide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/presentation/Guide.js';



var tempImage = 'http://via.placeholder.com/140x100';

var Meta = __WEBPACK_IMPORTED_MODULE_2_antd__["Card"].Meta;

var Panel = __WEBPACK_IMPORTED_MODULE_2_antd__["Collapse"].Panel;

var text = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	'p',
	{
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	},
	'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
);

var styler = {
	fontTitle: { fontSize: "43px" },
	fontMessage: { fontSize: "21px" }
};

var guideTitle = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	'div',
	{
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	},
	__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'h1',
		{ style: styler.fontTitle, align: 'middle', __source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		},
		'Other Useful Information'
	)
);
var guideMessage = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	'div',
	{
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	},
	__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'p',
		{ style: styler.fontMessage, align: 'middle', __source: {
				fileName: _jsxFileName,
				lineNumber: 27
			}
		},
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
	),
	__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'p',
		{ style: styler.fontMessage, align: 'middle', __source: {
				fileName: _jsxFileName,
				lineNumber: 28
			}
		},
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
	)
);
var header = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	'div',
	{
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	},
	__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 33
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
			{ span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			},
			'Lorem Ipsum'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
			{ span: 12, align: 'end', style: { paddingRight: "10px" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'down', __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			})
		)
	)
);
var spacer = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], { style: { paddingTop: "20px", paddingBottom: "20px" }, __source: {
		fileName: _jsxFileName,
		lineNumber: 41
	}
});
var guideTabs = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
	'div',
	{
		className: 'jsx-2898281135',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 44
		}
	},
	__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
			{ xs: 22, sm: 20, md: 18, lg: 18, xl: 18, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
				{ gutter: 16, __source: {
						fileName: _jsxFileName,
						lineNumber: 49
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
					{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8, __source: {
							fileName: _jsxFileName,
							lineNumber: 50
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
						{
							bordered: false,
							cover: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { alt: 'example', src: tempImage, className: 'jsx-2898281135',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 53
								}
							}), __source: {
								fileName: _jsxFileName,
								lineNumber: 51
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Meta, {
							title: 'Private Guide Tour',
							description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 54
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
					{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8, __source: {
							fileName: _jsxFileName,
							lineNumber: 60
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
						{
							bordered: false,
							cover: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { alt: 'example', src: tempImage, className: 'jsx-2898281135',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 63
								}
							}), __source: {
								fileName: _jsxFileName,
								lineNumber: 61
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Meta, {
							title: 'Special Tour Activities',
							description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 64
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
					{ xs: 24, sm: 24, md: 8, lg: 8, xl: 8, __source: {
							fileName: _jsxFileName,
							lineNumber: 72
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_antd__["Collapse"],
						{ bordered: false, defaultActiveKey: ['1'], __source: {
								fileName: _jsxFileName,
								lineNumber: 73
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							Panel,
							{ showArrow: false, header: header, key: '1', __source: {
									fileName: _jsxFileName,
									lineNumber: 74
								}
							},
							text
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							Panel,
							{ showArrow: false, header: header, key: '2', __source: {
									fileName: _jsxFileName,
									lineNumber: 77
								}
							},
							text
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							Panel,
							{ showArrow: false, header: header, key: '3', __source: {
									fileName: _jsxFileName,
									lineNumber: 80
								}
							},
							text
						)
					)
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, __source: {
				fileName: _jsxFileName,
				lineNumber: 87
			}
		})
	),
	__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
		styleId: '2898281135',
		css: '.ant-collapse-borderless .ant-collapse-item-active .ant-collapse-header{background-color:#DCDCDC;}.ant-card-body{padding:1px;padding-top:20px;padding-right:10px;padding-bottom:20px;zoom:1;}.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header{padding-left:12px;}.ant-collapse-borderless{border-top:1px solid #D3D3D3;}.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header p{margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9wcmVzZW50YXRpb24vR3VpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZ5QixBQUlRLEFBRWMsQUFPSyxBQUdVLEFBR1osWUFaQyxJQWFyQixFQU5FLE9BVkUsSUFJbUIsQUFTdkIsbUJBUndCLG9CQUNkLE9BQ04iLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL3ByZXNlbnRhdGlvbi9HdWlkZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3Bycy9Eb2N1bWVudHMvZ3B0dC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3csIENvbCxDYXJkLENvbGxhcHNlLEljb259IGZyb20gJ2FudGQnXG5jb25zdCB0ZW1wSW1hZ2UgPSAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTQweDEwMCdcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuY29uc3QgUGFuZWwgPSBDb2xsYXBzZS5QYW5lbDtcblxuY29uc3QgdGV4dCA9IChcbiAgPHA+XG4gICAgQSBkb2cgaXMgYSB0eXBlIG9mIGRvbWVzdGljYXRlZCBhbmltYWwuXG4gICAgS25vd24gZm9yIGl0cyBsb3lhbHR5IGFuZCBmYWl0aGZ1bG5lc3MsXG4gICAgaXQgY2FuIGJlIGZvdW5kIGFzIGEgd2VsY29tZSBndWVzdCBpbiBtYW55IGhvdXNlaG9sZHMgYWNyb3NzIHRoZSB3b3JsZC5cbiAgPC9wPlxuKVxuXG5jb25zdCBzdHlsZXIgPSB7XG5cdGZvbnRUaXRsZSA6IHtmb250U2l6ZTpcIjQzcHhcIn0sXG5cdGZvbnRNZXNzYWdlIDoge2ZvbnRTaXplOlwiMjFweFwifVxufVxuXG5jb25zdCBndWlkZVRpdGxlID0gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDEgc3R5bGU9e3N0eWxlci5mb250VGl0bGV9IGFsaWduPVwibWlkZGxlXCI+T3RoZXIgVXNlZnVsIEluZm9ybWF0aW9uPC9oMT5cblx0XHQ8L2Rpdj5cbilcbmNvbnN0IGd1aWRlTWVzc2FnZSA9IChcblx0XHQ8ZGl2PlxuXHRcdFx0PHAgc3R5bGU9e3N0eWxlci5mb250TWVzc2FnZX0gYWxpZ249XCJtaWRkbGVcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YTwvcD5cblx0XHRcdDxwIHN0eWxlPXtzdHlsZXIuZm9udE1lc3NhZ2V9IGFsaWduPVwibWlkZGxlXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlPC9wPlxuXHRcdDwvZGl2PlxuKVxuY29uc3QgaGVhZGVyID0gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Um93PlxuXHRcdFx0XHQ8Q29sIHNwYW49ezEyfT5Mb3JlbSBJcHN1bTwvQ29sPlxuXHRcdFx0XHQ8Q29sIHNwYW49ezEyfSBhbGlnbj1cImVuZFwiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMTBweFwifX0+PEljb24gdHlwZT1cImRvd25cIiAvPjwvQ29sPlxuXHRcdFx0PC9Sb3c+XG5cdFx0XHRcblx0XHQ8L2Rpdj5cbilcbmNvbnN0IHNwYWNlciA9KFxuXHRcdDxSb3cgc3R5bGU9e3twYWRkaW5nVG9wOlwiMjBweFwiLHBhZGRpbmdCb3R0b206XCIyMHB4XCJ9fT48L1Jvdz5cbilcbmNvbnN0IGd1aWRlVGFicyA9KFxuXHRcdDxkaXY+XG5cdFx0XHQ8Um93PlxuXHRcdFx0XHQ8Q29sIHhzPXsxfSBzbT17Mn0gbWQ9ezN9IGxnPXszfSB4bD17M30+PC9Db2w+XG5cdFx0XHQgICAgPENvbCB4cz17MjJ9IHNtPXsyMH0gbWQ9ezE4fSBsZz17MTh9IHhsPXsxOH0+XG5cdFx0XHQgXHQgICBcblx0XHRcdFx0XHQ8Um93IGd1dHRlcj17MTZ9PlxuXHRcdFx0IFx0XHRcdDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXs4fSBsZz17OH0geGw9ezh9PlxuXHRcdFx0IFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdFx0ICAgIGJvcmRlcmVkPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0ICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9e3RlbXBJbWFnZX0gLz59PlxuXHRcdFx0XHRcdFx0XHQgICAgPE1ldGEgXG5cdFx0XHRcdFx0XHRcdCAgICAgIHRpdGxlPVwiUHJpdmF0ZSBHdWlkZSBUb3VyXCJcblx0XHRcdFx0XHRcdFx0ICAgICAgZGVzY3JpcHRpb249XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW1cIlxuXHRcdFx0XHRcdFx0XHQgICAgLz5cblx0XHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0IFx0XHRcdDwvQ29sPlxuXHRcdFx0IFx0XHRcdDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXs4fSBsZz17OH0geGw9ezh9PlxuXHRcdFx0IFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdFx0ICAgIGJvcmRlcmVkPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0ICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9e3RlbXBJbWFnZX0gLz59PlxuXHRcdFx0XHRcdFx0XHQgICAgPE1ldGFcblx0XHRcdFx0XHRcdFx0ICAgICAgdGl0bGU9XCJTcGVjaWFsIFRvdXIgQWN0aXZpdGllc1wiXG5cdFx0XHRcdFx0XHRcdCAgICAgIGRlc2NyaXB0aW9uPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtXCJcblx0XHRcdFx0XHRcdFx0ICAgIC8+XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD5cblxuXHRcdFx0IFx0XHRcdDwvQ29sPlxuXHRcdFx0IFx0XHRcdFxuXHRcdFx0IFx0XHRcdDxDb2wgeHM9ezI0fSBzbT17MjR9IG1kPXs4fSBsZz17OH0geGw9ezh9PlxuXHRcdFx0IFx0XHRcdCA8Q29sbGFwc2UgYm9yZGVyZWQ9e2ZhbHNlfSBkZWZhdWx0QWN0aXZlS2V5PXtbJzEnXX0+XG5cdFx0XHRcdFx0XHQgICAgPFBhbmVsIHNob3dBcnJvdz17ZmFsc2V9IGhlYWRlcj17aGVhZGVyfSBrZXk9XCIxXCI+XG5cdFx0XHRcdFx0XHQgICAgICB7dGV4dH1cblx0XHRcdFx0XHRcdCAgICA8L1BhbmVsPlxuXHRcdFx0XHRcdFx0ICAgIDxQYW5lbCBzaG93QXJyb3c9e2ZhbHNlfSBoZWFkZXI9e2hlYWRlcn0ga2V5PVwiMlwiPlxuXHRcdFx0XHRcdFx0ICAgICAge3RleHR9XG5cdFx0XHRcdFx0XHQgICAgPC9QYW5lbD5cblx0XHRcdFx0XHRcdCAgICA8UGFuZWwgc2hvd0Fycm93PXtmYWxzZX0gaGVhZGVyPXtoZWFkZXJ9a2V5PVwiM1wiPlxuXHRcdFx0XHRcdFx0ICAgICAge3RleHR9XG5cdFx0XHRcdFx0XHQgICAgPC9QYW5lbD5cblx0XHRcdFx0XHRcdCAgPC9Db2xsYXBzZT5cblx0XHRcdCBcdFx0XHQ8L0NvbD5cblx0XHRcdCAgICBcdDwvUm93PlxuXHRcdFx0ICAgIDwvQ29sPlxuXHRcdFx0ICAgIDxDb2wgeHM9ezF9IHNtPXsyfSBtZD17M30gbGc9ezN9IHhsPXszfT48L0NvbD5cblx0XHRcdDwvUm93PlxuXG5cdFx0ICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0ICAgICAgLmFudC1jb2xsYXBzZS1ib3JkZXJsZXNzIC5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmUgLmFudC1jb2xsYXBzZS1oZWFkZXJ7XG5cdFx0ICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiNEQ0RDREMgXG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIC5hbnQtY2FyZC1ib2R5e1xuXHRcdCAgICAgIFx0cGFkZGluZzogMXB4O1xuXHRcdCAgICAgIFx0cGFkZGluZy10b3A6MjBweDtcblx0XHQgICAgICBcdHBhZGRpbmctcmlnaHQ6MTBweDtcblx0XHQgICAgICBcdHBhZGRpbmctYm90dG9tOjIwcHg7XG4gICAgXHRcdFx0em9vbTogMTtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgLmFudC1jb2xsYXBzZT4uYW50LWNvbGxhcHNlLWl0ZW0uYW50LWNvbGxhcHNlLW5vLWFycm93Pi5hbnQtY29sbGFwc2UtaGVhZGVyIHtcblx0XHRcdFx0ICAgIHBhZGRpbmctbGVmdDogMTJweDtcblx0XHRcdCAgIH1cblx0XHRcdCAgIC5hbnQtY29sbGFwc2UtYm9yZGVybGVzcyB7XG5cdFx0XHRcdCAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRDNEM0QzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hbnQtY29sbGFwc2U+LmFudC1jb2xsYXBzZS1pdGVtLmFudC1jb2xsYXBzZS1uby1hcnJvdz4uYW50LWNvbGxhcHNlLWhlYWRlciBwIHtcbiAgIFx0XHRcdFx0IG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuKVxuXHRcdCAgICAgXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e3NwYWNlcn1cblx0XHRcdHtndWlkZVRpdGxlfVxuXHRcdFx0e2d1aWRlTWVzc2FnZX1cblx0XHRcdHtndWlkZVRhYnN9XHRcblx0XHRcdHtzcGFjZXJ9XHRcblx0XHQ8L2Rpdj5cblx0KVxufSJdfQ== */\n/*@ sourceURL=components/home/presentation/Guide.js */'
	})
);

/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 117
			}
		},
		spacer,
		guideTitle,
		guideMessage,
		guideTabs,
		spacer
	);
});

/***/ }),

/***/ "./components/home/presentation/Video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_player__ = __webpack_require__("react-player");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_player__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/presentation/Video.js';




var containerStyle = {
	style: { height: "700px", marginTop: "120px", marginBottom: "100px" }
};
/* harmony default export */ __webpack_exports__["a"] = (function (data) {
	var url = data.url;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ style: containerStyle.style, __source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_player___default.a, {
			url: url,
			className: 'react-player',
			controls: true,
			width: '100%',
			height: '100%',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		})
	);
});

/***/ }),

/***/ "./components/layout/BottomNavigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__ = __webpack_require__("./static/css/bottom-navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__presentation_bottomcontents_Content1__ = __webpack_require__("./components/layout/presentation/bottomcontents/Content1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentation_bottomcontents_Content2__ = __webpack_require__("./components/layout/presentation/bottomcontents/Content2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__presentation_bottomcontents_Content3__ = __webpack_require__("./components/layout/presentation/bottomcontents/Content3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__presentation_bottomcontents_Content4__ = __webpack_require__("./components/layout/presentation/bottomcontents/Content4.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/BottomNavigation.js';








var message = "Copyright 2018 by Global Pinoy Travel & Tours. All Rights Reserved.";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottom, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', justify: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { className: '', xs: 20, md: 16, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          { gutter: 80, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.padding, type: 'flex', justify: 'center', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 24, sm: 12, md: 12, lg: 6, xl: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__presentation_bottomcontents_Content1__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 24, sm: 12, md: 12, lg: 6, xl: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__presentation_bottomcontents_Content2__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 24, sm: 12, md: 12, lg: 6, xl: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__presentation_bottomcontents_Content3__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { xs: 24, sm: 12, md: 12, lg: 6, xl: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__presentation_bottomcontents_Content4__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.copyright, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          message
        )
      )
    )
  );
});

/***/ }),

/***/ "./components/layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TopNavigation__ = __webpack_require__("./components/layout/TopNavigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BottomNavigation__ = __webpack_require__("./components/layout/BottomNavigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_css_layout_css__ = __webpack_require__("./static/css/layout.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_css_layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_css_layout_css__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/Layout.js';







/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-1033573864',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'http://cdn.bootcss.com/antd/3.3.0/antd.min.css', className: 'jsx-1033573864',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i', className: 'jsx-1033573864',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TopNavigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1033573864' + ' ' + (__WEBPACK_IMPORTED_MODULE_5__static_css_layout_css___default.a.layout || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BottomNavigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '1033573864',
      css: 'html,body{font-family:\'Roboto\',sans-serif;}.border{border:1px solid #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnlCLEFBRzRDLEFBSXBDLHlCQUFDLE9BSEEiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVG9wTmF2aWdhdGlvbiBmcm9tICcuL1RvcE5hdmlnYXRpb24nXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICcuL0JvdHRvbU5hdmlnYXRpb24nXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0YXRpYy9jc3MvbGF5b3V0LmNzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cDovL2Nkbi5ib290Y3NzLmNvbS9hbnRkLzMuMy4wL2FudGQubWluLmNzc1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjEwMCwxMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDcwMCw3MDBpLDkwMCw5MDBpXCIvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRvcE5hdmlnYXRpb24vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5sYXlvdXR9PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLCBib2R5e1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAuYm9yZGVye1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=components/layout/Layout.js */'
    })
  );
});

/***/ }),

/***/ "./components/layout/TopNavigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css__ = __webpack_require__("./static/css/top-navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/TopNavigation.js';



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Item = __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"].Item;
var SubMenu = __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"].SubMenu;

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _React$createElement;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
    { className: __WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css___default.a.affix, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1756552582' + ' ' + (__WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css___default.a.menuContainer || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: '', type: 'flex', justify: 'center', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { xs: 24, sm: 7, md: 5, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-1756552582',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/images/globalpinoytravel.png', className: 'jsx-1756552582' + ' ' + (__WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css___default.a.logo || ''),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { className: '', span: 9, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"],
            { mode: 'horizontal', selectedKeys: ['/'], className: 'ant-menu', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-1756552582',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    }
                  },
                  'HOME'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/packages', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/packages', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-1756552582',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    }
                  },
                  'PACKAGES'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/hotels', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/hotels', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-1756552582',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    }
                  },
                  'HOTELS'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/flights', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/flights', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-1756552582',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    }
                  },
                  'FLIGHTS'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/transfers', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/transfers', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-1756552582',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
                    }
                  },
                  'TRANSFERS'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { span: 3, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"],
            { mode: 'horizontal', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              (_React$createElement = { className: '', key: '/login' }, _defineProperty(_React$createElement, 'className', __WEBPACK_IMPORTED_MODULE_4__static_css_top_navigation_css___default.a.authTab), _defineProperty(_React$createElement, '__source', {
                fileName: _jsxFileName,
                lineNumber: 25
              }), _React$createElement),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-1756552582',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Icon"], { type: 'user', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    }
                  }),
                  'Login / Register'
                )
              )
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '1756552582',
      css: '.ant-menu{border:0px;line-height:70px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L1RvcE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ1QixBQUdvQixXQUNNLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC9Ub3BOYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBBZmZpeCwgUm93LCBDb2wsIE1lbnUsIEljb24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdGF0aWMvY3NzL3RvcC1uYXZpZ2F0aW9uLmNzcydcbmNvbnN0IEl0ZW0gPSBNZW51Lkl0ZW1cbmNvbnN0IFN1Yk1lbnUgPSBNZW51LlN1Yk1lbnVcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8QWZmaXggY2xhc3NOYW1lPXtjc3MuYWZmaXh9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudUNvbnRhaW5lcn0+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPXsyNH0gc209ezd9IG1kPXs1fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgY2xhc3NOYW1lPXtjc3MubG9nb30gc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ2xvYmFscGlub3l0cmF2ZWwucG5nXCIvPjwvYT48L0xpbms+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIlwiIHNwYW49ezl9PlxuICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgc2VsZWN0ZWRLZXlzPXtbJy8nXX0gY2xhc3NOYW1lPVwiYW50LW1lbnVcIj5cbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9cIj48TGluayBocmVmPVwiL1wiPjxhPkhPTUU8L2E+PC9MaW5rPjwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9wYWNrYWdlc1wiPjxMaW5rIGhyZWY9XCIvcGFja2FnZXNcIj48YT5QQUNLQUdFUzwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2hvdGVsc1wiPjxMaW5rIGhyZWY9XCIvaG90ZWxzXCI+PGE+SE9URUxTPC9hPjwvTGluaz48L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvZmxpZ2h0c1wiPjxMaW5rIGhyZWY9XCIvZmxpZ2h0c1wiPjxhPkZMSUdIVFM8L2E+PC9MaW5rPjwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi90cmFuc2ZlcnNcIj48TGluayBocmVmPVwiL3RyYW5zZmVyc1wiPjxhPlRSQU5TRkVSUzwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17M30+XG4gICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgIDxJdGVtIGNsYXNzTmFtZT1cIlwiIGtleT1cIi9sb2dpblwiIGNsYXNzTmFtZT17Y3NzLmF1dGhUYWJ9PjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT48SWNvbiB0eXBlPVwidXNlclwiIC8+TG9naW4gLyBSZWdpc3RlcjwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLmFudC1tZW51e1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0FmZml4PlxuKVxuIl19 */\n/*@ sourceURL=components/layout/TopNavigation.js */'
    })
  );
});

/***/ }),

/***/ "./components/layout/presentation/bottomcontents/Content1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__ = __webpack_require__("./static/css/bottom-navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/presentation/bottomcontents/Content1.js';



var globalPinoyLogo = '../../../../static/images/globalpinoytravel-White.png';
var secureLogo = '../../../../static/images/Sec_Ass-01.png';
var IATALogo = '../../../../static/images/IATA-01.png';
var hrsLogo = '../../../../static/images/24HR-01.png';
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.content1, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.globalpinoylogo, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 24, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'globalpinoytravel-White', src: globalPinoyLogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', justify: 'left', className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.padding50, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { gutter: 34, type: 'flex', justify: 'space-between', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Secure Logo', src: secureLogo, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottomlogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'IATA Logo', src: IATALogo, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottomlogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '24HR Logo', src: hrsLogo, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottomlogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.padding20, span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'Customer Service'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          '+63-9XX-XXX-XXXX'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          'Email:support@mygprs.com'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          'Address: Floor,St.,Barangay,Quezon City'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          'Metro Manila Philippines 1000'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          'Offic Hours: Monday-Friday 8 30am -6 30pm'
        )
      )
    )
  );
});

/***/ }),

/***/ "./components/layout/presentation/bottomcontents/Content2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__ = __webpack_require__("./static/css/bottom-navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/presentation/bottomcontents/Content2.js';




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', justify: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.margintop50, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          'Latest News'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdirtywhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          'Water & Rock Discovering the beauty of Oslob,Cebu'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdarkgrey, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          '05.04.2018'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdirtywhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          ' '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Divider"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdirtywhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          'Water & Rock Discovering the beauty of Oslob,Cebu'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdarkgrey, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          '05.04.2018'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Divider"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdirtywhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'Water & Rock Discovering the beauty of Oslob,Cebu'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontdarkgrey, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          ' 05.04.2018'
        )
      )
    )
  );
});

/***/ }),

/***/ "./components/layout/presentation/bottomcontents/Content3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__ = __webpack_require__("./static/css/bottom-navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/presentation/bottomcontents/Content3.js';



var tempImage = 'http://via.placeholder.com/140x100';

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.margintop50, __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { type: 'flex', justify: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontwhite, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    'Gallery'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { gutter: 12, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.margintop16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { span: 12, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Image1', src: tempImage, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { span: 12, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Image2', src: tempImage, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                })
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { gutter: 12, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.margintop16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { span: 12, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Image3', src: tempImage, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { span: 12, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Image4', src: tempImage, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                })
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { gutter: 12, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.margintop16, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { span: 12, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Image5', src: tempImage, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { span: 12, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Image6', src: tempImage, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                })
            )
        )
    );
});

/***/ }),

/***/ "./components/layout/presentation/bottomcontents/Content4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__ = __webpack_require__("./static/css/bottom-navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/presentation/bottomcontents/Content4.js';




var android = '../../../static/images/Android.png';
var apple = '../../../static/images/Apple.png';

var label1 = "Download GPPT App";
var label2 = "Connect with Global";
var label3 = "Pinoy Travel & Tours";

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.downloadlabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        label1
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { gutter: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Android googleplay', src: android, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.size100, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Apple app store', src: apple, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.size100, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.margintop50, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          label2
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.fontwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          label3
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          { gutter: 6, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'facebook', className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.facebook, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'twitter', className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.twitter, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'linkedin', className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.linkedin, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'google-plus', className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.googleplus, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            })
          )
        )
      )
    )
  );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("./store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_Layout__ = __webpack_require__("./components/layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_container_CarouselContainer__ = __webpack_require__("./components/home/container/CarouselContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_container_CitiesContainer__ = __webpack_require__("./components/home/container/CitiesContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_container_BottomBarContainer__ = __webpack_require__("./components/home/container/BottomBarContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_container_GuideContainer__ = __webpack_require__("./components/home/container/GuideContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_container_DestinationContainer__ = __webpack_require__("./components/home/container/DestinationContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_container_DealsContainer__ = __webpack_require__("./components/home/container/DealsContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_container_VideoContainer__ = __webpack_require__("./components/home/container/VideoContainer.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_layout_Layout__["a" /* default */],
        { path: this.props.url.pathname, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_home_container_CarouselContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_home_container_DestinationContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_home_container_DealsContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_home_container_CitiesContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_home_container_VideoContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_home_container_GuideContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_home_container_BottomBarContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state, ownProps) {
  return {
    locale: state.locale
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */], mapStateToProps, null)(Index));

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localeReducer__ = __webpack_require__("./reducers/localeReducer.js");



var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  locale: __WEBPACK_IMPORTED_MODULE_1__localeReducer__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./reducers/localeReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__("./actions/actionTypes.js");


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { foo: 'bar' };
  var payload = arguments[1];

  switch (payload.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["b" /* LOAD_LOCALE_SUCCESS */]:
      return payload.locale;
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["a" /* CHANGE_LOCALE_SUCCESS */]:
      return payload.locale;
    default:
      return state;
  }
});

/***/ }),

/***/ "./static/css/bottom-navigation.css":
/***/ (function(module, exports) {

module.exports = {
	"fontwhite": "_2yXuFxh_hpT-oYZTX0n1iC",
	"fontdarkgrey": "_1-UlKJ2iRRbTVvlvAMOwgB",
	"fontdirtywhite": "_1JToTvuP8_2TAgywyGIaF_",
	"bottomlogo": "_2VfYF4dkxW_VlpXEotPuLd",
	"bottom": "_3PhndLb-diu__crejYad3T",
	"padding": "YNQ-u0Fm9hlVjxmOqAweJ",
	"copyright": "_2tsH3BLn6ESnLEe7nKW3Jp",
	"content1": "_2HcIJ_fk4HRw4_VyD0h9-N",
	"padding20": "_3WIrEqsLKqjI9QBsbBx78K",
	"globalpinoylogo": "_1cdDArN6K2c7sYA3yGOubg",
	"padding50": "_2CgfpdcVKYd8tohoU9prI0",
	"margintop50": "_1WD0yUGm8sGBFbW-V5vrNw",
	"width": "_2zJIsOEIKgExHiCZRtE9vz",
	"margintop16": "_15COiSskFCXrcldyDiWpk5",
	"facebook": "_13R7jKIPe78an0A9vAIpXZ",
	"twitter": "lPNNNeSh1ih2B00uADVz6",
	"linkedin": "_2kErrHLpteByid_SGW4KEy",
	"googleplus": "_3bxc2YziUNgxBK_TzNOLIF",
	"size100": "_1Rn1qsO9e0qK7kKzANMU3",
	"downloadlabel": "_1ofOfQ-j0Ut-srtUmYDIUo",
	"logos": "_1J-iRpvMJqRRUKwiK3n8dD"
};

/***/ }),

/***/ "./static/css/layout.css":
/***/ (function(module, exports) {

module.exports = {
	"layout": "H5nxLdYIDtRQblnPQIpVr"
};

/***/ }),

/***/ "./static/css/top-navigation.css":
/***/ (function(module, exports) {

module.exports = {
	"logo": "_1lo9IBi1AaTSXsWMvg86sv",
	"menuContainer": "_3IUeB_lgcTygjKU3IC6etA",
	"affix": "_3T_e1i0RfPI8sqUD5DXfwh",
	"authTab": "_1QgE0GQk-puUW0Y8p_-uxf"
};

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);





/* harmony default export */ __webpack_exports__["a"] = (function (initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a)));
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-slick":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map