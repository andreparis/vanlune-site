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
  }, __jsx("div", {
    className: "collection-product-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "product-top-filter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, !noSidebar ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 149,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "filter-btn btn btn-theme",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "fa fa-filter",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 49
    }
  }), " Filter")))) : ""), __jsx("div", {
    className: "product-wrapper-grid ".concat(layout),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 45
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 53
    }
  }, __jsx("img", {
    src: "/assets/images/empty-search.jpg",
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 57
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 57
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 61
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 57
    }
  }, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 46
    }
  }))) : data && data.products.items.map(function (product, i) {
    return __jsx("div", {
      className: grid,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 49
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
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
        lineNumber: 192,
        columnNumber: 57
      }
    }))));
  }))), __jsx("div", {
    className: "section-t-space",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    md: "12",
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 41
    }
  }, data && data.products && data.products.hasMore && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return handlePagination();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 49
    }
  }, isLoading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9jb21tb24vcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJjb2xDbGFzcyIsImxheW91dExpc3QiLCJvcGVuU2lkZWJhciIsIm5vU2lkZWJhciIsImNhcnRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwicXVhbnRpdHkiLCJ3aXNobGlzdENvbnRleHQiLCJXaXNobGlzdENvbnRleHQiLCJjb21wYXJlQ29udGV4dCIsIkNvbXBhcmVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwiY3VyQ29udGV4dCIsIkN1cnJlbmN5Q29udGV4dCIsImdyaWQiLCJzZXRHcmlkIiwic3ltYm9sIiwic3RhdGUiLCJmaWx0ZXJDb250ZXh0IiwiRmlsdGVyQ29udGV4dCIsInNlbGVjdGVkQnJhbmRzIiwic2VsZWN0ZWRDb2xvciIsInNlbGVjdGVkUHJpY2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRTaXplIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInB1c2giLCJtaW4iLCJtYXgiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInR5cGUiLCJwcmljZU1heCIsInByaWNlTWluIiwiY29sb3IiLCJicmFuZCIsImluZGV4RnJvbSIsImxvYWRpbmciLCJkYXRhIiwiZmV0Y2hNb3JlIiwiaGFuZGxlUGFnaW5hdGlvbiIsInNldFRpbWVvdXQiLCJwcm9kdWN0cyIsIml0ZW1zIiwibGVuZ3RoIiwidXBkYXRlUXVlcnkiLCJwcmV2IiwiZmV0Y2hNb3JlUmVzdWx0IiwiX190eXBlbmFtZSIsInRvdGFsIiwiaGFzTW9yZSIsInJlbW92ZUJyYW5kIiwidmFsIiwidGVtcCIsInNwbGljZSIsImluZGV4T2YiLCJzZXRTZWxlY3RlZEJyYW5kcyIsInJlbW92ZVNpemUiLCJzZXRTZWxlY3RlZFNpemUiLCJyZW1vdmVDb2xvciIsInNldFNlbGVjdGVkQ29sb3IiLCJtYXAiLCJwcm9kdWN0IiwiaSIsImFkZFRvQ29tcGFyZSIsImFkZFRvV2lzaCIsImFkZFRvQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGtEQUFILDBtQ0FBbEI7O0FBb0NBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW9EO0FBQUE7O0FBQUEsTUFBakRDLFFBQWlELFFBQWpEQSxRQUFpRDtBQUFBLE1BQXZDQyxVQUF1QyxRQUF2Q0EsVUFBdUM7QUFBQSxNQUE1QkMsV0FBNEIsUUFBNUJBLFdBQTRCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNwRSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLHNEQUFELENBQTlCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxXQUFXLENBQUNHLFFBQTdCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHSCx3REFBVSxDQUFDSSxrRkFBRCxDQUFsQztBQUNBLE1BQU1DLGNBQWMsR0FBR0wsd0RBQVUsQ0FBQ00sK0VBQUQsQ0FBakM7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUxvRSxrQkFNMUNDLHNEQUFRLENBQUMsQ0FBRCxDQU5rQztBQUFBLE1BTTdEQyxLQU42RDtBQUFBLE1BTXREQyxRQU5zRDs7QUFPcEUsTUFBTUMsVUFBVSxHQUFHWix3REFBVSxDQUFDYSxpRkFBRCxDQUE3Qjs7QUFQb0UsbUJBUTVDSixzREFBUSxDQUFDZCxRQUFELENBUm9DO0FBQUEsTUFR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QUFBQSxhQUFNVixnQkFBZ0IsRUFBdEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t4QixTQUFTLElBQ04sTUFBQyxrREFBRDtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUE0QixXQUFPLEVBQUMsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLGNBRlIsQ0FESixDQURKLENBREosQ0ExREosQ0FESixDQURKLENBREosQ0FESixDQURKO0FBbUZILENBM0tEOztHQUFNakMsVztVQUthYyxzRCxFQXVCb0JnQyw0RDs7O0tBNUJqQzlDLFc7QUE2S1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AuOTJkZWZhYWYyYmU1NzIwMDkwY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3csIE1lZGlhLCBCdXR0b24sIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBNZW51MiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9tZWdhLW1lbnUvMi5qcGcnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEZpbHRlckNvbnRleHQgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9maWx0ZXIvRmlsdGVyQ29udGV4dCc7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vcHJvZHVjdC1ib3gvUHJvZHVjdEJveDEnO1xuaW1wb3J0IHsgQ3VycmVuY3lDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBvc3RMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vUG9zdExvYWRlcic7XG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jYXJ0JztcbmltcG9ydCB7V2lzaGxpc3RDb250ZXh0fSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dCc7XG5pbXBvcnQgeyBDb21wYXJlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dCc7XG5cbmNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcbiAgICBxdWVyeSAgcHJvZHVjdHMoJHR5cGU6X0NhdGVnb3J5VHlwZSEsJGluZGV4RnJvbTpJbnQhICwkbGltaXQ6SW50ISwkY29sb3I6U3RyaW5nISwkYnJhbmQ6W1N0cmluZyFdISwkc29ydEJ5Ol9Tb3J0QnkhLCRwcmljZU1heDpJbnQhLCRwcmljZU1pbjpJbnQhKSB7XG4gICAgICAgIHByb2R1Y3RzICh0eXBlOiAkdHlwZSAsaW5kZXhGcm9tOiRpbmRleEZyb20gLGxpbWl0OiRsaW1pdCAsY29sb3I6JGNvbG9yICxicmFuZDokYnJhbmQgLHNvcnRCeTokc29ydEJ5ICxwcmljZU1heDokcHJpY2VNYXgscHJpY2VNaW46JHByaWNlTWluKXtcbiAgICAgICAgICAgIHRvdGFsXG4gICAgICAgICAgICBoYXNNb3JlXG4gICAgICAgICAgICBpdGVtcyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgIGJyYW5kXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgXG4gICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICBuZXdcbiAgICAgICAgICAgICAgICBzYWxlXG4gICAgICAgICAgICAgICAgc3RvY2tcbiAgICAgICAgICAgICAgICBkaXNjb3VudFxuICAgICAgICAgICAgICAgIHZhcmlhbnRze1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBza3VcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVxuICAgICAgICAgICAgICAgICAgICBjb2xvclxuICAgICAgICAgICAgICAgICAgICBpbWFnZV9pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWFnZXN7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2lkXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGFsdFxuICAgICAgICAgICAgICAgICAgICBzcmNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHsgY29sQ2xhc3MsIGxheW91dExpc3Qsb3BlblNpZGViYXIsbm9TaWRlYmFyIH0pID0+IHtcbiAgICBjb25zdCBjYXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICAgIGNvbnN0IHF1YW50aXR5ID0gY2FydENvbnRleHQucXVhbnRpdHk7XG4gICAgY29uc3Qgd2lzaGxpc3RDb250ZXh0ID0gdXNlQ29udGV4dChXaXNobGlzdENvbnRleHQpO1xuICAgIGNvbnN0IGNvbXBhcmVDb250ZXh0ID0gdXNlQ29udGV4dChDb21wYXJlQ29udGV4dCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZSg4KVxuICAgIGNvbnN0IGN1ckNvbnRleHQgPSB1c2VDb250ZXh0KEN1cnJlbmN5Q29udGV4dCk7XG4gICAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGUoY29sQ2xhc3MpXG4gICAgY29uc3Qgc3ltYm9sID0gY3VyQ29udGV4dC5zdGF0ZS5zeW1ib2w7XG4gICAgY29uc3QgZmlsdGVyQ29udGV4dCA9IHVzZUNvbnRleHQoRmlsdGVyQ29udGV4dCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRCcmFuZHMgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkQnJhbmRzO1xuICAgIGNvbnN0IHNlbGVjdGVkQ29sb3IgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkQ29sb3I7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmljZSA9IGZpbHRlckNvbnRleHQuc2VsZWN0ZWRQcmljZTtcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZmlsdGVyQ29udGV4dC5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZFNpemUgPSBmaWx0ZXJDb250ZXh0LnNlbGVjdGVkU2l6ZVxuICAgIGNvbnN0IFtzb3J0QnksIHNldFNvcnRCeV0gPSB1c2VTdGF0ZSgnQXNjT3JkZXInKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShsYXlvdXRMaXN0KTtcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBzZXRVcmwocGF0aG5hbWUpO1xuICAgICAgICByb3V0ZXIucHVzaChgJHtwYXRobmFtZX0/JHtmaWx0ZXJDb250ZXh0LnN0YXRlfSZicmFuZD0ke3NlbGVjdGVkQnJhbmRzfSZjb2xvcj0ke3NlbGVjdGVkQ29sb3J9JnNpemU9JHtzZWxlY3RlZFNpemV9Jm1pblByaWNlPSR7c2VsZWN0ZWRQcmljZS5taW59Jm1heFByaWNlPSR7c2VsZWN0ZWRQcmljZS5tYXh9YClcbiAgICAgICAgXG4gICAgfSwgW3NlbGVjdGVkQnJhbmRzLCBzZWxlY3RlZENvbG9yLCBzZWxlY3RlZFNpemUsIHNlbGVjdGVkUHJpY2VdKTtcblxuICAgIHZhciB7IGxvYWRpbmcsIGRhdGEsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTLCB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdHlwZTogc2VsZWN0ZWRDYXRlZ29yeSxcbiAgICAgICAgICAgIHByaWNlTWF4OiBzZWxlY3RlZFByaWNlLm1heCxcbiAgICAgICAgICAgIHByaWNlTWluOiBzZWxlY3RlZFByaWNlLm1pbixcbiAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RlZENvbG9yLFxuICAgICAgICAgICAgYnJhbmQ6IHNlbGVjdGVkQnJhbmRzLFxuICAgICAgICAgICAgc29ydEJ5OiBzb3J0QnksXG4gICAgICAgICAgICBpbmRleEZyb206IDAsXG4gICAgICAgICAgICBsaW1pdDogbGltaXRcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgICAgICAgZmV0Y2hNb3JlKHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhGcm9tOiBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOiBwcmV2LnByb2R1Y3RzLl9fdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHByZXYucHJvZHVjdHMudG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2LnByb2R1Y3RzLml0ZW1zLCAuLi5mZXRjaE1vcmVSZXN1bHQucHJvZHVjdHMuaXRlbXNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IGZldGNoTW9yZVJlc3VsdC5wcm9kdWN0cy5oYXNNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfSksIDEwMDApXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQnJhbmQgPSAodmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBbLi4uc2VsZWN0ZWRCcmFuZHNdO1xuICAgICAgICB0ZW1wLnNwbGljZShzZWxlY3RlZEJyYW5kcy5pbmRleE9mKHZhbCksIDEpO1xuICAgICAgICBmaWx0ZXJDb250ZXh0LnNldFNlbGVjdGVkQnJhbmRzKHRlbXApXG5cbiAgICAgICAgcm91dGVyLnB1c2goYCR7dXJsfT8ke2ZpbHRlckNvbnRleHQuc3RhdGV9JmJyYW5kPSR7dGVtcH0mY29sb3I9JHtzZWxlY3RlZENvbG9yfSZzaXplPSR7c2VsZWN0ZWRTaXplfSZtaW5QcmljZT0ke3NlbGVjdGVkUHJpY2UubWlufSZtYXhQcmljZT0ke3NlbGVjdGVkUHJpY2UubWF4fWApXG5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVTaXplID0gKHZhbCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wID0gWy4uLnNlbGVjdGVkU2l6ZV07XG4gICAgICAgIHRlbXAuc3BsaWNlKHNlbGVjdGVkU2l6ZS5pbmRleE9mKHZhbCksIDEpO1xuICAgICAgICBmaWx0ZXJDb250ZXh0LnNldFNlbGVjdGVkU2l6ZSh0ZW1wKVxuXG4gICAgICAgIHJvdXRlci5wdXNoKGAke3VybH0/JHtmaWx0ZXJDb250ZXh0LnN0YXRlfSZicmFuZD0ke3RlbXB9JmNvbG9yPSR7c2VsZWN0ZWRDb2xvcn0mc2l6ZT0ke3RlbXB9Jm1pblByaWNlPSR7c2VsZWN0ZWRQcmljZS5taW59Jm1heFByaWNlPSR7c2VsZWN0ZWRQcmljZS5tYXh9YClcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNvbG9yID0gKCkgPT4ge1xuICAgICAgICBmaWx0ZXJDb250ZXh0LnNldFNlbGVjdGVkQ29sb3IoXCJcIilcbiAgICAgICAgcm91dGVyLnB1c2goYCR7dXJsfT8ke2ZpbHRlckNvbnRleHQuc3RhdGV9JmJyYW5kPSR7c2VsZWN0ZWRCcmFuZHN9JmNvbG9yPSR7c2VsZWN0ZWRDb2xvcn0mc2l6ZT0ke3NlbGVjdGVkU2l6ZX0mbWluUHJpY2U9JHtzZWxlY3RlZFByaWNlLm1pbn0mbWF4UHJpY2U9JHtzZWxlY3RlZFByaWNlLm1heH1gKVxuICAgIH1cbiAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24tcHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRvcC1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFub1NpZGViYXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1tYWluLWJ0blwiIG9uQ2xpY2s9eygpID0+IG9wZW5TaWRlYmFyKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItYnRuIGJ0biBidG4tdGhlbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbHRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3Qtd3JhcHBlci1ncmlkICR7bGF5b3V0fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgQm94ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghZGF0YSB8fCAhZGF0YS5wcm9kdWN0cyB8fCAhZGF0YS5wcm9kdWN0cy5pdGVtcyB8fCBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCA9PT0gMCB8fCBsb2FkaW5nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEgJiYgZGF0YS5wcm9kdWN0cyAmJiBkYXRhLnByb2R1Y3RzLml0ZW1zICYmIGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBlbXB0eS1jYXJ0LWNscyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9hc3NldHMvaW1hZ2VzL2VtcHR5LXNlYXJjaC5qcGdgfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItNCBteC1hdXRvXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzdHJvbmc+WW91ciBDYXJ0IGlzIEVtcHR5PC9zdHJvbmc+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkV4cGxvcmUgbW9yZSBzaG9ydGxpc3Qgc29tZSBpdGVtcy48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTAgbWFyZ2luLWRlZmF1bHQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGEgJiYgZGF0YS5wcm9kdWN0cy5pdGVtcy5tYXAoKHByb2R1Y3QsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIGRlcz17dHJ1ZX0gcHJvZHVjdD17cHJvZHVjdH0gc3ltYm9sPXtzeW1ib2x9IGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29tcGFyZT17KCkgPT4gY29tcGFyZUNvbnRleHQuYWRkVG9Db21wYXJlKHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkV2lzaGxpc3Q9eygpID0+IHdpc2hsaXN0Q29udGV4dC5hZGRUb1dpc2gocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDYXJ0PXsoKSA9PiBjYXJ0Q29udGV4dC5hZGRUb0NhcnQocHJvZHVjdCxxdWFudGl0eSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiMTJcIiBtZD1cIjEyXCIgc209XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnByb2R1Y3RzICYmIGRhdGEucHJvZHVjdHMuaGFzTW9yZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cImxpZ2h0XCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9