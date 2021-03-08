module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/common/Collections/TabCollection1.js":
/*!*********************************************************!*\
  !*** ./components/common/Collections/TabCollection1.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-box/ProductBox1 */ "./components/common/product-box/ProductBox1.js");
/* harmony import */ var _helpers_cart_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/cart/index */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PostLoader */ "./components/common/PostLoader.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/assets/images/empty-search.jpg */ "./public/assets/images/empty-search.jpg");
/* harmony import */ var _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\common\\Collections\\TabCollection1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const SpecialProducts = ({
  type,
  fluid,
  designClass,
  cartClass,
  heading,
  noTitle,
  title,
  inner,
  line,
  hrClass,
  backImage
}) => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('new');
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_5__["WishlistContext"]);
  const compareContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_7__["CompareContext"]);
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_8__["CurrencyContext"]);
  const currency = curContext.state;
  const quantity = context.quantity;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        await axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://dz1vgymd2a.execute-api.us-east-1.amazonaws.com/Dev/products" + "/tag?tag=" + activeTab + '&game=1').then(function (result) {
          if (result.status != 200) throw "";
          setData(result.data.Content);
        }).catch(function (error) {
          console.log(error);
        });
      } catch {
        setActiveTab(activeTab);
        console.log('failed');
      }

      setIsLoading(false);
    }

    fetchData();
  }, [activeTab]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: designClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, noTitle ? '' : __jsx("div", {
    className: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, heading), __jsx("h2", {
    className: inner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, "special products"), line ? __jsx("div", {
    className: "line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }) : hrClass ? __jsx("hr", {
    role: "tournament6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 45
    }
  }) : ''), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    className: "theme-tab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    className: "tabs tab-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: activeTab == type ? 'active' : '',
    onClick: () => setActiveTab('new'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "NEW ARRIVAL"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: activeTab == 'furniture' ? 'active' : '',
    onClick: () => setActiveTab('sale'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "SALES "), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: activeTab == 'furniture' ? 'active' : '',
    onClick: () => setActiveTab('special'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, "SPECIAL")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "no-slider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, isLoading ? __jsx("div", {
    className: "row mx-0 margin-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }))) : data.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 49
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Media"], {
    src: _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 53
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 53
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 57
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 53
    }
  }, "Explore more shortlist some items.")))) : data && data.slice(0, 8).map((product, i) => __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: i,
    product: product,
    symbol: currency.symbol,
    addCompare: () => compareContext.addToCompare(product),
    addCart: () => context.addToCart(product, quantity),
    addWishlist: () => wishListContext.addToWish(product),
    cartClass: cartClass,
    backImage: backImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SpecialProducts);

/***/ }),

/***/ "./components/common/PostLoader.js":
/*!*****************************************!*\
  !*** ./components/common/PostLoader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\common\\PostLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "skeleton-svg",
  speed: 10,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("rect", {
  className: "skeleton-img",
  x: "2",
  y: "2",
  rx: "0",
  ry: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("rect", {
  className: "skeleton-c1",
  x: "0",
  rx: "0",
  ry: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("rect", {
  className: "skeleton-c2",
  x: "0",
  rx: "0",
  ry: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("rect", {
  className: "skeleton-c3",
  x: "0",
  rx: "0",
  ry: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (PostLoader);

/***/ }),

/***/ "./components/common/Service/service1.js":
/*!***********************************************!*\
  !*** ./components/common/Service/service1.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/script */ "./services/script.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\common\\Service\\service1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ServiceLayout = ({
  sectionClass
}) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: sectionClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "7",
    className: "service-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: _services_script__WEBPACK_IMPORTED_MODULE_1__["svgservice"]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "media-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, "24 X 7 service"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, "Always online for you")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4",
    className: "service-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: _services_script__WEBPACK_IMPORTED_MODULE_1__["svgoffer"]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "media-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, "festival offer"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, "Subscribe for new offers")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceLayout);

/***/ }),

/***/ "./components/common/product-box/ProductBox1.js":
/*!******************************************************!*\
  !*** ./components/common/product-box/ProductBox1.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\common\\product-box\\ProductBox1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductItem = ({
  product,
  addCart,
  backImage,
  des,
  addWishlist,
  cartClass,
  productDetail,
  addCompare,
  title
}) => {
  // eslint-disable-next-line
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__["CurrencyContext"]);
  const currency = curContext.state;
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalServer,
    1: setModalServer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: modalCompare,
    1: setModalCompare
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleCompare = () => setModalCompare(!modalCompare);

  const toggle = () => setModal(!modal);

  const uniqueTags = [];

  const onClickHandle = img => {
    setImage(img);
  };

  const changeQty = e => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    const titleProps = product.title.split(' ').join('');
    router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
  };

  const variantChangeByColor = (imgId, product_images) => {
    product_images.map(data => {
      if (data.image_id == imgId) {
        setImage(data.src);
      }
    });
  };

  const getFactorForItem = variants => {
    console.log(modalServer);

    for (let j = 0; j < variants.length; j++) {
      if (variants[j].name == modalServer) {
        return variants[j].factor;
      }
    }

    return 1.0;
  };

  const onChangeModalFactor = e => {
    console.log(e.target.value);
    let server = e.target.value.split(' ')[0];
    setModalServer(server);
  };

  let RatingStars = [];
  let rating = 5;

  for (var i = 0; i < rating; i++) {
    RatingStars.push(__jsx("i", {
      className: "fa fa-star",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 26
      }
    }));
  }

  return __jsx("div", {
    className: "product-box product-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "img-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "lable-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, product.new === true ? __jsx("span", {
    className: "lable3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 47
    }
  }, "new") : '', product.sale === true ? __jsx("span", {
    className: "lable4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 48
    }
  }, "on sale") : ''), __jsx("div", {
    className: "front",
    onClick: clickProductDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${image ? image : product.images[0].src}`,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  })), backImage ? product.images[0] === 'undefined' ? 'false' : __jsx("div", {
    className: "back",
    onClick: clickProductDetail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${image ? image : product.images[0].src}`,
    className: "img-fluid m-auto",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  })) : '', __jsx("div", {
    className: cartClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("button", {
    title: "Add to cart",
    onClick: addCart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: null,
    title: "Add to Wishlist",
    onClick: addWishlist,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: null,
    title: "Quick View",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-search",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: null,
    title: "Compare",
    onClick: toggleCompare,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-refresh",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modalCompare,
    toggle: toggleCompare,
    size: "lg",
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "compare-modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${product.variants ? image ? image : product.images[0].src : product.images[0].src}`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "media-body align-self-center text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fa fa-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 49
    }
  }), "Item ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 85
    }
  }, product.title), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 49
    }
  }, "successfully added to your Compare list")), __jsx("div", {
    className: "buttons d-flex justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/compare",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: null,
    className: "btn-sm btn-solid",
    onClick: addCompare,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 53
    }
  }, "View Compare list")))))))))), product.images ? __jsx("ul", {
    className: "product-thumb-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, product.images.map((img, i) => __jsx("li", {
    className: `grid_thumb_img ${img.src === image ? 'active' : ''}`,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: null,
    title: "Add to Wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${img.src}`,
    alt: "wishlist",
    onClick: () => onClickHandle(img.src),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }))))) : ''), __jsx("div", {
    className: `product-detail ${productDetail}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, product.title), des ? __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, product.description) : '', __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, currency.symbol, ((product.price - product.price * product.discount / 100) * currency.value).toFixed(2), product.sale ? __jsx("del", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "money",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 46
    }
  }, currency.symbol, (product.price * currency.value).toFixed(2))) : ''), product.variants.map(vari => {
    var findItem = uniqueTags.find(x => x.color === vari.color);
    if (!findItem) uniqueTags.push(vari);
  }), product.type === 'jewellery' || product.type === 'nursery' || product.type === 'beauty' || product.type === 'electronics' || product.type === 'goggles' || product.type === 'watch' || product.type === 'pets' ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title !== 'Product style 4' && uniqueTags[0].color ? __jsx("ul", {
    className: "color-variant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 37
    }
  }, uniqueTags.map((vari, i) => {
    return __jsx("li", {
      className: vari.color,
      key: i,
      title: vari.color,
      onClick: () => variantChangeByColor(vari.image_id, product.images),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 49
      }
    });
  })) : ''))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: "quickview-modal",
    size: "lg",
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    xs: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "quick-view-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${product.variants ? image ? image : product.images[0].src : product.images[0].src}`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 37
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    className: "rtl-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "product-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 33
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 37
    }
  }, " ", product.title, " "), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  }, currency.symbol, (product.price * currency.value * getFactorForItem(product.variants)).toFixed(2)), product.variants ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "select",
    name: "Server",
    onChange: onChangeModalFactor,
    defaultValue: () => {
      setModalServerDefault('');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 41
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  }, "Choose a server..."), product.variants.map((server, i) => {
    return __jsx("option", {
      key: i,
      value: server.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 57
      }
    }, server.name, " x ", server.factor);
  })) : '', __jsx("div", {
    className: "border-product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }, __jsx("h6", {
    className: "product-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 41
    }
  }, "product details"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }, product.description)), __jsx("div", {
    className: "product-description border-product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 37
    }
  }, product.size ? __jsx("div", {
    className: "size-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 49
    }
  }, product.size.map((size, i) => {
    return __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 64
      }
    }, __jsx("a", {
      href: null,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 76
      }
    }, size));
  }))) : '', __jsx("h6", {
    className: "product-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 41
    }
  }, "quantity"), __jsx("div", {
    className: "qty-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "input-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "input-group-prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 49
    }
  }, __jsx("button", {
    type: "button",
    className: "btn quantity-left-minus",
    onClick: minusQty,
    "data-type": "minus",
    "data-field": "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 53
    }
  }, __jsx("i", {
    className: "fa fa-angle-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 57
    }
  }))), __jsx("input", {
    type: "text",
    name: "quantity",
    value: quantity,
    onChange: changeQty,
    className: "form-control input-number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 49
    }
  }), __jsx("span", {
    className: "input-group-prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 49
    }
  }, __jsx("button", {
    type: "button",
    className: "btn quantity-right-plus",
    onClick: plusQty,
    "data-type": "plus",
    "data-field": "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 53
    }
  }, __jsx("i", {
    className: "fa fa-angle-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 57
    }
  })))))), __jsx("div", {
    className: "product-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 37
    }
  }, __jsx("button", {
    className: "btn btn-solid",
    onClick: () => addCart(product, quantity),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 41
    }
  }, "add to cart"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./components/constant/i18n.js":
/*!*************************************!*\
  !*** ./components/constant/i18n.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-browser-languagedetector */ "i18next-browser-languagedetector");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);



i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1___default.a).use(react_i18next__WEBPACK_IMPORTED_MODULE_2__["initReactI18next"]).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'topbar_title': 'Welcome to Our store Multikart',
        'call_us': 'Call Us',
        'Home': 'Home',
        'features': 'features',
        'new': 'new',
        "Blogs": "Blogs",
        'blog_left_sidebar': 'left sidebar',
        'blog_right_sidebar': 'right sidebar',
        'blog_detail': 'blog detail',
        'category_left_sidebar': 'left sidebar',
        'category_right_sidebar': 'right sidebar',
        'category_no_sidebar': 'no sidebar',
        'category_metro': 'metro',
        'category_full_width': 'full width',
        'Products': 'Products',
        'left_sidebar': 'left sidebar',
        'right_sidebar': 'right sidebar',
        'no_sidebar': 'no sidebar',
        'three_col_thumbnail_left': 'Thumbnail left',
        'three_col_thumbnail_right': 'Thumbnail right',
        'thumbnail_below': 'thumbnail below',
        'accordian_details': 'accordian details',
        'thumbnail_left': 'image left',
        'thumbnail_right': 'image right',
        'vertical_tab': 'vertical tab',
        'Pages': 'Pages',
        'about_us': 'about us',
        'lookbook': 'lookbook',
        'login': 'login',
        'register': 'register',
        'logout': 'Logout',
        'search': 'search',
        'wishlist': 'wishlist',
        'cart': 'cart',
        'collection': 'collection',
        'forget_password': 'forget password',
        'contact': 'contact',
        'checkout': 'checkout',
        'compare': 'compare',
        'order_success': 'order_success',
        'dashboard': 'Dashboard',
        'FAQ': 'FAQ',
        'Shop': 'Shop',
        'mens_fashion': 'mens fashion',
        'top': 'top',
        'bottom': 'bottom',
        'ethic_wear': 'ethic wear',
        'sports_wear': 'sports wear',
        'shirts': 'shirts',
        'women_fashion': 'womens fashion',
        'dresses': 'dresses',
        'skirts': 'skirts',
        'westarn_wear': 'westarn wear',
        'ethnic_wear': 'ethnic wear',
        'sport_wear': 'aport wear',
        'bottom_wear': 'bottom wear',
        'kids_fashion': 'kidss fashion',
        'accessories': 'Accessories',
        'fashion_jewellery': 'Fashion Jewellery',
        'caps_and_hats': 'caps and hats',
        'precious_jewellery': 'precious jewellery',
        'necklaces': 'necklaces',
        'earrings': 'earrings',
        'rings_wrist_wear': 'rings & wrist wear',
        'men_accessories': 'mens accessories',
        'ties': 'ties',
        'cufflinks': 'cufflinks',
        'pockets_squares': 'pockets squares',
        'helmets': 'helmets',
        'scarves': 'scarves',
        'phone_cases': 'phone cases',
        'my_account': 'My Account',
        'fashion': 'Fashion',
        'beauty': 'Beauty',
        'electronic': 'Electronic',
        'furniture': 'Furniture',
        'kids': 'Kids',
        'pets': 'Pets',
        'vegetables': 'Vegetables',
        'watch': 'Watch',
        'theme_elements': 'theme elements',
        'element_title': 'element title',
        'collection_banner': 'collection banner',
        'home_slider': 'home slider',
        'category': 'category',
        'service': 'service',
        'image_size_ratio': 'image size ratio',
        'product_elements': 'product elements',
        'product_box': 'product box',
        'product_slider': 'product slider',
        'no_slider': 'no slider',
        'multi_slider': 'multi slider',
        'tab': 'tab',
        'email_template': 'email template',
        'portfolio': 'portfolio',
        'portfolio_grid_2': 'portfolio grid 2',
        'portfolio_grid_3': 'portfolio grid 3',
        'portfolio_grid_4': 'portfolio grid 4',
        'portfolio_masonary_2': 'masonary 2',
        'portfolio_masonary_3': 'masonary 3',
        'portfolio_masonary_4': 'masonary 4',
        'portfolio_masonary_full': 'masonary full width',
        'Become a partner': 'Become a partner',
        'About us': 'About us'
      }
    },
    fn: {
      translations: {
        'topbar_title': 'Bem vindo a PLAYER2',
        'call_us': 'Fale com a gente',
        'Home': 'Home',
        'features': 'features',
        'new': 'novidades',
        "Blogs": "Blogs",
        'blog_left_sidebar': 'left sidebar',
        'blog_right_sidebar': 'right sidebar',
        'blog_detail': 'blog detail',
        'category_left_sidebar': 'left sidebar',
        'category_right_sidebar': 'right sidebar',
        'category_no_sidebar': 'no sidebar',
        'category_metro': 'metro',
        'category_full_width': 'full width',
        'Products': 'Products',
        'left_sidebar': 'left sidebar',
        'right_sidebar': 'right sidebar',
        'no_sidebar': 'no sidebar',
        'three_col_thumbnail_left': 'Thumbnail left',
        'three_col_thumbnail_right': 'Thumbnail right',
        'thumbnail_below': 'thumbnail below',
        'accordian_details': 'accordian details',
        'thumbnail_left': 'image left',
        'thumbnail_right': 'image right',
        'vertical_tab': 'vertical tab',
        'Pages': 'Pages',
        'about_us': 'Quem somos nós',
        'lookbook': 'lookbook',
        'login': 'Entrar',
        'register': 'Registrar',
        'logout': 'Sair',
        'search': 'search',
        'wishlist': 'Lista de desejos',
        'cart': 'Carrinho',
        'collection': 'collection',
        'forget_password': 'esqueceu senha',
        'contact': 'contato',
        'checkout': 'finalizar',
        'order_success': 'order_success',
        'dashboard': 'Painel',
        'FAQ': 'FAQ',
        'Shop': 'Shop',
        'mens_fashion': 'mens fashion',
        'top': 'top',
        'bottom': 'bottom',
        'ethic_wear': 'ethic wear',
        'sports_wear': 'sports wear',
        'shirts': 'shirts',
        'women_fashion': 'womens fashion',
        'dresses': 'dresses',
        'skirts': 'skirts',
        'westarn_wear': 'westarn wear',
        'ethnic_wear': 'ethnic wear',
        'sport_wear': 'aport wear',
        'bottom_wear': 'bottom wear',
        'kids_fashion': 'kidss fashion',
        'accessories': 'Accessories',
        'fashion_jewellery': 'Fashion Jewellery',
        'caps_and_hats': 'caps and hats',
        'precious_jewellery': 'precious jewellery',
        'necklaces': 'necklaces',
        'earrings': 'earrings',
        'rings_wrist_wear': 'rings & wrist wear',
        'men_accessories': 'mens accessories',
        'ties': 'ties',
        'cufflinks': 'cufflinks',
        'pockets_squares': 'pockets squares',
        'helmets': 'helmets',
        'scarves': 'scarves',
        'phone_cases': 'phone cases',
        'my_account': 'Minha Conta',
        'fashion': 'Fashion',
        'beauty': 'Beauty',
        'electronic': 'Electronic',
        'furniture': 'Furniture',
        'kids': 'Kids',
        'pets': 'Pets',
        'vegetables': 'Vegetables',
        'watch': 'Watch',
        'theme_elements': 'theme elements',
        'element_title': 'element title',
        'collection_banner': 'collection banner',
        'home_slider': 'home slider',
        'category': 'category',
        'service': 'service',
        'image_size_ratio': 'image size ratio',
        'product_elements': 'product elements',
        'product_box': 'product box',
        'product_slider': 'product slider',
        'no_slider': 'no slider',
        'multi_slider': 'multi slider',
        'tab': 'tab',
        'email_template': 'email template',
        'portfolio': 'portfolio',
        'portfolio_grid_2': 'portfolio grid 2',
        'portfolio_grid_3': 'portfolio grid 3',
        'portfolio_grid_4': 'portfolio grid 4',
        'portfolio_masonary_2': 'masonary 2',
        'portfolio_masonary_3': 'masonary 3',
        'portfolio_masonary_4': 'masonary 4',
        'portfolio_masonary_full': 'masonary full width',
        'Become a partner': 'Representante',
        'About us': 'About us'
      }
    }
  },
  fallbackLng: "en",
  debug: true,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  // we use content as keys
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./components/constant/langConfig.json":
/*!*********************************************!*\
  !*** ./components/constant/langConfig.json ***!
  \*********************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"English\",\"val\":\"en\"},{\"lang\":\"Português\",\"val\":\"pt\"}]");

/***/ }),

/***/ "./components/constant/menu.js":
/*!*************************************!*\
  !*** ./components/constant/menu.js ***!
  \*************************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
const MENUITEMS = [{
  title: 'Gold',
  type: 'link',
  path: '/shop?product=gold'
}, {
  title: 'PVP',
  type: 'link',
  path: '/shop?product=pvp'
}, {
  title: 'Raid',
  type: 'link',
  path: '/shop?product=raid'
}, {
  title: 'Dungeon',
  type: 'link',
  path: '/shop?product=dungeon'
}, {
  title: 'Leveling ',
  type: 'link',
  path: '/shop?product=leveling'
}, {
  title: 'Transmog ',
  type: 'link',
  path: '/shop?product=transmog'
}];

/***/ }),

/***/ "./components/containers/CartContainer.js":
/*!************************************************!*\
  !*** ./components/containers/CartContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headers_common_cart_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../headers/common/cart-header */ "./components/headers/common/cart-header.js");
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\containers\\CartContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CartContainer = ({
  icon
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const currContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__["CurrencyContext"]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "onhover-div mobile-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "cart-qty-cls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, cartList.length), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/cart`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Media"], {
    src: icon,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }), __jsx("i", {
    className: "fa fa-shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }))), __jsx("ul", {
    className: "show-div shopping-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, cartList.map((item, index) => __jsx(_headers_common_cart_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    item: item,
    total: total,
    symbol: symbol,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), cartList.length > 0 ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "total",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, "subtotal : ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 52
    }
  }, symbol, total)))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "buttons view-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/cart`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, "view cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/checkout`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, "checkout"))))) : __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Your cart is currently empty.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartContainer);

/***/ }),

/***/ "./components/footers/common/copyright.js":
/*!************************************************!*\
  !*** ./components/footers/common/copyright.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/images/icon/visa.png */ "./public/assets/images/icon/visa.png");
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/images/icon/mastercard.png */ "./public/assets/images/icon/mastercard.png");
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/assets/images/icon/paypal.png */ "./public/assets/images/icon/paypal.png");
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/images/icon/american-express.png */ "./public/assets/images/icon/american-express.png");
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/images/icon/discover.png */ "./public/assets/images/icon/discover.png");
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\footers\\common\\copyright.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const CopyRight = ({
  layout,
  fluid
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `sub-footer ${layout}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "footer-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fa fa-copyright",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 36
    }
  }), " 2020-21 PLAYER2 Developer Studio"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "payment-card-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 53
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 53
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CopyRight);

/***/ }),

/***/ "./components/footers/footer-five.js":
/*!*******************************************!*\
  !*** ./components/footers/footer-five.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_copyright__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/copyright */ "./components/footers/common/copyright.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/script */ "./services/script.js");
/* harmony import */ var _headers_common_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../headers/common/logo */ "./components/headers/common/logo.js");
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\footers\\footer-five.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const FooterFive = ({
  layoutClass,
  logoName
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var contentwidth = window.innerWidth;

    if (contentwidth < 750) {
      Object(_services_script__WEBPACK_IMPORTED_MODULE_3__["SlideUpDown"])('footer-title');
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function (elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("footer", {
    className: "jewel-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "white-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("section", {
    className: "p-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "footer-theme2 section-light footer-border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: " footer-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "footer-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "footer-title footer-mobile-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 45
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 49
    }
  }, "about")), __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "footer-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 49
    }
  }, __jsx(_headers_common_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    logo: logoName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 56
    }
  })), __jsx("div", {
    className: "social-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 49
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 53
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 57
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 61
    }
  }, __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 112
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 57
    }
  }, __jsx("a", {
    href: "https://plus.google.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 61
    }
  }, __jsx("i", {
    className: "fa fa-google-plus",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 111
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 57
    }
  }, __jsx("a", {
    href: "https://twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 61
    }
  }, __jsx("i", {
    className: "fa fa-twitter",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 107
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 57
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 61
    }
  }, __jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 113
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 57
    }
  }, __jsx("a", {
    href: "https://rss.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 61
    }
  }, __jsx("i", {
    className: "fa fa-rss",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 103
    }
  }))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "form-p p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "footer-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "subscribe-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 41
    }
  }, __jsx("h2", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 45
    }
  }, "newsletter"), __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 49
    }
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "exampleFormControlInput",
    placeholder: "Enter your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 53
    }
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-solid black-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 53
    }
  }, "subscribe")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: " footer-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "footer-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "footer-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  }, "store information")), __jsx("div", {
    className: "footer-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  }, __jsx("ul", {
    className: "contact-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 53
    }
  }, "PLAYER2 Ecommerce for Gamers"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 53
    }
  }, "Call Us: 55 27 9123 4567"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 53
    }
  }, "Email: ", __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 64
    }
  }, "Support@PLAYER2.com"))))))))))), __jsx(_common_copyright__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: layoutClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 16
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterFive);

/***/ }),

/***/ "./components/headers/common/cart-header.js":
/*!**************************************************!*\
  !*** ./components/headers/common/cart-header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\headers\\common\\cart-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CartHeader = ({
  item,
  symbol
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/product/' + item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "media-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/product/' + item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 32
    }
  }, item.name))), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, item.qty, " x ", symbol, " ", (item.price - item.price * item.discount / 100).toFixed(2))))), __jsx("div", {
    className: "close-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: null,
    onClick: () => context.removeFromCart(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartHeader);

/***/ }),

/***/ "./components/headers/common/currency.js":
/*!***********************************************!*\
  !*** ./components/headers/common/currency.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/langConfig.json */ "./components/constant/langConfig.json");
var _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../constant/langConfig.json */ "./components/constant/langConfig.json", 1);
/* harmony import */ var _constant_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constant/i18n */ "./components/constant/i18n.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var _helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/apollo/apollo */ "./helpers/apollo/apollo.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\headers\\common\\currency.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Currency = ({
  icon
}) => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__["CurrencyContext"]);
  const selectedCurrency = Context.currencyContext.selectedCurrency;

  const changeLanguage = lng => {
    _constant_i18n__WEBPACK_IMPORTED_MODULE_5__["default"].changeLanguage(lng);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getCurrencies() {
      await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://economia.awesomeapi.com.br/all/BRL-USD').then(function (result) {
        if (result.status != 200) throw "";
        console.log(result);
        var currencies = [];
        let currency = result.data['BRL'];
        currencies.push({
          symbol: '$',
          currency: currency.codein,
          value: currency.high
        });
        currencies.push({
          symbol: 'R$',
          currency: 'BRL',
          value: 1
        });
        setData(currencies);
        return currencies;
      }).catch(function (error) {
        console.log(error);
      });
    }

    ;
    getCurrencies();
  }, []);
  return __jsx("li", {
    className: "onhover-div mobile-setting",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: icon,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 18
    }
  }), __jsx("i", {
    className: "fa fa-cog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "show-div setting",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "language"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, _constant_langConfig_json__WEBPACK_IMPORTED_MODULE_4__.map((item, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: null,
    onClick: () => {
      changeLanguage(item.val);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 38
    }
  }, item.lang)))), __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "currency"), __jsx("ul", {
    className: "list-inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, data && data.map((cur, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("div", {
    onClick: () => selectedCurrency(cur),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, cur.symbol, "  ", cur.currency))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_7__["withApollo"])(Currency));

/***/ }),

/***/ "./components/headers/common/logo.js":
/*!*******************************************!*\
  !*** ./components/headers/common/logo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\headers\\common\\logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoImage = ({
  logo
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: `/assets/images/icon/${logo ? logo : 'logo.png'}`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoImage);

/***/ }),

/***/ "./components/headers/common/navbar.js":
/*!*********************************************!*\
  !*** ./components/headers/common/navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./components/constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\headers\\common\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const NavBar = () => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  const {
    0: navClose,
    1: setNavClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: '0px'
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.innerWidth < 750) {
      setNavClose({
        right: '-410px'
      });
    }

    if (window.innerWidth < 1199) {
      setNavClose({
        right: '-300px'
      });
    }
  }, []);

  const openNav = () => {
    setNavClose({
      right: '0px'
    });
    if (router.asPath == '/layouts/Gym') document.querySelector("#topHeader").classList.add("zindex-class");
  };

  const closeNav = () => {
    setNavClose({
      right: '-410px'
    });
    if (router.asPath == '/layouts/Gym') document.querySelector("#topHeader").classList.remove("zindex-class");
  }; // eslint-disable-next-line


  const onMouseEnterHandler = () => {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  };

  const handleMegaSubmenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu')) event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu');else {
      document.querySelectorAll('.menu-content').forEach(function (value) {
        value.classList.remove('opensubmegamenu');
      });
      event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu');
    }
  };

  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

  const openMblNav = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensubmenu')) event.target.nextElementSibling.classList.remove('opensubmenu');else {
      document.querySelectorAll('.nav-submenu').forEach(function (value) {
        value.classList.remove('opensubmenu');
      });
      document.querySelector('.mega-menu-container').classList.remove('opensubmenu');
      event.target.nextElementSibling.classList.add('opensubmenu');
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "main-navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "mainnav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "toggle-nav",
    onClick: openNav.bind(undefined),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  })), __jsx("ul", {
    className: "nav-menu",
    style: navClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "back-btn",
    onClick: closeNav.bind(undefined),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mobile-back text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, "Back  navbar"), __jsx("i", {
    className: "fa fa-angle-right pl-2",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 33
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/headers/common/topbar-dark.js":
/*!**************************************************!*\
  !*** ./components/headers/common/topbar-dark.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/base */ "./config/base.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/login */ "./helpers/login/index.js");
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\headers\\common\\topbar-dark.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const TopBarDark = ({
  topClass,
  fluid
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const loginContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_login__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const isLogged = loginContext.state.status == 0;

  const logout = () => {
    loginContext.logOut();
    router.push('/');
  };

  return __jsx("div", {
    className: topClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "header-contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, "Welcome to PLAYER2")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "header-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "mobile-wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page/account/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 40
    }
  }), " wishlist"))), __jsx("li", {
    className: "onhover-dropdown mobile-account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }), " My Account", __jsx("ul", {
    className: "onhover-show-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, !isLogged ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/login`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 49
    }
  }, "Login"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/register`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 49
    }
  }, "Register")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `#`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 49
    }
  }, "Orders")))), __jsx("li", {
    onClick: () => logout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, "Logout")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBarDark);

/***/ }),

/***/ "./components/headers/header-three.js":
/*!********************************************!*\
  !*** ./components/headers/header-three.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/navbar */ "./components/headers/common/navbar.js");
/* harmony import */ var _containers_CartContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/CartContainer */ "./components/containers/CartContainer.js");
/* harmony import */ var _common_currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/currency */ "./components/headers/common/currency.js");
/* harmony import */ var _common_topbar_dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/topbar-dark */ "./components/headers/common/topbar-dark.js");
/* harmony import */ var _common_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/logo */ "./components/headers/common/logo.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/images/icon/search.png */ "./public/assets/images/icon/search.png");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/images/icon/setting.png */ "./public/assets/images/icon/setting.png");
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/icon/cart.png */ "./public/assets/images/icon/cart.png");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\components\\headers\\header-three.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const HeaderThree = props => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /*=====================
       Pre loader
       ==========================*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display: none";
    }, 2000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; // if (number >= 150) {
    //     if (window.innerWidth < 576) {
    //         document.getElementById("sticky").classList.remove('fixed');
    //     } else
    //         document.getElementById("sticky").classList.add('fixed');
    // } else {
    //     document.getElementById("sticky").classList.remove('fixed');
    // }
  }; // eslint-disable-next-line


  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");

    if (openmyslide) {
      openmyslide.classList.add('open-side');
    }
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("search-overlay").style.display = "none";
  }; // eslint-disable-next-line


  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("header", {
    id: "sticky",
    className: "sticky header-2 header-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "mobile-fix-option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx(_common_topbar_dark__WEBPACK_IMPORTED_MODULE_4__["default"], {
    topClass: "top-header d-sm-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "main-menu border-section border-top-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "brand-logo layout2-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx(_common_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    logo: props.logoName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx("form", {
    className: "form_search",
    role: "textbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    id: "query search-autocomplete",
    type: "search",
    placeholder: "Find what you need",
    className: "nav-search nav-search-field",
    "aria-expanded": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }), __jsx("button", {
    type: "submit",
    name: "nav-submit-button",
    className: "btn-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fa fa-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "menu-right pull-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "icon-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 41
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 45
    }
  }, __jsx("li", {
    className: "onhover-div mobile-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 53
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    src: _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    onClick: openSearch,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 58
    }
  }), __jsx("i", {
    className: "fa fa-search",
    onClick: openSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 57
    }
  }))), __jsx(_common_currency__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 49
    }
  }), __jsx(_containers_CartContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 49
    }
  })))))))))), __jsx("div", {
    id: "search-overlay",
    className: "search-overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "closebtn",
    onClick: closeSearch,
    title: "Close Overlay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "\xD7"), __jsx("div", {
    className: "overlay-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Search a Product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 45
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    className: "btn btn-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, __jsx("i", {
    className: "fa fa-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 91
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderThree);

/***/ }),

/***/ "./config/base.js":
/*!************************!*\
  !*** ./config/base.js ***!
  \************************/
/*! exports provided: googleProvider, facebookProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleProvider", function() { return googleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookProvider", function() { return facebookProvider; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "@firebase/app");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! firebase/auth */ "firebase/auth");

const configs = __webpack_require__(/*! ./index.json */ "./config/index.json");

const config = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId
};

if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const googleProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
/* harmony default export */ __webpack_exports__["default"] = (_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./config/index.json":
/*!***************************!*\
  !*** ./config/index.json ***!
  \***************************/
/*! exports provided: firebase, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"firebase\":{\"apiKey\":\"AIzaSyCMVKZnCVrSD_kyDXEvRAz_IdFrRwxSFX0\",\"authDomain\":\"PLAYER2-site.firebaseapp.com\",\"projectId\":\"PLAYER2-site\",\"storageBucket\":\"PLAYER2-site.appspot.com\",\"messagingSenderId\":\"651136817409\",\"appId\":\"1:651136817409:web:0916351021aac015956300\",\"measurementId\":\"G-J91EQXJ2R1\"}}");

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

/***/ "./helpers/apollo/apollo.js":
/*!**********************************!*\
  !*** ./helpers/apollo/apollo.js ***!
  \**********************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\helpers\\apollo\\apollo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








let apolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(PageComponent, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    })));
  }; // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient({}, ctx.req && ctx.req.headers.cookie); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ "@apollo/react-ssr", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              }),
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */


function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
      uri: "http://localhost:4000/graphql",
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default())
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]().restore(initialState)
  });
}

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _portfolio_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio/category */ "./pages/portfolio/category.js");
/* harmony import */ var _components_common_Collections_TabCollection1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/Collections/TabCollection1 */ "./components/common/Collections/TabCollection1.js");
/* harmony import */ var _components_common_Service_service1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Service/service1 */ "./components/common/Service/service1.js");
/* harmony import */ var _components_footers_footer_five__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footers/footer-five */ "./components/footers/footer-five.js");
/* harmony import */ var _components_headers_header_three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/headers/header-three */ "./components/headers/header-three.js");
/* harmony import */ var _helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/apollo/apollo */ "./helpers/apollo/apollo.js");
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/script */ "./services/script.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/images/favicon/1.png */ "./public/assets/images/favicon/1.png");
/* harmony import */ var _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/login */ "./helpers/login/index.js");
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Home = () => {
  const loginContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_login__WEBPACK_IMPORTED_MODULE_10__["default"]);
  console.log('authorizationToken: ' + loginContext.state.token);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_9___default.a ? _public_assets_images_favicon_1_png__WEBPACK_IMPORTED_MODULE_9___default.a : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(_components_headers_header_three__WEBPACK_IMPORTED_MODULE_5__["default"], {
    logoName: 'logo.png',
    topClass: "top-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_portfolio_category__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_common_Collections_TabCollection1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "fashion",
    backImage: true,
    productSlider: _services_script__WEBPACK_IMPORTED_MODULE_7__["Product4"],
    line: true,
    title: "title1 section-t-space",
    inner: "title-inner1",
    designClass: "section-b-space p-t-0 ratio_asos",
    noSlider: "true",
    cartClass: "cart-info cart-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_components_common_Service_service1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sectionClass: "border-section small-section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "section-b-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_components_footers_footer_five__WEBPACK_IMPORTED_MODULE_4__["default"], {
    logoName: 'logo.png',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_6__["withApollo"])(Home));

/***/ }),

/***/ "./pages/layouts/Shoes/components/Category.js":
/*!****************************************************!*\
  !*** ./pages/layouts/Shoes/components/Category.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/script */ "./services/script.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_icon_gold_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/images/icon/gold.png */ "./public/assets/images/icon/gold.png");
/* harmony import */ var _public_assets_images_icon_gold_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_gold_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_images_icon_raids_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/images/icon/raids.png */ "./public/assets/images/icon/raids.png");
/* harmony import */ var _public_assets_images_icon_raids_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_raids_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_icon_mythic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/assets/images/icon/mythic_.png */ "./public/assets/images/icon/mythic_.png");
/* harmony import */ var _public_assets_images_icon_mythic_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_mythic_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_images_icon_pvp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/assets/images/icon/pvp.png */ "./public/assets/images/icon/pvp.png");
/* harmony import */ var _public_assets_images_icon_pvp_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_pvp_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\pages\\layouts\\Shoes\\components\\Category.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Category = () => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "section-b-space border-section border-top-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, _services_script__WEBPACK_IMPORTED_MODULE_2__["Product4"], {
    className: "slide-6 no-arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "category-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "shop?product=gold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "category-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: _public_assets_images_icon_gold_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 69
    }
  }))), __jsx("div", {
    className: "category-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "/shop?product=gold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 41
    }
  }, "gold")))), __jsx("div", {
    className: "category-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/shop?product=raids",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "category-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: _public_assets_images_icon_raids_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 69
    }
  }))), __jsx("div", {
    className: "category-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "/shop?product=raids",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 41
    }
  }, "raids")))), __jsx("div", {
    className: "category-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/shop?product=mythic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "category-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: _public_assets_images_icon_mythic_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 69
    }
  }))), __jsx("div", {
    className: "category-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "/shop?product=mythic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, "mythic")))), __jsx("div", {
    className: "category-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "/shop?product=pvp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "category-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: _public_assets_images_icon_pvp_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 69
    }
  }))), __jsx("div", {
    className: "category-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "/shop?product=pvp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, "pvp")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./pages/portfolio/category.js":
/*!*************************************!*\
  !*** ./pages/portfolio/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Shoes_components_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Shoes/components/Category */ "./pages/layouts/Shoes/components/Category.js");
