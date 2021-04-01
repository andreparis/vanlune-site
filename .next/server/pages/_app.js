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
var _jsxFileName = "C:\\Projects\\vanlune-site\\components\\common\\widgets\\Tap-Top.js";
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

var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\Compare\\CompareContext.js";
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

var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\Currency\\CurrencyContext.js";
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
var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\cart\\CartContext.js";
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

  const addToCart = (item, quantity, customize = [], variant = {}) => {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Product Added Successfully !");
    let cartProduct = Object.assign({}, item);
    const index = cartItems.findIndex(itm => itm.id === cartProduct.id);
    cartProduct['customizes'] = customize;
    cartProduct['variants'] = [variant];

    if (index !== -1) {
      const product = cartItems[index];
      cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, cartProduct), cartProduct), {}, {
        qty: quantity,
        total: getProductTotal(cartProduct, quantity)
      });
      setCartItems([...cartItems]);
    } else {
      const product = _objectSpread(_objectSpread({}, cartProduct), {}, {
        qty: quantity,
        total: getProductTotal(cartProduct, quantity)
      });

      setCartItems([...cartItems, product]);
    }
  };

  const getProductTotal = (product, qtdy = 1) => {
    var total = (product.price - product.price * product.discount / 100) * qtdy;
    if (product['variants'][0]['factor']) total *= product['variants'][0]['factor'];

    if (product['customizes'] && product['customizes'].length > 0) {
      for (var i = 0; i < product['customizes'].length; i++) {
        let customize = product['customizes'][i]['value'][0];
        total *= customize['factor'];
      }
    }

    return total.toFixed(2);
  };

  const removeFromCart = item => {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Product Removed Successfully !");
    setCartItems(cartItems.filter(e => e.id !== item.id));
  };

  const cleanCart = () => {
    setCartItems([]);
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
          total: getProductTotal(item, quantity)
        });
        setCartItems([...cartItems]);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info("Product Quantity Updated !");
      } else {
        const product = _objectSpread(_objectSpread({}, item), {}, {
          qty: quantity,
          total: getProductTotal(item, quantity)
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
      cleanCart: cleanCart,
      plusQty: plusQty,
      minusQty: minusQty,
      updateQty: updateQty
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\filter\\FilterProvider.js";
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
/*! exports provided: TOKEN_STORAGE_KEY, USER_STORAGE_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_STORAGE_KEY", function() { return TOKEN_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STORAGE_KEY", function() { return USER_STORAGE_KEY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./helpers/login/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game */ "./services/game.js");
var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\login\\LoginContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const TOKEN_STORAGE_KEY = "player2.authToken";
const USER_STORAGE_KEY = "player2.userInfo";

const LoginProvider = props => {
  const {
    0: authorizationToken,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    token: ''
  });
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let cookieToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN_STORAGE_KEY);
    let userstr = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(USER_STORAGE_KEY);
    setToken({
      token: cookieToken
    });
    if (userstr) setUser(JSON.parse(userstr));
  }, []);

  const logIn = (user, token) => {
    user = keysToLowerCase(user);
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(TOKEN_STORAGE_KEY, token.token);
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(USER_STORAGE_KEY, JSON.stringify(user));
    setUser(user);
    setToken(token);
    Object(_services_game__WEBPACK_IMPORTED_MODULE_5__["goHome"])();
  };

  const logOut = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(TOKEN_STORAGE_KEY);
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(USER_STORAGE_KEY);
    setToken({
      token: ''
    });
    setUser({});
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/account/login');
  };

  const getUser = () => {
    let user = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(USER_STORAGE_KEY);
    let obj = JSON.parse(user);
    setUser(obj);
    return obj;
  };

  const getDecodedToken = () => {
    let cookieToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN_STORAGE_KEY);
    if (cookieToken) return jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(cookieToken);
    return {
      exp: 0
    };
  };

  const getAuthToken = () => {
    let user = getUser();
    let cookieToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN_STORAGE_KEY);
    return cookieToken + user['id'];
  };

  const expiresAt = () => {
    let decodedToken = getDecodedToken();
    return new Date(decodedToken.exp * 1000);
  };

  const isExpired = () => {
    let date = new Date();
    return date > expiresAt();
  };

  const isValid = () => {
    return !isExpired();
  };

  const {
    value
  } = props;
  return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: authorizationToken,
      userState: user,
      setUser,
      decodedToken: getDecodedToken,
      logIn: logIn,
      logOut: logOut,
      isValid: isValid,
      getUser: getUser,
      getAuthToken: getAuthToken
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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

var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\menu\\MenuContext.js";
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
var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\theme-setting\\SettingProvider.js";
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

