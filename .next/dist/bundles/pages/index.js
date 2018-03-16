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

/***/ "./components/home/container/CarouselContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__presentation_Carousel__ = __webpack_require__("./components/home/presentation/Carousel.js");
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\home\\container\\CarouselContainer.js';

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

/***/ "./components/home/presentation/Carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\home\\presentation\\Carousel.js';




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
        css: '.ant-carousel .slick-list{height:350px !important;}.ant-carousel .slick-slide{padding:0px !important;height:350px !important;border:0px !important;}.ant-carousel .carousel-item{background-size:cover;background-position:bottom;background-repeat:no-repeat;}.ant-carousel .carousel-item .slogan{margin-top:150px;font-size:50px;font-weight:700;color:#ffffff;text-align:left;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhvbWVcXHByZXNlbnRhdGlvblxcQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN5QixBQUdtQyxBQUdELEFBS0QsQUFLTCxpQkFDRixLQUxXLENBTEYsQ0FIMUIsUUFja0IsZUFWTSxDQVdSLENBTmMsYUFPWixPQVhsQixRQUtBLENBT21CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxob21lXFxwcmVzZW50YXRpb25cXENhcm91c2VsLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VpL0Rlc2t0b3AvZ3B0dC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3csIENvbCwgU3BpbiwgSWNvbiwgQ2Fyb3VzZWwgYXMgQW50ZENhcm91c2VsfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgYW50SWNvbiA9IDxJY29uIHR5cGU9XCJsb2FkaW5nXCIgc3R5bGU9e3sgZm9udFNpemU6IDMyIH19IHNwaW4gLz47XHJcblxyXG5jb25zdCBTcGlubmVyID0ge1xyXG4gIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgaGVpZ2h0OicxMDAlJyxcclxuICB3aWR0aDonMTAwJScsXHJcbiAgZm9udFNpemU6JzMwcHgnLFxyXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgbWF4SGVpZ2h0OiAnMTAwJScsXHJcbiAgekluZGV4OjFcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQ2Fyb3VzZWxJdGVtID0gKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOid1cmwoJyArIGl0ZW0uaW1nICsgJyknfX0+XHJcbiAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCBzcGFuPXsxNn0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbG9nYW5cIj57aXRlbS5zbG9nYW59PC9wPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtsb2FkZXIsIGNhcm91c2VsfSkgPT4gKFxyXG4gIDxTcGluIHNwaW5uaW5nPXtsb2FkZXJ9IGluZGljYXRvcj17YW50SWNvbn0gc3R5bGU9e1NwaW5uZXJ9PlxyXG4gICAgPFJvdz5cclxuICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgPEFudGRDYXJvdXNlbCB2ZXJ0aWNhbCBhdXRvcGxheT5cclxuICAgICAgICAgIHtjYXJvdXNlbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJDYXJvdXNlbEl0ZW0oaXRlbSwgaW5kZXgpXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L0FudGRDYXJvdXNlbD5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLmFudC1jYXJvdXNlbCAuc2xpY2stbGlzdCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFudC1jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b207XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWNhcm91c2VsIC5jYXJvdXNlbC1pdGVtIC5zbG9nYW57XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L1Jvdz5cclxuICA8L1NwaW4+XHJcbilcclxuIl19 */\n/*@ sourceURL=components\\home\\presentation\\Carousel.js */'
      })
    )
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\BottomNavigation.js';








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
            { sm: 24, md: 6, __source: {
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
            { sm: 24, md: 6, __source: {
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
            { sm: 24, md: 6, __source: {
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
            { sm: 24, md: 6, __source: {
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\Layout.js';







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
      css: 'html,body{font-family:\'Roboto\',sans-serif;}.border{border:1px solid #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCeUIsQUFHNEMsQUFJcEMseUJBQUMsT0FIQSIsImZpbGUiOiJjb21wb25lbnRzXFxsYXlvdXRcXExheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91aS9EZXNrdG9wL2dwdHQtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFRvcE5hdmlnYXRpb24gZnJvbSAnLi9Ub3BOYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICcuL0JvdHRvbU5hdmlnYXRpb24nXHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3RhdGljL2Nzcy9sYXlvdXQuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwOi8vY2RuLmJvb3Rjc3MuY29tL2FudGQvMy4zLjAvYW50ZC5taW4uY3NzXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaSw5MDAsOTAwaVwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VG9wTmF2aWdhdGlvbi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubGF5b3V0fT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm90dG9tTmF2aWdhdGlvbiAvPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsIGJvZHl7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3JkZXJ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwXHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=components\\layout\\Layout.js */'
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\TopNavigation.js';



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
      css: '.ant-menu{border:0px;line-height:70px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dFxcVG9wTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnVCLEFBR29CLFdBQ00saUJBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHNcXGxheW91dFxcVG9wTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91aS9EZXNrdG9wL2dwdHQtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWZmaXgsIFJvdywgQ29sLCBNZW51LCBJY29uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IGNzcyBmcm9tICcuLi8uLi9zdGF0aWMvY3NzL3RvcC1uYXZpZ2F0aW9uLmNzcydcclxuY29uc3QgSXRlbSA9IE1lbnUuSXRlbVxyXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPEFmZml4IGNsYXNzTmFtZT17Y3NzLmFmZml4fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiXCIgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IHNtPXs3fSBtZD17NX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgY2xhc3NOYW1lPXtjc3MubG9nb30gc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ2xvYmFscGlub3l0cmF2ZWwucG5nXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJcIiBzcGFuPXs5fT5cclxuICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgc2VsZWN0ZWRLZXlzPXtbJy8nXX0gY2xhc3NOYW1lPVwiYW50LW1lbnVcIj5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL1wiPjxMaW5rIGhyZWY9XCIvXCI+PGE+SE9NRTwvYT48L0xpbms+PC9JdGVtPlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvcGFja2FnZXNcIj48TGluayBocmVmPVwiL3BhY2thZ2VzXCI+PGE+UEFDS0FHRVM8L2E+PC9MaW5rPjwvSXRlbT5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2hvdGVsc1wiPjxMaW5rIGhyZWY9XCIvaG90ZWxzXCI+PGE+SE9URUxTPC9hPjwvTGluaz48L0l0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9mbGlnaHRzXCI+PExpbmsgaHJlZj1cIi9mbGlnaHRzXCI+PGE+RkxJR0hUUzwvYT48L0xpbms+PC9JdGVtPlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvdHJhbnNmZXJzXCI+PExpbmsgaHJlZj1cIi90cmFuc2ZlcnNcIj48YT5UUkFOU0ZFUlM8L2E+PC9MaW5rPjwvSXRlbT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezN9PlxyXG4gICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgPEl0ZW0gY2xhc3NOYW1lPVwiXCIga2V5PVwiL2xvZ2luXCIgY2xhc3NOYW1lPXtjc3MuYXV0aFRhYn0+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPjxJY29uIHR5cGU9XCJ1c2VyXCIgLz5Mb2dpbiAvIFJlZ2lzdGVyPC9hPjwvTGluaz48L0l0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAuYW50LW1lbnV7XHJcbiAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvQWZmaXg+XHJcbilcclxuIl19 */\n/*@ sourceURL=components\\layout\\TopNavigation.js */'
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\presentation\\bottomcontents\\Content1.js';



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
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', justify: 'center', className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.padding50, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { type: 'flex', justify: 'space-between', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.globalpinoylogo, span: 24, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'globalpinoytravel-White', src: globalPinoyLogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Secure Logo', src: secureLogo, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottomlogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'IATA Logo', src: IATALogo, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottomlogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '24HR Logo', src: hrsLogo, className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.bottomlogo, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.padding20, span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          'Customer Service'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          '+63-9XX-XXX-XXXX'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'Email:support@mygprs.com'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          'Address: Floor,St.,Barangay,Quezon City'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'Metro Manila Philippines 1000'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\presentation\\bottomcontents\\Content2.js';




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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.line, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          ' '
        )
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_2__static_css_bottom_navigation_css___default.a.line, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          ' '
        )
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\presentation\\bottomcontents\\Content3.js';



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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\layout\\presentation\\bottomcontents\\Content4.js';




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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\pages\\index.js';

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
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_home_container_CarouselContainer__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
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
	"fontwhite": "an19VluUXIr8w0Mw3xZbZ",
	"fontdarkgrey": "_2D43CHHCdwdLOJONy7DtRD",
	"fontdirtywhite": "_3mnWHwZm66EkQDnPumrG3y",
	"bottomlogo": "_1_a8RG918e2H_X0tcZn8kG",
	"bottom": "_1JRVjFB2wYFLo1tMCF3jke",
	"padding": "YWwAH3ilxGY12JJcEzGcH",
	"copyright": "_85peaQfBOMqX_ygdoxk4f",
	"content1": "cQpzpCzG0TkW9XkITjoTT",
	"padding20": "_2OXE_YRmt_SKdY8huM_C7l",
	"globalpinoylogo": "_8ZHHwCIETjptE7VNowFSx",
	"padding50": "m_yFB4ORtjY5qVtbz9OSA",
	"margintop50": "TuC3GJSoHj5FqzfbJNeyR",
	"line": "_3oGclf9Ne5KsmJPE4CsQxZ",
	"width": "_37B07TKzHFil7uwyRG6CCO",
	"margintop16": "_1bva07eX1naJYCCW2mRgkN",
	"facebook": "_2UFOuK1J89Erbesgi7OgzI",
	"twitter": "_1c-ZhSsOYAUErN8S6N1bId",
	"linkedin": "_2np96p-IAOCPNStk9bSooz",
	"googleplus": "_19y25vsWbruiGEcDE2ysi4",
	"size100": "w-pib5vg47gzYPMx_JN2o",
	"downloadlabel": "_3q-Xoe40o17zjoy7WzeC4H"
};

/***/ }),

/***/ "./static/css/layout.css":
/***/ (function(module, exports) {

module.exports = {
	"layout": "xDNtRBi4yhY38VscFqtEx"
};

/***/ }),

/***/ "./static/css/top-navigation.css":
/***/ (function(module, exports) {

module.exports = {
	"logo": "_2IBNTE97Wx1jHG9Wpw7dAx",
	"menuContainer": "_3mib_rM7i3TbBEVHAQKnF",
	"affix": "_3dm03J9HFxRi_Kmc7pMuKK",
	"authTab": "_2IM6-IovahmEIeJNt8OffY"
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