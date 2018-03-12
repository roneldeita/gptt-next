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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_bottomnavigation_content1__ = __webpack_require__("./components/layout/bottomnavigation/content1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_bottomnavigation_content2__ = __webpack_require__("./components/layout/bottomnavigation/content2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_bottomnavigation_content3__ = __webpack_require__("./components/layout/bottomnavigation/content3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_bottomnavigation_content4__ = __webpack_require__("./components/layout/bottomnavigation/content4.js");
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/BottomNavigation.js';








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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layout_bottomnavigation_content1__["a" /* default */], {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__layout_bottomnavigation_content2__["a" /* default */], {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__layout_bottomnavigation_content3__["a" /* default */], {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layout_bottomnavigation_content4__["a" /* default */], {
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
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/Layout.js';






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
      css: '.layout.jsx-67560545{min-height:80vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUlNLGdCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVG9wTmF2aWdhdGlvbiBmcm9tICcuL1RvcE5hdmlnYXRpb24nXG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICcuL0JvdHRvbU5hdmlnYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwOi8vY2RuLmJvb3Rjc3MuY29tL2FudGQvMi45LjMvYW50ZC5jc3MnLz5cbiAgICA8L0hlYWQ+XG4gICAgPFRvcE5hdmlnYXRpb24vPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPEJvdHRvbU5hdmlnYXRpb24gLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGF5b3V0e1xuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoXG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAuYm9yZGVye1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwXG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '922763559',
      css: '.border{border:1px solid #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CdUIsQUFJTSx5QkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3Bycy9Eb2N1bWVudHMvZ3B0dC1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFRvcE5hdmlnYXRpb24gZnJvbSAnLi9Ub3BOYXZpZ2F0aW9uJ1xuaW1wb3J0IEJvdHRvbU5hdmlnYXRpb24gZnJvbSAnLi9Cb3R0b21OYXZpZ2F0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cDovL2Nkbi5ib290Y3NzLmNvbS9hbnRkLzIuOS4zL2FudGQuY3NzJy8+XG4gICAgPC9IZWFkPlxuICAgIDxUb3BOYXZpZ2F0aW9uLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIDxCb3R0b21OYXZpZ2F0aW9uIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxheW91dHtcbiAgICAgICAgbWluLWhlaWdodDogODB2aFxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLmJvcmRlcntcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMFxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/Layout.js */'
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
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/TopNavigation.js';




var Item = __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"].Item;
var SubMenu = __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"].SubMenu;

var AffixStyle = {
  width: "100%"
};
var AuthTab = {
  float: 'right'
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
    { style: AffixStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3490534126' + ' ' + 'menu-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: '', type: 'flex', justify: 'center', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { xs: 24, sm: 7, md: 5, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-3490534126',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: '/static/images/globalpinoytravel.png', className: 'jsx-3490534126' + ' ' + 'logo',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
          { className: '', span: 9, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"],
            { mode: 'horizontal', selectedKeys: ['/'], className: 'ant-menu', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/', __source: {
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
                  'HOME'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/packages', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/packages', __source: {
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
                  'PACKAGES'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { key: '/hotels', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/hotels', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
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
                  lineNumber: 25
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/flights', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
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
                  lineNumber: 26
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/transfers', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
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
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Menu"],
            { mode: 'horizontal', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              Item,
              { className: '', key: '/login', style: AuthTab, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  {
                    className: 'jsx-3490534126',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Icon"], { type: 'user', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
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
      css: '.ant-menu{border:0px !important;line-height:70px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3VCLEFBRytCLHNCQUNNLDRCQUM5QiIsImZpbGUiOiJjb21wb25lbnRzL1RvcE5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dwcnMvRG9jdW1lbnRzL2dwdHQtbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEFmZml4LCBSb3csIENvbCwgTWVudSwgSWNvbiB9IGZyb20gJ2FudGQnXG5jb25zdCBJdGVtID0gTWVudS5JdGVtXG5jb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51XG5cbmNvbnN0IEFmZml4U3R5bGUgPSB7XG4gIHdpZHRoOlwiMTAwJVwiXG59XG5jb25zdCBBdXRoVGFiID0ge1xuICBmbG9hdDoncmlnaHQnXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEFmZml4IHN0eWxlPXtBZmZpeFN0eWxlfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgICA8Um93IGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPXsyNH0gc209ezd9IG1kPXs1fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dsb2JhbHBpbm95dHJhdmVsLnBuZ1wiLz48L2E+PC9MaW5rPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJcIiBzcGFuPXs5fT5cbiAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17WycvJ119IGNsYXNzTmFtZT1cImFudC1tZW51XCI+XG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvXCI+PExpbmsgaHJlZj1cIi9cIj48YT5IT01FPC9hPjwvTGluaz48L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvcGFja2FnZXNcIj48TGluayBocmVmPVwiL3BhY2thZ2VzXCI+PGE+UEFDS0FHRVM8L2E+PC9MaW5rPjwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9ob3RlbHNcIj48TGluayBocmVmPVwiL2hvdGVsc1wiPjxhPkhPVEVMUzwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL2ZsaWdodHNcIj48TGluayBocmVmPVwiL2ZsaWdodHNcIj48YT5GTElHSFRTPC9hPjwvTGluaz48L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvdHJhbnNmZXJzXCI+PExpbmsgaHJlZj1cIi90cmFuc2ZlcnNcIj48YT5UUkFOU0ZFUlM8L2E+PC9MaW5rPjwvSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezN9PlxuICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8SXRlbSBjbGFzc05hbWU9XCJcIiBrZXk9XCIvbG9naW5cIiBzdHlsZT17QXV0aFRhYn0+PExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPjxJY29uIHR5cGU9XCJ1c2VyXCIgLz5Mb2dpbiAvIFJlZ2lzdGVyPC9hPjwvTGluaz48L0l0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAuYW50LW1lbnV7XG4gICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5sb2dve1xuICAgICAgICB3aWR0aDogMTU1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xuICAgICAgfVxuICAgICAgLm1lbnUtY29udGFpbmVye1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvQWZmaXg+XG4pXG4iXX0= */\n/*@ sourceURL=components/TopNavigation.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '197049633',
      css: '.logo.jsx-3490534126{width:155px;margin-bottom:-15px;}.menu-container.jsx-3490534126{font-size:14px;background-color:#ffffff;line-height:70px;border-bottom:1px solid #e8e8e8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2dCLEFBR3FCLEFBSUcsWUFISyxHQUlLLGlCQUgzQixRQUltQixpQkFDZSxnQ0FDbEMiLCJmaWxlIjoiY29tcG9uZW50cy9Ub3BOYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncHJzL0RvY3VtZW50cy9ncHR0LW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBBZmZpeCwgUm93LCBDb2wsIE1lbnUsIEljb24gfSBmcm9tICdhbnRkJ1xuY29uc3QgSXRlbSA9IE1lbnUuSXRlbVxuY29uc3QgU3ViTWVudSA9IE1lbnUuU3ViTWVudVxuXG5jb25zdCBBZmZpeFN0eWxlID0ge1xuICB3aWR0aDpcIjEwMCVcIlxufVxuY29uc3QgQXV0aFRhYiA9IHtcbiAgZmxvYXQ6J3JpZ2h0J1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxBZmZpeCBzdHlsZT17QWZmaXhTdHlsZX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJcIiB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPENvbCB4cz17MjR9IHNtPXs3fSBtZD17NX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT48aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9nbG9iYWxwaW5veXRyYXZlbC5wbmdcIi8+PC9hPjwvTGluaz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiXCIgc3Bhbj17OX0+XG4gICAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBzZWxlY3RlZEtleXM9e1snLyddfSBjbGFzc05hbWU9XCJhbnQtbWVudVwiPlxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL1wiPjxMaW5rIGhyZWY9XCIvXCI+PGE+SE9NRTwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3BhY2thZ2VzXCI+PExpbmsgaHJlZj1cIi9wYWNrYWdlc1wiPjxhPlBBQ0tBR0VTPC9hPjwvTGluaz48L0l0ZW0+XG4gICAgICAgICAgICA8SXRlbSBrZXk9XCIvaG90ZWxzXCI+PExpbmsgaHJlZj1cIi9ob3RlbHNcIj48YT5IT1RFTFM8L2E+PC9MaW5rPjwvSXRlbT5cbiAgICAgICAgICAgIDxJdGVtIGtleT1cIi9mbGlnaHRzXCI+PExpbmsgaHJlZj1cIi9mbGlnaHRzXCI+PGE+RkxJR0hUUzwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3RyYW5zZmVyc1wiPjxMaW5rIGhyZWY9XCIvdHJhbnNmZXJzXCI+PGE+VFJBTlNGRVJTPC9hPjwvTGluaz48L0l0ZW0+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXszfT5cbiAgICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPEl0ZW0gY2xhc3NOYW1lPVwiXCIga2V5PVwiL2xvZ2luXCIgc3R5bGU9e0F1dGhUYWJ9PjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT48SWNvbiB0eXBlPVwidXNlclwiIC8+TG9naW4gLyBSZWdpc3RlcjwvYT48L0xpbms+PC9JdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLmFudC1tZW51e1xuICAgICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubG9nb3tcbiAgICAgICAgd2lkdGg6IDE1NXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbiAgICAgIH1cbiAgICAgIC5tZW51LWNvbnRhaW5lcntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0FmZml4PlxuKVxuIl19 */\n/*@ sourceURL=components/TopNavigation.js */'
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
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/home/Carousel.js';

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

/***/ "./components/layout/bottomnavigation/content1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = '/Users/gprs/Documents/gptt-next/components/layout/bottomnavigation/content1.js';



var Content = function Content() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: 'flex', justify: 'center', style: { marginTop: "50px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { type: 'flex', justify: 'space-between', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { style: { paddingBottom: "30px" }, span: 24, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'globalpinoytravel-White', src: '../../../static/images/globalpinoytravel-White.png', style: { width: "100%", maxWidth: "200px" }, __source: {
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'Sec_Ass-01', src: '../../../static/images/Sec_Ass-01.png', style: { width: "50%", maxWidth: '50px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: 'IATA-01', src: '../../../static/images/IATA-01.png', style: { width: "50%", maxWidth: '50px' }, __source: {
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '24HR-01', src: '../../../static/images/24HR-01.png', style: { width: "50%", maxWidth: '50px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { style: { paddingTop: "20px" }, span: 24, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { style: { paddingBottom: '10px', color: "#ffffff" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          'Customer Service'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { style: { color: "#ffffff" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          '+63-9XX-XXX-XXXX'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          'Email:support@mygprs.com'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          'Address: Floor,St.,Barangay,Quezon City'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'Metro Manila Philippines 1000'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { style: { color: '#818387' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          'Offic Hours: Monday-Friday 8 30am -6 30pm'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

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
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: "flex", justify: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
        { span: 24, style: { marginTop: '50px' }, __source: {
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
          "Latest News"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h4",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          "Water & Rock Discovering the beauty of Oslob,Cebu"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtdate, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          "05.04.2018"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          " "
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { marginTop: "20px", marginBottom: "15px" }, className: "border", __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          " "
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
          "h4",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "Water & Rock Discovering the beauty of Oslob,Cebu"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtdate, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "05.04.2018"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: { marginTop: "20px", marginBottom: "15px" }, className: "border", __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          " "
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
          "h4",
          { style: txtsemiwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          "Water & Rock Discovering the beauty of Oslob,Cebu"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h5",
          { style: txtdate, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
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
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
      { type: "flex", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        { style: { color: "#ffffff", marginTop: '50px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        "Download GPPT App"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { gutter: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Android", src: '../../../static/images/Android.png', style: { width: "100%" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { span: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { alt: "Apple", src: '../../../static/images/Apple.png', style: { width: "100%" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { style: { marginTop: '50px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: txtwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          "Connect with Global"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          { style: txtwhite, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          "Pinoy Travel & Tours"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
          { gutter: 6, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { span: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "facebook", style: { color: '#3B5998', fontSize: 30 }, __source: {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "twitter", style: { color: '#1DA1F2', fontSize: 30 }, __source: {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "linkedin", style: { color: '#0077B5', fontSize: 30 }, __source: {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: "google-plus", style: { color: '#DB4437', fontSize: 30 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_Carousel__ = __webpack_require__("./components/home/Carousel.js");

var _jsxFileName = '/Users/gprs/Documents/gptt-next/pages/index.js';

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