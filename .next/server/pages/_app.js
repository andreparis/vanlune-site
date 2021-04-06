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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/5QC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./public/assets/scss/app.scss
var app = __webpack_require__("cvw0");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./components/common/widgets/Tap-Top.js
var __jsx = external_react_default.a.createElement;


const TapTop = () => {
  const {
    0: loader,
    1: setLoader
  } = Object(external_react_["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
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
    onClick: tapToTop
  }, __jsx("div", null, __jsx("i", {
    className: "fa fa-angle-double-up"
  })));
};

/* harmony default export */ var Tap_Top = (TapTop);
// CONCATENATED MODULE: ./helpers/menu/MenuContext.js
var MenuContext_jsx = external_react_default.a.createElement;

const Context = /*#__PURE__*/Object(external_react_["createContext"])({
  selectMenu: Function
});
const Provider = props => {
  const {
    0: selectMenu
  } = Object(external_react_["useState"])({
    menuOpen: false
  });
  const menuContext = {
    selectMenu
  };
  return MenuContext_jsx(Context.Provider, {
    value: menuContext
  }, " ", props.children);
};
const {
  Consumer
} = Context;

// EXTERNAL MODULE: ./helpers/cart/index.js
var cart = __webpack_require__("/5QC");

// CONCATENATED MODULE: ./helpers/cart/CartContext.js
var CartContext_jsx = external_react_default.a.createElement;

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
  } = Object(external_react_["useState"])(getLocalCartItems());
  const {
    0: cartTotal,
    1: setCartTotal
  } = Object(external_react_["useState"])(0);
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])(1);
  const {
    0: stock,
    1: setStock
  } = Object(external_react_["useState"])('InStock');
  Object(external_react_["useEffect"])(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem('cartList', JSON.stringify(cartItems));
  }, [cartItems]); // Add Product To Cart

  const addToCart = (item, quantity, customize = [], variant = {}) => {
    external_react_toastify_["toast"].success("Product Added Successfully !");
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
    external_react_toastify_["toast"].error("Product Removed Successfully !");
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
        external_react_toastify_["toast"].info("Product Quantity Updated !");
      } else {
        const product = _objectSpread(_objectSpread({}, item), {}, {
          qty: quantity,
          total: getProductTotal(item, quantity)
        });

        setCartItems([...cartItems, product]);
        external_react_toastify_["toast"].success("Product Added Updated !");
      }
    } else {
      external_react_toastify_["toast"].error("Enter Valid Quantity !");
    }
  };

  const {
    value
  } = props;
  return CartContext_jsx(cart["a" /* default */].Provider, {
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
    })
  }, props.children);
};

/* harmony default export */ var CartContext = (CartProvider);
// EXTERNAL MODULE: ./helpers/login/index.js
var login = __webpack_require__("NwH9");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__("tlnx");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// EXTERNAL MODULE: ./services/game.js
var game = __webpack_require__("rBBL");

// CONCATENATED MODULE: ./helpers/login/LoginContext.js
var LoginContext_jsx = external_react_default.a.createElement;

