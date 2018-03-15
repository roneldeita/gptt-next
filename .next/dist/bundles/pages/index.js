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
      carousel: [{ img: '../static/images/banner/el-nido.jpg', slogan: 'If not now, when?' }, { img: '../static/images/banner/coastal.jpg', slogan: 'Just Go!' }, { img: '../static/images/banner/Asia-Travel-Group.jpg', slogan: 'We all deserve a little wanderlust.' }]
    };
    return _this;
  }

  _createClass(CarouselContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__presentation_Carousel__["a" /* default */], { carousel: this.state.carousel, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
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




var renderCarouselItem = function renderCarouselItem(item, index) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { key: index, className: 'carousel-item', style: { backgroundImage: 'url(' + item.img + ')' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
      { type: 'flex', justify: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
        { span: 16, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          { className: 'slogan', __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          item.slogan
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var carousel = _ref.carousel;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
      { span: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Carousel"],
        { vertical: true, autoplay: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        carousel.map(function (item, index) {
          return renderCarouselItem(item, index);
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3233639692',
      css: '.ant-carousel .slick-slide{padding:0px !important;height:350px !important;border:0px !important;}.ant-carousel .carousel-item{background-size:cover;background-position:bottom;background-repeat:no-repeat;}.ant-carousel .carousel-item .slogan{margin-top:150px;font-size:50px;font-weight:700;color:#ffffff;text-align:left;line-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9wcmVzZW50YXRpb24vQ2Fyb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ1QixBQUdnQyxBQUtELEFBS0wsaUJBQ0YsS0FMVyxDQUxGLFNBV1IsZUFWTSxDQVdSLENBTmMsYUFPWixPQVhsQixRQUtBLENBT21CLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvcHJlc2VudGF0aW9uL0Nhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdywgQ29sLCBDYXJvdXNlbCBhcyBBbnRkQ2Fyb3VzZWx9IGZyb20gJ2FudGQnXG5cbmNvbnN0IHJlbmRlckNhcm91c2VsSXRlbSA9IChpdGVtLCBpbmRleCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOid1cmwoJyArIGl0ZW0uaW1nICsgJyknfX0+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIHNwYW49ezE2fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbG9nYW5cIj57aXRlbS5zbG9nYW59PC9wPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2Fyb3VzZWx9KSA9PiAoXG4gIDxSb3c+XG4gICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICA8QW50ZENhcm91c2VsIHZlcnRpY2FsIGF1dG9wbGF5PlxuICAgICAgICB7Y2Fyb3VzZWwubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZW5kZXJDYXJvdXNlbEl0ZW0oaXRlbSwgaW5kZXgpXG4gICAgICAgIH0pfVxuICAgICAgPC9BbnRkQ2Fyb3VzZWw+XG4gICAgPC9Db2w+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLXNsaWRlIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5hbnQtY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgIC5hbnQtY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gLnNsb2dhbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9Sb3c+XG4pXG4iXX0= */\n/*@ sourceURL=components/home/presentation/Carousel.js */'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bottomnavigation_content1__ = __webpack_require__("./components/layout/bottomnavigation/content1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bottomnavigation_content2__ = __webpack_require__("./components/layout/bottomnavigation/content2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottomnavigation_content3__ = __webpack_require__("./components/layout/bottomnavigation/content3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bottomnavigation_content4__ = __webpack_require__("./components/layout/bottomnavigation/content4.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/BottomNavigation.js';








var styles = {
  margintop: "50px",
  minheight: "500px",
  paddingBottom: "50px"
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', justify: 'center', style: { backgroundColor: '#191d21' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { className: '', xs: 20, md: 16, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          { gutter: 80, style: { paddingBottom: "50px" }, type: 'flex', justify: 'center', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { sm: 24, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__bottomnavigation_content1__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { sm: 24, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__bottomnavigation_content2__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { sm: 24, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__bottomnavigation_content3__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { sm: 24, md: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__bottomnavigation_content4__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, style: { color: 'white', textAlign: 'center', backgroundColor: 'white', paddingTop: '5px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { style: { color: "#3f3f3f" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          'Copyright 2018 by Global Pinoy Travel & Tours. All Rights Reserved.'
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
      className: 'jsx-2120913412',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'http://cdn.bootcss.com/antd/3.3.0/antd.min.css', className: 'jsx-2120913412',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i', className: 'jsx-2120913412',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TopNavigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-2120913412' + ' ' + (__WEBPACK_IMPORTED_MODULE_5__static_css_layout_css___default.a.layout || ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BottomNavigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '2120913412',
      css: 'html,body{font-family:\'Roboto\',sans-serif;}.border{border:1px solid #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCLEFBRzBDLEFBSXBDLHlCQUFDLE9BSEEiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVG9wTmF2aWdhdGlvbiBmcm9tICcuL1RvcE5hdmlnYXRpb24nXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICcuL0JvdHRvbU5hdmlnYXRpb24nXG5pbXBvcnQgY3NzIGZyb20gJy4uLy4uL3N0YXRpYy9jc3MvbGF5b3V0LmNzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHA6Ly9jZG4uYm9vdGNzcy5jb20vYW50ZC8zLjMuMC9hbnRkLm1pbi5jc3NcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGksOTAwLDkwMGlcIi8+XG4gICAgPC9IZWFkPlxuICAgIDxUb3BOYXZpZ2F0aW9uLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxheW91dH0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPEJvdHRvbU5hdmlnYXRpb24gLz5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCwgYm9keXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgLmJvcmRlcntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMFxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/layout/Layout.js */'
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

/***/ "./components/layout/bottomnavigation/content1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/layout/bottomnavigation/content1.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: "flex", justify: "center", style: { marginTop: "50px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { type: "flex", justify: "space-between", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { style: { paddingBottom: "30px" }, span: 24, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "globalpinoytravel-White", src: '../../../static/images/globalpinoytravel-White.png', style: { width: "100%", maxWidth: "200px" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Sec_Ass-01", src: '../../../static/images/Sec_Ass-01.png', style: { width: "50%", maxWidth: '50px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "IATA-01", src: '../../../static/images/IATA-01.png', style: { width: "50%", maxWidth: '50px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "24HR-01", src: '../../../static/images/24HR-01.png', style: { width: "50%", maxWidth: '50px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { style: { paddingTop: "20px" }, span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: { paddingBottom: '10px', color: "#ffffff" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          "Customer Service"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h4",
          { style: { color: "#ffffff" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "+63-9XX-XXX-XXXX"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "Email:support@mygprs.com"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          "Address: Floor,St.,Barangay,Quezon City"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          "Metro Manila Philippines 1000"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          "Offic Hours: Monday-Friday 8 30am -6 30pm"
        )
      )
    )
  );
});

/***/ }),

/***/ "./components/layout/bottomnavigation/content2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/layout/bottomnavigation/content2.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: "flex", justify: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, style: { marginTop: '50px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: txtwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          "Latest News"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h4",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          "Water & Rock Discovering the beauty of Oslob,Cebu"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtdate, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          "05.04.2018"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          " "
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { marginTop: "20px", marginBottom: "15px" }, className: "border", __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          " "
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h4",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          "Water & Rock Discovering the beauty of Oslob,Cebu"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtdate, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "05.04.2018"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { marginTop: "20px", marginBottom: "15px" }, className: "border", __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          " "
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h4",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          "Water & Rock Discovering the beauty of Oslob,Cebu"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtdate, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          "05.04.2018"
        )
      )
    )
  );
});

var txtwhite = {
  color: "#ffffff"
};

var txtdate = {
  color: "#5c5e63"
};
var txtsemiwhite = {
  color: "#818387"
};

/***/ }),

/***/ "./components/layout/bottomnavigation/content3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/layout/bottomnavigation/content3.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: "flex", justify: "left", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: txtwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          "Gallery"
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { gutter: 12, style: { marginTop: '16px' }, __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Image1", src: 'http://via.placeholder.com/140x100', style: { width: "100%" }, __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Image2", src: 'http://via.placeholder.com/140x100', style: { width: "100%" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { gutter: 12, style: { marginTop: '16px' }, __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Image3", src: 'http://via.placeholder.com/140x100', style: { width: "100%" }, __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Image4", src: 'http://via.placeholder.com/140x100', style: { width: "100%" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { gutter: 12, style: { marginTop: '16px' }, __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Image5", src: 'http://via.placeholder.com/140x100', style: { width: "100%" }, __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Image6", src: 'http://via.placeholder.com/140x100', style: { width: "100%" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        })
      )
    )
  );
});

var txtwhite = {
  color: "#ffffff",
  marginTop: '50px'
};

/***/ }),

/***/ "./components/layout/bottomnavigation/content4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "/Users/gprs/Documents/gptt-next/components/layout/bottomnavigation/content4.js";



var txtwhite = {
  color: "#ffffff"
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: "flex", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        { style: { color: "#ffffff", marginTop: '50px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        "Download GPPT App"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { gutter: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Android", src: '../../../static/images/Android.png', style: { width: "100%" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Apple", src: '../../../static/images/Apple.png', style: { width: "100%" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { style: { marginTop: '50px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: txtwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          "Connect with Global"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: txtwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          "Pinoy Travel & Tours"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          { gutter: 6, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "facebook", style: { color: '#3B5998', fontSize: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "twitter", style: { color: '#1DA1F2', fontSize: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "linkedin", style: { color: '#0077B5', fontSize: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "google-plus", style: { color: '#DB4437', fontSize: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_Layout__ = __webpack_require__("./components/layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_container_CarouselContainer__ = __webpack_require__("./components/home/container/CarouselContainer.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/pages/index.js';




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_layout_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_home_container_CarouselContainer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
});

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map