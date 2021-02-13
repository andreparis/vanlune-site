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

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "collection-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "page-main-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "collection-product-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "product-top-filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, !noSidebar ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "filter-btn btn btn-theme",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fa fa-filter",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 49
    }
  }), " Filter")))) : ""), __jsx("div", {
    className: "product-wrapper-grid ".concat(layout),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 45
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 53
    }
  }, __jsx("img", {
    src: "/assets/images/empty-search.jpg",
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 57
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 57
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 61
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 57
    }
  }, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 46
    }
  }))) : data && data.products.items.map(function (product, i) {
    return __jsx("div", {
      className: grid,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 49
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
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
        lineNumber: 178,
        columnNumber: 57
      }
    }))));
  }))), __jsx("div", {
    className: "section-t-space",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    md: "12",
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 41
    }
  }, data && data.products && data.products.hasMore && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return handlePagination();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 49
    }
  }, isLoading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9jb21tb24vcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJjb2xDbGFzcyIsImxheW91dExpc3QiLCJvcGVuU2lkZWJhciIsIm5vU2lkZWJhciIsImNhcnRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwicXVhbnRpdHkiLCJ3aXNobGlzdENvbnRleHQiLCJXaXNobGlzdENvbnRleHQiLCJjb21wYXJlQ29udGV4dCIsIkNvbXBhcmVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwiY3VyQ29udGV4dCIsIkN1cnJlbmN5Q29udGV4dCIsImdyaWQiLCJzZXRHcmlkIiwic3ltYm9sIiwic3RhdGUiLCJmaWx0ZXJDb250ZXh0IiwiRmlsdGVyQ29udGV4dCIsInNlbGVjdGVkQnJhbmRzIiwic2VsZWN0ZWRDb2xvciIsInNlbGVjdGVkUHJpY2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRTaXplIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInB1c2giLCJtaW4iLCJtYXgiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInR5cGUiLCJwcmljZU1heCIsInByaWNlTWluIiwiY29sb3IiLCJicmFuZCIsImluZGV4RnJvbSIsImxvYWRpbmciLCJkYXRhIiwiZmV0Y2hNb3JlIiwiaGFuZGxlUGFnaW5hdGlvbiIsInNldFRpbWVvdXQiLCJwcm9kdWN0cyIsIml0ZW1zIiwibGVuZ3RoIiwidXBkYXRlUXVlcnkiLCJwcmV2IiwiZmV0Y2hNb3JlUmVzdWx0IiwiX190eXBlbmFtZSIsInRvdGFsIiwiaGFzTW9yZSIsInJlbW92ZUJyYW5kIiwidmFsIiwidGVtcCIsInNwbGljZSIsImluZGV4T2YiLCJzZXRTZWxlY3RlZEJyYW5kcyIsIm1hcCIsInByb2R1Y3QiLCJpIiwiYWRkVG9Db21wYXJlIiwiYWRkVG9XaXNoIiwiYWRkVG9DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0Msa0RBQUgsMG1DQUFsQjs7QUFvQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBb0Q7QUFBQTs7QUFBQSxNQUFqREMsUUFBaUQsUUFBakRBLFFBQWlEO0FBQUEsTUFBdkNDLFVBQXVDLFFBQXZDQSxVQUF1QztBQUFBLE1BQTVCQyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3BFLE1BQU1DLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0Msc0RBQUQsQ0FBOUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdILFdBQVcsQ0FBQ0csUUFBN0I7QUFDQSxNQUFNQyxlQUFlLEdBQUdILHdEQUFVLENBQUNJLGtGQUFELENBQWxDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHTCx3REFBVSxDQUFDTSwrRUFBRCxDQUFqQztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBTG9FLGtCQU0xQ0Msc0RBQVEsQ0FBQyxDQUFELENBTmtDO0FBQUEsTUFNN0RDLEtBTjZEO0FBQUEsTUFNdERDLFFBTnNEOztBQU9wRSxNQUFNQyxVQUFVLEdBQUdaLHdEQUFVLENBQUNhLGlGQUFELENBQTdCOztBQVBvRSxtQkFRNUNKLHNEQUFRLENBQUNkLFFBQUQsQ0FSb0M7QUFBQSxNQVE3RG1CLElBUjZEO0FBQUEsTUFRdkRDLE9BUnVEOztBQVNwRSxNQUFNQyxNQUFNLEdBQUdKLFVBQVUsQ0FBQ0ss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QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsSUFBUjtBQUFhLE1BQUUsRUFBQyxJQUFoQjtBQUFxQixNQUFFLEVBQUMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLK0MsSUFBSSxJQUFJQSxJQUFJLENBQUNJLFFBQWIsSUFBeUJKLElBQUksQ0FBQ0ksUUFBTCxDQUFjUSxPQUF2QyxJQUNHLE1BQUMsaURBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVixnQkFBZ0IsRUFBdEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t4QixTQUFTLElBQ04sTUFBQyxrREFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixXQUFPLEVBQUMsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLGNBRlIsQ0FESixDQURKLENBREosQ0ExREosQ0FESixDQURKLENBREosQ0FESixDQURKO0FBbUZILENBN0pEOztHQUFNakMsVztVQUthYyxzRCxFQXVCb0JnQyw0RDs7O0tBNUJqQzlDLFc7QUErSlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuZDgxMmRmYjk0ZDc4YzQ0MDAwYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3csIE1lZGlhLCBCdXR0b24sIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBNZW51MiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tZWdhLW1lbnUvMi5qcGcnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEZpbHRlckNvbnRleHQgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9maWx0ZXIvRmlsdGVyQ29udGV4dCc7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vcHJvZHVjdC1ib3gvUHJvZHVjdEJveDEnO1xuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBvc3RMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vUG9zdExvYWRlcic7XG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jYXJ0JztcbmltcG9ydCB7V2lzaGxpc3RDb250ZXh0fSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dCc7XG5pbXBvcnQgeyBDb21wYXJlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dCc7XG5cbmNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcbiAgICBxdWVyeSAgcHJvZHVjdHMoJHR5cGU6X0NhdGVnb3J5VHlwZSEsJGluZGV4RnJvbTpJbnQhICwkbGltaXQ6SW50ISwkY29sb3I6U3RyaW5nISwkYnJhbmQ6W1N0cmluZyFdISwkc29ydEJ5Ol9Tb3J0QnkhLCRwcmljZU1heDpJbnQhLCRwcmljZU1pbjpJbnQhKSB7XG4gICAgICAgIHByb2R1Y3RzICh0eXBlOiAkdHlwZSAsaW5kZXhGcm9tOiRpbmRleEZyb20gLGxpbWl0OiRsaW1pdCAsY29sb3I6JGNvbG9yICxicmFuZDokYnJhbmQgLHNvcnRCeTokc29ydEJ5ICxwcmljZU1heDokcHJpY2VNYXgscHJpY2VNaW46JHByaWNlTWluKXtcbiAgICAgICAgICAgIHRvdGFsXG4gICAgICAgICAgICBoYXNNb3JlXG4gICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgIGJyYW5kXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgXG4gICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICBuZXdcbiAgICAgICAgICAgICAgICBzYWxlXG4gICAgICAgICAgICAgICAgc3RvY2tcbiAgICAgICAgICAgICAgICBkaXNjb3VudFxuICAgICAgICAgICAgICAgIHZhcmlhbnRze1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBza3VcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVxuICAgICAgICAgICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWFnZXN7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2lkXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGFsdFxuICAgICAgICAgICAgICAgICAgICBzcmNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgY29sQ2xhc3MsIGxheW91dExpc3Qsb3BlblNpZGViYXIsbm9TaWRlYmFyIH0pID0+IHtcbiAgICBjb25zdCBjYXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICAgIGNvbnN0IHF1YW50aXR5ID0gY2FydENvbnRleHQucXVhbnRpdHk7XG4gICAgY29uc3Qgd2lzaGxpc3RDb250ZXh0ID0gdXNlQ29udGV4dChXaXNobGlzdENvbnRleHQpO1xuICAgIGNvbnN0IGNvbXBhcmVDb250ZXh0ID0gdXNlQ29udGV4dChDb21wYXJlQ29udGV4dCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSg4KVxuICAgIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XG4gICAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGUoY29sQ2xhc3MpXG4gICAgY29uc3Qgc3ltYm9sID0gY3VyQ29udGV4dC5zdGF0ZS5zeW1ib2w7XG4gICAgY29uc3QgZmlsdGVyQ29udGV4dCA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRCcmFuZHMgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkQnJhbmRzO1xuICAgIGNvbnN0IHNlbGVjdGVkQ29sb3IgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkQ29sb3I7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmljZSA9IGZpbHRlckNvbnRleHQuc2VsZWN0ZWRQcmljZTtcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZmlsdGVyQ29udGV4dC5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkU2l6ZVxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZSgnQXNjT3JkZXInKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShsYXlvdXRMaXN0KTtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBzZXRVcmwocGF0aG5hbWUpO1xuICAgICAgICByb3V0ZXIucHVzaChgJHtwYXRobmFtZX0/JHtmaWx0ZXJDb250ZXh0LnN0YXRlfSZicmFuZD0ke3NlbGVjdGVkQnJhbmRzfSZjb2xvcj0ke3NlbGVjdGVkQ29sb3J9JnNpemU9JHtzZWxlY3RlZFNpemV9Jm1pblByaWNlPSR7c2VsZWN0ZWRQcmljZS5taW59Jm1heFByaWNlPSR7c2VsZWN0ZWRQcmljZS5tYXh9YClcbiAgICAgICAgXG4gICAgfSwgW3NlbGVjdGVkQnJhbmRzLCBzZWxlY3RlZENvbG9yLCBzZWxlY3RlZFNpemUsIHNlbGVjdGVkUHJpY2VdKTtcblxuICAgIHZhciB7IGxvYWRpbmcsIGRhdGEsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTLCB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdHlwZTogc2VsZWN0ZWRDYXRlZ29yeSxcbiAgICAgICAgICAgIHByaWNlTWF4OiBzZWxlY3RlZFByaWNlLm1heCxcbiAgICAgICAgICAgIHByaWNlTWluOiBzZWxlY3RlZFByaWNlLm1pbixcbiAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RlZENvbG9yLFxuICAgICAgICAgICAgYnJhbmQ6IHNlbGVjdGVkQnJhbmRzLFxuICAgICAgICAgICAgc29ydEJ5OiBzb3J0QnksXG4gICAgICAgICAgICBpbmRleEZyb206IDAsXG4gICAgICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhGcm9tOiBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOiBwcmV2LnByb2R1Y3RzLl9fdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHByZXYucHJvZHVjdHMudG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2LnByb2R1Y3RzLml0ZW1zLCAuLi5mZXRjaE1vcmVSZXN1bHQucHJvZHVjdHMuaXRlbXNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IGZldGNoTW9yZVJlc3VsdC5wcm9kdWN0cy5oYXNNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSksIDEwMDApXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQnJhbmQgPSAodmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBbLi4uc2VsZWN0ZWRCcmFuZHNdO1xuICAgICAgICB0ZW1wLnNwbGljZShzZWxlY3RlZEJyYW5kcy5pbmRleE9mKHZhbCksIDEpO1xuICAgICAgICBmaWx0ZXJDb250ZXh0LnNldFNlbGVjdGVkQnJhbmRzKHRlbXApXG5cbiAgICAgICAgcm91dGVyLnB1c2goYCR7dXJsfT8ke2ZpbHRlckNvbnRleHQuc3RhdGV9JmJyYW5kPSR7dGVtcH0mY29sb3I9JHtzZWxlY3RlZENvbG9yfSZzaXplPSR7c2VsZWN0ZWRTaXplfSZtaW5QcmljZT0ke3NlbGVjdGVkUHJpY2UubWlufSZtYXhQcmljZT0ke3NlbGVjdGVkUHJpY2UubWF4fWApXG5cbiAgICB9XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLXByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10b3AtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbm9TaWRlYmFyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4bD1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItbWFpbi1idG5cIiBvbkNsaWNrPXsoKSA9PiBvcGVuU2lkZWJhcigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWJ0biBidG4gYnRuLXRoZW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWx0ZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwcm9kdWN0LXdyYXBwZXItZ3JpZCAke2xheW91dH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9kdWN0IEJveCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWRhdGEgfHwgIWRhdGEucHJvZHVjdHMgfHwgIWRhdGEucHJvZHVjdHMuaXRlbXMgfHwgZGF0YS5wcm9kdWN0cy5pdGVtcy5sZW5ndGggPT09IDAgfHwgbG9hZGluZykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhICYmIGRhdGEucHJvZHVjdHMgJiYgZGF0YS5wcm9kdWN0cy5pdGVtcyAmJiBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgZW1wdHktY2FydC1jbHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvYXNzZXRzL2ltYWdlcy9lbXB0eS1zZWFyY2guanBnYH0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTQgbXgtYXV0b1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3Ryb25nPllvdXIgQ2FydCBpcyBFbXB0eTwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FeHBsb3JlIG1vcmUgc2hvcnRsaXN0IHNvbWUgaXRlbXMuPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC0wIG1hcmdpbi1kZWZhdWx0IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhICYmIGRhdGEucHJvZHVjdHMuaXRlbXMubWFwKChwcm9kdWN0LCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZH0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBkZXM9e3RydWV9IHByb2R1Y3Q9e3Byb2R1Y3R9IHN5bWJvbD17c3ltYm9sfSBjYXJ0Q2xhc3M9XCJjYXJ0LWluZm8gY2FydC13cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbXBhcmU9eygpID0+IGNvbXBhcmVDb250ZXh0LmFkZFRvQ29tcGFyZShwcm9kdWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFdpc2hsaXN0PXsoKSA9PiB3aXNobGlzdENvbnRleHQuYWRkVG9XaXNoKHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2FydD17KCkgPT4gY2FydENvbnRleHQuYWRkVG9DYXJ0KHByb2R1Y3QscXVhbnRpdHkpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4bD1cIjEyXCIgbWQ9XCIxMlwiIHNtPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wcm9kdWN0cyAmJiBkYXRhLnByb2R1Y3RzLmhhc01vcmUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUGFnaW5hdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHZhcmlhbnQ9XCJsaWdodFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==