var _jsxFileName = "C:\\Projects\\vanlune\\vanlune-site\\pages\\portfolio\\category.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Category = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_layouts_Shoes_components_Category__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "section-b-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./public/assets/images/empty-search.jpg":
/*!***********************************************!*\
  !*** ./public/assets/images/empty-search.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAC+AQwDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCAQf/xABFEAABBAEBBQUEBgYJAwUAAAABAAIDBAURBhIhMUETUWFxgRQiMpEVQlKxwdEWI0NiofAkM0RTVJKy0uFygpM1oqPC8f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEBAQACAgMBAQAAAAAAAAAAAREhMQJREkFhcTL/2gAMAwEAAhEDEQA/AP39ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERVmSz1HGHclk35ukUfFx/JC3FmizYt7R5PjWqxY+E8nz8X6eX/CiTVYwSMjtW8uHxMieG6egP4K4z8mvRYXsdm97T6ev73fvH/YpcFVhIGO2rfvnkyV4fr6E/grh8mvRZ03NocaSbVSK9APr1+Dh6f8KxxubpZQEQSFso4OikGjgVMXViiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICE6DUos5mbljI324THybpI1syj6je5WTUtx8t5W5lbjsfhdA1nCa0eTfAeKgCxQws/s2Mgdksq7g6V3vaHz/AepXqaR0zxs9gB2cTOFix9/H+e7ktDisPUxFfs67PfPxyH4nH8vBXiM81StwGWy3v5nIPjjP8AZ4TwHn0+9WNfZXD1wP6IJHD60ji7X05K5RTavxiD9DYvTT6Oqf8Ahb+SjT7MYecHWkxh74yW6fJW6JtXIzf0BkMb72HyTwwf2ex7zD+Xy9VFmNTKWG18pXdjMr+znadA8+Duvl8itco16hWyNYwWohIw8R3g94PRNT4qaplrWNtsx+ZA97hDbHwv8+4rRLLvjNcjC5kmenNwq2jzB6NJ6O7ipGGt2KNx2FvvL5GDerykf1jOnqrYS5w0CIiy0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiIIOYyDcXi5rR03mjRgPVx5LMudNhMGxrS52XybtSfrDX8tdPM+Cn5sDI7Q43FnjG0mxKPAcvuI9VzoD6W2xt3HcYaI7KMH7XEf7j6hanTF5q3wmJiw+PZA0Ayn3pX/ad+Q6KyRFluTBRLeUo0TpatRRO+yXcflzUtZSTYqKzkrFie08RSSFzWMHHjx4k+qsz7S2/S0i2nw0r91t9gP7zXNHzIVqx7ZGB7HBzSNQQdQVjclsPFHVfJQnldIwa7kuh3vAEAaKLsVk5Y75x73kwytLmNJ+Fw48PMaq5M2MTysuVvkRFl0RchQgyVOSrYbqx44Hq09CPFZuWOxkMZJFISMvin6hw5vHMH1A+Y8VrlR5IewZyhkWjRkx9lm8deLT8+qsZ8osMXfZksdDaZp7494dx6hTFQYOP2HK5THje7Nr2zRjoGu6D+eiv0qzoREUUREQEREBERAREQEREBERAREQEREBERBmasmu1mYuOOra0AYPAaA//Ur3sXCWYMzO4umlc8k8z0/AqJXafaNrB9YsOn+V6s9ktP0Zqf8Af/rctXpidrtERZbERCdBqUETJ3o8bj5rUhADG+6O93QfNYbYqm6bNGzp7ldhJPiRoB8tV4zORsbSZhlSoC6Frt2Fveerj/PJbjEYuLEUGVo+Lub3/ad3rXUc/wDXl+RPREWXQVTtLF2uz9rTg6Nokae4tIP4K2UHNEDB39f8PJ/pKs7S9K4zAbT4+cOIbcqFug5OI94a+hKv1lTvC5soB8XYu1/8bdfxWqSp4iIijQiIgIiICIiAiIgIiICIiAixkNZ23Niezbllbs/G90VavE8s9qLToZHkcS3UHQeHzmbFGSOrlaTpZJIaWSlrwCRxcWRgNIbqeJA1KuJrToiKKIiIM3XYItssjXefct1w8Dv00H5psZI4YuapJwkrzuaW92v/ADqvW0R9gyONywB3YpOylI6Md/JXCNww+2T2k6Vsk3eaem//APuv+YLXcY6rUoiLLYq/OSOiwV17Do4ROAPnwVguVkwCtIbXZ9hp7/aabunjqiVi9gq7H2rlgjV8bWtb4b2uv+kLcqvxj8VI2R2MFYDUB/YNDfLXT1VgrbtTxmQREUaFUbTSmPBTsbxkmLYmDvLjpp8tVbqivOGQ2iqUwQYaY9pmPTe5MHn18lZ2nl0+FgdtZUhazeZUqE69Gk8PuCvlRYDS5Zv5XmLEu5GdfqN4Dgr1KeIiIooiLO7RZDJMyeLxGMmhrTX+1c6zJHv9m2MA8G8iTr1RLcaJFncTmb0OV+hM6yJt1zC+tYi4R2mjnoDycOo9eS0SEuiIiKIiICIiAuc7HSQSMa7dc5pAPcSOa6Igzmw88b9lKdcDcnqA1rER5xyNOjgfv9VwfWzmEzd+fF46G/TyD2zFjrIhMMgG648QdQdAeCrszajky77myZsWMyCI5/ZmB1aQDpM4kN1A1AIOo5eWuxcmQmosflK0Fe0fiZDIXt+4aeXHzVvtmelS7K7TVm9rPs9BNEOLm1bm9IB10a5oDj4arvX2x2esRMf9L1Ii8amOaVrHN8HAngVdPe2Nhe9wa0cyViKlaajayxsbKy3qNq4+xHIGxF264DUbjyHcwTpp1Tsuxt45GSxtkje17HDVrmnUEeBXK1bhpQGWZ2g1DWgDUvceTQOpPcvz+0PomnaymyFiSsyE638ZLESYh1eI3EbrgPIEDnwWuw+Nic2DKTX5cnYkjDorMoAa1rgPgYAA3Uep6lMJdTJqZvY6WC0AHTN94DkzuHjp/Hjy1WaZXfl8RLipju5THO/VEnQuA5cfEcPkVslR5vGzmWPKY4AXYObf71vVpSU8o6bP5j6Uplk2rbkHuTMI0Ovfp/PFXCyRAyLhm8Loy/H7tis7m7vB8eHqrvF5qtk2ENPZ2GcJIX8HNKVfHmLJUm1VGzfwpjqgue2QPLBzcBrw/jr6K7RSFmzGK2NxV6rems2IZIIuz3NJGlpcdQeR8ltURW3TxmTBEUDJ5eri4gZnF0ruEcTOLnnwCivuVyUeLpOneN+Q+7HGOb3HkAqJ1exXpjH7+9lcm4vsSDj2bOp8gOA8ddF7Jkhlbl8u3fuP92nSbx3Nfx7z0+QHWuLGJsuyOSYJPaQO1mYDrX7m6fZ8R6rU4Yt1bQQQYmrFBE3crN93iSd0k8+PQk/xU1eP1c0X1XxvHmHA/eqK3JlNn4JZoWMyGOiaXlks3ZzQNHE+87g9oGvxEEd5U7a6aBcrFiGpXfPYlZFCwauke4Na0eJKx8d3K7T0/pCW67AYMjVhDmtnlH2i88GDu04qsgq4W/tdiqVTM2crXa2WaxHPcdOxzmgbmoPDmSfRMT5NL+nGCI32TWZIv71lOVzPnu8VDpZCDafbGpex+/JQx1aQGd0bmB0shA3QHAHgG6+q1wGnJVWez9TZ6ibVuOw9vQQxF2vmeQ9SE/hf1X7ZBra+JsN4WY8nXEJB0JLnaFvkQTr5LTLKYSKXaW3X2hvywGGLU0qcEgkbESNC97hwL9OGnJvny1aX0s9iIiiiIiAiIgLOujk2okfvyOZhGksDI3EG4RwJJH7PoAPi58tNbHNF78ca0TyyS09sAc06EBx94jxDd4jyUv8AU06oHuxwxNAAHIAcAER6gghqwMgrxMiiYNGsY0Na0eAC6LjEZJBvvaWA/Czr6+PguyK+FoJBI105L6i+EgAk8Agpc9VZGa+UYwCeCRsch0/rIXuDXsd3jQ7w8R5qk2Ut36sdzZ6rSc8Y+3JC21M7SNkRO8395zgD8I0GmnELS5XSxVjqsIc6xIwAD7IcHOPlug+pHeqrY93tLs5faP1NnJSdk7o9jQ1m8PDUH5K/TP20rQQ0AuLj1J6r6i8ve1jC9xAa0aknoFGmS2na3FXq1/HvMV+Z+66NnESDxHnoFy9sxmdkDbm9jMsz3RKCW8fP8Dx8VIxLHZ7aGbKygmtWO5ADy17/AE5+oU3a63DXw5ifEyWWY7sTXNB0OnFw8QDz8Vv8c/1xFraHFDSxWbkoBylhOj9Neo/49V1j2wxh92x29eQc2yRnUfLVRaOAy9GnC6plDFIWgvgkG8weA7vkusljaGNu7axNS43vjcB9/wCSnFa2xL/S3Cf43/4n/kuUm2GKHuwGaw88mRxHU/PRQPaJg7X9DY97v0b/ALVYRHOvjZ2FKhSY7TUOJc5o8gANUyJLXM3c9k+FSm3HwHnNZ+P0b09R6qLVFSnbcKAdlcs7+ssPPuM8SeQHgNT0Vl9BS2//AFTIT2m9Ymfq4/kOata9eCrEIq8TIoxyawaBNi5b2gY/FOhnN27L7TdcNN8jQMH2WjoFZuaHNLXAEHgQeq+ostYqGVLOJm/oMZnpPJLq+8A6I97CeGngqLaTLU88/H4GpZBFywTdZxa+OGMbz2vadHMJ0A4gdVtFkc5XY7bfGANY2W1QtQsfoAS4Bp5+AJVjNnCVi8VDl44ctkoGyh4DqdV41jrxfV0by3iNCSeWug00V++tA+MMdEwtHFo05HvHcVxxbmvxNNzBo0wM0Hd7o4KWosjyxpa0N3i7Tqea9EaoiKo7ezFN87rePc7GXz/aKoDd7/rZ8Lx5j1XbG5Kw6y7HZOJkV9rd9ro9eznZ9pmvEacNWniNRzHFWLpQyQMk93eOjXdCe7zUTL0XXKgfBoLld3bVnno8dPIjVp8CVUz0sEXCnZZdpQWowQyaNsjQ4aEAjXj4ruooiIgIiIIluLfnpSacIpy4nu1Y9v3u/iuLne15jsP2NRjZHDo6R2u7/lAJ83NPRWBAcCCAQehVVjCW5nNRO59vHI0fuGJgH/ua9EWyralo5K7NLGf6HXeYmEftZBwcfJp4Dx17guG1OQlxmzluxXOlhwEUJ7nvIaD6E6+in46lFjcdXpQ/1cEYYD36DmfE80PtKWVy+ctDIgQ4i7dxVdxZO+oA5z5Rp7u5rq5o146dRp0INzm8qzD4qW2W9pLwZDEOcsjuDWjzK9YWg7GYerUkcHSsZrK8fWkPF7vVxJ9VS88M3LZzG0QfWxmNt4qCUbli/fbuyhvVsbNdevPgBx5FanHY+visdBRqM3IIGBjB+J8TzPmpSJpILN7V3ZOwixVXjYtuDSB0ar+xPHWryTyuDY42lziVmtm4ZMpkbGdst5ksgBHIdT8uHzSe08vS/wAbRjxmPhqx8o28Xd56lZumDtHtQ+673qNL3YweTj0/jx+SsNqsi+rj21K+ps2z2bA3np1+/T1Vhh8c3FYyGq3QuA1e7vceaHd/ieiIo0IiICIiAiIgKj2mxNnI04LGPc1mSoyixWLuTiBoWHwcOHyV4iFmspjtpcVYbLFNcbi7IOtinbcI3xPPElpOgIJ49QfDUqwwW0dLMyWq0FqGeeq7de6I6tkb0e3w7+4+hM+5isdkS03qFW0W/CZ4Wv08tQqzOxRYmnTyVaFsUeOlBe2JgAEDvdkGg6AaO/7ArwzzF+ocNv8Ap0lKbhM1vaRn+8ZrpqPEHgfQ9VLa5r2hzXBzSNQQdQQqTahkkOM+lKw1s453tDB9pg+NnkW6+oHcpFq5kjZNG6ORocxw0IUWjO/fmpzOLpq5HvHm9h+F38CD4tKkV547VaKxE7eilYHsPeCNQq+Q6bURMaSDJSkLyP3Xt3f9TkEnGR9lTLOjZpQ0dw7R2g+WimLyxjY2BjRoANAvSKIiICIiAqXKVb1bIx5bGQixJ2Yhs1S/dMsYJLS0ngHNJPPmHHjyV0iDE5yhtFtXXdFHB9E1q/66Nk7mvksSt4tB3SQ1uvieOnBSotvcexja92tegyoGj6Daz3SF37ug0IPQ6rWIrqYzGNoX8zlYs1mYDWig19hoE6mMn9pJ+/pyHTzWnRFCTBERFZjaueaxPTw8B3Tadq93cNdPzWgrwQ0abIY9GRRM0GvQDqVV57Ey3JalyqAbNWQODSdN9uuumvRVtu1n8lXdjjjHV+1cI3zF2rQOvIclr6Y6tr3hmuzmesZmUH2eE9lWB+/+OvmfBapRqNOLH0oqsI0ZG3TzPU+pUlZakwRERRERAREQEREBERAXiWKOeJ8UrGvje0tc1w1DgeYK9ogyOPyJ2UstwuXkLaBdpj70nwlnSJ56ObyBPMDorPaXL1Mfs9ZkfI17p4nRQRtO86Z7hoGtA58T0VtYrQXIHwWYY5oXjR0cjQ5rvMFVOP2RwGLum5SxkMVjmH8Xbv8A06khvporwzlU+zu0MOFxNfD7RaYy7TiDB2zvclYBwcx3I8NAQDzVxhXyZG9azD43xwStZDUbI3dcY2kkv0PEbxdw16NB6q6c1rtN5oOnEahfU1ZBERRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"

/***/ }),

/***/ "./public/assets/images/favicon/1.png":
/*!********************************************!*\
  !*** ./public/assets/images/favicon/1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzY5Qzc4QTkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzY5Qzc4QjkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzNjlDNzg4OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzNjlDNzg5OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xF1arAAAAVZJREFUeNpi/P//P8NAAsb/PtYD6gAmIM4cQPszQQ6YDMTuA2A5yM7JIAcwA/FKINalo+W6UDuZmaAC/EC8EYhF6WA5yI4NUDsZmJAkFIF4MxCz09ByNqgdSsiJEBmYA/FcUO6gRY4D4nlQOxhwOQAEooG4lgYOqIGazUDIASDQgE0xBQBkViOucgBXcM1CDy4ygTnULEZSHAACXNAEI0+B5XJQM7jwlYSEssxmWJYhEYD0bCGUtZmILDSWQQssYgFI7VJiCjcmIg30AuKJJDhgAhB7E1sZEQuyiay4QGpySKkNSQGgissNj7wrVA0DrRwAittVOOIWJLaaxLRCsgNgqXs9WuoWhYqRnFuYyMzfytDsyQbFm6BiJAMWPHJ/gfgTHnk1IO6FstWB+D0etXy4ooaFQHwLEvBADgOFgIlhgMGoA0YdMOqAAXcAC42a4EMnBAACDAA7yCaRsxr4JwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/american-express.png":
/*!********************************************************!*\
  !*** ./public/assets/images/icon/american-express.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEXklEQVRIia2Vy48UVRSHv3vrVlV39WseMIwOyDsM8ggqGEUMkrAwYuJWFrjwkRj8B4xx5cadC+Mj8RFjYmJYYNyIosb4HtCIYUGizoAzY8tMnAc9dHdVdVfde130NMy0MEiYX1LJvXXrnO/m1Mn5iS3Hy9xAu4FDwF5gM9ADCGAWGAF+BE4Ap5dKIpYAHQBeAA7e6Cbz+hp4Gfj8WofyOkGvAV/dBATgIeAk8Nb/ATnAt8BzNwHo1DO0yphZCvQd8OAtQNq6l9a/uyboTeD+ZYC0dRfwfidoD/DsMkLaeoL5CikAAa8DVDRoBACusCghCA0I7KJogcBikfMnBpBYbCsXBoEvLCUJGt4AdihgmxRiz0xTszMLGWGxBiIE46Fmb9EhtoByaDY1WSWJrUFqgwGslGQkxKnFWovvCC43NVo6jGmJL9gO7FbA4ammYWve4chqjw1dHho4M9VgV6/HuUrCmpxi+nKDO7oDJqoJWSUo5XwSbfjnUoTvOfQXfZSE0VrKoTUB7wzXeWUkRCmJIzisHMG+mShl/6Yi52PN0FhMV0/AnzVwA8GXFUM+tmzWhiR1+GIyZGteUk08fptt8uKObj4enmNqJmT1qgLDEyFl4VJzFCUlMK1q7xX9x/4qD+bkwEvb80xHmrmG5nJqWVvymIwMh9YX+PCPOQpJwrq+HMqV9LqCc5UEBTS0RWDR2jJcTXnqzhInLlQpFDI8f3aOvAAlmFRY2+UqyU+XUsoNQEi6rKFeSfCN4eRolShKOFVJuEfX6StlGApTaCT0F32Gxqus6MpgHAcRNvlsvE4j0QxfrGGjJjrj4ilZFNs+KtfrqQ0mGgZftLpmrgn7V7k83C0ZmY4o5D36Cj7nZyNUqukv+fiuw4XpiI19AY04wTEWFfhcnA1ZWfSJGymDBYdXLxomQx2q1FLxHRGsC5wr7VtPEw6sybEy6+Baw8CKHGORYXCgSHk6YqDoUtYOITEm66OF5O4cTFkHaTOs683yS7nG+v48q2brjFbTqqQ16jsksMZC1EBZi0xTbBgjG002FhWDJZdNvuXg6gARNYhqDaSFza6hPNfExAm9aM5XmtyWlTSMHZPAD52YQAnGqgk5V1ITivHI0FPKEsYp1lO8XU7ozSruWBGwNu9ye17xdyoYSSRru3xiBCrwmYwMp2cSejw5JLYcL+8Ezi4EOQKqiSXjOXRlHGailOlIs6HkMRsmxKkl8CSJtgSuJOc5NLVFW4vrCOpNQ3fGYaKe4hhD0ZP3tY3vV2DX1cKBtqBta/RIIZBAam1rLSA19sooWlR0IcCCxeIIgSP43cKgmj8/yoKxbgEpWoCFchfsXdleL/7m6ivRznUUrk7vIeC9/0bcso7RcupFfvQkcGYZIeeAx9ubTod9APh5GSBn6TDRTlBMy4bfvQXIB7TctboUqK2ngUeA728CcAp4DDgCHa3IvMNeR5/OP/uAR2mVYj1QYn4kAqO0GukT4JulbvEv6ofAhwGHwC0AAAAASUVORK5CYII="

/***/ }),

