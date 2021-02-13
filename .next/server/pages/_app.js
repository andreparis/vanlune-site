module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/widgets/Tap-Top.js":
/*!**********************************************!*\
  !*** ./components/common/widgets/Tap-Top.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\components\\common\\widgets\\Tap-Top.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TapTop = () => {
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500); // Tap to Top Scroll 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return __jsx("div", {
    className: "tap-top top-cls",
    style: goingUp ? {
      display: 'block'
    } : {
      display: 'none'
    },
    onClick: tapToTop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-angle-double-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 14
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TapTop);

/***/ }),

/***/ "./components/customizer/config.json":
/*!*******************************************!*\
  !*** ./components/customizer/config.json ***!
  \*******************************************/
/*! exports provided: config, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"config\":{\"layout_type\":\"ltr\",\"layout_version\":\"light\",\"color\":\"#ff4c3b\"}}");

/***/ }),

/***/ "./components/customizer/theme-settings.js":
/*!*************************************************!*\
  !*** ./components/customizer/theme-settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_theme_setting_SettingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/theme-setting/SettingContext */ "./helpers/theme-setting/SettingContext.js");
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/script */ "./services/script.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.json */ "./components/customizer/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./components/customizer/config.json", 1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\components\\customizer\\theme-settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ThemeSettings = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_theme_setting_SettingContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const {
    0: themeLayout,
    1: setThemeLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const layoutType = context.layoutFun;
  const layoutColorFunc = context.layoutColorFun;
  const layoutState = context.state;
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);
  /*=====================
   Tap on Top
   ==========================*/


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_version && _config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_type) {
      document.body.className = `${_config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_version}  ${_config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("color"));
    }

    window.addEventListener('scroll', handleScroll);
    Object(_services_script__WEBPACK_IMPORTED_MODULE_2__["SlideUpDown"])('setting-title');
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (false) {}
  };

  const openSetting = () => {
    if (false) {}
  };

  const closeSetting = () => {
    if (false) {}
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (false) {}
  } else {
    if (false) {}
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: null,
    onClick: () => openSetting(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "setting-sidebar",
    id: "setting-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-cog",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  })))), __jsx("div", {
    id: "setting_box",
    className: "setting-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "# ",
    className: "overlay",
    onClick: () => closeSetting(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "setting_box_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: () => closeSetting(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "sidebar-back text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-angle-left pr-2",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }), " Back")), __jsx("div", {
    className: "setting-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "setting-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "color option")), __jsx("div", {
    className: "setting-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "color-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, __jsx("input", {
    id: "colorPicker1",
    type: "color",
    defaultValue: "#ff4c3b",
    name: "Background",
    onChange: e => layoutColorFunc(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  })), __jsx("span", {
    className: "ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "theme deafult color"))), __jsx("div", {
    className: "setting-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, "RTL")), __jsx("div", {
    className: "setting-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "setting_buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: "active",
    id: "ltr_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "# ",
    className: "btn setting_btn",
    onClick: () => layoutType(layoutState),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }, layoutState)))), __jsx("div", {
    className: "buy_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }), " purchase Multikart now!"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    src: `/assets/images/icon/angular.png`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }), " Multikart Angular"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-html5",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }), " Multikart HTML"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    src: `/assets/images/icon/shopify.png`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }), " Multikart Shopify"))))), __jsx("div", {
    className: "sidebar-btn dark-light-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "dark-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "theme-layout-version",
    onClick: () => changeThemeLayout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, themeLayout ? 'Light' : 'Dark'))), __jsx("div", {
    className: "addcart_btm_popup",
    id: "fixed_cart_icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: null,
    className: "fixed_cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-clone",
    "aria-hidden": "true",
    onClick: toggle,
    title: "Configuration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    centered: true,
    isOpen: modal,
    toggle: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
    toggle: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "Config"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
    className: "p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, Object.keys(_config_json__WEBPACK_IMPORTED_MODULE_4__["config"]).map((key, i) => __jsx("p", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, key, ":"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, _config_json__WEBPACK_IMPORTED_MODULE_4__["config"][key])))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "lh-cls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 47
    }
  }, "Note: "), "Copy upper config and paste it in ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 94
    }
  }, "\"/components/customizer/config.json\""), " "))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeSettings);

/***/ }),

/***/ "./helpers/Compare/CompareContext.js":
/*!*******************************************!*\
  !*** ./helpers/Compare/CompareContext.js ***!
  \*******************************************/
/*! exports provided: Context, Provider, CompareContext, CompareContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompareContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareContext", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareContextProvider", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["Provider"]; });

var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\Compare\\CompareContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  compareItems: Function,
  addToCompare: Function,
  removeFromComapre: Function
});

const getLocalCompareItems = () => {
  try {
    const list = localStorage.getItem('compare');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: compareItems,
    1: setcompareItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalCompareItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('compare', JSON.stringify(compareItems));
  }, [compareItems]); // Add Product To Wishlist

  const addToCompare = item => {
    const index = compareItems.findIndex(compare => compare.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setcompareItems([...compareItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From compare


  const removeFromComapre = item => {
    setcompareItems(compareItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      compareItems: compareItems,
      addToCompare: addToCompare,
      removeFromComapre: removeFromComapre
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, props.children);
};


/***/ }),

/***/ "./helpers/Currency/CurrencyContext.js":
/*!*********************************************!*\
  !*** ./helpers/Currency/CurrencyContext.js ***!
  \*********************************************/
/*! exports provided: Context, Provider, Consumer, CurrencyContext, CurrencyContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyContext", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyContextProvider", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["Provider"]; });

var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\Currency\\CurrencyContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const Provider = props => {
  const {
    0: selectedCurr,
    1: selectedCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: 'USD',
    symbol: '$',
    value: 1
  });
  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };
  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      state: selectedCurr,
      currencyContext: currencyContext
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, props.children);
};
const {
  Consumer
} = Context;


/***/ }),

/***/ "./helpers/cart/CartContext.js":
/*!*************************************!*\
  !*** ./helpers/cart/CartContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./helpers/cart/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\cart\\CartContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem('cartList');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const CartProvider = props => {
  const {
    0: cartItems,
    1: setCartItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalCartItems());
  const {
    0: cartTotal,
    1: setCartTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: stock,
    1: setStock
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('InStock');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem('cartList', JSON.stringify(cartItems));
  }, [cartItems]); // Add Product To Cart

  const addToCart = (item, quantity) => {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Product Added Successfully !");
    const index = cartItems.findIndex(itm => itm.id === item.id);

    if (index !== -1) {
      const product = cartItems[index];
      cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, item), item), {}, {
        qty: quantity,
        total: (item.price - item.price * item.discount / 100) * quantity
      });
      setCartItems([...cartItems]);
    } else {
      const product = _objectSpread(_objectSpread({}, item), {}, {
        qty: quantity,
        total: item.price - item.price * item.discount / 100
      });

      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = item => {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Product Removed Successfully !");
    setCartItems(cartItems.filter(e => e.id !== item.id));
  };

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setStock('InStock');
    }
  };

  const plusQty = item => {
    if (item.stock >= quantity) {
      setQuantity(quantity + 1);
    } else {
      setStock("Out of Stock !");
    }
  }; // Update Product Quantity


  const updateQty = (item, quantity) => {
    if (quantity >= 1) {
      const index = cartItems.findIndex(itm => itm.id === item.id);

      if (index !== -1) {
        const product = cartItems[index];
        cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, product), item), {}, {
          qty: quantity,
          total: item.price * quantity
        });
        setCartItems([...cartItems]);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info("Product Quantity Updated !");
      } else {
        const product = _objectSpread(_objectSpread({}, item), {}, {
          qty: quantity,
          total: (item.price - item.price * item.discount / 100) * quantity
        });

        setCartItems([...cartItems, product]);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Product Added Updated !");
      }
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Enter Valid Quantity !");
    }
  };

  const {
    value
  } = props;
  return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: cartItems,
      cartTotal,
      setQuantity,
      quantity,
      stock,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      plusQty: plusQty,
      minusQty: minusQty,
      updateQty: updateQty
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CartProvider);

/***/ }),

/***/ "./helpers/cart/index.js":
/*!*******************************!*\
  !*** ./helpers/cart/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (CartContext);

/***/ }),

/***/ "./helpers/filter/FilterContext.js":
/*!*****************************************!*\
  !*** ./helpers/filter/FilterContext.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FilterContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (FilterContext);

/***/ }),

/***/ "./helpers/filter/FilterProvider.js":
/*!******************************************!*\
  !*** ./helpers/filter/FilterProvider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterContext */ "./helpers/filter/FilterContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\filter\\FilterProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FilterProvider = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const brand = router.query.brand;
  const color = router.query.color;
  const size = router.query.size;
  const category = router.query.category;
  const min = router.query.min;
  const max = router.query.max;
  let sizeParam = size ? size.split(",") : null;
  let param = brand ? brand.split(",") : [];
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(category ? category : "fashion");
  const {
    0: selectedBrands,
    1: setSelectedBrands
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(param ? param : []);
  const {
    0: selectedColor,
    1: setSelectedColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(color ? color : "");
  const {
    0: selectedSize,
    1: setSelectedSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(sizeParam ? sizeParam : []);
  const {
    0: selectedPrice,
    1: setSelectedPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    min: min ? min : 0,
    max: max ? max : 500
  });
  const {
    0: isChecked,
    1: setIsChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: filterChecked,
    1: setFilterChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}]);

  const handleBrands = (brand, checked) => {
    var index = selectedBrands.indexOf(brand);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{
        brand,
        checked
      }]);
      setSelectedBrands(selectedBrands.filter(e => e !== brand));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{
        brand,
        checked
      }]);
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSizes = (size, checked) => {
    var index = selectedSize.indexOf(size);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{
        size,
        checked
      }]);
      setSelectedSize(selectedSize.filter(e => e !== size));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{
        size,
        checked
      }]);
      setSelectedSize([...selectedSize, size]);
    }
  };

  return __jsx(_FilterContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: selectedCategory,
      setFilterChecked,
      setSelectedColor,
      setSelectedCategory,
      setSelectedBrands,
      selectedBrands,
      selectedColor,
      selectedPrice,
      isChecked,
      filterChecked,
      selectedSize,
      setSelectedSize,
      setSelectedPrice,
      handleBrands: handleBrands,
      handleSizes: handleSizes
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FilterProvider);

/***/ }),

/***/ "./helpers/menu/MenuContext.js":
/*!*************************************!*\
  !*** ./helpers/menu/MenuContext.js ***!
  \*************************************/
/*! exports provided: Context, Provider, Consumer, MenuContext, MenuContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuContext */ "./helpers/menu/MenuContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return _MenuContext__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContextProvider", function() { return _MenuContext__WEBPACK_IMPORTED_MODULE_1__["Provider"]; });

var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\menu\\MenuContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  selectMenu: Function
});
const Provider = props => {
  const {
    0: selectMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    menuOpen: false
  });
  const menuContext = {
    selectMenu
  };
  return __jsx(Context.Provider, {
    value: menuContext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, " ", props.children);
};
const {
  Consumer
} = Context;


/***/ }),

/***/ "./helpers/theme-setting/SettingContext.js":
/*!*************************************************!*\
  !*** ./helpers/theme-setting/SettingContext.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (SettingContext);

/***/ }),

/***/ "./helpers/theme-setting/SettingProvider.js":
/*!**************************************************!*\
  !*** ./helpers/theme-setting/SettingProvider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SettingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingContext */ "./helpers/theme-setting/SettingContext.js");
/* harmony import */ var _components_customizer_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customizer/config.json */ "./components/customizer/config.json");
var _components_customizer_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../components/customizer/config.json */ "./components/customizer/config.json", 1);
var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\theme-setting\\SettingProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SettingProvider = props => {
  const {
    0: layoutState,
    1: setLayoutState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("RTL");
  const {
    0: layoutColor,
    1: setLayoutColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#ff4c3b");

  const layoutFun = item => {
    if (item === "RTL") {
      document.body.classList.remove("ltr");
      document.body.classList.add("rtl");
      setLayoutState("LTR");
    } else {
      document.body.classList.remove("rtl");
      document.body.classList.add("ltr");
      setLayoutState("RTL");
    }
  };

  const layoutColorFun = item => {
    localStorage.setItem("color", item.target.value);
    document.documentElement.style.setProperty('--theme-deafult', item.target.value);
    _components_customizer_config_json__WEBPACK_IMPORTED_MODULE_2__["config"].color = item.target.value;
    setLayoutColor(item.target.value);
  };

  return __jsx(_SettingContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: layoutState,
      layoutFun: layoutFun,
      layoutColorFun: layoutColorFun
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SettingProvider);

/***/ }),

/***/ "./helpers/wishlist/WishlistContext.js":
/*!*********************************************!*\
  !*** ./helpers/wishlist/WishlistContext.js ***!
  \*********************************************/
/*! exports provided: Context, Provider, WishlistContext, WishlistContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WishlistContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistContext", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistContextProvider", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["Provider"]; });

var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\helpers\\wishlist\\WishlistContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  wishlistItems: Function,
  addToWish: Function,
  removeFromWish: Function
});

const getLocalWishlistItems = () => {
  try {
    const list = localStorage.getItem('wishlist');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: wishlistItems,
    1: setWishlistItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalWishlistItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]); // Add Product To Wishlist

  const addToWish = item => {
    const index = wishlistItems.findIndex(wish => wish.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setWishlistItems([...wishlistItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From Wishlist


  const removeFromWish = item => {
    setWishlistItems(wishlistItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      wishlistItems: wishlistItems,
      addToWish: addToWish,
      removeFromWish: removeFromWish
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, props.children);
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_customizer_theme_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/customizer/theme-settings */ "./components/customizer/theme-settings.js");
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/scss/app.scss */ "./public/assets/scss/app.scss");
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/widgets/Tap-Top */ "./components/common/widgets/Tap-Top.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/menu/MenuContext */ "./helpers/menu/MenuContext.js");
/* harmony import */ var _helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/cart/CartContext */ "./helpers/cart/CartContext.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/filter/FilterProvider */ "./helpers/filter/FilterProvider.js");
/* harmony import */ var _helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/theme-setting/SettingProvider */ "./helpers/theme-setting/SettingProvider.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















function MyApp({
  Component,
  pageProps
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add('dark');
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? __jsx("div", {
    className: "loader-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, url === 'Christmas' ? __jsx("div", {
    id: "preloader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }) : __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default.a, {
    pageId: "2123438804574660",
    appId: "406252930752412",
    htmlRef: "https://connect.facebook.net/en_US/sdk.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Vanlune - Best ecommerce for Gamers")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(_helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_11__["CompareContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__["CurrencyContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx(_helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__["WishlistContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, __jsx(_helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_6__["MenuContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, __jsx(_helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }))))))), __jsx(_components_customizer_theme_settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx(_components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }))));
}

/***/ }),

/***/ "./public/assets/scss/app.scss":
/*!*************************************!*\
  !*** ./public/assets/scss/app.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/script.js":
/*!****************************!*\
  !*** ./services/script.js ***!
  \****************************/
/*! exports provided: Product3, tools_product_4, Product4, Product7, Product5, Product6, Team4, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, SlideUpDown, svgFreeShipping, svgservice, svgoffer, svgpayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product3", function() { return Product3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools_product_4", function() { return tools_product_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product4", function() { return Product4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product7", function() { return Product7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product5", function() { return Product5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product6", function() { return Product6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team4", function() { return Team4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider2", function() { return Slider2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider3", function() { return Slider3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider4", function() { return Slider4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider5", function() { return Slider5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider6", function() { return Slider6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider7", function() { return Slider7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideUpDown", function() { return SlideUpDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgFreeShipping", function() { return svgFreeShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgservice", function() { return svgservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgoffer", function() { return svgoffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgpayment", function() { return svgpayment; });
const Product3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const tools_product_4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product7 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product6 = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Team4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
};
const Slider2 = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider4 = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider6 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider7 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }]
};
const SlideUpDown = function (classnames) {
  var accords = document.querySelectorAll("." + classnames + " h4");
  [].forEach.call(accords, function (elemt) {
    elemt.innerHTML += '<span class="according-menu"></span>';
  });
  var anchors = document.getElementsByClassName(classnames);

  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];

    anchor.onclick = function () {
      var elems = document.querySelectorAll("." + classnames);
      [].forEach.call(elems, function (elemt) {
        elemt.classList.remove("active");
        var el = elemt.nextElementSibling;
        el.style.height = el.offsetHeight + 'px';
        el.style.transitionProperty = `height, margin, padding`;
        el.style.transitionDuration = '500ms';
        el.offsetHeight; // eslint-disable-line no-unused-expressions

        el.style.overflow = 'hidden';
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        el.style.display = 'none';
        el.style.removeProperty('height');
        el.style.removeProperty('padding-top');
        el.style.removeProperty('padding-bottom');
        el.style.removeProperty('margin-top');
        el.style.removeProperty('margin-bottom');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition-duration');
        el.style.removeProperty('transition-property');
      });
      this.classList.add('active');
      var element = this.nextElementSibling;
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;

      if (element.classList.contains('show')) {
        element.classList.remove('show');
        this.classList.remove("active");
        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.offsetHeight; // eslint-disable-line no-unused-expressions

        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.style.display = 'none';
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
        }, 500);
      } else {
        element.classList.add('show');
        if (display === 'none') display = 'block';
        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight; // eslint-disable-line no-unused-expressions

        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.style.height = height + 'px';
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
          element.style.removeProperty('height');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
        }, 500);
      }
    };
  }

  var elems = document.querySelectorAll("." + classnames);
  [].forEach.call(elems, function (elemt) {
    let el = elemt.nextElementSibling;
    el.style = "display: none";
  });
}; // SVG Icons

const svgFreeShipping = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">\n' + '                                        <path\n' + '                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                    </svg>';
const svgservice = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="512px" height="512px">\n' + '                                       <g>\n' + '                                           <g>\n' + '                                              <g>\n' + '                                                <path d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z" fill="#ff4c3b"/>\n' + '                                                <path d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z" fill="#ff4c3b"/>\n' + '                                                <path d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z" fill="#ff4c3b"/>\n' + '                                                <path d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z" fill="#ff4c3b"/>\n' + '                                              </g>\n' + '                                           </g>\n' + '                                       </g>\n' + '                                    </svg>';
const svgoffer = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">\n' + '                                        <path\n' + '                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                    </svg>';
const svgpayment = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px">\n' + '                                                 <g>\n' + '                                                    <g>\n' + '                                                       <g>\n' + '                                                          <path d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z" fill="#ff4c3b"/>\n' + '                                                          <path d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z" fill="#ff4c3b"/>\n' + '                                                          <path d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z" fill="#ff4c3b"/>\n' + '                                                          <path d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z" fill="#ff4c3b"/>\n' + '                                                          <path d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z" fill="#ff4c3b"/>\n' + '                                                          <path d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z" fill="#ff4c3b"/>\n' + '                                                          <path d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z" fill="#ff4c3b"/>\n' + '                                                       </g>\n' + '                                                    </g>\n' + '                                                 </g>\n' + '                                                </svg>';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vd2lkZ2V0cy9UYXAtVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9taXplci90aGVtZS1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL0NvbXBhcmUvQ29tcGFyZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9jYXJ0L0NhcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2ZpbHRlci9GaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlclByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvbWVudS9NZW51Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3RoZW1lLXNldHRpbmcvU2V0dGluZ0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy90aGVtZS1zZXR0aW5nL1NldHRpbmdQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJuYW1lcyI6WyJUYXBUb3AiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJ1c2VTdGF0ZSIsImdvaW5nVXAiLCJzZXRHb2luZ1VwIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcFRvVG9wIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInRvcCIsImRpc3BsYXkiLCJUaGVtZVNldHRpbmdzIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJTZXR0aW5nQ29udGV4dCIsInRoZW1lTGF5b3V0Iiwic2V0VGhlbWVMYXlvdXQiLCJsYXlvdXRUeXBlIiwibGF5b3V0RnVuIiwibGF5b3V0Q29sb3JGdW5jIiwibGF5b3V0Q29sb3JGdW4iLCJsYXlvdXRTdGF0ZSIsInN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImNvbmZpZyIsImxheW91dF92ZXJzaW9uIiwibGF5b3V0X3R5cGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc05hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIlNsaWRlVXBEb3duIiwib3BlblNldHRpbmciLCJjbG9zZVNldHRpbmciLCJjaGFuZ2VUaGVtZUxheW91dCIsImUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaSIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY29tcGFyZUl0ZW1zIiwiRnVuY3Rpb24iLCJhZGRUb0NvbXBhcmUiLCJyZW1vdmVGcm9tQ29tYXByZSIsImdldExvY2FsQ29tcGFyZUl0ZW1zIiwibGlzdCIsIkpTT04iLCJwYXJzZSIsImVyciIsIlByb3ZpZGVyIiwicHJvcHMiLCJzZXRjb21wYXJlSXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaXRlbSIsImluZGV4IiwiZmluZEluZGV4IiwiY29tcGFyZSIsImlkIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJmaWx0ZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic2VsZWN0ZWRDdXJyIiwic2VsZWN0ZWRDdXJyZW5jeSIsImN1cnJlbmN5Iiwic3ltYm9sIiwiY3VycmVuY3lDb250ZXh0IiwiQ29uc3VtZXIiLCJnZXRMb2NhbENhcnRJdGVtcyIsIkNhcnRQcm92aWRlciIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImNhcnRUb3RhbCIsInNldENhcnRUb3RhbCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJzdG9jayIsInNldFN0b2NrIiwiVG90YWwiLCJyZWR1Y2UiLCJhIiwiYiIsInRvdGFsIiwiYWRkVG9DYXJ0IiwiaXRtIiwicHJvZHVjdCIsInF0eSIsInByaWNlIiwiZGlzY291bnQiLCJyZW1vdmVGcm9tQ2FydCIsIm1pbnVzUXR5IiwicGx1c1F0eSIsInVwZGF0ZVF0eSIsImluZm8iLCJDYXJ0Q29udGV4dCIsIkZpbHRlckNvbnRleHQiLCJGaWx0ZXJQcm92aWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImJyYW5kIiwicXVlcnkiLCJjb2xvciIsInNpemUiLCJjYXRlZ29yeSIsIm1pbiIsIm1heCIsInNpemVQYXJhbSIsInNwbGl0IiwicGFyYW0iLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkQnJhbmRzIiwic2V0U2VsZWN0ZWRCcmFuZHMiLCJzZWxlY3RlZENvbG9yIiwic2V0U2VsZWN0ZWRDb2xvciIsInNlbGVjdGVkU2l6ZSIsInNldFNlbGVjdGVkU2l6ZSIsInNlbGVjdGVkUHJpY2UiLCJzZXRTZWxlY3RlZFByaWNlIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiZmlsdGVyQ2hlY2tlZCIsInNldEZpbHRlckNoZWNrZWQiLCJoYW5kbGVCcmFuZHMiLCJjaGVja2VkIiwiaW5kZXhPZiIsImhhbmRsZVNpemVzIiwic2VsZWN0TWVudSIsIm1lbnVPcGVuIiwibWVudUNvbnRleHQiLCJTZXR0aW5nUHJvdmlkZXIiLCJzZXRMYXlvdXRTdGF0ZSIsImxheW91dENvbG9yIiwic2V0TGF5b3V0Q29sb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0YXJnZXQiLCJ3aXNobGlzdEl0ZW1zIiwiYWRkVG9XaXNoIiwicmVtb3ZlRnJvbVdpc2giLCJnZXRMb2NhbFdpc2hsaXN0SXRlbXMiLCJzZXRXaXNobGlzdEl0ZW1zIiwid2lzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXJsIiwic2V0VXJsIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsZW5ndGgiLCJQcm9kdWN0MyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJ0b29sc19wcm9kdWN0XzQiLCJQcm9kdWN0NCIsIlByb2R1Y3Q3IiwiUHJvZHVjdDUiLCJkb3RzIiwiUHJvZHVjdDYiLCJUZWFtNCIsIlNsaWRlcjIiLCJTbGlkZXIzIiwiU2xpZGVyNCIsIlNsaWRlcjUiLCJTbGlkZXI2IiwiU2xpZGVyNyIsImNsYXNzbmFtZXMiLCJhY2NvcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjYWxsIiwiZWxlbXQiLCJpbm5lckhUTUwiLCJhbmNob3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFuY2hvciIsIm9uY2xpY2siLCJlbGVtcyIsImVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbW92ZVByb3BlcnR5IiwiZWxlbWVudCIsImdldENvbXB1dGVkU3R5bGUiLCJjb250YWlucyIsInN2Z0ZyZWVTaGlwcGluZyIsInN2Z3NlcnZpY2UiLCJzdmdvZmZlciIsInN2Z3BheW1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsSUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNk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WXRCLDREQVpzQixHQWF0Qix5REFic0IsR0FjdEIsd0RBZEcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoaEJQLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRhcFRvcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2dvaW5nVXAsIHNldEdvaW5nVXBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAvLyBQYWdlIExvYWRlclxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRMb2FkZXIoZmFsc2UpXHJcbiAgICAgIH0sIDE1MDApXHJcbiAgXHJcbiAgICAgIC8vIFRhcCB0byBUb3AgU2Nyb2xsIFxyXG4gICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiA1MDApXHJcbiAgICAgICAgICBzZXRHb2luZ1VwKHRydWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHNldEdvaW5nVXAoZmFsc2UpO1xyXG4gICAgICB9O1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9LCBbZ29pbmdVcF0pO1xyXG4gIFxyXG4gICAgY29uc3QgdGFwVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgdG9wOiAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcC10b3AgdG9wLWNsc1wiIHN0eWxlPXtnb2luZ1VwID8geyBkaXNwbGF5OiAnYmxvY2snIH0gOiB7IGRpc3BsYXk6ICdub25lJyB9fSBvbkNsaWNrPXt0YXBUb1RvcH0+XHJcbiAgICAgICAgPGRpdj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtdXBcIj48L2k+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhcFRvcDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QgLHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZXR0aW5nQ29udGV4dCBmcm9tICcuLi8uLi9oZWxwZXJzL3RoZW1lLXNldHRpbmcvU2V0dGluZ0NvbnRleHQnO1xyXG5pbXBvcnQge1NsaWRlVXBEb3dufSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NyaXB0XCJcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZy5qc29uJ1xyXG5pbXBvcnQgeyBNZWRpYSwgQ29sLCBSb3csIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgVGhlbWVTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFNldHRpbmdDb250ZXh0KVxyXG4gICAgY29uc3QgW3RoZW1lTGF5b3V0LCBzZXRUaGVtZUxheW91dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBsYXlvdXRUeXBlID0gY29udGV4dC5sYXlvdXRGdW47XHJcbiAgICBjb25zdCBsYXlvdXRDb2xvckZ1bmMgPSBjb250ZXh0LmxheW91dENvbG9yRnVuXHJcbiAgICBjb25zdCBsYXlvdXRTdGF0ZSA9IGNvbnRleHQuc3RhdGVcclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0TW9kYWwoIW1vZGFsKTtcclxuICBcclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgVGFwIG9uIFRvcFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihjb25maWcubGF5b3V0X3ZlcnNpb24gJiYgY29uZmlnLmxheW91dF90eXBlKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBgJHtjb25maWcubGF5b3V0X3ZlcnNpb259ICAke2NvbmZpZy5sYXlvdXRfdHlwZX1gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yXCIpKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lLWRlYWZ1bHQnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgU2xpZGVVcERvd24oJ3NldHRpbmctdGl0bGUnKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgIH0sIFtdKTtcclxuICAgXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNjAwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFwLXRvcFwiKS5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2tcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhcC10b3BcIikuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5TZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdfYm94XCIpLmNsYXNzTGlzdC5hZGQoJ29wZW4tc2V0dGluZycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZy1pY29uXCIpLmNsYXNzTGlzdC5hZGQoJ29wZW4taWNvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZVNldHRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ19ib3hcIikuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1zZXR0aW5nJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nLWljb25cIikuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1pY29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VUaGVtZUxheW91dCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUaGVtZUxheW91dCghdGhlbWVMYXlvdXQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhlbWVMYXlvdXQpe1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcclxuICAgICAgICBjb25maWcubGF5b3V0X3ZlcnNpb24gPSAnZGFyaydcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XHJcbiAgICAgICAgY29uZmlnLmxheW91dF92ZXJzaW9uID0gJ2xpZ2h0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IG9uQ2xpY2s9eygpID0+IG9wZW5TZXR0aW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNpZGViYXJcIiBpZD1cInNldHRpbmctaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZXR0aW5nX2JveFwiIGNsYXNzTmFtZT1cInNldHRpbmctYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25DbGljaz17KCkgPT4gY2xvc2VTZXR0aW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nX2JveF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBjbG9zZVNldHRpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iYWNrIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdCBwci0yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Y29sb3Igb3B0aW9uPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1jb250YW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sb3ItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb2xvclBpY2tlcjFcIiB0eXBlPVwiY29sb3JcIiBkZWZhdWx0VmFsdWU9XCIjZmY0YzNiXCIgIG5hbWU9XCJCYWNrZ3JvdW5kXCIgb25DaGFuZ2U9eyhlKSA9PiBsYXlvdXRDb2xvckZ1bmMoZSl9Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTNcIj50aGVtZSBkZWFmdWx0IGNvbG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJUTDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctY29udGFudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNldHRpbmdfYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIiBpZD1cImx0cl9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMgXCIgY2xhc3NOYW1lPVwiYnRuIHNldHRpbmdfYnRuXCIgb25DbGljaz17ICgpID0+IGxheW91dFR5cGUobGF5b3V0U3RhdGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXlvdXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXlfYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tdWx0aWthcnQtcmVzcG9uc2l2ZS1yZWFjdC1lY29tbWVyY2UtdGVtcGxhdGUvMjMwNjc3NzM/c19yYW5rPTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHVyY2hhc2VfYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gcHVyY2hhc2UgTXVsdGlrYXJ0IG5vdyE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tdWx0aWthcnQtcmVzcG9uc2l2ZS1hbmd1bGFyLWVjb21tZXJjZS10ZW1wbGF0ZS8yMjkwNTM1OD9zX3Jhbms9M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBwdXJjaGFzZV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgc3JjPXtgL2Fzc2V0cy9pbWFnZXMvaWNvbi9hbmd1bGFyLnBuZ2B9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+IE11bHRpa2FydCBBbmd1bGFyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbXVsdGlrYXJ0LXJlc3BvbnNpdmUtZWNvbW1lcmNlLWh0bWwtdGVtcGxhdGUvMjI4MDk5NjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHVyY2hhc2VfYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaHRtbDVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IE11bHRpa2FydCBIVE1MPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbXVsdGlrYXJ0LW11bHRpcHVycG9zZS1zaG9waWZ5LXNlY3Rpb25zLXRoZW1lLzIzMDkzODMxP3NfcmFuaz0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIHB1cmNoYXNlX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYSBzcmM9e2AvYXNzZXRzL2ltYWdlcy9pY29uL3Nob3BpZnkucG5nYH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz4gTXVsdGlrYXJ0IFNob3BpZnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYnRuIGRhcmstbGlnaHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcmstbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoZW1lLWxheW91dC12ZXJzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlVGhlbWVMYXlvdXQoKX1cclxuICAgICAgICAgICAgICAgICAgICA+e3RoZW1lTGF5b3V0PydMaWdodCc6J0RhcmsnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGNhcnRfYnRtX3BvcHVwXCIgaWQ9XCJmaXhlZF9jYXJ0X2ljb25cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IGNsYXNzTmFtZT1cImZpeGVkX2NhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWNsb25lXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbmZpZ3VyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBjZW50ZXJlZD17dHJ1ZX0gaXNPcGVuPXttb2RhbH0gdG9nZ2xlPXt0b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlciB0b2dnbGU9e3RvZ2dsZX0+Q29uZmlnPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoKGtleSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntrZXl9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb25maWdba2V5XX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGgtY2xzXCI+PGI+Tm90ZTogPC9iPkNvcHkgdXBwZXIgY29uZmlnIGFuZCBwYXN0ZSBpdCBpbiA8Yj5cIi9jb21wb25lbnRzL2N1c3RvbWl6ZXIvY29uZmlnLmpzb25cIjwvYj4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVNldHRpbmdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0ICwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIGNvbXBhcmVJdGVtczogRnVuY3Rpb24sXHJcbiAgYWRkVG9Db21wYXJlOiBGdW5jdGlvbixcclxuICByZW1vdmVGcm9tQ29tYXByZTogRnVuY3Rpb25cclxufSk7XHJcblxyXG5jb25zdCBnZXRMb2NhbENvbXBhcmVJdGVtcyA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYXJlJyk7XHJcbiAgICAgIGlmIChsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsaXN0KVxyXG4gICAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhcmVJdGVtcywgc2V0Y29tcGFyZUl0ZW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQ29tcGFyZUl0ZW1zKCkpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFyZScsIEpTT04uc3RyaW5naWZ5KGNvbXBhcmVJdGVtcykpXHJcbiAgICB9LCBbY29tcGFyZUl0ZW1zXSlcclxuXHJcbiAgICAvLyBBZGQgUHJvZHVjdCBUbyBXaXNobGlzdFxyXG4gICAgY29uc3QgYWRkVG9Db21wYXJlID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGNvbXBhcmVJdGVtcy5maW5kSW5kZXgoY29tcGFyZSA9PiBjb21wYXJlLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlByb2R1Y3QgQWRkZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICAgICAgICAgIHNldGNvbXBhcmVJdGVtcyhbLi4uY29tcGFyZUl0ZW1zLCBpdGVtXSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiVGhpcyBQcm9kdWN0IEFscmVhZHkgQWRkZWQgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIFByb2R1Y3QgRnJvbSBjb21wYXJlXHJcbiAgICBjb25zdCByZW1vdmVGcm9tQ29tYXByZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIHNldGNvbXBhcmVJdGVtcyhjb21wYXJlSXRlbXMuZmlsdGVyKChlKT0+KGUuaWQgIT09IGl0ZW0uaWQpKSlcclxuICAgICAgdG9hc3QuZXJyb3IoXCJQcm9kdWN0IFJlbW92ZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3ZhbHVlfSA9IHByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICBjb21wYXJlSXRlbXM6Y29tcGFyZUl0ZW1zLFxyXG4gICAgICAgICAgICBhZGRUb0NvbXBhcmU6YWRkVG9Db21wYXJlLFxyXG4gICAgICAgICAgICByZW1vdmVGcm9tQ29tYXByZTpyZW1vdmVGcm9tQ29tYXByZVxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIENvbnRleHQgYXMgQ29tcGFyZUNvbnRleHQsXHJcbiAgUHJvdmlkZXIgYXMgQ29tcGFyZUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9Db21wYXJlQ29udGV4dFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbiAgXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSBwcm9wcyA9PiB7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZEN1cnIsIHNlbGVjdGVkQ3VycmVuY3ldID0gdXNlU3RhdGUoeyBjdXJyZW5jeTogJ1VTRCcsc3ltYm9sOiAnJCcsIHZhbHVlOjF9KTtcclxuXHJcbiAgY29uc3QgY3VycmVuY3lDb250ZXh0ID0ge1xyXG4gICAgc2VsZWN0ZWRDdXJyLFxyXG4gICAgc2VsZWN0ZWRDdXJyZW5jeVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHt2YWx1ZX0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgc3RhdGU6c2VsZWN0ZWRDdXJyLFxyXG4gICAgICAgICAgY3VycmVuY3lDb250ZXh0OmN1cnJlbmN5Q29udGV4dFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IENvbnN1bWVyIH0gPSBDb250ZXh0O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIEN1cnJlbmN5Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBDdXJyZW5jeUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9DdXJyZW5jeUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5cclxuY29uc3QgZ2V0TG9jYWxDYXJ0SXRlbXMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydExpc3QnKTtcclxuICAgIGlmIChsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ2FydFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQ2FydEl0ZW1zKCkpXHJcbiAgY29uc3QgW2NhcnRUb3RhbCwgc2V0Q2FydFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZSgnSW5TdG9jaycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgVG90YWwgPSBjYXJ0SXRlbXMucmVkdWNlKChhLCBiKSA9PiArYSArICtiLnRvdGFsLCAwKVxyXG4gICAgc2V0Q2FydFRvdGFsKFRvdGFsKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydExpc3QnLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKVxyXG4gIH0sIFtjYXJ0SXRlbXNdKVxyXG5cclxuICAvLyBBZGQgUHJvZHVjdCBUbyBDYXJ0XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0gLHF1YW50aXR5KSA9PiB7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIGNvbnN0IGluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleChpdG0gPT4gaXRtLmlkID09PSBpdGVtLmlkKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gY2FydEl0ZW1zW2luZGV4XTtcclxuICAgICAgY2FydEl0ZW1zW2luZGV4XSA9IHsgLi4uaXRlbSwgLi4uaXRlbSwgcXR5OiBxdWFudGl0eSwgdG90YWw6KGl0ZW0ucHJpY2UgLSAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQgLyAxMDApKSAqIHF1YW50aXR5IH07XHJcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSB7IC4uLml0ZW0sIHF0eTogcXVhbnRpdHksIHRvdGFsOiAoaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCAvIDEwMCkpIH1cclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHByb2R1Y3RdKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgdG9hc3QuZXJyb3IoXCJQcm9kdWN0IFJlbW92ZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICBzZXRDYXJ0SXRlbXMoY2FydEl0ZW1zLmZpbHRlcigoZSkgPT4gKGUuaWQgIT09IGl0ZW0uaWQpKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG1pbnVzUXR5ID0gKCkgPT4ge1xyXG4gICAgaWYgKHF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgIHNldFF1YW50aXR5KHF1YW50aXR5IC0gMSk7XHJcbiAgICAgICAgc2V0U3RvY2soJ0luU3RvY2snKVxyXG4gICAgfVxyXG59XHJcblxyXG4gIGNvbnN0IHBsdXNRdHkgPSAoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uc3RvY2sgPj0gcXVhbnRpdHkpIHtcclxuICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgKyAxKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3RvY2soXCJPdXQgb2YgU3RvY2sgIVwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIC8vIFVwZGF0ZSBQcm9kdWN0IFF1YW50aXR5XHJcbiAgIGNvbnN0IHVwZGF0ZVF0eSA9IChpdGVtLCBxdWFudGl0eSkgPT4ge1xyXG4gICAgaWYocXVhbnRpdHkgPj0gMSApe1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNhcnRJdGVtcy5maW5kSW5kZXgoaXRtID0+IGl0bS5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgaWYoaW5kZXggIT09IC0xKXtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gY2FydEl0ZW1zW2luZGV4XTtcclxuICAgICAgICBjYXJ0SXRlbXNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCAuLi5pdGVtLCBxdHk6IHF1YW50aXR5LCB0b3RhbDogaXRlbS5wcmljZSAqIHF1YW50aXR5ICB9OyBcclxuXHJcbiAgICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXNdKVxyXG4gICAgICAgIHRvYXN0LmluZm8oXCJQcm9kdWN0IFF1YW50aXR5IFVwZGF0ZWQgIVwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHsuLi5pdGVtLCBxdHk6IHF1YW50aXR5LCB0b3RhbDogKGl0ZW0ucHJpY2UgLSAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQgLyAxMDApKSAqIHF1YW50aXR5IH1cclxuICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgcHJvZHVjdF0pXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlByb2R1Y3QgQWRkZWQgVXBkYXRlZCAhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJFbnRlciBWYWxpZCBRdWFudGl0eSAhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgc3RhdGU6IGNhcnRJdGVtcywgY2FydFRvdGFsLHNldFF1YW50aXR5ICxxdWFudGl0eSxzdG9jayxcclxuICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcclxuICAgICAgICByZW1vdmVGcm9tQ2FydDogcmVtb3ZlRnJvbUNhcnQsXHJcbiAgICAgICAgcGx1c1F0eTogcGx1c1F0eSxcclxuICAgICAgICBtaW51c1F0eTptaW51c1F0eSxcclxuICAgICAgICB1cGRhdGVRdHk6dXBkYXRlUXR5XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRDb250ZXh0OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWx0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWx0ZXJDb250ZXh0IGZyb20gJy4vRmlsdGVyQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEZpbHRlclByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBicmFuZCA9IHJvdXRlci5xdWVyeS5icmFuZDsgXHJcbiAgICBjb25zdCBjb2xvciA9IHJvdXRlci5xdWVyeS5jb2xvcjsgXHJcbiAgICBjb25zdCBzaXplID0gcm91dGVyLnF1ZXJ5LnNpemU7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeTtcclxuICAgIGNvbnN0IG1pbiA9IHJvdXRlci5xdWVyeS5taW47XHJcbiAgICBjb25zdCBtYXggPSByb3V0ZXIucXVlcnkubWF4O1xyXG4gICAgbGV0IHNpemVQYXJhbSA9IHNpemUgPyBzaXplLnNwbGl0KFwiLFwiKTpudWxsO1xyXG4gICAgbGV0IHBhcmFtID0gYnJhbmQgPyBicmFuZC5zcGxpdChcIixcIik6W10gXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yeT9jYXRlZ29yeTpcImZhc2hpb25cIik7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRCcmFuZHMsIHNldFNlbGVjdGVkQnJhbmRzXSA9IHVzZVN0YXRlKHBhcmFtP3BhcmFtOltdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENvbG9yLCBzZXRTZWxlY3RlZENvbG9yXSA9IHVzZVN0YXRlKGNvbG9yP2NvbG9yOlwiXCIpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplXSA9IHVzZVN0YXRlKHNpemVQYXJhbT9zaXplUGFyYW06W10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUHJpY2UsIHNldFNlbGVjdGVkUHJpY2VdID0gdXNlU3RhdGUoeyBtaW46bWluP21pbjowLCBtYXg6IG1heD9tYXg6NTAwIH0pO1xyXG4gICAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2ZpbHRlckNoZWNrZWQsIHNldEZpbHRlckNoZWNrZWRdID0gdXNlU3RhdGUoW3t9XSk7XHJcbiAgIFxyXG4gICAgY29uc3QgaGFuZGxlQnJhbmRzID0gKGJyYW5kLCBjaGVja2VkKSA9PiB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gc2VsZWN0ZWRCcmFuZHMuaW5kZXhPZihicmFuZCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHNldElzQ2hlY2tlZCghaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyQ2hlY2tlZChbeyBicmFuZCwgY2hlY2tlZCB9XSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRCcmFuZHMoc2VsZWN0ZWRCcmFuZHMuZmlsdGVyKChlKSA9PiAoZSAhPT0gYnJhbmQpKSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IGJyYW5kLCBjaGVja2VkIH1dKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEJyYW5kcyhbLi4uc2VsZWN0ZWRCcmFuZHMsIGJyYW5kXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpemVzID0gKHNpemUsIGNoZWNrZWQpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gc2VsZWN0ZWRTaXplLmluZGV4T2Yoc2l6ZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IHNpemUsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkU2l6ZShzZWxlY3RlZFNpemUuZmlsdGVyKChlKSA9PiAoZSAhPT0gc2l6ZSkpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQ2hlY2tlZCghaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgc2V0RmlsdGVyQ2hlY2tlZChbeyBzaXplLCBjaGVja2VkIH1dKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFNpemUoWy4uLnNlbGVjdGVkU2l6ZSwgc2l6ZV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZpbHRlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHNlbGVjdGVkQ2F0ZWdvcnksIHNldEZpbHRlckNoZWNrZWQsIHNldFNlbGVjdGVkQ29sb3IsIHNldFNlbGVjdGVkQ2F0ZWdvcnksc2V0U2VsZWN0ZWRCcmFuZHMgLCBzZWxlY3RlZEJyYW5kcywgc2VsZWN0ZWRDb2xvciwgc2VsZWN0ZWRQcmljZSwgaXNDaGVja2VkLCBmaWx0ZXJDaGVja2VkLCBzZWxlY3RlZFNpemUsIHNldFNlbGVjdGVkU2l6ZSxzZXRTZWxlY3RlZFByaWNlLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQnJhbmRzOiBoYW5kbGVCcmFuZHMsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTaXplczogaGFuZGxlU2l6ZXNcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0ZpbHRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyUHJvdmlkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBzZWxlY3RNZW51OiBGdW5jdGlvblxyXG4gIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdE1lbnVdID0gdXNlU3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBtZW51Q29udGV4dCA9IHtcclxuICAgICAgICBzZWxlY3RNZW51XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttZW51Q29udGV4dH0+IHtwcm9wcy5jaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgeyBDb25zdW1lciB9ID0gQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBNZW51Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBNZW51Q29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL01lbnVDb250ZXh0XCI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZXR0aW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNldHRpbmdDb250ZXh0IGZyb20gJy4vU2V0dGluZ0NvbnRleHQnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jdXN0b21pemVyL2NvbmZpZy5qc29uJztcclxuY29uc3QgU2V0dGluZ1Byb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGF5b3V0U3RhdGUsIHNldExheW91dFN0YXRlXSA9IHVzZVN0YXRlKFwiUlRMXCIpO1xyXG4gICAgY29uc3QgW2xheW91dENvbG9yLCBzZXRMYXlvdXRDb2xvcl0gPSB1c2VTdGF0ZShcIiNmZjRjM2JcIik7XHJcbiAgICBjb25zdCBsYXlvdXRGdW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBcIlJUTFwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImx0clwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicnRsXCIpO1xyXG4gICAgICAgICAgICBzZXRMYXlvdXRTdGF0ZShcIkxUUlwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicnRsXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsdHJcIik7XHJcbiAgICAgICAgICAgIHNldExheW91dFN0YXRlKFwiUlRMXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGF5b3V0Q29sb3JGdW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIixpdGVtLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtZGVhZnVsdCcsIGl0ZW0udGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25maWcuY29sb3I9aXRlbS50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXRMYXlvdXRDb2xvcihpdGVtLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFNldHRpbmdDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBsYXlvdXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxheW91dEZ1bjpsYXlvdXRGdW4sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXRDb2xvckZ1bjpsYXlvdXRDb2xvckZ1blxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvU2V0dGluZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCAsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICB3aXNobGlzdEl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb1dpc2g6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21XaXNoOiBGdW5jdGlvblxyXG59XHJcbik7XHJcblxyXG5jb25zdCBnZXRMb2NhbFdpc2hsaXN0SXRlbXMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lzaGxpc3QnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbd2lzaGxpc3RJdGVtcywgc2V0V2lzaGxpc3RJdGVtc10gPSB1c2VTdGF0ZShnZXRMb2NhbFdpc2hsaXN0SXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aXNobGlzdCcsIEpTT04uc3RyaW5naWZ5KHdpc2hsaXN0SXRlbXMpKVxyXG4gICAgfSwgW3dpc2hsaXN0SXRlbXNdKVxyXG5cclxuXHJcbiAgICAvLyBBZGQgUHJvZHVjdCBUbyBXaXNobGlzdFxyXG4gICAgY29uc3QgYWRkVG9XaXNoID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHdpc2hsaXN0SXRlbXMuZmluZEluZGV4KHdpc2ggPT4gd2lzaC5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQcm9kdWN0IEFkZGVkIFN1Y2Nlc3NmdWxseSAhXCIpO1xyXG4gICAgICAgICAgICBzZXRXaXNobGlzdEl0ZW1zKFsuLi53aXNobGlzdEl0ZW1zLCBpdGVtXSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiVGhpcyBQcm9kdWN0IEFscmVhZHkgQWRkZWQgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIFByb2R1Y3QgRnJvbSBXaXNobGlzdFxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbVdpc2ggPSAoaXRlbSkgPT4ge1xyXG4gICAgICBzZXRXaXNobGlzdEl0ZW1zKHdpc2hsaXN0SXRlbXMuZmlsdGVyKChlKT0+KGUuaWQgIT09IGl0ZW0uaWQpKSlcclxuICAgICAgdG9hc3QuZXJyb3IoXCJQcm9kdWN0IFJlbW92ZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3ZhbHVlfSA9IHByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICB3aXNobGlzdEl0ZW1zOndpc2hsaXN0SXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvV2lzaDphZGRUb1dpc2gsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21XaXNoOnJlbW92ZUZyb21XaXNoXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBXaXNobGlzdENvbnRleHQsXHJcbiAgUHJvdmlkZXIgYXMgV2lzaGxpc3RDb250ZXh0UHJvdmlkZXIsXHJcbn0gZnJvbSBcIi4vV2lzaGxpc3RDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lU2V0dGluZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9jdXN0b21pemVyL3RoZW1lLXNldHRpbmdzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFRhcFRvcCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi93aWRnZXRzL1RhcC1Ub3AnO1xuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tICdyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdCc7XG5pbXBvcnQgeyBNZW51Q29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9tZW51L01lbnVDb250ZXh0JztcbmltcG9ydCBDYXJ0Q29udGV4dFByb3ZpZGVyIGZyb20gJy4uL2hlbHBlcnMvY2FydC9DYXJ0Q29udGV4dCc7XG5pbXBvcnQgeyBXaXNobGlzdENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvd2lzaGxpc3QvV2lzaGxpc3RDb250ZXh0JztcbmltcG9ydCBGaWx0ZXJQcm92aWRlciBmcm9tICcuLi9oZWxwZXJzL2ZpbHRlci9GaWx0ZXJQcm92aWRlcic7XG5pbXBvcnQgU2V0dGluZ1Byb3ZpZGVyIGZyb20gJy4uL2hlbHBlcnMvdGhlbWUtc2V0dGluZy9TZXR0aW5nUHJvdmlkZXInO1xuaW1wb3J0IHsgQ29tcGFyZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dCc7XG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcbiAgICBjb25zdCB1cmwgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgc2V0VXJsKHVybCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAgICAgIFxuICAgIH0sIDEwMDApO1xuXG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBpc0xvYWRpbmcgP1xuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItd3JhcHBlclwiID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsID09PSAnQ2hyaXN0bWFzJyA/XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxNZXNzZW5nZXJDdXN0b21lckNoYXRcbiAgICAgICAgICAgICAgcGFnZUlkPVwiMjEyMzQzODgwNDU3NDY2MFwiXG4gICAgICAgICAgICAgIGFwcElkPVwiNDA2MjUyOTMwNzUyNDEyXCJcbiAgICAgICAgICAgICAgaHRtbFJlZj1cImh0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8dGl0bGU+VmFubHVuZSAtIEJlc3QgZWNvbW1lcmNlIGZvciBHYW1lcnM8L3RpdGxlPlxuICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFNldHRpbmdQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8Q29tcGFyZUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPENhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPFdpc2hsaXN0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmlsdGVyUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9XaXNobGlzdENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJ0Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgPC9DdXJyZW5jeUNvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIDxUaGVtZVNldHRpbmdzIC8+XG4gICAgICAgICAgICAgICAgPC9Db21wYXJlQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICA8L1NldHRpbmdQcm92aWRlcj5cbiAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgICAgIDxUYXBUb3AgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgfVxuXG4gICAgPC8+XG4gIClcbn0iLCJleHBvcnQgY29uc3QgUHJvZHVjdDMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgIGFycm93czpmYWxzZSxcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OjIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn1cbmV4cG9ydCBjb25zdCB0b29sc19wcm9kdWN0XzQgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICBhcnJvd3M6ZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdDQgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXJyb3dzOmZhbHNlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdDcgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgIGFycm93czpmYWxzZSxcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OjIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuXG5leHBvcnQgY29uc3QgUHJvZHVjdDUgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0NiA9IHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgYXJyb3dzOmZhbHNlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IFRlYW00ID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiAzMDAsXG4gICAgc2xpZGVzVG9TaG93OiA0LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNTg2LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuXG5cbmV4cG9ydCBjb25zdCBTbGlkZXIyID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59XG5cbmV4cG9ydCBjb25zdCBTbGlkZXIzID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiAzMDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn1cbmV4cG9ydCBjb25zdCBTbGlkZXI0ID0ge1xuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU4NixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59XG5leHBvcnQgY29uc3QgU2xpZGVyNSA9IHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzNjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IFNsaWRlcjYgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDYsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IFNsaWRlcjcgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDcsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDcsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59XG5cbmV4cG9ydCBjb25zdCBTbGlkZVVwRG93biA9IGZ1bmN0aW9uKGNsYXNzbmFtZXMpIHtcbiAgICAgICAgdmFyIGFjY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2NsYXNzbmFtZXMrXCIgaDRcIik7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChhY2NvcmRzLCBmdW5jdGlvbihlbGVtdCkge1xuICAgICAgICAgICAgZWxlbXQuaW5uZXJIVE1MICs9ICc8c3BhbiBjbGFzcz1cImFjY29yZGluZy1tZW51XCI+PC9zcGFuPic7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIGFuY2hvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzbmFtZXMpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYW5jaG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFuY2hvciA9IGFuY2hvcnNbaV07XG4gICAgICAgICAgICBhbmNob3Iub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrY2xhc3NuYW1lcyk7XG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCBmdW5jdGlvbihlbGVtdCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtdC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGVsLm9mZnNldEhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gYGhlaWdodCwgbWFyZ2luLCBwYWRkaW5nYFxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNTAwbXMnXG4gICAgICAgICAgICAgICAgICAgIGVsLm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IDBcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUubWFyZ2luVG9wID0gMFxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKVxuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheVxuXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gYGhlaWdodCwgbWFyZ2luLCBwYWRkaW5nYFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc1MDBtcydcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMG1zJ1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXG5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ID09PSAnbm9uZScpIGRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMG1zJ1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2NsYXNzbmFtZXMpO1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIGZ1bmN0aW9uKGVsZW10KSB7XG4gICAgICAgICAgICBsZXQgZWwgPSBlbGVtdC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBlbC5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuICAgICAgICB9KTtcblxufVxuXG5cbi8vIFNWRyBJY29uc1xuXG5leHBvcnQgY29uc3Qgc3ZnRnJlZVNoaXBwaW5nID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIC0xMTcgNjc5Ljk5ODkyIDY3OVwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTEyLjM0NzY1NiAzNzguMzgyODEyaDM3LjM5MDYyNWM0LjM3MTA5NCAzNy43MTQ4NDQgMzYuMzE2NDA3IDY2LjE2NDA2MyA3NC4yNzczNDQgNjYuMTY0MDYzIDM3Ljk2ODc1IDAgNjkuOTA2MjUtMjguNDQ5MjE5IDc0LjI4MTI1LTY2LjE2NDA2M2gyNDEuNzg5MDYzYzQuMzgyODEyIDM3LjcxNDg0NCAzNi4zMTY0MDYgNjYuMTY0MDYzIDc0LjI3NzM0MyA2Ni4xNjQwNjMgMzcuOTY4NzUgMCA2OS45MDIzNDQtMjguNDQ5MjE5IDc0LjI4NTE1Ny02Ni4xNjQwNjNoNzguODkwNjI0YzYuODgyODEzIDAgMTIuNDYwOTM4LTUuNTc4MTI0IDEyLjQ2MDkzOC0xMi40NjA5Mzd2LTM1Mi45NTcwMzFjMC02Ljg4MjgxMy01LjU3ODEyNS0xMi40NjQ4NDQtMTIuNDYwOTM4LTEyLjQ2NDg0NGgtNDMyLjQ3NjU2MmMtNi44NzUgMC0xMi40NTcwMzEgNS41ODIwMzEtMTIuNDU3MDMxIDEyLjQ2NDg0NHY2OS45MTQwNjJoLTEwNS41NzAzMTNjLTQuMDc0MjE4LjAxMTcxOS03Ljg5MDYyNSAyLjAwNzgxMy0xMC4yMTg3NSA1LjM2MzI4MmwtNjguMTcxODc1IDk3LjU4MjAzMS0yNi42Njc5NjkgMzcuMzkwNjI1LTkuNzIyNjU2IDEzLjgzNTkzN2MtMS40NTcwMzEgMi4wODIwMzEtMi4yNDIxODcyIDQuNTU4NTk0LTIuMjQ5OTk5NzUgNy4xMDE1NjN2MTIxLjM5ODQzN2MtLjA5NzY1NjI1IDMuMzQzNzUgMS4xNTYyNDk3NSA2LjU4OTg0NCAzLjQ3NjU2Mjc1IDkuMDAzOTA3IDIuMzIwMzEyIDIuNDE3OTY4IDUuNTE5NTMxIDMuNzk2ODc0IDguODY3MTg3IDMuODI4MTI0em0xMTEuNDE3OTY5IDM3LjM4NjcxOWMtMjcuNTI3MzQ0IDAtNDkuODUxNTYzLTIyLjMyMDMxMi00OS44NTE1NjMtNDkuODQ3NjU2IDAtMjcuNTM1MTU2IDIyLjMyNDIxOS00OS44NTU0NjkgNDkuODUxNTYzLTQ5Ljg1NTQ2OSAyNy41MzUxNTYgMCA0OS44NTU0NjkgMjIuMzIwMzEzIDQ5Ljg1NTQ2OSA0OS44NTU0NjkgMCAyNy42MzI4MTMtMjIuMjE4NzUgNTAuMTMyODEzLTQ5Ljg1NTQ2OSA1MC40NzI2NTZ6bTM5MC4zNDc2NTYgMGMtMjcuNTMxMjUgMC00OS44NTU0NjktMjIuMzIwMzEyLTQ5Ljg1NTQ2OS00OS44NDc2NTYgMC0yNy41MzUxNTYgMjIuMzI0MjE5LTQ5Ljg1NTQ2OSA0OS44NTU0NjktNDkuODU1NDY5IDI3LjUzOTA2MyAwIDQ5Ljg1NTQ2OSAyMi4zMjAzMTMgNDkuODU1NDY5IDQ5Ljg1NTQ2OS4wMDM5MDYgMjcuNjMyODEzLTIyLjIxODc1IDUwLjEzMjgxMy00OS44NTU0NjkgNTAuNDcyNjU2em0xNDAuNzEwOTM4LTM5MC4zNDM3NXYyMjMuMzQzNzVoLTMzOC4zNzVjLTYuODgyODEzIDAtMTIuNDY0ODQ0IDUuNTc4MTI1LTEyLjQ2NDg0NCAxMi40NjA5MzggMCA2Ljg4MjgxMiA1LjU4MjAzMSAxMi40NjQ4NDMgMTIuNDY0ODQ0IDEyLjQ2NDg0M2gzMzguMzc1djc5Ljc2MTcxOWgtNjYuNDIxODc1Yy00LjM4MjgxMy0zNy43MTA5MzctMzYuMzIwMzEzLTY2LjE1NjI1LTc0LjI4OTA2My02Ni4xNTYyNS0zNy45NjA5MzcgMC02OS44OTg0MzcgMjguNDQ1MzEzLTc0LjI3NzM0MyA2Ni4xNTYyNWgtMTkyLjMwODU5NHYtMjcxLjMyNDIxOWg4OS45ODA0NjhjNi44ODI4MTMgMCAxMi40NjQ4NDQtNS41ODIwMzEgMTIuNDY0ODQ0LTEyLjQ2NDg0MyAwLTYuODgyODEzLTUuNTgyMDMxLTEyLjQ2NDg0NC0xMi40NjQ4NDQtMTIuNDY0ODQ0aC04OS45ODA0Njh2LTMxLjc3NzM0NHptLTUzMS4zMDQ2ODggODIuMzgyODEzaDk5LjcwMzEyNXYyNDUuNjQ4NDM3aC0yNC45MjU3ODFjLTQuMzc1LTM3LjcxMDkzNy0zNi4zMTI1LTY2LjE1NjI1LTc0LjI4MTI1LTY2LjE1NjI1LTM3Ljk2MDkzNyAwLTY5LjkwNjI1IDI4LjQ0NTMxMy03NC4yNzczNDQgNjYuMTU2MjVoLTI0LjkyOTY4N3YtMTA1LjMxNjQwNmwzLjczODI4MS01LjM1OTM3NWgxNTIuMDU0Njg3YzYuODgyODEzIDAgMTIuNDYwOTM4LTUuNTc0MjE5IDEyLjQ2MDkzOC0xMi40NTcwMzF2LTkyLjIyNjU2M2MwLTYuODgyODEyLTUuNTc4MTI1LTEyLjQ2NDg0NC0xMi40NjA5MzgtMTIuNDY0ODQ0aC02OS43OTY4NzR6bS0zMC4xNjAxNTYgNDNoNzQuNzc3MzQ0djY3LjI5Njg3NWgtMTIyLjI2NTYyNXptMCAwXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+JztcbmV4cG9ydCBjb25zdCBzdmdzZXJ2aWNlID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0ODAgNDgwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIj5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ3Miw0MzJoLTI0VjI4MGMtMC4wMDMtNC40MTgtMy41ODgtNy45OTctOC4wMDYtNy45OTRjLTIuNjA3LDAuMDAyLTUuMDUsMS4yNzQtNi41NDYsMy40MWwtMTEyLDE2MCAgICAgYy0yLjUzMiwzLjYyMS0xLjY0OSw4LjYwOSwxLjk3MiwxMS4xNGMxLjM0MywwLjkzOSwyLjk0MSwxLjQ0Myw0LjU4LDEuNDQ0aDEwNHYyNGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04di0yNGgyNCAgICAgYzQuNDE4LDAsOC0zLjU4Miw4LThTNDc2LjQxOCw0MzIsNDcyLDQzMnogTTQzMiw0MzJoLTg4LjY0TDQzMiwzMDUuMzc2VjQzMnpcIiBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMjgsNDY0aC05NC43MTJsODguMDU2LTEwMy42ODhjMC4yLTAuMjM4LDAuMzg3LTAuNDg2LDAuNTYtMC43NDRjMTYuNTY2LTI0LjUxOCwxMS4wNDgtNTcuNzEzLTEyLjU2LTc1LjU1MiAgICAgYy0yOC43MDUtMjAuNjI1LTY4LjY5NS0xNC4wNzQtODkuMzE5LDE0LjYzMUMyMTIuMjA0LDMwOS41MzIsMjA3Ljk5OCwzMjIuNTk3LDIwOCwzMzZjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOCAgICAgYy0wLjAwMy0yNi41MSwyMS40ODYtNDguMDAyLDQ3Ljk5NS00OC4wMDVjMTAuMDQ4LTAuMDAxLDE5Ljg0MywzLjE1MSwyOC4wMDUsOS4wMTNjMTYuNTM3LDEyLjY3MSwyMC4zODgsMzYuMDA3LDguOCw1My4zMiAgICAgbC05OC44OTYsMTE2LjQ5NmMtMi44NTksMy4zNjktMi40NDUsOC40MTcsMC45MjQsMTEuMjc2YzEuNDQ1LDEuMjI2LDMuMjc3LDEuODk5LDUuMTcyLDEuOWgxMTJjNC40MTgsMCw4LTMuNTgyLDgtOCAgICAgUzMzMi40MTgsNDY0LDMyOCw0NjR6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjE2LjE3Niw0MjQuMTUyYzAuMTY3LTQuNDE1LTMuMjc4LTguMTI5LTcuNjkzLTguMjk2Yy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMCAgICAgQzEwNC4xMSw0MTEuOTgyLDIwLjM0MSwzMjguMzYzLDE2LjI4LDIyNEg0OGM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOEgxNi4yOEMyMC4yODMsMTAzLjgyMSwxMDMuODIsMjAuMjg3LDIwOCwxNi4yODggICAgIFY0MGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04VjE2LjI4OGMxMDIuNzU0LDMuOTc0LDE4NS42ODYsODUuMzQsMTkxLjYxNiwxODhsLTMxLjItMzEuMiAgICAgYy0zLjE3OC0zLjA3LTguMjQyLTIuOTgyLTExLjMxMiwwLjE5NmMtMi45OTQsMy4xLTIuOTk0LDguMDE1LDAsMTEuMTE2bDQ0LjY1Niw0NC42NTZjMC44NDEsMS4wMTgsMS45MjUsMS44MDcsMy4xNTIsMi4yOTYgICAgIGMwLjMxMywwLjA5NCwwLjYzMSwwLjE3MiwwLjk1MiwwLjIzMmMwLjU0OSwwLjE5OCwxLjExNywwLjMzNSwxLjY5NiwwLjQwOGMwLjA4LDAsMC4xNTIsMCwwLjIzMiwwYzAuMDgsMCwwLjE1MiwwLDAuMjI0LDAgICAgIGMwLjYwOS0wLjA0NiwxLjIxMS0wLjE2NCwxLjc5Mi0wLjM1MmMwLjMyOS0wLjA0LDAuNjU1LTAuMTAxLDAuOTc2LTAuMTg0YzEuMDgzLTAuMzg1LDIuMDY5LTEuMDAyLDIuODg4LTEuODA4bDQ1LjI2NC00NS4yNDggICAgIGMzLjA2OS0zLjE3OCwyLjk4Mi04LjI0Mi0wLjE5Ni0xMS4zMTJjLTMuMS0yLjk5NC04LjAxNS0yLjk5NC0xMS4xMTYsMGwtMzEuOTc2LDMxLjk1MiAgICAgQzQyNS45MzMsOTAuMzcsMzMxLjM4LDAuMjgxLDIxNi41NjgsMC4xMTJDMjE2LjM2OCwwLjEwNCwyMTYuMiwwLDIxNiwwcy0wLjM2OCwwLjEwNC0wLjU2OCwwLjExMiAgICAgQzk2LjU4MiwwLjI3NSwwLjI3NSw5Ni41ODIsMC4xMTIsMjE1LjQzMkMwLjExMiwyMTUuNjMyLDAsMjE1LjgsMCwyMTZzMC4xMDQsMC4zNjgsMC4xMTIsMC41NjggICAgIGMwLjE5OSwxMTUuOTE3LDkxLjkzOSwyMTAuOTcsMjA3Ljc3NiwyMTUuMjhoMC4yOTZDMjEyLjQ4Myw0MzEuODQ3LDIxNi4wMTMsNDI4LjQ0OCwyMTYuMTc2LDQyNC4xNTJ6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIzLjQ4LDEwOC41MmMtMy4xMjQtMy4xMjMtOC4xODgtMy4xMjMtMTEuMzEyLDBMMjI2LjIsMTk0LjQ4Yy02LjQ5NS0yLjg5Ni0xMy45MTQtMi44OTYtMjAuNDA4LDBsLTQwLjcwNC00MC43MDQgICAgIGMtMy4xNzgtMy4wNjktOC4yNDMtMi45ODEtMTEuMzEyLDAuMTk3Yy0yLjk5NCwzLjEtMi45OTQsOC4wMTUsMCwxMS4xMTVsNDAuNjI0LDQwLjYyNGMtNS43MDQsMTEuOTQtMC42NDgsMjYuMjQ0LDExLjI5MywzMS45NDcgICAgIGM5LjE2NSw0LjM3OCwyMC4wOTUsMi41MDEsMjcuMjc1LTQuNjgzYzcuMjE5LTcuMTU4LDkuMDc4LTE4LjExOCw0LjYyNC0yNy4yNTZsODUuODg4LTg1Ljg4OCAgICAgQzMyNi42MDMsMTE2LjcwOCwzMjYuNjAzLDExMS42NDQsMzIzLjQ4LDEwOC41MnogTTIyMS42NTgsMjIxLjY1NGMtMC4wMDEsMC4wMDEtMC4wMDEsMC4wMDEtMC4wMDIsMC4wMDIgICAgIGMtMy4xNjQsMy4wMjUtOC4xNDgsMy4wMjUtMTEuMzEyLDBjLTMuMTI1LTMuMTI0LTMuMTI1LTguMTg5LTAuMDAyLTExLjMxNGMzLjEyNC0zLjEyNSw4LjE4OS0zLjEyNSwxMS4zMTQtMC4wMDIgICAgIEMyMjQuNzgxLDIxMy40NjQsMjI0Ljc4MSwyMTguNTMsMjIxLjY1OCwyMjEuNjU0elwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPic7XG5cbmV4cG9ydCBjb25zdCBzdmdvZmZlciA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAtMTQgNTEyLjAwMDAxIDUxMlwiPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTEzNi45NjQ4NDQgMzA4LjIzNDM3NWM0Ljc4MTI1LTIuNzU3ODEzIDYuNDE3OTY4LTguODc4OTA2IDMuNjYwMTU2LTEzLjY2MDE1Ni0yLjc2MTcxOS00Ljc3NzM0NC04Ljg3ODkwNi02LjQxNzk2OS0xMy42NjAxNTYtMy42NjAxNTctNC43ODEyNSAyLjc2MTcxOS02LjQyMTg3NSA4Ljg4MjgxMy0zLjY2MDE1NiAxMy42NjAxNTcgMi43NTc4MTIgNC43ODEyNSA4Ljg3ODkwNiA2LjQyMTg3NSAxMy42NjAxNTYgMy42NjAxNTZ6bTAgMFwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtOTUuOTg0Mzc1IDM3Ny4yNTM5MDYgNTAuMzU5Mzc1IDg3LjIzMDQ2OWMxMC44NjcxODggMTguODQzNzUgMzUuMzEyNSAyNS44MjAzMTMgNTQuNjQ0NTMxIDE0LjY0NDUzMSAxOS4xMjg5MDctMTEuMDU0Njg3IDI1LjcwMzEyNS0zNS40OTYwOTQgMTQuNjM2NzE5LTU0LjY0MDYyNWwtMzAtNTEuOTY4NzUgMjUuOTgwNDY5LTE1YzQuNzgxMjUtMi43NjU2MjUgNi40MjE4NzUtOC44Nzg5MDYgMy42NjAxNTYtMTMuNjYwMTU2bC0xMy4wMDM5MDYtMjIuNTIzNDM3YzEuNTUwNzgxLS4zMDA3ODIgMTEuNzQ2MDkzLTIuMzAwNzgyIDE5MS41MzkwNjItMzcuNTcwMzEzIDIyLjIyNjU2My0xLjIwNzAzMSAzNS41NDI5NjktMjUuNTE1NjI1IDI0LjMxNjQwNy00NC45NDkyMTlsLTMzLjIzNDM3Ni01Ny41NjI1IDIxLjIzODI4Mi0zMi4xNjc5NjhjMi4wODU5MzctMy4xNjQwNjMgMi4yMTA5MzctNy4yMzA0NjkuMzE2NDA2LTEwLjUxMTcxOWwtMjAtMzQuNjQwNjI1Yy0xLjg5NDUzMS0zLjI4MTI1LTUuNDkyMTg4LTUuMjAzMTI1LTkuMjYxNzE5LTQuOTgwNDY5bC0zOC40NzI2NTYgMi4zMDg1OTQtMzYuODk0NTMxLTYzLjkwNjI1Yy01LjM0Mzc1LTkuMjU3ODEzLTE0LjkxNzk2OS0xNC44NjMyODEtMjUuNjA1NDY5LTE0Ljk5NjA5NC0uMTI4OTA2LS4wMDM5MDYtLjI1MzkwNi0uMDAzOTA2LS4zODI4MTMtLjAwMzkwNi0xMC4zMjgxMjQgMC0xOS43MDMxMjQgNS4xNDA2MjUtMjUuMjU3ODEyIDEzLjgzMjAzMWwtMTMwLjYzMjgxMiAxNjYuNDE0MDYyLTg0LjkyNTc4MiA0OS4wMzEyNWMtMzMuNDAyMzQ0IDE5LjI3NzM0NC00NC45NzI2NTYgNjIuMTI4OTA3LTI1LjYyMTA5NCA5NS42MjEwOTQgMTcuNjc5Njg4IDMwLjYyNSA1NC45NTMxMjYgNDIuNjcxODc1IDg2LjYwMTU2MyAzMHptMTAyLjMyNDIxOSA1Ny4yMzgyODJjNS41MjM0MzcgOS41NTQ2ODcgMi4yNTM5MDYgMjEuNzgxMjUtNy4zMjgxMjUgMjcuMzE2NDA2LTkuNjEzMjgxIDUuNTU4NTk0LTIxLjg1NTQ2OSAyLjE0NDUzMS0yNy4zMTY0MDctNy4zMjAzMTNsLTUwLTg2LjYxMzI4MSAzNC42NDA2MjYtMjBjNTcuODY3MTg3IDEwMC4yNDIxODggNDkuMDc0MjE4IDg1LjAxMTcxOSA1MC4wMDM5MDYgODYuNjE3MTg4em0tMjIuNjgzNTk0LTc5LjI5Njg3Ni0xMC0xNy4zMjAzMTIgMTcuMzIwMzEyLTEwIDEwIDE3LjMyMDMxMnptMTk2LjU4MjAzMS0yMzUuOTEwMTU2IDEzLjgyMDMxMyAyMy45Mzc1LTEyLjMyNDIxOSAxOC42NjQwNjMtMjMuODIwMzEzLTQxLjI2MTcxOXptLTEwNC45MTc5NjktNzIuMTMyODEyYzIuNjgzNTk0LTQuMzkwNjI1IDYuOTQxNDA3LTQuODQzNzUgOC42Njc5NjktNC43OTY4NzUgMS43MDcwMzEuMDE5NTMxIDUuOTYwOTM4LjU1MDc4MSA4LjUyNzM0NCA0Ljk5NjA5M2wxMTYuMzEyNSAyMDEuNDY0ODQ0YzMuNzg5MDYzIDYuNTU4NTk0LS44MTY0MDYgMTQuODA0Njg4LTguNDE0MDYzIDE0Ljk5MjE4OC0xLjM2MzI4MS4wMzEyNS0xLjk5MjE4Ny4yNzczNDQtNS40ODQzNzQuOTI5Njg3bC0xMjMuMDM1MTU3LTIxMy4xMDU0NjljMi41ODIwMzEtMy4zMjAzMTIgMi45MTQwNjMtMy42NDA2MjQgMy40MjU3ODEtNC40ODA0Njh6bS0xNi43MzQzNzQgMjEuNDMzNTk0IDExNS41OTc2NTYgMjAwLjIyMjY1Ni0xNzQuNDYwOTM4IDM0LjIxODc1LTUzLjA0Njg3NS05MS44Nzg5MDZ6bS0yMjMuODUxNTYzIDI2OC42Njc5NjhjLTQuMzkwNjI1LTcuNTk3NjU2LTYuNzEwOTM3LTE2LjIyMjY1Ni02LjcxMDkzNy0yNC45NDkyMTggMC0xNy44MzU5MzggOS41ODU5MzctMzQuNDQ1MzEzIDI1LjAxMTcxOC00My4zNTE1NjNsNzcuOTQxNDA2LTQ1IDUwIDg2LjYwMTU2My03Ny45NDE0MDYgNDUuMDAzOTA2Yy0yMy44Nzg5MDYgMTMuNzgxMjUtNTQuNTE1NjI1IDUuNTcwMzEyLTY4LjMwMDc4MS0xOC4zMDQ2ODh6bTAgMFwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTA1Ljk4NDM3NSAzMTQuNTc0MjE5Yy0yLjc2MTcxOS00Ljc4MTI1LTguODc4OTA2LTYuNDIxODc1LTEzLjY2MDE1Ni0zLjY2MDE1N2wtMTcuMzIwMzEzIDEwYy00Ljc3MzQzNyAyLjc1NzgxMy0xMC45MDIzNDQgMS4xMTMyODItMTMuNjYwMTU2LTMuNjYwMTU2LTIuNzYxNzE5LTQuNzgxMjUtOC44Nzg5MDYtNi40MjE4NzUtMTMuNjYwMTU2LTMuNjYwMTU2cy02LjQyMTg3NSA4Ljg3ODkwNi0zLjY2MDE1NiAxMy42NjAxNTZjOC4yMzA0NjggMTQuMjU3ODEzIDI2LjU4OTg0MyAxOS4yODUxNTYgNDAuOTgwNDY4IDEwLjk4MDQ2OWwxNy4zMjAzMTMtMTBjNC43ODEyNS0yLjc2MTcxOSA2LjQyMTg3NS04Ljg3NSAzLjY2MDE1Ni0xMy42NjAxNTZ6bTAgMFwiXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDk3LjEzNjcxOSA0My43NDYwOTQtNTUuNzIyNjU3IDMxLjAwNzgxMmMtNC44MjQyMTggMi42ODc1LTYuNTYyNSA4Ljc3NzM0NC0zLjg3NSAxMy42MDE1NjMgMi42Nzk2ODggNC44MjAzMTIgOC43NjU2MjYgNi41NjY0MDYgMTMuNjAxNTYzIDMuODc1bDU1LjcxODc1LTMxLjAwNzgxM2M0LjgyODEyNS0yLjY4NzUgNi41NjI1LTguNzc3MzQ0IDMuODc1LTEzLjYwMTU2Mi0yLjY4MzU5NC00LjgyODEyNS04Ljc3MzQzNy02LjU2MjUtMTMuNTk3NjU2LTMuODc1em0wIDBcIlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTQ5MS4yOTI5NjkgMTQ3LjMxNjQwNi0zOC42MzY3MTktMTAuMzUxNTYyYy01LjMzNTkzOC0xLjQyOTY4OC0xMC44MjAzMTIgMS43MzQzNzUtMTIuMjUgNy4wNzAzMTItMS40Mjk2ODggNS4zMzU5MzggMS43MzgyODEgMTAuODE2NDA2IDcuMDc0MjE5IDEyLjI0NjA5NGwzOC42NDA2MjUgMTAuMzUxNTYyYzUuMzY3MTg3IDEuNDQxNDA3IDEwLjgyNDIxOC0xLjc3MzQzNyAxMi4yNDYwOTQtNy4wNzAzMTIgMS40Mjk2ODctNS4zMzU5MzgtMS43MzgyODItMTAuODIwMzEyLTcuMDc0MjE5LTEyLjI0NjA5NHptMCAwXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0zOTQuMTk5MjE5IDcuNDE0MDYyLTEwLjM2MzI4MSAzOC42NDA2MjZjLTEuNDI5Njg4IDUuMzM1OTM3IDEuNzM0Mzc0IDEwLjgxNjQwNiA3LjA3MDMxMiAxMi4yNSA1LjMzMjAzMSAxLjQyNTc4MSAxMC44MTY0MDYtMS43MzA0NjkgMTIuMjUtNy4wNzAzMTNsMTAuMzU5Mzc1LTM4LjY0MDYyNWMxLjQyOTY4Ny01LjMzNTkzOC0xLjczNDM3NS0xMC44MjAzMTItNy4wNzAzMTMtMTIuMjUtNS4zMzIwMzEtMS40Mjk2ODgtMTAuODE2NDA2IDEuNzM0Mzc1LTEyLjI0NjA5MyA3LjA3MDMxMnptMCAwXCJcXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+JztcbmV4cG9ydCBjb25zdCBzdmdwYXltZW50ID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCI+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ5OC40MDksMTc1LjcwNkwzMzYuMjgzLDEzLjU4MmMtOC43NTItOC43NTEtMjAuNDIzLTEzLjU3MS0zMi44NjUtMTMuNTcxYy0xMi40NDEsMC0yNC4xMTMsNC44MTgtMzIuODY1LDEzLjU2OSAgICAgTDEzLjU3MSwyNzAuNTYzQzQuODIsMjc5LjMxNSwwLDI5MC45ODUsMCwzMDMuNDI3YzAsMTIuNDQyLDQuODIsMjQuMTE0LDEzLjU3MSwzMi44NjRsMTkuOTkyLDE5Ljk5MiAgICAgYzAuMDAyLDAuMDAxLDAuMDAzLDAuMDAzLDAuMDA1LDAuMDA1YzAuMDAyLDAuMDAyLDAuMDA0LDAuMDA0LDAuMDA2LDAuMDA2bDEzNC4zNiwxMzQuMzZIMTQ5LjMzICAgICBjLTUuODksMC0xMC42NjYsNC43NzUtMTAuNjY2LDEwLjY2NmMwLDUuODksNC43NzYsMTAuNjY2LDEwLjY2NiwxMC42NjZoNTkuMTg5YzAuMDE0LDAsMC4wMjcsMC4wMDEsMC4wNDEsMC4wMDEgICAgIHMwLjAyNy0wLjAwMSwwLjA0MS0wLjAwMWwxNTQuMDUzLDAuMDAyYzUuODksMCwxMC42NjYtNC43NzYsMTAuNjY2LTEwLjY2NmMwLTUuODkxLTQuNzc2LTEwLjY2Ni0xMC42NjYtMTAuNjY2bC0xMTMuNDY0LTAuMDAyICAgICBMNDk4LjQxLDI0MS40MzRDNTE2LjUzLDIyMy4zMTIsNTE2LjUzLDE5My44MjYsNDk4LjQwOSwxNzUuNzA2eiBNNDgzLjMyNSwyMjYuMzVMMjI2LjM0MSw0ODMuMzM0ICAgICBjLTQuNzEzLDQuNzEyLTExLjAxMyw3LjMxLTE3Ljc0Miw3LjMyaC0wLjA4MWMtNi43MjctMC4wMTEtMTMuMDI1LTIuNjA4LTE3LjczNi03LjMyTDU2LjE5NSwzNDguNzQ2TDMwMi45OSwxMDEuOTQ5ICAgICBjNC4xNjUtNC4xNjUsNC4xNjUtMTAuOTE5LDAtMTUuMDg0Yy00LjE2Ni00LjE2NS0xMC45MTgtNC4xNjUtMTUuMDg1LDAuMDAxTDQxLjExLDMzMy42NjNsLTEyLjQ1Ni0xMi40NTYgICAgIGMtNC43MjEtNC43MjEtNy4zMjEtMTEuMDM1LTcuMzIxLTE3Ljc3OWMwLTYuNzQ0LDIuNi0xMy4wNTksNy4zMjItMTcuNzgxTDI4NS42MzcsMjguNjY1YzQuNzIyLTQuNzIxLDExLjAzNy03LjMyMSwxNy43ODEtNy4zMjEgICAgIGM2Ljc0NCwwLDEzLjA1OSwyLjYsMTcuNzgxLDcuMzIybDU3LjcwMyw1Ny43MDJsLTI0Ni43OTgsMjQ2LjhjLTQuMTY1LDQuMTY0LTQuMTY1LDEwLjkxOCwwLDE1LjA4NSAgICAgYzIuMDgzLDIuMDgyLDQuODEzLDMuMTIzLDcuNTQyLDMuMTIzYzIuNzI5LDAsNS40NTktMS4wNDIsNy41NDItMy4xMjRsMjQ2Ljc5OC0yNDYuNzk5bDg5LjMzOSw4OS4zMzYgICAgIEM0OTMuMTI4LDIwMC41OTMsNDkzLjEyNywyMTYuNTQ2LDQ4My4zMjUsMjI2LjM1elwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNjIuODAxLDMwOC4wNjRjLTQuMTY1LTQuMTY1LTEwLjkxNy00LjE2NC0xNS4wODUsMGwtODMuOTM0LDgzLjkzM2MtNC4xNjUsNC4xNjUtNC4xNjUsMTAuOTE4LDAsMTUuMDg1ICAgICBjMi4wODMsMi4wODMsNC44MTMsMy4xMjQsNy41NDIsMy4xMjRjMi43MjksMCw1LjQ1OS0xLjA0Miw3LjU0Mi0zLjEyNGw4My45MzQtODMuOTMzICAgICBDMjY2Ljk2NiwzMTguOTgyLDI2Ni45NjYsMzEyLjIyOSwyNjIuODAxLDMwOC4wNjR6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyOC4zNzUsMzg3Ljc0MWwtMzQuNDI1LDM0LjQyNWMtNC4xNjUsNC4xNjUtNC4xNjUsMTAuOTE5LDAsMTUuMDg1YzIuMDgzLDIuMDgyLDQuODEzLDMuMTI0LDcuNTQyLDMuMTI0ICAgICBjMi43MzEsMCw1LjQ1OS0xLjA0Miw3LjU0Mi0zLjEyNGwzNC40MjUtMzQuNDI1YzQuMTY1LTQuMTY1LDQuMTY1LTEwLjkxOSwwLTE1LjA4NSAgICAgQzIzOS4yOTQsMzgzLjU3NSwyMzIuNTQzLDM4My41NzUsMjI4LjM3NSwzODcuNzQxelwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNjAuMDU0LDM1Ni4wNjVsLTQuNTI1LDQuNTI0Yy00LjE2Niw0LjE2NS00LjE2NiwxMC45MTgtMC4wMDEsMTUuMDg1YzIuMDgyLDIuMDgzLDQuODEzLDMuMTI1LDcuNTQyLDMuMTI1ICAgICBjMi43MjksMCw1LjQ1OS0xLjA0Miw3LjU0MS0zLjEyNWw0LjUyNS00LjUyNGM0LjE2Ni00LjE2NSw0LjE2Ni0xMC45MTgsMC4wMDEtMTUuMDg0ICAgICBDMjcwLjk3NCwzNTEuOTAxLDI2NC4yMTksMzUxLjksMjYwLjA1NCwzNTYuMDY1elwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDcuMDczLDE2My43OTNjLTItMi00LjcxMy0zLjEyNC03LjU0Mi0zLjEyNGMtMi44MjksMC01LjU0MSwxLjEyNC03LjU0MiwzLjEyNGwtNDUuMjU1LDQ1LjI1NCAgICAgYy0yLDIuMDAxLTMuMTI0LDQuNzEzLTMuMTI0LDcuNTQyczEuMTI0LDUuNTQyLDMuMTI0LDcuNTQybDMwLjE3LDMwLjE2N2MyLjA4MywyLjA4Myw0LjgxMywzLjEyNCw3LjU0MiwzLjEyNCAgICAgYzIuNzMxLDAsNS40NTktMS4wNDIsNy41NDItMy4xMjRsNDUuMjUzLTQ1LjI1MmM0LjE2NS00LjE2NSw0LjE2NS0xMC45MTksMC0xNS4wODRMNDA3LjA3MywxNjMuNzkzeiBNMzg0LjQ0NSwyMzEuNjczICAgICBsLTE1LjA4NS0xNS4wODRsMzAuMTctMzAuMTY5bDE1LjA4NCwxNS4wODVMMzg0LjQ0NSwyMzEuNjczelwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMjAuMzM5LDgwLjE4NmMyLjczMSwwLDUuNDYxLTEuMDQyLDcuNTQzLTMuMTI2bDQuNTI1LTQuNTI3YzQuMTY0LTQuMTY2LDQuMTYzLTEwLjkyLTAuMDAzLTE1LjA4NCAgICAgYy00LjE2NS00LjE2NC0xMC45Mi00LjE2My0xNS4wODQsMC4wMDNsLTQuNTI1LDQuNTI3Yy00LjE2NCw0LjE2Ni00LjE2MywxMC45MiwwLjAwMywxNS4wODQgICAgIEMzMTQuODgxLDc5LjE0NiwzMTcuNjA5LDgwLjE4NiwzMjAuMzM5LDgwLjE4NnpcIiBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA3LjIxNSwzNTguMDU3bC00LjUyNSw0LjUyNWMtNC4xNjUsNC4xNjQtNC4xNjUsMTAuOTE4LDAsMTUuMDg1YzIuMDgzLDIuMDgyLDQuODEzLDMuMTIzLDcuNTQyLDMuMTIzICAgICBzNS40NTktMS4wNDEsNy41NDItMy4xMjNsNC41MjUtNC41MjVjNC4xNjUtNC4xNjYsNC4xNjUtMTAuOTIsMC0xNS4wODVDMTE4LjEzMywzNTMuODkxLDExMS4zODEsMzUzLjg5MSwxMDcuMjE1LDM1OC4wNTd6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPic7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==