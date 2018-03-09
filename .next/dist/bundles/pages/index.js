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

/***/ "./components/BottomNavigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\ui\\Desktop\\gptt-next\\components\\BottomNavigation.js";

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    "this is the bottom navigation"
  );
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TopNavigation__ = __webpack_require__("./components/TopNavigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BottomNavigation__ = __webpack_require__("./components/BottomNavigation.js");
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\Layout.js';






/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-67560545',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'http://cdn.bootcss.com/antd/2.9.3/antd.css', className: 'jsx-67560545',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TopNavigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-67560545' + ' ' + 'layout',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__BottomNavigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '967689679',
      css: '.layout.jsx-67560545{min-height:80vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFJTSxnQkFBQyIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdWkvRGVza3RvcC9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUb3BOYXZpZ2F0aW9uIGZyb20gJy4vVG9wTmF2aWdhdGlvbidcclxuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSAnLi9Cb3R0b21OYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHA6Ly9jZG4uYm9vdGNzcy5jb20vYW50ZC8yLjkuMy9hbnRkLmNzcycvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPFRvcE5hdmlnYXRpb24vPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Qm90dG9tTmF2aWdhdGlvbiAvPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubGF5b3V0e1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmhcclxuICAgICAgfVxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDBcclxuICAgICAgfVxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuIl19 */\n/*@ sourceURL=components\\Layout.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '922763559',
      css: '.border{border:1px solid #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnVCLEFBSU0seUJBQUMiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3VpL0Rlc2t0b3AvZ3B0dC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgVG9wTmF2aWdhdGlvbiBmcm9tICcuL1RvcE5hdmlnYXRpb24nXHJcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uIGZyb20gJy4vQm90dG9tTmF2aWdhdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwOi8vY2RuLmJvb3Rjc3MuY29tL2FudGQvMi45LjMvYW50ZC5jc3MnLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxUb3BOYXZpZ2F0aW9uLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgPEJvdHRvbU5hdmlnYXRpb24gLz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmxheW91dHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoXHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgLmJvcmRlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwXHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcbiJdfQ== */\n/*@ sourceURL=components\\Layout.js */'
    })
  );
});

/***/ }),

/***/ "./components/TopNavigation.js":
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
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\TopNavigation.js';




var Item = __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"].Item;
var SubMenu = __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"].SubMenu;

