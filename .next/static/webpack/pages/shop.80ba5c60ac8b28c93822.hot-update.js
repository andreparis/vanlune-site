webpackHotUpdate_N_E("pages/shop",{

/***/ "./pages/shop/common/productList.js":
/*!******************************************!*\
  !*** ./pages/shop/common/productList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _public_assets_images_mega_menu_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/assets/images/mega-menu/2.jpg */ "./public/assets/images/mega-menu/2.jpg");
/* harmony import */ var _public_assets_images_mega_menu_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_mega_menu_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_filter_FilterContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/filter/FilterContext */ "./helpers/filter/FilterContext.js");
/* harmony import */ var _components_common_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/common/product-box/ProductBox1 */ "./components/common/product-box/ProductBox1.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/common/PostLoader */ "./components/common/PostLoader.js");
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/cart */ "./helpers/cart/index.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");



var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\personal\\themeforest-eqS76KRe-multikart-responsive-react-ecommerce-template\\multikart_react_all_in_one\\frontend\\pages\\shop\\common\\productList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!,$color:String!,$brand:[String!]!,$sortBy:_SortBy!,$priceMax:Int!,$priceMin:Int!) {\n        products (type: $type ,indexFrom:$indexFrom ,limit:$limit ,color:$color ,brand:$brand ,sortBy:$sortBy ,priceMax:$priceMax,priceMin:$priceMin){\n            total\n            hasMore\n            items {\n                id\n                title\n                description\n                type\n                brand\n                category \n                price\n                new\n                sale\n                stock\n                discount\n                variants{\n                    id\n                    sku\n                    size\n                    color\n                    image_id\n                }\n                images{\n                    image_id\n                    id\n                    alt\n                    src\n                }\n            }\n        }\n    }\n"])));

var ProductList = function ProductList(_ref) {
  _s();

  var colClass = _ref.colClass,
      layoutList = _ref.layoutList,
      openSidebar = _ref.openSidebar,
      noSidebar = _ref.noSidebar;
  var cartContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_12__["default"]);
  var quantity = cartContext.quantity;
  var wishlistContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_13__["WishlistContext"]);
  var compareContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_14__["CompareContext"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(8),
      limit = _useState[0],
      setLimit = _useState[1];

  var curContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_9__["CurrencyContext"]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(colClass),
      grid = _useState2[0],
      setGrid = _useState2[1];

  var symbol = curContext.state.symbol;
  var filterContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_helpers_filter_FilterContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var selectedBrands = filterContext.selectedBrands;
  var selectedColor = filterContext.selectedColor;
  var selectedPrice = filterContext.selectedPrice;
  var selectedCategory = filterContext.state;
  var selectedSize = filterContext.selectedSize;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('AscOrder'),
      sortBy = _useState3[0],
      setSortBy = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(layoutList),
      layout = _useState5[0],
      setLayout = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      url = _useState6[0],
      setUrl = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var pathname = window.location.pathname;
    setUrl(pathname);
    router.push("".concat(pathname, "?").concat(filterContext.state, "&brand=").concat(selectedBrands, "&color=").concat(selectedColor, "&size=").concat(selectedSize, "&minPrice=").concat(selectedPrice.min, "&maxPrice=").concat(selectedPrice.max));
  }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: selectedCategory,
      priceMax: selectedPrice.max,
      priceMin: selectedPrice.min,
      color: selectedColor,
      brand: selectedBrands,
      sortBy: sortBy,
      indexFrom: 0,
      limit: limit
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore;

  var handlePagination = function handlePagination() {
    setIsLoading(true);
    setTimeout(function () {
      return fetchMore({
        variables: {
          indexFrom: data.products.items.length
        },
        updateQuery: function updateQuery(prev, _ref2) {
          var fetchMoreResult = _ref2.fetchMoreResult;
          if (!fetchMoreResult) return prev;
          setIsLoading(false);
          return {
            products: {
              __typename: prev.products.__typename,
              total: prev.products.total,
              items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.products.items), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.products.items)),
              hasMore: fetchMoreResult.products.hasMore
            }
          };
        }
      });
    }, 1000);
  };

  var removeBrand = function removeBrand(val) {
    var temp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedBrands);

    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
    router.push("".concat(url, "?").concat(filterContext.state, "&brand=").concat(temp, "&color=").concat(selectedColor, "&size=").concat(selectedSize, "&minPrice=").concat(selectedPrice.min, "&maxPrice=").concat(selectedPrice.max));
  };

  var removeSize = function removeSize(val) {
    var temp = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedSize);

    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
    router.push("".concat(url, "?").concat(filterContext.state, "&brand=").concat(temp, "&color=").concat(selectedColor, "&size=").concat(temp, "&minPrice=").concat(selectedPrice.min, "&maxPrice=").concat(selectedPrice.max));
  };

  var removeColor = function removeColor() {
    filterContext.setSelectedColor("");
    router.push("".concat(url, "?").concat(filterContext.state, "&brand=").concat(selectedBrands, "&color=").concat(selectedColor, "&size=").concat(selectedSize, "&minPrice=").concat(selectedPrice.min, "&maxPrice=").concat(selectedPrice.max));
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "collection-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "page-main-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, __jsx("ul", {
    className: "product-filter-tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 41
    }
  }, selectedBrands.map(function (brand, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: null,
      className: "filter_tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 57
      }
    }, brand, __jsx("i", {
      className: "fa fa-close",
      onClick: function onClick() {
        return removeBrand(brand);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 61
      }
    })));
  }), selectedColor ? __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: null,
    className: "filter_tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 53
    }
  }, selectedColor, __jsx("i", {
    className: "fa fa-close",
    onClick: removeColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 57
    }
  }))) : '', selectedSize.map(function (size, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 53
      }
    }, __jsx("a", {
      href: null,
      className: "filter_tag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 57
      }
    }, size, __jsx("i", {
      className: "fa fa-close",
      onClick: function onClick() {
        return removeSize(size);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 61
      }
    })));
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: null,
    className: "filter_tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 57
    }
  }, "price: ", selectedPrice.min, "- ", selectedPrice.max))))), __jsx("div", {
    className: "collection-product-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "product-top-filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 29
    }
  }, !noSidebar ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "filter-main-btn",
    onClick: function onClick() {
      return openSidebar();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "filter-btn btn btn-theme",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fa fa-filter",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 49
    }
  }), " Filter")))) : ""), __jsx("div", {
    className: "product-wrapper-grid ".concat(layout),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 33
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 53
    }
  }, __jsx("img", {
    src: "/assets/images/empty-search.jpg",
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 57
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 57
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 61
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 57
    }
  }, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 46
    }
  }))) : data && data.products.items.map(function (product, i) {
    return __jsx("div", {
      className: grid,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 49
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 53
      }
    }, __jsx(_components_common_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_8__["default"], {
      des: true,
      product: product,
      symbol: symbol,
      cartClass: "cart-info cart-wrap",
      addCompare: function addCompare() {
        return compareContext.addToCompare(product);
      },
      addWishlist: function addWishlist() {
        return wishlistContext.addToWish(product);
      },
      addCart: function addCart() {
        return cartContext.addToCart(product, quantity);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 57
      }
    }))));
  }))), __jsx("div", {
    className: "section-t-space",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    md: "12",
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 41
    }
  }, data && data.products && data.products.hasMore && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return handlePagination();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 49
    }
  }, isLoading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 57
    }
  }), "Load More"))))))))));
};