/***/ "./public/assets/images/icon/cart.png":
/*!********************************************!*\
  !*** ./public/assets/images/icon/cart.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/assets/images/icon/discover.png":
/*!************************************************!*\
  !*** ./public/assets/images/icon/discover.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAE80lEQVRIibWWa2wUVRiGn7ntzC67LYUWBAxpQUqkBm+AtrUQE4iQIpgmhGAMYPCCaIiJPxRI9I8GNdGooEAgEECNoCiIYCIaLm0pVLDWAoVSCZXaUiiku1v2MrMznz+WJVCQooH335mcc5555zvzvUeJRiL0ojFAOVACjAD6AQpwEWgG9gM7gYM320S5CehxYDEwsbc3uaw9wFLgp/8CWg68fIuAnloNvNAbSAN2A2X/E5JRLTABSGQeqD0mVN4GCMA40rW7oqtBK4Di2wDJ6EFgfWaQ+XRjSdu9ExoPVGYcfXqHIACfQdpREXDkDoIAxurALM/zME0fpuW/4SwvlULVdQCitoBPQYAsANfBcT0Mn3ndumQiTjJpo6rqLB14zDRNYrEYy1esxvT7qXiynNa2dtrazyIiTCgr4aNlK8gZks/8meUoP65EyR/F9s5+jC4sICsYYNumb9F0jcEDB9LecQ7XTTF96hRM04ebckt04B7Tsqg+UMve6oOUFo9j9osLGTliGFU1tcx5eiYnmjfScbGL0okjcTYsxPhuI9ZIg99aRnFs5jsMD7qsWrcB13GYNnUKx5ua+b2+gUAgwIyK6XRHo/kq0BegKxzmsdJiKqaVU3XgIFmhEO+//Rb1R46ybOUaFr6ygCdKx+CeOkTKB3aTwxvPP8XmHbv4YvMW3nz9NfJychhfWszxppPk9Mvh0XFjSDk2qFqWtnjRoiW6YRiaprH56y3UH23kpefm4nke0Wg3mqZRMa2cTV9t4lRnN49MrsB37jBe0cNY89bQ3nqG+wsLKJ88iZoD1eTmDeDewhEMGXwXAb9FfsEwUqbPIRqJ/B2JRMROJqSttVUi4bCIiNjJpLS0/CWO44iISOOxRqmq3i8ZnQ0npO1c15Wx57pypuW0NJ1sFhER17Glrb1DoiIS/WVdhxKNRPaKyHhVVQn4/TiOg5NK0ScYZO+ePTQ2NhKLx8nt35/s7Cw6L1zkfDjGsPyh5PUNUVlZSTKZpLCwkDlz5yKeRyIeR/WZKIZOcv9mWPHMIRWoVhQFEeFSLIbtOIgIALquEw6HudDZic80KSq6D9d18eIRsvw+wuEwiqrieh62bROLxUjE47iagWPo2LVb4YOZkDu0RolGIqOB+hv9P4ZhYFoW4a4uHMchFAphWhYAFzo7iUaj5BcU4LkuiUSCRCyGlZeHB7BrFbJmPph+GD2pJNPr6oAHroaICJqmAeDz+RARbNsm417XdTRNw3EcVEUBFFJ+CwFY/yry/ceQFYQBBU3k3D0yAyqmR1u/ZXkeBLPTSdbSgKxdAH9UwaDBYJgQyJ6Ebv18dfCtBZ69ZYAIWEHwqeCk4If3kG3vQrwbBg0H8UDVvkHVZuC51yXsYeChmwOAPqG0AwGqPkd2fggn6iC3PwT7gZMEVWtEUUfhucD1UW4B+0jn07Uy/GClGyvdEfh1C7JvHRypBMuA3KFpl04SAtkNGP4youfDqOk66z22S5CO4TV43jx0H/S53NEdDxqroX4nUrcdTjWAqcHgAlBUSDlpi2afL8kaOBs77uK5ZED/ft3StCmk7CWcrC7l+B6k+QCcroPopfRpCuWlHYibBmlGLYZ/KWZgK74AJLoh3A6a0QsoFII/65BPKsroPDMVM1BCoG8+upGNCKBEUNUWNL0GzdyBZuxGuVxEMwjJ2DWgfwC09kc21Mu6AAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/gold.png":
/*!********************************************!*\
  !*** ./public/assets/images/icon/gold.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QMICDct04LfVwAADdtJREFUWMONmGuwnVdZx39rrfey97v3PtfknJzk5OR+aUOSNm2alGmx2gFKQVEohTLKWEQRlI4ziuIHOuJ4+YAKDOCM4ogOKveijq0wtJTSFmpKSZM2tyYn55JzP/u+3/3e11p+OJUZlUufL+vDemb+//mv53nWPH/BKwhrO9x98xHuufd11c8/cuZIHjZuPzKlXh0l+tjuMbnNd7VQjqQQJVOrBjPGyLOe7z/Z6Nknbr5x34Vrly/Fd33g02zZevSnYomfSKT+j3zs9/+S627YO/T4qZk31pvt+y4vdE50esnI5Kgr77xhiANTVa7M9zk/2yMtBFPjFXIjGBvydSfK14YGSt8rB5XPu9WRb7RX53v3fehzbN1584/FVD/uYv30ewkmcXr15usf/c6Fj5Vs74Gnz65dt9aMg82Dnpgaq7DagvPXBOfmDSstSVJ4rHdikjijyFIZhnHNE/l1i2u9X5Bp7ybP8ddUe3r+TScmzJe/ffWVKWStZfapN+MF1eG0W/+9K5fa7z/1veWhQAoeO9tnZs1SKlVxy2NMbNuFG1QwRY4jJEkUsbg0Q9hdZdhPGa1kbK6BlIKhQNKMaI4Mlj+xY+vIx8Mw7v7h564ghPjxhKzNOP2l1+D7wZZe1P2rJErvtbFRj3y7xw+uwkIrQwkXv1RieNMm3nnPPay3QvI8ByS9TkjU79FrN9hEg0sLK1xaXGEiiNk6CFlhKflOUauW/mVgaPgPsiRa+dlfvJ9f+o0//9FPdqD4KvVVs7mxuv7Jfqf3jsXZUD55WvP84ji4NVzPZWJinHqjyaEDu9m3exdLqw0Cv4zAginQJiNJMrIsZ7TmsBTCfCPDtTAcWCRGFll2JI7TnUYGT54/fSo8Mxf9f4U+9cBRlONXdLz2F2Gr/d5OmIuFboUL3R3ceeIwd91+mMHRMVYbbT72N5/jA+97N2mS84MXpkmTFGMNaEOj2SCKQlQRIvKQZjdmRISUbUKYZZSqBZvKhmtNDcr/7Pj46ANZmoWf+dYKABLgr3/nBA9ufh5Xt9/TbnTfvbSeiKt1SSMucWRfhYkxQTftEJmEh/7jYZbX1qlVymRG4bke9WaDi5de4oWL56i36ui0S7PX40qrSyIigiDjtj0wMiiZ7yj62qXsgWPTX+62mu976/2/KX77jbs2FLLW8rcPHED55Zt79bWHmuvN7Us9l8dnfD7wLsPr3zCKGp7ECybIW8N88TOn+KdvrHH/fW+j1TdMz8wyN3+NOI6QAhxpyfOUNMt44F2WW147iCgpNnsTzJ3Pefzhaf750TV+Zp/EZhlpzvJwrfyWLMueOf72B1EH/KdQo1Ml0V36s8Za67ZuAo9dEix3HHSiefsdfbZtGYfeXsRzz9NcjZiOtqCwXJyeY2Z+AZO3cUVEmDso1yWMM/pxxt0n29x90jBYvp3+6WG8c5f4/NMNnp5O0Fawf1xRdUzNwVYmxkYfbk9/t5C236CSrLw66kdvGipb5lqKmXWNLhKevWg50wyRlSfpXfwCle48hgQrFFfmV1ir12m2Ouza3uf4lKYoDNqCVA7Vis/WKYkVq1x59N/oPfZ1nr60wqMvRQgsF5ZyVnrgexJtzN2NZvvWRrODvOXeD0oTh/eKNBpsJZJnpvUPqz1OJGfPeQjPIsci0kwwOZCSpz0anZA0L1BKcvRAxrGaII/7dLtdsizD91LGxlIKF8KGokhdvnFJ041yLIasMDw3XxAXArCDYVy8rXLTW6Rc/O4XduZ5dgdWc3lN0IoVSsmNihcOF66USIBgW4YdLNi+OcEVXZI0I8syXMdw9FjGnkHBsDLESUqWFwTVhJEpjXYEKlHoQDPT0S8PvI1jvqmpR4AU9DJzx9z3HpmSwuR3lB2zUyM5t2RxPR/P83EcB2M1l6c91juC0niBLSWMDKSMDYSE/Yii0NSqCXtflbF5wGHfoEs/Tul1eowEOSpTdOd9BpVEjGUoR+BI+bL+gqywXFyzGKXwXHbYIj/mdLvxXatrXb/ZMyy3LVIKfK+M0Zp+FLOyJJiZV2w6WZDVMioh7J7IeOKsQ5ELDr8qZXyrZRmfG7bkrFPidYcrvOZoFee0Jm0X1DzD8AB85v7NnF1UPHRqkf882yYpDHMNwy07JFaIIDP2pLOy2rlhtdHnpRVNP3MRyqK1RgiB73v0eoLzZxW33FrgTOQ4cw77tmdY7ZIXlsNHEpR1MRXBa/YLbnvtJCdvGQNHkLa69Ho9dMlQE4YdXsGh/YrXH5zgvk8lPHYlppvAcscw4FkcKa53ZheaO+LIUg8hyw0uGqsUWIvruhQFvPi8xBgobdGojmX/domncoyFozfn9JcD3ImULVYQxwnryxmBMsjMUFWK3BjS1CAKaLdCppf7JLkFISmMJc5g15Cgm4ldzuJa1xMI0hyM0VircByHPM8R1mKM4cIFSbcNg6MaNhm2G8FIrSDUhn0HDcVLAZVtCUnLJV7osWZdnFoVpxsSdSMWuilzrZR6bEgyTUkYUg1CCKzd+HQzDdrKSafezexwIIW2GwkbSZY8z4njGGvh6rRlaU4wcsQgqoLRQjA5pikqhm3jED3tUbmxTb5ksYtVcg15GJE3QpbX+5xppCyEmpKnmKi6jDoGJXKklBhjsNYisChhc6ewbk+gBzy10Y/GGLIs22h7KUnTjOXVnAsvwg03gvUtgQsHd2jEpKFsFUVfUBrOUZslGIOrQJR9ZLlEtVownlsSClIN7TjHOKCtfZkIGAthCq4nVuRAxZseqjiMViVKWMzLicYYAMrlEoVWPH8atAFdFogMjk5ZjmyTRC+WIbKksx42klgrSLoJUb1DrxsR9jPq/YJuUmAtjAQeoyW1QcQYpDCMDwgmR11Ga2rWcYR9LkzMjYEDgQu9fIOI4zhIKVFKoTWcOWsIwxzPesydH+LGrWMMj1RwLqekMsM+GzBaFowdKtPLSswt1Lm6ktDILZ6jKDuW1BhWeym2JFBCgLUEnmBy1KFW88itf8UxhicM5ld8x/pjA4q44yDkxqR2XRcAz3NZXCizupwTdDysex27D1WwaKK1DmnPYKVC5JpKGjLmpagxwanzGZdXU3AFtcCh5ku211xqQgMpAFOjDrvGfYJKOamHzjOOVM5/5bm95mD27hiW1LMyI4GDIzRt7aGkxHNzen3L5cuK48Oa5uUWa0YRSIOTCYakJMlywkiTakFrOeTcYkQhHcqexkgYKCl6uWW2nVKRlsxs1Ox1ExLXUcSFO9+L7bPOutxzdY//whPjNbV3oGRI85xjQzldozgTKkoOGC24VHd44fsOt78TMt2lPuOgPBfqbeqdmAvNhNlOTphZpNXsGfE4ud9n+umI2XbBYj9nYshnvOIyKA3CpgxXBEe2OwzVPOab9luf/Fo8I/faMxrhfKmX2J6vYN9oxnNrCY8uahwMh6speV6QF5oXXlR4k5bg+pS0GdMPM+qRZrGXsRIWxIVhJFCc3DnA8S0lFpYThgZLBK7ElxtDsNHPaCYaC5zY7bGp5tCKVDdOzZd/962OkdoZIKHynX4mH7FCUfahi2GlE9HJDEtZiVx4jPuG9TlDo27YtLPAczVBxWVo6zD7x2vcuq3CwU0+FsvzSxEPXeyxFBvecDjAkYJOrMEKNlV9hn3JtiHJ7fs9apUSmZYPrzSy7xZaIf0Tv0W71UzWQ/GJK6v5cie23Lq7zMExSaPdZS52aGaSRmyIrcY2IVyr0jOGeK1DGud0Y8u1Zsbl9YyVTo4VsH884OCwx6WZPhZwJaR5wVI74cV6xvXbFVuHXNqRXGy0849vGZLJH//dp1GnnvoWO7eNM3L8/sXll56V1hR3WGPUxKBLmMF6H7JCE8URb74VxtoDtGeqbN9ZoWinqFqAqpQYtIYBV6AkhLlhtVdwqZGyEBrmOprZVs5cW3O1qdm+WXJo0sVxS3mnb//kw19d+urhrT53v+/vN/ayK8tdqr0L5MI/m6TpeJ7rY4FjxGggWGoltPo5usiZnTc8/lzB8VGHLeODOIMVRJZj4pg0jFjupFzqGOY7Gl1o2rHlm1cy5tqG9dCQFvAzB3x+/lgVpVzb6ot/aIb2T3/u+lr20a+v/e9F8VojZqwishzvGaP1ZK7NIUdYMegZulFBL9a0Ik0zNoz4kh1VhSwHiDijaIa81M4418xpJpqyYylLuLSumWnmFNoyOay470SFO68vkxbSFsb7Yi8SH6x4tD78tcUfvUoPW8uOyTJINSpt/pHBEr9WK8lSVliWu4bZlqWbgCsFB8d9jm6vMF4GkWbM9HJmuwXteEOJdmzpp4ZNNcVt+6vceahCzbc4jpM2usVnezEPKmHW3/6ej7Dzrl//yXbMTVMBGlV2bfqrnrIfHCjJXWVXkBtYC2G+pWlGhqyw8EOzQOApCQICD7YOSo5s9zm+K2C06jA8MsB6K5oLw/yj3cz5rCtM9KGvzP909+N/4tV7qvjViui32od8Zd8feOKegZLcHHgSKSRhaujEmjiHtLAIAcNlyUjFYWqzy94tJazR+L5LmtNEuf+eZPbjp86snN0zNWj/6OHVV2bH/N+4c1+ARTpl19yQ5fodSvK6kYq7W0kCiRGBp3CkwHcE2lqGAwdtsVs3B5GSzMSp/qa2fKUbpt/3XJV96F/XfyLeTyX0Q8V2VSg00pXFhO+Im4TgpCO4PvDk9qrHlKekW/KcxYGyvKYtZ4OS89RwrfyDlU62VC4p8+DXFl4Rzn8D2WecsPJCM0sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDMtMDhUMDg6NTU6NDUtMDU6MDAxeZ3NAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAzLTA4VDA4OjU1OjQ1LTA1OjAwQCQlcQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/mastercard.png":
/*!**************************************************!*\
  !*** ./public/assets/images/icon/mastercard.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFjklEQVRIiaWWa4ycVRnHf+e8Zy47l52d7qXdWdputwsLtpUVWivLVkrgk2DwkghY1EBq8Erwgwnxg+FLIwlRMUGNxgYb+AJagjFySyRlu25Li9SitbSulO223e7M7Ozc573MOccPs0Nqs11t+CfvhzfPyfM77/Oc8/xfMf74fv6HtgJ3AWPAtcAqQAAFYBqYAl4G3lopiVohdjvwA+DOK8Q7gcGl+A+BA8CPgNeXWyyvkORp4I0VIMtpJ/Aa8Ov/B+QAE8C3rwJwub5Oq4zRlUAHgR0fAdLWJ2n17kNd2qNfArcACGsJVJhyLImvwghriXt1Em4VYQxCWFzCLJoUrgkjhCUp63SJCg4GgwD4BLAP+NqloG3AN4S1WCmZS68h6lbZdOZdeisLBE6ImZ61vD8wTIfvUl6MkJQenwodJxPJEVjF6eZ63g1GiDouGSdP0zoAXwV+Axxsg37e+ooQ86lexk9M8qWpF9mYnSHmu2ghKcY7mRrayjNjD3Dn6pN8l33cGJ0G2QAkjWaKP9dv5iflB5kOBtgYOt+G/QLYIsYf378J+AfA+VX9fO7wH3jspacwKkw21UvgOAgLcd0gcq7Euc2D3PpIFhHPQbUP3yqEgJBsgLNAqdHPfdknec+sZ70zh8YB2CaB+4W1zHetZvt7h/n+Sz9jMd7FTLofX4WwCIwULPpxCpsy3DCcpXRM4gVrca3AmCbaSlwdo+EPkuqYY2/3HhK2RoV4u//3S2C86TgoYfj8gd+h6y5532LyOfwLF2gWFvFm5wiy5+lccxZzTZlSzqd2fAYVcUHFsOWz2NpFcHN4iyEy9iS74q8xp3vboDEFDNeicdYeO8ToyACJ3T9lYzSG1Zr5555FaIHqXUPixuvoSEzjz19EywpyeBwx9gCqMoP+1x/BNEF72Egatuxg/G9VfvX2LKZTIjGDCujyVZjkB9P03LSOru89iq5WKU9MsmHPHiJDG/DOnEHXG8jULpy6T6hWQ23bgTn9CPrvzxK+91Vk+jpss46ZPQB9GXrUC6RkmcB2ExGmUwJCGkMQT2KTSVjI41+YI5zpp+OGEXS1SnR4GBkNY7wGxtcE2UXy+35LaPDjODd/C9G5HqJpbOEUxFZD8QRufpog3I3EfnhhizGvHsuObufff32B4AtfJB9LEcn0I5QCazGej656pEY8Oga7qB6dIeKcxBR3gXYJJh4DDObi28ihe3D0EU6VOijIPlaJ8wAVBUx3BF7m3DVDvD6hePjgBOVYGuu5WK0RCBASY8OYUR+xqYHjJUnvjBJMPoEJJBgDgI2miR55AhTsN3tJCLd9GGYU8Bewn04Xc/z+rofYWpxh7PQRpgeG0I6DsBYEaC0J3q+TDOVJfNZgkyE8dx0i2iqNRRKTJUjC0wvf4WB9M9eGZrGtcXTIWbfz3hyIb0YDj3Ksk6mR7fSV8mye/SddtRKRpk9no0pfLUc53MmPN+4m2NbN9aGjKFtESQ8lK4ScAhDiqcLDPFn+MhmVJyQ0LY/kUbHksMeAUWU0uWQ3Tcfh9hOTjJ45Tk+lQOCEONszwOTHxnhr4CaSxTJ3qze5LfYOA2qBwDqcCtbycv02ptwtDKgsceGiW+ZwCri+DbqlPdalNfgqTD7ZDUDcq9OUDrVIjLhXp7e2gGvDXFi6jHFZR1tJ1SRIyBqrncJSKUW7P3cAb7SH6iHgGeBBIyRKN1lTnMcKgREty0rXigA0cVBCs05dxCLQViIk9DnFywEAz9Ny6v8yvoeAdy5dJazFMRrHaJaTwKKExmHZ+AngvvbL5Q57K3B02axXp+MsmeiVQC4tG977ESDP0XLXykqgtnYDnwEmrwJwGLgH+AoszZ1LtNJ/3StLzzhwN61SbABStC5HCfiA1kH6E/DmSrv4D19DRIS7aeNEAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/assets/images/icon/mythic_.png":
/*!***********************************************!*\
  !*** ./public/assets/images/icon/mythic_.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/assets/images/icon/paypal.png":
/*!**********************************************!*\
  !*** ./public/assets/images/icon/paypal.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADwUlEQVRIibWWW0wcVRiAvzN7gV12ubVcCoJWQTQaLChekKJW1EjbaGxMxaTRqG1MMTE+GFMS6oOJfW5SrbHBS1If8Mk00iaatDQYKaKGNdZWi0qQCqUsMLMsy+7M7u/DOIhrXEoLXzKZnHP+Od+cy8x/VMQwWIa7gK1AI1ANFAIKmAaGga+B48BApk5UBtFDQAfQstyb/E0vcAD4YiWiQ0D7FQrSOQLsWU7kAk4Bm69S4vAN8ACw4FRoaQF9qyABuBt77RZZKjoM3LcKEoc64GOn4ExdA/Zw14JmoM8Z0TtrJAF4F+wR3SYiPyqlCAT9gAvEYm4uhoiglPrXUyKgFAR8XnBrYCWZi5mL9SJCMNsDbhfxeBLTsgAa3ECbphRej4uLE9Nc+GOSqopiritdh7OE5kIMT3YWC/Mxsv3ZAIxemmEkHKWqOEhZYQA0BSjMBZPL0QTjs1HyPVCYF0Qp1eYGmnJyfFwK67Ts/4ANQR/hWILOnVsoLsjFo8EdG0s5+8som6rKmZya4dzFaV7v/Z0cJczELd5suZWSPD+WadFcU0F79yBGNEbXU/WICJqmGt1AFZqbwQtjDI9P0bnzadrfO0ZoZJyJoWG6T33Pq082cX5simcfrqfrWB8l11eiW15e23wjL382RGhcZ/K3MB/1D3NgWy1/6vM8XrOB8tIi5iIRUim5QRPIBwiNTOCyUnzSG+KNHc2sD/op8Hnxez3kZHmpLivkmY4jbKosorWpjtGJaY4OjbHvwRoKfF4CLo3KwhxODk8C8EhVEWA6S5vrdrs0BdD15SBNtTfR89Zuu2VHByUBH3hcvPhoA4dPnCExEaZz12Ns7w5xT2UBPXu2AEKw41NKfF5K8v0kRTDiFnXl+Uh8UYRbRGZj81H/wd3bqS5bj1gmppXk+P7nOT82SXVFMevyAhz6vJ+2F1rJCuTxyp3l3FwUBDNBImlx4rlGzl2OcEtRkCy3i3gyhVIwn0g6ngiGbpzWZ2fFJin67KwYui5L+fanX2Vr5/syORUWM5EQEVMkGV8Sa4pIyr6n7HZd18UwDInY14CKGMbbwL7/+9pEBIBgbi5YCYxoDE1L/0Uuy0EVMYxaIJQpSimFphTJVGqlAod7NeAHYChTlIhci+RnYMCZg71X28sVsBf+SRP9wIdrIOkGTsJ/M+x3QP0qSc4CtzuF9O1zPzC4CpIQaUk0XbSAnYa7rkFyFDu7RjKJHF4CWoGvViA4AzwB7AIkvTHTuc6hCdiGPRUbgTzsA6QOjGBvpB7gdKZO/gJX4qTG+gXfMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/pvp.png":
/*!*******************************************!*\
  !*** ./public/assets/images/icon/pvp.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/assets/images/icon/raids.png":
/*!*********************************************!*\
  !*** ./public/assets/images/icon/raids.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/assets/images/icon/search.png":
/*!**********************************************!*\
  !*** ./public/assets/images/icon/search.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjYyN0M4NTcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjYyN0M4NjcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNjI3QzgzNzJFOTExRThCNzUyQzZBRTY4NDU5RDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNjI3Qzg0NzJFOTExRThCNzUyQzZBRTY4NDU5RDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WYb6uAAAAbNJREFUeNqslU0oRFEUx++bptSQxbCwflO+kiJFWEgpFhZTIhvFklJKsvOdBVIiK8ZKFIkFUZqVsLCyIU3WFkhGNOXjf+o/9RrvznvzZk79undm7vzOfad7zzNM01Q2kQ+6QDuoAAa4A2dgD7wlF8ZiMaULw0Y+DuZTvvtlgmRMgUknuS/l8znFD6AXFFMq64J8mlswAS6BX6UJqzwKWvnHUrADni2/v4J9UA3GQAMTOMplcQsfd1o5xwIYBXWhUGguXc3zMH6BR2CqzEJKVAUKUft3u533cD6iMo9hjn26soQ5P/Egj3IM6+Ryjn9AQnmLOCjXyQ2VfRg6+T1Hv0dxAR228kPO2zyImzke6OTbnC97kK9w3NLJP9knyniZ3MYgqAEzdmc8tXFdgXrevCUH8RBYBS8QF7npLU3gGiyCG9DJ1puMAOgAFxTLboO4/mtu5N9sRrOgFhzxDMcp+gDHoJGdswSsS3mQYNNtP5eQR+3mTistL4tTsAueLGtF3A8iKNGAG7nrkJcFd/4vgS8Ht1NRGJEE1hLlRG6TYENlceW1CSCWqYyBnMotCeTkJf4EGAA6kXMrGB0cpgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/assets/images/icon/setting.png":
/*!***********************************************!*\
  !*** ./public/assets/images/icon/setting.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMENEOTc1QjcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMENEOTc1QzcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQ0Q5NzU5NzJFOTExRThCNzBFOERCQzg1RUE3OEU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQ0Q5NzVBNzJFOTExRThCNzBFOERCQzg1RUE3OEU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7VNBOgAAAv5JREFUeNqclnuITFEcx++sKazHGvEHosws1r/IeoUirRLL0P6BTYvUsnlNm1dGS0hEi1WKSSuPvItlYmVJ2rTyj5U0YrDLem2bRxHr86vf6HTde/dy6tPp/u4553vO+T3uDYTDYctH6wuXoA+0QwDaYFYqlXrd0eQsy1+bD4NgEkzWvhcs8TPZSWQCPILNhk123gjNBo/hV2ZAJBKJQSNM60ikAO7ANVgP1Wp/pycx20BoVYFDdDvgMiR5nusmMh2uwkJYC+KsmXAL9sIJm8hxqGDBWvpFkId/yulnwxlTyBSpgd062dIrCcEztVfYRMS2BdIyDoGUGOku0q0ToT93bUSXLLJaTg8tPgPC0rUtwzc96J5DgncxsQWN9+LofvAEcuGD9Y8Nge46/0ZGwMnxS/X4CYc1RsM5uAkXYKLDmCr4hkCRaZSTdFVnd9FEC+siZiuDSjgJ4uihUAcbNKoy7SFEOVGZhv13OCU+qVexNh2YhJ3GxHFwV5OwzrCPgvsS9uw8aVzZKrpC3XA3uS0RadUoane5armeJljgcj0jEcn38FNafPIWenv4Mwduu7yTk3X2EMime5+lRc8rkr7AGJd3Y+GHR3h/lVsSX7yEe5kSoUm53xgb1ys7CA2GPQ9WSiW27V4idI4+Ss587hQKhU7rkZs0fCWLf6qzLU0s2a2MGwCDoRiOSWSx2ypDoNQoQWktqrGAw/ekQQtigc0+BdZAT9kdHIArZsYjIiE+Atswe56YTXYxHGY4XHGt4tWWw1PEjiC02CnjpbQvU5Fm6z8aC3/U+fMQ2uYksh32wQvbXLGVuqxbwmKVNqEW9etGJ5GonqZQnyVB30C+Vuhym8AK2CPJiNAn6K9+mar2YieR83JMrVtxjap6zQWpqCU2Efm+b2Xn4yUA5BAIbKK/LmOxV7tV4bP6hZSCedjIgRzNJ7O9gmy9Iik5u/QLGeU54RVdln7fc222oFbekPFLNAQeGL6I6w381YI+A0fiv0gzPyMiJeOon8m/BRgAuQrmGVlzgYMAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/assets/images/icon/visa.png":
/*!********************************************!*\
  !*** ./public/assets/images/icon/visa.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NvbGxlY3Rpb25zL1RhYkNvbGxlY3Rpb24xLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1Bvc3RMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2VydmljZS9zZXJ2aWNlMS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0LWJveC9Qcm9kdWN0Qm94MS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnN0YW50L2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb25zdGFudC9tZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFpbmVycy9DYXJ0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVycy9jb21tb24vY29weXJpZ2h0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVycy9mb290ZXItZml2ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlcnMvY29tbW9uL2NhcnQtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2NvbW1vbi9sb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vbmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVycy9jb21tb24vdG9wYmFyLWRhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXJzL2hlYWRlci10aHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL0NvbXBhcmUvQ29tcGFyZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9hcG9sbG8vYXBvbGxvLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2xvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvd2lzaGxpc3QvV2lzaGxpc3RDb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xheW91dHMvU2hvZXMvY29tcG9uZW50cy9DYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8vY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvZW1wdHktc2VhcmNoLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vYW1lcmljYW4tZXhwcmVzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9jYXJ0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2Rpc2NvdmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2dvbGQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9teXRoaWNfLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9wdnAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vcmFpZHMucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NldHRpbmcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmstaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImkxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiU3BlY2lhbFByb2R1Y3RzIiwidHlwZSIsImZsdWlkIiwiZGVzaWduQ2xhc3MiLCJjYXJ0Q2xhc3MiLCJoZWFkaW5nIiwibm9UaXRsZSIsInRpdGxlIiwiaW5uZXIiLCJsaW5lIiwiaHJDbGFzcyIsImJhY2tJbWFnZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0Iiwid2lzaExpc3RDb250ZXh0IiwiV2lzaGxpc3RDb250ZXh0IiwiY29tcGFyZUNvbnRleHQiLCJDb21wYXJlQ29udGV4dCIsImN1ckNvbnRleHQiLCJDdXJyZW5jeUNvbnRleHQiLCJjdXJyZW5jeSIsInN0YXRlIiwicXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzdWx0Iiwic3RhdHVzIiwiQ29udGVudCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZW1wdHlTZWFyY2giLCJzbGljZSIsIm1hcCIsInByb2R1Y3QiLCJpIiwic3ltYm9sIiwiYWRkVG9Db21wYXJlIiwiYWRkVG9DYXJ0IiwiYWRkVG9XaXNoIiwiUG9zdExvYWRlciIsInByb3BzIiwiU2VydmljZUxheW91dCIsInNlY3Rpb25DbGFzcyIsIl9faHRtbCIsInN2Z3NlcnZpY2UiLCJzdmdvZmZlciIsIlByb2R1Y3RJdGVtIiwiYWRkQ2FydCIsImRlcyIsImFkZFdpc2hsaXN0IiwicHJvZHVjdERldGFpbCIsImFkZENvbXBhcmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXJ0Q29udGV4dCIsInBsdXNRdHkiLCJtaW51c1F0eSIsInNldFF1YW50aXR5IiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJtb2RhbFNlcnZlciIsInNldE1vZGFsU2VydmVyIiwibW9kYWxDb21wYXJlIiwic2V0TW9kYWxDb21wYXJlIiwidG9nZ2xlQ29tcGFyZSIsInRvZ2dsZSIsInVuaXF1ZVRhZ3MiLCJvbkNsaWNrSGFuZGxlIiwiaW1nIiwiY2hhbmdlUXR5IiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJjbGlja1Byb2R1Y3REZXRhaWwiLCJ0aXRsZVByb3BzIiwic3BsaXQiLCJqb2luIiwicHVzaCIsImlkIiwidmFyaWFudENoYW5nZUJ5Q29sb3IiLCJpbWdJZCIsInByb2R1Y3RfaW1hZ2VzIiwiaW1hZ2VfaWQiLCJzcmMiLCJnZXRGYWN0b3JGb3JJdGVtIiwidmFyaWFudHMiLCJqIiwibmFtZSIsImZhY3RvciIsIm9uQ2hhbmdlTW9kYWxGYWN0b3IiLCJzZXJ2ZXIiLCJSYXRpbmdTdGFycyIsInJhdGluZyIsIm5ldyIsInNhbGUiLCJpbWFnZXMiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZGlzY291bnQiLCJ0b0ZpeGVkIiwidmFyaSIsImZpbmRJdGVtIiwiZmluZCIsIngiLCJjb2xvciIsInNldE1vZGFsU2VydmVyRGVmYXVsdCIsInNpemUiLCJpMThuZXh0IiwidXNlIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbnMiLCJmbiIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJucyIsImRlZmF1bHROUyIsImtleVNlcGFyYXRvciIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIk1FTlVJVEVNUyIsInBhdGgiLCJDYXJ0Q29udGFpbmVyIiwiaWNvbiIsImN1cnJDb250ZXh0IiwiY2FydExpc3QiLCJ0b3RhbCIsImNhcnRUb3RhbCIsIml0ZW0iLCJpbmRleCIsIkNvcHlSaWdodCIsImxheW91dCIsInZpc2EiLCJtYXN0ZXJjYXJkIiwicGF5cGFsIiwiYW1lcmljYW5leHByZXNzIiwiZGlzY292ZXIiLCJGb290ZXJGaXZlIiwibGF5b3V0Q2xhc3MiLCJsb2dvTmFtZSIsImNvbnRlbnR3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJTbGlkZVVwRG93biIsImVsZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtdCIsImVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJDYXJ0SGVhZGVyIiwicXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJDdXJyZW5jeSIsIkNvbnRleHQiLCJzZWxlY3RlZEN1cnJlbmN5IiwiY3VycmVuY3lDb250ZXh0IiwiY2hhbmdlTGFuZ3VhZ2UiLCJsbmciLCJnZXRDdXJyZW5jaWVzIiwiY3VycmVuY2llcyIsImNvZGVpbiIsImhpZ2giLCJsYW5ndWFnZSIsInZhbCIsImxhbmciLCJjdXIiLCJ3aXRoQXBvbGxvIiwiTG9nb0ltYWdlIiwibG9nbyIsIk5hdkJhciIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsIm5hdkNsb3NlIiwic2V0TmF2Q2xvc2UiLCJyaWdodCIsIm9wZW5OYXYiLCJhc1BhdGgiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VOYXYiLCJyZW1vdmUiLCJvbk1vdXNlRW50ZXJIYW5kbGVyIiwiaGFuZGxlTWVnYVN1Ym1lbnUiLCJldmVudCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm1haW5tZW51Iiwic2V0TWFpbk1lbnUiLCJjdXJyZW50VXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImZpbHRlciIsIml0ZW1zIiwic2V0TmF2QWN0aXZlIiwiY2hpbGRyZW4iLCJzdWJJdGVtcyIsInN1YlN1Ykl0ZW1zIiwibWVudUl0ZW0iLCJhY3RpdmUiLCJpbmNsdWRlcyIsInN1Ym1lbnVJdGVtcyIsInRvZ2dsZXROYXZBY3RpdmUiLCJhIiwiYiIsImMiLCJvcGVuTWJsTmF2IiwiYmluZCIsIlRvcEJhckRhcmsiLCJ0b3BDbGFzcyIsImxvZ2luQ29udGV4dCIsIkxvZ2luQ29udGV4dCIsImlzTG9nZ2VkIiwibG9nb3V0IiwibG9nT3V0IiwiSGVhZGVyVGhyZWUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJudW1iZXIiLCJwYWdlWE9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJvcGVubXlzbGlkZSIsImdldEVsZW1lbnRCeUlkIiwib3BlblNlYXJjaCIsImRpc3BsYXkiLCJjbG9zZVNlYXJjaCIsImxvYWQiLCJmZXRjaCIsInNlYXJjaCIsInNldHRpbmdzIiwiY2FydCIsInJlcXVpcmUiLCJjb25maWdzIiwiY29uZmlnIiwiYXBpS2V5IiwiZmlyZWJhc2UiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiZ29vZ2xlUHJvdmlkZXIiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiY3JlYXRlQ29udGV4dCIsImNvbXBhcmVJdGVtcyIsIkZ1bmN0aW9uIiwicmVtb3ZlRnJvbUNvbWFwcmUiLCJnZXRMb2NhbENvbXBhcmVJdGVtcyIsImxpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwiUHJvdmlkZXIiLCJzZXRjb21wYXJlSXRlbXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmluZEluZGV4IiwiY29tcGFyZSIsInRvYXN0Iiwic3VjY2VzcyIsInNlbGVjdGVkQ3VyciIsIkNvbnN1bWVyIiwiYXBvbGxvQ2xpZW50IiwiUGFnZUNvbXBvbmVudCIsInNzciIsIldpdGhBcG9sbG8iLCJhcG9sbG9TdGF0ZSIsInBhZ2VQcm9wcyIsImNsaWVudCIsImluaXRBcG9sbG9DbGllbnQiLCJkaXNwbGF5TmFtZSIsIndhcm4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJBcHBUcmVlIiwicmVxIiwiaGVhZGVycyIsImNvb2tpZSIsInJlcyIsImZpbmlzaGVkIiwiZ2V0RGF0YUZyb21UcmVlIiwiSGVhZCIsInJld2luZCIsImNhY2hlIiwiZXh0cmFjdCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwid2lzaGxpc3RJdGVtcyIsInJlbW92ZUZyb21XaXNoIiwiZ2V0TG9jYWxXaXNobGlzdEl0ZW1zIiwic2V0V2lzaGxpc3RJdGVtcyIsIndpc2giLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJocmVmIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSIsInRva2VuIiwiZmF2aWNvbiIsIlByb2R1Y3Q0IiwiQ2F0ZWdvcnkiLCJjYXJ0MiIsImNhcnQzIiwiY2FydDQiLCJQcm9kdWN0MyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwidG9vbHNfcHJvZHVjdF80IiwiUHJvZHVjdDciLCJQcm9kdWN0NSIsImRvdHMiLCJQcm9kdWN0NiIsIlRlYW00IiwiU2xpZGVyMiIsIlNsaWRlcjMiLCJTbGlkZXI0IiwiU2xpZGVyNSIsIlNsaWRlcjYiLCJTbGlkZXI3IiwiY2xhc3NuYW1lcyIsImFjY29yZHMiLCJpbm5lckhUTUwiLCJhbmNob3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFuY2hvciIsIm9uY2xpY2siLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVtb3ZlUHJvcGVydHkiLCJlbGVtZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInN2Z0ZyZWVTaGlwcGluZyIsInN2Z3BheW1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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REFEc0IsR0FFdEIsMkRBRnNCLEdBR3RCLDhEQUhzQixHQUl0QixtMENBSnNCLEdBS3RCLDJVQUxzQixHQU10QiwwVUFOc0IsR0FPdEIsNFVBUHNCLEdBUXRCLDRkQVJzQixHQVN0QiwwVUFUc0IsR0FVdEIsd1RBVnNCLEdBV3RCLCtEQVhzQixHQVl0Qiw0REFac0IsR0FhdEIseURBYnNCLEdBY3RCLHdEQWRHLEM7Ozs7Ozs7Ozs7O0FDaGhCUCxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi4vcHJvZHVjdC1ib3gvUHJvZHVjdEJveDEnO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jYXJ0L2luZGV4J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBNZWRpYSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBXaXNobGlzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dCc7XHJcbmltcG9ydCBQb3N0TG9hZGVyIGZyb20gJy4uL1Bvc3RMb2FkZXInO1xyXG5pbXBvcnQgeyBDb21wYXJlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dCc7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0JztcclxuaW1wb3J0IGVtcHR5U2VhcmNoIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2VtcHR5LXNlYXJjaC5qcGcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgU3BlY2lhbFByb2R1Y3RzID0gKHsgdHlwZSwgZmx1aWQsIGRlc2lnbkNsYXNzLCBjYXJ0Q2xhc3MsIGhlYWRpbmcsIG5vVGl0bGUsIHRpdGxlLCBpbm5lciwgbGluZSwgaHJDbGFzcywgYmFja0ltYWdlIH0pID0+IHtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnbmV3Jyk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gICAgY29uc3Qgd2lzaExpc3RDb250ZXh0ID0gdXNlQ29udGV4dChXaXNobGlzdENvbnRleHQpO1xyXG4gICAgY29uc3QgY29tcGFyZUNvbnRleHQgPSB1c2VDb250ZXh0KENvbXBhcmVDb250ZXh0KTtcclxuICAgIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XHJcbiAgICBjb25zdCBjdXJyZW5jeSA9IGN1ckNvbnRleHQuc3RhdGU7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IGNvbnRleHQucXVhbnRpdHk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEgKCkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChwcm9jZXNzLmVudi5QUk9EVUNUU19VUkwrXCIvdGFnP3RhZz1cIithY3RpdmVUYWIrJyZnYW1lPTEnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICE9IDIwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdC5kYXRhLkNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIoYWN0aXZlVGFiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFthY3RpdmVUYWJdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtkZXNpZ25DbGFzc30+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtmbHVpZH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9UaXRsZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2hlYWRpbmd9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZXhjbHVzaXZlIHByb2R1Y3RzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2lubmVyfT5zcGVjaWFsIHByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBockNsYXNzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgcm9sZT1cInRvdXJuYW1lbnQ2XCI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJ0aGVtZS10YWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3QgY2xhc3NOYW1lPVwidGFicyB0YWItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT0gdHlwZSA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignbmV3Jyl9Pk5FVyBBUlJJVkFMPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT17YWN0aXZlVGFiID09ICdmdXJuaXR1cmUnID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdzYWxlJyl9PlNBTEVTIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSAnZnVybml0dXJlJyA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc3BlY2lhbCcpfT5TUEVDSUFMPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibm8tc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBtYXJnaW4tZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGVtcHR5LWNhcnQtY2xzIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgc3JjPXtlbXB0eVNlYXJjaH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTQgbXgtYXV0b1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHN0cm9uZz5Zb3VyIENhcnQgaXMgRW1wdHk8L3N0cm9uZz48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkV4cGxvcmUgbW9yZSBzaG9ydGxpc3Qgc29tZSBpdGVtcy48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICYmIGRhdGEuc2xpY2UoMCwgOCkubWFwKChwcm9kdWN0LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e2l9IHByb2R1Y3Q9e3Byb2R1Y3R9IHN5bWJvbD17Y3VycmVuY3kuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDb21wYXJlPXsoKSA9PiBjb21wYXJlQ29udGV4dC5hZGRUb0NvbXBhcmUocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENhcnQ9eygpID0+IGNvbnRleHQuYWRkVG9DYXJ0KHByb2R1Y3QsIHF1YW50aXR5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkV2lzaGxpc3Q9eygpID0+IHdpc2hMaXN0Q29udGV4dC5hZGRUb1dpc2gocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRDbGFzcz17Y2FydENsYXNzfSBiYWNrSW1hZ2U9e2JhY2tJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlY2lhbFByb2R1Y3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ29udGVudExvYWRlciBmcm9tIFwicmVhY3QtY29udGVudC1sb2FkZXJcIlxyXG5cclxuY29uc3QgUG9zdExvYWRlciA9IChwcm9wcykgPT4gKFxyXG4gICAgPENvbnRlbnRMb2FkZXIgY2xhc3NOYW1lPVwic2tlbGV0b24tc3ZnXCJcclxuICAgICAgICBzcGVlZD17MTB9XHJcbiAgICA+XHJcbiAgICAgICAgPHJlY3QgY2xhc3NOYW1lPVwic2tlbGV0b24taW1nXCIgeD0nMicgeT0nMicgcng9JzAnIHJ5PScwJyAvPlxyXG4gICAgICAgIDxyZWN0IGNsYXNzTmFtZT1cInNrZWxldG9uLWMxXCIgeD0nMCcgcng9JzAnIHJ5PScwJy8+XHJcbiAgICAgICAgPHJlY3QgY2xhc3NOYW1lPVwic2tlbGV0b24tYzJcIiB4PScwJyByeD0nMCcgcnk9JzAnIC8+XHJcbiAgICAgICAgPHJlY3QgY2xhc3NOYW1lPVwic2tlbGV0b24tYzNcIiB4PScwJyByeD0nMCcgcnk9JzAnIC8+XHJcbiAgICA8L0NvbnRlbnRMb2FkZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgc3ZnRnJlZVNoaXBwaW5nLFxyXG4gICAgc3Znc2VydmljZSxcclxuICAgIHN2Z29mZmVyXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3NjcmlwdFwiXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFNlcnZpY2VMYXlvdXQgPSAoe3NlY3Rpb25DbGFzc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzZWN0aW9uQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPSc3JyBjbGFzc05hbWU9XCJzZXJ2aWNlLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdmdzZXJ2aWNlIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+MjQgWCA3IHNlcnZpY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFsd2F5cyBvbmxpbmUgZm9yIHlvdTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPSc0JyBjbGFzc05hbWU9XCJzZXJ2aWNlLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdmdvZmZlciB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PmZlc3RpdmFsIG9mZmVyPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdWJzY3JpYmUgZm9yIG5ldyBvZmZlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUxheW91dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIE1lZGlhLCBNb2RhbCwgTW9kYWxCb2R5LCBJbnB1dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jYXJ0JztcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQnO1xyXG5cclxuY29uc3QgUHJvZHVjdEl0ZW0gPSAoeyBwcm9kdWN0LCBhZGRDYXJ0LCBiYWNrSW1hZ2UsIGRlcywgYWRkV2lzaGxpc3QsIGNhcnRDbGFzcywgcHJvZHVjdERldGFpbCwgYWRkQ29tcGFyZSwgdGl0bGUgfSkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGNhcnRDb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgICBjb25zdCBjdXJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gICAgY29uc3QgY3VycmVuY3kgPSBjdXJDb250ZXh0LnN0YXRlO1xyXG4gICAgY29uc3QgcGx1c1F0eSA9IGNhcnRDb250ZXh0LnBsdXNRdHk7XHJcbiAgICBjb25zdCBtaW51c1F0eSA9IGNhcnRDb250ZXh0Lm1pbnVzUXR5O1xyXG4gICAgY29uc3QgcXVhbnRpdHkgPSBjYXJ0Q29udGV4dC5xdWFudGl0eTtcclxuICAgIGNvbnN0IHNldFF1YW50aXR5ID0gY2FydENvbnRleHQuc2V0UXVhbnRpdHk7XHJcblxyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttb2RhbFNlcnZlciwgc2V0TW9kYWxTZXJ2ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21vZGFsQ29tcGFyZSwgc2V0TW9kYWxDb21wYXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZUNvbXBhcmUgPSAoKSA9PiBzZXRNb2RhbENvbXBhcmUoIW1vZGFsQ29tcGFyZSk7XHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xyXG4gICAgY29uc3QgdW5pcXVlVGFncyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGUgPSAoaW1nKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2UoaW1nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VRdHkgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFF1YW50aXR5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGlja1Byb2R1Y3REZXRhaWwgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlUHJvcHMgPSBwcm9kdWN0LnRpdGxlLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LWRldGFpbHMvJHtwcm9kdWN0LmlkfWAgKyAnLScgKyBgJHt0aXRsZVByb3BzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhcmlhbnRDaGFuZ2VCeUNvbG9yID0gKGltZ0lkLCBwcm9kdWN0X2ltYWdlcykgPT4ge1xyXG4gICAgICAgIHByb2R1Y3RfaW1hZ2VzLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pbWFnZV9pZCA9PSBpbWdJZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2UoZGF0YS5zcmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRGYWN0b3JGb3JJdGVtID0gKHZhcmlhbnRzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxTZXJ2ZXIpO1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2YXJpYW50cy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGlmICh2YXJpYW50c1tqXS5uYW1lID09IG1vZGFsU2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFyaWFudHNbal0uZmFjdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMS4wXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlTW9kYWxGYWN0b3IgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBsZXQgc2VydmVyID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICBzZXRNb2RhbFNlcnZlcihzZXJ2ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgUmF0aW5nU3RhcnMgPSBbXVxyXG4gICAgbGV0IHJhdGluZyA9IDU7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhdGluZzsgaSsrKSB7XHJcbiAgICAgICAgUmF0aW5nU3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmYSBmYS1zdGFyXCIga2V5PXtpfT48L2k+KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJveCBwcm9kdWN0LXdyYXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJsZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdC5uZXcgPT09IHRydWUpID8gPHNwYW4gY2xhc3NOYW1lPVwibGFibGUzXCI+bmV3PC9zcGFuPiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdC5zYWxlID09PSB0cnVlKSA/IDxzcGFuIGNsYXNzTmFtZT1cImxhYmxlNFwiPm9uIHNhbGU8L3NwYW4+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbnRcIiBvbkNsaWNrPXtjbGlja1Byb2R1Y3REZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYSBzcmM9e2Ake2ltYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiBwcm9kdWN0LmltYWdlc1swXS5zcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtiYWNrSW1hZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW1hZ2VzWzBdID09PSAndW5kZWZpbmVkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYWxzZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tcIiBvbkNsaWNrPXtjbGlja1Byb2R1Y3REZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17YCR7aW1hZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIDogcHJvZHVjdC5pbWFnZXNbMF0uc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJ0Q2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9XCJBZGQgdG8gY2FydFwiIG9uQ2xpY2s9e2FkZENhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IHRpdGxlPVwiQWRkIHRvIFdpc2hsaXN0XCIgb25DbGljaz17YWRkV2lzaGxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbXBhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb21wYXJlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJlZnJlc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsQ29tcGFyZX0gdG9nZ2xlPXt0b2dnbGVDb21wYXJlfSAgc2l6ZT1cImxnXCIgY2VudGVyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImNvbXBhcmUtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17YCR7cHJvZHVjdC52YXJpYW50cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPyBpbWFnZSA6IHByb2R1Y3QuaW1hZ2VzWzBdLnNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5pbWFnZXNbMF0uc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgYWxpZ24tc2VsZi1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIj48L2k+SXRlbSA8c3Bhbj57cHJvZHVjdC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnN1Y2Nlc3NmdWxseSBhZGRlZCB0byB5b3VyIENvbXBhcmUgbGlzdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2UvY29tcGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwiYnRuLXNtIGJ0bi1zb2xpZFwiIG9uQ2xpY2s9e2FkZENvbXBhcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgQ29tcGFyZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMgP1xyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LXRodW1iLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGdyaWRfdGh1bWJfaW1nICR7aW1nLnNyYyA9PT0gaW1hZ2UgPyAnYWN0aXZlJyA6ICcnfWB9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gdGl0bGU9XCJBZGQgdG8gV2lzaGxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17YCR7aW1nLnNyY31gfSBhbHQ9XCJ3aXNobGlzdFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tIYW5kbGUoaW1nLnNyYyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6ICcnfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC1kZXRhaWwgJHtwcm9kdWN0RGV0YWlsfWB9ID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2Pntwcm9kdWN0LnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RlcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e2N1cnJlbmN5LnN5bWJvbH17KChwcm9kdWN0LnByaWNlIC0gKHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LmRpc2NvdW50IC8gMTAwKSkqY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnNhbGUgPyA8ZGVsPjxzcGFuIGNsYXNzTmFtZT1cIm1vbmV5XCI+e2N1cnJlbmN5LnN5bWJvbH17KHByb2R1Y3QucHJpY2UgKiBjdXJyZW5jeS52YWx1ZSkudG9GaXhlZCgyKX08L3NwYW4+PC9kZWw+IDogJycgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnZhcmlhbnRzLm1hcCh2YXJpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmRJdGVtID0gdW5pcXVlVGFncy5maW5kKHggPT4geC5jb2xvciA9PT0gdmFyaS5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmluZEl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVUYWdzLnB1c2godmFyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC50eXBlID09PSAnamV3ZWxsZXJ5JyB8fCBwcm9kdWN0LnR5cGUgPT09ICdudXJzZXJ5JyB8fCBwcm9kdWN0LnR5cGUgPT09ICdiZWF1dHknIHx8IHByb2R1Y3QudHlwZSA9PT0gJ2VsZWN0cm9uaWNzJyB8fCBwcm9kdWN0LnR5cGUgPT09ICdnb2dnbGVzJyB8fCBwcm9kdWN0LnR5cGUgPT09ICd3YXRjaCcgfHwgcHJvZHVjdC50eXBlID09PSAncGV0cycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlICE9PSAnUHJvZHVjdCBzdHlsZSA0JyAmJiB1bmlxdWVUYWdzWzBdLmNvbG9yID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbG9yLXZhcmlhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bmlxdWVUYWdzLm1hcCgodmFyaSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3ZhcmkuY29sb3J9IGtleT17aX0gdGl0bGU9e3ZhcmkuY29sb3J9IG9uQ2xpY2s9eygpID0+IHZhcmlhbnRDaGFuZ2VCeUNvbG9yKHZhcmkuaW1hZ2VfaWQsIHByb2R1Y3QuaW1hZ2VzKX0+PC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsfSB0b2dnbGU9e3RvZ2dsZX0gY2xhc3NOYW1lPVwicXVpY2t2aWV3LW1vZGFsXCIgc2l6ZT1cImxnXCIgY2VudGVyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCIgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stdmlldy1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17YCR7cHJvZHVjdC52YXJpYW50cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA/IGltYWdlIDogcHJvZHVjdC5pbWFnZXNbMF0uc3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByb2R1Y3QuaW1hZ2VzWzBdLnNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCIgY2xhc3NOYW1lPVwicnRsLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiB7cHJvZHVjdC50aXRsZX0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjdXJyZW5jeS5zeW1ib2x9eyhwcm9kdWN0LnByaWNlICogY3VycmVuY3kudmFsdWUgKiBnZXRGYWN0b3JGb3JJdGVtKHByb2R1Y3QudmFyaWFudHMpKS50b0ZpeGVkKDIpIH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC52YXJpYW50cyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJTZXJ2ZXJcIiBvbkNoYW5nZT17b25DaGFuZ2VNb2RhbEZhY3Rvcn0gZGVmYXVsdFZhbHVlPXsoKT0+IHtzZXRNb2RhbFNlcnZlckRlZmF1bHQoJycpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5DaG9vc2UgYSBzZXJ2ZXIuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC52YXJpYW50cy5tYXAoKHNlcnZlciwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8b3B0aW9uIGtleT17aX0gdmFsdWU9e3NlcnZlci5uYW1lfT57c2VydmVyLm5hbWV9IHgge3NlcnZlci5mYWN0b3J9PC9vcHRpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0PjogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCI+cHJvZHVjdCBkZXRhaWxzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNjcmlwdGlvbiBib3JkZXItcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Quc2l6ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXplLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zaXplLm1hcCgoc2l6ZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48YSBocmVmPXtudWxsfT57c2l6ZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIj5xdWFudGl0eTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF0eS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBxdWFudGl0eS1sZWZ0LW1pbnVzXCIgb25DbGljaz17bWludXNRdHl9IGRhdGEtdHlwZT1cIm1pbnVzXCIgZGF0YS1maWVsZD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicXVhbnRpdHlcIiB2YWx1ZT17cXVhbnRpdHl9IG9uQ2hhbmdlPXtjaGFuZ2VRdHl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1udW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gcXVhbnRpdHktcmlnaHQtcGx1c1wiIG9uQ2xpY2s9e3BsdXNRdHl9IGRhdGEtdHlwZT1cInBsdXNcIiBkYXRhLWZpZWxkPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkXCIgb25DbGljaz17KCkgPT4gYWRkQ2FydChwcm9kdWN0LCBxdWFudGl0eSl9ID5hZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zb2xpZFwiIG9uQ2xpY2s9e2NsaWNrUHJvZHVjdERldGFpbH0gPlZpZXcgZGV0YWlsPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTsiLCJpbXBvcnQgaTE4bmV4dCBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tIFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIjtcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5pMThuZXh0XHJcbiAgICAudXNlKExhbmd1YWdlRGV0ZWN0b3IpXHJcbiAgICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgICAuaW5pdCh7XHJcbiAgICAgICAgLy8gd2UgaW5pdCB3aXRoIHJlc291cmNlc1xyXG4gICAgICAgIHJlc291cmNlczoge1xyXG4gICAgICAgICAgICBlbjoge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcGJhcl90aXRsZSc6ICdXZWxjb21lIHRvIE91ciBzdG9yZSBNdWx0aWthcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYWxsX3VzJzogJ0NhbGwgVXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdIb21lJzogJ0hvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6ICdmZWF0dXJlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25ldyc6ICduZXcnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmxvZ3NcIjpcIkJsb2dzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Jsb2dfbGVmdF9zaWRlYmFyJzogJ2xlZnQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Jsb2dfcmlnaHRfc2lkZWJhcic6ICdyaWdodCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19kZXRhaWwnOiAnYmxvZyBkZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9sZWZ0X3NpZGViYXInOiAnbGVmdCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnlfcmlnaHRfc2lkZWJhcic6ICdyaWdodCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnlfbm9fc2lkZWJhcic6ICdubyBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnlfbWV0cm8nOiAnbWV0cm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9mdWxsX3dpZHRoJzogJ2Z1bGwgd2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0cyc6ICdQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnRfc2lkZWJhcic6ICdsZWZ0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdyaWdodF9zaWRlYmFyJzogJ3JpZ2h0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdub19zaWRlYmFyJzogJ25vIHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHJlZV9jb2xfdGh1bWJuYWlsX2xlZnQnOiAnVGh1bWJuYWlsIGxlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHJlZV9jb2xfdGh1bWJuYWlsX3JpZ2h0JzogJ1RodW1ibmFpbCByaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RodW1ibmFpbF9iZWxvdyc6ICd0aHVtYm5haWwgYmVsb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhY2NvcmRpYW5fZGV0YWlscyc6ICdhY2NvcmRpYW4gZGV0YWlscycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RodW1ibmFpbF9sZWZ0JzogJ2ltYWdlIGxlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aHVtYm5haWxfcmlnaHQnOiAnaW1hZ2UgcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2ZXJ0aWNhbF90YWInOiAndmVydGljYWwgdGFiJyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFnZXMnOiAnUGFnZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdhYm91dF91cyc6ICdhYm91dCB1cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xvb2tib29rJzogJ2xvb2tib29rJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9naW4nOiAnbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZWdpc3Rlcic6ICdyZWdpc3RlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xvZ291dCc6ICdMb2dvdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWFyY2gnOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2lzaGxpc3QnOiAnd2lzaGxpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXJ0JzogJ2NhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogJ2NvbGxlY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmb3JnZXRfcGFzc3dvcmQnOiAnZm9yZ2V0IHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAnY29udGFjdCc6ICdjb250YWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY2hlY2tvdXQnOiAnY2hlY2tvdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb21wYXJlJzogJ2NvbXBhcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdvcmRlcl9zdWNjZXNzJzogJ29yZGVyX3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXNoYm9hcmQnOiAnRGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAnRkFRJzogJ0ZBUScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nob3AnOiAnU2hvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lbnNfZmFzaGlvbic6ICdtZW5zIGZhc2hpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAnYm90dG9tJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V0aGljX3dlYXInOiAnZXRoaWMgd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nwb3J0c193ZWFyJzogJ3Nwb3J0cyB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2hpcnRzJzogJ3NoaXJ0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dvbWVuX2Zhc2hpb24nOiAnd29tZW5zIGZhc2hpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkcmVzc2VzJzogJ2RyZXNzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdza2lydHMnOiAnc2tpcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2VzdGFybl93ZWFyJzogJ3dlc3Rhcm4gd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V0aG5pY193ZWFyJzogJ2V0aG5pYyB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3BvcnRfd2Vhcic6ICdhcG9ydCB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYm90dG9tX3dlYXInOiAnYm90dG9tIHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdraWRzX2Zhc2hpb24nOiAna2lkc3MgZmFzaGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc29yaWVzJzogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbl9qZXdlbGxlcnknOiAnRmFzaGlvbiBKZXdlbGxlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXBzX2FuZF9oYXRzJzogJ2NhcHMgYW5kIGhhdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcmVjaW91c19qZXdlbGxlcnknOiAncHJlY2lvdXMgamV3ZWxsZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAnbmVja2xhY2VzJzogJ25lY2tsYWNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VhcnJpbmdzJzogJ2VhcnJpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAncmluZ3Nfd3Jpc3Rfd2Vhcic6ICdyaW5ncyAmIHdyaXN0IHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZW5fYWNjZXNzb3JpZXMnOiAnbWVucyBhY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpZXMnOiAndGllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2N1ZmZsaW5rcyc6ICdjdWZmbGlua3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb2NrZXRzX3NxdWFyZXMnOiAncG9ja2V0cyBzcXVhcmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVsbWV0cyc6ICdoZWxtZXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2NhcnZlcyc6ICdzY2FydmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAncGhvbmVfY2FzZXMnOiAncGhvbmUgY2FzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdteV9hY2NvdW50JzogJ015IEFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdmYXNoaW9uJzogJ0Zhc2hpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdiZWF1dHknOiAnQmVhdXR5JyxcclxuICAgICAgICAgICAgICAgICAgICAnZWxlY3Ryb25pYyc6ICdFbGVjdHJvbmljJyxcclxuICAgICAgICAgICAgICAgICAgICAnZnVybml0dXJlJzogJ0Z1cm5pdHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2tpZHMnOiAnS2lkcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BldHMnOiAnUGV0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZlZ2V0YWJsZXMnOiAnVmVnZXRhYmxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dhdGNoJzogJ1dhdGNoJyxcclxuICAgICAgICAgICAgICAgICAgICAndGhlbWVfZWxlbWVudHMnOiAndGhlbWUgZWxlbWVudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X3RpdGxlJzogJ2VsZW1lbnQgdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uX2Jhbm5lcic6ICdjb2xsZWN0aW9uIGJhbm5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvbWVfc2xpZGVyJzogJ2hvbWUgc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2F0ZWdvcnknOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZXJ2aWNlJzogJ3NlcnZpY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpbWFnZV9zaXplX3JhdGlvJzogJ2ltYWdlIHNpemUgcmF0aW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0X2VsZW1lbnRzJzogJ3Byb2R1Y3QgZWxlbWVudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0X2JveCc6ICdwcm9kdWN0IGJveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3Rfc2xpZGVyJzogJ3Byb2R1Y3Qgc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbm9fc2xpZGVyJzogJ25vIHNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ211bHRpX3NsaWRlcic6ICdtdWx0aSBzbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICd0YWInOiAndGFiJyxcclxuICAgICAgICAgICAgICAgICAgICAnZW1haWxfdGVtcGxhdGUnOiAnZW1haWwgdGVtcGxhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW8nOiAncG9ydGZvbGlvJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX2dyaWRfMic6ICdwb3J0Zm9saW8gZ3JpZCAyJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX2dyaWRfMyc6ICdwb3J0Zm9saW8gZ3JpZCAzJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX2dyaWRfNCc6ICdwb3J0Zm9saW8gZ3JpZCA0JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5XzInOiAnbWFzb25hcnkgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV8zJzogJ21hc29uYXJ5IDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfNCc6ICdtYXNvbmFyeSA0JyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5X2Z1bGwnOiAnbWFzb25hcnkgZnVsbCB3aWR0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JlY29tZSBhIHBhcnRuZXInOidCZWNvbWUgYSBwYXJ0bmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWJvdXQgdXMnOidBYm91dCB1cydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm46IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICd0b3BiYXJfdGl0bGUnOiAnQmVtIHZpbmRvIGEgUExBWUVSMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGxfdXMnOiAnRmFsZSBjb20gYSBnZW50ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0hvbWUnOiAnSG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogJ2ZlYXR1cmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbmV3JzogJ25vdmlkYWRlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCbG9nc1wiOlwiQmxvZ3NcIixcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19sZWZ0X3NpZGViYXInOiAnbGVmdCBzaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmxvZ19yaWdodF9zaWRlYmFyJzogJ3JpZ2h0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdibG9nX2RldGFpbCc6ICdibG9nIGRldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X2xlZnRfc2lkZWJhcic6ICdsZWZ0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9yaWdodF9zaWRlYmFyJzogJ3JpZ2h0IHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9ub19zaWRlYmFyJzogJ25vIHNpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeV9tZXRybyc6ICdtZXRybycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5X2Z1bGxfd2lkdGgnOiAnZnVsbCB3aWR0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3RzJzogJ1Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdF9zaWRlYmFyJzogJ2xlZnQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0X3NpZGViYXInOiAncmlnaHQgc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vX3NpZGViYXInOiAnbm8gc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RocmVlX2NvbF90aHVtYm5haWxfbGVmdCc6ICdUaHVtYm5haWwgbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RocmVlX2NvbF90aHVtYm5haWxfcmlnaHQnOiAnVGh1bWJuYWlsIHJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX2JlbG93JzogJ3RodW1ibmFpbCBiZWxvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY29yZGlhbl9kZXRhaWxzJzogJ2FjY29yZGlhbiBkZXRhaWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAndGh1bWJuYWlsX2xlZnQnOiAnaW1hZ2UgbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RodW1ibmFpbF9yaWdodCc6ICdpbWFnZSByaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZlcnRpY2FsX3RhYic6ICd2ZXJ0aWNhbCB0YWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYWdlcyc6ICdQYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Fib3V0X3VzJzogJ1F1ZW0gc29tb3MgbsOzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xvb2tib29rJzogJ2xvb2tib29rJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9naW4nOiAnRW50cmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAncmVnaXN0ZXInOiAnUmVnaXN0cmFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnbG9nb3V0JzogJ1NhaXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWFyY2gnOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2lzaGxpc3QnOiAnTGlzdGEgZGUgZGVzZWpvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhcnQnOiAnQ2FycmluaG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xsZWN0aW9uJzogJ2NvbGxlY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdmb3JnZXRfcGFzc3dvcmQnOiAnZXNxdWVjZXUgc2VuaGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb250YWN0JzogJ2NvbnRhdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdjaGVja291dCc6ICdmaW5hbGl6YXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdvcmRlcl9zdWNjZXNzJzogJ29yZGVyX3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXNoYm9hcmQnOiAnUGFpbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAnRkFRJzogJ0ZBUScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nob3AnOiAnU2hvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lbnNfZmFzaGlvbic6ICdtZW5zIGZhc2hpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAnYm90dG9tJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V0aGljX3dlYXInOiAnZXRoaWMgd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nwb3J0c193ZWFyJzogJ3Nwb3J0cyB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2hpcnRzJzogJ3NoaXJ0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3dvbWVuX2Zhc2hpb24nOiAnd29tZW5zIGZhc2hpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkcmVzc2VzJzogJ2RyZXNzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdza2lydHMnOiAnc2tpcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnd2VzdGFybl93ZWFyJzogJ3dlc3Rhcm4gd2VhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V0aG5pY193ZWFyJzogJ2V0aG5pYyB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3BvcnRfd2Vhcic6ICdhcG9ydCB3ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAnYm90dG9tX3dlYXInOiAnYm90dG9tIHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdraWRzX2Zhc2hpb24nOiAna2lkc3MgZmFzaGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FjY2Vzc29yaWVzJzogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbl9qZXdlbGxlcnknOiAnRmFzaGlvbiBKZXdlbGxlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYXBzX2FuZF9oYXRzJzogJ2NhcHMgYW5kIGhhdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcmVjaW91c19qZXdlbGxlcnknOiAncHJlY2lvdXMgamV3ZWxsZXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAnbmVja2xhY2VzJzogJ25lY2tsYWNlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VhcnJpbmdzJzogJ2VhcnJpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAncmluZ3Nfd3Jpc3Rfd2Vhcic6ICdyaW5ncyAmIHdyaXN0IHdlYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZW5fYWNjZXNzb3JpZXMnOiAnbWVucyBhY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpZXMnOiAndGllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2N1ZmZsaW5rcyc6ICdjdWZmbGlua3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb2NrZXRzX3NxdWFyZXMnOiAncG9ja2V0cyBzcXVhcmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVsbWV0cyc6ICdoZWxtZXRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnc2NhcnZlcyc6ICdzY2FydmVzJyxcclxuICAgICAgICAgICAgICAgICAgICAncGhvbmVfY2FzZXMnOiAncGhvbmUgY2FzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdteV9hY2NvdW50JzogJ01pbmhhIENvbnRhJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFzaGlvbic6ICdGYXNoaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnYmVhdXR5JzogJ0JlYXV0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VsZWN0cm9uaWMnOiAnRWxlY3Ryb25pYycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Z1cm5pdHVyZSc6ICdGdXJuaXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdraWRzJzogJ0tpZHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwZXRzJzogJ1BldHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2ZWdldGFibGVzJzogJ1ZlZ2V0YWJsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd3YXRjaCc6ICdXYXRjaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RoZW1lX2VsZW1lbnRzJzogJ3RoZW1lIGVsZW1lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF90aXRsZSc6ICdlbGVtZW50IHRpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnY29sbGVjdGlvbl9iYW5uZXInOiAnY29sbGVjdGlvbiBiYW5uZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdob21lX3NsaWRlcic6ICdob21lIHNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhdGVnb3J5JzogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgICAgICAnc2VydmljZSc6ICdzZXJ2aWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaW1hZ2Vfc2l6ZV9yYXRpbyc6ICdpbWFnZSBzaXplIHJhdGlvJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9lbGVtZW50cyc6ICdwcm9kdWN0IGVsZW1lbnRzJyxcclxuICAgICAgICAgICAgICAgICAgICAncHJvZHVjdF9ib3gnOiAncHJvZHVjdCBib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICdwcm9kdWN0X3NsaWRlcic6ICdwcm9kdWN0IHNsaWRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ25vX3NsaWRlcic6ICdubyBzbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtdWx0aV9zbGlkZXInOiAnbXVsdGkgc2xpZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAndGFiJzogJ3RhYicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsX3RlbXBsYXRlJzogJ2VtYWlsIHRlbXBsYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvJzogJ3BvcnRmb2xpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzInOiAncG9ydGZvbGlvIGdyaWQgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzMnOiAncG9ydGZvbGlvIGdyaWQgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19ncmlkXzQnOiAncG9ydGZvbGlvIGdyaWQgNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV8yJzogJ21hc29uYXJ5IDInLFxyXG4gICAgICAgICAgICAgICAgICAgICdwb3J0Zm9saW9fbWFzb25hcnlfMyc6ICdtYXNvbmFyeSAzJyxcclxuICAgICAgICAgICAgICAgICAgICAncG9ydGZvbGlvX21hc29uYXJ5XzQnOiAnbWFzb25hcnkgNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3BvcnRmb2xpb19tYXNvbmFyeV9mdWxsJzogJ21hc29uYXJ5IGZ1bGwgd2lkdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdCZWNvbWUgYSBwYXJ0bmVyJzonUmVwcmVzZW50YW50ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Fib3V0IHVzJzonQWJvdXQgdXMnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIGhhdmUgYSBjb21tb24gbmFtZXNwYWNlIHVzZWQgYXJvdW5kIHRoZSBmdWxsIGFwcFxyXG4gICAgICAgIG5zOiBbXCJ0cmFuc2xhdGlvbnNcIl0sXHJcbiAgICAgICAgZGVmYXVsdE5TOiBcInRyYW5zbGF0aW9uc1wiLFxyXG5cclxuICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSB1c2UgY29udGVudCBhcyBrZXlzXHJcblxyXG4gICAgICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuZXh0O1xyXG4iLCJleHBvcnQgY29uc3QgTUVOVUlURU1TID0gW1xyXG4gICB7XHJcbiAgICAgIHRpdGxlOiAnR29sZCcsIHR5cGU6ICdsaW5rJywgcGF0aDogJy9zaG9wP3Byb2R1Y3Q9Z29sZCdcclxuICAgfSxcclxuICAge1xyXG4gICAgICB0aXRsZTogJ1BWUCcsIHR5cGU6ICdsaW5rJywgcGF0aDogJy9zaG9wP3Byb2R1Y3Q9cHZwJ1xyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHRpdGxlOiAnUmFpZCcsIHR5cGU6ICdsaW5rJywgcGF0aDogJy9zaG9wP3Byb2R1Y3Q9cmFpZCdcclxuICAgfSxcclxuICAge1xyXG4gICAgICB0aXRsZTogJ0R1bmdlb24nLCB0eXBlOiAnbGluaycsIHBhdGg6ICcvc2hvcD9wcm9kdWN0PWR1bmdlb24nXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgdGl0bGU6ICdMZXZlbGluZyAnLCB0eXBlOiAnbGluaycsIHBhdGg6ICcvc2hvcD9wcm9kdWN0PWxldmVsaW5nJ1xyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIHRpdGxlOiAnVHJhbnNtb2cgJywgdHlwZTogJ2xpbmsnLCBwYXRoOiAnL3Nob3A/cHJvZHVjdD10cmFuc21vZydcclxuICAgfVxyXG5dXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDYXJ0SGVhZGVyIGZyb20gJy4uL2hlYWRlcnMvY29tbW9uL2NhcnQtaGVhZGVyJztcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uLy4uL2hlbHBlcnMvY2FydCc7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dCB9IGZyb20gJy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0JztcclxuXHJcbmNvbnN0IENhcnRDb250YWluZXIgPSAoe2ljb259KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgICBjb25zdCBjdXJyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcclxuICAgIGNvbnN0IHN5bWJvbCA9IGN1cnJDb250ZXh0LnN0YXRlLnN5bWJvbDtcclxuICAgIGNvbnN0IGNhcnRMaXN0ID0gY29udGV4dC5zdGF0ZTtcclxuICAgIGNvbnN0IHRvdGFsID0gY29udGV4dC5jYXJ0VG90YWw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJvbmhvdmVyLWRpdiBtb2JpbGUtY2FydFwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1xdHktY2xzXCI+e2NhcnRMaXN0Lmxlbmd0aH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2NhcnRgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgc3JjPXtpY29ufSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNob3ctZGl2IHNob3BwaW5nLWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydExpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydEhlYWRlciBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSB0b3RhbD17dG90YWx9IHN5bWJvbD17c3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHsoY2FydExpc3QubGVuZ3RoID4gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PnN1YnRvdGFsIDogPHNwYW4+e3N5bWJvbH17dG90YWx9PC9zcGFuPjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucyB2aWV3LWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlL2FjY291bnQvY2FydGB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnZpZXcgY2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvYWNjb3VudC9jaGVja291dGB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+Y2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxoNT5Zb3VyIGNhcnQgaXMgY3VycmVudGx5IGVtcHR5LjwvaDU+PC9saT59XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgLFJvdyAsQ29sICxNZWRpYX0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB2aXNhIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vdmlzYS5wbmcnO1xyXG5pbXBvcnQgbWFzdGVyY2FyZCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL21hc3RlcmNhcmQucG5nJztcclxuaW1wb3J0IHBheXBhbCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3BheXBhbC5wbmcnO1xyXG5pbXBvcnQgYW1lcmljYW5leHByZXNzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vYW1lcmljYW4tZXhwcmVzcy5wbmcnO1xyXG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9kaXNjb3Zlci5wbmcnO1xyXG5cclxuY29uc3QgQ29weVJpZ2h0ID0gKHtsYXlvdXQsIGZsdWlkfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3ViLWZvb3RlciAke2xheW91dH1gfT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ9e2ZsdWlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiNlwiIG1kPVwiNlwiIHNtPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvcHlyaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gMjAyMC0yMSBQTEFZRVIyIERldmVsb3BlciBTdHVkaW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCI2XCIgbWQ9XCI2XCIgc209XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNhcmQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxNZWRpYSBzcmM9e3Zpc2F9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxNZWRpYSBzcmM9e21hc3RlcmNhcmR9IGFsdD1cIlwiIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxNZWRpYSBzcmM9e3BheXBhbH0gYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PE1lZGlhIHNyYz17YW1lcmljYW5leHByZXNzfSBhbHQ9XCJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48TWVkaWEgc3JjPXtkaXNjb3Zlcn0gYWx0PVwiXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3B5UmlnaHQ7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50ICx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSAnLi9jb21tb24vY29weXJpZ2h0JztcclxuaW1wb3J0IHtDb250YWluZXIsIENvbCAsUm93IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IFNsaWRlVXBEb3duIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjcmlwdFwiXHJcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSAnLi8uLi9oZWFkZXJzL2NvbW1vbi9sb2dvJ1xyXG5cclxuY29uc3QgRm9vdGVyRml2ZSA9ICh7bGF5b3V0Q2xhc3MsIGxvZ29OYW1lfSkgPT4ge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnR3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGlmICgoY29udGVudHdpZHRoKSA8IDc1MCkge1xyXG4gICAgICAgICAgICBTbGlkZVVwRG93bignZm9vdGVyLXRpdGxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb290ZXItdGl0bGVcIik7XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtcywgZnVuY3Rpb24gKGVsZW10KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBlbGVtdC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZSA9IFwiZGlzcGxheTogYmxvY2tcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiamV3ZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLWxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInAtMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImZvb3Rlci10aGVtZTIgc2VjdGlvbi1saWdodCBmb290ZXItYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9vdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZSBmb290ZXItbW9iaWxlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5hYm91dDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb0ltYWdlIGxvZ289e2xvZ29OYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3BsdXMuZ29vZ2xlLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yc3MuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcnNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJmb3JtLXAgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+bmV3c2xldHRlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xJbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNvbGlkIGJsYWNrLWJ0blwiPnN1YnNjcmliZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZm9vdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+c3RvcmUgaW5mb3JtYXRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhY3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBMQVlFUjIgRWNvbW1lcmNlIGZvciBHYW1lcnM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNhbGwgVXM6IDU1IDI3IDkxMjMgNDU2NzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW1haWw6IDxhIGhyZWY9XCIjXCI+U3VwcG9ydEBQTEFZRVIyLmNvbTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8Q29weVJpZ2h0IGxheW91dD17bGF5b3V0Q2xhc3N9IC8+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJGaXZlOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY2FydCc7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBDYXJ0SGVhZGVyID0gKHsgaXRlbSwgc3ltYm9sIH0pID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxsaSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0LycgKyBpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYWx0PVwiXCIgY2xhc3NOYW1lPVwibXItM1wiIHNyYz17YCR7aXRlbS5pbWFnZXNbMF0uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZHVjdC8nICsgaXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48aDQ+e2l0ZW0ubmFtZX08L2g0PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxzcGFuPntpdGVtLnF0eX0geCB7c3ltYm9sfSB7KGl0ZW0ucHJpY2UgLSAoaXRlbS5wcmljZSAqIGl0ZW0uZGlzY291bnQgLyAxMDApKS50b0ZpeGVkKDIpfTwvc3Bhbj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IG9uQ2xpY2s9eygpID0+IGNvbnRleHQucmVtb3ZlRnJvbUNhcnQoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0SGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBsYW5ndWFnZSBmcm9tICcuLi8uLi9jb25zdGFudC9sYW5nQ29uZmlnLmpzb24nO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tICcuLi8uLi9jb25zdGFudC9pMThuJztcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9hcG9sbG8vYXBvbGxvJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3VycmVuY3kgPSAoe2ljb259KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDdXJyZW5jeSA9IENvbnRleHQuY3VycmVuY3lDb250ZXh0LnNlbGVjdGVkQ3VycmVuY3k7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSBsbmcgPT4ge1xyXG4gICAgICAgIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobG5nKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW5jaWVzKCkge1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgICAuZ2V0KCdodHRwczovL2Vjb25vbWlhLmF3ZXNvbWVhcGkuY29tLmJyL2FsbC9CUkwtVVNEJylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgIT0gMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbmNpZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHJlc3VsdC5kYXRhWydCUkwnXTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmNpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnJCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IGN1cnJlbmN5LmNvZGVpbixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVuY3kuaGlnaFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ1IkJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogJ0JSTCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShjdXJyZW5jaWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY2llcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0Q3VycmVuY2llcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm9uaG92ZXItZGl2IG1vYmlsZS1zZXR0aW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PE1lZGlhIHNyYz17aWNvbn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1kaXYgc2V0dGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGg2Pmxhbmd1YWdlPC9oNj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UubWFwKChpdGVtLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSA+PGEgaHJlZj17bnVsbH0gb25DbGljaz17KCkgPT4geyBjaGFuZ2VMYW5ndWFnZShpdGVtLnZhbCkgfX0+e2l0ZW0ubGFuZ308L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoNj5jdXJyZW5jeTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgoY3VyLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT48ZGl2IG9uQ2xpY2s9eygpID0+IHNlbGVjdGVkQ3VycmVuY3koY3VyKX0+e2N1ci5zeW1ib2x9ICB7Y3VyLmN1cnJlbmN5fTwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oQ3VycmVuY3kpOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExvZ29JbWFnZSA9ICh7IGxvZ28gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvYXNzZXRzL2ltYWdlcy9pY29uLyR7bG9nbz9sb2dvOidsb2dvLnBuZyd9YH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ29JbWFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTUVOVUlURU1TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvbWVudSdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgW25hdkNsb3NlLCBzZXROYXZDbG9zZV0gPSB1c2VTdGF0ZSh7IHJpZ2h0OiAnMHB4JyB9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUwKSB7XHJcbiAgICAgICAgICAgIHNldE5hdkNsb3NlKHsgcmlnaHQ6ICctNDEwcHgnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDExOTkpIHtcclxuICAgICAgICAgICAgc2V0TmF2Q2xvc2UoeyByaWdodDogJy0zMDBweCcgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvcGVuTmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE5hdkNsb3NlKHsgcmlnaHQ6ICcwcHgnIH0pXHJcbiAgICAgICAgaWYgKHJvdXRlci5hc1BhdGggPT0gJy9sYXlvdXRzL0d5bScpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BIZWFkZXJcIikuY2xhc3NMaXN0LmFkZChcInppbmRleC1jbGFzc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZU5hdiA9ICgpID0+IHtcclxuICAgICAgICBzZXROYXZDbG9zZSh7IHJpZ2h0OiAnLTQxMHB4JyB9KVxyXG4gICAgICAgIGlmIChyb3V0ZXIuYXNQYXRoID09ICcvbGF5b3V0cy9HeW0nKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wSGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ6aW5kZXgtY2xhc3NcIik7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnN0IG9uTW91c2VFbnRlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTE5OSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tbWVudVwiKS5jbGFzc0xpc3QuYWRkKFwiaG92ZXItdW5zZXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1lZ2FTdWJtZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Yi1hcnJvdycpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuc3VibWVnYW1lbnUnKSlcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5zdWJtZWdhbWVudScpXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNvbnRlbnQnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbnN1Ym1lZ2FtZW51Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnb3BlbnN1Ym1lZ2FtZW51JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW21haW5tZW51LCBzZXRNYWluTWVudV0gPSB1c2VTdGF0ZShNRU5VSVRFTVMpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICAgIE1FTlVJVEVNUy5maWx0ZXIoaXRlbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXMucGF0aCA9PT0gY3VycmVudFVybClcclxuICAgICAgICAgICAgICAgIHNldE5hdkFjdGl2ZShpdGVtcylcclxuICAgICAgICAgICAgaWYgKCFpdGVtcy5jaGlsZHJlbikgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIGl0ZW1zLmNoaWxkcmVuLmZpbHRlcihzdWJJdGVtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViSXRlbXMucGF0aCA9PT0gY3VycmVudFVybClcclxuICAgICAgICAgICAgICAgICAgICBzZXROYXZBY3RpdmUoc3ViSXRlbXMpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN1Ykl0ZW1zLmNoaWxkcmVuKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIHN1Ykl0ZW1zLmNoaWxkcmVuLmZpbHRlcihzdWJTdWJJdGVtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YlN1Ykl0ZW1zLnBhdGggPT09IGN1cnJlbnRVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hdkFjdGl2ZShzdWJTdWJJdGVtcylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBzZXROYXZBY3RpdmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIE1FTlVJVEVNUy5maWx0ZXIobWVudUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAobWVudUl0ZW0gIT0gaXRlbSlcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbiAmJiBtZW51SXRlbS5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSlcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgaWYgKG1lbnVJdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5jaGlsZHJlbi5maWx0ZXIoc3VibWVudUl0ZW1zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3VibWVudUl0ZW1zLmNoaWxkcmVuICYmIHN1Ym1lbnVJdGVtcy5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVJdGVtcy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGl0ZW0uYWN0aXZlID0gIWl0ZW0uYWN0aXZlXHJcbiAgICAgICAgc2V0TWFpbk1lbnUoeyBtYWlubWVudTogTUVOVUlURU1TIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsaWNrIFRvZ2dsZSBtZW51XHJcbiAgICBjb25zdCB0b2dnbGV0TmF2QWN0aXZlID0gKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBNRU5VSVRFTVMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChNRU5VSVRFTVMuaW5jbHVkZXMoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhLmNoaWxkcmVuKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIGEuY2hpbGRyZW4uZm9yRWFjaChiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYi5jaGlsZHJlbikgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYi5jaGlsZHJlbi5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYi5jaGlsZHJlbi5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLmFjdGl2ZSA9ICFpdGVtLmFjdGl2ZVxyXG4gICAgICAgIHNldE1haW5NZW51KHsgbWFpbm1lbnU6IE1FTlVJVEVNUyB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5NYmxOYXYgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3ViLWFycm93JykpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuc3VibWVudScpKVxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5zdWJtZW51JylcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1zdWJtZW51JykuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5zdWJtZW51Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVnYS1tZW51LWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5zdWJtZW51JylcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuc3VibWVudScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5uYXZcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtbmF2XCIgb25DbGljaz17b3Blbk5hdi5iaW5kKHRoaXMpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnMgc2lkZWJhci1iYXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1tZW51XCIgc3R5bGU9e25hdkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJhY2stYnRuXCIgb25DbGljaz17Y2xvc2VOYXYuYmluZCh0aGlzKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtYmFjayB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gPkJhY2sgIG5hdmJhcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodCBwbC0yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi8uLi9jb25maWcvYmFzZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTG9naW5Db250ZXh0IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbG9naW4nO1xyXG5cclxuY29uc3QgVG9wQmFyRGFyayA9ICh7IHRvcENsYXNzLCBmbHVpZCB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGxvZ2luQ29udGV4dCA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkID0gbG9naW5Db250ZXh0LnN0YXRlLnN0YXR1cyA9PSAwO1xyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2dpbkNvbnRleHQubG9nT3V0KCk7XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dG9wQ2xhc3N9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPXtmbHVpZH0+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2VsY29tZSB0byBQTEFZRVIyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI2XCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW9iaWxlLXdpc2hsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlL2FjY291bnQvd2lzaGxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHdpc2hsaXN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwib25ob3Zlci1kcm9wZG93biBtb2JpbGUtYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IE15IEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9uaG92ZXItc2hvdy1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAhaXNMb2dnZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS9hY2NvdW50L2xvZ2luYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlL2FjY291bnQvcmVnaXN0ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgI2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5PcmRlcnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZ291dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhckRhcms7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCAsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NvbW1vbi9uYXZiYXJcIjtcclxuaW1wb3J0IENhcnRDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9DYXJ0Q29udGFpbmVyJztcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJy4vY29tbW9uL2N1cnJlbmN5JztcclxuaW1wb3J0IFRvcEJhckRhcmsgZnJvbSBcIi4vY29tbW9uL3RvcGJhci1kYXJrXCI7XHJcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSBcIi4vY29tbW9uL2xvZ29cIjtcclxuaW1wb3J0IHsgTWVkaWEsIENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm0sIElucHV0LCBCdXR0b24sIEZvcm1Hcm91cCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vc2VhcmNoLnBuZyc7XHJcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL3NldHRpbmcucG5nJztcclxuaW1wb3J0IGNhcnQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9jYXJ0LnBuZyc7XHJcblxyXG5jb25zdCBIZWFkZXJUaHJlZSA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgIFByZSBsb2FkZXJcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9hZGVyLXdyYXBwZXJcIikuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcclxuICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XHJcblxyXG4gICAgICAgIC8vIGlmIChudW1iZXIgPj0gMTUwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDU3Nikge1xyXG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGlja3lcIikuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlXHJcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0aWNreVwiKS5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RpY2t5XCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgY29uc3Qgb3Blbk5hdiA9ICgpID0+IHtcclxuICAgICAgICB2YXIgb3Blbm15c2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKTtcclxuICAgICAgICBpZiAob3Blbm15c2xpZGUpIHtcclxuICAgICAgICAgICAgb3Blbm15c2xpZGUuY2xhc3NMaXN0LmFkZCgnb3Blbi1zaWRlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlblNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGZldGNoKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlYWwgd2l0aCBkYXRhIGZldGNoZWRcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgaWQ9XCJzdGlja3lcIiBjbGFzc05hbWU9XCJzdGlja3kgaGVhZGVyLTIgaGVhZGVyLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLWZpeC1vcHRpb25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKlRvcCBIZWFkZXIgQ29tcG9uZW50Ki99XHJcbiAgICAgICAgICAgICAgICA8VG9wQmFyRGFyayB0b3BDbGFzcz1cInRvcC1oZWFkZXIgZC1zbS1ibG9ja1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW1lbnUgYm9yZGVyLXNlY3Rpb24gYm9yZGVyLXRvcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIGxheW91dDItbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb0ltYWdlIGxvZ289e3Byb3BzLmxvZ29OYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1fc2VhcmNoXCIgcm9sZT1cInRleHRib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJxdWVyeSBzZWFyY2gtYXV0b2NvbXBsZXRlXCIgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaW5kIHdoYXQgeW91IG5lZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1zZWFyY2ggbmF2LXNlYXJjaC1maWVsZFwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJuYXYtc3VibWl0LWJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0bi1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1yaWdodCBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwib25ob3Zlci1kaXYgbW9iaWxlLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48TWVkaWEgc3JjPXtzZWFyY2h9IG9uQ2xpY2s9e29wZW5TZWFyY2h9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgb25DbGljaz17b3BlblNlYXJjaH0+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3kgaWNvbj17c2V0dGluZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKkhlYWRlciBDYXJ0IENvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnRDb250YWluZXIgaWNvbj17Y2FydH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1vdmVybGF5XCIgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VidG5cIiBvbkNsaWNrPXtjbG9zZVNlYXJjaH0gdGl0bGU9XCJDbG9zZSBPdmVybGF5XCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSBQcm9kdWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRocmVlOyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdAZmlyZWJhc2UvYXBwJztcclxucmVxdWlyZSgnZmlyZWJhc2UvYXV0aCcpO1xyXG5jb25zdCBjb25maWdzID0gcmVxdWlyZShcIi4vaW5kZXguanNvblwiKVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBjb25maWdzLmZpcmViYXNlLmFwaUtleSxcclxuICAgIGF1dGhEb21haW46Y29uZmlncy5maXJlYmFzZS5hdXRoRG9tYWluLFxyXG4gICAgZGF0YWJhc2VVUkw6IGNvbmZpZ3MuZmlyZWJhc2UuZGF0YWJhc2VVUkwsXHJcbiAgICBwcm9qZWN0SWQ6IGNvbmZpZ3MuZmlyZWJhc2UucHJvamVjdElkLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogY29uZmlncy5maXJlYmFzZS5zdG9yYWdlQnVja2V0LFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IGNvbmZpZ3MuZmlyZWJhc2UubWVzc2FnaW5nU2VuZGVySWQsXHJcbiAgICBhcHBJZDpjb25maWdzLmZpcmViYXNlLmFwcElkXHJcbn07XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5leHBvcnQgY29uc3QgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgY29tcGFyZUl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb0NvbXBhcmU6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21Db21hcHJlOiBGdW5jdGlvblxyXG59KTtcclxuXHJcbmNvbnN0IGdldExvY2FsQ29tcGFyZUl0ZW1zID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmUnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyZUl0ZW1zLCBzZXRjb21wYXJlSXRlbXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxDb21wYXJlSXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYXJlJywgSlNPTi5zdHJpbmdpZnkoY29tcGFyZUl0ZW1zKSlcclxuICAgIH0sIFtjb21wYXJlSXRlbXNdKVxyXG5cclxuICAgIC8vIEFkZCBQcm9kdWN0IFRvIFdpc2hsaXN0XHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29tcGFyZUl0ZW1zLmZpbmRJbmRleChjb21wYXJlID0+IGNvbXBhcmUuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgICAgICAgICAgc2V0Y29tcGFyZUl0ZW1zKFsuLi5jb21wYXJlSXRlbXMsIGl0ZW1dKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJUaGlzIFByb2R1Y3QgQWxyZWFkeSBBZGRlZCAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgUHJvZHVjdCBGcm9tIGNvbXBhcmVcclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21hcHJlID0gKGl0ZW0pID0+IHtcclxuICAgICAgc2V0Y29tcGFyZUl0ZW1zKGNvbXBhcmVJdGVtcy5maWx0ZXIoKGUpPT4oZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gICAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7dmFsdWV9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGNvbXBhcmVJdGVtczpjb21wYXJlSXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvQ29tcGFyZTphZGRUb0NvbXBhcmUsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21Db21hcHJlOnJlbW92ZUZyb21Db21hcHJlXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBDb21wYXJlQ29udGV4dCxcclxuICBQcm92aWRlciBhcyBDb21wYXJlQ29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL0NvbXBhcmVDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuICBcclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQ3Vyciwgc2VsZWN0ZWRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7IGN1cnJlbmN5OiAnQlJMJyxzeW1ib2w6ICdSJCcsIHZhbHVlOjF9KTtcclxuXHJcbiAgY29uc3QgY3VycmVuY3lDb250ZXh0ID0ge1xyXG4gICAgc2VsZWN0ZWRDdXJyLFxyXG4gICAgc2VsZWN0ZWRDdXJyZW5jeVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHt2YWx1ZX0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgc3RhdGU6c2VsZWN0ZWRDdXJyLFxyXG4gICAgICAgICAgY3VycmVuY3lDb250ZXh0OmN1cnJlbmN5Q29udGV4dFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IENvbnN1bWVyIH0gPSBDb250ZXh0O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIEN1cnJlbmN5Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBDdXJyZW5jeUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9DdXJyZW5jeUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmxldCBhcG9sbG9DbGllbnQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW5kIHByb3ZpZGVzIHRoZSBhcG9sbG9Db250ZXh0XHJcbiAqIHRvIGEgbmV4dC5qcyBQYWdlVHJlZS4gVXNlIGl0IGJ5IHdyYXBwaW5nXHJcbiAqIHlvdXIgUGFnZUNvbXBvbmVudCB2aWEgSE9DIHBhdHRlcm4uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258Q2xhc3N9IFBhZ2VDb21wb25lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbmZpZy5zc3I9dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoQXBvbGxvKFBhZ2VDb21wb25lbnQsIHsgc3NyID0gdHJ1ZSB9ID0ge30pIHtcclxuICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGFwb2xsb0NsaWVudCB8fCBpbml0QXBvbGxvQ2xpZW50KGFwb2xsb1N0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cclxuICAgICAgUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XHJcblxyXG4gICAgaWYgKGRpc3BsYXlOYW1lID09PSAnQXBwJykge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgd2l0aEFwb2xsbyBIT0Mgb25seSB3b3JrcyB3aXRoIFBhZ2VDb21wb25lbnRzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgICBjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgQXBvbGxvQ2xpZW50LCBhZGQgaXQgdG8gdGhlIGN0eCBvYmplY3Qgc29cclxuICAgICAgLy8gd2UgY2FuIHVzZSBpdCBpbiBgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcGAuXHJcbiAgICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IChjdHguYXBvbGxvQ2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudCh7fSwgY3R4LnJlcSAmJiBjdHgucmVxLmhlYWRlcnMuY29va2llKSlcclxuXHJcbiAgICAgIC8vIFJ1biB3cmFwcGVkIGdldEluaXRpYWxQcm9wcyBtZXRob2RzXHJcbiAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgICAgaWYgKFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25seSBvbiB0aGUgc2VydmVyOlxyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBXaGVuIHJlZGlyZWN0aW5nLCB0aGUgcmVzcG9uc2UgaXMgZmluaXNoZWQuXHJcbiAgICAgICAgLy8gTm8gcG9pbnQgaW4gY29udGludWluZyB0byByZW5kZXJcclxuICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcGFnZVByb3BzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25seSBpZiBzc3IgaXMgZW5hYmxlZFxyXG4gICAgICAgIGlmIChzc3IpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZ2V0RGF0YUZyb21UcmVlIH0gPSBhd2FpdCBpbXBvcnQoJ0BhcG9sbG8vcmVhY3Qtc3NyJyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShcclxuICAgICAgICAgICAgICA8QXBwVHJlZVxyXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgYXBvbGxvQ2xpZW50LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxyXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XHJcbiAgICAgICAgICBIZWFkLnJld2luZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxyXG4gICAgICBjb25zdCBhcG9sbG9TdGF0ZSA9IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgICAgICBhcG9sbG9TdGF0ZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV2l0aEFwb2xsbztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyBjcmVhdGVzIGEgbmV3IGFwb2xsbyBjbGllbnQgb24gdGhlIHNlcnZlclxyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGluaXRpYWxTdGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdEFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpIHtcclxuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcclxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XHJcbiAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuZCBjb25maWd1cmVzIHRoZSBBcG9sbG9DbGllbnRcclxuICogQHBhcmFtICB7T2JqZWN0fSBbaW5pdGlhbFN0YXRlPXt9XVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSA9IHt9KSB7XHJcbiAgLy8gQ2hlY2sgb3V0IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvcHVsbC80NjExIGlmIHlvdSB3YW50IHRvIHVzZSB0aGUgQVdTQXBwU3luY0NsaWVudFxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXHJcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICB1cmk6IHByb2Nlc3MuZW52LkFQSV9VUkwsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcbiAgICAgIGZldGNoLFxyXG4gICAgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSksXHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGV4dDsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db250ZXh0OyIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgd2lzaGxpc3RJdGVtczogRnVuY3Rpb24sXHJcbiAgYWRkVG9XaXNoOiBGdW5jdGlvbixcclxuICByZW1vdmVGcm9tV2lzaDogRnVuY3Rpb25cclxufVxyXG4pO1xyXG5cclxuY29uc3QgZ2V0TG9jYWxXaXNobGlzdEl0ZW1zID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpc2hsaXN0Jyk7XHJcbiAgICAgIGlmIChsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsaXN0KVxyXG4gICAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3dpc2hsaXN0SXRlbXMsIHNldFdpc2hsaXN0SXRlbXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxXaXNobGlzdEl0ZW1zKCkpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lzaGxpc3QnLCBKU09OLnN0cmluZ2lmeSh3aXNobGlzdEl0ZW1zKSlcclxuICAgIH0sIFt3aXNobGlzdEl0ZW1zXSlcclxuXHJcblxyXG4gICAgLy8gQWRkIFByb2R1Y3QgVG8gV2lzaGxpc3RcclxuICAgIGNvbnN0IGFkZFRvV2lzaCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB3aXNobGlzdEl0ZW1zLmZpbmRJbmRleCh3aXNoID0+IHdpc2guaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgICAgICAgICAgc2V0V2lzaGxpc3RJdGVtcyhbLi4ud2lzaGxpc3RJdGVtcywgaXRlbV0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIlRoaXMgUHJvZHVjdCBBbHJlYWR5IEFkZGVkICFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBQcm9kdWN0IEZyb20gV2lzaGxpc3RcclxuICAgIGNvbnN0IHJlbW92ZUZyb21XaXNoID0gKGl0ZW0pID0+IHtcclxuICAgICAgc2V0V2lzaGxpc3RJdGVtcyh3aXNobGlzdEl0ZW1zLmZpbHRlcigoZSk9PihlLmlkICE9PSBpdGVtLmlkKSkpXHJcbiAgICAgIHRvYXN0LmVycm9yKFwiUHJvZHVjdCBSZW1vdmVkIFN1Y2Nlc3NmdWxseSAhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHt2YWx1ZX0gPSBwcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgd2lzaGxpc3RJdGVtczp3aXNobGlzdEl0ZW1zLFxyXG4gICAgICAgICAgICBhZGRUb1dpc2g6YWRkVG9XaXNoLFxyXG4gICAgICAgICAgICByZW1vdmVGcm9tV2lzaDpyZW1vdmVGcm9tV2lzaFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIENvbnRleHQgYXMgV2lzaGxpc3RDb250ZXh0LFxyXG4gIFByb3ZpZGVyIGFzIFdpc2hsaXN0Q29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL1dpc2hsaXN0Q29udGV4dFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vcG9ydGZvbGlvL2NhdGVnb3J5J1xyXG5pbXBvcnQgU3BlY2lhbFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0NvbGxlY3Rpb25zL1RhYkNvbGxlY3Rpb24xJztcclxuaW1wb3J0IFNlcnZpY2VMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vU2VydmljZS9zZXJ2aWNlMSc7XHJcbmltcG9ydCBGb290ZXJGaXZlIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVycy9mb290ZXItZml2ZSc7XHJcbmltcG9ydCBIZWFkZXJUaHJlZSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcnMvaGVhZGVyLXRocmVlJztcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJy4uL2hlbHBlcnMvYXBvbGxvL2Fwb2xsbyc7XHJcbmltcG9ydCB7IFByb2R1Y3Q0IH0gZnJvbSAnLi4vc2VydmljZXMvc2NyaXB0JztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgZmF2aWNvbiBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLzEucG5nJ1xyXG5pbXBvcnQgTG9naW5Db250ZXh0IGZyb20gJy4uL2hlbHBlcnMvbG9naW4nO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBsb2dpbkNvbnRleHQgPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coJ2F1dGhvcml6YXRpb25Ub2tlbjogJyArIGxvZ2luQ29udGV4dC5zdGF0ZS50b2tlbilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e2Zhdmljb24/ZmF2aWNvbjonJ30gLz5cclxuICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgIDxIZWFkZXJUaHJlZSBsb2dvTmFtZT17J2xvZ28ucG5nJ30gdG9wQ2xhc3M9XCJ0b3AtaGVhZGVyXCIgLz5cclxuICAgICAgPENhdGVnb3J5IC8+IFxyXG4gICAgICA8U3BlY2lhbFByb2R1Y3RzIHR5cGU9XCJmYXNoaW9uXCIgYmFja0ltYWdlPXt0cnVlfSBwcm9kdWN0U2xpZGVyPXtQcm9kdWN0NH0gbGluZT17dHJ1ZX0gdGl0bGU9XCJ0aXRsZTEgc2VjdGlvbi10LXNwYWNlXCIgaW5uZXI9XCJ0aXRsZS1pbm5lcjFcIiAgZGVzaWduQ2xhc3M9XCJzZWN0aW9uLWItc3BhY2UgcC10LTAgcmF0aW9fYXNvc1wiIG5vU2xpZGVyPVwidHJ1ZVwiIGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIiAvPiBcclxuICAgICAgPFNlcnZpY2VMYXlvdXQgc2VjdGlvbkNsYXNzPVwiYm9yZGVyLXNlY3Rpb24gc21hbGwtc2VjdGlvblwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1iLXNwYWNlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyRml2ZSBsb2dvTmFtZT17J2xvZ28ucG5nJ30gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhIb21lKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHsgUHJvZHVjdDQgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9zY3JpcHQnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBNZWRpYSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgY2FydCBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9pY29uL2dvbGQucG5nJztcclxuaW1wb3J0IGNhcnQyIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vcmFpZHMucG5nJztcclxuaW1wb3J0IGNhcnQzIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL2ljb24vbXl0aGljXy5wbmcnO1xyXG5pbXBvcnQgY2FydDQgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvaWNvbi9wdnAucG5nJztcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1iLXNwYWNlIGJvcmRlci1zZWN0aW9uIGJvcmRlci10b3AtMFwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5Qcm9kdWN0NH0gY2xhc3NOYW1lPVwic2xpZGUtNiBuby1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaG9wP3Byb2R1Y3Q9Z29sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWltYWdlXCI+PE1lZGlhIHNyYz17Y2FydH0gYWx0PVwiXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2hvcD9wcm9kdWN0PWdvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5nb2xkPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zaG9wP3Byb2R1Y3Q9cmFpZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pbWFnZVwiPjxNZWRpYSBzcmM9e2NhcnQyfSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zaG9wP3Byb2R1Y3Q9cmFpZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5yYWlkczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2hvcD9wcm9kdWN0PW15dGhpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWltYWdlXCI+PE1lZGlhIHNyYz17Y2FydDN9IGFsdD1cIlwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Nob3A/cHJvZHVjdD1teXRoaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5teXRoaWM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Nob3A/cHJvZHVjdD1wdnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1pbWFnZVwiPjxNZWRpYSBzcmM9e2NhcnQ0fSBhbHQ9XCJcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zaG9wP3Byb2R1Y3Q9cHZwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+cHZwPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNob2VzQ2F0ZWdvcnkgZnJvbSAnLi4vbGF5b3V0cy9TaG9lcy9jb21wb25lbnRzL0NhdGVnb3J5JztcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNob2VzQ2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWItc3BhY2VcIiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVNBQklBQUQvMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUMrQVF3REFTSUFBaEVCQXhFQi84UUFHd0FCQUFNQkFRRUJBQUFBQUFBQUFBQUFBQVFGQmdNQ0FRZi94QUJGRUFBQkJBRUJCUVVFQmdZSkF3VUFBQUFCQUFJREJBVVJCaEloTVVFVFVXRnhnUlFpTXBFVlFsS3h3ZEVXSTBOaW9mQWtNMFJUVkpLeTB1RnlncE0xb3FQQzhmL0VBQmNCQVFFQkFRQUFBQUFBQUFBQUFBQUFBQUFCQWdQL3hBQWZFUUVCQVFBQ0FnTUJBUUFBQUFBQUFBQUFBUkVoTVFKUkVrRmhjVEwvMmdBTUF3RUFBaEVERVFBL0FQMzlFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJWbVN6MUhHSGNsazM1dWtVZkZ4L0pDM0ZtaXpZdDdSNVBqV3F4WStFOG56OFg2ZVgvQ2lUVll3U01qdFc4dUh4TWllRzZlZ1A0SzR6OG12UllYc2RtOTdUNmV2NzNmdkgvWXBjRlZoSUdPMnJmdm5reVY0ZnI2RS9ncmg4bXZSWjAzTm9jYVNiVlNLOUFQcjErRGg2ZjhLeHh1YnBaUUVRU0ZzbzRPaWtHamdWTVhWaWlJb29pSWdJaUlDSWlBaUlnSWlJQ0lpQWlJZ0lpSUNJaUFpSWdJaUlDRTZEVW9zNW1ibGpJMzI0VEh5YnBJMXN5ajZqZTVXVFV0eDh0NVc1bGJqc2ZoZEExbkNhMGVUZkFlS2dDeFF3cy9zMk1nZGtzcTdnNlYzdmFIei9BZXBYcWFSMHp4czlnQjJjVE9GaXg5L0grZTdrdERpc1BVeEZmczY3UGZQeHlING5IOHZCWGlNODFTdHdHV3kzdjVuSVBqalA4QVo0VHdIbjArOVdOZlpYRDF3UDZJSkhENjBqaTdYMDVLNVJUYXZ4aUQ5RFl2VFQ2T3FmOEFoYitTalQ3TVllY0hXa3hoNzR5VzZmSlc2SnRYSXpmMEJrTWI3Mkh5VHd3ZjJleDd6RCtYeTlWRm1OVEtXRzE4cFhkak1yK3puYWRBOCtEdXZsOGl0Y28xNmhXeU5Zd1dvaEl3OFIzZzk0UFJOVDRxYXBscldOdHN4K1pBOTdoRGJId3Y4KzRyUkxMdmpOY2pDNWttZW5Od3EyanpCNk5KNk83aXBHR3QyS054MkZ2dkw1R0RlcnlrZjFqT25xcllTNXcwQ0lpeTBJaUlDSWlBaUlnSWlJQ0lpQWlJZ0lpSUNJaUFpSWdJaUlJT1l5RGNYaTVyUjAzbWpSZ1BWeDVMTXVkTmhNR3hyUzUyWHlidFNmckRYOHRkUE0rQ241c0RJN1E0M0ZuakcwbXhLUEFjdnVJOVZ6b0Q2VzJ4dDNIY1lhSTdLTUg3WEVmN2o2aGFuVEY1cTN3bUppdytQWkEwQXluM3BYL2FkK1E2S3lSRmx1VEJSTGVVbzBUcGF0UlJPK3lYY2ZselV0WlNUWXFLemtyRmllMDhSU1NGeldNSEhqeDRrK3FzejdTMi9TMGkybncwcjkxdDlnUDd6WE5IeklWcXg3WkdCN0hCelNOUVFkUVZqY2xzUEZIVmZKUW5sZEl3YTdrdWgzdkFFQWFLTHNWazVZNzV4NzNrd3l0TG1OSitGdzQ4UE1hcTVNMk1UeXN1VnZrUkZsMFJjaFFneVZPU3JZYnF4NDRIcTA5Q1BGWnVXT3hrTVpKRklTTXZpbjZodzV2SE1IMUErWThWcmxSNUlld1p5aGtXalJreDlsbThkZUxUOCtxc1o4b3NNWGZaa3NkRGFacDc0OTRkeDZoVEZRWU9QMkhLNVRIamU3TnIyelJqb0d1NkQrZWl2MHF6b1JFVVVSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkJtYXNtdTFtWXVPT3JhMEFZUEFhQS8vVXIzc1hDV1lNek80dW1sYzhrOHowL0FxSlhhZmFOckI5WXNPbitWNnM5a3RQMFpxZjhBZi9yY3RYcGlkcnRFUlpiRVJDZEJxVUVUSjNvOGJqNXJVaEFERys2TzkzUWZOWWJZcW02Yk5HenA3bGRoSlBpUm9COHRWNHpPUnNiU1pobFNvQzZGcnQyRnZlZXJqL1BKYmpFWXVMRVVHVm8rTHViMy9hZDNyWFVjL3dEWGwrUlBSRVdYUVZUdExGMnV6OXJUZzZOb2thZTR0SVA0SzJVSE5FREIzOWY4UEovcEtzN1M5SzR6QWJUNCtjT0liY3FGdWc1T0k5NGEraEt2MWxUdkM1c29COFhZdTEvOGJkZnhXcVNwNGlJaWpRaUlnSWlJQ0lpQWlJZ0lpSUNJaUFpeGtOWjIzTmllemJsbGJzL0c5MFZhdkU4czlxTFRvWkhrY1MzVUhRZUh6bWJGR1NPcmxhVHBaSklhV1NscndDUnhjV1JnTklicWVKQTFLdUpyVG9pS0tJaUlNM1hZSXRzc2pYZWZjdDF3OER2MDBINXBzWkk0WXVhcEp3a3J6dWFXOTJ2L0FEcXZXMFI5Z3lPTnl3QjNZcE95bEk2TWQvSlhDTnd3KzJUMms2VnNrM2VhZW0vL0FQdXYrWUxYY1k2clVvaUxMWXEvT1NPaXdWMTdEbzRST0FQbndWZ3VWa3dDdEliWFo5aHA3L2FhYnVuanFpVmk5Z3E3SDJybGdqVjhiV3RiNGIydXYra0xjcXZ4ajhWSTJSMk1GWURVQi9ZTkRmTFhUMVZncmJ0VHhtUVJFVWFGVWJUU21QQlRzYnhrbUxZbUR2TGpwcDh0VmJxaXZPR1EyaXFVd1FZYVk5cG1QVGU1TUhuMThsWjJubDArRmdkdFpVaGF6ZVpVcUU2OUdrOFB1Q3ZsUllEUzVadjVYbUxFdTVHZGZxTjREZ3IxS2VJaUlvb2lMTzdSWkRKTXllTHhHTW1oclRYKzFjNnpKSHY5bTJNQThHOGlUcjFSTGNhSkZuY1RtYjBPVitoTTZ5SnQxekMrdFlpNFIybWpub0R5Y09vOWVTMFNFdWlJaUtJaUlDSWlBdWM3SFNRU01hN2RjNXBBUGNTT2E2SWd6bXc4OGI5bEtkY0RjbnFBMXJFUjV4eU5PamdmdjlWd2ZXem1FemQrZkY0NkcvVHlEMnpGanJJaE1NZ0c2NDhRZFFkQWVDcnN6YWpreTc3bXlac1dNeUNJNS9abUIxYVFEcE00a04xQTFBSU9vNWVXdXhjbVFtb3NmbEswRmUwZmlaRElYdCs0YWVYSHpWdnRtZWxTN0s3VFZtOXJQczlCTkVPTG0xYm05SUIxMGE1b0RqNGFydlgyeDJlc1JNZjlMMUlpOGFtT2FWckhOOEhBbmdWZFBlMk5oZTl3YTBjeVZpS2xhYWpheXhzYkt5M3FOcTQreEhJR3hGMjY0RFVianlIY3dUcHAxVHN1eHQ0NUdTeHRramUxN0hEVnJtblVFZUJYSzFiaHBRR1daMmcxRFdnRFV2Y2VUUU9wUGN2eiswUG9tbmF5bXlGaVNzeUU2MzhaTEVTWWgxZUkzRWJyZ1BJRURud1d1dytOaWMyREtUWDVjbllrakRvck1vQWExcmdQZ1lBQTNVZXA2bE1KZFRKcVp2WTZXQzBBSFROOTREa3p1SGpwL0hqeTFXYVpYZmw4UkxpcGp1NVRITy9WRW5RdUE1Y2ZFY1BrVnNsUjV2R3ptV1BLWTRBWFlPYmY3MXZWcFNVOG82YlA1ajZVcGxrMnJia0h1VE1JME92ZnAvUEZYQ3lSQXlMaG04TG95L0g3dGlzN203dkI4ZUhxcnZGNXF0azJFTlBaMkdjSklYOEhOS1ZmSG1MSlVtMVZHemZ3cGpxZ3VlMlFQTEJ6Y0Jydy9qcjZLN1JTRm16R0syTnhWNnJlbXMySVpJSXV6M05KR2xwY2RRZVI4bHRVUlczVHhtVEJFVURKNWVyaTRnWm5GMHJ1RWNUT0xubndDaXZ1VnlVZUxwT25lTitRKzdIR09iM0hrQXFKMWV4WHBqSDcrOWxjbTR2c1NEajJiT3A4Z09BOGRkRjdKa2hsYmw4dTNmdVA5Mm5TYngzTmZ4N3owK1FIV3VMR0pzdXlPU1lKUGFRTzFtWURyWDdtNmZaOFI2clU0WXQxYlFRUVltckZCRTNjck45M2lTZDBrOCtQUWsveFUxZVAxYzBYMVh4dkhtSEEvZXFLM0psTm40SlpvV015R09pYVhsa3MzWnpRTkhFKzg3ZzlvR3Z4RUVkNVU3YTZhQmNyRmlHcFhmUFlsWkZDd2F1a2U0TmEwZUpLeDhkM0s3VDAvcENXNjdBWU1qVmhEbXRubEgyaTg4R0R1MDRxc2dxNFcvdGRpcVZUTTJjclhhMldheEhQY2RPeHptZ2Jtb1BEbVNmUk1UNU5MK25HQ0kzMlRXWkl2NzFsT1Z6UG51OFZEcFpDRGFmYkdwZXgrL0pReDFhUUdkMGJtQjBzaEEzUUhBSGdHNitxMXdHbkpWV2V6OVRaNmliVnVPdzl2UVF4RjJ2bWVROVNFL2hmMVg3WkJyYStKc040V1k4blhFSkIwSkxuYUZ2a1FUcjVMVExLWVNLWGFXM1gyaHZ5d0dHTFUwcWNFZ2tiRVNOQzk3aHdMOU9Hbkp2bnkxYVgwczlpSWlpaUlpQWlJZ0xPdWprMm9rZnZ5T1poR2tzREkzRUc0UndKSkg3UG9BUGk1OHROYkhORjc4Y2EwVHl5UzA5c0FjMDZFQng5NGp4RGQ0anlVdjhBVTA2b0h1eHd4TkFBSElBY0FFUjZnZ2hxd01ncnhNaWlZTkdzWTBOYTBlQUM2TGpFWkpCdnZhV0EvQ3pyNitQZ3V5SytGb0pCSTEwNUw2aStFZ0FrOEFncGM5VlpHYStVWXdDZUNSc2NoMC9ySVh1RFhzZDNqUTd3OFI1cWsyVXQzNnNkelo2clNjOFkrM0pDMjFNN1NOa1JPODM5NXpnRDhJMEdtbkVMUzVYU3hWanFzSWM2eEl3QUQ3SWNIT1BsdWcrcEhlcXJZOTN0THM1ZmFQMU5uSlNkazdvOWpRMW04UERVSDVLL1RQMjByUVEwQXVMajFKNnI2aTh2ZTFqQzl4QWEwYWtub0ZHbVMybmEzRlhxMS9Idk1WK1orNjZObkVTRHhIbm9GeTlzeG1ka0RibTlqTXN6M1JLQ1c4ZlA4RHg4Vkl4TEhaN2FHYkt5Z210V081QUR5MTcvQUU1K29VM2E2M0RYdzVpZkV5V1dZN3NUWE5CME9uRnc4UUR6OFZ2OGMvMXhGcmFIRkRTeFdia29CeWxoT2o5TmVvLzQ5VjFqMnd4aDkyeDI5ZVFjMnlSblVmTFZSYU9BeTlHbkM2cGxERklXZ3Zna0c4d2VBN3ZrdXNsamFHTnU3YXhOUzQzdmpjQjkvd0NTbkZhMnhML1MzQ2Y0My80bi9rdVVtMkdLSHV3R2F3ODhtUnhIVS9QUlFQYUpnN1g5RFk5N3YwYi9BTFZZUkhPdmpaMkZLaFNZN1RVT0pjNW84Z0FOVXlKTFhNM2M5aytGU20zSHdIbk5aK1AwYjA5UjZxTFZGU25iY0tBZGxjczcrc3NQUHVNOFNlUUhnTlQwVmw5QlMyLy9BRlRJVDJtOVltZnE0L2tPYXRhOWVDckVJcThUSW94eWF3YUJOaTViMmdZL0ZPaG5OMjdMN1RkY05OOGpRTUgyV2pvRlp1YUhOTFhBRUhnUWVxK29zdFlxR1ZMT0ptL29NWm5wUEpMcSs4QTZJOTdDZUduZ3FMYVRMVTg4L0g0R3BaQkZ5d1RkWnhhK09HTWJ6MnZhZEhNSjBBNGdkVnRGa2M1WFk3YmZHQU5ZMlcxUXRRc2ZvQVM0QnA1K0FKVmpObkNWaThWRGw0NGN0a29HeWg0RHFkVjQxanJ4ZlYwYnkzaU5DU2VXdWcwMFYrK3RBK01NZEV3dEhGbzA1SHZIY1Z4eGJtdnhOTnpCbzB3TTBIZDdvNEtXb3NqeXhwYTBOM2k3VHFlYTlFYW9pS283ZXpGTjg3cmVQYzdHWHovYUtvRGQ3L3JaOEx4NWoxWGJHNUt3Nnk3SFpPSmtWOXJkOXJvOWV6blo5cG12RWFjTlduaU5SekhGV0xwUXlRTWs5M2VPalhkQ2U3elVUTDBYWEtnZkJvTGxkM2JWbm5vOGRQSWpWcDhDVlV6MHNFWENuWlpkcFFXb3dReWFOc2pRNGFFQWpYajRydW9vaUlnSWlJSWx1TGZucFNhY0lweTRudTFZOXYzdS9pdUxuZTE1anNQMk5SalpIRG82UjJ1Ny9sQUo4M05QUldCQWNDQ0FRZWhWVmpDVzVuTlJPNTl2SEkwZnVHSmdIL3VhOUVXeXJhbG81SzdOTEdmNkhYZVltRWZ0WkJ3Y2ZKcDREeDE3Z3VHMU9RbHhtemx1eFhPbGh3RVVKN252SWFENkU2K2luNDZsRmpjZFhwUS8xY0VZWUQzNkRtZkU4MFB0S1dWeStjdERJZ1E0aTdkeFZkeFpPK29BNXo1UnA3dTVycTVvMTQ2ZFJwMElOem04cXpENHFXMlc5cEx3WkRFT2NzanVEV2p6SzlZV2c3R1llclVrY0hTc1pySzhmV2tQRjd2VnhKOVZTODhNM0xaekcwUWZXeG1OdDRxQ1VibGkvZmJ1eWh2VnNiTmRldlBnQng1RmFuSFkrdmlzZEJScU0zSUlHQmpCK0o4VHpQbXBTSnBJTE43VjNaT3dpeFZYall0dURTQjBhcit4UEhXcnlUeXVEWTQybHppVm10bTRaTXBrYkdkc3Q1a3NnQkhJZFQ4dUh6U2UwOHZTL3dBYlJqeG1QaHF4OG8yOFhkNTZsWnVtRHRIdFErNjczcU5MM1l3ZVRqMC9qeCtTc05xc2krcmoyMUsrcHMyejJiQTNucDErL1QxVmhoOGMzRll5R3EzUXVBMWU3dmNlYUhkL2llaUlvMElpSUNJaUFpSWdLajJteE5uSTA0TEdQYzFtU295aXhXTHVUaUJvV0h3Y09IeVY0aUZtc3BqdHBjVlliTEZOY2JpN0lPdGluYmNJM3hQUEVscE9nSUo0OVFmRFVxd3dXMGRMTXlXcTBGcUdlZXE3ZGU2STZ0a2IwZTN3Nys0K2hNKzVpc2RrUzAzcUZXMFcvQ1o0V3YwOHRRcXpPeFJZbW5UeVZhRnNVZU9sQmUySmdBRUR2ZGtHZzZBYU8vN0Fyd3p6RitvY052OEFwMGxLYmhNMXZhUm4rOFpycHFQRUhnZlE5VkxhNXIyaHpYQnpTTlFRZFFRcVRhaGtrT00rbEt3MXM0NTN0REI5cGcrTm5rVzYrb0hjcEZxNWtqWk5HNk9Sb2N4dzBJVVdqTy9mbXB6T0xwcTVIdkhtOWgrRjM4Q0Q0dEtrVjU0N1ZhS3hFN2VpbFlIc1BlQ05RcStRNmJVUk1hU0RKU2tMeVAzWHQzZjlUa0VuR1I5bFRMT2pacFEwZHc3UjJnK1dpbUx5eGpZMkJqUm9BTkF2U0tJaUlDSWlBcVhLVmIxYkl4NWJHUWl4SjJZaHMxUy9kTXNZSkxTMG5nSE5KUFBtSEhqeVYwaURFNXlodEZ0WFhkRkhCOUUxcS82Nk5rN212a3NTdDR0QjNTUTF1dmllT25CU290dmNleGphOTJ0ZWd5b0dqNkRhejNTRjM3dWcwSVBRNnJXSXJxWXpHTm9YOHpsWXMxbVlEV2lnMTlob0U2bU1uOXBKKy9weUhUelduUkZDVEJFUkZaamF1ZWF4UFR3OEIzVGFkcTkzY05kUHpXZ3J3UTBhYklZOUdSUk0wR3ZRRHFWVjU3RXkzSmFseXFBYk5XUU9EU2ROOXV1dW12UlZ0dTFuOGxYZGpqakhWKzFjSTN6RjJyUU92SWNscjZZNnRyM2htdXptZXNabVVIMmVFOWxXQisvK092bWZCYXBScU5PTEgwb3FzSTBaRzNUelBVK3BVbFpha3dSRVJSRVJBUkVRRVJFQkVSQVhpV0tPZUo4VXJHdmplMHRjMXcxRGdlWUs5b2d5T1B5SjJVc3R3dVhrTGFCZHBqNzBud2xuU0o1Nk9ieUJQTURvclBhWEwxTWZzOVprZkkxN3A0blJRUnRPODZaN2hvR3RBNThUMFZ0WXJRWElId1dZWTVvWGpSMGNqUTVydk1GVk9QMlJ3R0x1bTVTeGtNVmptSDhYYnY4QTA2a2h2cG9yd3psVSt6dTBNT0Z4TmZEN1JhWXk3VGlEQjJ6dmNsWUJ3Y3gzSThOQVFEelZ4aFh5Wkc5YXpENDN4d1N0WkRVYkkzZGNZMmtrdjBQRWJ4ZHcxNk5CNnE2YzFydE41b09uRWFoZlUxWkJFUlJSRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFFUkVCRVJBUkVRRVJFQkVSQVJFUUVSRUJFUkFSRVFmLy9aXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG95TXpZNVF6YzRRVGt5TmpjeE1VVTRRVVF3UWtNMFJUUTBOME5CUXpnME15SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3lNelk1UXpjNFFqa3lOamN4TVVVNFFVUXdRa00wUlRRME4wTkJRemcwTXlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSXpOamxETnpnNE9USTJOekV4UlRoQlJEQkNRelJGTkRRM1EwRkRPRFF6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pJek5qbEROemc1T1RJMk56RXhSVGhCUkRCQ1F6UkZORFEzUTBGRE9EUXpJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgreEYxYXJBQUFBVlpKUkVGVWVOcGkvUC8vUDhOQUFzYi9QdFlENmdBbUlNNGNRUHN6UVE2WURNVHVBMkE1eU03SklBY3dBL0ZLSU5hbG8rVzZVRHVabWFBQy9FQzhFWWhGNldBNXlJNE5VRHNabUpBa0ZJRjRNeEN6MDlCeU5xZ2RTc2lKRUJtWUEvRmNVTzZnUlk0RDRubFFPeGh3T1FBRW9vRzRsZ1lPcUlHYXpVRElBU0RRZ0UweEJRQmtWaU91Y2dCWGNNMUNEeTR5Z1RuVUxFWlNIQUFDWE5BRUkwK0I1WEpRTTdqd2xZU0Vzc3htV0pZaEVZRDBiQ0dVdFptSUxEU1dRUXNzWWdGSTdWSmlDamNtSWczMEF1S0pKRGhnQWhCN0Uxc1pFUXV5aWF5NFFHcHlTS2tOU1FHZ2lzc05qN3dyVkEwRHJSd0FpdHRWT09JV0pMYWF4TFJDc2dOZ3FYczlXdW9XaFlxUm5GdVl5TXpmeXREc3lRYkZtNkJpSkFNV1BISi9nZmdUSG5rMUlPNkZzdFdCK0QwZXRYeTRvb2FGUUh3TEV2QkFEZ09GZ0lsaGdNR29BMFlkTU9xQUFYY0FDNDJhNEVNbkJBQUNEQUE3eUNhUnN4cjRKd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUVYa2xFUVZSSWlhMlZ5NDhVVlJTSHYzdnJWbFYzOVdzZU1Jd095RHNNOGdncUdFVU1rckF3WXVKV0ZyandrUmo4QjR4eDVjYWRDK01qOFJGalltSllZTnlJb3NiNEh0Q0lZVUdpem9Belk4dE1uQWM5ZEhkVmRWZmRlMTMwTk15ME1FaVlYMUxKdlhYcm5PL20xTW41aVMzSHk5eEF1NEZEd0Y1Z005QURDR0FXR0FGK0JFNEFwNWRLSXBZQUhRQmVBQTdlNkNieitocDRHZmo4V29meU9rR3ZBVi9kQkFUZ0llQWs4TmIvQVRuQXQ4QnpOd0hvMURPMHlwaFpDdlFkOE9BdFFOcTZsOWEvdXlib1RlRCtaWUMwZFJmd2ZpZG9EL0RzTWtMYWVvTDVDaWtBQWE4RFZEUm9CQUN1c0NnaENBMEk3S0pvZ2NCaWtmTW5CcEJZYkNzWEJvRXZMQ1VKR3Q0QWRpaGdteFJpejB4VHN6TUxHV0d4QmlJRTQ2Rm1iOUVodG9CeWFEWTFXU1dKclVGcWd3R3NsR1FreEtuRldvdnZDQzQzTlZvNmpHbUpMOWdPN0ZiQTRhbW1ZV3ZlNGNocWp3MWRIaG80TTlWZ1Y2L0h1VXJDbXB4aStuS0RPN29ESnFvSldTVW81WHdTYmZqblVvVHZPZlFYZlpTRTBWcktvVFVCN3d6WGVXVWtSQ21KSXppc0hNRyttU2hsLzZZaTUyUE4wRmhNVjAvQW56VndBOEdYRlVNK3RteldoaVIxK0dJeVpHdGVVazA4ZnB0dDh1S09iajRlbm1OcUptVDFxZ0xERXlGbDRWSnpGQ1VsTUsxcTd4WDl4LzRxRCtia3dFdmI4MHhIbXJtRzVuSnFXVnZ5bUl3TWg5WVgrUENQT1FwSndycStITXFWOUxxQ2M1VUVCVFMwUldEUjJqSmNUWG5xemhJbkxsUXBGREk4ZjNhT3ZBQWxtRlJZMitVcXlVK1hVc29OUUVpNnJLRmVTZkNONGVSb2xTaEtPRlZKdUVmWDZTdGxHQXBUYUNUMEYzMkd4cXVzNk1wZ0hBY1JOdmxzdkU0ajBReGZyR0dqSmpyajRpbFpGTnMrS3RmcnFRMG1HZ1pmdExwbXJnbjdWN2s4M0MwWm1ZNG81RDM2Q2o3blp5TlVxdWt2K2ZpdXc0WHBpSTE5QVkwNHdURVdGZmhjbkExWldmU0pHeW1EQllkWEx4b21ReDJxMUZMeEhSR3NDNXdyN1Z0UEV3NnN5YkV5NitCYXc4Q0tIR09SWVhDZ1NIazZZcURvVXRZT0lURW02Nk9GNU80Y1RGa0hhVE9zNjgzeVM3bkcrdjQ4cTJicmpGYlRxcVExNmpza3NNWkMxRUJaaTB4VGJCZ2pHMDAyRmhXREpaZE52dVhnNmdBUk5ZaHFEYVNGemE2aFBOZkV4QW05YU01WG10eVdsVFNNSFpQQUQ1MllRQW5HcWdrNVYxSVRpdkhJMEZQS0VzWXAxbE84WFU3b3pTcnVXQkd3TnU5eWUxN3hkeW9ZU1NScnUzeGlCQ3J3bVl3TXAyY1Nlanc1SkxZY0wrOEV6aTRFT1FLcWlTWGpPWFJsSEdhaWxPbElzNkhrTVJzbXhLa2w4Q1NKdGdTdUpPYzVOTFZGVzR2ckNPcE5RM2ZHWWFLZTRoaEQwWlAzdFkzdlYyRFgxY0tCdHFCdGEvUklJWkJBYW0xckxTQTE5c29vV2xSMEljQ0N4ZUlJZ1NQNDNjS2dtajgveW9LeGJnRXBXb0NGY2hmc1hkbGVMLzdtNml2UnpuVVVyazd2SWVDOS8wYmNzbzdSY3VwRmZ2UWtjR1laSWVlQXg5dWJUb2Q5QVBoNUdTQm42VERSVGxCTXk0YmZ2UVhJQjdUY3Rib1VxSzJuZ1VlQTcyOENjQXA0RERnQ0hhM0l2TU5lUjUvT1AvdUFSMm1WWWoxUVluNGtBcU8wR3VrVDRKdWxidkV2Nm9mQWh3R0h3QzBBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmNBQUFBWENBWUFBQURnS3RTZ0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRE56RTBORGRHTWpjeVJUa3hNVVU0UWpZNE1rRTVOMFUxUWtWR056SkVOeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBETnpFME5EZEdNemN5UlRreE1VVTRRalk0TWtFNU4wVTFRa1ZHTnpKRU55SStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa00zTVRRME4wWXdOekpGT1RFeFJUaENOamd5UVRrM1JUVkNSVVkzTWtRM0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rTTNNVFEwTjBZeE56SkZPVEV4UlRoQ05qZ3lRVGszUlRWQ1JVWTNNa1EzSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K2hOUzNJUUFBQWY5SlJFRlVlTnFrbFUxSUZWRVV4K2ZaS3dsZG1FR0pIeWp2V2JweFVVaTBhYUVvdUF6TVFJVW5TcEM2VUhmaVZ4dU4yaGx1WEtrYk40cm9KZ1JCVXR5RUNJcFlFY0pEaEJZUnFhaG9JVDZuMzRFemNKbmUxNHdIZm0vZVBjejg1OTcvdmVkTUlCUUtXVWtpRzBhZ0FmSWdBRGI4Z2dVWWlFYWpSNGtlemtnaS9CeE9vUjArUWpQVVFpUE1Rd3NjaHNQaHBrUUNnUVF6YjRWSkdJUHVKQk40RDczUXlRckcweEdYUkJUZXdMQ1ZPbnBnRkNwNHdaZFV0aXpDZnByQ0ZvSWZ1SHlIcFZTZTM0Y3lpRmplNGlYazQzOG9tZmd6K0F0clhwU1ovWTV1Zm5VOHo4V3pPaWpYL0RiYzhxQi9LWjdyZjdGb0JicUMvSHlDS3BpQU9maXQxbmdOT1YxM3hCN29nTWRCRlo2QlZ6NEV4WkwvY25nZjQvSmF4S2YwWFArQklzanlJbzZRT1pUOTJsTzlXUkZ2ZzExNEIrdnd3L0lmOTFSNGhCVU5tVVVrYnkxVXozM1p3aXJrRUp4SVR5Si82UnpGSW0xS0Q2enJSWm5xbEtacVhQV3dZWXpsRkd6Q1F5UDNtZGxHL0hURkFxaDB0ZDlIa0dQa25rS3hIL0V6clRxelVNN2h3c2dkdU81Slc5eFMvN3lNMHhiUFVTdWN1QW0zSWRQSTVjTGRSQUpCNDJwcklUa2hiYUhmR1ArRVFTMFNKL3BnMVZWRXRxTWJOUHpOZEsxa1MzSGlHTjY2djBTdThyOVNuVFAzbCtpcm5wQVh1a2wySEYvdE9HUG5IbWtiMDdMaHZMREVuTG5FRTFqV2ozSE1Sd0hkZ0c5UTR5VCtDVEFBcGRsOTNtOWJtUk1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUU4MGxFUVZSSWliV1dhMndVVlJpR243bnR6QzY3TFlVV0JBeHBRVXFrQm0rQXRyVVFFNGlRSXBnbWhHQU1ZUENDYUlpSlB4Ukk5SThHTmRHb29FQWdFRUNOb0NpSVlDSWFMbTBwVkxEV0FvVlNDWlhhVWlpa3UxdjJNck16bnorV0pWQ1Fvb0gzMzVtY2M1NTU1enZ6dlVlSlJpTDBvakZBT1ZBQ2pBRDZBUXB3RVdnRzlnTTdnWU0zMjBTNUNlaHhZREV3c2JjM3Vhdzl3RkxncC84Q1dnNjhmSXVBbmxvTnZOQWJTQU4yQTJYL0U1SlJMVEFCU0dRZXFEMG1WTjRHQ01BNDByVzdvcXRCSzREaTJ3REo2RUZnZldhUStYUmpTZHU5RXhvUFZHWWNmWHFISUFDZlFkcFJFWERrRG9JQXh1ckFMTS96TUUwZnB1Vy80U3d2bFVMVmRRQ2l0b0JQUVlBc0FOZkJjVDBNbjNuZHVtUWlUakpwbzZycUxCMTR6RFJOWXJFWXkxZXN4dlQ3cVhpeW5OYTJkdHJhenlJaVRDZ3I0YU5sSzhnWmtzLzhtZVVvUDY1RXlSL0Y5czUrakM0c0lDc1lZTnVtYjlGMGpjRURCOUxlY1E3WFRURjk2aFJNMDRlYmNrdDA0QjdUc3FnK1VNdmU2b09VRm85ajlvc0xHVGxpR0ZVMXRjeDVlaVlubWpmU2NiR0wwb2tqY1RZc3hQaHVJOVpJZzk5YVJuRnM1anNNRDdxc1dyY0IxM0dZTm5VS3g1dWErYjIrZ1VBZ3dJeUs2WFJIby9rcTBCZWdLeHptc2RKaUtxYVZVM1hnSUZtaEVPKy8vUmIxUjQ2eWJPVWFGcjZ5Z0NkS3grQ2VPa1RLQjNhVHd4dlBQOFhtSGJ2NFl2TVczbno5TmZKeWNoaGZXc3p4cHBQazlNdmgwWEZqU0RrMnFGcVd0bmpSb2lXNllSaWFwckg1NnkzVUgyM2twZWZtNG5rZTBXZzNtcVpSTWEyY1RWOXQ0bFJuTjQ5TXJzQjM3akJlMGNOWTg5YlEzbnFHK3dzTEtKODhpWm9EMWVUbURlRGV3aEVNR1h3WEFiOUZmc0V3VXFiUElScUovQjJKUk1ST0pxU3R0VlVpNGJDSWlOakpwTFMwL0NXTzQ0aUlTT094UnFtcTNpOFpuUTBucE8xYzE1V3g1N3B5cHVXME5KMXNGaEVSMTdHbHJiMURvaUlTL1dWZGh4S05SUGFLeUhoVlZRbjQvVGlPZzVOSzBTY1laTytlUFRRMk5oS0x4OG50MzUvczdDdzZMMXprZkRqR3NQeWg1UFVOVVZsWlNUS1pwTEN3a0RsejV5S2VSeUllUi9XWktJWk9jdjltV1BITUlSV29WaFFGRWVGU0xJYnRPSWdJQUxxdUV3Nkh1ZERaaWM4MEtTcTZEOWQxOGVJUnN2dyt3dUV3aXFyaWVoNjJiUk9MeFVqRTQ3aWFnV1BvMkxWYjRZT1prRHUwUm9sR0lxT0IraHY5UDRaaFlGb1c0YTR1SE1jaEZBcGhXaFlBRnpvN2lVYWo1QmNVNExrdWlVU0NSQ3lHbFplSEI3QnJGYkptUHBoK0dEMnBKTlByNm9BSHJvYUlDSnFtQWVEeitSQVJiTnNtNDE3WGRUUk53M0VjVkVVQkZGSitDd0ZZL3lyeS9jZVFGWVFCQlUzazNEMHlBeXFtUjF1L1pYa2VCTFBUU2RiU2dLeGRBSDlVd2FEQllKZ1F5SjZFYnYxOGRmQ3RCWjY5WllBSVdFSHdxZUNrNElmM2tHM3ZRcndiQmcwSDhVRFZ2a0hWWnVDNTF5WHNZZUNobXdPQVBxRzBBd0dxUGtkMmZnZ242aUMzUHdUN2daTUVWV3RFVVVmaHVjRDFVVzRCKzBqbjA3VXkvR0NsR3l2ZEVmaDFDN0p2SFJ5cEJNdUEzS0ZwbDA0U0F0a05HUDR5b3VmRHFPazY2ejIyUzVDTzRUVjQzangwSC9TNTNORWREeHFyb1g0blVyY2RUaldBcWNIZ0FsQlVTRGxwaTJhZkw4a2FPQnM3N3VLNVpFRC9mdDNTdENtazdDV2NyQzdsK0I2aytRQ2Nyb1BvcGZScEN1V2xIWWliQm1sR0xZWi9LV1pnSzc0QUpMb2gzQTZhMFFzb0ZJSS82NUJQS3Nyb1BETVZNMUJDb0c4K3VwR05DS0JFVU5VV05MMEd6ZHlCWnV4R3VWeEVNd2pKMkRXZ2Z3QzA5a2MyMU11NkFBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQjNSSlRVVUg1UU1JQ0RjdDA0TGZWd0FBRGR0SlJFRlVXTU9ObUd1d25WZFp4MzlycmZleTk3djNQdGZrbkp6azVPUithVU9TTm0yYWxHbXgyZ0ZLUVZFb2hUTEtXRVFSbEk0eml1SUhPdUo0K1lBS0RPQ000b2dPS3ZlaWpxMHd0SlRTRm1wS1NaTTJ0eVluNTVKelAvdSszLzNlMTFwK09KVVpsVXVmTCt2RGVtYisvL212NTNuV1BIL0JLd2hyTzl4OTh4SHV1ZmQxMWM4L2N1WklIalp1UHpLbFhoMGwrdGp1TWJuTmQ3VlFqcVFRSlZPckJqUEd5TE9lN3ovWjZOa25icjV4MzRWcmx5L0ZkMzNnMDJ6WmV2U25Zb21mU0tUK2ozenM5LytTNjI3WU8vVDRxWmszMXB2dCt5NHZkRTUwZXNuSTVLZ3I3N3hoaUFOVFZhN005emsvMnlNdEJGUGpGWElqR0J2eWRTZksxNFlHU3Q4ckI1WFB1OVdSYjdSWDUzdjNmZWh6Yk4xNTg0L0ZWRC91WXYzMGV3a21jWHIxNXVzZi9jNkZqNVZzNzRHbno2NWR0OWFNZzgyRG5wZ2FxN0RhZ3ZQWEJPZm1EU3N0U1ZKNHJIZGlramlqeUZJWmhuSE5FL2wxaTJ1OVg1QnA3eWJQOGRkVWUzcitUU2NtekplL2ZmV1ZLV1N0WmZhcE4rTUYxZUcwVy8rOUs1ZmE3ei8xdmVXaFFBb2VPOXRuWnMxU0tsVnh5Mk5NYk51RkcxUXdSWTRqSkVrVXNiZzBROWhkWmRoUEdhMWtiSzZCbElLaFFOS01hSTRNbGoreFkrdkl4OE13N3Y3aDU2NGdoUGp4aEt6Tk9QMmwxK0Q3d1paZTFQMnJKRXJ2dGJGUmozeTd4dyt1d2tJclF3a1h2MVJpZU5NbTNublBQYXkzUXZJOEJ5UzlUa2pVNzlGck45aEVnMHNMSzF4YVhHRWlpTms2Q0ZsaEtmbE9VYXVXL21WZ2FQZ1BzaVJhK2RsZnZKOWYrbzAvLzlGUGRxRDRLdlZWczdteHV2N0pmcWYzanNYWlVENTVXdlA4NGppNE5WelBaV0ppbkhxanlhRUR1OW0zZXhkTHF3MEN2NHpBZ2luUUppTkpNcklzWjdUbXNCVENmQ1BEdFRBY1dDUkdGbGwySkk3VG5VWUdUNTQvZlNvOE14ZjlmNFUrOWNCUmxPTlhkTHoyRjJHci9kNU9tSXVGYm9VTDNSM2NlZUl3ZDkxK21NSFJNVlliYlQ3Mk41L2pBKzk3TjJtUzg0TVhwa21URkdNTmFFT2oyU0NLUWxRUkl2S1FaamRtUklTVWJVS1laWlNxQlp2S2htdE5EY3IvN1BqNDZBTlptb1dmK2RZS0FCTGdyMy9uQkE5dWZoNVh0OS9UYm5UZnZiU2VpS3QxU1NNdWNXUmZoWWt4UVRmdEVKbUVoLzdqWVpiWDFxbFZ5bVJHNGJrZTlXYURpNWRlNG9XTDU2aTM2dWkwUzdQWDQwcXJTeUlpZ2lEanRqMHdNaWlaN3lqNjJxWHNnV1BUWCs2Mm11OTc2LzIvS1g3N2piczJGTExXOHJjUEhFRDU1WnQ3OWJXSG11dk43VXM5bDhkbmZEN3dMc1ByM3pDS0dwN0VDeWJJVzhOODhUT24rS2R2ckhIL2ZXK2oxVGRNejh3eU4zK05PSTZRQWh4cHlmT1VOTXQ0NEYyV1cxNDdpQ2dwTm5zVHpKM1BlZnpoYWY3NTBUVitacC9FWmhscHp2SndyZnlXTE11ZU9mNzJCMUVIL0tkUW8xTWwwVjM2czhaYTY3WnVBbzlkRWl4M0hIU2llZnNkZmJadEdZZmVYc1J6ejlOY2paaU90cUN3WEp5ZVkyWitBWk8zY1VWRW1Ec28xeVdNTS9weHh0MG4yOXg5MGpCWXZwMys2V0c4YzVmNC9OTU5ucDVPMEZhd2YxeFJkVXpOd1ZZbXhrWWZiazkvdDVDMjM2Q1NyTHc2NmtkdkdpcGI1bHFLbVhXTkxoS2V2V2c1MHd5UmxTZnBYZndDbGU0OGhnUXJGRmZtVjFpcjEybTJPdXphM3VmNGxLWW9ETnFDVkE3VmlzL1dLWWtWcTF4NTlOL29QZloxbnI2MHdxTXZSUWdzRjVaeVZucmdleEp0ek4yTlp2dldSck9Edk9YZUQwb1RoL2VLTkJwc0paSm5wdlVQcXoxT0pHZlBlUWpQSXNjaTBrd3dPWkNTcHowYW5aQTBMMUJLY3ZSQXhyR2FJSS83ZEx0ZHNpekQ5MUxHeGxJS0Y4S0dva2hkdm5GSjA0MXlMSWFzTUR3M1h4QVhBckNEWVZ5OHJYTFRXNlJjL080WGR1WjVkZ2RXYzNsTjBJb1ZTc21OaWhjT0Y2NlVTSUJnVzRZZExOaStPY0VWWFpJMEk4c3lYTWR3OUZqR25rSEJzRExFU1VxV0Z3VFZoSkVwalhZRUtsSG9RRFBUMFM4UHZJMWp2cW1wUjRBVTlESnp4OXozSHBtU3d1UjNsQjJ6VXlNNXQyUnhQUi9QODNFY0IyTTFsNmM5MWp1QzBuaUJMU1dNREtTTURZU0UvWWlpME5TcUNYdGZsYkY1d0dIZm9Fcy9UdWwxZW93RU9TcFRkT2Q5QnBWRWpHVW9SK0JJK2JMK2dxeXdYRnl6R0tYd1hIYllJai9tZEx2eFhhdHJYYi9aTXl5M0xWSUtmSytNMFpwK0ZMT3lKSmlaVjJ3NldaRFZNaW9oN0o3SWVPS3NRNUVMRHI4cVpYeXJaUm1mRzdia3JGUGlkWWNydk9ab0ZlZTBKbTBYMUR6RDhBQjg1djdObkYxVVBIUnFrZjg4MnlZcERITU53eTA3SkZhSUlEUDJwTE95MnJsaHRkSG5wUlZOUDNNUnlxSzFSZ2lCNzN2MGVvTHpaeFczM0ZyZ1RPUTRjdzc3dG1kWTdaSVhsc05IRXBSMU1SWEJhL1lMYm52dEpDZHZHUU5Ia0xhNjlIbzlkTWxRRTRZZFhzR2gvWXJYSDV6Z3ZrOGxQSFlscHB2QWNzY3c0RmtjS2E1M1poZWFPK0xJVWc4aHl3MHVHcXNVV0l2cnVoUUZ2UGk4eEJnb2JkR29qbVgvZG9tbmNveUZvemZuOUpjRDNJbVVMVllReHducnl4bUJNc2pNVUZXSzNCalMxQ0FLYUxkQ3BwZjdKTGtGSVNtTUpjNWcxNUNnbTRsZHp1SmExeE1JMGh5TTBWaXJjQnlIUE04UjFtS000Y0lGU2JjTmc2TWFOaG0yRzhGSXJTRFVobjBIRGNWTEFaVnRDVW5MSlY3b3NXWmRuRm9WcHhzU2RTTVd1aWx6clpSNmJFZ3lUVWtZVWcxQ0NLemQrSFF6RGRyS1NhZmV6ZXh3SUlXMkd3a2JTWlk4ejRuakdHdmg2clJsYVU0d2NzUWdxb0xSUWpBNXBpa3FobTNqRUQzdFVibXhUYjVrc1l0VmNnMTVHSkUzUXBiWCs1eHBwQ3lFbXBLbm1LaTZqRG9HSlhLa2xCaGpzTllpc0NoaGM2ZXdiaytnQnp5MTBZL0dHTElzMjJoN0tVblRqT1hWbkFzdndnMDNndlV0Z1FzSGQyakVwS0ZzRlVWZlVCck9VWnNsR0lPclFKUjlaTGxFdFZvd25sc1NDbElON1RqSE9LQ3RmWmtJR0F0aENxNG5WdVJBeFpzZXFqaU1WaVZLV016TGljWVlBTXJsRW9WV1BIOGF0QUZkRm9nTWprNVpqbXlUUkMrV0liS2tzeDQya2xnclNMb0pVYjFEcnhzUjlqUHEvWUp1VW1BdGpBUWVveVcxUWNRWXBEQ01Ed2dtUjExR2EycldjWVI5TGt6TWpZRURnUXU5ZklPSTR6aElLVkZLb1RXY09Xc0l3eHpQZXN5ZEgrTEdyV01NajFSd0xxZWtNc00rR3pCYUZvd2RLdFBMU3N3dDFMbTZrdERJTFo2aktEdVcxQmhXZXltMkpGQkNnTFVFbm1CeTFLRlc4OGl0ZjhVeGhpY001bGQ4eC9wakE0cTQ0eURreHFSMlhSY0F6M05aWENpenVwd1RkRHlzZXgyN0QxV3dhS0sxRG1uUFlLVkM1SnBLR2pMbXBhZ3h3YW56R1pkWFUzQUZ0Y0NoNWt1MjExeHFRZ01wQUZPakRydkdmWUpLT2FtSHpqT09WTTUvNWJtOTVtRDI3aGlXMUxNeUk0R0RJelJ0N2FHa3hITnplbjNMNWN1SzQ4T2E1dVVXYTBZUlNJT1RDWWFrSk1seXdraVRha0ZyT2VUY1lrUWhIY3FleGtnWUtDbDZ1V1cyblZLUmxzeHMxT3gxRXhMWFVjU0ZPOStMN2JQT3V0eHpkWS8vd2hQak5iVjNvR1JJODV4alF6bGRvemdUS2tvT0dDMjRWSGQ0NGZzT3Q3OFRNdDJsUHVPZ1BCZnFiZXFkbUF2TmhObE9UcGhacE5Yc0dmRTR1ZDluK3VtSTJYYkJZajluWXNobnZPSXlLQTNDcGd4WEJFZTJPd3pWUE9hYjlsdWYvRm84SS9mYU14cmhmS21YMko2dllOOW94bk5yQ1k4dWFod01oNnNwZVY2UUY1b1hYbFI0azViZytwUzBHZE1QTStxUlpyR1hzUklXeElWaEpGQ2MzRG5BOFMwbEZwWVRoZ1pMQks3RWx4dERzTkhQYUNZYUM1elk3YkdwNXRDS1ZEZE96WmQvOTYyT2tkb1pJS0h5blg0bUg3RkNVZmFoaTJHbEU5SEpERXRaaVZ4NGpQdUc5VGxEbzI3WXRMUEFjelZCeFdWbzZ6RDd4MnZjdXEzQ3dVMCtGc3Z6U3hFUFhleXhGQnZlY0RqQWtZSk9yTUVLTmxWOWhuM0p0aUhKN2ZzOWFwVVNtWllQcnpTeTd4WmFJZjBUdjBXNzFVeldRL0dKSzZ2NWNpZTIzTHE3ek1FeFNhUGRaUzUyYUdhU1JteUlyY1kySVZ5cjBqT0dlSzFER3VkMFk4dTFac2JsOVl5VlRvNFZzSDg4NE9Dd3g2V1pQaFp3SmFSNXdWSTc0Y1Y2eHZYYkZWdUhYTnFSWEd5MDg0OXZHWkxKSC8vZHAxR25udm9XTzdlTk0zTDgvc1hsbDU2VjFoUjNXR1BVeEtCTG1NRjZIN0pDRThVUmI3NFZ4dG9EdEdlcWJOOVpvV2lucUZxQXFwUVl0SVlCVjZBa2hMbGh0VmR3cVpHeUVCcm1PcHJaVnM1Y1czTzFxZG0rV1hKbzBzVnhTM21uYi8va3cxOWQrdXJoclQ1M3YrL3ZOL2F5Szh0ZHFyMEw1TUkvbTZUcGVKN3JZNEZqeEdnZ1dHb2x0UG81dXNpWm5UYzgvbHpCOFZHSExlT0RPSU1WUkpaajRwZzBqRmp1cEZ6cUdPWTdHbDFvMnJIbG0xY3k1dHFHOWRDUUZ2QXpCM3grL2xnVnBWemI2b3QvYUliMlQzL3UrbHIyMGErdi9lOUY4Vm9qWnF3aXNoenZHYVAxWks3TklVZFlNZWdadWxGQkw5YTBJazB6Tm96NGtoMVZoU3dIaURpamFJYTgxTTQ0MTh4cEpwcXlZeWxMdUxTdW1Xbm1GTm95T2F5NDcwU0ZPNjh2a3hiU0ZzYjdZaThTSDZ4NHRENzh0Y1VmdlVvUFc4dU95VEpJTlNwdC9wSEJFcjlXSzhsU1ZsaVd1NGJabHFXYmdDc0ZCOGQ5am02dk1GNEdrV2JNOUhKbXV3WHRlRU9KZG16cHA0Wk5OY1Z0KzZ2Y2VhaEN6YmM0anBNMnVzVm5lekVQS21IVzMvNmVqN0R6cmwvL3lYYk1UVk1CR2xWMmJmcXJucklmSENqSlhXVlhrQnRZQzJHK3BXbEdocXl3OEVPelFPQXBDUUlDRDdZT1NvNXM5em0rSzJDMDZqQThNc0I2SzVvTHcveWozY3o1ckN0TTlLR3Z6UDkwOStOLzR0VjdxdmpWaXVpMzJvZDhaZDhmZU9LZWdaTGNISGdTS1NSaGF1akVtamlIdExBSUFjTmx5VWpGWVdxenk5NHRKYXpSK0w1TG10TkV1ZitlWlBianA4NnNuTjB6TldqLzZPSFZWMmJIL04rNGMxK0FSVHBsMTl5UTVmb2RTdks2a1lxN1cwa0NpUkdCcDNDa3dIY0UybHFHQXdkdHNWczNCNUdTek1TcC9xYTJmS1VicHQvM1hKVjk2Ri9YZnlMZVR5WDBROFYyVlNnMDBwWEZoTytJbTRUZ3BDTzRQdkRrOXFySGxLZWtXL0tjeFlHeXZLWXRaNE9TODlSd3JmeURsVTYyVkM0cDgrRFhGbDRSem44RDJXZWNzUEpDTTBzQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNakV0TURNdE1EaFVNRGc2TlRVNk5EVXRNRFU2TURBeGVaM05BQUFBSlhSRldIUmtZWFJsT20xdlpHbG1lUUF5TURJeExUQXpMVEE0VkRBNE9qVTFPalExTFRBMU9qQXdRQ1FsY1FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJvQUFBQWFDQVlBQUFDcFNrek9BQUFGamtsRVFWUklpYVdXYTR5Y1ZSbkhmK2U4Wnk0N2w1MmQ3cVhkV2RwdXR3c0x0cFVWV2l2TFZrcmdrMkR3a2doWTFFQnE4RXJ3Z3dueGcrRkxJd2xSTVVHTnhnWWIrQUphZ2pGeVN5Umx1MjVMaTlTaXRiU3VsTzIyM2U3TTdPemM1NzNNT2NjUHMwTnFzMTF0K0Nmdmh6ZlB5Zk03Ny9PYzgveGZNZjc0ZnY2SHRnSjNBV1BBdGNBcVFBQUZZQnFZQWw0RzNsb3BpVm9oZGp2d0ErRE9LOFE3Z2NHbCtBK0JBOENQZ05lWFd5eXZrT1JwNEkwVklNdHBKL0FhOE92L0IrUUFFOEMzcndKd3ViNU9xNHpSbFVBSGdSMGZBZExXSjJuMTdrTmQycU5mQXJjQUNHc0pWSmh5TEltdndnaHJpWHQxRW00VllReENXRnpDTEpvVXJna2poQ1VwNjNTSkNnNEdnd0Q0QkxBUCtOcWxvRzNBTjRTMVdDbVpTNjhoNmxiWmRPWmRlaXNMQkU2SW1aNjF2RDh3VElmdlVsNk1rSlFlbndvZEp4UEpFVmpGNmVaNjNnMUdpRG91R1NkUDB6b0FYd1YrQXh4c2czN2Urb29RODZsZXhrOU04cVdwRjltWW5TSG11MmdoS2NZN21ScmF5ak5qRDNEbjZwTjhsMzNjR0owRzJRQWtqV2FLUDlkdjVpZmxCNWtPQnRnWU90K0cvUUxZSXNZZjM3OEorQWZBK1ZYOWZPN3dIM2pzcGFjd0trdzIxVXZnT0FnTGNkMGdjcTdFdWMyRDNQcElGaEhQUWJVUDN5cUVnSkJzZ0xOQXFkSFBmZGtuZWMrc1o3MHpoOFlCMkNhQis0VzF6SGV0WnZ0N2gvbitTejlqTWQ3RlRMb2ZYNFd3Q0l3VUxQcHhDcHN5M0RDY3BYUk00Z1ZyY2EzQW1DYmFTbHdkbytFUGt1cVlZMi8zSGhLMlJvVjR1Ly8zUzJDODZUZ29ZZmo4Z2QraDZ5NTUzMkx5T2Z3TEYyZ1dGdkZtNXdpeTUrbGNjeFp6VFpsU3pxZDJmQVlWY1VIRnNPV3oyTnBGY0hONGl5RXk5aVM3NHE4eHAzdmJvREVGRE5laWNkWWVPOFRveUFDSjNUOWxZelNHMVpyNTU1NUZhSUhxWFVQaXh1dm9TRXpqejE5RXl3cHllQnd4OWdDcU1vUCsxeC9CTkVGNzJFZ2F0dXhnL0c5VmZ2WDJMS1pUSWpHREN1anlWWmprQjlQMDNMU09ydTg5aXE1V0tVOU1zbUhQSGlKREcvRE9uRUhYRzhqVUxweTZUNmhXUTIzYmdUbjlDUHJ2enhLKzkxVmsranBzczQ2WlBRQjlHWHJVQzZSa21jQjJFeEdtVXdKQ0drTVFUMktUU1ZqSTQxK1lJNXpwcCtPR0VYUzFTblI0R0JrTlk3d0d4dGNFMlVYeSszNUxhUERqT0RkL0M5RzVIcUpwYk9FVXhGWkQ4UVJ1ZnBvZzNJM0VmbmhoaXpHdkhzdU9idWZmZjMyQjRBdGZKQjlMRWNuMEk1UUNhekdlajY1NnBFWThPZ2E3cUI2ZEllS2N4QlIzZ1hZSkpoNERET2JpMjhpaGUzRDBFVTZWT2lqSVBsYUo4d0FWQlV4M0JGN20zRFZEdkQ2aGVQamdCT1ZZR3V1NVdLMFJDQkFTWThPWVVSK3hxWUhqSlVudmpCSk1Qb0VKSkJnRGdJMm1pUjU1QWhUc04zdEpDTGQ5R0dZVThCZXduMDRYYy96K3JvZllXcHhoN1BRUnBnZUcwSTZEc0JZRWFDMEozcStURE9WSmZOWmdreUU4ZHgwaTJpcU5SUktUSlVqQzB3dmY0V0I5TTllR1pyR3RjWFRJV2JmejNoeUliMFlEajNLc2s2bVI3ZlNWOG15ZS9TZGR0UktScGs5bm8wcGZMVWM1M01tUE4rNG0yTmJOOWFHaktGdEVTUThsSzRTY0FoRGlxY0xEUEZuK01obVZKeVEwTFkva1ViSGtzTWVBVVdVMHVXUTNUY2ZoOWhPVGpKNDVUaytsUU9DRU9Oc3p3T1RIeG5ocjRDYVN4VEozcXplNUxmWU9BMnFCd0RxY0N0YnljdjAycHR3dERLZ3NjZUdpVytad0NyaStEYnFsUGRhbE5mZ3FURDdaRFVEY3E5T1VEclZJakxoWHA3ZTJnR3ZEWEZpNmpIRlpSMXRKMVNSSXlCcXJuY0pTS1VXN1AzY0FiN1NINmlIZ0dlQkJJeVJLTjFsVG5NY0tnUkV0eTByWGlnQTBjVkJDczA1ZHhDTFFWaUlrOURuRnl3RUF6OU55NnY4eXZvZUFkeTVkSmF6Rk1SckhhSmFUd0tLRXhtSForQW5ndnZiTDVRNTdLM0IwMmF4WHArTXNtZWlWUUM0dEc5NzdFU0RQMFhMWHlrcWd0bllEbndFbXJ3SndHTGdIK0Fvc3paMUx0TkovM1N0THp6aHdONjFTYkFCU3RDNUhDZmlBMWtINkUvRG1TcnY0RDE5RFJJUzdhZU5FQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBZENBWUFBQURDZGM3OUFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUIzUkpUVVVINVFNSUNEZ1M0bnp1cFFBQUN5cEpSRUZVV01PdGwzZDBWR1VheHAvdjNqdDNTaktaa2t3bXZVQ0VGQ0FGU0pBT0lnUUxhdFN3Q2xpd29DS3VaUzJySzZ1N3VydDJzY0lpdXFKSXNZQWlJRWdJSkFTbEJCSWk2Wk5NTXBuSkpOUDczTGwzN3QyLzFsMzJXTkRqKy9kN251ZjNQZDkzenZ1OUJMK2lOcnoyTXFwS0F2QmJCakFyWktlL3RicDBRVUVrWXd3Szc1NUJnWjgwdlF3VW00WFoxejd4aTdXWlh3T1VvQkpCVTFJNkliTENkOFQ4NVMycWt0S0lKMFNubUN6bk1tUyt6VFJOMm1sYXNnRVFmNmsyL1V1YTUrY21vbnBtTmg1L2FUdHFaMmUvMHVwWFBuUElVRDJ0ZVVKdFJrTm9iSnE5eno0cHdUOXdqWUx6VDR6RlpEdVRKQWV2bE1saGNZWitlNkN2MzdvZVl5Y1hRUzg0MkFtNWhxcGhSZjRxczF5VE0xM3NSWGNzQzc3V002aE5ha0xBNm1KSHZMektOOXJYbXFhV3JQa1haUXRyVjA3QiszczdMOGlIdXBDbWc1dHV3NEs3ZDBCR3hLcW1JZWJkZGp2M1JYUEFNS2xWVmdRTjN3SDlpUzJZMWY4Unhxa0gwVFBrUmJjam50VmpEMjlyTk1XMkVERStkOTQ5QzZrRDY2NzZiUkw2OHMyYlVGS1FvdGk0OFkyNzl4dzF2MzZ5eHo5RHJ0V3BTR0lXZW9OYUxEU2VSZ2JYaitMVUFQUXBQRDV2NGlCWHFVRXI1WW96NWxCUk1CUzd3dFk2d0U0clRqbHo2ZFN4c1cwSE8zODkwT0ZOTjhHb1Z5cy8zTisxZHQ5Ujg5cE9TMGpIcUJLUW1RaWtNRHpPZGdkUWxlMUVWWG9ZcVprMHVDakJSNGNFRk9mcUlJUzhzUHRGRFB0RWxkbmludTBQeHZRWFQwZy91cVFxaDl0YTEvUExnVVRYSm1pRklQM09sKzBQN0dub2VXSndKQ3JYYVJOUWtxbEFKT0JIVmdLUFdDZ0VXZ2hEUXdoNmh6ZzRyVFM2M1VtWWtrdWhxOGVLZEEyTE1DL0I2UmNvbXlOUUVRNUZtVXVtWkRjK3Q3WW0vdmNOUjM3UWw1ejNvSWdlTFovVWdpWVMxcjF6Qk9OS3hsejZ5Y0hPYloxbXJ6NVpyMFpaZ1I1OWd5Tm83M1Znd2JReEtNcFBoc1BEdys3aUVJb0JtVG9GMUFtQVB4VEc1NGM3a2FKbU1TWkxEMnVBd0IySUlWTXRoWlpjbkhYNzdxTnQyM1p0dWdQT0VRSFRsdi96eDRGa2tvUXZIaVpVMzFaQXUrcXl4RThhQmordE85Ni9RS2xVWUhKaEtnWXNEblFNdUNGakdMQXlHa3FXUmxHdUJxbkphZ2h4QXFjN2lBNnpBOTR3RDFHVVFDRENxRkVpSjAwTHMxdEFNTXloSWoveDlNMlhaZGRVamgrMVIyL3Q1eTRGNFAweG9FZkwwNmtWVHkxZHJVek9uZnI2YTF0TW56ZVpIcjFxY1lVeXg1QU05OUFBV0owUmIzMVlqNHFTZEZUUHJVREE0NFloTHhjMHc0QUxjL0RhcktCVlNYajcvUU5RS0dSWXZiSWE5WFhOS0MvTmhpako4ZTVuMytDYUs4cmpxKytvYVdFb3VhZnI5TGw5cTllOHZzNFVqY1cvdjZYL0JUSzNlMFNCU1Mza0U4ZXY0QmpkWXdTaXNyYjJhaFJYelVQZHFVRVVsMVZpeFhVTHNIaGhGZVJxSTdyN1hQQzRCQlNNbjRvekxZT1FKQmFUcDgwR1JWRmdhS0JxK213SXRCTEt4RFFZOHdxeGFHNGhicmp4Um5yTDFxYU1nNGUrNisvc2Q2Umw1bW5QWXpodmROUXVsbWcvVHh2YWpwOElGWlpYcUNpS2czWElpU2lVR0hKSHNYN1REanoyNUgzd09FYncxTlByMFdzWnhaVUNqWnh4UmZqNHl3Yk1tMTZDMlRWNi9PSCtHNkJTc3hCVVNmQ0dvdkFHbzJEVlBHWk5yOFNlL1NmdzNyOTI4T1Y1N0hPbTlxRGx3YWVYOEEyUGZvRWZUQ2gzWHFVeUlGTHBwczZ1RTRZTUk3ZndtaXZSVUg4TW5CQ0hScWZGcVpZdWZOZlJqOTBIbW1HMk9nRVFTQlNCUHhZSG9XbUlvREE0NnNXZS9hZXdhK2N4bU13amtFREFTd1RCV0J4dUh3L0NLaUNCcElLUzUrNStPRjlNQ2RMbko5UzhaUmswQmhXNENBK1BVMG9OQ1hSYXY5bDJMa1JhS1dQeFpKdzhjUmJqWjh5RFB0V0FBZk1RSWh5SENCZEZQQjVIWEpJQWlrSklKS0FJQWFGb2VJSmhuRGpUQWFXTXd1SW9CNHBoSUZFMGdnS0ZiK3Zyc1dUVmF0eDJ4MUsyc0REbHJoWmVXbW82K3MxZkRxMjcxcW94Sk1CbTlvRmVkZTBFblZwRGErVnlSbm55MjhGY2l6ZGU0TElOQ0cwdDdZVjk1enBvSWV5RlJrSEI2M0lpR2dxQ0lnUWVsd3Rodnc4RUJCb2xBNVlTUU1YODBLbGs4TGg5OERqc1NFNWlrU2duc1BZUElSWUpnNHFITVd3eG83ZXpDM0o5Qm1FVUdxTnoxTlhSMGRTNHM2SmlyS1JNbEJsQ1BrNUYzM3RUOVQ5VTJkT2Y4VVYxeTdMR0ZwUVNXOC9XUmRXVnhRbUoyZ2s3ZGgwaHk2NmRoWXZ5TWlBWEFsaDUrMUpzMzdFZlpyTU5mMzNvZWpBUW9kYkpjZm1DQ2x4Y1ZZWXhlVmxvUEhnRUQ2MjVIdFdYelFYRlJiQ243aFF5c25WWVdqTVhNMmRPUldsSkFWb2JHbU5HNG15cnFWbWNyOVZvZTBYUG9GdFhNSFd6MVJXL2hJcUoya2luS1pTOGRjdSs5YWFoa0tBdm5mZDhsRmZsODZ5ZStDSTgvQkVhSEd0QWo4V1AvT0lwdU9QT1phQUo0T2RreUIrVGhwVjNyc0RPdlczNC9lTWI4ZUpibjZGLzJBZGFZVVJEWXp0MjdHcEFUcFllOTY1WmlicTZzM2prOFRmeDFjRm1yTHozN25oT2RtNWZtRXFkb0I1Yi9ueG5meVRkRTVBSkRvNzFNdTRRTDlxbFVQRExuYnMvblppbGFwRWxML3JhNDR0bWVpTThKRWxDT0JhSEs4aUJFMFFjUG5nSVZJSU95NVpmQlFrQ2N2TnkwRzNsOFBuZXc0Z0pJbVpVWklPR0FkNUlEQVZscGVqdTZnRWpsOEhtRVhHczZWdVliQjQ0OTlSai9oWFZDa0ZsS0RsMTRwdFJTcWxKU3A5OTViT2VnQy9aSCtYN0tSOFhsMFlqTVRKNXZGcFZOTC9vb3BGSUREWjMyQ0hRRE9RMFFGZ2FBVUVFSWNEQXFCZnZiWGdmbWFYbE1CUlBRTytnQ3lGYWdhejBGTVI1SHBrRjQ1QmRYZ2wzTUlyZHV3L2grT2tPaFAxaGVBVUtDVWxKaU1WNFpHVHBFS0lnMmwwK2V6Qk9XVnFiNnRlR1ZMcXFpTlpZR1l6RkJYcmh2TWsxMGNUVTJST25sVTBaaUdpdmF6dmR2VmNNZXZacDhzYk5LYzdYVUFXVlUrRHdjS0I5dzBoSXk4WlhldzdENDNUQlVEWVREYnYzZ2dmQnpBVnpNSEZjQ3ZKTFMrQVk4VUdabUlDVXJBeE1uSlFMbG8vQUZZaWllRm9WcGs3S3dKekY4MkFmRGRjci9NTkh3MHJkOVBaRFh6MHJLUk9HT1gzQlF0ZVE1VFE5S1R0SjcvSkZ1cXoyUUgvSHFmWVB6K3pjOW9hTWR4NlBVeW9ib1JtbVlYL2pHSnZKUkxoUUVERy9CNVpoTjdwN0xmRDBkOEZxc2VQTThkTVlIUjZGSURFNGQ5YUVqcFBOTVBlWTBOZG5oY3ZoQXhjTzRteHpHMHdtS3lTSlFjVGwvcmo5Y1AxcW8xYkJqVGc4bm5nMDJHSnVyRHNDbXZFRVI0ZDd5WnN2UG9pRVMyK0ZFUERpNVBaMzBkdHdBQmZsYUZGNjI1L1F0ZUhSekM2dmZIdTdOVEpEbTJ4QVdxSUVQdXhEaDltSlVYY1FJZ0JDS0VpaUNBblNmLzgwRkVHV1VZUHgrYW5nNGpUYVRDN3dYQlNGbWNxejA0djExdzE1bUo2ckxwOExoM0VDV3JlOUJUN2dSZTFuNTNCTlNpSWg3Ny8wUndUREhPS2djZCtUTDN3dmV1UDhpUmkwRE9LdTJ4Wlg3anpVdVRrZ0pZL1hhSFNJaFJ5UUlrNjQzRjdZbkVFRXdqeTRXQnlFRUNqa0RMUnFPYkxTZFZDcEZBaHlMQVNpaEp5Vnc2RG1CeFpkbkhQcnJZOXRxUWVBTGV1ZVFDUXFRS0ZLeFBJMVQrSjM4d3RBMGZUNTAvNy95OVB5Q25SbEQyRG5HemZQMkZYWHVjN0ZxU2Z6SWdNaXhjRUZSc0JTTWNRRkRoQkYwQXdOaXFaQjBYTEVKQVVJcXdFams0T0NnQXd0Mm1zV2x6NVF2ZUtGQXlNdHI4SllkditQZXY0a0VBRHc5bTFZZGN0YTNIUFAxUVdmN1d0NTVOUzVrYVU4VVNmSjVBbVFzVEx3WEFSaVhJQ01sUUdnb05ib0lBZ0NGQ3dEbjhNY0dwZW4yYlZrWWZuZkhuN3c1ZmFqelp1aE1ON3drMzQvQ3dRQUV0ZUlyejdjak9xVnQ3QWZQUC9pbkdPbkIyNnl1WVJaRVY2V0xsY2xzWEdSUUJBRU1EUUJ5MGk4bk9KR2pIclpzY3J5c1I4c3YvK0d1dTF2ZkJLcFhYVVhLSGJLejNwZDBPWks1TE1nU1JKYzdhL0dySGIvMTI5dmU2Wis3L3EzY3pwNlhVVnVmN2lBRTVCS1VSUlJ5R21YSnBIdUhaZVgzbjdsM1hlYW43N3ZGZDdXMW9PbDkyNEVJUmQwOWd0ZnBmOGpLSWtuTWRpMFZSQkI5ZmtEWEYvRE40TTQrcDBEQURCMWZESVd6UmtMUWhrdzNIb0tmMzV0SXdqSkE3RG1RbTN3YjB4Qk02T20wRE8xQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESXhMVEF6TFRBNFZEQTRPalUyT2pFNExUQTFPakF3ODNsSmFnQUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF5TVMwd015MHdPRlF3T0RvMU5qb3hPQzB3TlRvd01JSWs4ZFlBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUR3VWxFUVZSSWliV1dXMHdjVlJpQXZ6TjdnVjEydWJWY0NvSldRVFFhTENoZWtLSlcxRWpiYUd4TXhhVFJxRzFNTVRFK0dGTVM2b09KZlc1U3JiSEJTMUlmOE1rMDBpYWF0RFFZS2FLR05kWldpMHFRQ3FVc01MTXN5KzdNN3UvRE9JaHJYRW9MWHpLWm5IUCtPZCtjeTh4L1ZNUXdXSWE3Z0sxQUkxQU5GQUlLbUFhR2dhK0I0OEJBcGs1VUJ0RkRRQWZRc3R5Yi9FMHZjQUQ0WWlXaVEwRDdGUXJTT1FMc1dVN2tBazRCbTY5UzR2QU44QUN3NEZSb2FRRjlxeUFCdUJ0NzdSWlpLam9NM0xjS0VvYzY0R09uNEV4ZEEvWncxNEptb004WjBUdHJKQUY0Rit3UjNTWWlQeXFsQ0FUOWdBdkVZbTR1aG9pZ2xQclhVeUtnRkFSOFhuQnJZQ1daaTVtTDlTSkNNTnNEYmhmeGVCTFRzZ0FhM0VDYnBoUmVqNHVMRTlOYytHT1Nxb3Bpcml0ZGg3T0U1a0lNVDNZV0MvTXhzdjNaQUl4ZW1tRWtIS1dxT0VoWllRQTBCU2pNQlpQTDBRVGpzMUh5UFZDWUYwUXAxZVlHbW5KeWZGd0s2N1RzLzRBTlFSL2hXSUxPblZzb0xzakZvOEVkRzBzNSs4c29tNnJLbVp5YTRkekZhVjd2L1owY0pjekVMZDVzdVpXU1BEK1dhZEZjVTBGNzl5QkdORWJYVS9XSUNKcW1HdDFBRlpxYndRdGpESTlQMGJuemFkcmZPMFpvWkp5Sm9XRzZUMzNQcTA4MmNYNXNpbWNmcnFmcldCOGwxMWVpVzE1ZTIzd2pMMzgyUkdoY1ovSzNNQi8xRDNOZ1d5MS82dk04WHJPQjh0SWk1aUlSVWltNVFSUElCd2lOVE9DeVVuelNHK0tOSGMyc0Qvb3A4SG54ZXoza1pIbXBMaXZrbVk0amJLb3NvcldwanRHSmFZNE9qYkh2d1JvS2ZGNENMbzNLd2h4T0RrOEM4RWhWRVdBNlM1dnJkcnMwQmREMTVTQk50VGZSODladXUyVkhCeVVCSDNoY3ZQaG9BNGRQbkNFeEVhWnoxMk5zN3c1eFQyVUJQWHUyQUVLdzQxTktmRjVLOHYwa1JURGlGblhsK1VoOFVZUmJSR1pqODFIL3dkM2JxUzViajFnbXBwWGsrUDduT1Q4MlNYVkZNZXZ5QWh6NnZKKzJGMXJKQ3VUeHlwM2wzRndVQkROQkltbHg0cmxHemwyT2NFdFJrQ3kzaTNneWhWSXduMGc2bmdpR2JweldaMmZGSmluNjdLd1l1aTVMK2ZhblgyVnI1L3N5T1JVV001RVFFVk1rR1Y4U2E0cEl5cjZuN0haZDE4VXdESW5ZMTRDS0dNYmJ3TDcvKzlwRUJJQmdiaTVZQ1l4b0RFMUwvMFV1eTBFVk1ZeGFJSlFwU2ltRnBoVEpWR3FsQW9kN05lQUhZQ2hUbEloY2krUm5ZTUNaZzcxWDI4c1ZzQmYrU1JQOXdJZHJJT2tHVHNKL00reDNRUDBxU2M0Q3R6dUY5TzF6UHpDNENwSVFhVWswWGJTQW5ZYTdya0Z5RkR1N1JqS0pIRjRDV29HdlZpQTRBendCN0FJa3ZUSFR1YzZoQ2RpR1BSVWJnVHpzQTZRT2pHQnZwQjdnZEtaTy9nSlg0cVRHK2dYZk1RQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQzRqQUFBdUl3RjRwVDkyQUFBQUIzUkpUVVVINVFNSUNEZ3BVM2NIZ1FBQURXWkpSRUZVV01PZG1IbHczZFYxeHovM3Q3OU43MGxQMHRNdTJiSmtXN0pzaVZVMk9DYU9nYmdzU1Vwb1F6TXNUU2RKUXliTVVBcVpOR2t6YlpxbGtIWVNRa2pKSkNSdG9Xa2hTUWtweFJEQ2JvTVJYckdOYlFsTHN2YjNudlQyOTM3N3IzOGtYUXdtZ1h6L3VuUG56RG1mZSs4NTU5NjVnbmVoSUFnNGRPZ29zaFJFcTFVcldpb1ZsVUorNWZKRCt3OXVXNWc3ZlhKa1pPT1BWNjNkV01sbU11YkQvL1pnWnRQd0pyNzAxYSsrbXhBbzc4YjRpVjNQNDloT1BCNlBmYXRRTEovak9LNDBOejNWamJrUWx2MktlM3B1NVU5S3RTTk9abWwrM2pacm45dy9ObmJpWGRFQTRuOVhiNThFQWdrY0RYV1ZDVEpDR0djWWYrZmJQOEN5cko3bXBxYm5WTTNvbXArZFJITm1xR1NubUp5ZVk5bHBwTDFuTFROVEUyNTZhZTRQNy96cVYwcUJyRXcvZGYvMUV5UHYvL1B6a2gzbmRDUWJHakwvZE4rOUw4ZmlDZWVPdi83UzJYZm9remQ4R05RKzd2NzJkMjRTVHVXRDh1S2UyeFZaUHZHVEw3ZHd6ZWNYQWNGRDM3aUZVTEJiZWZHazJXL1ZoaU5OcVhhT0hqNUEwc2p6eHRRc1hxMklISzlqT2JORUpyMGdmZkRTN1g4czF5cHIwMVV6czJyMDlvZXltZEtuemVyZU5Ydm5jd3RHT0xaVGx1WERiM3RrZ1d2eXhZdUVOTHZxbW9zeVJmK3FPcjlZbU0xMTNhTEs3OHZkL29rU0s4V2F1cElyYlBXc3lzZWF3KzZPWWpHVG5MTTlUTXZocFdNVE5OZnI1R29TMFRDc25ENkZMQW1wZC8zQWxUbmI0K0RoMS9vRzE2OGJMdVpjNDlGSGZpWktwWEx6NkVVWDk1cWw1Yk1DU1FEbkRYYWc5UTc1SS9VTGY5WE16QjJMdWZvdGlxeCt3M1RreG9paHRZeXM3YndyQ055ZjZwcjRxR1ZWVXVPdjcrT3hYenpKa2NrWkdscTZTQmRjS283RXpQaHhKbDQvaGhxNHRNVWlaSmZtQ1lYRHhOc1Q0Ynhia3RJNUUyVDlhT0RWRG4vK3J2czRkUGl3SklETm82TnZ6U0dBOTF6MENWN1ovVjBHaHE2NldOZWk5K3FhTkw3eklsRzNabFh6KzN5bkxLWm5zOXovNkNHbXkyRzhXQnVhRWVIMzFzbXNUQjRrdjF3a2xLbFFxbHJFMjF2WnRHV1VSSHNUNTE1NE1UL2QreUM1NVNMK25FWjdTL0sxVlgwRGZ4WlBKTnE2dTd1M2oxNjg5UW5MY1IvMlhNZHRhKzlBL3Y5QTB6UDdpTlovaEcwajNta2hySXdpeTUvVlErRitTYXFKNThjbUdKdVJPRkdLNDhXN2tCUWRYUXBJaGFFdEdTWWs2MFNyTG9acDRwWks5STl1NXRxYmJtVGZTN3Q1K2hlN3FXUWRPbHRhR1J3YVRyV2xVaCsyTGZNRDZ3Y0h6MVUxL2JMWjhYSDE5T09QanQxd3hVN25MV1YvMHhWWnFxWWQzM0ZoKzdXS0dqYlNSWXNEUjVjbyt3bG1DajQyZ3I3MlpxN2NPa3lxVHFVcEdqQTM4UnFwOTNaeSt0QlJzc2RleDNOZDNPdzBpMjhjWmN1Mjdjek5MM0g4NURoQ0NIUlZwYk01R1hZYkcyaHJiZVBFaVpQTzFETlBuUmN5cStzVmdsZlBBTHA2eHdYYzliSE5mTzNoL1RmRlk1SGZMMWRyako5YUpCS04wUm10bzZNbnljR1RpNXkvV2tiTXZjSXJ6eDVERXphNkhMQy81aUxYUEJLcFRqcldiOEJlbWVYSlIzNkVveWZwN0ZuTGtiSDlSRHE3YUd0SlVjeGtTS1JhQ1lLQXRxYkczVXZWeWg4dFQwM1dZcVhDbVkxeG9EdkpIVDk4dWE4akdicFpDU3hsWVNuSCtESzhmMmc5YXp0aWhEV0pxSk5sMzlnek5NVjEybUlTRy9yYWFXdU1NekdUeG5WZ1libkEzaGNlSjlMUVFVZExPNGYzN09IbzJCSGNsUlc4dmw1ODMwY0poZW5zNmVIa0szczQrZXFCTmVGNElxWU5EcFd2KzV1di9LcktBTHJhVWx5d09rNTlSUHRRUkpmNmwzSVZqczVaVE14bHVmdUJ4OG5iQ3JyaU0zWHFGSjJOSVVhM2JxZWp1NWUxNSs5Zy9YdXZZMkQwL2JUM2RMRyt2NHV1cGlqNXhTbHF0a2ZQNnJVc3pjMmpKdUtFZFpXSVk5Ry9iajIrSkJNT2hZdUxVNU1QUGZuTHA2MTlZMk1BLzVmVU85K3ppY096MVdoSHZmb0YzN05YUFhka21jY09MdVA2QWJZVVp1UGFkdGEyR2hCcXBidTdCelVjWi9DQ1M3RFZCZzRjbmNSVG9rU1RuVmdpZ3VuSkRHdzZsMzM3eGpqdndzM1V5d29YWDM0Wnd4MHQ5R29TVGNra1F0V29PZDRERTdiNTJTdXV1ckp5ODkvKzNabDNXV2R6SE52MWVtVXAyR2c2UGtkbXlpQUVRbEtSSTQySXdNVXBwNG5FMjNBckJXTGhDQ2NuVHJIcmtYOG5vYm1zbEIyMlhubzFMYWttc3NzNUdscFcwZHUzamtxdHlycVJFU0lMczBUaVVTWW1LOHlzcEtrSnk4c1dLMC9HaW5ubmtzOTk4Y3hPRGFBSEZyYnRiQ2prdkliRmdrbTZIQ0FiTVlTa2dLeGcrd29sMDhIM1BMd0FGRDNDb2QyNzZPdE1zbWwwRzN0K3VZdkQrL1lRMjNZWnkrbDVYaGNhbFpyRjR1SUNUUmRzNGNnciszbTFXR1FxczB4b1RRTWR2UW5ackxtdHBWTHByWjE2b0hjMUVkWEg4N3dlMHphbHVXd1pCdzJoNkwrK2VhRXVrU1RWMm9KcFdUUTB0WkxPWkJGdWxVQlN5Wlo5VWkwdGFGZ1VDbmswR1hMTGFXS3hHUGxjanJtbFJiQmRUcy9PSTJ3YnEyVGl1RDZtYVNkbFZlYnJkOXg0SmxBc0dxVXhGQ0FDTnlZTGdlMUpCRUltc0t2Z095QUUrY3dzK2ZrSlNxVWk1VXFOYkhZWklVbWtNMmxlZXZFRnN0a00wYkNCNHpnNHRrMnRXaVNmVzZaVXpMTzR0SUF2Q1d4QUZRTEZDN0FkRHg4U2t3dXp4RUxTbVVmbSt6Nm03UUJCNEhnK3NpSVRlRFpDa2tIU0VBSk9uQmluSVo4bngyb2tvVklvRkhGY0YxVlY4ZkRKcE5QMEQyeWt2ckdSK2xRblNyWEdHeFBIOEYyYjNFb2V0VlRDL2RWbUkwc2dSQUFFOHVLY1JSQ0lNNEdXOHdVcWRneEpFcVc2a0U3VThNQ3pDVHdRUWdMWElwMjMwVHNsY3ZQeldMYkF0aXhrMzhmMWZJU3dNVDFCMFFUcjlDeDVNeUNmelNEN05xNGtZNVpLMk9VS1FnaUNBSHhkUVpFVlBNOHNyT3FPVXpIOU00Rk96Y3lRcTdZUUJFd2pDYjgrb2tvS0pvN2pRQkFnYVZFc1A4UWxPN1l6L2JOOXBITjVKQUxXZFRWeGFtS2NmTlhFOWcwbVRrMEd5NW5GUU1pYUZOTjhkRldtWWdvODA4U1dKQVJRSWFDOU9VNDBZaEI0TEdtS3pHMTMvdkN0VmJaU3R2Qzg0RmhNRCtVU1lUa1pEOGtzQ3cyaGFBaDg1b3R3Y0R5TDdoZEpaNnJva3N0eUpFSGdGQW1wRVN6SElhVDR2aUlKRStHcnRtVnFsaE5ndWdGT0lreTR0UjM5cFpjcEs0TFdqaVQxVWFXbUNmbVlFOWJmV21VQU5WdFFyTHB2V0c1d3JDa1JwaWNwRXdRQkJENXVPVU8xV3VQbnp4eWtXc2hpVlF2WXJzUnpZeE5NTHBTcGp3aEdON1RpT0s2d0FzVlZaS2xTTlYzZmxYVU0zY0R6ZmVTR09KRlVpcnFXQklsNENOOW53dERWMTZMUjBObUJUcVZOdGd3MkY5MUEzbVY3QVJ0N29rUVVEOCt1b2l1Q0hTUGRLSUZMVDF1TWhwZ2dWOGlEa0ZreFZRNmRUUFBVczN1Wm5qNHRsV3UyVWJGOHFlckxybXQ3WG4ycGlyeVFZZjdJTWZ4WW1ONE4zVVREQm9vay9UeHJpc1grM3ZhekErMDVlSUxKckkvbEt6OUJLS2ZhNm5YT1hWMkhha1M1WnVkMk5uVEdLVlI5akphTm5MOCtSYmxTd3ZVOEF0L0hkbjJ5TloyS3ErSzVucVlxdmhIV0pkZHphMEU0V2NlYWpadklyUlNvVVdOZ3FBZFpWcWRWVlhsd2RWT0lhei8zcjJjSEFraVhYTzY5ZTlzSjB4WDNoUXpEdTZBM3l0VVhyU09wMmV3N2NJanh2TW9EejA1VEs1ZHBUMm80cmtmZ0I1aTJUd0FFa2taZFJCWk5NVW16YWpWamVIaFl1ZTdXMnhqZXNaMldqV3ZaOHA0Qk5DUGtSK3JxNy92TU4zY2RHeHpxZS9OejdNd1g0OUdKV2N4OEhOTVZ4eUlodlM4d2tnTUVNaE9UMCt5ZnlwTzFkWEp1R05rdDhiNkJDQlZYSWw5MkVFS0FrREUwd2JhQk1FNmxSclJ4bFhUQjF1MmtGeGVZT0RtT1lRUU05VFdqNnVGSEE3eS9QTGJ6UXZPcW0rOTVDNUQwNW9rZE4zNkJ2ZzNuNTVLOW8vOVNkc1BWU242ZS9wYUExbm9ORVhoWTVSejdaZ1BtaXpDeXVvN21lZzBQR1ZVVkRIYkh5T2FzWUh6R0p0YlF3dkhqeDNubTZhZFp5UmZvYW10R3FQcGVYL0JaVnhpNXJlZlZjVGJKYjU1WTE5TU9TaWk2bkN2dldKcWZmcUs5cmxabkNLZXJ1eDZpc2sycDVwRExGVGd5UGs5WXNybDh0SWRRcko3aDNqaTFjb205QnpQZ0lMUkVuRXcyeTFKbUJjOXppY2VNMmJhVytFMmxmUG53dWd2WHNlR1NMN3d6b0hOR2hpbVh5bEp1WmVYSWViM3E4N2JqUHVPNnZoN1dsWFVKdzllSDJqVWFJNkNyRWd0NW0xaFlaMmg5TC9OekMweE1yWkFNcTZLOXM0Rzg1VkVYa1dtSUc2YnRPTjVLc2JZN0ZPKytaM0srNkgzcTFqdDVPd2wraSs3K2krdFFORjBycldRdnN5M3oweEx1RnQvejYwekhSWkprRG8wdk1iVlFvS2Mxd2NhK1pxSWhuWExONXZpY0diUTJ4Vi90NzEvejQ4TlQxVnNpMGJxWHQxOSsrVWVYRmhhc2ozLzg0Nzg3RU1ETTJIL3dnMy84QjFhdFhoTlpXbG9hOFZ6M1VzZHhSblZONlQ3eXhsTGJnUk1Mc2Y2dXBMbGxVL2M4aUJuRE1GNDlQT3RrQ3pVZUc1OWU5Sk1OaWVkVHFkUzRwdW1YUzdKYytPNzN2dmUyc2Q3UjcwZm4rUi82OWVpRnlyUC8vUGtYTjQ0TXZmallJLzlwVkNxMVJEUmMvbVp6ZmVRUGxsWXErNFdrM2RpU1NzN1AyY25hbXVGVTRyYmJiODl2M2J4NXhEQkNzdS83eGV6eXNoMkpoSDlqTE9tMzQ1eXBTMjc0TWcxREgyRzIxbVNhMFVGZGl6WVBlWkpPeGFiL3lRUHAxSGQvOGtwMTgvWVBCQmVPamhhRkVJRWtTeWVFNEZITE5IOTBmTitydGNhbTV0L29YMzZISEdmby91OS9IMDFUMFNPeEcxMUp2LzdVOUN3cnhXcFlWZzN6K2JGRC8vWDNkOTNKSno5MWMyQjVMaFBIVHpndHJTMnZONmRTWTRNakk5YWRkMzM5Ti9wK1Z4OVcvNk9RWVpCUGw1QWtNU2tyVWlsczZERk5rUU5EVitlRUVOejZtVDhGUUpjVjFnME80ampPY2Qwd2tNUnZUOWwzbE5SbjA0dlBQa2NxMVJJNk5YSHkrbnUrOWEyZHArZG1qd3l1SDdpblVpa3YvZXp4WGIrclcvNGJYU1JlSEQzYUZEVUFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpFdE1ETXRNRGhVTURnNk5UWTZOREV0TURVNk1EQXVBUUxkQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ESXhMVEF6TFRBNFZEQTRPalUyT2pReExUQTFPakF3WDF5NllRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQzRqQUFBdUl3RjRwVDkyQUFBQUIzUkpUVVVINVFNSUNEa0c0YjBMbVFBQURFRkpSRUZVV01QTm1GdU1YdGRWZ0w5OU9kZC8vdHRjUEo3eCtDYmY0eVMxY3c5eFVOT1FSSkFRb29oS1FmRFlTbjFEU1BDQWhJU0VFRkpVbElKVUNLZ0ZLYXFRU3NNTGhiWXZpTFJwYWljMGlaMDRGem1PUFk0djQvRjQ1cDkvL3N1NW43MTRtTVEwTkNHQWVHQTluZHMrNjl0cnJiM1hXaHYrbjRuNm53NjQ3ZWhSc2l4REtXVkVwQ25RVVJDamxFSWtRYWtOQlFNblV2blc4c2JwMC8vM1FJOC8vampuejU5SGErMDc1dzZJeU9kRjVENWdIekFOUkI5K21nRnJ3UHRLcVJNS1hsQmF2eU1pdVZLSzAvOE51TThFT25Ma0NGcHJyeXJMWTA3a3l5SjhRWkF0Q3BRR0xJSWdILzVJVWFGd205Y0NyQ25GRDVWUzN6REcvRkJFaWpmZWVPTi9CM1Q3N2JlVHBpbSs3KzhUa2Q5eFRwNFNwQnRyWWNiVVRPbUt0bmEwclhCK0pBVEtNV2xoclZEMG5XYWtQZnJLSXhjRnFJRldQSTlTend5SHczZmE3VFluVDU3OFJMM21reDdlZmZmZG5EeDVrbTN6ODc4azhMY0NqemFNaW01cENnL093TUdnWkdma1dKalE3T2o2Sk03UTlXSG5CSVN1WnNKVkxIZ1Y4MTVOYUJXWnNrRWg2amF0MUVOaEdGNlluWjA5MisxMFdGcGErbXlnWDdqM1hzNmRPOGVoZ3djZkUvaHJVUHQzTlMyUGJiUGN0OFV5My9TeFdwaUlQQ2FiRVdFY3MxSVl0RFVzTkRVaUFpaGFzYUh0Sy9hMU5Qc25mY2JPMGkrWlVrbzlrS2JweGJtNXVYZTYzUzVYcmx6NWRKY2RPM2FNTkUyeDFqN2tuUHVtZ2gyM3o0WThzczNTTlk3QU43aTZaamhNQ0R4TnF4bmpSUkducnVXb1BHT2JYOUlmWlF6U2tpajBxQVU2clFhdFJzUklETis3a1BMS2NvNkRaYTNVVjRxeS9NY3dERGx4NHNUUEF6MzY2S1AwZWoyVVVnZWNjODg3a1Z2dW1BMzVyWnM3K0s2a0xFc0NhOERWdUxwbVlpSm1vaFZqUE12NXRSS1ZwMFRWbUZGYTRQa2VudWZobEtiVmFtQThqN3B5RE5PU2YzaC96QXVMQTVSU1o1VlN2NDdJbS9zUEhPQzU1NTREd0g0RU5CNlBhVFFhTmt2VDN4YWxiOW5UOFhqeThDVGRwaytXUUJnRitKNmh5bkk4ejlLWjZXQ3R3VlVWa3gwUHI5VFVDWVNOQnQydDAyalA0c1V4MnJOVWVVa3lTQWlianQrYzZySldYdUgwMG1pZjF1cDNQYy83OHVMaVl2NnhHSHI0b1llb3Fncm4zT2VCUDVvSWJQVEZReDMyVGtjb3dHaEZveG5UbW16aEJ3RnhNOFlQQXNUVklFSWp0RFJiTVZHelFYT3FTOXh1RWJTYnhQUGJDTm9kYkJoZ2ZBKy8wYURkbm1DdUhmSG1sUUZaNWZZb3BVNEI3KzNkczRmRnhjVk5DNGtJUVJqNlpWbCtDYVc2UjdjRTdKOE9LV3VIZG83QXR5Q0NjMEtqMDhJR0hncW9zNXlxTEJuV2hyalpwdVVwbkhNb3o4TzBPdWpXSk5RTzY0WEVVUk1FWEpseld4ang4TlV4ei8vMDBvUlM2a3RhNjM4QjBoc3VVMG9CM0dTTWViQnBGYmR2amJIR1lLeEdTWTBnMUE3eU5NY1BRMHhWVXhZbGlGREZMUzZ1MWJRVFRXZG5GMTFWcURCQ1RjK2p3aVpTRnFnc1FRYzExQTVURjFndjRBdEhkdkxqczJ0Y0grYjNhNjJQSUhJQ3dEenh4Qk5VVllYUitqZFE2c2s5SFk5N0ZtS3MwUVNCaHdaQTBGb2hBbVZSVWhVVjQ5R1lxcW9wdlFZclZVaHRBN1l0YkVFM08rREg0SWNRTk1DUEFJTlNHa1NRTWtlcW1vWVJ6aTF2Y0hFOWk0d3hGeEg1MGFGRGg3QWlRdHhvMkxJbzdsTUNjeE0rWWVnVHhRRldLMFFweEdtY0NOcGF5cnBHUElWNFBrUVJhNk9DMHJiQWFUTGJ4R3Mwa0hRRWFZSHlIV2lENUFVeTZpTlZTWjJNa0tva3kycW1HaUdlOVZDS2V6M1BDNERjYXExQnBHMnMzZWNoVE1ZV2dnQ0NnRFF2c2NaREt3VUl0ZEtVT0tyUzRYdVdVaFJYMW5POCtZRFJhRWd2RmRyTkNORUNXaUhqRWxjTUlSdFRKZ1hsT0tITWNyVExTZE9NZHVnVCtaYlN5VzZsMUNSdzFScXRBVHBLWk1yWDRCbkZxSVE2ZDR4VGgyOGd0aG90TmE2c1VOWmlyUWZXSTAwcjNyK1dzWDlPTXhobExDNWVaVy9Rd0hrV25XZVV2VDdpU294MnJDLzNxRVJoZ29Bc2cvN3FnRUcyT1RHcFpVckJoMERHQUV4b2lEU09mcUhKdkFaSmtqRWNac1NCSmxVMWNXaXhZUU9VcHFncXh1T2N0TktjWCtxek1uNkxQRXRwdEx2ME5oTEtOQ1V5RGpjZTRzU1JselZYVjFLVUZxSzRwTDh4cGo4b3FCRUN6MUxoQXFWVUU4QWF1N2szaWdoV0cwYk9jdlpxUXFRSzhpVEZWUld0eU5CcFJYaXVJdHZZb0s0ZGE1bGxabm9DY1JYdnZMZEl1eG5qVE1CR1VqRmFXV2Q2cGtOZFFqRWNrWmMxbzFIQ3VLd29yOWNZbzhqU2xONHdRMm1EdGZwR3lyQjIwMEpqZ2N4cUNIek4xZDZRdktvcHlocXFrdGhXdERjS0d2NFFLVXVLb3VMeVVMRWxLVmxlMnlETkM0eFZuRCszU08wcUJ2MEJKbzVSenBDTk1rd2pwcWhMa3J6RWFzVWd6VEcrUmJRR3JiQ0tIQmh0QW0xYWFFT2dCeksvdkQ0bUdRNVpMUldlMmx6eW9UV00wcHlHSjJoeGpMS2F0UVRFYUZZMnh0UzF3MWpOeFl0WDhEMU5iNUJRSzBNenR1U3I2NWpobUVRVW95U2xQUkd3UGhpejBoOWh3d2hsWWl6MDJLdzBiN2lzTHlMbmdKdXpYR2lIc0pwVkdLdndsRkE3UldZdHZoTHlQR2VwbjlNZjVReVNsSTF4c3BsZVBNMGdTVGwvOFNyREpDV3JvZE9NTVZWQnVUcEFCUUhqdE5pTXpTUmhZNVFRaUNIc3RBQStRR1Fkd0hyVzRwd3JnZU1vOVd2T2o2alNJVDRsWmFVWlZZNUNLaVpDbjM1YVVSYzFnd3A2NDVTMVVVS1NGUmkxbVJXdnJ3L29EY2M0Z2N4cDFub2V4aG9pcldDVUUvZ2FvOENKbzY0cS9EREVXZ3NpcnlpbE1pZUMrZW1ycjNMM1BmZWd0YzYwMWs5cVkrTEx5NnVzRGNhc2psSld4d1ZGVlZNNng3V05oSlgxRFlyS3NUNFlVbFkxZVptanRGRFhOVWxXa0JjbFNacmhSQ2lLbkZGUkFjSmdsS0I5alJQSElDbkpxcHJXOUZZOHp4c29yZjlZYWYzQnM4OCt1NW5Mak5ZSXZLV1Vla0ZaKzhVNm1PRGF4aktlTlJRT2lySWtTUkltSTJHMkEwYlhkS3hITFpxYmJycVRvREhKQnhmZVozMzFHbGFYUkw0bThzWW9COE9SNGVvNFlHT1lvaTVYdE9JUW94WGRyZHNJb3dqZ2hCTjU3Y1lxQTlER29KWEtCYjZobEhwNFlXR2hmWEhwS3IxZUQ2TVZpTkNLZlc0L3RKKzkrdytnamNGSWlhc3JPbk1IdUQ3SThlT1FaSDJXYlZ1NmJKMmZweXhUTkhEOHhDdThkdVlTZzNFR0lxejJEVHNYNXBpYTNZcXhOaFdSdnpFd2RpTC9VUSs5L1BMTDNIZnNHRXFweTBiclBVRVFISTJqaU11WExyR2xvVGl5dTh2bmRrMXkrSTRIMkgzclBhejJlaHk2OVJERHBDQXZheFJDRkZpMjc5cEhzejNKNU53Q00zTTd5Q1Znd2xkMFRKOVdhRWp6a25IaE9IenI1NWlhbWtiQmQ1WFdYMVZhbDg4ODg4ekhLMFpyREFJRjhEWGdXS2ZkM0xkanRzdWVqcy9OZHg1ajM0RUR6RzdkeHRMYU9uZmVjUnM3dHM4dzI5U2tneUh2WGVnejJaakVVeFkvaXVoT1RSRTNJbmJ0MmsxMmFDL3VrY2Q0OS9VVGZPZnZ2MDE3dXNXV21SbTBVcGZGbUQ4RnhwdTU4ajkxSFMvOTVDZmNkZGVkTEY5ZFdZbWk2UEsxeStjZm1Bbkx4aU8vK2hUdlhyN08rc1lhdFRaODk1KytSeGhGS0JGT0hIK1o0WGpNajE1NmphSXN1SERsQ2x0Mzd1RDh4UXVJOFhqcCtIRk9ubjZidDg2OHo4THUvY3hQdCtsZFc2UTIwWG9VTjMvLzRFMEgvM24xK2lwUFAvMzBEYUFiRmdJNDhlcHhuRGp2N0FkblYwS3BMOXk1YitlV200N2VqV3JQOEJmUC9BbCs5Q0lIOSszbDMzNzhyN3g3dXNVSGl4ZUp2SURPekZidSs4WDcrZXJYL2h3ZEdLNWR2Y3laemd4bnpwem4zcnZ1b0RjWWNQU3UrN2dZaDV4OC9TUkx5MWRlUEhOaDhkVlhUaDNYdmczZHp6TG9uNzBSSjFqcmxhOHN4U2RNdHZvdFh4VnVNT3l6TURkTFhRblhyNjFDTnFJVnhTeWR1OEJvdFE5VmpTNExWSkV5TjlGay9jcGxPaE50Um12WDJUcmQ1ZWlSUXl4TXQvR05Jc2t5QWwxc0pMMmxyeDlmZlBEMC9OWjVGd2JCcC9kbEg4bXYzSDhMb3BpSlBmL1pBOXZubjl5K2Q3OTY4NTJ6eEthaUd6cDI3cjJGTEVrSWdwRFFEN2g0NmcybXBqdHMzWCtBU3l2TGJOazJ6M3R2djAxZTFldzVjSmlUYjUxbC8vWlozbnJqVkg1cHJmOW5TWjMrb1JhVmYvL0Z0MzlPOXljQy9kVzNmOEFMMy93RG5EOHhxd2RMZjFjby84SGFuNFIwUUNnNXZ1ZlJuWnJCazRyWU03UU5GRVhKaGlocUlLOFU2NzNybEJnUzhkQnhFeTlkUml2NWVqMXorUGRzdnBGOTUvc3ZmSkxxajhmUVIvS1ZwMzZaN2R0M2dPNmxkVG9xUE05eTRQQUNxdGtnUi9BOWoxNVdvMVJFb0R4Y2tsUGttdjVvVEx2YkJSSHM1RjZjY3hocjZhLzNlZS9NS2lpVFI5ZlBGWFUyNE5QRWZ0b0xFY2VPdWUzRGQ4Kzg4NWNtaUs1Zlc3bm1sVVVweXBqRVdydG1yUzNTSkZIR1duSE9LYTAzKy9weFhpaHhEdWNrRkhGZEVXbTZ1aTRyVEZJVjViZVd6NXgydTNidCtsU2cvL0o4YUc3SGJ1cTZwc2d5dlgxNlNubEJ3T3R2bnFyNURObTNaeitqOFlqUmFLUW1PMjB6R2cwbEZ5VmVHTGxHcTh2bHMyOS82dGgvQnhNekROQUJXdGVIQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESXhMVEF6TFRBNFZEQTRPalUzT2pBMkxUQTFPakF3Z0M1Wmx3QUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF5TVMwd015MHdPRlF3T0RvMU56b3dOaTB3TlRvd01QRno0U3NBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmNBQUFBWENBWUFBQURnS3RTZ0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURFMElEYzVMakUxTVRRNE1Td2dNakF4TXk4d015OHhNeTB4TWpvd09Ub3hOU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRFFqWXlOME00TlRjeVJUa3hNVVU0UWpjMU1rTTJRVVUyT0RRMU9VUTFOaUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBEUWpZeU4wTTROamN5UlRreE1VVTRRamMxTWtNMlFVVTJPRFExT1VRMU5pSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa05DTmpJM1F6Z3pOekpGT1RFeFJUaENOelV5UXpaQlJUWTRORFU1UkRVMklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rTkNOakkzUXpnME56SkZPVEV4UlRoQ056VXlRelpCUlRZNE5EVTVSRFUySWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K1dZYjZ1QUFBQWJOSlJFRlVlTnFzbFUwb1JGRVV4KyticHRTUXhiQ3dmbE8ra2lKRldFZ3BGaFpUSWh2RmtsSktzdk9kQlZJaUs4WktGSWtGVVpxVnNMQ3lJVTNXRmtoR05PWGpmK28vOVJydnpudnpaazc5dW5kbTd2ek9mYWQ3enpOTTAxUTJrUSs2UUR1b0FBYTRBMmRnRDd3bEY4WmlNYVVMdzBZK0R1WlR2dnRsZ21STWdVa251Uy9sOHpuRkQ2QVhGRk1xNjRKOG1sc3dBUzZCWDZVSnF6d0tXdm5IVXJBRG5pMi92NEo5VUEzR1FBTVRPTXBsY1FzZmQxbzV4d0lZQlhXaFVHZ3VYYzN6TUg2QlIyQ3F6RUpLVkFVS1VmdDN1NTMzY0Q2aU1vOWhqbjI2c29RNVAvRWdqM0lNNitSeWpuOUFRbm1MT0NqWHlRMlZmUmc2K1QxSHYwZHhBUjIyOGtQTzJ6eUltemtlNk9UYm5DOTdrSzl3M05MSlA5a255bmlaM01ZZ3FBRXpkbWM4dFhGZGdYcmV2Q1VIOFJCWUJTOFFGN25wTFUzZ0dpeUNHOURKMXB1TUFPZ0FGeFRMYm9PNC9tdHU1TjlzUnJPZ0ZoenhETWNwK2dESG9KR2Rzd1NzUzNtUVlOTnRQNWVRUiszbVRpc3RMNHRUc0F1ZUxHdEYzQThpS05HQUc3bnJrSmNGZC80dmdTOEh0MU5SR0pFRTFoTGxSRzZUWUVObGNlVzFDU0NXcVl5Qm5Nb3RDZVRrSmY0RUdBQTZrWE1yR0IwY3BnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFaQ0FZQUFBREU2WVZqQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5RnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREUwSURjNUxqRTFNVFE0TVN3Z01qQXhNeTh3TXk4eE15MHhNam93T1RveE5TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJQ2hYYVc1a2IzZHpLU0lnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBETUVORU9UYzFRamN5UlRreE1VVTRRamN3UlRoRVFrTTROVVZCTnpoRk5TSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERNRU5FT1RjMVF6Y3lSVGt4TVVVNFFqY3dSVGhFUWtNNE5VVkJOemhGTlNJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rTXdRMFE1TnpVNU56SkZPVEV4UlRoQ056QkZPRVJDUXpnMVJVRTNPRVUxSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tNd1EwUTVOelZCTnpKRk9URXhSVGhDTnpCRk9FUkNRemcxUlVFM09FVTFJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrN1ZOQk9nQUFBdjVKUkVGVWVOcWNsbnVJVEZFY3grK3NLYXpIR3ZFSG9zd3Mxci9JZW9VaXJSTEwwUDZCVFl2VXNubE5tMWRHUzBoRWkxV0tTU3VQdkl0bFltVkoyclR5ajVVMFlyRExlbTJiUnhIcjg2dmY2SFRkZS9keTZ0UHAvdTQ1NTN2TytUM3VEWVREWWN0SDZ3dVhvQSswUXdEYVlGWXFsWHJkMGVRc3kxK2JENE5nRWt6V3ZoY3M4VFBaU1dRQ1BJTE5oazEyM2dqTkJvL2hWMlpBSkJLSlFTTk02MGlrQU83QU5WZ1AxV3AvcHljeDIwQm9WWUZEZER2Z01pUjVudXNtTWgydXdrSllDK0tzbVhBTDlzSUptOGh4cUdEQld2cEZrSWQveXVsbnd4bFR5QlNwZ2QwNjJkSXJDY0V6dFZmWVJNUzJCZEl5RG9HVUdPa3UwcTBUb1Q5M2JVU1hMTEphVGc4dFBnUEMwclV0d3pjOTZKNURnbmN4c1FXTjkrTG9mdkFFY3VHRDlZOE5nZTQ2LzBaR3dNbnhTL1g0Q1ljMVJzTTV1QWtYWUtMRG1DcjRoa0NSYVpTVGRGVm5kOUZFQytzaVppdURTamdKNHVpaFVBY2JOS295N1NGRU9WR1podjEzT0NVK3FWZXhOaDJZaEozR3hIRndWNU93enJDUGd2c1M5dXc4YVZ6WktycEMzWEEzdVMwUmFkVW9hbmU1YXJtZUpsamdjajBqRWNuMzhGTmFmUElXZW52NE13ZHV1N3lUazNYMkVNaW1lNStsUmM4cmtyN0FHSmQzWStHSFIzaC9sVnNTWDd5RWU1a1NvVW01M3hnYjF5czdDQTJHUFE5V1NpVzI3VjRpZEk0K1NzNTg3aFFLaFU3cmtaczBmQ1dMZjZxekxVMHMyYTJNR3dDRG9SaU9TV1N4MnlwRG9OUW9RV2t0cXJHQXcvZWtRUXRpZ2MwK0JkWkFUOWtkSElBclpzWWpJaUUrQXRzd2U1NllUWFl4SEdZNFhIR3Q0dFdXdzFQRWppQzAyQ25qcGJRdlU1Rm02ejhhQzMvVStmTVEydVlrc2gzMndRdmJYTEdWdXF4YndtS1ZOcUVXOWV0R0o1R29ucVpRbnlWQjMwQytWdWh5bThBSzJDUEppTkFuNks5K21hcjJZaWVSODNKTXJWdHhqYXA2elFXcHFDVTJFZm0rYjJYbjR5VUE1QkFJYktLL0xtT3hWN3RWNGJQNmhaU0NlZGpJZ1J6Tko3TzlnbXk5SWlrNXUvUUxHZVU1NFJWZGxuN2ZjMjIyb0ZiZWtQRkxOQVFlR0w2STZ3MzgxWUkrQTBmaXYwZ3pQeU1pSmVPb244bS9CUmdBdVFybUdWbHpnWU1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQm9BQUFBYUNBWUFBQUNwU2t6T0FBQUdBa2xFUVZSSWlhMlZlMnhYWnhuSFArOTd6dS9TKzQzUzBnSnRhWkZMcGNXTnRuUjBZNUFpTUZnY2kwNVp3aFlKN2crbjBXUW1yaWFLVXdPTGwrbTJSSTF6S201Um5IT2JsbUZIV0MrNmxXNWdaQlFjUXNjb0c5MmtsUFozUDVmZk9ZOS8vUG9yWU55VVpkL2tKT2Q5ODMyZnozbWU4eng1MVpMV0J3RVFFWlJTNU9lSENBWTBPZUVBaHFHeG5YU0xZM3ViYkNlOXluRzloblRhTHhVUmdrRnpzaUEvTkRLdnFtaHcwY0x5NTlmZFhQOUtXVmt1Rnk0a0tDb01zNkMyQk5NMDhEd2ZBUFdmb0lLQ01Ea2hnN1FublltRTNaVk1wZGVtUFI4RkdJYkdNQlFBNmJSUHluS3hyRFJtUU5POGRNN0FsczFMZDYxZis1RURTa0Z4VVloZ01EQURNc3FyTzhsS2EwMG9aSkpLdVQrZWlsaVAyRTY2empBMHBxa3hESTNXNmdxdkloUTB5YzhMRVF3WXZINTZ2UGFGdnRQYkppNGxxOWV0YWVpZVZWNkNhOXZJdFA5eVJvQ2hWUURvZDEzdkJxMFZTbDBPL0wra3RjS3kwcnh4Wm9LMXErdGYzZi9VOXRXaGNOaUtSaUpvcmRGWm93SjhYMTd5UFA4R3c5RFhCQ0Z6bGxESVlPbVNDbnI3UmxxM2JOc3pDQjc1K2JuNHZxQUs1bmFobEVMQll3STdyaW42ZjVGU29KUmlhdlJ0N3R5KzV0ZFBQTGJ0YnRleFVKKzYrMWVJNzdlbGZSbTZ0aHplRDZaSVdTNFRseEw4OUtIYmJscStiUDVmbFlnRHlHRjhXZkVoY1RMU0d0dHlpY1h0NCtHUXVVelpWcUpSd1hHbE5CSU16L2pFVG9INEJNTjUyUjFBSVo2TjBncFVjTWJyV0VtMFZwakJuSXpUczNIZE5JWmg0TGdlbnVlM21JN2piVVVia0k0aXJ6OUxnWE1DS2xhU0xGdFBicDV3b1BjRUV4TkptaG9yR1JoOGs2MjNOMUZTV3NTZTN3eHgrTWdvemMzVmJMdmpPb0xCQVB2Ky9CclJtTTBuYmxtQ1lSbzRscHY5bHEzRW90SCtXQ3d1c1hoVWt1ZGZsWUd2ZDBqOEFVUmtWTVlUSWhqM3l1ZSsrRnY1eWM4SEJPNlI0ZU9qY3MrWDlrcmxvcDNTdk9yN3NtYnpveUlpTW56aW5NQU93YnhYamcyUGlvaElMQnJOUG9jMDBJQjQ0RU5PVlFzOWM1L210ajNOd0NtNkQ3d05uczBEWFoyY2ZXdUtscldMU1NSdGZ2WndEeXVhcXpuNjBuMzBkbjhCZ085OHI1ZmltZ3JLYTBzNWN2Ujhwb1F5VTkxYURSUm5wZ2pBWjN1bjR1REZXM242U1pzLzdPM2hwazNMbVRObkZpLzBucWE4TEkrMmxvWHMzSFVIKzU0YnBxbjFRZDU5ZDVMeDhVdjg3dGxqOVAxcEI1MnJHempRZHhySXRQcTBDazB1VTNBZGk0WUZwV3hZdjRBZE80OWl4NmM0K0Z4bXRFNmVHcWZ0K3JrQWZMTnJJNSs1ZlJsTEZuK0RybS90cDcyMUJpSXBIbi9pTUVOSDNxSjJYakhnRWc2YldGWTYwNFRBVkJaa1dSNWdjbU5iRlpFemc5VFZ6bUpWK3lJR2gwNWgvZXNzSzFmTTU5dmY3YUZqd3lQcy90RUF4VFhWaEVJQnZueC9OeXM3RnhHSmU1U1Y1TkRYYzVKancrY3hBem5aMERFVEdBR3FzcWs2anNPV3pZMU1qdDNGeGx1YjhIMFB3OUI4cGV2VHJMdTVnVU9IenpIdzhobWlNWnQ5ZSs5aVZta3V5dk81Lzc0MTFOUlVNRFoya2QwUDlZRlNPTTVNMTQycVdEUzZDK2pLN3ZpK1QyRlJMaEFBSUJxSlVKQWZSaGtoZk05Q0c2RXJxdzI0MDk0MDhXaVMvTUljSUVEYVRaRk1PbWl0QVI1V3NVaWtDVFA4R29FZ3lCWG5GZSs1VmpyelB0TlY3K1ZWZ0EvNDNrb1ZpOGNnT2Y1MzVYdkxKVmdJNHZHaFNDbndYRUQraVJGZXJLS2VvTjhjYURlN053eEt6bXdJNUY0MUFCOFk0bnRnVHlMek9qdWxxT0ZGVTZWUytQV3JEL2tMNy95bEh2ekZaNld5NE9veWZCQnBBelU1aGN5dWUwcUs2bC9FVGFCaWtTa0k1eU9HUWVEMzYvNm1SZzVlSjdQblQ4T3VsWmhwRWhVOWgxL1o4Zzl2OVE4YWxjb0ZONDZLUmFQZyswaGhFVGhPT1BETStyK29rZjRXS1NzSE0rLy8vMmRLZytkQTRoM0lyVHptM2ZKTWgxL2JIbE9XRHlwN2xXdU5pa1loRUxUU24reHI5ZG8rLzdpS2phT216b0x2VHJmWisyUWhIaVRHSUhVQnFkdjBwSC85VnorR0VZd3BHM0FUNEdRenloN3dQUWdYSUNHTlBybHZvejc2dzYrcGQxN3VVSTZOQkFNUUtnRmorczd5YlhCaXFIUVNNZk9RMHNaWFpPNmEzVlRkK0VjaWJ5REZDNUhhaldESE10R3ZBaUhnMllBZ2VlVmd4VEZHOTNlbzgvMmJtVHpacmhKamRianhJa0FSeUkxSXVPd3NoZlZEVXJyMGVTbjlhTDlTUU9vaUpNYVFpbGFrNXVNem9IOERhV3U4K2lhMTNOQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgY29uc3QgUHJvZHVjdDMgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGFycm93czpmYWxzZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuZXhwb3J0IGNvbnN0IHRvb2xzX3Byb2R1Y3RfNCA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3Q0ID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGFycm93czpmYWxzZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0NyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzoyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0NSA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0NiA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgYXJyb3dzOmZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OjIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBUZWFtNCA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA1ODYsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXIyID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXIzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcbmV4cG9ydCBjb25zdCBTbGlkZXI0ID0ge1xyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA1ODYsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcbmV4cG9ydCBjb25zdCBTbGlkZXI1ID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzNjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlcjYgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA2LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlcjcgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA3LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZVVwRG93biA9IGZ1bmN0aW9uKGNsYXNzbmFtZXMpIHtcclxuICAgICAgICB2YXIgYWNjb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrY2xhc3NuYW1lcytcIiBoNFwiKTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYWNjb3JkcywgZnVuY3Rpb24oZWxlbXQpIHtcclxuICAgICAgICAgICAgZWxlbXQuaW5uZXJIVE1MICs9ICc8c3BhbiBjbGFzcz1cImFjY29yZGluZy1tZW51XCI+PC9zcGFuPic7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdmFyIGFuY2hvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzbmFtZXMpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhbmNob3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSBhbmNob3JzW2ldO1xyXG4gICAgICAgICAgICBhbmNob3Iub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjbGFzc25hbWVzKTtcclxuICAgICAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbGVtcywgZnVuY3Rpb24oZWxlbXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW10Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gYGhlaWdodCwgbWFyZ2luLCBwYWRkaW5nYFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc1MDBtcydcclxuICAgICAgICAgICAgICAgICAgICBlbC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdUb3AgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5tYXJnaW5Ub3AgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUubWFyZ2luQm90dG9tID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5JylcclxuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNTAwbXMnXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gYGhlaWdodCwgbWFyZ2luLCBwYWRkaW5nYFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMG1zJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSBkaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luQm90dG9tID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBgaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNTAwbXMnXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJylcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIitjbGFzc25hbWVzKTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIGZ1bmN0aW9uKGVsZW10KSB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGVsZW10Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgZWwuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcclxuICAgICAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG4vLyBTVkcgSWNvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdGcmVlU2hpcHBpbmcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgLTExNyA2NzkuOTk4OTIgNjc5XCI+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTEyLjM0NzY1NiAzNzguMzgyODEyaDM3LjM5MDYyNWM0LjM3MTA5NCAzNy43MTQ4NDQgMzYuMzE2NDA3IDY2LjE2NDA2MyA3NC4yNzczNDQgNjYuMTY0MDYzIDM3Ljk2ODc1IDAgNjkuOTA2MjUtMjguNDQ5MjE5IDc0LjI4MTI1LTY2LjE2NDA2M2gyNDEuNzg5MDYzYzQuMzgyODEyIDM3LjcxNDg0NCAzNi4zMTY0MDYgNjYuMTY0MDYzIDc0LjI3NzM0MyA2Ni4xNjQwNjMgMzcuOTY4NzUgMCA2OS45MDIzNDQtMjguNDQ5MjE5IDc0LjI4NTE1Ny02Ni4xNjQwNjNoNzguODkwNjI0YzYuODgyODEzIDAgMTIuNDYwOTM4LTUuNTc4MTI0IDEyLjQ2MDkzOC0xMi40NjA5Mzd2LTM1Mi45NTcwMzFjMC02Ljg4MjgxMy01LjU3ODEyNS0xMi40NjQ4NDQtMTIuNDYwOTM4LTEyLjQ2NDg0NGgtNDMyLjQ3NjU2MmMtNi44NzUgMC0xMi40NTcwMzEgNS41ODIwMzEtMTIuNDU3MDMxIDEyLjQ2NDg0NHY2OS45MTQwNjJoLTEwNS41NzAzMTNjLTQuMDc0MjE4LjAxMTcxOS03Ljg5MDYyNSAyLjAwNzgxMy0xMC4yMTg3NSA1LjM2MzI4MmwtNjguMTcxODc1IDk3LjU4MjAzMS0yNi42Njc5NjkgMzcuMzkwNjI1LTkuNzIyNjU2IDEzLjgzNTkzN2MtMS40NTcwMzEgMi4wODIwMzEtMi4yNDIxODcyIDQuNTU4NTk0LTIuMjQ5OTk5NzUgNy4xMDE1NjN2MTIxLjM5ODQzN2MtLjA5NzY1NjI1IDMuMzQzNzUgMS4xNTYyNDk3NSA2LjU4OTg0NCAzLjQ3NjU2Mjc1IDkuMDAzOTA3IDIuMzIwMzEyIDIuNDE3OTY4IDUuNTE5NTMxIDMuNzk2ODc0IDguODY3MTg3IDMuODI4MTI0em0xMTEuNDE3OTY5IDM3LjM4NjcxOWMtMjcuNTI3MzQ0IDAtNDkuODUxNTYzLTIyLjMyMDMxMi00OS44NTE1NjMtNDkuODQ3NjU2IDAtMjcuNTM1MTU2IDIyLjMyNDIxOS00OS44NTU0NjkgNDkuODUxNTYzLTQ5Ljg1NTQ2OSAyNy41MzUxNTYgMCA0OS44NTU0NjkgMjIuMzIwMzEzIDQ5Ljg1NTQ2OSA0OS44NTU0NjkgMCAyNy42MzI4MTMtMjIuMjE4NzUgNTAuMTMyODEzLTQ5Ljg1NTQ2OSA1MC40NzI2NTZ6bTM5MC4zNDc2NTYgMGMtMjcuNTMxMjUgMC00OS44NTU0NjktMjIuMzIwMzEyLTQ5Ljg1NTQ2OS00OS44NDc2NTYgMC0yNy41MzUxNTYgMjIuMzI0MjE5LTQ5Ljg1NTQ2OSA0OS44NTU0NjktNDkuODU1NDY5IDI3LjUzOTA2MyAwIDQ5Ljg1NTQ2OSAyMi4zMjAzMTMgNDkuODU1NDY5IDQ5Ljg1NTQ2OS4wMDM5MDYgMjcuNjMyODEzLTIyLjIxODc1IDUwLjEzMjgxMy00OS44NTU0NjkgNTAuNDcyNjU2em0xNDAuNzEwOTM4LTM5MC4zNDM3NXYyMjMuMzQzNzVoLTMzOC4zNzVjLTYuODgyODEzIDAtMTIuNDY0ODQ0IDUuNTc4MTI1LTEyLjQ2NDg0NCAxMi40NjA5MzggMCA2Ljg4MjgxMiA1LjU4MjAzMSAxMi40NjQ4NDMgMTIuNDY0ODQ0IDEyLjQ2NDg0M2gzMzguMzc1djc5Ljc2MTcxOWgtNjYuNDIxODc1Yy00LjM4MjgxMy0zNy43MTA5MzctMzYuMzIwMzEzLTY2LjE1NjI1LTc0LjI4OTA2My02Ni4xNTYyNS0zNy45NjA5MzcgMC02OS44OTg0MzcgMjguNDQ1MzEzLTc0LjI3NzM0MyA2Ni4xNTYyNWgtMTkyLjMwODU5NHYtMjcxLjMyNDIxOWg4OS45ODA0NjhjNi44ODI4MTMgMCAxMi40NjQ4NDQtNS41ODIwMzEgMTIuNDY0ODQ0LTEyLjQ2NDg0MyAwLTYuODgyODEzLTUuNTgyMDMxLTEyLjQ2NDg0NC0xMi40NjQ4NDQtMTIuNDY0ODQ0aC04OS45ODA0Njh2LTMxLjc3NzM0NHptLTUzMS4zMDQ2ODggODIuMzgyODEzaDk5LjcwMzEyNXYyNDUuNjQ4NDM3aC0yNC45MjU3ODFjLTQuMzc1LTM3LjcxMDkzNy0zNi4zMTI1LTY2LjE1NjI1LTc0LjI4MTI1LTY2LjE1NjI1LTM3Ljk2MDkzNyAwLTY5LjkwNjI1IDI4LjQ0NTMxMy03NC4yNzczNDQgNjYuMTU2MjVoLTI0LjkyOTY4N3YtMTA1LjMxNjQwNmwzLjczODI4MS01LjM1OTM3NWgxNTIuMDU0Njg3YzYuODgyODEzIDAgMTIuNDYwOTM4LTUuNTc0MjE5IDEyLjQ2MDkzOC0xMi40NTcwMzF2LTkyLjIyNjU2M2MwLTYuODgyODEyLTUuNTc4MTI1LTEyLjQ2NDg0NC0xMi40NjA5MzgtMTIuNDY0ODQ0aC02OS43OTY4NzR6bS0zMC4xNjAxNTYgNDNoNzQuNzc3MzQ0djY3LjI5Njg3NWgtMTIyLjI2NTYyNXptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPic7XHJcbmV4cG9ydCBjb25zdCBzdmdzZXJ2aWNlID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0ODAgNDgwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIj5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDcyLDQzMmgtMjRWMjgwYy0wLjAwMy00LjQxOC0zLjU4OC03Ljk5Ny04LjAwNi03Ljk5NGMtMi42MDcsMC4wMDItNS4wNSwxLjI3NC02LjU0NiwzLjQxbC0xMTIsMTYwICAgICBjLTIuNTMyLDMuNjIxLTEuNjQ5LDguNjA5LDEuOTcyLDExLjE0YzEuMzQzLDAuOTM5LDIuOTQxLDEuNDQzLDQuNTgsMS40NDRoMTA0djI0YzAsNC40MTgsMy41ODIsOCw4LDhzOC0zLjU4Miw4LTh2LTI0aDI0ICAgICBjNC40MTgsMCw4LTMuNTgyLDgtOFM0NzYuNDE4LDQzMiw0NzIsNDMyeiBNNDMyLDQzMmgtODguNjRMNDMyLDMwNS4zNzZWNDMyelwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzI4LDQ2NGgtOTQuNzEybDg4LjA1Ni0xMDMuNjg4YzAuMi0wLjIzOCwwLjM4Ny0wLjQ4NiwwLjU2LTAuNzQ0YzE2LjU2Ni0yNC41MTgsMTEuMDQ4LTU3LjcxMy0xMi41Ni03NS41NTIgICAgIGMtMjguNzA1LTIwLjYyNS02OC42OTUtMTQuMDc0LTg5LjMxOSwxNC42MzFDMjEyLjIwNCwzMDkuNTMyLDIwNy45OTgsMzIyLjU5NywyMDgsMzM2YzAsNC40MTgsMy41ODIsOCw4LDhzOC0zLjU4Miw4LTggICAgIGMtMC4wMDMtMjYuNTEsMjEuNDg2LTQ4LjAwMiw0Ny45OTUtNDguMDA1YzEwLjA0OC0wLjAwMSwxOS44NDMsMy4xNTEsMjguMDA1LDkuMDEzYzE2LjUzNywxMi42NzEsMjAuMzg4LDM2LjAwNyw4LjgsNTMuMzIgICAgIGwtOTguODk2LDExNi40OTZjLTIuODU5LDMuMzY5LTIuNDQ1LDguNDE3LDAuOTI0LDExLjI3NmMxLjQ0NSwxLjIyNiwzLjI3NywxLjg5OSw1LjE3MiwxLjloMTEyYzQuNDE4LDAsOC0zLjU4Miw4LTggICAgIFMzMzIuNDE4LDQ2NCwzMjgsNDY0elwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjE2LjE3Niw0MjQuMTUyYzAuMTY3LTQuNDE1LTMuMjc4LTguMTI5LTcuNjkzLTguMjk2Yy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMCAgICAgQzEwNC4xMSw0MTEuOTgyLDIwLjM0MSwzMjguMzYzLDE2LjI4LDIyNEg0OGM0LjQxOCwwLDgtMy41ODIsOC04cy0zLjU4Mi04LTgtOEgxNi4yOEMyMC4yODMsMTAzLjgyMSwxMDMuODIsMjAuMjg3LDIwOCwxNi4yODggICAgIFY0MGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04VjE2LjI4OGMxMDIuNzU0LDMuOTc0LDE4NS42ODYsODUuMzQsMTkxLjYxNiwxODhsLTMxLjItMzEuMiAgICAgYy0zLjE3OC0zLjA3LTguMjQyLTIuOTgyLTExLjMxMiwwLjE5NmMtMi45OTQsMy4xLTIuOTk0LDguMDE1LDAsMTEuMTE2bDQ0LjY1Niw0NC42NTZjMC44NDEsMS4wMTgsMS45MjUsMS44MDcsMy4xNTIsMi4yOTYgICAgIGMwLjMxMywwLjA5NCwwLjYzMSwwLjE3MiwwLjk1MiwwLjIzMmMwLjU0OSwwLjE5OCwxLjExNywwLjMzNSwxLjY5NiwwLjQwOGMwLjA4LDAsMC4xNTIsMCwwLjIzMiwwYzAuMDgsMCwwLjE1MiwwLDAuMjI0LDAgICAgIGMwLjYwOS0wLjA0NiwxLjIxMS0wLjE2NCwxLjc5Mi0wLjM1MmMwLjMyOS0wLjA0LDAuNjU1LTAuMTAxLDAuOTc2LTAuMTg0YzEuMDgzLTAuMzg1LDIuMDY5LTEuMDAyLDIuODg4LTEuODA4bDQ1LjI2NC00NS4yNDggICAgIGMzLjA2OS0zLjE3OCwyLjk4Mi04LjI0Mi0wLjE5Ni0xMS4zMTJjLTMuMS0yLjk5NC04LjAxNS0yLjk5NC0xMS4xMTYsMGwtMzEuOTc2LDMxLjk1MiAgICAgQzQyNS45MzMsOTAuMzcsMzMxLjM4LDAuMjgxLDIxNi41NjgsMC4xMTJDMjE2LjM2OCwwLjEwNCwyMTYuMiwwLDIxNiwwcy0wLjM2OCwwLjEwNC0wLjU2OCwwLjExMiAgICAgQzk2LjU4MiwwLjI3NSwwLjI3NSw5Ni41ODIsMC4xMTIsMjE1LjQzMkMwLjExMiwyMTUuNjMyLDAsMjE1LjgsMCwyMTZzMC4xMDQsMC4zNjgsMC4xMTIsMC41NjggICAgIGMwLjE5OSwxMTUuOTE3LDkxLjkzOSwyMTAuOTcsMjA3Ljc3NiwyMTUuMjhoMC4yOTZDMjEyLjQ4Myw0MzEuODQ3LDIxNi4wMTMsNDI4LjQ0OCwyMTYuMTc2LDQyNC4xNTJ6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMjMuNDgsMTA4LjUyYy0zLjEyNC0zLjEyMy04LjE4OC0zLjEyMy0xMS4zMTIsMEwyMjYuMiwxOTQuNDhjLTYuNDk1LTIuODk2LTEzLjkxNC0yLjg5Ni0yMC40MDgsMGwtNDAuNzA0LTQwLjcwNCAgICAgYy0zLjE3OC0zLjA2OS04LjI0My0yLjk4MS0xMS4zMTIsMC4xOTdjLTIuOTk0LDMuMS0yLjk5NCw4LjAxNSwwLDExLjExNWw0MC42MjQsNDAuNjI0Yy01LjcwNCwxMS45NC0wLjY0OCwyNi4yNDQsMTEuMjkzLDMxLjk0NyAgICAgYzkuMTY1LDQuMzc4LDIwLjA5NSwyLjUwMSwyNy4yNzUtNC42ODNjNy4yMTktNy4xNTgsOS4wNzgtMTguMTE4LDQuNjI0LTI3LjI1Nmw4NS44ODgtODUuODg4ICAgICBDMzI2LjYwMywxMTYuNzA4LDMyNi42MDMsMTExLjY0NCwzMjMuNDgsMTA4LjUyeiBNMjIxLjY1OCwyMjEuNjU0Yy0wLjAwMSwwLjAwMS0wLjAwMSwwLjAwMS0wLjAwMiwwLjAwMiAgICAgYy0zLjE2NCwzLjAyNS04LjE0OCwzLjAyNS0xMS4zMTIsMGMtMy4xMjUtMy4xMjQtMy4xMjUtOC4xODktMC4wMDItMTEuMzE0YzMuMTI0LTMuMTI1LDguMTg5LTMuMTI1LDExLjMxNC0wLjAwMiAgICAgQzIyNC43ODEsMjEzLjQ2NCwyMjQuNzgxLDIxOC41MywyMjEuNjU4LDIyMS42NTR6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN2Z29mZmVyID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIC0xNCA1MTIuMDAwMDEgNTEyXCI+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTEzNi45NjQ4NDQgMzA4LjIzNDM3NWM0Ljc4MTI1LTIuNzU3ODEzIDYuNDE3OTY4LTguODc4OTA2IDMuNjYwMTU2LTEzLjY2MDE1Ni0yLjc2MTcxOS00Ljc3NzM0NC04Ljg3ODkwNi02LjQxNzk2OS0xMy42NjAxNTYtMy42NjAxNTctNC43ODEyNSAyLjc2MTcxOS02LjQyMTg3NSA4Ljg4MjgxMy0zLjY2MDE1NiAxMy42NjAxNTcgMi43NTc4MTIgNC43ODEyNSA4Ljg3ODkwNiA2LjQyMTg3NSAxMy42NjAxNTYgMy42NjAxNTZ6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtOTUuOTg0Mzc1IDM3Ny4yNTM5MDYgNTAuMzU5Mzc1IDg3LjIzMDQ2OWMxMC44NjcxODggMTguODQzNzUgMzUuMzEyNSAyNS44MjAzMTMgNTQuNjQ0NTMxIDE0LjY0NDUzMSAxOS4xMjg5MDctMTEuMDU0Njg3IDI1LjcwMzEyNS0zNS40OTYwOTQgMTQuNjM2NzE5LTU0LjY0MDYyNWwtMzAtNTEuOTY4NzUgMjUuOTgwNDY5LTE1YzQuNzgxMjUtMi43NjU2MjUgNi40MjE4NzUtOC44Nzg5MDYgMy42NjAxNTYtMTMuNjYwMTU2bC0xMy4wMDM5MDYtMjIuNTIzNDM3YzEuNTUwNzgxLS4zMDA3ODIgMTEuNzQ2MDkzLTIuMzAwNzgyIDE5MS41MzkwNjItMzcuNTcwMzEzIDIyLjIyNjU2My0xLjIwNzAzMSAzNS41NDI5NjktMjUuNTE1NjI1IDI0LjMxNjQwNy00NC45NDkyMTlsLTMzLjIzNDM3Ni01Ny41NjI1IDIxLjIzODI4Mi0zMi4xNjc5NjhjMi4wODU5MzctMy4xNjQwNjMgMi4yMTA5MzctNy4yMzA0NjkuMzE2NDA2LTEwLjUxMTcxOWwtMjAtMzQuNjQwNjI1Yy0xLjg5NDUzMS0zLjI4MTI1LTUuNDkyMTg4LTUuMjAzMTI1LTkuMjYxNzE5LTQuOTgwNDY5bC0zOC40NzI2NTYgMi4zMDg1OTQtMzYuODk0NTMxLTYzLjkwNjI1Yy01LjM0Mzc1LTkuMjU3ODEzLTE0LjkxNzk2OS0xNC44NjMyODEtMjUuNjA1NDY5LTE0Ljk5NjA5NC0uMTI4OTA2LS4wMDM5MDYtLjI1MzkwNi0uMDAzOTA2LS4zODI4MTMtLjAwMzkwNi0xMC4zMjgxMjQgMC0xOS43MDMxMjQgNS4xNDA2MjUtMjUuMjU3ODEyIDEzLjgzMjAzMWwtMTMwLjYzMjgxMiAxNjYuNDE0MDYyLTg0LjkyNTc4MiA0OS4wMzEyNWMtMzMuNDAyMzQ0IDE5LjI3NzM0NC00NC45NzI2NTYgNjIuMTI4OTA3LTI1LjYyMTA5NCA5NS42MjEwOTQgMTcuNjc5Njg4IDMwLjYyNSA1NC45NTMxMjYgNDIuNjcxODc1IDg2LjYwMTU2MyAzMHptMTAyLjMyNDIxOSA1Ny4yMzgyODJjNS41MjM0MzcgOS41NTQ2ODcgMi4yNTM5MDYgMjEuNzgxMjUtNy4zMjgxMjUgMjcuMzE2NDA2LTkuNjEzMjgxIDUuNTU4NTk0LTIxLjg1NTQ2OSAyLjE0NDUzMS0yNy4zMTY0MDctNy4zMjAzMTNsLTUwLTg2LjYxMzI4MSAzNC42NDA2MjYtMjBjNTcuODY3MTg3IDEwMC4yNDIxODggNDkuMDc0MjE4IDg1LjAxMTcxOSA1MC4wMDM5MDYgODYuNjE3MTg4em0tMjIuNjgzNTk0LTc5LjI5Njg3Ni0xMC0xNy4zMjAzMTIgMTcuMzIwMzEyLTEwIDEwIDE3LjMyMDMxMnptMTk2LjU4MjAzMS0yMzUuOTEwMTU2IDEzLjgyMDMxMyAyMy45Mzc1LTEyLjMyNDIxOSAxOC42NjQwNjMtMjMuODIwMzEzLTQxLjI2MTcxOXptLTEwNC45MTc5NjktNzIuMTMyODEyYzIuNjgzNTk0LTQuMzkwNjI1IDYuOTQxNDA3LTQuODQzNzUgOC42Njc5NjktNC43OTY4NzUgMS43MDcwMzEuMDE5NTMxIDUuOTYwOTM4LjU1MDc4MSA4LjUyNzM0NCA0Ljk5NjA5M2wxMTYuMzEyNSAyMDEuNDY0ODQ0YzMuNzg5MDYzIDYuNTU4NTk0LS44MTY0MDYgMTQuODA0Njg4LTguNDE0MDYzIDE0Ljk5MjE4OC0xLjM2MzI4MS4wMzEyNS0xLjk5MjE4Ny4yNzczNDQtNS40ODQzNzQuOTI5Njg3bC0xMjMuMDM1MTU3LTIxMy4xMDU0NjljMi41ODIwMzEtMy4zMjAzMTIgMi45MTQwNjMtMy42NDA2MjQgMy40MjU3ODEtNC40ODA0Njh6bS0xNi43MzQzNzQgMjEuNDMzNTk0IDExNS41OTc2NTYgMjAwLjIyMjY1Ni0xNzQuNDYwOTM4IDM0LjIxODc1LTUzLjA0Njg3NS05MS44Nzg5MDZ6bS0yMjMuODUxNTYzIDI2OC42Njc5NjhjLTQuMzkwNjI1LTcuNTk3NjU2LTYuNzEwOTM3LTE2LjIyMjY1Ni02LjcxMDkzNy0yNC45NDkyMTggMC0xNy44MzU5MzggOS41ODU5MzctMzQuNDQ1MzEzIDI1LjAxMTcxOC00My4zNTE1NjNsNzcuOTQxNDA2LTQ1IDUwIDg2LjYwMTU2My03Ny45NDE0MDYgNDUuMDAzOTA2Yy0yMy44Nzg5MDYgMTMuNzgxMjUtNTQuNTE1NjI1IDUuNTcwMzEyLTY4LjMwMDc4MS0xOC4zMDQ2ODh6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTA1Ljk4NDM3NSAzMTQuNTc0MjE5Yy0yLjc2MTcxOS00Ljc4MTI1LTguODc4OTA2LTYuNDIxODc1LTEzLjY2MDE1Ni0zLjY2MDE1N2wtMTcuMzIwMzEzIDEwYy00Ljc3MzQzNyAyLjc1NzgxMy0xMC45MDIzNDQgMS4xMTMyODItMTMuNjYwMTU2LTMuNjYwMTU2LTIuNzYxNzE5LTQuNzgxMjUtOC44Nzg5MDYtNi40MjE4NzUtMTMuNjYwMTU2LTMuNjYwMTU2cy02LjQyMTg3NSA4Ljg3ODkwNi0zLjY2MDE1NiAxMy42NjAxNTZjOC4yMzA0NjggMTQuMjU3ODEzIDI2LjU4OTg0MyAxOS4yODUxNTYgNDAuOTgwNDY4IDEwLjk4MDQ2OWwxNy4zMjAzMTMtMTBjNC43ODEyNS0yLjc2MTcxOSA2LjQyMTg3NS04Ljg3NSAzLjY2MDE1Ni0xMy42NjAxNTZ6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDk3LjEzNjcxOSA0My43NDYwOTQtNTUuNzIyNjU3IDMxLjAwNzgxMmMtNC44MjQyMTggMi42ODc1LTYuNTYyNSA4Ljc3NzM0NC0zLjg3NSAxMy42MDE1NjMgMi42Nzk2ODggNC44MjAzMTIgOC43NjU2MjYgNi41NjY0MDYgMTMuNjAxNTYzIDMuODc1bDU1LjcxODc1LTMxLjAwNzgxM2M0LjgyODEyNS0yLjY4NzUgNi41NjI1LTguNzc3MzQ0IDMuODc1LTEzLjYwMTU2Mi0yLjY4MzU5NC00LjgyODEyNS04Ljc3MzQzNy02LjU2MjUtMTMuNTk3NjU2LTMuODc1em0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTQ5MS4yOTI5NjkgMTQ3LjMxNjQwNi0zOC42MzY3MTktMTAuMzUxNTYyYy01LjMzNTkzOC0xLjQyOTY4OC0xMC44MjAzMTIgMS43MzQzNzUtMTIuMjUgNy4wNzAzMTItMS40Mjk2ODggNS4zMzU5MzggMS43MzgyODEgMTAuODE2NDA2IDcuMDc0MjE5IDEyLjI0NjA5NGwzOC42NDA2MjUgMTAuMzUxNTYyYzUuMzY3MTg3IDEuNDQxNDA3IDEwLjgyNDIxOC0xLjc3MzQzNyAxMi4yNDYwOTQtNy4wNzAzMTIgMS40Mjk2ODctNS4zMzU5MzgtMS43MzgyODItMTAuODIwMzEyLTcuMDc0MjE5LTEyLjI0NjA5NHptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0zOTQuMTk5MjE5IDcuNDE0MDYyLTEwLjM2MzI4MSAzOC42NDA2MjZjLTEuNDI5Njg4IDUuMzM1OTM3IDEuNzM0Mzc0IDEwLjgxNjQwNiA3LjA3MDMxMiAxMi4yNSA1LjMzMjAzMSAxLjQyNTc4MSAxMC44MTY0MDYtMS43MzA0NjkgMTIuMjUtNy4wNzAzMTNsMTAuMzU5Mzc1LTM4LjY0MDYyNWMxLjQyOTY4Ny01LjMzNTkzOC0xLjczNDM3NS0xMC44MjAzMTItNy4wNzAzMTMtMTIuMjUtNS4zMzIwMzEtMS40Mjk2ODgtMTAuODE2NDA2IDEuNzM0Mzc1LTEyLjI0NjA5MyA3LjA3MDMxMnptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPic7XHJcbmV4cG9ydCBjb25zdCBzdmdwYXltZW50ID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCI+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDk4LjQwOSwxNzUuNzA2TDMzNi4yODMsMTMuNTgyYy04Ljc1Mi04Ljc1MS0yMC40MjMtMTMuNTcxLTMyLjg2NS0xMy41NzFjLTEyLjQ0MSwwLTI0LjExMyw0LjgxOC0zMi44NjUsMTMuNTY5ICAgICBMMTMuNTcxLDI3MC41NjNDNC44MiwyNzkuMzE1LDAsMjkwLjk4NSwwLDMwMy40MjdjMCwxMi40NDIsNC44MiwyNC4xMTQsMTMuNTcxLDMyLjg2NGwxOS45OTIsMTkuOTkyICAgICBjMC4wMDIsMC4wMDEsMC4wMDMsMC4wMDMsMC4wMDUsMC4wMDVjMC4wMDIsMC4wMDIsMC4wMDQsMC4wMDQsMC4wMDYsMC4wMDZsMTM0LjM2LDEzNC4zNkgxNDkuMzMgICAgIGMtNS44OSwwLTEwLjY2Niw0Ljc3NS0xMC42NjYsMTAuNjY2YzAsNS44OSw0Ljc3NiwxMC42NjYsMTAuNjY2LDEwLjY2Nmg1OS4xODljMC4wMTQsMCwwLjAyNywwLjAwMSwwLjA0MSwwLjAwMSAgICAgczAuMDI3LTAuMDAxLDAuMDQxLTAuMDAxbDE1NC4wNTMsMC4wMDJjNS44OSwwLDEwLjY2Ni00Ljc3NiwxMC42NjYtMTAuNjY2YzAtNS44OTEtNC43NzYtMTAuNjY2LTEwLjY2Ni0xMC42NjZsLTExMy40NjQtMC4wMDIgICAgIEw0OTguNDEsMjQxLjQzNEM1MTYuNTMsMjIzLjMxMiw1MTYuNTMsMTkzLjgyNiw0OTguNDA5LDE3NS43MDZ6IE00ODMuMzI1LDIyNi4zNUwyMjYuMzQxLDQ4My4zMzQgICAgIGMtNC43MTMsNC43MTItMTEuMDEzLDcuMzEtMTcuNzQyLDcuMzJoLTAuMDgxYy02LjcyNy0wLjAxMS0xMy4wMjUtMi42MDgtMTcuNzM2LTcuMzJMNTYuMTk1LDM0OC43NDZMMzAyLjk5LDEwMS45NDkgICAgIGM0LjE2NS00LjE2NSw0LjE2NS0xMC45MTksMC0xNS4wODRjLTQuMTY2LTQuMTY1LTEwLjkxOC00LjE2NS0xNS4wODUsMC4wMDFMNDEuMTEsMzMzLjY2M2wtMTIuNDU2LTEyLjQ1NiAgICAgYy00LjcyMS00LjcyMS03LjMyMS0xMS4wMzUtNy4zMjEtMTcuNzc5YzAtNi43NDQsMi42LTEzLjA1OSw3LjMyMi0xNy43ODFMMjg1LjYzNywyOC42NjVjNC43MjItNC43MjEsMTEuMDM3LTcuMzIxLDE3Ljc4MS03LjMyMSAgICAgYzYuNzQ0LDAsMTMuMDU5LDIuNiwxNy43ODEsNy4zMjJsNTcuNzAzLDU3LjcwMmwtMjQ2Ljc5OCwyNDYuOGMtNC4xNjUsNC4xNjQtNC4xNjUsMTAuOTE4LDAsMTUuMDg1ICAgICBjMi4wODMsMi4wODIsNC44MTMsMy4xMjMsNy41NDIsMy4xMjNjMi43MjksMCw1LjQ1OS0xLjA0Miw3LjU0Mi0zLjEyNGwyNDYuNzk4LTI0Ni43OTlsODkuMzM5LDg5LjMzNiAgICAgQzQ5My4xMjgsMjAwLjU5Myw0OTMuMTI3LDIxNi41NDYsNDgzLjMyNSwyMjYuMzV6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjYyLjgwMSwzMDguMDY0Yy00LjE2NS00LjE2NS0xMC45MTctNC4xNjQtMTUuMDg1LDBsLTgzLjkzNCw4My45MzNjLTQuMTY1LDQuMTY1LTQuMTY1LDEwLjkxOCwwLDE1LjA4NSAgICAgYzIuMDgzLDIuMDgzLDQuODEzLDMuMTI0LDcuNTQyLDMuMTI0YzIuNzI5LDAsNS40NTktMS4wNDIsNy41NDItMy4xMjRsODMuOTM0LTgzLjkzMyAgICAgQzI2Ni45NjYsMzE4Ljk4MiwyNjYuOTY2LDMxMi4yMjksMjYyLjgwMSwzMDguMDY0elwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyOC4zNzUsMzg3Ljc0MWwtMzQuNDI1LDM0LjQyNWMtNC4xNjUsNC4xNjUtNC4xNjUsMTAuOTE5LDAsMTUuMDg1YzIuMDgzLDIuMDgyLDQuODEzLDMuMTI0LDcuNTQyLDMuMTI0ICAgICBjMi43MzEsMCw1LjQ1OS0xLjA0Miw3LjU0Mi0zLjEyNGwzNC40MjUtMzQuNDI1YzQuMTY1LTQuMTY1LDQuMTY1LTEwLjkxOSwwLTE1LjA4NSAgICAgQzIzOS4yOTQsMzgzLjU3NSwyMzIuNTQzLDM4My41NzUsMjI4LjM3NSwzODcuNzQxelwiIGZpbGw9XCIjNzc0MEREXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI2MC4wNTQsMzU2LjA2NWwtNC41MjUsNC41MjRjLTQuMTY2LDQuMTY1LTQuMTY2LDEwLjkxOC0wLjAwMSwxNS4wODVjMi4wODIsMi4wODMsNC44MTMsMy4xMjUsNy41NDIsMy4xMjUgICAgIGMyLjcyOSwwLDUuNDU5LTEuMDQyLDcuNTQxLTMuMTI1bDQuNTI1LTQuNTI0YzQuMTY2LTQuMTY1LDQuMTY2LTEwLjkxOCwwLjAwMS0xNS4wODQgICAgIEMyNzAuOTc0LDM1MS45MDEsMjY0LjIxOSwzNTEuOSwyNjAuMDU0LDM1Ni4wNjV6XCIgZmlsbD1cIiM3NzQwRERcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDA3LjA3MywxNjMuNzkzYy0yLTItNC43MTMtMy4xMjQtNy41NDItMy4xMjRjLTIuODI5LDAtNS41NDEsMS4xMjQtNy41NDIsMy4xMjRsLTQ1LjI1NSw0NS4yNTQgICAgIGMtMiwyLjAwMS0zLjEyNCw0LjcxMy0zLjEyNCw3LjU0MnMxLjEyNCw1LjU0MiwzLjEyNCw3LjU0MmwzMC4xNywzMC4xNjdjMi4wODMsMi4wODMsNC44MTMsMy4xMjQsNy41NDIsMy4xMjQgICAgIGMyLjczMSwwLDUuNDU5LTEuMDQyLDcuNTQyLTMuMTI0bDQ1LjI1My00NS4yNTJjNC4xNjUtNC4xNjUsNC4xNjUtMTAuOTE5LDAtMTUuMDg0TDQwNy4wNzMsMTYzLjc5M3ogTTM4NC40NDUsMjMxLjY3MyAgICAgbC0xNS4wODUtMTUuMDg0bDMwLjE3LTMwLjE2OWwxNS4wODQsMTUuMDg1TDM4NC40NDUsMjMxLjY3M3pcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMjAuMzM5LDgwLjE4NmMyLjczMSwwLDUuNDYxLTEuMDQyLDcuNTQzLTMuMTI2bDQuNTI1LTQuNTI3YzQuMTY0LTQuMTY2LDQuMTYzLTEwLjkyLTAuMDAzLTE1LjA4NCAgICAgYy00LjE2NS00LjE2NC0xMC45Mi00LjE2My0xNS4wODQsMC4wMDNsLTQuNTI1LDQuNTI3Yy00LjE2NCw0LjE2Ni00LjE2MywxMC45MiwwLjAwMywxNS4wODQgICAgIEMzMTQuODgxLDc5LjE0NiwzMTcuNjA5LDgwLjE4NiwzMjAuMzM5LDgwLjE4NnpcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDcuMjE1LDM1OC4wNTdsLTQuNTI1LDQuNTI1Yy00LjE2NSw0LjE2NC00LjE2NSwxMC45MTgsMCwxNS4wODVjMi4wODMsMi4wODIsNC44MTMsMy4xMjMsNy41NDIsMy4xMjMgICAgIHM1LjQ1OS0xLjA0MSw3LjU0Mi0zLjEyM2w0LjUyNS00LjUyNWM0LjE2NS00LjE2Niw0LjE2NS0xMC45MiwwLTE1LjA4NUMxMTguMTMzLDM1My44OTEsMTExLjM4MSwzNTMuODkxLDEwNy4yMTUsMzU4LjA1N3pcIiBmaWxsPVwiIzc3NDBERFwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4nOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1zc3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9