var _jsxFileName = "C:\\Projects\\vanlune-site\\helpers\\wishlist\\WishlistContext.js";
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
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/scss/app.scss */ "./public/assets/scss/app.scss");
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/widgets/Tap-Top */ "./components/common/widgets/Tap-Top.js");
/* harmony import */ var _helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/menu/MenuContext */ "./helpers/menu/MenuContext.js");
/* harmony import */ var _helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/cart/CartContext */ "./helpers/cart/CartContext.js");
/* harmony import */ var _helpers_login_LoginContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/login/LoginContext */ "./helpers/login/LoginContext.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/filter/FilterProvider */ "./helpers/filter/FilterProvider.js");
/* harmony import */ var _helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/theme-setting/SettingProvider */ "./helpers/theme-setting/SettingProvider.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Projects\\vanlune-site\\pages\\_app.js";
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
      lineNumber: 35,
      columnNumber: 11
    }
  }, url === 'Christmas' ? __jsx("div", {
    id: "preloader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }) : __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "PLAYER2 - Best ecommerce for Gamers")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(_helpers_login_LoginContext__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__["CompareContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, __jsx(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__["CurrencyContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, __jsx(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_7__["WishlistContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx(_helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_4__["MenuContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 27
    }
  }, __jsx(_helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 31
    }
  })))))))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx(_components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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

/***/ "./services/game.js":
/*!**************************!*\
  !*** ./services/game.js ***!
  \**************************/
/*! exports provided: getGame, setLocalGame, getLocalGame, goHome, getHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGame", function() { return getGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalGame", function() { return setLocalGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalGame", function() { return getLocalGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goHome", function() { return goHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const getGame = game => {
  switch (String(game).trim().toLowerCase()) {
    case "wow":
      return 1;

    case "lol":
      return 2;

    default:
      return 0;
  }
};
const setLocalGame = game => {
  localStorage.setItem("game", game);
};
const getLocalGame = () => {
  return localStorage.getItem("game");
};
const goHome = () => {
  let game = getLocalGame();
  if (game) next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/games?game=' + game);else next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/');
};
const getHome = () => {
  let game = getLocalGame();
  if (game) return '/games?game=' + game;else return '/';
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vd2lkZ2V0cy9UYXAtVG9wLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL0N1cnJlbmN5L0N1cnJlbmN5Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NhcnQvQ2FydENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9jYXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9maWx0ZXIvRmlsdGVyUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9sb2dpbi9Mb2dpbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9sb2dpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy90aGVtZS1zZXR0aW5nL1NldHRpbmdDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvdGhlbWUtc2V0dGluZy9TZXR0aW5nUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy93aXNobGlzdC9XaXNobGlzdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9nYW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImp3dC1kZWNvZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiJdLCJuYW1lcyI6WyJUYXBUb3AiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJ1c2VTdGF0ZSIsImdvaW5nVXAiLCJzZXRHb2luZ1VwIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxZIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcFRvVG9wIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInRvcCIsImRpc3BsYXkiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNvbXBhcmVJdGVtcyIsIkZ1bmN0aW9uIiwiYWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbWFwcmUiLCJnZXRMb2NhbENvbXBhcmVJdGVtcyIsImxpc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwiUHJvdmlkZXIiLCJwcm9wcyIsInNldGNvbXBhcmVJdGVtcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpdGVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb21wYXJlIiwiaWQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJlcnJvciIsImZpbHRlciIsImUiLCJ2YWx1ZSIsImNoaWxkcmVuIiwic2VsZWN0ZWRDdXJyIiwic2VsZWN0ZWRDdXJyZW5jeSIsImN1cnJlbmN5Iiwic3ltYm9sIiwiY3VycmVuY3lDb250ZXh0Iiwic3RhdGUiLCJDb25zdW1lciIsImdldExvY2FsQ2FydEl0ZW1zIiwiQ2FydFByb3ZpZGVyIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiY2FydFRvdGFsIiwic2V0Q2FydFRvdGFsIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInN0b2NrIiwic2V0U3RvY2siLCJUb3RhbCIsInJlZHVjZSIsImEiLCJiIiwidG90YWwiLCJhZGRUb0NhcnQiLCJjdXN0b21pemUiLCJ2YXJpYW50IiwiY2FydFByb2R1Y3QiLCJPYmplY3QiLCJhc3NpZ24iLCJpdG0iLCJwcm9kdWN0IiwicXR5IiwiZ2V0UHJvZHVjdFRvdGFsIiwicXRkeSIsInByaWNlIiwiZGlzY291bnQiLCJsZW5ndGgiLCJpIiwidG9GaXhlZCIsInJlbW92ZUZyb21DYXJ0IiwiY2xlYW5DYXJ0IiwibWludXNRdHkiLCJwbHVzUXR5IiwidXBkYXRlUXR5IiwiaW5mbyIsIkNhcnRDb250ZXh0IiwiRmlsdGVyQ29udGV4dCIsIkZpbHRlclByb3ZpZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiYnJhbmQiLCJxdWVyeSIsImNvbG9yIiwic2l6ZSIsImNhdGVnb3J5IiwibWluIiwibWF4Iiwic2l6ZVBhcmFtIiwic3BsaXQiLCJwYXJhbSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRCcmFuZHMiLCJzZXRTZWxlY3RlZEJyYW5kcyIsInNlbGVjdGVkQ29sb3IiLCJzZXRTZWxlY3RlZENvbG9yIiwic2VsZWN0ZWRTaXplIiwic2V0U2VsZWN0ZWRTaXplIiwic2VsZWN0ZWRQcmljZSIsInNldFNlbGVjdGVkUHJpY2UiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJmaWx0ZXJDaGVja2VkIiwic2V0RmlsdGVyQ2hlY2tlZCIsImhhbmRsZUJyYW5kcyIsImNoZWNrZWQiLCJpbmRleE9mIiwiaGFuZGxlU2l6ZXMiLCJUT0tFTl9TVE9SQUdFX0tFWSIsIlVTRVJfU1RPUkFHRV9LRVkiLCJMb2dpblByb3ZpZGVyIiwiYXV0aG9yaXphdGlvblRva2VuIiwic2V0VG9rZW4iLCJ0b2tlbiIsInVzZXIiLCJzZXRVc2VyIiwiY29va2llVG9rZW4iLCJDb29raWUiLCJnZXQiLCJ1c2Vyc3RyIiwibG9nSW4iLCJrZXlzVG9Mb3dlckNhc2UiLCJzZXQiLCJnb0hvbWUiLCJsb2dPdXQiLCJyZW1vdmUiLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0VXNlciIsIm9iaiIsImdldERlY29kZWRUb2tlbiIsImp3dF9kZWNvZGUiLCJleHAiLCJnZXRBdXRoVG9rZW4iLCJleHBpcmVzQXQiLCJkZWNvZGVkVG9rZW4iLCJEYXRlIiwiaXNFeHBpcmVkIiwiZGF0ZSIsImlzVmFsaWQiLCJ1c2VyU3RhdGUiLCJBcnJheSIsImtleXMiLCJuIiwibG93S2V5Iiwia2V5IiwidG9Mb3dlckNhc2UiLCJMb2dpbkNvbnRleHQiLCJzZWxlY3RNZW51IiwibWVudU9wZW4iLCJtZW51Q29udGV4dCIsIlNldHRpbmdDb250ZXh0IiwiU2V0dGluZ1Byb3ZpZGVyIiwibGF5b3V0U3RhdGUiLCJzZXRMYXlvdXRTdGF0ZSIsImxheW91dENvbG9yIiwic2V0TGF5b3V0Q29sb3IiLCJsYXlvdXRGdW4iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJsYXlvdXRDb2xvckZ1biIsInRhcmdldCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjb25maWciLCJ3aXNobGlzdEl0ZW1zIiwiYWRkVG9XaXNoIiwicmVtb3ZlRnJvbVdpc2giLCJnZXRMb2NhbFdpc2hsaXN0SXRlbXMiLCJzZXRXaXNobGlzdEl0ZW1zIiwid2lzaCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXJsIiwic2V0VXJsIiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJnZXRHYW1lIiwiZ2FtZSIsIlN0cmluZyIsInRyaW0iLCJzZXRMb2NhbEdhbWUiLCJnZXRMb2NhbEdhbWUiLCJnZXRIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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O0FBQzlCLFNBQU9wTCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBUDtBQUNILENBRk07QUFJQSxNQUFNaUgsTUFBTSxHQUFHLE1BQU07QUFDeEIsTUFBSThELElBQUksR0FBR0ksWUFBWSxFQUF2QjtBQUNBLE1BQUlKLElBQUosRUFDSTNELGtEQUFNLENBQUNDLElBQVAsQ0FBWSxpQkFBZTBELElBQTNCLEVBREosS0FHSTNELGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ1AsQ0FOTTtBQVFBLE1BQU0rRCxPQUFPLEdBQUcsTUFBTTtBQUN6QixNQUFJTCxJQUFJLEdBQUdJLFlBQVksRUFBdkI7QUFDQSxNQUFJSixJQUFKLEVBQ0csT0FBTyxpQkFBZUEsSUFBdEIsQ0FESCxLQUdJLE9BQU8sR0FBUDtBQUNQLENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QlAsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFwVG9wID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbZ29pbmdVcCwgc2V0R29pbmdVcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIFBhZ2UgTG9hZGVyXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcclxuICAgICAgfSwgMTUwMClcclxuICBcclxuICAgICAgLy8gVGFwIHRvIFRvcCBTY3JvbGwgXHJcbiAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsWSA+IDUwMClcclxuICAgICAgICAgIHNldEdvaW5nVXAodHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgc2V0R29pbmdVcChmYWxzZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH0sIFtnb2luZ1VwXSk7XHJcbiAgXHJcbiAgICBjb25zdCB0YXBUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICB0b3A6IDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFwLXRvcCB0b3AtY2xzXCIgc3R5bGU9e2dvaW5nVXAgPyB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH19IG9uQ2xpY2s9e3RhcFRvVG9wfT5cclxuICAgICAgICA8ZGl2PjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS11cFwiPjwvaT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFwVG9wOyIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgY29tcGFyZUl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb0NvbXBhcmU6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21Db21hcHJlOiBGdW5jdGlvblxyXG59KTtcclxuXHJcbmNvbnN0IGdldExvY2FsQ29tcGFyZUl0ZW1zID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmUnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyZUl0ZW1zLCBzZXRjb21wYXJlSXRlbXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxDb21wYXJlSXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYXJlJywgSlNPTi5zdHJpbmdpZnkoY29tcGFyZUl0ZW1zKSlcclxuICAgIH0sIFtjb21wYXJlSXRlbXNdKVxyXG5cclxuICAgIC8vIEFkZCBQcm9kdWN0IFRvIFdpc2hsaXN0XHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29tcGFyZUl0ZW1zLmZpbmRJbmRleChjb21wYXJlID0+IGNvbXBhcmUuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgICAgICAgICAgc2V0Y29tcGFyZUl0ZW1zKFsuLi5jb21wYXJlSXRlbXMsIGl0ZW1dKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJUaGlzIFByb2R1Y3QgQWxyZWFkeSBBZGRlZCAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgUHJvZHVjdCBGcm9tIGNvbXBhcmVcclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21hcHJlID0gKGl0ZW0pID0+IHtcclxuICAgICAgc2V0Y29tcGFyZUl0ZW1zKGNvbXBhcmVJdGVtcy5maWx0ZXIoKGUpPT4oZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gICAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7dmFsdWV9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGNvbXBhcmVJdGVtczpjb21wYXJlSXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvQ29tcGFyZTphZGRUb0NvbXBhcmUsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21Db21hcHJlOnJlbW92ZUZyb21Db21hcHJlXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBDb21wYXJlQ29udGV4dCxcclxuICBQcm92aWRlciBhcyBDb21wYXJlQ29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL0NvbXBhcmVDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuICBcclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQ3Vyciwgc2VsZWN0ZWRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7IGN1cnJlbmN5OiAnQlJMJyxzeW1ib2w6ICdSJCcsIHZhbHVlOjF9KTtcclxuXHJcbiAgY29uc3QgY3VycmVuY3lDb250ZXh0ID0ge1xyXG4gICAgc2VsZWN0ZWRDdXJyLFxyXG4gICAgc2VsZWN0ZWRDdXJyZW5jeVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHt2YWx1ZX0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgc3RhdGU6c2VsZWN0ZWRDdXJyLFxyXG4gICAgICAgICAgY3VycmVuY3lDb250ZXh0OmN1cnJlbmN5Q29udGV4dFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IENvbnN1bWVyIH0gPSBDb250ZXh0O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIEN1cnJlbmN5Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBDdXJyZW5jeUNvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9DdXJyZW5jeUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5cclxuY29uc3QgZ2V0TG9jYWxDYXJ0SXRlbXMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydExpc3QnKTtcclxuICAgIGlmIChsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQ2FydFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKGdldExvY2FsQ2FydEl0ZW1zKCkpXHJcbiAgY29uc3QgW2NhcnRUb3RhbCwgc2V0Q2FydFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZSgnSW5TdG9jaycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgVG90YWwgPSBjYXJ0SXRlbXMucmVkdWNlKChhLCBiKSA9PiArYSArICtiLnRvdGFsLCAwKVxyXG4gICAgc2V0Q2FydFRvdGFsKFRvdGFsKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydExpc3QnLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKVxyXG4gIH0sIFtjYXJ0SXRlbXNdKVxyXG5cclxuICAvLyBBZGQgUHJvZHVjdCBUbyBDYXJ0XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0gLHF1YW50aXR5LCBjdXN0b21pemUgPSBbXSwgdmFyaWFudCA9IHt9KSA9PiB7XHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIGxldCBjYXJ0UHJvZHVjdCA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xyXG4gICAgY29uc3QgaW5kZXggPSBjYXJ0SXRlbXMuZmluZEluZGV4KGl0bSA9PiBpdG0uaWQgPT09IGNhcnRQcm9kdWN0LmlkKTtcclxuICAgIGNhcnRQcm9kdWN0WydjdXN0b21pemVzJ10gPSBjdXN0b21pemU7XHJcbiAgICBjYXJ0UHJvZHVjdFsndmFyaWFudHMnXSA9IFt2YXJpYW50XTtcclxuICAgIFxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gY2FydEl0ZW1zW2luZGV4XTtcclxuICAgICAgY2FydEl0ZW1zW2luZGV4XSA9IHsgLi4uY2FydFByb2R1Y3QsIC4uLmNhcnRQcm9kdWN0LCBcclxuICAgICAgICBxdHk6IHF1YW50aXR5LCBcclxuICAgICAgICB0b3RhbDogZ2V0UHJvZHVjdFRvdGFsKGNhcnRQcm9kdWN0LCBxdWFudGl0eSlcclxuICAgICAgfTtcclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXNdKVxyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0geyAuLi5jYXJ0UHJvZHVjdCwgcXR5OiBxdWFudGl0eSwgXHJcbiAgICAgICAgdG90YWw6IGdldFByb2R1Y3RUb3RhbChjYXJ0UHJvZHVjdCwgcXVhbnRpdHkpXHJcbiAgICAgIH1cclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHByb2R1Y3RdKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdFRvdGFsID0gKHByb2R1Y3QsIHF0ZHkgPSAxKSA9PiB7XHJcbiAgICB2YXIgdG90YWwgPSAocHJvZHVjdC5wcmljZSAtIChwcm9kdWN0LnByaWNlICogcHJvZHVjdC5kaXNjb3VudCAvIDEwMCkpICogcXRkeTtcclxuICAgIGlmIChwcm9kdWN0Wyd2YXJpYW50cyddWzBdWydmYWN0b3InXSlcclxuICAgICAgdG90YWwgKj0gcHJvZHVjdFsndmFyaWFudHMnXVswXVsnZmFjdG9yJ107XHJcbiAgICBpZiAocHJvZHVjdFsnY3VzdG9taXplcyddICYmIHByb2R1Y3RbJ2N1c3RvbWl6ZXMnXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvZHVjdFsnY3VzdG9taXplcyddLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgIGxldCBjdXN0b21pemUgPSBwcm9kdWN0WydjdXN0b21pemVzJ11baV1bJ3ZhbHVlJ11bMF07XHJcbiAgICAgICAgdG90YWwgKj0gY3VzdG9taXplWydmYWN0b3InXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpdGVtKSA9PiB7XHJcbiAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIHNldENhcnRJdGVtcyhjYXJ0SXRlbXMuZmlsdGVyKChlKSA9PiAoZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYW5DYXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q2FydEl0ZW1zKFtdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1pbnVzUXR5ID0gKCkgPT4ge1xyXG4gICAgaWYgKHF1YW50aXR5ID4gMSkge1xyXG4gICAgICAgIHNldFF1YW50aXR5KHF1YW50aXR5IC0gMSk7XHJcbiAgICAgICAgc2V0U3RvY2soJ0luU3RvY2snKVxyXG4gICAgfVxyXG59XHJcblxyXG4gIGNvbnN0IHBsdXNRdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xyXG4gIH1cclxuXHJcbiAgIC8vIFVwZGF0ZSBQcm9kdWN0IFF1YW50aXR5XHJcbiAgIGNvbnN0IHVwZGF0ZVF0eSA9IChpdGVtLCBxdWFudGl0eSkgPT4ge1xyXG4gICAgaWYocXVhbnRpdHkgPj0gMSApe1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNhcnRJdGVtcy5maW5kSW5kZXgoaXRtID0+IGl0bS5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgaWYoaW5kZXggIT09IC0xKXtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gY2FydEl0ZW1zW2luZGV4XTtcclxuICAgICAgICBjYXJ0SXRlbXNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCAuLi5pdGVtLCBxdHk6IHF1YW50aXR5LCB0b3RhbDogZ2V0UHJvZHVjdFRvdGFsKGl0ZW0sIHF1YW50aXR5KSAgfTsgXHJcblxyXG4gICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zXSlcclxuICAgICAgICB0b2FzdC5pbmZvKFwiUHJvZHVjdCBRdWFudGl0eSBVcGRhdGVkICFcIik7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7Li4uaXRlbSwgcXR5OiBxdWFudGl0eSwgdG90YWw6IGdldFByb2R1Y3RUb3RhbChpdGVtLCBxdWFudGl0eSkgfVxyXG4gICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBwcm9kdWN0XSlcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBVcGRhdGVkICFcIik7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVudGVyIFZhbGlkIFF1YW50aXR5ICFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICBzdGF0ZTogY2FydEl0ZW1zLCBjYXJ0VG90YWwsc2V0UXVhbnRpdHkgLHF1YW50aXR5LHN0b2NrLFxyXG4gICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxyXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0OiByZW1vdmVGcm9tQ2FydCxcclxuICAgICAgICBjbGVhbkNhcnQ6IGNsZWFuQ2FydCxcclxuICAgICAgICBwbHVzUXR5OiBwbHVzUXR5LFxyXG4gICAgICAgIG1pbnVzUXR5Om1pbnVzUXR5LFxyXG4gICAgICAgIHVwZGF0ZVF0eTp1cGRhdGVRdHlcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQcm92aWRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHQ7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRlckNvbnRleHQgZnJvbSAnLi9GaWx0ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRmlsdGVyUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGJyYW5kID0gcm91dGVyLnF1ZXJ5LmJyYW5kOyBcclxuICAgIGNvbnN0IGNvbG9yID0gcm91dGVyLnF1ZXJ5LmNvbG9yOyBcclxuICAgIGNvbnN0IHNpemUgPSByb3V0ZXIucXVlcnkuc2l6ZTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5O1xyXG4gICAgY29uc3QgbWluID0gcm91dGVyLnF1ZXJ5Lm1pbjtcclxuICAgIGNvbnN0IG1heCA9IHJvdXRlci5xdWVyeS5tYXg7XHJcbiAgICBsZXQgc2l6ZVBhcmFtID0gc2l6ZSA/IHNpemUuc3BsaXQoXCIsXCIpOm51bGw7XHJcbiAgICBsZXQgcGFyYW0gPSBicmFuZCA/IGJyYW5kLnNwbGl0KFwiLFwiKTpbXSBcclxuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKGNhdGVnb3J5P2NhdGVnb3J5OlwiZmFzaGlvblwiKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEJyYW5kcywgc2V0U2VsZWN0ZWRCcmFuZHNdID0gdXNlU3RhdGUocGFyYW0/cGFyYW06W10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29sb3IsIHNldFNlbGVjdGVkQ29sb3JdID0gdXNlU3RhdGUoY29sb3I/Y29sb3I6XCJcIik7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRTaXplLCBzZXRTZWxlY3RlZFNpemVdID0gdXNlU3RhdGUoc2l6ZVBhcmFtP3NpemVQYXJhbTpbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcmljZSwgc2V0U2VsZWN0ZWRQcmljZV0gPSB1c2VTdGF0ZSh7IG1pbjptaW4/bWluOjAsIG1heDogbWF4P21heDo1MDAgfSk7XHJcbiAgICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmlsdGVyQ2hlY2tlZCwgc2V0RmlsdGVyQ2hlY2tlZF0gPSB1c2VTdGF0ZShbe31dKTtcclxuICAgXHJcbiAgICBjb25zdCBoYW5kbGVCcmFuZHMgPSAoYnJhbmQsIGNoZWNrZWQpID0+IHtcclxuICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZEJyYW5kcy5pbmRleE9mKGJyYW5kKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IGJyYW5kLCBjaGVja2VkIH1dKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEJyYW5kcyhzZWxlY3RlZEJyYW5kcy5maWx0ZXIoKGUpID0+IChlICE9PSBicmFuZCkpKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlckNoZWNrZWQoW3sgYnJhbmQsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQnJhbmRzKFsuLi5zZWxlY3RlZEJyYW5kcywgYnJhbmRdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2l6ZXMgPSAoc2l6ZSwgY2hlY2tlZCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZFNpemUuaW5kZXhPZihzaXplKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlckNoZWNrZWQoW3sgc2l6ZSwgY2hlY2tlZCB9XSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRTaXplKHNlbGVjdGVkU2l6ZS5maWx0ZXIoKGUpID0+IChlICE9PSBzaXplKSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IHNpemUsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkU2l6ZShbLi4uc2VsZWN0ZWRTaXplLCBzaXplXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmlsdGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc2VsZWN0ZWRDYXRlZ29yeSwgc2V0RmlsdGVyQ2hlY2tlZCwgc2V0U2VsZWN0ZWRDb2xvciwgc2V0U2VsZWN0ZWRDYXRlZ29yeSxzZXRTZWxlY3RlZEJyYW5kcyAsIHNlbGVjdGVkQnJhbmRzLCBzZWxlY3RlZENvbG9yLCBzZWxlY3RlZFByaWNlLCBpc0NoZWNrZWQsIGZpbHRlckNoZWNrZWQsIHNlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplLHNldFNlbGVjdGVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCcmFuZHM6IGhhbmRsZUJyYW5kcyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZVNpemVzOiBoYW5kbGVTaXplc1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJQcm92aWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5pbXBvcnQge2dvSG9tZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2FtZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVE9LRU5fU1RPUkFHRV9LRVkgPSBcInBsYXllcjIuYXV0aFRva2VuXCI7XHJcbmV4cG9ydCBjb25zdCBVU0VSX1NUT1JBR0VfS0VZID0gXCJwbGF5ZXIyLnVzZXJJbmZvXCI7XHJcblxyXG5jb25zdCBMb2dpblByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2F1dGhvcml6YXRpb25Ub2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoe3Rva2VuOiAnJ30pO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjb29raWVUb2tlbiA9IENvb2tpZS5nZXQoVE9LRU5fU1RPUkFHRV9LRVkpO1xyXG4gICAgbGV0IHVzZXJzdHIgPSBDb29raWUuZ2V0KFVTRVJfU1RPUkFHRV9LRVkpO1xyXG5cclxuICAgIHNldFRva2VuKHt0b2tlbjogY29va2llVG9rZW59KTtcclxuICAgIGlmICh1c2Vyc3RyKSBzZXRVc2VyKEpTT04ucGFyc2UodXNlcnN0cikpO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ0luID0gKHVzZXIsIHRva2VuKSA9PiB7ICAgIFxyXG4gICAgdXNlciA9IGtleXNUb0xvd2VyQ2FzZSh1c2VyKTtcclxuXHJcbiAgICBDb29raWUuc2V0KFRPS0VOX1NUT1JBR0VfS0VZLCB0b2tlbi50b2tlbik7XHJcbiAgICBDb29raWUuc2V0KFVTRVJfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuXHJcbiAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgc2V0VG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGdvSG9tZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIENvb2tpZS5yZW1vdmUoVE9LRU5fU1RPUkFHRV9LRVkpO1xyXG4gICAgQ29va2llLnJlbW92ZShVU0VSX1NUT1JBR0VfS0VZKTtcclxuICAgIHNldFRva2VuKHt0b2tlbjogJyd9KTtcclxuICAgIHNldFVzZXIoe30pO1xyXG5cclxuICAgIFJvdXRlci5wdXNoKCcvYWNjb3VudC9sb2dpbicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0VXNlciA9ICgpID0+IHtcclxuICAgIGxldCB1c2VyID0gQ29va2llLmdldChVU0VSX1NUT1JBR0VfS0VZKTtcclxuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKHVzZXIpO1xyXG4gICAgc2V0VXNlcihvYmopO1xyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RGVjb2RlZFRva2VuID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvb2tpZVRva2VuID0gQ29va2llLmdldChUT0tFTl9TVE9SQUdFX0tFWSk7XHJcbiAgICBpZiAoY29va2llVG9rZW4pXHJcbiAgICAgIHJldHVybiBqd3RfZGVjb2RlKGNvb2tpZVRva2VuKTtcclxuXHJcbiAgICByZXR1cm4ge2V4cDogMH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QXV0aFRva2VuID0gKCkgPT4ge1xyXG4gICAgbGV0IHVzZXIgPSBnZXRVc2VyKCk7XHJcbiAgICBsZXQgY29va2llVG9rZW4gPSBDb29raWUuZ2V0KFRPS0VOX1NUT1JBR0VfS0VZKTtcclxuXHJcbiAgICByZXR1cm4gY29va2llVG9rZW4gKyB1c2VyWydpZCddO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXhwaXJlc0F0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRlY29kZWRUb2tlbiA9IGdldERlY29kZWRUb2tlbigpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZShkZWNvZGVkVG9rZW4uZXhwICogMTAwMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0V4cGlyZWQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gZGF0ZSA+IGV4cGlyZXNBdCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNWYWxpZCA9ICgpID0+ICB7XHJcbiAgICByZXR1cm4gIWlzRXhwaXJlZCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgIHN0YXRlOiBhdXRob3JpemF0aW9uVG9rZW4sXHJcbiAgICAgICAgdXNlclN0YXRlOiB1c2VyLCBzZXRVc2VyLFxyXG4gICAgICAgIGRlY29kZWRUb2tlbjogZ2V0RGVjb2RlZFRva2VuLFxyXG4gICAgICAgIGxvZ0luOiBsb2dJbixcclxuICAgICAgICBsb2dPdXQ6IGxvZ091dCxcclxuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIGdldFVzZXI6IGdldFVzZXIsXHJcbiAgICAgICAgZ2V0QXV0aFRva2VuOiBnZXRBdXRoVG9rZW5cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleXNUb0xvd2VyQ2FzZShvYmopIHtcclxuICAgIGlmKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgb2JqW2ldID0ga2V5c1RvTG93ZXJDYXNlKG9ialtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCF0eXBlb2Yob2JqKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Yob2JqKSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Yob2JqKSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2Yob2JqKSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgdmFyIG4gPSBrZXlzLmxlbmd0aDtcclxuICAgIHZhciBsb3dLZXk7XHJcbiAgICB3aGlsZSAobi0tKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IGtleXNbbl07XHJcbiAgICAgICAgaWYgKGtleSA9PT0gKGxvd0tleSA9IGtleS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgb2JqW2xvd0tleV0gPSBrZXlzVG9Mb3dlckNhc2Uob2JqW2tleV0pO1xyXG4gICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiAob2JqKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUHJvdmlkZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBzZWxlY3RNZW51OiBGdW5jdGlvblxyXG4gIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NlbGVjdE1lbnVdID0gdXNlU3RhdGUoeyBtZW51T3BlbjogZmFsc2UgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBtZW51Q29udGV4dCA9IHtcclxuICAgICAgICBzZWxlY3RNZW51XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttZW51Q29udGV4dH0+IHtwcm9wcy5jaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgeyBDb25zdW1lciB9ID0gQ29udGV4dDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBNZW51Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBNZW51Q29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL01lbnVDb250ZXh0XCI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTZXR0aW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNldHRpbmdDb250ZXh0IGZyb20gJy4vU2V0dGluZ0NvbnRleHQnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jdXN0b21pemVyL2NvbmZpZy5qc29uJztcclxuY29uc3QgU2V0dGluZ1Byb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbbGF5b3V0U3RhdGUsIHNldExheW91dFN0YXRlXSA9IHVzZVN0YXRlKFwiUlRMXCIpO1xyXG4gICAgY29uc3QgW2xheW91dENvbG9yLCBzZXRMYXlvdXRDb2xvcl0gPSB1c2VTdGF0ZShcIiM3NzQwRERcIik7XHJcbiAgICBjb25zdCBsYXlvdXRGdW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBcIlJUTFwiKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImx0clwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicnRsXCIpO1xyXG4gICAgICAgICAgICBzZXRMYXlvdXRTdGF0ZShcIkxUUlwiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicnRsXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsdHJcIik7XHJcbiAgICAgICAgICAgIHNldExheW91dFN0YXRlKFwiUlRMXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGF5b3V0Q29sb3JGdW4gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIixpdGVtLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtZGVhZnVsdCcsIGl0ZW0udGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25maWcuY29sb3I9aXRlbS50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXRMYXlvdXRDb2xvcihpdGVtLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFNldHRpbmdDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBsYXlvdXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxheW91dEZ1bjpsYXlvdXRGdW4sXHJcbiAgICAgICAgICAgICAgICBsYXlvdXRDb2xvckZ1bjpsYXlvdXRDb2xvckZ1blxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvU2V0dGluZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCAsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICB3aXNobGlzdEl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb1dpc2g6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21XaXNoOiBGdW5jdGlvblxyXG59XHJcbik7XHJcblxyXG5jb25zdCBnZXRMb2NhbFdpc2hsaXN0SXRlbXMgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lzaGxpc3QnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbd2lzaGxpc3RJdGVtcywgc2V0V2lzaGxpc3RJdGVtc10gPSB1c2VTdGF0ZShnZXRMb2NhbFdpc2hsaXN0SXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aXNobGlzdCcsIEpTT04uc3RyaW5naWZ5KHdpc2hsaXN0SXRlbXMpKVxyXG4gICAgfSwgW3dpc2hsaXN0SXRlbXNdKVxyXG5cclxuXHJcbiAgICAvLyBBZGQgUHJvZHVjdCBUbyBXaXNobGlzdFxyXG4gICAgY29uc3QgYWRkVG9XaXNoID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHdpc2hsaXN0SXRlbXMuZmluZEluZGV4KHdpc2ggPT4gd2lzaC5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQcm9kdWN0IEFkZGVkIFN1Y2Nlc3NmdWxseSAhXCIpO1xyXG4gICAgICAgICAgICBzZXRXaXNobGlzdEl0ZW1zKFsuLi53aXNobGlzdEl0ZW1zLCBpdGVtXSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiVGhpcyBQcm9kdWN0IEFscmVhZHkgQWRkZWQgIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIFByb2R1Y3QgRnJvbSBXaXNobGlzdFxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbVdpc2ggPSAoaXRlbSkgPT4ge1xyXG4gICAgICBzZXRXaXNobGlzdEl0ZW1zKHdpc2hsaXN0SXRlbXMuZmlsdGVyKChlKT0+KGUuaWQgIT09IGl0ZW0uaWQpKSlcclxuICAgICAgdG9hc3QuZXJyb3IoXCJQcm9kdWN0IFJlbW92ZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3ZhbHVlfSA9IHByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICB3aXNobGlzdEl0ZW1zOndpc2hsaXN0SXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvV2lzaDphZGRUb1dpc2gsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21XaXNoOnJlbW92ZUZyb21XaXNoXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBXaXNobGlzdENvbnRleHQsXHJcbiAgUHJvdmlkZXIgYXMgV2lzaGxpc3RDb250ZXh0UHJvdmlkZXIsXHJcbn0gZnJvbSBcIi4vV2lzaGxpc3RDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgVGFwVG9wIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3dpZGdldHMvVGFwLVRvcCc7XHJcbmltcG9ydCB7IE1lbnVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9oZWxwZXJzL21lbnUvTWVudUNvbnRleHQnO1xyXG5pbXBvcnQgQ2FydENvbnRleHRQcm92aWRlciBmcm9tICcuLi9oZWxwZXJzL2NhcnQvQ2FydENvbnRleHQnO1xyXG5pbXBvcnQgTG9naW5Qcm92aWRlciBmcm9tICcuLi9oZWxwZXJzL2xvZ2luL0xvZ2luQ29udGV4dCc7XHJcbmltcG9ydCB7IFdpc2hsaXN0Q29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy93aXNobGlzdC9XaXNobGlzdENvbnRleHQnO1xyXG5pbXBvcnQgRmlsdGVyUHJvdmlkZXIgZnJvbSAnLi4vaGVscGVycy9maWx0ZXIvRmlsdGVyUHJvdmlkZXInO1xyXG5pbXBvcnQgU2V0dGluZ1Byb3ZpZGVyIGZyb20gJy4uL2hlbHBlcnMvdGhlbWUtc2V0dGluZy9TZXR0aW5nUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBDb21wYXJlQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9Db21wYXJlL0NvbXBhcmVDb250ZXh0JztcclxuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9oZWxwZXJzL0N1cnJlbmN5L0N1cnJlbmN5Q29udGV4dCc7XHJcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCB1cmwgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBzZXRVcmwodXJsKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAgICAgIFxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge1xyXG4gICAgICAgIGlzTG9hZGluZyA/XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItd3JhcHBlclwiID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVybCA9PT0gJ0NocmlzdG1hcycgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICA8dGl0bGU+UExBWUVSMiAtIEJlc3QgZWNvbW1lcmNlIGZvciBHYW1lcnM8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxMb2dpblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8Q29tcGFyZUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3lDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FydENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdpc2hsaXN0Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbHRlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9XaXNobGlzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FydENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0N1cnJlbmN5Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbXBhcmVDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvTG9naW5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdQcm92aWRlcj4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgPFRhcFRvcCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICB9XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R2FtZSA9IChnYW1lKSA9PiB7XHJcbiAgICBzd2l0Y2goU3RyaW5nKGdhbWUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcIndvd1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBjYXNlIFwibG9sXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxHYW1lID0gKGdhbWUpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBnYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvY2FsR2FtZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdhbWVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnb0hvbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZ2FtZSA9IGdldExvY2FsR2FtZSgpO1xyXG4gICAgaWYgKGdhbWUpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9nYW1lcz9nYW1lPScrZ2FtZSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZ2FtZSA9IGdldExvY2FsR2FtZSgpO1xyXG4gICAgaWYgKGdhbWUpXHJcbiAgICAgICByZXR1cm4gJy9nYW1lcz9nYW1lPScrZ2FtZTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gJy8nO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImp3dC1kZWNvZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=