function LoginContext_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LoginContext_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LoginContext_ownKeys(Object(source), true).forEach(function (key) { LoginContext_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LoginContext_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LoginContext_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const TOKEN_STORAGE_KEY = "player2.authToken";
const USER_STORAGE_KEY = "player2.userInfo";

const LoginProvider = props => {
  const {
    0: authorizationToken,
    1: setToken
  } = Object(external_react_["useState"])({
    token: ''
  });
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    let cookieToken = external_js_cookie_default.a.get(TOKEN_STORAGE_KEY);
    let userstr = external_js_cookie_default.a.get(USER_STORAGE_KEY);
    setToken({
      token: cookieToken
    });
    if (userstr) setUser(JSON.parse(userstr));
  }, []);

  const logIn = (user, token) => {
    user = keysToLowerCase(user);
    external_js_cookie_default.a.set(TOKEN_STORAGE_KEY, token.token);
    external_js_cookie_default.a.set(USER_STORAGE_KEY, JSON.stringify(user));
    setUser(user);
    setToken(token);
    Object(game["c" /* goHome */])();
  };

  const logOut = () => {
    external_js_cookie_default.a.remove(TOKEN_STORAGE_KEY);
    external_js_cookie_default.a.remove(USER_STORAGE_KEY);
    setToken({
      token: ''
    });
    setUser({});
    router_default.a.push('/account/login');
  };

  const getUser = () => {
    let user = external_js_cookie_default.a.get(USER_STORAGE_KEY);
    let obj = JSON.parse(user);
    setUser(obj);
    return obj;
  };

  const getDecodedToken = () => {
    let cookieToken = external_js_cookie_default.a.get(TOKEN_STORAGE_KEY);
    if (cookieToken) return external_jwt_decode_default()(cookieToken);
    return {
      exp: 0
    };
  };

  const getAuthToken = () => {
    let user = getUser();
    let cookieToken = external_js_cookie_default.a.get(TOKEN_STORAGE_KEY);
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
  return LoginContext_jsx(login["a" /* default */].Provider, {
    value: LoginContext_objectSpread(LoginContext_objectSpread({}, props), {}, {
      state: authorizationToken,
      userState: user,
      setUser,
      decodedToken: getDecodedToken,
      logIn: logIn,
      logOut: logOut,
      isValid: isValid,
      getUser: getUser,
      getAuthToken: getAuthToken
    })
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

/* harmony default export */ var LoginContext = (LoginProvider);
// EXTERNAL MODULE: ./helpers/wishlist/WishlistContext.js
var WishlistContext = __webpack_require__("EO2r");

// CONCATENATED MODULE: ./helpers/filter/FilterContext.js

const FilterContext = /*#__PURE__*/Object(external_react_["createContext"])();
/* harmony default export */ var filter_FilterContext = (FilterContext);
// CONCATENATED MODULE: ./helpers/filter/FilterProvider.js
var FilterProvider_jsx = external_react_default.a.createElement;

function FilterProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FilterProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FilterProvider_ownKeys(Object(source), true).forEach(function (key) { FilterProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FilterProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FilterProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FilterProvider = props => {
  const router = Object(router_["useRouter"])();
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
  } = Object(external_react_["useState"])(category ? category : "fashion");
  const {
    0: selectedBrands,
    1: setSelectedBrands
  } = Object(external_react_["useState"])(param ? param : []);
  const {
    0: selectedColor,
    1: setSelectedColor
  } = Object(external_react_["useState"])(color ? color : "");
  const {
    0: selectedSize,
    1: setSelectedSize
  } = Object(external_react_["useState"])(sizeParam ? sizeParam : []);
  const {
    0: selectedPrice,
    1: setSelectedPrice
  } = Object(external_react_["useState"])({
    min: min ? min : 0,
    max: max ? max : 500
  });
  const {
    0: isChecked,
    1: setIsChecked
  } = Object(external_react_["useState"])(true);
  const {
    0: filterChecked,
    1: setFilterChecked
  } = Object(external_react_["useState"])([{}]);

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

  return FilterProvider_jsx(filter_FilterContext.Provider, {
    value: FilterProvider_objectSpread(FilterProvider_objectSpread({}, props), {}, {
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
    })
  }, props.children);
};

/* harmony default export */ var filter_FilterProvider = (FilterProvider);
// CONCATENATED MODULE: ./helpers/theme-setting/SettingContext.js

const SettingContext = /*#__PURE__*/Object(external_react_["createContext"])();
/* harmony default export */ var theme_setting_SettingContext = (SettingContext);
// EXTERNAL MODULE: ./components/customizer/config.json
var config = __webpack_require__("Tm7r");

// CONCATENATED MODULE: ./helpers/theme-setting/SettingProvider.js
var SettingProvider_jsx = external_react_default.a.createElement;

function SettingProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SettingProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SettingProvider_ownKeys(Object(source), true).forEach(function (key) { SettingProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SettingProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SettingProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SettingProvider = props => {
  const {
    0: layoutState,
    1: setLayoutState
  } = Object(external_react_["useState"])("RTL");
  const {
    0: layoutColor,
    1: setLayoutColor
  } = Object(external_react_["useState"])("#7740DD");

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
    config["a" /* config */].color = item.target.value;
    setLayoutColor(item.target.value);
  };

  return SettingProvider_jsx(theme_setting_SettingContext.Provider, {
    value: SettingProvider_objectSpread(SettingProvider_objectSpread({}, props), {}, {
      state: layoutState,
      layoutFun: layoutFun,
      layoutColorFun: layoutColorFun
    })
  }, props.children);
};

/* harmony default export */ var theme_setting_SettingProvider = (SettingProvider);
// EXTERNAL MODULE: ./helpers/Compare/CompareContext.js
var CompareContext = __webpack_require__("U8OX");

// EXTERNAL MODULE: ./helpers/Currency/CurrencyContext.js
var CurrencyContext = __webpack_require__("XJI2");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;













function MyApp({
  Component,
  pageProps
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: url,
    1: setUrl
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add('light');
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return _app_jsx(external_react_default.a.Fragment, null, isLoading ? _app_jsx("div", {
    className: "loader-wrapper"
  }, url === 'Christmas' ? _app_jsx("div", {
    id: "preloader"
  }) : _app_jsx("div", {
    className: "loader"
  })) : _app_jsx(external_react_default.a.Fragment, null, _app_jsx(external_react_helmet_default.a, null, _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), _app_jsx("title", null, "PLAYER2 - Best ecommerce for Gamers")), _app_jsx("div", null, _app_jsx(theme_setting_SettingProvider, null, _app_jsx(LoginContext, null, _app_jsx(CompareContext["b" /* CompareContextProvider */], null, _app_jsx(CurrencyContext["c" /* CurrencyContextProvider */], null, _app_jsx(CartContext, null, _app_jsx(WishlistContext["d" /* WishlistContextProvider */], null, _app_jsx(Provider, null, _app_jsx(filter_FilterProvider, null, _app_jsx(Component, pageProps))))))))), _app_jsx(external_react_toastify_["ToastContainer"], null), _app_jsx(Tap_Top, null))));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "EO2r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WishlistContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EO2r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["b"]; });

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
    }
  }, props.children);
};


/***/ }),

/***/ "NwH9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LoginContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (LoginContext);

/***/ }),

/***/ "Tm7r":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":{\"layout_type\":\"ltr\",\"layout_version\":\"light\",\"color\":\"#7740DD\"}}");

/***/ }),

/***/ "U8OX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompareContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("U8OX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["d"]; });

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
    }
  }, props.children);
};


/***/ }),

/***/ "XJI2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Provider; });
/* unused harmony export Consumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XJI2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["d"]; });

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
    }
  }, props.children);
};
const {
  Consumer
} = Context;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cvw0":
/***/ (function(module, exports) {



/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "rBBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setLocalGame; });
/* unused harmony export getLocalGame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return goHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHome; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
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

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });