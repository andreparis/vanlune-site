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
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\common\\widgets\\Tap-Top.js";
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

module.exports = JSON.parse("{\"config\":{\"layout_type\":\"ltr\",\"layout_version\":\"light\",\"color\":\"#7740DD\"}}");

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
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\customizer\\theme-settings.js";
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
    defaultValue: "#7740DD",
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

var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\Compare\\CompareContext.js";
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

var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\Currency\\CurrencyContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const Provider = props => {
  const {
    0: selectedCurr,
    1: selectedCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: 'BRL',
    symbol: 'R$',
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
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\cart\\CartContext.js";
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
        total: (item.price - item.price * item.discount / 100) * quantity
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

  const plusQty = () => {
    setQuantity(quantity + 1);
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
      lineNumber: 83,
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
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\filter\\FilterProvider.js";
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

/***/ "./helpers/login/LoginContext.js":
/*!***************************************!*\
  !*** ./helpers/login/LoginContext.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./helpers/login/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\login\\LoginContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const LoginProvider = props => {
  const {
    0: authorizationToken,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    token: '',
    status: 1
  });
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const cookieToken = localStorage.getItem('token');
  const userStorage = localStorage.getItem('info');

  const logIn = (user, token) => {
    user = keysToLowerCase(user);
    token = keysToLowerCase(token); // save the token from the login response in a cookie

    localStorage.setItem('token', JSON.stringify(token), {
      expires: 1
    }); // save the userId from the login response in a cookie

    localStorage.setItem('info', JSON.stringify(user), {
      expires: 1
    });
    setUser(user);
    setToken(token);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('info', JSON.stringify(user), {
      expires: 1
    });
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cookieToken) setToken(JSON.parse(cookieToken));
    if (userStorage) setUser(JSON.parse(userStorage));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (authorizationToken != undefined && authorizationToken.status == 0) {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Loggin success!");
    }

    localStorage.setItem('token', JSON.stringify(authorizationToken), {
      expires: 1
    });
  }, [authorizationToken]);

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('info');
    setToken({
      token: '',
      status: 1
    });
    setUser({});
  };

  const {
    value
  } = props;
  return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: authorizationToken,
      userState: user,
      setUser,
      logIn: logIn,
      logOut: logOut
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, props.children);
};

function keysToLowerCase(obj) {
  if (obj instanceof Array) {
    for (var i in obj) {
      obj[i] = keysToLowerCase(obj[i]);
    }
  }

  if (!typeof obj === "object" || typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") {
    return obj;
  }

  var keys = Object.keys(obj);
  var n = keys.length;
  var lowKey;

  while (n--) {
    var key = keys[n];
    if (key === (lowKey = key.toLowerCase())) continue;
    obj[lowKey] = keysToLowerCase(obj[key]);
    delete obj[key];
  }

  return obj;
}

/* harmony default export */ __webpack_exports__["default"] = (LoginProvider);

/***/ }),

/***/ "./helpers/login/index.js":
/*!********************************!*\
  !*** ./helpers/login/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LoginContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (LoginContext);

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

var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\menu\\MenuContext.js";
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
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\theme-setting\\SettingProvider.js";
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#7740DD");

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

var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\wishlist\\WishlistContext.js";
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
/* harmony import */ var _helpers_login_LoginContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/login/LoginContext */ "./helpers/login/LoginContext.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/filter/FilterProvider */ "./helpers/filter/FilterProvider.js");
/* harmony import */ var _helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/theme-setting/SettingProvider */ "./helpers/theme-setting/SettingProvider.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\pages\\_app.js";
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
    document.body.classList.add('light');
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? __jsx("div", {
    className: "loader-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, url === 'Christmas' ? __jsx("div", {
    id: "preloader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }) : __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default.a, {
    pageId: "2123438804574660",
    appId: "406252930752412",
    htmlRef: "https://connect.facebook.net/en_US/sdk.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "PLAYER2 - Best ecommerce for Gamers")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(_helpers_login_LoginContext__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_12__["CompareContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_13__["CurrencyContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(_helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, __jsx(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_9__["WishlistContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx(_helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_6__["MenuContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }
  }, __jsx(_helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 31
    }
  })))))))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }), __jsx(_components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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

const svgFreeShipping = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">\n' + '                                        <path\n' + '                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                    </svg>';
const svgservice = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="512px" height="512px">\n' + '                                       <g>\n' + '                                           <g>\n' + '                                              <g>\n' + '                                                <path d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z" fill="#7740DD"/>\n' + '                                                <path d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z" fill="#7740DD"/>\n' + '                                                <path d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z" fill="#7740DD"/>\n' + '                                                <path d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z" fill="#7740DD"/>\n' + '                                              </g>\n' + '                                           </g>\n' + '                                       </g>\n' + '                                    </svg>';
const svgoffer = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">\n' + '                                        <path\n' + '                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                        <path\n' + '                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                        <path\n' + '                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                        <path\n' + '                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                        <path\n' + '                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                        <path\n' + '                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"\n' + '                                            fill="#7740DD"/>\n' + '                                    </svg>';
const svgpayment = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px">\n' + '                                                 <g>\n' + '                                                    <g>\n' + '                                                       <g>\n' + '                                                          <path d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z" fill="#7740DD"/>\n' + '                                                          <path d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z" fill="#7740DD"/>\n' + '                                                          <path d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z" fill="#7740DD"/>\n' + '                                                          <path d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z" fill="#7740DD"/>\n' + '                                                          <path d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z" fill="#7740DD"/>\n' + '                                                          <path d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z" fill="#7740DD"/>\n' + '                                                          <path d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z" fill="#7740DD"/>\n' + '                                                       </g>\n' + '                                                    </g>\n' + '                                                 </g>\n' + '                                                </svg>';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vd2lkZ2V0cy9UYXAtVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9taXplci90aGVtZS1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL0NvbXBhcmUvQ29tcGFyZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9jYXJ0L0NhcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2ZpbHRlci9GaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlclByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvbG9naW4vTG9naW5Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvbG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9tZW51L01lbnVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvdGhlbWUtc2V0dGluZy9TZXR0aW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3RoZW1lLXNldHRpbmcvU2V0dGluZ1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvd2lzaGxpc3QvV2lzaGxpc3RDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIlRhcFRvcCIsImxvYWRlciIsInNldExvYWRlciIsInVzZVN0YXRlIiwiZ29pbmdVcCIsInNldEdvaW5nVXAiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudFNjcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFwVG9Ub3AiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidG9wIiwiZGlzcGxheSIsIlRoZW1lU2V0dGluZ3MiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlNldHRpbmdDb250ZXh0IiwidGhlbWVMYXlvdXQiLCJzZXRUaGVtZUxheW91dCIsImxheW91dFR5cGUiLCJsYXlvdXRGdW4iLCJsYXlvdXRDb2xvckZ1bmMiLCJsYXlvdXRDb2xvckZ1biIsImxheW91dFN0YXRlIiwic3RhdGUiLCJtb2RhbCIsInNldE1vZGFsIiwidG9nZ2xlIiwiY29uZmlnIiwibGF5b3V0X3ZlcnNpb24iLCJsYXlvdXRfdHlwZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiU2xpZGVVcERvd24iLCJvcGVuU2V0dGluZyIsImNsb3NlU2V0dGluZyIsImNoYW5nZVRoZW1lTGF5b3V0IiwiZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjb21wYXJlSXRlbXMiLCJGdW5jdGlvbiIsImFkZFRvQ29tcGFyZSIsInJlbW92ZUZyb21Db21hcHJlIiwiZ2V0TG9jYWxDb21wYXJlSXRlbXMiLCJsaXN0IiwiSlNPTiIsInBhcnNlIiwiZXJyIiwiUHJvdmlkZXIiLCJwcm9wcyIsInNldGNvbXBhcmVJdGVtcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpdGVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb21wYXJlIiwiaWQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJlcnJvciIsImZpbHRlciIsInZhbHVlIiwiY2hpbGRyZW4iLCJzZWxlY3RlZEN1cnIiLCJzZWxlY3RlZEN1cnJlbmN5IiwiY3VycmVuY3kiLCJzeW1ib2wiLCJjdXJyZW5jeUNvbnRleHQiLCJDb25zdW1lciIsImdldExvY2FsQ2FydEl0ZW1zIiwiQ2FydFByb3ZpZGVyIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiY2FydFRvdGFsIiwic2V0Q2FydFRvdGFsIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInN0b2NrIiwic2V0U3RvY2siLCJUb3RhbCIsInJlZHVjZSIsImEiLCJiIiwidG90YWwiLCJhZGRUb0NhcnQiLCJpdG0iLCJwcm9kdWN0IiwicXR5IiwicHJpY2UiLCJkaXNjb3VudCIsInJlbW92ZUZyb21DYXJ0IiwibWludXNRdHkiLCJwbHVzUXR5IiwidXBkYXRlUXR5IiwiaW5mbyIsIkNhcnRDb250ZXh0IiwiRmlsdGVyQ29udGV4dCIsIkZpbHRlclByb3ZpZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiYnJhbmQiLCJxdWVyeSIsImNvbG9yIiwic2l6ZSIsImNhdGVnb3J5IiwibWluIiwibWF4Iiwic2l6ZVBhcmFtIiwic3BsaXQiLCJwYXJhbSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRCcmFuZHMiLCJzZXRTZWxlY3RlZEJyYW5kcyIsInNlbGVjdGVkQ29sb3IiLCJzZXRTZWxlY3RlZENvbG9yIiwic2VsZWN0ZWRTaXplIiwic2V0U2VsZWN0ZWRTaXplIiwic2VsZWN0ZWRQcmljZSIsInNldFNlbGVjdGVkUHJpY2UiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJmaWx0ZXJDaGVja2VkIiwic2V0RmlsdGVyQ2hlY2tlZCIsImhhbmRsZUJyYW5kcyIsImNoZWNrZWQiLCJpbmRleE9mIiwiaGFuZGxlU2l6ZXMiLCJMb2dpblByb3ZpZGVyIiwiYXV0aG9yaXphdGlvblRva2VuIiwic2V0VG9rZW4iLCJ0b2tlbiIsInN0YXR1cyIsInVzZXIiLCJzZXRVc2VyIiwiY29va2llVG9rZW4iLCJ1c2VyU3RvcmFnZSIsImxvZ0luIiwia2V5c1RvTG93ZXJDYXNlIiwiZXhwaXJlcyIsInVuZGVmaW5lZCIsImxvZ091dCIsInJlbW92ZUl0ZW0iLCJ1c2VyU3RhdGUiLCJvYmoiLCJBcnJheSIsIm4iLCJsZW5ndGgiLCJsb3dLZXkiLCJ0b0xvd2VyQ2FzZSIsIkxvZ2luQ29udGV4dCIsInNlbGVjdE1lbnUiLCJtZW51T3BlbiIsIm1lbnVDb250ZXh0IiwiU2V0dGluZ1Byb3ZpZGVyIiwic2V0TGF5b3V0U3RhdGUiLCJsYXlvdXRDb2xvciIsInNldExheW91dENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGFyZ2V0Iiwid2lzaGxpc3RJdGVtcyIsImFkZFRvV2lzaCIsInJlbW92ZUZyb21XaXNoIiwiZ2V0TG9jYWxXaXNobGlzdEl0ZW1zIiwic2V0V2lzaGxpc3RJdGVtcyIsIndpc2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVybCIsInNldFVybCIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiUHJvZHVjdDMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidG9vbHNfcHJvZHVjdF80IiwiUHJvZHVjdDQiLCJQcm9kdWN0NyIsIlByb2R1Y3Q1IiwiZG90cyIsIlByb2R1Y3Q2IiwiVGVhbTQiLCJTbGlkZXIyIiwiU2xpZGVyMyIsIlNsaWRlcjQiLCJTbGlkZXI1IiwiU2xpZGVyNiIsIlNsaWRlcjciLCJjbGFzc25hbWVzIiwiYWNjb3JkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2FsbCIsImVsZW10IiwiaW5uZXJIVE1MIiwiYW5jaG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhbmNob3IiLCJvbmNsaWNrIiwiZWxlbXMiLCJlbCIsIm5leHRFbGVtZW50U2libGluZyIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW1vdmVQcm9wZXJ0eSIsImVsZW1lbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiY29udGFpbnMiLCJzdmdGcmVlU2hpcHBpbmciLCJzdmdzZXJ2aWNlIiwic3Znb2ZmZXIiLCJzdmdwYXltZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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LGdFQU5vQixHQU9wQixpREFQb0IsR0FRcEIsb2FBUm9CLEdBU3BCLGdFQVRvQixHQVVwQixpREFWb0IsR0FXcEIsNFRBWG9CLEdBWXBCLGdFQVpvQixHQWFwQixpREFib0IsR0FjcEIsb1ZBZG9CLEdBZXBCLGdFQWZvQixHQWdCcEIsaURBaEJvQixHQWlCcEIsMFVBakJvQixHQWtCcEIsZ0VBbEJvQixHQW1CcEIsNENBbkJHO0FBb0JBLE1BQU1DLFVBQVUsR0FBRyx3UEFDdEIsd0RBRHNCLEdBRXRCLDJEQUZzQixHQUd0Qiw4REFIc0IsR0FJdEIsbTBDQUpzQixHQUt0QiwyVUFMc0IsR0FNdEIsMFVBTnNCLEdBT3RCLDRVQVBzQixHQVF0Qiw0ZEFSc0IsR0FTdEIsMFVBVHNCLEdBVXRCLHdUQVZzQixHQVd0QiwrREFYc0IsR0FZdEIsNERBWnNCLEdBYXRCLHlEQWJzQixHQWN0Qix3REFkRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hoQlAsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFwVG9wID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbZ29pbmdVcCwgc2V0R29pbmdVcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIFBhZ2UgTG9hZGVyXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcclxuICAgICAgfSwgMTUwMClcclxuICBcclxuICAgICAgLy8gVGFwIHRvIFRvcCBTY3JvbGwgXHJcbiAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsWSA+IDUwMClcclxuICAgICAgICAgIHNldEdvaW5nVXAodHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgc2V0R29pbmdVcChmYWxzZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH0sIFtnb2luZ1VwXSk7XHJcbiAgXHJcbiAgICBjb25zdCB0YXBUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICB0b3A6IDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFwLXRvcCB0b3AtY2xzXCIgc3R5bGU9e2dvaW5nVXAgPyB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH19IG9uQ2xpY2s9e3RhcFRvVG9wfT5cclxuICAgICAgICA8ZGl2PjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS11cFwiPjwvaT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFwVG9wOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCAsdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNldHRpbmdDb250ZXh0IGZyb20gJy4uLy4uL2hlbHBlcnMvdGhlbWUtc2V0dGluZy9TZXR0aW5nQ29udGV4dCc7XHJcbmltcG9ydCB7U2xpZGVVcERvd259IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY3JpcHRcIlxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnLmpzb24nXHJcbmltcG9ydCB7IE1lZGlhLCBDb2wsIFJvdywgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBUaGVtZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoU2V0dGluZ0NvbnRleHQpXHJcbiAgICBjb25zdCBbdGhlbWVMYXlvdXQsIHNldFRoZW1lTGF5b3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGxheW91dFR5cGUgPSBjb250ZXh0LmxheW91dEZ1bjtcclxuICAgIGNvbnN0IGxheW91dENvbG9yRnVuYyA9IGNvbnRleHQubGF5b3V0Q29sb3JGdW5cclxuICAgIGNvbnN0IGxheW91dFN0YXRlID0gY29udGV4dC5zdGF0ZVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xyXG4gIFxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICBUYXAgb24gVG9wXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGNvbmZpZy5sYXlvdXRfdmVyc2lvbiAmJiBjb25maWcubGF5b3V0X3R5cGUpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGAke2NvbmZpZy5sYXlvdXRfdmVyc2lvbn0gICR7Y29uZmlnLmxheW91dF90eXBlfWBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIikpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtZGVhZnVsdCcsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICBTbGlkZVVwRG93bignc2V0dGluZy10aXRsZScpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSwgW10pO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA2MDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXAtdG9wXCIpLnN0eWxlID0gXCJkaXNwbGF5OiBibG9ja1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFwLXRvcFwiKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlblNldHRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ19ib3hcIikuY2xhc3NMaXN0LmFkZCgnb3Blbi1zZXR0aW5nJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nLWljb25cIikuY2xhc3NMaXN0LmFkZCgnb3Blbi1pY29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlU2V0dGluZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nX2JveFwiKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLXNldHRpbmcnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmctaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLWljb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lTGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lTGF5b3V0KCF0aGVtZUxheW91dClcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGVtZUxheW91dCl7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgIGNvbmZpZy5sYXlvdXRfdmVyc2lvbiA9ICdkYXJrJ1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgICAgICBjb25maWcubGF5b3V0X3ZlcnNpb24gPSAnbGlnaHQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gb25DbGljaz17KCkgPT4gb3BlblNldHRpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2lkZWJhclwiIGlkPVwic2V0dGluZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNldHRpbmdfYm94XCIgY2xhc3NOYW1lPVwic2V0dGluZy1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZVNldHRpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdfYm94X2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNsb3NlU2V0dGluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJhY2sgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHByLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5jb2xvciBvcHRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWNvbnRhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xvci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbG9yUGlja2VyMVwiIHR5cGU9XCJjb2xvclwiIGRlZmF1bHRWYWx1ZT1cIiM3NzQwRERcIiAgbmFtZT1cIkJhY2tncm91bmRcIiBvbkNoYW5nZT17KGUpID0+IGxheW91dENvbG9yRnVuYyhlKX0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtM1wiPnRoZW1lIGRlYWZ1bHQgY29sb3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UlRMPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1jb250YW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2V0dGluZ19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiIGlkPVwibHRyX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIiBjbGFzc05hbWU9XCJidG4gc2V0dGluZ19idG5cIiBvbkNsaWNrPXsgKCkgPT4gbGF5b3V0VHlwZShsYXlvdXRTdGF0ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheW91dFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1eV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL211bHRpa2FydC1yZXNwb25zaXZlLXJlYWN0LWVjb21tZXJjZS10ZW1wbGF0ZS8yMzA2Nzc3Mz9zX3Jhbms9MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBwdXJjaGFzZV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBwdXJjaGFzZSBNdWx0aWthcnQgbm93ITwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL211bHRpa2FydC1yZXNwb25zaXZlLWFuZ3VsYXItZWNvbW1lcmNlLXRlbXBsYXRlLzIyOTA1MzU4P3NfcmFuaz0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIHB1cmNoYXNlX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYSBzcmM9e2AvYXNzZXRzL2ltYWdlcy9pY29uL2FuZ3VsYXIucG5nYH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz4gTXVsdGlrYXJ0IEFuZ3VsYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tdWx0aWthcnQtcmVzcG9uc2l2ZS1lY29tbWVyY2UtaHRtbC10ZW1wbGF0ZS8yMjgwOTk2N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBwdXJjaGFzZV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1odG1sNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gTXVsdGlrYXJ0IEhUTUw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tdWx0aWthcnQtbXVsdGlwdXJwb3NlLXNob3BpZnktc2VjdGlvbnMtdGhlbWUvMjMwOTM4MzE/c19yYW5rPTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHVyY2hhc2VfYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17YC9hc3NldHMvaW1hZ2VzL2ljb24vc2hvcGlmeS5wbmdgfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPiBNdWx0aWthcnQgU2hvcGlmeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1idG4gZGFyay1saWdodC1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyay1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGhlbWUtbGF5b3V0LXZlcnNpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VUaGVtZUxheW91dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgID57dGhlbWVMYXlvdXQ/J0xpZ2h0JzonRGFyayd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkY2FydF9idG1fcG9wdXBcIiBpZD1cImZpeGVkX2NhcnRfaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwiZml4ZWRfY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29uZmlndXJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNlbnRlcmVkPXt0cnVlfSBpc09wZW49e21vZGFsfSB0b2dnbGU9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfT5Db25maWc8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcCgoa2V5LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2tleX06PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbmZpZ1trZXldfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaC1jbHNcIj48Yj5Ob3RlOiA8L2I+Q29weSB1cHBlciBjb25maWcgYW5kIHBhc3RlIGl0IGluIDxiPlwiL2NvbXBvbmVudHMvY3VzdG9taXplci9jb25maWcuanNvblwiPC9iPiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgY29tcGFyZUl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb0NvbXBhcmU6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21Db21hcHJlOiBGdW5jdGlvblxyXG59KTtcclxuXHJcbmNvbnN0IGdldExvY2FsQ29tcGFyZUl0ZW1zID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmUnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyZUl0ZW1zLCBzZXRjb21wYXJlSXRlbXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxDb21wYXJlSXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYXJlJywgSlNPTi5zdHJpbmdpZnkoY29tcGFyZUl0ZW1zKSlcclxuICAgIH0sIFtjb21wYXJlSXRlbXNdKVxyXG5cclxuICAgIC8vIEFkZCBQcm9kdWN0IFRvIFdpc2hsaXN0XHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29tcGFyZUl0ZW1zLmZpbmRJbmRleChjb21wYXJlID0+IGNvbXBhcmUuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgICAgICAgICAgc2V0Y29tcGFyZUl0ZW1zKFsuLi5jb21wYXJlSXRlbXMsIGl0ZW1dKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJUaGlzIFByb2R1Y3QgQWxyZWFkeSBBZGRlZCAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgUHJvZHVjdCBGcm9tIGNvbXBhcmVcclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21hcHJlID0gKGl0ZW0pID0+IHtcclxuICAgICAgc2V0Y29tcGFyZUl0ZW1zKGNvbXBhcmVJdGVtcy5maWx0ZXIoKGUpPT4oZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gICAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7dmFsdWV9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGNvbXBhcmVJdGVtczpjb21wYXJlSXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvQ29tcGFyZTphZGRUb0NvbXBhcmUsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21Db21hcHJlOnJlbW92ZUZyb21Db21hcHJlXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBDb21wYXJlQ29udGV4dCxcclxuICBQcm92aWRlciBhcyBDb21wYXJlQ29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL0NvbXBhcmVDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuICBcclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQ3Vyciwgc2VsZWN0ZWRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7IGN1cnJlbmN5OiAnQlJMJyxzeW1ib2w6ICdSJCcsIHZhbHVlOjF9KTtcclxuXHJcbiAgY29uc3QgY3VycmVuY3lDb250ZXh0ID0ge1xyXG4gICAgc2VsZWN0ZWRDdXJyLFxyXG4gICAgc2VsZWN0ZWRDdXJyZW5jeVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHt2YWx1ZX0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgc3RhdGU6c2VsZWN0ZWRDdXJyLFxyXG4gICAgICAgICAgY3VycmVuY3lDb250ZXh0OmN1cnJlbmN5Q29udGV4dFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IENvbnN1bWVyIH0gPSBDb250ZXh0O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIEN1cnJlbmN5Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBDdXJyZW5jeUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9DdXJyZW5jeUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5cclxuY29uc3QgZ2V0TG9jYWxDYXJ0SXRlbXMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydExpc3QnKTtcclxuICAgIGlmIChsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ2FydFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQ2FydEl0ZW1zKCkpXHJcbiAgY29uc3QgW2NhcnRUb3RhbCwgc2V0Q2FydFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZSgnSW5TdG9jaycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgVG90YWwgPSBjYXJ0SXRlbXMucmVkdWNlKChhLCBiKSA9PiArYSArICtiLnRvdGFsLCAwKVxyXG4gICAgc2V0Q2FydFRvdGFsKFRvdGFsKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydExpc3QnLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKVxyXG4gIH0sIFtjYXJ0SXRlbXNdKVxyXG5cclxuICAvLyBBZGQgUHJvZHVjdCBUbyBDYXJ0XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0gLHF1YW50aXR5KSA9PiB7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIGNvbnN0IGluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleChpdG0gPT4gaXRtLmlkID09PSBpdGVtLmlkKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gY2FydEl0ZW1zW2luZGV4XTtcclxuICAgICAgY2FydEl0ZW1zW2luZGV4XSA9IHsgLi4uaXRlbSwgLi4uaXRlbSwgcXR5OiBxdWFudGl0eSwgdG90YWw6KGl0ZW0ucHJpY2UgLSAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQgLyAxMDApKSAqIHF1YW50aXR5IH07XHJcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSB7IC4uLml0ZW0sIHF0eTogcXVhbnRpdHksIHRvdGFsOiAoaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCAvIDEwMCkpICogcXVhbnRpdHkgfVxyXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgcHJvZHVjdF0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpdGVtKSA9PiB7XHJcbiAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIHNldENhcnRJdGVtcyhjYXJ0SXRlbXMuZmlsdGVyKChlKSA9PiAoZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWludXNRdHkgPSAoKSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgLSAxKTtcclxuICAgICAgICBzZXRTdG9jaygnSW5TdG9jaycpXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgY29uc3QgcGx1c1F0eSA9ICgpID0+IHtcclxuICAgIHNldFF1YW50aXR5KHF1YW50aXR5ICsgMSk7XHJcbiAgfVxyXG5cclxuICAgLy8gVXBkYXRlIFByb2R1Y3QgUXVhbnRpdHlcclxuICAgY29uc3QgdXBkYXRlUXR5ID0gKGl0ZW0sIHF1YW50aXR5KSA9PiB7XHJcbiAgICBpZihxdWFudGl0eSA+PSAxICl7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleChpdG0gPT4gaXRtLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICBpZihpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBjYXJ0SXRlbXNbaW5kZXhdO1xyXG4gICAgICAgIGNhcnRJdGVtc1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIC4uLml0ZW0sIHF0eTogcXVhbnRpdHksIHRvdGFsOiBpdGVtLnByaWNlICogcXVhbnRpdHkgIH07IFxyXG5cclxuICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtc10pXHJcbiAgICAgICAgdG9hc3QuaW5mbyhcIlByb2R1Y3QgUXVhbnRpdHkgVXBkYXRlZCAhXCIpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gey4uLml0ZW0sIHF0eTogcXVhbnRpdHksIHRvdGFsOiAoaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCAvIDEwMCkpICogcXVhbnRpdHkgfVxyXG4gICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBwcm9kdWN0XSlcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBVcGRhdGVkICFcIik7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVudGVyIFZhbGlkIFF1YW50aXR5ICFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICBzdGF0ZTogY2FydEl0ZW1zLCBjYXJ0VG90YWwsc2V0UXVhbnRpdHkgLHF1YW50aXR5LHN0b2NrLFxyXG4gICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxyXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0OiByZW1vdmVGcm9tQ2FydCxcclxuICAgICAgICBwbHVzUXR5OiBwbHVzUXR5LFxyXG4gICAgICAgIG1pbnVzUXR5Om1pbnVzUXR5LFxyXG4gICAgICAgIHVwZGF0ZVF0eTp1cGRhdGVRdHlcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQcm92aWRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHQ7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRlckNvbnRleHQgZnJvbSAnLi9GaWx0ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRmlsdGVyUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGJyYW5kID0gcm91dGVyLnF1ZXJ5LmJyYW5kOyBcclxuICAgIGNvbnN0IGNvbG9yID0gcm91dGVyLnF1ZXJ5LmNvbG9yOyBcclxuICAgIGNvbnN0IHNpemUgPSByb3V0ZXIucXVlcnkuc2l6ZTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5O1xyXG4gICAgY29uc3QgbWluID0gcm91dGVyLnF1ZXJ5Lm1pbjtcclxuICAgIGNvbnN0IG1heCA9IHJvdXRlci5xdWVyeS5tYXg7XHJcbiAgICBsZXQgc2l6ZVBhcmFtID0gc2l6ZSA/IHNpemUuc3BsaXQoXCIsXCIpOm51bGw7XHJcbiAgICBsZXQgcGFyYW0gPSBicmFuZCA/IGJyYW5kLnNwbGl0KFwiLFwiKTpbXSBcclxuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKGNhdGVnb3J5P2NhdGVnb3J5OlwiZmFzaGlvblwiKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEJyYW5kcywgc2V0U2VsZWN0ZWRCcmFuZHNdID0gdXNlU3RhdGUocGFyYW0/cGFyYW06W10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29sb3IsIHNldFNlbGVjdGVkQ29sb3JdID0gdXNlU3RhdGUoY29sb3I/Y29sb3I6XCJcIik7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRTaXplLCBzZXRTZWxlY3RlZFNpemVdID0gdXNlU3RhdGUoc2l6ZVBhcmFtP3NpemVQYXJhbTpbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcmljZSwgc2V0U2VsZWN0ZWRQcmljZV0gPSB1c2VTdGF0ZSh7IG1pbjptaW4/bWluOjAsIG1heDogbWF4P21heDo1MDAgfSk7XHJcbiAgICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmlsdGVyQ2hlY2tlZCwgc2V0RmlsdGVyQ2hlY2tlZF0gPSB1c2VTdGF0ZShbe31dKTtcclxuICAgXHJcbiAgICBjb25zdCBoYW5kbGVCcmFuZHMgPSAoYnJhbmQsIGNoZWNrZWQpID0+IHtcclxuICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZEJyYW5kcy5pbmRleE9mKGJyYW5kKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IGJyYW5kLCBjaGVja2VkIH1dKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEJyYW5kcyhzZWxlY3RlZEJyYW5kcy5maWx0ZXIoKGUpID0+IChlICE9PSBicmFuZCkpKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlckNoZWNrZWQoW3sgYnJhbmQsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQnJhbmRzKFsuLi5zZWxlY3RlZEJyYW5kcywgYnJhbmRdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2l6ZXMgPSAoc2l6ZSwgY2hlY2tlZCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZFNpemUuaW5kZXhPZihzaXplKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlckNoZWNrZWQoW3sgc2l6ZSwgY2hlY2tlZCB9XSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRTaXplKHNlbGVjdGVkU2l6ZS5maWx0ZXIoKGUpID0+IChlICE9PSBzaXplKSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IHNpemUsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkU2l6ZShbLi4uc2VsZWN0ZWRTaXplLCBzaXplXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmlsdGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc2VsZWN0ZWRDYXRlZ29yeSwgc2V0RmlsdGVyQ2hlY2tlZCwgc2V0U2VsZWN0ZWRDb2xvciwgc2V0U2VsZWN0ZWRDYXRlZ29yeSxzZXRTZWxlY3RlZEJyYW5kcyAsIHNlbGVjdGVkQnJhbmRzLCBzZWxlY3RlZENvbG9yLCBzZWxlY3RlZFByaWNlLCBpc0NoZWNrZWQsIGZpbHRlckNoZWNrZWQsIHNlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplLHNldFNlbGVjdGVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCcmFuZHM6IGhhbmRsZUJyYW5kcyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZVNpemVzOiBoYW5kbGVTaXplc1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJQcm92aWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmNvbnN0IExvZ2luUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbYXV0aG9yaXphdGlvblRva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSh7dG9rZW46ICcnLCBzdGF0dXM6IDF9KTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGNvb2tpZVRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgY29uc3QgdXNlclN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5mbycpO1xyXG5cclxuICBjb25zdCBsb2dJbiA9ICh1c2VyLCB0b2tlbikgPT4ge1xyXG4gICAgdXNlciA9IGtleXNUb0xvd2VyQ2FzZSh1c2VyKTtcclxuICAgIHRva2VuID0ga2V5c1RvTG93ZXJDYXNlKHRva2VuKTtcclxuICAgIC8vIHNhdmUgdGhlIHRva2VuIGZyb20gdGhlIGxvZ2luIHJlc3BvbnNlIGluIGEgY29va2llXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeSh0b2tlbiksIHsgZXhwaXJlczogMSB9KVxyXG4gICAgLy8gc2F2ZSB0aGUgdXNlcklkIGZyb20gdGhlIGxvZ2luIHJlc3BvbnNlIGluIGEgY29va2llXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5mbycsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB7IGV4cGlyZXM6IDEgfSlcclxuICAgIHNldFVzZXIodXNlcik7XHJcbiAgICBzZXRUb2tlbih0b2tlbik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZm8nLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwgeyBleHBpcmVzOiAxIH0pO1xyXG4gIH0sW3VzZXJdKTtcclxuXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNvb2tpZVRva2VuKSBzZXRUb2tlbihKU09OLnBhcnNlKGNvb2tpZVRva2VuKSk7XHJcbiAgICBpZiAodXNlclN0b3JhZ2UpIHNldFVzZXIoSlNPTi5wYXJzZSh1c2VyU3RvcmFnZSkpO1xyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoYXV0aG9yaXphdGlvblRva2VuICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGF1dGhvcml6YXRpb25Ub2tlbi5zdGF0dXMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dnaW4gc3VjY2VzcyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KGF1dGhvcml6YXRpb25Ub2tlbiksIHsgZXhwaXJlczogMSB9KTtcclxuICB9LCBbYXV0aG9yaXphdGlvblRva2VuXSk7XHJcblxyXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2luZm8nKTtcclxuICAgIHNldFRva2VuKHt0b2tlbjogJycsIHN0YXR1czogMX0pO1xyXG4gICAgc2V0VXNlcih7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICBzdGF0ZTogYXV0aG9yaXphdGlvblRva2VuLFxyXG4gICAgICAgIHVzZXJTdGF0ZTogdXNlciwgc2V0VXNlcixcclxuICAgICAgICBsb2dJbjogbG9nSW4sXHJcbiAgICAgICAgbG9nT3V0OiBsb2dPdXRcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleXNUb0xvd2VyQ2FzZShvYmopIHtcclxuICAgIGlmKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgb2JqW2ldID0ga2V5c1RvTG93ZXJDYXNlKG9ialtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF0eXBlb2Yob2JqKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Yob2JqKSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Yob2JqKSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2Yob2JqKSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgdmFyIG4gPSBrZXlzLmxlbmd0aDtcclxuICAgIHZhciBsb3dLZXk7XHJcbiAgICB3aGlsZSAobi0tKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IGtleXNbbl07XHJcbiAgICAgICAgaWYgKGtleSA9PT0gKGxvd0tleSA9IGtleS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgb2JqW2xvd0tleV0gPSBrZXlzVG9Mb3dlckNhc2Uob2JqW2tleV0pO1xyXG4gICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiAob2JqKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBzZWxlY3RNZW51OiBGdW5jdGlvblxyXG4gIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdE1lbnVdID0gdXNlU3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBtZW51Q29udGV4dCA9IHtcclxuICAgICAgICBzZWxlY3RNZW51XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttZW51Q29udGV4dH0+IHtwcm9wcy5jaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgeyBDb25zdW1lciB9ID0gQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBNZW51Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBNZW51Q29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL01lbnVDb250ZXh0XCI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZXR0aW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNldHRpbmdDb250ZXh0IGZyb20gJy4vU2V0dGluZ0NvbnRleHQnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jdXN0b21pemVyL2NvbmZpZy5qc29uJztcclxuY29uc3QgU2V0dGluZ1Byb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGF5b3V0U3RhdGUsIHNldExheW91dFN0YXRlXSA9IHVzZVN0YXRlKFwiUlRMXCIpO1xyXG4gICAgY29uc3QgW2xheW91dENvbG9yLCBzZXRMYXlvdXRDb2xvcl0gPSB1c2VTdGF0ZShcIiM3NzQwRERcIik7XHJcbiAgICBjb25zdCBsYXlvdXRGdW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBcIlJUTFwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImx0clwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicnRsXCIpO1xyXG4gICAgICAgICAgICBzZXRMYXlvdXRTdGF0ZShcIkxUUlwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicnRsXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsdHJcIik7XHJcbiAgICAgICAgICAgIHNldExheW91dFN0YXRlKFwiUlRMXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGF5b3V0Q29sb3JGdW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIixpdGVtLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtZGVhZnVsdCcsIGl0ZW0udGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25maWcuY29sb3I9aXRlbS50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXRMYXlvdXRDb2xvcihpdGVtLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFNldHRpbmdDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBsYXlvdXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxheW91dEZ1bjpsYXlvdXRGdW4sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXRDb2xvckZ1bjpsYXlvdXRDb2xvckZ1blxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvU2V0dGluZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCAsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICB3aXNobGlzdEl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb1dpc2g6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21XaXNoOiBGdW5jdGlvblxyXG59XHJcbik7XHJcblxyXG5jb25zdCBnZXRMb2NhbFdpc2hsaXN0SXRlbXMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lzaGxpc3QnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbd2lzaGxpc3RJdGVtcywgc2V0V2lzaGxpc3RJdGVtc10gPSB1c2VTdGF0ZShnZXRMb2NhbFdpc2hsaXN0SXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aXNobGlzdCcsIEpTT04uc3RyaW5naWZ5KHdpc2hsaXN0SXRlbXMpKVxyXG4gICAgfSwgW3dpc2hsaXN0SXRlbXNdKVxyXG5cclxuXHJcbiAgICAvLyBBZGQgUHJvZHVjdCBUbyBXaXNobGlzdFxyXG4gICAgY29uc3QgYWRkVG9XaXNoID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHdpc2hsaXN0SXRlbXMuZmluZEluZGV4KHdpc2ggPT4gd2lzaC5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQcm9kdWN0IEFkZGVkIFN1Y2Nlc3NmdWxseSAhXCIpO1xyXG4gICAgICAgICAgICBzZXRXaXNobGlzdEl0ZW1zKFsuLi53aXNobGlzdEl0ZW1zLCBpdGVtXSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiVGhpcyBQcm9kdWN0IEFscmVhZHkgQWRkZWQgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIFByb2R1Y3QgRnJvbSBXaXNobGlzdFxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbVdpc2ggPSAoaXRlbSkgPT4ge1xyXG4gICAgICBzZXRXaXNobGlzdEl0ZW1zKHdpc2hsaXN0SXRlbXMuZmlsdGVyKChlKT0+KGUuaWQgIT09IGl0ZW0uaWQpKSlcclxuICAgICAgdG9hc3QuZXJyb3IoXCJQcm9kdWN0IFJlbW92ZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3ZhbHVlfSA9IHByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICB3aXNobGlzdEl0ZW1zOndpc2hsaXN0SXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvV2lzaDphZGRUb1dpc2gsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21XaXNoOnJlbW92ZUZyb21XaXNoXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBXaXNobGlzdENvbnRleHQsXHJcbiAgUHJvdmlkZXIgYXMgV2lzaGxpc3RDb250ZXh0UHJvdmlkZXIsXHJcbn0gZnJvbSBcIi4vV2lzaGxpc3RDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGhlbWVTZXR0aW5ncyBmcm9tICcuLi9jb21wb25lbnRzL2N1c3RvbWl6ZXIvdGhlbWUtc2V0dGluZ3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgVGFwVG9wIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3dpZGdldHMvVGFwLVRvcCc7XHJcbmltcG9ydCBNZXNzZW5nZXJDdXN0b21lckNoYXQgZnJvbSAncmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXQnO1xyXG5pbXBvcnQgeyBNZW51Q29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9tZW51L01lbnVDb250ZXh0JztcclxuaW1wb3J0IENhcnRDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vaGVscGVycy9jYXJ0L0NhcnRDb250ZXh0JztcclxuaW1wb3J0IExvZ2luUHJvdmlkZXIgZnJvbSAnLi4vaGVscGVycy9sb2dpbi9Mb2dpbkNvbnRleHQnO1xyXG5pbXBvcnQgeyBXaXNobGlzdENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvd2lzaGxpc3QvV2lzaGxpc3RDb250ZXh0JztcclxuaW1wb3J0IEZpbHRlclByb3ZpZGVyIGZyb20gJy4uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlclByb3ZpZGVyJztcclxuaW1wb3J0IFNldHRpbmdQcm92aWRlciBmcm9tICcuLi9oZWxwZXJzL3RoZW1lLXNldHRpbmcvU2V0dGluZ1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgQ29tcGFyZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dCc7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgdXJsID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xyXG4gICAgc2V0VXJsKHVybCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTsgICAgICBcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtcclxuICAgICAgICBpc0xvYWRpbmcgP1xyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXdyYXBwZXJcIiA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1cmwgPT09ICdDaHJpc3RtYXMnID9cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmVsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVzc2VuZ2VyQ3VzdG9tZXJDaGF0XHJcbiAgICAgICAgICAgICAgcGFnZUlkPVwiMjEyMzQzODgwNDU3NDY2MFwiXHJcbiAgICAgICAgICAgICAgYXBwSWQ9XCI0MDYyNTI5MzA3NTI0MTJcIlxyXG4gICAgICAgICAgICAgIGh0bWxSZWY9XCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+UExBWUVSMiAtIEJlc3QgZWNvbW1lcmNlIGZvciBHYW1lcnM8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxMb2dpblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8Q29tcGFyZUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3lDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FydENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpc2hsaXN0Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbHRlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XaXNobGlzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FydENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0N1cnJlbmN5Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8VGhlbWVTZXR0aW5ncyAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9Db21wYXJlQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0xvZ2luUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUHJvdmlkZXI+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgIDxUYXBUb3AgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgfVxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImV4cG9ydCBjb25zdCBQcm9kdWN0MyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzoyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5leHBvcnQgY29uc3QgdG9vbHNfcHJvZHVjdF80ID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICBhcnJvd3M6ZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdDQgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzoyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3Q3ID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhcnJvd3M6ZmFsc2UsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OjIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3Q1ID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzNjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3Q2ID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhcnJvd3M6ZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRlYW00ID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU4NixcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlcjIgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlcjMgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNsaWRlcjQgPSB7XHJcbiAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU4NixcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNsaWRlcjUgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyNiA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDYsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyNyA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDcsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlVXBEb3duID0gZnVuY3Rpb24oY2xhc3NuYW1lcykge1xyXG4gICAgICAgIHZhciBhY2NvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjbGFzc25hbWVzK1wiIGg0XCIpO1xyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChhY2NvcmRzLCBmdW5jdGlvbihlbGVtdCkge1xyXG4gICAgICAgICAgICBlbGVtdC5pbm5lckhUTUwgKz0gJzxzcGFuIGNsYXNzPVwiYWNjb3JkaW5nLW1lbnVcIj48L3NwYW4+JztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgYW5jaG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NuYW1lcyk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFuY2hvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IGFuY2hvcnNbaV07XHJcbiAgICAgICAgICAgIGFuY2hvci5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2NsYXNzbmFtZXMpO1xyXG4gICAgICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCBmdW5jdGlvbihlbGVtdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW10LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gZWxlbXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGVsLm9mZnNldEhlaWdodCArICdweCdcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMG1zJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLm1hcmdpblRvcCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKVxyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCdcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGBoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ2BcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc1MDBtcydcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNTAwbXMnXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ID09PSAnbm9uZScpIGRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGBoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ2BcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc1MDBtcydcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCdcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2NsYXNzbmFtZXMpO1xyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtcywgZnVuY3Rpb24oZWxlbXQpIHtcclxuICAgICAgICAgICAgbGV0IGVsID0gZWxlbXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBlbC5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIFNWRyBJY29uc1xyXG5cclxuZXhwb3J0IGNvbnN0IHN2Z0ZyZWVTaGlwcGluZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAtMTE3IDY3OS45OTg5MiA2NzlcIj5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTIuMzQ3NjU2IDM3OC4zODI4MTJoMzcuMzkwNjI1YzQuMzcxMDk0IDM3LjcxNDg0NCAzNi4zMTY0MDcgNjYuMTY0MDYzIDc0LjI3NzM0NCA2Ni4xNjQwNjMgMzcuOTY4NzUgMCA2OS45MDYyNS0yOC40NDkyMTkgNzQuMjgxMjUtNjYuMTY0MDYzaDI0MS43ODkwNjNjNC4zODI4MTIgMzcuNzE0ODQ0IDM2LjMxNjQwNiA2Ni4xNjQwNjMgNzQuMjc3MzQzIDY2LjE2NDA2MyAzNy45Njg3NSAwIDY5LjkwMjM0NC0yOC40NDkyMTkgNzQuMjg1MTU3LTY2LjE2NDA2M2g3OC44OTA2MjRjNi44ODI4MTMgMCAxMi40NjA5MzgtNS41NzgxMjQgMTIuNDYwOTM4LTEyLjQ2MDkzN3YtMzUyLjk1NzAzMWMwLTYuODgyODEzLTUuNTc4MTI1LTEyLjQ2NDg0NC0xMi40NjA5MzgtMTIuNDY0ODQ0aC00MzIuNDc2NTYyYy02Ljg3NSAwLTEyLjQ1NzAzMSA1LjU4MjAzMS0xMi40NTcwMzEgMTIuNDY0ODQ0djY5LjkxNDA2MmgtMTA1LjU3MDMxM2MtNC4wNzQyMTguMDExNzE5LTcuODkwNjI1IDIuMDA3ODEzLTEwLjIxODc1IDUuMzYzMjgybC02OC4xNzE4NzUgOTcuNTgyMDMxLTI2LjY2Nzk2OSAzNy4zOTA2MjUtOS43MjI2NTYgMTMuODM1OTM3Yy0xLjQ1NzAzMSAyLjA4MjAzMS0yLjI0MjE4NzIgNC41NTg1OTQtMi4yNDk5OTk3NSA3LjEwMTU2M3YxMjEuMzk4NDM3Yy0uMDk3NjU2MjUgMy4zNDM3NSAxLjE1NjI0OTc1IDYuNTg5ODQ0IDMuNDc2NTYyNzUgOS4wMDM5MDcgMi4zMjAzMTIgMi40MTc5NjggNS41MTk1MzEgMy43OTY4NzQgOC44NjcxODcgMy44MjgxMjR6bTExMS40MTc5NjkgMzcuMzg2NzE5Yy0yNy41MjczNDQgMC00OS44NTE1NjMtMjIuMzIwMzEyLTQ5Ljg1MTU2My00OS44NDc2NTYgMC0yNy41MzUxNTYgMjIuMzI0MjE5LTQ5Ljg1NTQ2OSA0OS44NTE1NjMtNDkuODU1NDY5IDI3LjUzNTE1NiAwIDQ5Ljg1NTQ2OSAyMi4zMjAzMTMgNDkuODU1NDY5IDQ5Ljg1NTQ2OSAwIDI3LjYzMjgxMy0yMi4yMTg3NSA1MC4xMzI4MTMtNDkuODU1NDY5IDUwLjQ3MjY1NnptMzkwLjM0NzY1NiAwYy0yNy41MzEyNSAwLTQ5Ljg1NTQ2OS0yMi4zMjAzMTItNDkuODU1NDY5LTQ5Ljg0NzY1NiAwLTI3LjUzNTE1NiAyMi4zMjQyMTktNDkuODU1NDY5IDQ5Ljg1NTQ2OS00OS44NTU0NjkgMjcuNTM5MDYzIDAgNDkuODU1NDY5IDIyLjMyMDMxMyA0OS44NTU0NjkgNDkuODU1NDY5LjAwMzkwNiAyNy42MzI4MTMtMjIuMjE4NzUgNTAuMTMyODEzLTQ5Ljg1NTQ2OSA1MC40NzI2NTZ6bTE0MC43MTA5MzgtMzkwLjM0Mzc1djIyMy4zNDM3NWgtMzM4LjM3NWMtNi44ODI4MTMgMC0xMi40NjQ4NDQgNS41NzgxMjUtMTIuNDY0ODQ0IDEyLjQ2MDkzOCAwIDYuODgyODEyIDUuNTgyMDMxIDEyLjQ2NDg0MyAxMi40NjQ4NDQgMTIuNDY0ODQzaDMzOC4zNzV2NzkuNzYxNzE5aC02Ni40MjE4NzVjLTQuMzgyODEzLTM3LjcxMDkzNy0zNi4zMjAzMTMtNjYuMTU2MjUtNzQuMjg5MDYzLTY2LjE1NjI1LTM3Ljk2MDkzNyAwLTY5Ljg5ODQzNyAyOC40NDUzMTMtNzQuMjc3MzQzIDY2LjE1NjI1aC0xOTIuMzA4NTk0di0yNzEuMzI0MjE5aDg5Ljk4MDQ2OGM2Ljg4MjgxMyAwIDEyLjQ2NDg0NC01LjU4MjAzMSAxMi40NjQ4NDQtMTIuNDY0ODQzIDAtNi44ODI4MTMtNS41ODIwMzEtMTIuNDY0ODQ0LTEyLjQ2NDg0NC0xMi40NjQ4NDRoLTg5Ljk4MDQ2OHYtMzEuNzc3MzQ0em0tNTMxLjMwNDY4OCA4Mi4zODI4MTNoOTkuNzAzMTI1djI0NS42NDg0MzdoLTI0LjkyNTc4MWMtNC4zNzUtMzcuNzEwOTM3LTM2LjMxMjUtNjYuMTU2MjUtNzQuMjgxMjUtNjYuMTU2MjUtMzcuOTYwOTM3IDAtNjkuOTA2MjUgMjguNDQ1MzEzLTc0LjI3NzM0NCA2Ni4xNTYyNWgtMjQuOTI5Njg3di0xMDUuMzE2NDA2bDMuNzM4MjgxLTUuMzU5Mzc1aDE1Mi4wNTQ2ODdjNi44ODI4MTMgMCAxMi40NjA5MzgtNS41NzQyMTkgMTIuNDYwOTM4LTEyLjQ1NzAzMXYtOTIuMjI2NTYzYzAtNi44ODI4MTItNS41NzgxMjUtMTIuNDY0ODQ0LTEyLjQ2MDkzOC0xMi40NjQ4NDRoLTY5Ljc5Njg3NHptLTMwLjE2MDE1NiA0M2g3NC43NzczNDR2NjcuMjk2ODc1aC0xMjIuMjY1NjI1em0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+JztcclxuZXhwb3J0IGNvbnN0IHN2Z3NlcnZpY2UgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ4MCA0ODBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgwIDQ4MDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NzIsNDMyaC0yNFYyODBjLTAuMDAzLTQuNDE4LTMuNTg4LTcuOTk3LTguMDA2LTcuOTk0Yy0yLjYwNywwLjAwMi01LjA1LDEuMjc0LTYuNTQ2LDMuNDFsLTExMiwxNjAgICAgIGMtMi41MzIsMy42MjEtMS42NDksOC42MDksMS45NzIsMTEuMTRjMS4zNDMsMC45MzksMi45NDEsMS40NDMsNC41OCwxLjQ0NGgxMDR2MjRjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtMjRoMjQgICAgIGM0LjQxOCwwLDgtMy41ODIsOC04UzQ3Ni40MTgsNDMyLDQ3Miw0MzJ6IE00MzIsNDMyaC04OC42NEw0MzIsMzA1LjM3NlY0MzJ6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMjgsNDY0aC05NC43MTJsODguMDU2LTEwMy42ODhjMC4yLTAuMjM4LDAuMzg3LTAuNDg2LDAuNTYtMC43NDRjMTYuNTY2LTI0LjUxOCwxMS4wNDgtNTcuNzEzLTEyLjU2LTc1LjU1MiAgICAgYy0yOC43MDUtMjAuNjI1LTY4LjY5NS0xNC4wNzQtODkuMzE5LDE0LjYzMUMyMTIuMjA0LDMwOS41MzIsMjA3Ljk5OCwzMjIuNTk3LDIwOCwzMzZjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOCAgICAgYy0wLjAwMy0yNi41MSwyMS40ODYtNDguMDAyLDQ3Ljk5NS00OC4wMDVjMTAuMDQ4LTAuMDAxLDE5Ljg0MywzLjE1MSwyOC4wMDUsOS4wMTNjMTYuNTM3LDEyLjY3MSwyMC4zODgsMzYuMDA3LDguOCw1My4zMiAgICAgbC05OC44OTYsMTE2LjQ5NmMtMi44NTksMy4zNjktMi40NDUsOC40MTcsMC45MjQsMTEuMjc2YzEuNDQ1LDEuMjI2LDMuMjc3LDEuODk5LDUuMTcyLDEuOWgxMTJjNC40MTgsMCw4LTMuNTgyLDgtOCAgICAgUzMzMi40MTgsNDY0LDMyOCw0NjR6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMTYuMTc2LDQyNC4xNTJjMC4xNjctNC40MTUtMy4yNzgtOC4xMjktNy42OTMtOC4yOTZjLTAuMDAxLDAtMC4wMDIsMC0wLjAwMywwICAgICBDMTA0LjExLDQxMS45ODIsMjAuMzQxLDMyOC4zNjMsMTYuMjgsMjI0SDQ4YzQuNDE4LDAsOC0zLjU4Miw4LThzLTMuNTgyLTgtOC04SDE2LjI4QzIwLjI4MywxMDMuODIxLDEwMy44MiwyMC4yODcsMjA4LDE2LjI4OCAgICAgVjQwYzAsNC40MTgsMy41ODIsOCw4LDhzOC0zLjU4Miw4LThWMTYuMjg4YzEwMi43NTQsMy45NzQsMTg1LjY4Niw4NS4zNCwxOTEuNjE2LDE4OGwtMzEuMi0zMS4yICAgICBjLTMuMTc4LTMuMDctOC4yNDItMi45ODItMTEuMzEyLDAuMTk2Yy0yLjk5NCwzLjEtMi45OTQsOC4wMTUsMCwxMS4xMTZsNDQuNjU2LDQ0LjY1NmMwLjg0MSwxLjAxOCwxLjkyNSwxLjgwNywzLjE1MiwyLjI5NiAgICAgYzAuMzEzLDAuMDk0LDAuNjMxLDAuMTcyLDAuOTUyLDAuMjMyYzAuNTQ5LDAuMTk4LDEuMTE3LDAuMzM1LDEuNjk2LDAuNDA4YzAuMDgsMCwwLjE1MiwwLDAuMjMyLDBjMC4wOCwwLDAuMTUyLDAsMC4yMjQsMCAgICAgYzAuNjA5LTAuMDQ2LDEuMjExLTAuMTY0LDEuNzkyLTAuMzUyYzAuMzI5LTAuMDQsMC42NTUtMC4xMDEsMC45NzYtMC4xODRjMS4wODMtMC4zODUsMi4wNjktMS4wMDIsMi44ODgtMS44MDhsNDUuMjY0LTQ1LjI0OCAgICAgYzMuMDY5LTMuMTc4LDIuOTgyLTguMjQyLTAuMTk2LTExLjMxMmMtMy4xLTIuOTk0LTguMDE1LTIuOTk0LTExLjExNiwwbC0zMS45NzYsMzEuOTUyICAgICBDNDI1LjkzMyw5MC4zNywzMzEuMzgsMC4yODEsMjE2LjU2OCwwLjExMkMyMTYuMzY4LDAuMTA0LDIxNi4yLDAsMjE2LDBzLTAuMzY4LDAuMTA0LTAuNTY4LDAuMTEyICAgICBDOTYuNTgyLDAuMjc1LDAuMjc1LDk2LjU4MiwwLjExMiwyMTUuNDMyQzAuMTEyLDIxNS42MzIsMCwyMTUuOCwwLDIxNnMwLjEwNCwwLjM2OCwwLjExMiwwLjU2OCAgICAgYzAuMTk5LDExNS45MTcsOTEuOTM5LDIxMC45NywyMDcuNzc2LDIxNS4yOGgwLjI5NkMyMTIuNDgzLDQzMS44NDcsMjE2LjAxMyw0MjguNDQ4LDIxNi4xNzYsNDI0LjE1MnpcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMyMy40OCwxMDguNTJjLTMuMTI0LTMuMTIzLTguMTg4LTMuMTIzLTExLjMxMiwwTDIyNi4yLDE5NC40OGMtNi40OTUtMi44OTYtMTMuOTE0LTIuODk2LTIwLjQwOCwwbC00MC43MDQtNDAuNzA0ICAgICBjLTMuMTc4LTMuMDY5LTguMjQzLTIuOTgxLTExLjMxMiwwLjE5N2MtMi45OTQsMy4xLTIuOTk0LDguMDE1LDAsMTEuMTE1bDQwLjYyNCw0MC42MjRjLTUuNzA0LDExLjk0LTAuNjQ4LDI2LjI0NCwxMS4yOTMsMzEuOTQ3ICAgICBjOS4xNjUsNC4zNzgsMjAuMDk1LDIuNTAxLDI3LjI3NS00LjY4M2M3LjIxOS03LjE1OCw5LjA3OC0xOC4xMTgsNC42MjQtMjcuMjU2bDg1Ljg4OC04NS44ODggICAgIEMzMjYuNjAzLDExNi43MDgsMzI2LjYwMywxMTEuNjQ0LDMyMy40OCwxMDguNTJ6IE0yMjEuNjU4LDIyMS42NTRjLTAuMDAxLDAuMDAxLTAuMDAxLDAuMDAxLTAuMDAyLDAuMDAyICAgICBjLTMuMTY0LDMuMDI1LTguMTQ4LDMuMDI1LTExLjMxMiwwYy0zLjEyNS0zLjEyNC0zLjEyNS04LjE4OS0wLjAwMi0xMS4zMTRjMy4xMjQtMy4xMjUsOC4xODktMy4xMjUsMTEuMzE0LTAuMDAyICAgICBDMjI0Ljc4MSwyMTMuNDY0LDIyNC43ODEsMjE4LjUzLDIyMS42NTgsMjIxLjY1NHpcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPic7XHJcblxyXG5leHBvcnQgY29uc3Qgc3Znb2ZmZXIgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgLTE0IDUxMi4wMDAwMSA1MTJcIj5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTM2Ljk2NDg0NCAzMDguMjM0Mzc1YzQuNzgxMjUtMi43NTc4MTMgNi40MTc5NjgtOC44Nzg5MDYgMy42NjAxNTYtMTMuNjYwMTU2LTIuNzYxNzE5LTQuNzc3MzQ0LTguODc4OTA2LTYuNDE3OTY5LTEzLjY2MDE1Ni0zLjY2MDE1Ny00Ljc4MTI1IDIuNzYxNzE5LTYuNDIxODc1IDguODgyODEzLTMuNjYwMTU2IDEzLjY2MDE1NyAyLjc1NzgxMiA0Ljc4MTI1IDguODc4OTA2IDYuNDIxODc1IDEzLjY2MDE1NiAzLjY2MDE1NnptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm05NS45ODQzNzUgMzc3LjI1MzkwNiA1MC4zNTkzNzUgODcuMjMwNDY5YzEwLjg2NzE4OCAxOC44NDM3NSAzNS4zMTI1IDI1LjgyMDMxMyA1NC42NDQ1MzEgMTQuNjQ0NTMxIDE5LjEyODkwNy0xMS4wNTQ2ODcgMjUuNzAzMTI1LTM1LjQ5NjA5NCAxNC42MzY3MTktNTQuNjQwNjI1bC0zMC01MS45Njg3NSAyNS45ODA0NjktMTVjNC43ODEyNS0yLjc2NTYyNSA2LjQyMTg3NS04Ljg3ODkwNiAzLjY2MDE1Ni0xMy42NjAxNTZsLTEzLjAwMzkwNi0yMi41MjM0MzdjMS41NTA3ODEtLjMwMDc4MiAxMS43NDYwOTMtMi4zMDA3ODIgMTkxLjUzOTA2Mi0zNy41NzAzMTMgMjIuMjI2NTYzLTEuMjA3MDMxIDM1LjU0Mjk2OS0yNS41MTU2MjUgMjQuMzE2NDA3LTQ0Ljk0OTIxOWwtMzMuMjM0Mzc2LTU3LjU2MjUgMjEuMjM4MjgyLTMyLjE2Nzk2OGMyLjA4NTkzNy0zLjE2NDA2MyAyLjIxMDkzNy03LjIzMDQ2OS4zMTY0MDYtMTAuNTExNzE5bC0yMC0zNC42NDA2MjVjLTEuODk0NTMxLTMuMjgxMjUtNS40OTIxODgtNS4yMDMxMjUtOS4yNjE3MTktNC45ODA0NjlsLTM4LjQ3MjY1NiAyLjMwODU5NC0zNi44OTQ1MzEtNjMuOTA2MjVjLTUuMzQzNzUtOS4yNTc4MTMtMTQuOTE3OTY5LTE0Ljg2MzI4MS0yNS42MDU0NjktMTQuOTk2MDk0LS4xMjg5MDYtLjAwMzkwNi0uMjUzOTA2LS4wMDM5MDYtLjM4MjgxMy0uMDAzOTA2LTEwLjMyODEyNCAwLTE5LjcwMzEyNCA1LjE0MDYyNS0yNS4yNTc4MTIgMTMuODMyMDMxbC0xMzAuNjMyODEyIDE2Ni40MTQwNjItODQuOTI1NzgyIDQ5LjAzMTI1Yy0zMy40MDIzNDQgMTkuMjc3MzQ0LTQ0Ljk3MjY1NiA2Mi4xMjg5MDctMjUuNjIxMDk0IDk1LjYyMTA5NCAxNy42Nzk2ODggMzAuNjI1IDU0Ljk1MzEyNiA0Mi42NzE4NzUgODYuNjAxNTYzIDMwem0xMDIuMzI0MjE5IDU3LjIzODI4MmM1LjUyMzQzNyA5LjU1NDY4NyAyLjI1MzkwNiAyMS43ODEyNS03LjMyODEyNSAyNy4zMTY0MDYtOS42MTMyODEgNS41NTg1OTQtMjEuODU1NDY5IDIuMTQ0NTMxLTI3LjMxNjQwNy03LjMyMDMxM2wtNTAtODYuNjEzMjgxIDM0LjY0MDYyNi0yMGM1Ny44NjcxODcgMTAwLjI0MjE4OCA0OS4wNzQyMTggODUuMDExNzE5IDUwLjAwMzkwNiA4Ni42MTcxODh6bS0yMi42ODM1OTQtNzkuMjk2ODc2LTEwLTE3LjMyMDMxMiAxNy4zMjAzMTItMTAgMTAgMTcuMzIwMzEyem0xOTYuNTgyMDMxLTIzNS45MTAxNTYgMTMuODIwMzEzIDIzLjkzNzUtMTIuMzI0MjE5IDE4LjY2NDA2My0yMy44MjAzMTMtNDEuMjYxNzE5em0tMTA0LjkxNzk2OS03Mi4xMzI4MTJjMi42ODM1OTQtNC4zOTA2MjUgNi45NDE0MDctNC44NDM3NSA4LjY2Nzk2OS00Ljc5Njg3NSAxLjcwNzAzMS4wMTk1MzEgNS45NjA5MzguNTUwNzgxIDguNTI3MzQ0IDQuOTk2MDkzbDExNi4zMTI1IDIwMS40NjQ4NDRjMy43ODkwNjMgNi41NTg1OTQtLjgxNjQwNiAxNC44MDQ2ODgtOC40MTQwNjMgMTQuOTkyMTg4LTEuMzYzMjgxLjAzMTI1LTEuOTkyMTg3LjI3NzM0NC01LjQ4NDM3NC45Mjk2ODdsLTEyMy4wMzUxNTctMjEzLjEwNTQ2OWMyLjU4MjAzMS0zLjMyMDMxMiAyLjkxNDA2My0zLjY0MDYyNCAzLjQyNTc4MS00LjQ4MDQ2OHptLTE2LjczNDM3NCAyMS40MzM1OTQgMTE1LjU5NzY1NiAyMDAuMjIyNjU2LTE3NC40NjA5MzggMzQuMjE4NzUtNTMuMDQ2ODc1LTkxLjg3ODkwNnptLTIyMy44NTE1NjMgMjY4LjY2Nzk2OGMtNC4zOTA2MjUtNy41OTc2NTYtNi43MTA5MzctMTYuMjIyNjU2LTYuNzEwOTM3LTI0Ljk0OTIxOCAwLTE3LjgzNTkzOCA5LjU4NTkzNy0zNC40NDUzMTMgMjUuMDExNzE4LTQzLjM1MTU2M2w3Ny45NDE0MDYtNDUgNTAgODYuNjAxNTYzLTc3Ljk0MTQwNiA0NS4wMDM5MDZjLTIzLjg3ODkwNiAxMy43ODEyNS01NC41MTU2MjUgNS41NzAzMTItNjguMzAwNzgxLTE4LjMwNDY4OHptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xMDUuOTg0Mzc1IDMxNC41NzQyMTljLTIuNzYxNzE5LTQuNzgxMjUtOC44Nzg5MDYtNi40MjE4NzUtMTMuNjYwMTU2LTMuNjYwMTU3bC0xNy4zMjAzMTMgMTBjLTQuNzczNDM3IDIuNzU3ODEzLTEwLjkwMjM0NCAxLjExMzI4Mi0xMy42NjAxNTYtMy42NjAxNTYtMi43NjE3MTktNC43ODEyNS04Ljg3ODkwNi02LjQyMTg3NS0xMy42NjAxNTYtMy42NjAxNTZzLTYuNDIxODc1IDguODc4OTA2LTMuNjYwMTU2IDEzLjY2MDE1NmM4LjIzMDQ2OCAxNC4yNTc4MTMgMjYuNTg5ODQzIDE5LjI4NTE1NiA0MC45ODA0NjggMTAuOTgwNDY5bDE3LjMyMDMxMy0xMGM0Ljc4MTI1LTIuNzYxNzE5IDYuNDIxODc1LTguODc1IDMuNjYwMTU2LTEzLjY2MDE1NnptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm00OTcuMTM2NzE5IDQzLjc0NjA5NC01NS43MjI2NTcgMzEuMDA3ODEyYy00LjgyNDIxOCAyLjY4NzUtNi41NjI1IDguNzc3MzQ0LTMuODc1IDEzLjYwMTU2MyAyLjY3OTY4OCA0LjgyMDMxMiA4Ljc2NTYyNiA2LjU2NjQwNiAxMy42MDE1NjMgMy44NzVsNTUuNzE4NzUtMzEuMDA3ODEzYzQuODI4MTI1LTIuNjg3NSA2LjU2MjUtOC43NzczNDQgMy44NzUtMTMuNjAxNTYyLTIuNjgzNTk0LTQuODI4MTI1LTguNzczNDM3LTYuNTYyNS0xMy41OTc2NTYtMy44NzV6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDkxLjI5Mjk2OSAxNDcuMzE2NDA2LTM4LjYzNjcxOS0xMC4zNTE1NjJjLTUuMzM1OTM4LTEuNDI5Njg4LTEwLjgyMDMxMiAxLjczNDM3NS0xMi4yNSA3LjA3MDMxMi0xLjQyOTY4OCA1LjMzNTkzOCAxLjczODI4MSAxMC44MTY0MDYgNy4wNzQyMTkgMTIuMjQ2MDk0bDM4LjY0MDYyNSAxMC4zNTE1NjJjNS4zNjcxODcgMS40NDE0MDcgMTAuODI0MjE4LTEuNzczNDM3IDEyLjI0NjA5NC03LjA3MDMxMiAxLjQyOTY4Ny01LjMzNTkzOC0xLjczODI4Mi0xMC44MjAzMTItNy4wNzQyMTktMTIuMjQ2MDk0em0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTM5NC4xOTkyMTkgNy40MTQwNjItMTAuMzYzMjgxIDM4LjY0MDYyNmMtMS40Mjk2ODggNS4zMzU5MzcgMS43MzQzNzQgMTAuODE2NDA2IDcuMDcwMzEyIDEyLjI1IDUuMzMyMDMxIDEuNDI1NzgxIDEwLjgxNjQwNi0xLjczMDQ2OSAxMi4yNS03LjA3MDMxM2wxMC4zNTkzNzUtMzguNjQwNjI1YzEuNDI5Njg3LTUuMzM1OTM4LTEuNzM0Mzc1LTEwLjgyMDMxMi03LjA3MDMxMy0xMi4yNS01LjMzMjAzMS0xLjQyOTY4OC0xMC44MTY0MDYgMS43MzQzNzUtMTIuMjQ2MDkzIDcuMDcwMzEyem0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+JztcclxuZXhwb3J0IGNvbnN0IHN2Z3BheW1lbnQgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIj5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00OTguNDA5LDE3NS43MDZMMzM2LjI4MywxMy41ODJjLTguNzUyLTguNzUxLTIwLjQyMy0xMy41NzEtMzIuODY1LTEzLjU3MWMtMTIuNDQxLDAtMjQuMTEzLDQuODE4LTMyLjg2NSwxMy41NjkgICAgIEwxMy41NzEsMjcwLjU2M0M0LjgyLDI3OS4zMTUsMCwyOTAuOTg1LDAsMzAzLjQyN2MwLDEyLjQ0Miw0LjgyLDI0LjExNCwxMy41NzEsMzIuODY0bDE5Ljk5MiwxOS45OTIgICAgIGMwLjAwMiwwLjAwMSwwLjAwMywwLjAwMywwLjAwNSwwLjAwNWMwLjAwMiwwLjAwMiwwLjAwNCwwLjAwNCwwLjAwNiwwLjAwNmwxMzQuMzYsMTM0LjM2SDE0OS4zMyAgICAgYy01Ljg5LDAtMTAuNjY2LDQuNzc1LTEwLjY2NiwxMC42NjZjMCw1Ljg5LDQuNzc2LDEwLjY2NiwxMC42NjYsMTAuNjY2aDU5LjE4OWMwLjAxNCwwLDAuMDI3LDAuMDAxLDAuMDQxLDAuMDAxICAgICBzMC4wMjctMC4wMDEsMC4wNDEtMC4wMDFsMTU0LjA1MywwLjAwMmM1Ljg5LDAsMTAuNjY2LTQuNzc2LDEwLjY2Ni0xMC42NjZjMC01Ljg5MS00Ljc3Ni0xMC42NjYtMTAuNjY2LTEwLjY2NmwtMTEzLjQ2NC0wLjAwMiAgICAgTDQ5OC40MSwyNDEuNDM0QzUxNi41MywyMjMuMzEyLDUxNi41MywxOTMuODI2LDQ5OC40MDksMTc1LjcwNnogTTQ4My4zMjUsMjI2LjM1TDIyNi4zNDEsNDgzLjMzNCAgICAgYy00LjcxMyw0LjcxMi0xMS4wMTMsNy4zMS0xNy43NDIsNy4zMmgtMC4wODFjLTYuNzI3LTAuMDExLTEzLjAyNS0yLjYwOC0xNy43MzYtNy4zMkw1Ni4xOTUsMzQ4Ljc0NkwzMDIuOTksMTAxLjk0OSAgICAgYzQuMTY1LTQuMTY1LDQuMTY1LTEwLjkxOSwwLTE1LjA4NGMtNC4xNjYtNC4xNjUtMTAuOTE4LTQuMTY1LTE1LjA4NSwwLjAwMUw0MS4xMSwzMzMuNjYzbC0xMi40NTYtMTIuNDU2ICAgICBjLTQuNzIxLTQuNzIxLTcuMzIxLTExLjAzNS03LjMyMS0xNy43NzljMC02Ljc0NCwyLjYtMTMuMDU5LDcuMzIyLTE3Ljc4MUwyODUuNjM3LDI4LjY2NWM0LjcyMi00LjcyMSwxMS4wMzctNy4zMjEsMTcuNzgxLTcuMzIxICAgICBjNi43NDQsMCwxMy4wNTksMi42LDE3Ljc4MSw3LjMyMmw1Ny43MDMsNTcuNzAybC0yNDYuNzk4LDI0Ni44Yy00LjE2NSw0LjE2NC00LjE2NSwxMC45MTgsMCwxNS4wODUgICAgIGMyLjA4MywyLjA4Miw0LjgxMywzLjEyMyw3LjU0MiwzLjEyM2MyLjcyOSwwLDUuNDU5LTEuMDQyLDcuNTQyLTMuMTI0bDI0Ni43OTgtMjQ2Ljc5OWw4OS4zMzksODkuMzM2ICAgICBDNDkzLjEyOCwyMDAuNTkzLDQ5My4xMjcsMjE2LjU0Niw0ODMuMzI1LDIyNi4zNXpcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNjIuODAxLDMwOC4wNjRjLTQuMTY1LTQuMTY1LTEwLjkxNy00LjE2NC0xNS4wODUsMGwtODMuOTM0LDgzLjkzM2MtNC4xNjUsNC4xNjUtNC4xNjUsMTAuOTE4LDAsMTUuMDg1ICAgICBjMi4wODMsMi4wODMsNC44MTMsMy4xMjQsNy41NDIsMy4xMjRjMi43MjksMCw1LjQ1OS0xLjA0Miw3LjU0Mi0zLjEyNGw4My45MzQtODMuOTMzICAgICBDMjY2Ljk2NiwzMTguOTgyLDI2Ni45NjYsMzEyLjIyOSwyNjIuODAxLDMwOC4wNjR6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjI4LjM3NSwzODcuNzQxbC0zNC40MjUsMzQuNDI1Yy00LjE2NSw0LjE2NS00LjE2NSwxMC45MTksMCwxNS4wODVjMi4wODMsMi4wODIsNC44MTMsMy4xMjQsNy41NDIsMy4xMjQgICAgIGMyLjczMSwwLDUuNDU5LTEuMDQyLDcuNTQyLTMuMTI0bDM0LjQyNS0zNC40MjVjNC4xNjUtNC4xNjUsNC4xNjUtMTAuOTE5LDAtMTUuMDg1ICAgICBDMjM5LjI5NCwzODMuNTc1LDIzMi41NDMsMzgzLjU3NSwyMjguMzc1LDM4Ny43NDF6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYwLjA1NCwzNTYuMDY1bC00LjUyNSw0LjUyNGMtNC4xNjYsNC4xNjUtNC4xNjYsMTAuOTE4LTAuMDAxLDE1LjA4NWMyLjA4MiwyLjA4Myw0LjgxMywzLjEyNSw3LjU0MiwzLjEyNSAgICAgYzIuNzI5LDAsNS40NTktMS4wNDIsNy41NDEtMy4xMjVsNC41MjUtNC41MjRjNC4xNjYtNC4xNjUsNC4xNjYtMTAuOTE4LDAuMDAxLTE1LjA4NCAgICAgQzI3MC45NzQsMzUxLjkwMSwyNjQuMjE5LDM1MS45LDI2MC4wNTQsMzU2LjA2NXpcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDcuMDczLDE2My43OTNjLTItMi00LjcxMy0zLjEyNC03LjU0Mi0zLjEyNGMtMi44MjksMC01LjU0MSwxLjEyNC03LjU0MiwzLjEyNGwtNDUuMjU1LDQ1LjI1NCAgICAgYy0yLDIuMDAxLTMuMTI0LDQuNzEzLTMuMTI0LDcuNTQyczEuMTI0LDUuNTQyLDMuMTI0LDcuNTQybDMwLjE3LDMwLjE2N2MyLjA4MywyLjA4Myw0LjgxMywzLjEyNCw3LjU0MiwzLjEyNCAgICAgYzIuNzMxLDAsNS40NTktMS4wNDIsNy41NDItMy4xMjRsNDUuMjUzLTQ1LjI1MmM0LjE2NS00LjE2NSw0LjE2NS0xMC45MTksMC0xNS4wODRMNDA3LjA3MywxNjMuNzkzeiBNMzg0LjQ0NSwyMzEuNjczICAgICBsLTE1LjA4NS0xNS4wODRsMzAuMTctMzAuMTY5bDE1LjA4NCwxNS4wODVMMzg0LjQ0NSwyMzEuNjczelwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMyMC4zMzksODAuMTg2YzIuNzMxLDAsNS40NjEtMS4wNDIsNy41NDMtMy4xMjZsNC41MjUtNC41MjdjNC4xNjQtNC4xNjYsNC4xNjMtMTAuOTItMC4wMDMtMTUuMDg0ICAgICBjLTQuMTY1LTQuMTY0LTEwLjkyLTQuMTYzLTE1LjA4NCwwLjAwM2wtNC41MjUsNC41MjdjLTQuMTY0LDQuMTY2LTQuMTYzLDEwLjkyLDAuMDAzLDE1LjA4NCAgICAgQzMxNC44ODEsNzkuMTQ2LDMxNy42MDksODAuMTg2LDMyMC4zMzksODAuMTg2elwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwNy4yMTUsMzU4LjA1N2wtNC41MjUsNC41MjVjLTQuMTY1LDQuMTY0LTQuMTY1LDEwLjkxOCwwLDE1LjA4NWMyLjA4MywyLjA4Miw0LjgxMywzLjEyMyw3LjU0MiwzLjEyMyAgICAgczUuNDU5LTEuMDQxLDcuNTQyLTMuMTIzbDQuNTI1LTQuNTI1YzQuMTY1LTQuMTY2LDQuMTY1LTEwLjkyLDAtMTUuMDg1QzExOC4xMzMsMzUzLjg5MSwxMTEuMzgxLDM1My44OTEsMTA3LjIxNSwzNTguMDU3elwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPic7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==