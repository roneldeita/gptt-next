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
	"line": "_35tF26Ji_HhwhZuzEoiFua",
	"width": "_2zJIsOEIKgExHiCZRtE9vz",
	"margintop16": "_15COiSskFCXrcldyDiWpk5",
	"facebook": "_13R7jKIPe78an0A9vAIpXZ",
	"twitter": "lPNNNeSh1ih2B00uADVz6",
	"linkedin": "_2kErrHLpteByid_SGW4KEy",
	"googleplus": "_3bxc2YziUNgxBK_TzNOLIF",
	"size100": "_1Rn1qsO9e0qK7kKzANMU3",
	"downloadlabel": "_1ofOfQ-j0Ut-srtUmYDIUo"
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