var affix = {
  width: "100%"
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
    { style: affix, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3490534126' + ' ' + 'menu-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: '', type: 'flex', justify: 'center', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { xs: 24, sm: 7, md: 5, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-3490534126',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/images/globalpinoytravel.png', className: 'jsx-3490534126' + ' ' + 'logo',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { className: '', span: 9, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"],
            { mode: 'horizontal', selectedKeys: ['/'], className: 'ant-menu', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
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
                  lineNumber: 20
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/packages', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
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
                  lineNumber: 21
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/hotels', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
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
                  lineNumber: 22
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/flights', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
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
                  lineNumber: 23
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/transfers', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
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
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"],
            { mode: 'horizontal', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { className: '', key: '/login', style: { float: 'right' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Icon"], { type: 'user', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
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
      styleId: '4197329926',
      css: '.ant-menu{border:0px !important;line-height:70px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRvcE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0N1QixBQUcrQixzQkFDTSw0QkFDOUIiLCJmaWxlIjoiY29tcG9uZW50c1xcVG9wTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91aS9EZXNrdG9wL2dwdHQtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQWZmaXgsIFJvdywgQ29sLCBNZW51LCBJY29uIH0gZnJvbSAnYW50ZCdcclxuY29uc3QgSXRlbSA9IE1lbnUuSXRlbVxyXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51XHJcblxyXG5jb25zdCBhZmZpeCA9IHtcclxuICB3aWR0aDpcIjEwMCVcIlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPEFmZml4IHN0eWxlPXthZmZpeH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwiXCIgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IHNtPXs3fSBtZD17NX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dsb2JhbHBpbm95dHJhdmVsLnBuZ1wiLz48L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiXCIgc3Bhbj17OX0+XHJcbiAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17WycvJ119IGNsYXNzTmFtZT1cImFudC1tZW51XCI+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9cIj48TGluayBocmVmPVwiL1wiPjxhPkhPTUU8L2E+PC9MaW5rPjwvSXRlbT5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3BhY2thZ2VzXCI+PExpbmsgaHJlZj1cIi9wYWNrYWdlc1wiPjxhPlBBQ0tBR0VTPC9hPjwvTGluaz48L0l0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9ob3RlbHNcIj48TGluayBocmVmPVwiL2hvdGVsc1wiPjxhPkhPVEVMUzwvYT48L0xpbms+PC9JdGVtPlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvZmxpZ2h0c1wiPjxMaW5rIGhyZWY9XCIvZmxpZ2h0c1wiPjxhPkZMSUdIVFM8L2E+PC9MaW5rPjwvSXRlbT5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3RyYW5zZmVyc1wiPjxMaW5rIGhyZWY9XCIvdHJhbnNmZXJzXCI+PGE+VFJBTlNGRVJTPC9hPjwvTGluaz48L0l0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBzcGFuPXszfT5cclxuICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxJdGVtIGNsYXNzTmFtZT1cIlwiIGtleT1cIi9sb2dpblwiIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319PjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT48SWNvbiB0eXBlPVwidXNlclwiIC8+TG9naW4gLyBSZWdpc3RlcjwvYT48L0xpbms+PC9JdGVtPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgLmFudC1tZW51e1xyXG4gICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2dve1xyXG4gICAgICAgIHdpZHRoOiAxNTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxuICAgICAgfVxyXG4gICAgICAubWVudS1jb250YWluZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvQWZmaXg+XHJcbilcclxuIl19 */\n/*@ sourceURL=components\\TopNavigation.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '197049633',
      css: '.logo.jsx-3490534126{width:155px;margin-bottom:-15px;}.menu-container.jsx-3490534126{font-size:14px;background-color:#ffffff;line-height:70px;border-bottom:1px solid #e8e8e8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRvcE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNnQixBQUdxQixBQUlHLFlBSEssR0FJSyxpQkFIM0IsUUFJbUIsaUJBQ2UsZ0NBQ2xDIiwiZmlsZSI6ImNvbXBvbmVudHNcXFRvcE5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdWkvRGVza3RvcC9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEFmZml4LCBSb3csIENvbCwgTWVudSwgSWNvbiB9IGZyb20gJ2FudGQnXHJcbmNvbnN0IEl0ZW0gPSBNZW51Lkl0ZW1cclxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudVxyXG5cclxuY29uc3QgYWZmaXggPSB7XHJcbiAgd2lkdGg6XCIxMDAlXCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxBZmZpeCBzdHlsZT17YWZmaXh9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBzbT17N30gbWQ9ezV9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT48aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9nbG9iYWxwaW5veXRyYXZlbC5wbmdcIi8+PC9hPjwvTGluaz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIlwiIHNwYW49ezl9PlxyXG4gICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBzZWxlY3RlZEtleXM9e1snLyddfSBjbGFzc05hbWU9XCJhbnQtbWVudVwiPlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvXCI+PExpbmsgaHJlZj1cIi9cIj48YT5IT01FPC9hPjwvTGluaz48L0l0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9wYWNrYWdlc1wiPjxMaW5rIGhyZWY9XCIvcGFja2FnZXNcIj48YT5QQUNLQUdFUzwvYT48L0xpbms+PC9JdGVtPlxyXG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvaG90ZWxzXCI+PExpbmsgaHJlZj1cIi9ob3RlbHNcIj48YT5IT1RFTFM8L2E+PC9MaW5rPjwvSXRlbT5cclxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2ZsaWdodHNcIj48TGluayBocmVmPVwiL2ZsaWdodHNcIj48YT5GTElHSFRTPC9hPjwvTGluaz48L0l0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi90cmFuc2ZlcnNcIj48TGluayBocmVmPVwiL3RyYW5zZmVyc1wiPjxhPlRSQU5TRkVSUzwvYT48L0xpbms+PC9JdGVtPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgc3Bhbj17M30+XHJcbiAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICA8SXRlbSBjbGFzc05hbWU9XCJcIiBrZXk9XCIvbG9naW5cIiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fT48TGluayBocmVmPVwiL2xvZ2luXCI+PGE+PEljb24gdHlwZT1cInVzZXJcIiAvPkxvZ2luIC8gUmVnaXN0ZXI8L2E+PC9MaW5rPjwvSXRlbT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIC5hbnQtbWVudXtcclxuICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubG9nb3tcclxuICAgICAgICB3aWR0aDogMTU1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1lbnUtY29udGFpbmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L0FmZml4PlxyXG4pXHJcbiJdfQ== */\n/*@ sourceURL=components\\TopNavigation.js */'
    })
  );
});

/***/ }),

/***/ "./components/home/Carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\components\\home\\Carousel.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'border', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 24, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          'sadd'
        )
      );
    }
  }]);

  return Carousel;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Carousel);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_Carousel__ = __webpack_require__("./components/home/Carousel.js");

var _jsxFileName = 'C:\\Users\\ui\\Desktop\\gptt-next\\pages\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_home_Carousel__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }),
        this.props.stateSample
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req = _ref.req;
        var stateSample;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(req);
                stateSample = 'foo';
                return _context.abrupt('return', { stateSample: stateSample });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

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