_s(ProductList, "DNh3FFFk2j8Cb7ecPeUNMxdx7Ro=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9jb21tb24vcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJjb2xDbGFzcyIsImxheW91dExpc3QiLCJvcGVuU2lkZWJhciIsIm5vU2lkZWJhciIsImNhcnRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwicXVhbnRpdHkiLCJ3aXNobGlzdENvbnRleHQiLCJXaXNobGlzdENvbnRleHQiLCJjb21wYXJlQ29udGV4dCIsIkNvbXBhcmVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwiY3VyQ29udGV4dCIsIkN1cnJlbmN5Q29udGV4dCIsImdyaWQiLCJzZXRHcmlkIiwic3ltYm9sIiwic3RhdGUiLCJmaWx0ZXJDb250ZXh0IiwiRmlsdGVyQ29udGV4dCIsInNlbGVjdGVkQnJhbmRzIiwic2VsZWN0ZWRDb2xvciIsInNlbGVjdGVkUHJpY2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRTaXplIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInB1c2giLCJtaW4iLCJtYXgiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInR5cGUiLCJwcmljZU1heCIsInByaWNlTWluIiwiY29sb3IiLCJicmFuZCIsImluZGV4RnJvbSIsImxvYWRpbmciLCJkYXRhIiwiZmV0Y2hNb3JlIiwiaGFuZGxlUGFnaW5hdGlvbiIsInNldFRpbWVvdXQiLCJwcm9kdWN0cyIsIml0ZW1zIiwibGVuZ3RoIiwidXBkYXRlUXVlcnkiLCJwcmV2IiwiZmV0Y2hNb3JlUmVzdWx0IiwiX190eXBlbmFtZSIsInRvdGFsIiwiaGFzTW9yZSIsInJlbW92ZUJyYW5kIiwidmFsIiwidGVtcCIsInNwbGljZSIsImluZGV4T2YiLCJzZXRTZWxlY3RlZEJyYW5kcyIsInJlbW92ZVNpemUiLCJzZXRTZWxlY3RlZFNpemUiLCJyZW1vdmVDb2xvciIsInNldFNlbGVjdGVkQ29sb3IiLCJtYXAiLCJpIiwic2l6ZSIsInByb2R1Y3QiLCJhZGRUb0NvbXBhcmUiLCJhZGRUb1dpc2giLCJhZGRUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxrREFBSCwwbUNBQWxCOztBQW9DQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvRDtBQUFBOztBQUFBLE1BQWpEQyxRQUFpRCxRQUFqREEsUUFBaUQ7QUFBQSxNQUF2Q0MsVUFBdUMsUUFBdkNBLFVBQXVDO0FBQUEsTUFBNUJDLFdBQTRCLFFBQTVCQSxXQUE0QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDcEUsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxzREFBRCxDQUE5QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsV0FBVyxDQUFDRyxRQUE3QjtBQUNBLE1BQU1DLGVBQWUsR0FBR0gsd0RBQVUsQ0FBQ0ksa0ZBQUQsQ0FBbEM7QUFDQSxNQUFNQyxjQUFjLEdBQUdMLHdEQUFVLENBQUNNLCtFQUFELENBQWpDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFMb0Usa0JBTTFDQyxzREFBUSxDQUFDLENBQUQsQ0FOa0M7QUFBQSxNQU03REMsS0FONkQ7QUFBQSxNQU10REMsUUFOc0Q7O0FBT3BFLE1BQU1DLFVBQVUsR0FBR1osd0RBQVUsQ0FBQ2EsaUZBQUQsQ0FBN0I7O0FBUG9FLG1CQVE1Q0osc0RBQVEsQ0FBQ2QsUUFBRCxDQVJvQztBQUFBLE1BUTdEbUIsSUFSNkQ7QUFBQSxNQVF2REMsT0FSdUQ7O0FBU3BFLE1BQU1DLE1BQU0sR0FBR0osVUFBVSxDQUFDSyxLQUFYLENBQWlCRCxNQUFoQztBQUNBLE1BQU1FLGFBQWEsR0FBR2xCLHdEQUFVLENBQUNtQixxRUFBRCxDQUFoQztBQUNBLE1BQU1DLGNBQWMsR0FBR0YsYUFBYSxDQUFDRSxjQUFyQztBQUNBLE1BQU1DLGFBQWEsR0FBR0gsYUFBYSxDQUFDRyxhQUFwQztBQUNBLE1BQU1DLGFBQWEsR0FBR0osYUFBYSxDQUFDSSxhQUFwQztBQUNBLE1BQU1DLGdCQUFnQixHQUFHTCxhQUFhLENBQUNELEtBQXZDO0FBQ0EsTUFBTU8sWUFBWSxHQUFHTixhQUFhLENBQUNNLFlBQW5DOztBQWZvRSxtQkFnQnhDZixzREFBUSxDQUFDLFVBQUQsQ0FoQmdDO0FBQUEsTUFnQjdEZ0IsTUFoQjZEO0FBQUEsTUFnQnJEQyxTQWhCcUQ7O0FBQUEsbUJBaUJsQ2pCLHNEQUFRLENBQUMsS0FBRCxDQWpCMEI7QUFBQSxNQWlCN0RrQixTQWpCNkQ7QUFBQSxNQWlCbERDLFlBakJrRDs7QUFBQSxtQkFrQnhDbkIsc0RBQVEsQ0FBQ2IsVUFBRCxDQWxCZ0M7QUFBQSxNQWtCN0RpQyxNQWxCNkQ7QUFBQSxNQWtCckRDLFNBbEJxRDs7QUFBQSxtQkFtQjlDckIsc0RBQVEsRUFuQnNDO0FBQUEsTUFtQjdEc0IsR0FuQjZEO0FBQUEsTUFtQnhEQyxNQW5Cd0Q7O0FBcUJwRUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JGLFFBQWpDO0FBQ0FGLFVBQU0sQ0FBQ0UsUUFBRCxDQUFOO0FBQ0EzQixVQUFNLENBQUM4QixJQUFQLFdBQWVILFFBQWYsY0FBMkJoQixhQUFhLENBQUNELEtBQXpDLG9CQUF3REcsY0FBeEQsb0JBQWdGQyxhQUFoRixtQkFBc0dHLFlBQXRHLHVCQUErSEYsYUFBYSxDQUFDZ0IsR0FBN0ksdUJBQTZKaEIsYUFBYSxDQUFDaUIsR0FBM0s7QUFFSCxHQUxRLEVBS04sQ0FBQ25CLGNBQUQsRUFBaUJDLGFBQWpCLEVBQWdDRyxZQUFoQyxFQUE4Q0YsYUFBOUMsQ0FMTSxDQUFUOztBQXJCb0Usa0JBNEJqQ2tCLG9FQUFRLENBQUNoRCxZQUFELEVBQWU7QUFDdERpRCxhQUFTLEVBQUU7QUFDUEMsVUFBSSxFQUFFbkIsZ0JBREM7QUFFUG9CLGNBQVEsRUFBRXJCLGFBQWEsQ0FBQ2lCLEdBRmpCO0FBR1BLLGNBQVEsRUFBRXRCLGFBQWEsQ0FBQ2dCLEdBSGpCO0FBSVBPLFdBQUssRUFBRXhCLGFBSkE7QUFLUHlCLFdBQUssRUFBRTFCLGNBTEE7QUFNUEssWUFBTSxFQUFFQSxNQU5EO0FBT1BzQixlQUFTLEVBQUUsQ0FQSjtBQVFQckMsV0FBSyxFQUFFQTtBQVJBO0FBRDJDLEdBQWYsQ0E1QnlCO0FBQUEsTUE0QjlEc0MsT0E1QjhELGFBNEI5REEsT0E1QjhEO0FBQUEsTUE0QnJEQyxJQTVCcUQsYUE0QnJEQSxJQTVCcUQ7QUFBQSxNQTRCL0NDLFNBNUIrQyxhQTRCL0NBLFNBNUIrQzs7QUF5Q3BFLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQnZCLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0F3QixjQUFVLENBQUM7QUFBQSxhQUNQRixTQUFTLENBQUM7QUFDTlQsaUJBQVMsRUFBRTtBQUNQTSxtQkFBUyxFQUFFRSxJQUFJLENBQUNJLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkM7QUFEeEIsU0FETDtBQUlOQyxtQkFBVyxFQUFFLHFCQUFDQyxJQUFELFNBQStCO0FBQUEsY0FBdEJDLGVBQXNCLFNBQXRCQSxlQUFzQjtBQUN4QyxjQUFJLENBQUNBLGVBQUwsRUFBc0IsT0FBT0QsSUFBUDtBQUN0QjdCLHNCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EsaUJBQU87QUFDSHlCLG9CQUFRLEVBQUU7QUFDTk0sd0JBQVUsRUFBRUYsSUFBSSxDQUFDSixRQUFMLENBQWNNLFVBRHBCO0FBRU5DLG1CQUFLLEVBQUVILElBQUksQ0FBQ0osUUFBTCxDQUFjTyxLQUZmO0FBR05OLG1CQUFLLHlHQUFNRyxJQUFJLENBQUNKLFFBQUwsQ0FBY0MsS0FBcEIsZ0dBQThCSSxlQUFlLENBQUNMLFFBQWhCLENBQXlCQyxLQUF2RCxFQUhDO0FBSU5PLHFCQUFPLEVBQUVILGVBQWUsQ0FBQ0wsUUFBaEIsQ0FBeUJRO0FBSjVCO0FBRFAsV0FBUDtBQVFIO0FBZkssT0FBRCxDQURGO0FBQUEsS0FBRCxFQW1CRixJQW5CRSxDQUFWO0FBb0JILEdBdEJEOztBQXdCQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDekIsUUFBTUMsSUFBSSxHQUFHLDZGQUFJNUMsY0FBUCxDQUFWOztBQUNBNEMsUUFBSSxDQUFDQyxNQUFMLENBQVk3QyxjQUFjLENBQUM4QyxPQUFmLENBQXVCSCxHQUF2QixDQUFaLEVBQXlDLENBQXpDO0FBQ0E3QyxpQkFBYSxDQUFDaUQsaUJBQWQsQ0FBZ0NILElBQWhDO0FBRUF6RCxVQUFNLENBQUM4QixJQUFQLFdBQWVOLEdBQWYsY0FBc0JiLGFBQWEsQ0FBQ0QsS0FBcEMsb0JBQW1EK0MsSUFBbkQsb0JBQWlFM0MsYUFBakUsbUJBQXVGRyxZQUF2Rix1QkFBZ0hGLGFBQWEsQ0FBQ2dCLEdBQTlILHVCQUE4SWhCLGFBQWEsQ0FBQ2lCLEdBQTVKO0FBRUgsR0FQRDs7QUFTQSxNQUFNNkIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0wsR0FBRCxFQUFTO0FBQ3hCLFFBQU1DLElBQUksR0FBRyw2RkFBSXhDLFlBQVAsQ0FBVjs7QUFDQXdDLFFBQUksQ0FBQ0MsTUFBTCxDQUFZekMsWUFBWSxDQUFDMEMsT0FBYixDQUFxQkgsR0FBckIsQ0FBWixFQUF1QyxDQUF2QztBQUNBN0MsaUJBQWEsQ0FBQ21ELGVBQWQsQ0FBOEJMLElBQTlCO0FBRUF6RCxVQUFNLENBQUM4QixJQUFQLFdBQWVOLEdBQWYsY0FBc0JiLGFBQWEsQ0FBQ0QsS0FBcEMsb0JBQW1EK0MsSUFBbkQsb0JBQWlFM0MsYUFBakUsbUJBQXVGMkMsSUFBdkYsdUJBQXdHMUMsYUFBYSxDQUFDZ0IsR0FBdEgsdUJBQXNJaEIsYUFBYSxDQUFDaUIsR0FBcEo7QUFFSCxHQVBEOztBQVNBLE1BQU0rQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCcEQsaUJBQWEsQ0FBQ3FELGdCQUFkLENBQStCLEVBQS9CO0FBQ0FoRSxVQUFNLENBQUM4QixJQUFQLFdBQWVOLEdBQWYsY0FBc0JiLGFBQWEsQ0FBQ0QsS0FBcEMsb0JBQW1ERyxjQUFuRCxvQkFBMkVDLGFBQTNFLG1CQUFpR0csWUFBakcsdUJBQTBIRixhQUFhLENBQUNnQixHQUF4SSx1QkFBd0poQixhQUFhLENBQUNpQixHQUF0SztBQUNILEdBSEQ7O0FBS0EsU0FDSSxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDWSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUW5CLGNBQWMsQ0FBQ29ELEdBQWYsQ0FBbUIsVUFBQzFCLEtBQUQsRUFBUTJCLENBQVI7QUFBQSxXQUNmO0FBQUksU0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLFVBQUksRUFBRSxJQUFUO0FBQWUsZUFBUyxFQUFDLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSzNCLEtBREwsRUFFSTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQTJCLGFBQU8sRUFBRTtBQUFBLGVBQU1nQixXQUFXLENBQUNoQixLQUFELENBQWpCO0FBQUEsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREosQ0FEZTtBQUFBLEdBQW5CLENBRlIsRUFXS3pCLGFBQWEsR0FDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUUsSUFBVDtBQUFlLGFBQVMsRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLGFBREwsRUFFSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQTJCLFdBQU8sRUFBRWlELFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBRFUsR0FPVCxFQWxCVCxFQXFCUTlDLFlBQVksQ0FBQ2dELEdBQWIsQ0FBaUIsVUFBQ0UsSUFBRCxFQUFPRCxDQUFQO0FBQUEsV0FDYjtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxVQUFJLEVBQUUsSUFBVDtBQUFlLGVBQVMsRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tDLElBREwsRUFFSTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQTJCLGFBQU8sRUFBRTtBQUFBLGVBQU1OLFVBQVUsQ0FBQ00sSUFBRCxDQUFoQjtBQUFBLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURKLENBRGE7QUFBQSxHQUFqQixDQXJCUixFQWdDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUUsSUFBVDtBQUFlLGFBQVMsRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNXcEQsYUFBYSxDQUFDZ0IsR0FEekIsUUFDZ0NoQixhQUFhLENBQUNpQixHQUQ5QyxDQURKLENBaENaLENBREosQ0FEWixDQURKLEVBNENJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssQ0FBQ3pDLFNBQUQsR0FDRCxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFdBQVcsRUFBakI7QUFBQSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsMEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQTRCLG1CQUFZLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixZQURKLENBREosQ0FESixDQURDLEdBVUEsRUFYTCxDQURKLEVBZUk7QUFBSyxhQUFTLGlDQUEwQmdDLE1BQTFCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVNLENBQUNvQixJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDSSxRQUFmLElBQTJCLENBQUNKLElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxLQUExQyxJQUFtREwsSUFBSSxDQUFDSSxRQUFMLENBQWNDLEtBQWQsQ0FBb0JDLE1BQXBCLEtBQStCLENBQWxGLElBQXVGUCxPQUF4RixHQUNJQyxJQUFJLElBQUlBLElBQUksQ0FBQ0ksUUFBYixJQUF5QkosSUFBSSxDQUFDSSxRQUFMLENBQWNDLEtBQXZDLElBQWdETCxJQUFJLENBQUNJLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQkMsTUFBcEIsS0FBK0IsQ0FBaEYsR0FDSSxNQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLG1DQUFSO0FBQTZDLGFBQVMsRUFBQyx3QkFBdkQ7QUFBZ0YsT0FBRyxFQUFDLEVBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFKLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUhKLENBREosQ0FESixDQURKLEdBV0k7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURHLEVBSUg7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkcsRUFPSDtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQRyxFQVVIO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZHLENBWlAsR0EwQktOLElBQUksSUFBSUEsSUFBSSxDQUFDSSxRQUFMLENBQWNDLEtBQWQsQ0FBb0JrQixHQUFwQixDQUF3QixVQUFDRyxPQUFELEVBQVVGLENBQVY7QUFBQSxXQUM5QjtBQUFLLGVBQVMsRUFBRTNELElBQWhCO0FBQXNCLFNBQUcsRUFBRTJELENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxrRkFBRDtBQUFhLFNBQUcsRUFBRSxJQUFsQjtBQUF3QixhQUFPLEVBQUVFLE9BQWpDO0FBQTBDLFlBQU0sRUFBRTNELE1BQWxEO0FBQTBELGVBQVMsRUFBQyxxQkFBcEU7QUFDSSxnQkFBVSxFQUFFO0FBQUEsZUFBTVgsY0FBYyxDQUFDdUUsWUFBZixDQUE0QkQsT0FBNUIsQ0FBTjtBQUFBLE9BRGhCO0FBRUksaUJBQVcsRUFBRTtBQUFBLGVBQU14RSxlQUFlLENBQUMwRSxTQUFoQixDQUEwQkYsT0FBMUIsQ0FBTjtBQUFBLE9BRmpCO0FBR0ksYUFBTyxFQUFFO0FBQUEsZUFBTTVFLFdBQVcsQ0FBQytFLFNBQVosQ0FBc0JILE9BQXRCLEVBQThCekUsUUFBOUIsQ0FBTjtBQUFBLE9BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FESixDQUQ4QjtBQUFBLEdBQXhCLENBNUJsQixDQURKLENBZkosRUEwREk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsSUFBUjtBQUFhLE1BQUUsRUFBQyxJQUFoQjtBQUFxQixNQUFFLEVBQUMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLK0MsSUFBSSxJQUFJQSxJQUFJLENBQUNJLFFBQWIsSUFBeUJKLElBQUksQ0FBQ0ksUUFBTCxDQUFjUSxPQUF2QyxJQUNHLE1BQUMsaURBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVixnQkFBZ0IsRUFBdEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t4QixTQUFTLElBQ04sTUFBQyxrREFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixXQUFPLEVBQUMsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLGNBRlIsQ0FESixDQURKLENBREosQ0ExREosQ0E1Q0osQ0FESixDQURKLENBREosQ0FESjtBQThISCxDQXRORDs7R0FBTWpDLFc7VUFLYWMsc0QsRUF1Qm9CZ0MsNEQ7OztLQTVCakM5QyxXO0FBd05TQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wLjgwYmE1YzYwYWM4YjI4YzkzODIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCwgUm93LCBNZWRpYSwgQnV0dG9uLCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgTWVudTIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvbWVnYS1tZW51LzIuanBnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBGaWx0ZXJDb250ZXh0IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlckNvbnRleHQnO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL3Byb2R1Y3QtYm94L1Byb2R1Y3RCb3gxJztcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQ3VycmVuY3kvQ3VycmVuY3lDb250ZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQb3N0TG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL1Bvc3RMb2FkZXInO1xuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY2FydCc7XG5pbXBvcnQge1dpc2hsaXN0Q29udGV4dH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy93aXNobGlzdC9XaXNobGlzdENvbnRleHQnO1xuaW1wb3J0IHsgQ29tcGFyZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0NvbXBhcmUvQ29tcGFyZUNvbnRleHQnO1xuXG5jb25zdCBHRVRfUFJPRFVDVFMgPSBncWxgXG4gICAgcXVlcnkgIHByb2R1Y3RzKCR0eXBlOl9DYXRlZ29yeVR5cGUhLCRpbmRleEZyb206SW50ISAsJGxpbWl0OkludCEsJGNvbG9yOlN0cmluZyEsJGJyYW5kOltTdHJpbmchXSEsJHNvcnRCeTpfU29ydEJ5ISwkcHJpY2VNYXg6SW50ISwkcHJpY2VNaW46SW50ISkge1xuICAgICAgICBwcm9kdWN0cyAodHlwZTogJHR5cGUgLGluZGV4RnJvbTokaW5kZXhGcm9tICxsaW1pdDokbGltaXQgLGNvbG9yOiRjb2xvciAsYnJhbmQ6JGJyYW5kICxzb3J0Qnk6JHNvcnRCeSAscHJpY2VNYXg6JHByaWNlTWF4LHByaWNlTWluOiRwcmljZU1pbil7XG4gICAgICAgICAgICB0b3RhbFxuICAgICAgICAgICAgaGFzTW9yZVxuICAgICAgICAgICAgaXRlbXMge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICBicmFuZFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5IFxuICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgbmV3XG4gICAgICAgICAgICAgICAgc2FsZVxuICAgICAgICAgICAgICAgIHN0b2NrXG4gICAgICAgICAgICAgICAgZGlzY291bnRcbiAgICAgICAgICAgICAgICB2YXJpYW50c3tcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgc2t1XG4gICAgICAgICAgICAgICAgICAgIHNpemVcbiAgICAgICAgICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1hZ2Vze1xuICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBhbHRcbiAgICAgICAgICAgICAgICAgICAgc3JjXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuXG5jb25zdCBQcm9kdWN0TGlzdCA9ICh7IGNvbENsYXNzLCBsYXlvdXRMaXN0LG9wZW5TaWRlYmFyLG5vU2lkZWJhciB9KSA9PiB7XG4gICAgY29uc3QgY2FydENvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbiAgICBjb25zdCBxdWFudGl0eSA9IGNhcnRDb250ZXh0LnF1YW50aXR5O1xuICAgIGNvbnN0IHdpc2hsaXN0Q29udGV4dCA9IHVzZUNvbnRleHQoV2lzaGxpc3RDb250ZXh0KTtcbiAgICBjb25zdCBjb21wYXJlQ29udGV4dCA9IHVzZUNvbnRleHQoQ29tcGFyZUNvbnRleHQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoOClcbiAgICBjb25zdCBjdXJDb250ZXh0ID0gdXNlQ29udGV4dChDdXJyZW5jeUNvbnRleHQpO1xuICAgIGNvbnN0IFtncmlkLCBzZXRHcmlkXSA9IHVzZVN0YXRlKGNvbENsYXNzKVxuICAgIGNvbnN0IHN5bWJvbCA9IGN1ckNvbnRleHQuc3RhdGUuc3ltYm9sO1xuICAgIGNvbnN0IGZpbHRlckNvbnRleHQgPSB1c2VDb250ZXh0KEZpbHRlckNvbnRleHQpO1xuICAgIGNvbnN0IHNlbGVjdGVkQnJhbmRzID0gZmlsdGVyQ29udGV4dC5zZWxlY3RlZEJyYW5kcztcbiAgICBjb25zdCBzZWxlY3RlZENvbG9yID0gZmlsdGVyQ29udGV4dC5zZWxlY3RlZENvbG9yO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJpY2UgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkUHJpY2U7XG4gICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeSA9IGZpbHRlckNvbnRleHQuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gZmlsdGVyQ29udGV4dC5zZWxlY3RlZFNpemVcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoJ0FzY09yZGVyJyk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbGF5b3V0LCBzZXRMYXlvdXRdID0gdXNlU3RhdGUobGF5b3V0TGlzdCk7XG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgc2V0VXJsKHBhdGhuYW1lKTtcbiAgICAgICAgcm91dGVyLnB1c2goYCR7cGF0aG5hbWV9PyR7ZmlsdGVyQ29udGV4dC5zdGF0ZX0mYnJhbmQ9JHtzZWxlY3RlZEJyYW5kc30mY29sb3I9JHtzZWxlY3RlZENvbG9yfSZzaXplPSR7c2VsZWN0ZWRTaXplfSZtaW5QcmljZT0ke3NlbGVjdGVkUHJpY2UubWlufSZtYXhQcmljZT0ke3NlbGVjdGVkUHJpY2UubWF4fWApXG4gICAgICAgIFxuICAgIH0sIFtzZWxlY3RlZEJyYW5kcywgc2VsZWN0ZWRDb2xvciwgc2VsZWN0ZWRTaXplLCBzZWxlY3RlZFByaWNlXSk7XG5cbiAgICB2YXIgeyBsb2FkaW5nLCBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUUywge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICAgICAgICBwcmljZU1heDogc2VsZWN0ZWRQcmljZS5tYXgsXG4gICAgICAgICAgICBwcmljZU1pbjogc2VsZWN0ZWRQcmljZS5taW4sXG4gICAgICAgICAgICBjb2xvcjogc2VsZWN0ZWRDb2xvcixcbiAgICAgICAgICAgIGJyYW5kOiBzZWxlY3RlZEJyYW5kcyxcbiAgICAgICAgICAgIHNvcnRCeTogc29ydEJ5LFxuICAgICAgICAgICAgaW5kZXhGcm9tOiAwLFxuICAgICAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT5cbiAgICAgICAgICAgIGZldGNoTW9yZSh7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4RnJvbTogZGF0YS5wcm9kdWN0cy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZTogcHJldi5wcm9kdWN0cy5fX3R5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBwcmV2LnByb2R1Y3RzLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4ucHJldi5wcm9kdWN0cy5pdGVtcywgLi4uZmV0Y2hNb3JlUmVzdWx0LnByb2R1Y3RzLml0ZW1zXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlOiBmZXRjaE1vcmVSZXN1bHQucHJvZHVjdHMuaGFzTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH0pLCAxMDAwKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUJyYW5kID0gKHZhbCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wID0gWy4uLnNlbGVjdGVkQnJhbmRzXTtcbiAgICAgICAgdGVtcC5zcGxpY2Uoc2VsZWN0ZWRCcmFuZHMuaW5kZXhPZih2YWwpLCAxKTtcbiAgICAgICAgZmlsdGVyQ29udGV4dC5zZXRTZWxlY3RlZEJyYW5kcyh0ZW1wKVxuXG4gICAgICAgIHJvdXRlci5wdXNoKGAke3VybH0/JHtmaWx0ZXJDb250ZXh0LnN0YXRlfSZicmFuZD0ke3RlbXB9JmNvbG9yPSR7c2VsZWN0ZWRDb2xvcn0mc2l6ZT0ke3NlbGVjdGVkU2l6ZX0mbWluUHJpY2U9JHtzZWxlY3RlZFByaWNlLm1pbn0mbWF4UHJpY2U9JHtzZWxlY3RlZFByaWNlLm1heH1gKVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlU2l6ZSA9ICh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcCA9IFsuLi5zZWxlY3RlZFNpemVdO1xuICAgICAgICB0ZW1wLnNwbGljZShzZWxlY3RlZFNpemUuaW5kZXhPZih2YWwpLCAxKTtcbiAgICAgICAgZmlsdGVyQ29udGV4dC5zZXRTZWxlY3RlZFNpemUodGVtcClcblxuICAgICAgICByb3V0ZXIucHVzaChgJHt1cmx9PyR7ZmlsdGVyQ29udGV4dC5zdGF0ZX0mYnJhbmQ9JHt0ZW1wfSZjb2xvcj0ke3NlbGVjdGVkQ29sb3J9JnNpemU9JHt0ZW1wfSZtaW5QcmljZT0ke3NlbGVjdGVkUHJpY2UubWlufSZtYXhQcmljZT0ke3NlbGVjdGVkUHJpY2UubWF4fWApXG5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDb2xvciA9ICgpID0+IHtcbiAgICAgICAgZmlsdGVyQ29udGV4dC5zZXRTZWxlY3RlZENvbG9yKFwiXCIpXG4gICAgICAgIHJvdXRlci5wdXNoKGAke3VybH0/JHtmaWx0ZXJDb250ZXh0LnN0YXRlfSZicmFuZD0ke3NlbGVjdGVkQnJhbmRzfSZjb2xvcj0ke3NlbGVjdGVkQ29sb3J9JnNpemU9JHtzZWxlY3RlZFNpemV9Jm1pblByaWNlPSR7c2VsZWN0ZWRQcmljZS5taW59Jm1heFByaWNlPSR7c2VsZWN0ZWRQcmljZS5tYXh9YClcbiAgICB9XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWZpbHRlci10YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQnJhbmRzLm1hcCgoYnJhbmQsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IGNsYXNzTmFtZT1cImZpbHRlcl90YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlQnJhbmQoYnJhbmQpfSA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb2xvcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJmaWx0ZXJfdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZENvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIG9uQ2xpY2s9e3JlbW92ZUNvbG9yfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2l6ZS5tYXAoKHNpemUsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e251bGx9IGNsYXNzTmFtZT1cImZpbHRlcl90YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVTaXplKHNpemUpfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJmaWx0ZXJfdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB7c2VsZWN0ZWRQcmljZS5taW59LSB7c2VsZWN0ZWRQcmljZS5tYXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1wcm9kdWN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtdG9wLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW5vU2lkZWJhcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW1haW4tYnRuXCIgb25DbGljaz17KCkgPT4gb3BlblNpZGViYXIoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1idG4gYnRuIGJ0bi10aGVtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsdGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdC13cmFwcGVyLWdyaWQgJHtsYXlvdXR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZHVjdCBCb3ggKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFkYXRhIHx8ICFkYXRhLnByb2R1Y3RzIHx8ICFkYXRhLnByb2R1Y3RzLml0ZW1zIHx8IGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoID09PSAwIHx8IGxvYWRpbmcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YSAmJiBkYXRhLnByb2R1Y3RzICYmIGRhdGEucHJvZHVjdHMuaXRlbXMgJiYgZGF0YS5wcm9kdWN0cy5pdGVtcy5sZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGVtcHR5LWNhcnQtY2xzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgL2Fzc2V0cy9pbWFnZXMvZW1wdHktc2VhcmNoLmpwZ2B9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi00IG14LWF1dG9cIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHN0cm9uZz5Zb3VyIENhcnQgaXMgRW1wdHk8L3N0cm9uZz48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RXhwbG9yZSBtb3JlIHNob3J0bGlzdCBzb21lIGl0ZW1zLjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBtYXJnaW4tZGVmYXVsdCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YSAmJiBkYXRhLnByb2R1Y3RzLml0ZW1zLm1hcCgocHJvZHVjdCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWR9IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0gZGVzPXt0cnVlfSBwcm9kdWN0PXtwcm9kdWN0fSBzeW1ib2w9e3N5bWJvbH0gY2FydENsYXNzPVwiY2FydC1pbmZvIGNhcnQtd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDb21wYXJlPXsoKSA9PiBjb21wYXJlQ29udGV4dC5hZGRUb0NvbXBhcmUocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRXaXNobGlzdD17KCkgPT4gd2lzaGxpc3RDb250ZXh0LmFkZFRvV2lzaChwcm9kdWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENhcnQ9eygpID0+IGNhcnRDb250ZXh0LmFkZFRvQ2FydChwcm9kdWN0LHF1YW50aXR5KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeGw9XCIxMlwiIG1kPVwiMTJcIiBzbT1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucHJvZHVjdHMgJiYgZGF0YS5wcm9kdWN0cy5oYXNNb3JlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2luYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiB2YXJpYW50PVwibGlnaHRcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=