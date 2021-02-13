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
  }), " Filter")))) : "", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "product-filter-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "search-count",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 45
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 49
    }
  }, data ? "Showing Products 1-".concat(data.products.items.length, " of ").concat(data.products.total) : 'loading', " Result")), __jsx("div", {
    className: "collection-view",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 53
    }
  }, __jsx("i", {
    className: "fa fa-th grid-layout-view",
    onClick: function onClick() {
      setLayout('');
      setGrid('col-lg-3');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 57
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 53
    }
  }, __jsx("i", {
    className: "fa fa-list-ul list-layout-view",
    onClick: function onClick() {
      setLayout('list-view');
      setGrid('col-lg-12');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 57
    }
  })))), __jsx("div", {
    className: "collection-grid-view",
    style: layout === 'list-view' ? {
      'opacity': 0
    } : {
      'opacity': 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 45
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 49
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 53
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: "/assets/images/icon/2.png",
    alt: "",
    className: "product-2-layout-view",
    onClick: function onClick() {
      return setGrid('col-lg-6');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 57
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 53
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: "/assets/images/icon/3.png",
    alt: "",
    className: "product-3-layout-view",
    onClick: function onClick() {
      return setGrid('col-lg-4');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 57
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 53
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: "/assets/images/icon/4.png",
    alt: "",
    className: "product-4-layout-view",
    onClick: function onClick() {
      return setGrid('col-lg-3');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 57
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 53
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: "/assets/images/icon/6.png",
    alt: "",
    className: "product-6-layout-view",
    onClick: function onClick() {
      return setGrid('col-lg-2');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 57
    }
  })))))))), __jsx("div", {
    className: "product-wrapper-grid ".concat(layout),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 33
    }
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 45
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 53
    }
  }, __jsx("img", {
    src: "/assets/images/empty-search.jpg",
    className: "img-fluid mb-4 mx-auto",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 57
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 57
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 61
    }
  }, "Your Cart is Empty")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 57
    }
  }, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 46
    }
  })), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 42
    }
  }, __jsx(_components_common_PostLoader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 46
    }
  }))) : data && data.products.items.map(function (product, i) {
    return __jsx("div", {
      className: grid,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 49
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
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
        lineNumber: 282,
        columnNumber: 57
      }
    }))));
  }))), __jsx("div", {
    className: "section-t-space",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 33
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: "12",
    md: "12",
    sm: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 41
    }
  }, data && data.products && data.products.hasMore && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return handlePagination();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 49
    }
  }, isLoading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9jb21tb24vcHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJjb2xDbGFzcyIsImxheW91dExpc3QiLCJvcGVuU2lkZWJhciIsIm5vU2lkZWJhciIsImNhcnRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwicXVhbnRpdHkiLCJ3aXNobGlzdENvbnRleHQiLCJXaXNobGlzdENvbnRleHQiLCJjb21wYXJlQ29udGV4dCIsIkNvbXBhcmVDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsaW1pdCIsInNldExpbWl0IiwiY3VyQ29udGV4dCIsIkN1cnJlbmN5Q29udGV4dCIsImdyaWQiLCJzZXRHcmlkIiwic3ltYm9sIiwic3RhdGUiLCJmaWx0ZXJDb250ZXh0IiwiRmlsdGVyQ29udGV4dCIsInNlbGVjdGVkQnJhbmRzIiwic2VsZWN0ZWRDb2xvciIsInNlbGVjdGVkUHJpY2UiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRTaXplIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwidXJsIiwic2V0VXJsIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInB1c2giLCJtaW4iLCJtYXgiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInR5cGUiLCJwcmljZU1heCIsInByaWNlTWluIiwiY29sb3IiLCJicmFuZCIsImluZGV4RnJvbSIsImxvYWRpbmciLCJkYXRhIiwiZmV0Y2hNb3JlIiwiaGFuZGxlUGFnaW5hdGlvbiIsInNldFRpbWVvdXQiLCJwcm9kdWN0cyIsIml0ZW1zIiwibGVuZ3RoIiwidXBkYXRlUXVlcnkiLCJwcmV2IiwiZmV0Y2hNb3JlUmVzdWx0IiwiX190eXBlbmFtZSIsInRvdGFsIiwiaGFzTW9yZSIsInJlbW92ZUJyYW5kIiwidmFsIiwidGVtcCIsInNwbGljZSIsImluZGV4T2YiLCJzZXRTZWxlY3RlZEJyYW5kcyIsInJlbW92ZVNpemUiLCJzZXRTZWxlY3RlZFNpemUiLCJyZW1vdmVDb2xvciIsInNldFNlbGVjdGVkQ29sb3IiLCJtYXAiLCJpIiwic2l6ZSIsInByb2R1Y3QiLCJhZGRUb0NvbXBhcmUiLCJhZGRUb1dpc2giLCJhZGRUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxrREFBSCwwbUNBQWxCOztBQW9DQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvRDtBQUFBOztBQUFBLE1BQWpEQyxRQUFpRCxRQUFqREEsUUFBaUQ7QUFBQSxNQUF2Q0MsVUFBdUMsUUFBdkNBLFVBQXVDO0FBQUEsTUFBNUJDLFdBQTRCLFFBQTVCQSxXQUE0QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDcEUsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxzREFBRCxDQUE5QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsV0FBVyxDQUFDRyxRQUE3QjtBQUNBLE1BQU1DLGVBQWUsR0FBR0gsd0RBQVUsQ0FBQ0ksa0ZBQUQsQ0FBbEM7QUFDQSxNQUFNQyxjQUFjLEdBQUdMLHdEQUFVLENBQUNNLCtFQUFELENBQWpDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFMb0Usa0JBTTFDQyxzREFBUSxDQUFDLENBQUQsQ0FOa0M7QUFBQSxNQU03REMsS0FONkQ7QUFBQSxNQU10REMsUUFOc0Q7O0FBT3BFLE1BQU1DLFVBQVUsR0FBR1osd0RBQVUsQ0FBQ2EsaUZBQUQsQ0FBN0I7O0FBUG9FLG1CQVE1Q0osc0RBQVEsQ0FBQ2QsUUFBRCxDQVJvQztB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S2FjLHNELEVBdUJvQmdDLDREOzs7S0E1QmpDOUMsVztBQXVRU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC5kMTllNmE4MGZhNGEwMzBhOTAwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2wsIFJvdywgTWVkaWEsIEJ1dHRvbiwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IE1lbnUyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lZ2EtbWVudS8yLmpwZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgRmlsdGVyQ29udGV4dCBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2ZpbHRlci9GaWx0ZXJDb250ZXh0JztcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9wcm9kdWN0LWJveC9Qcm9kdWN0Qm94MSc7XG5pbXBvcnQgeyBDdXJyZW5jeUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0N1cnJlbmN5L0N1cnJlbmN5Q29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUG9zdExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Qb3N0TG9hZGVyJztcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NhcnQnO1xuaW1wb3J0IHtXaXNobGlzdENvbnRleHR9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvd2lzaGxpc3QvV2lzaGxpc3RDb250ZXh0JztcbmltcG9ydCB7IENvbXBhcmVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9Db21wYXJlL0NvbXBhcmVDb250ZXh0JztcblxuY29uc3QgR0VUX1BST0RVQ1RTID0gZ3FsYFxuICAgIHF1ZXJ5ICBwcm9kdWN0cygkdHlwZTpfQ2F0ZWdvcnlUeXBlISwkaW5kZXhGcm9tOkludCEgLCRsaW1pdDpJbnQhLCRjb2xvcjpTdHJpbmchLCRicmFuZDpbU3RyaW5nIV0hLCRzb3J0Qnk6X1NvcnRCeSEsJHByaWNlTWF4OkludCEsJHByaWNlTWluOkludCEpIHtcbiAgICAgICAgcHJvZHVjdHMgKHR5cGU6ICR0eXBlICxpbmRleEZyb206JGluZGV4RnJvbSAsbGltaXQ6JGxpbWl0ICxjb2xvcjokY29sb3IgLGJyYW5kOiRicmFuZCAsc29ydEJ5OiRzb3J0QnkgLHByaWNlTWF4OiRwcmljZU1heCxwcmljZU1pbjokcHJpY2VNaW4pe1xuICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgIGhhc01vcmVcbiAgICAgICAgICAgIGl0ZW1zIHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgYnJhbmRcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSBcbiAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgIG5ld1xuICAgICAgICAgICAgICAgIHNhbGVcbiAgICAgICAgICAgICAgICBzdG9ja1xuICAgICAgICAgICAgICAgIGRpc2NvdW50XG4gICAgICAgICAgICAgICAgdmFyaWFudHN7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHNrdVxuICAgICAgICAgICAgICAgICAgICBzaXplXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgIGltYWdlX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltYWdlc3tcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWRcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgYWx0XG4gICAgICAgICAgICAgICAgICAgIHNyY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cblxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBjb2xDbGFzcywgbGF5b3V0TGlzdCxvcGVuU2lkZWJhcixub1NpZGViYXIgfSkgPT4ge1xuICAgIGNvbnN0IGNhcnRDb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4gICAgY29uc3QgcXVhbnRpdHkgPSBjYXJ0Q29udGV4dC5xdWFudGl0eTtcbiAgICBjb25zdCB3aXNobGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFdpc2hsaXN0Q29udGV4dCk7XG4gICAgY29uc3QgY29tcGFyZUNvbnRleHQgPSB1c2VDb250ZXh0KENvbXBhcmVDb250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDgpXG4gICAgY29uc3QgY3VyQ29udGV4dCA9IHVzZUNvbnRleHQoQ3VycmVuY3lDb250ZXh0KTtcbiAgICBjb25zdCBbZ3JpZCwgc2V0R3JpZF0gPSB1c2VTdGF0ZShjb2xDbGFzcylcbiAgICBjb25zdCBzeW1ib2wgPSBjdXJDb250ZXh0LnN0YXRlLnN5bWJvbDtcbiAgICBjb25zdCBmaWx0ZXJDb250ZXh0ID0gdXNlQ29udGV4dChGaWx0ZXJDb250ZXh0KTtcbiAgICBjb25zdCBzZWxlY3RlZEJyYW5kcyA9IGZpbHRlckNvbnRleHQuc2VsZWN0ZWRCcmFuZHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGZpbHRlckNvbnRleHQuc2VsZWN0ZWRDb2xvcjtcbiAgICBjb25zdCBzZWxlY3RlZFByaWNlID0gZmlsdGVyQ29udGV4dC5zZWxlY3RlZFByaWNlO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBmaWx0ZXJDb250ZXh0LnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkU2l6ZSA9IGZpbHRlckNvbnRleHQuc2VsZWN0ZWRTaXplXG4gICAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlKCdBc2NPcmRlcicpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKGxheW91dExpc3QpO1xuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIHNldFVybChwYXRobmFtZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKGAke3BhdGhuYW1lfT8ke2ZpbHRlckNvbnRleHQuc3RhdGV9JmJyYW5kPSR7c2VsZWN0ZWRCcmFuZHN9JmNvbG9yPSR7c2VsZWN0ZWRDb2xvcn0mc2l6ZT0ke3NlbGVjdGVkU2l6ZX0mbWluUHJpY2U9JHtzZWxlY3RlZFByaWNlLm1pbn0mbWF4UHJpY2U9JHtzZWxlY3RlZFByaWNlLm1heH1gKVxuICAgICAgICBcbiAgICB9LCBbc2VsZWN0ZWRCcmFuZHMsIHNlbGVjdGVkQ29sb3IsIHNlbGVjdGVkU2l6ZSwgc2VsZWN0ZWRQcmljZV0pO1xuXG4gICAgdmFyIHsgbG9hZGluZywgZGF0YSwgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMsIHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICB0eXBlOiBzZWxlY3RlZENhdGVnb3J5LFxuICAgICAgICAgICAgcHJpY2VNYXg6IHNlbGVjdGVkUHJpY2UubWF4LFxuICAgICAgICAgICAgcHJpY2VNaW46IHNlbGVjdGVkUHJpY2UubWluLFxuICAgICAgICAgICAgY29sb3I6IHNlbGVjdGVkQ29sb3IsXG4gICAgICAgICAgICBicmFuZDogc2VsZWN0ZWRCcmFuZHMsXG4gICAgICAgICAgICBzb3J0Qnk6IHNvcnRCeSxcbiAgICAgICAgICAgIGluZGV4RnJvbTogMCxcbiAgICAgICAgICAgIGxpbWl0OiBsaW1pdFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+XG4gICAgICAgICAgICBmZXRjaE1vcmUoe1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBpbmRleEZyb206IGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXYsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6IHByZXYucHJvZHVjdHMuX190eXBlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogcHJldi5wcm9kdWN0cy50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogWy4uLnByZXYucHJvZHVjdHMuaXRlbXMsIC4uLmZldGNoTW9yZVJlc3VsdC5wcm9kdWN0cy5pdGVtc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogZmV0Y2hNb3JlUmVzdWx0LnByb2R1Y3RzLmhhc01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9KSwgMTAwMClcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVCcmFuZCA9ICh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcCA9IFsuLi5zZWxlY3RlZEJyYW5kc107XG4gICAgICAgIHRlbXAuc3BsaWNlKHNlbGVjdGVkQnJhbmRzLmluZGV4T2YodmFsKSwgMSk7XG4gICAgICAgIGZpbHRlckNvbnRleHQuc2V0U2VsZWN0ZWRCcmFuZHModGVtcClcblxuICAgICAgICByb3V0ZXIucHVzaChgJHt1cmx9PyR7ZmlsdGVyQ29udGV4dC5zdGF0ZX0mYnJhbmQ9JHt0ZW1wfSZjb2xvcj0ke3NlbGVjdGVkQ29sb3J9JnNpemU9JHtzZWxlY3RlZFNpemV9Jm1pblByaWNlPSR7c2VsZWN0ZWRQcmljZS5taW59Jm1heFByaWNlPSR7c2VsZWN0ZWRQcmljZS5tYXh9YClcblxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVNpemUgPSAodmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBbLi4uc2VsZWN0ZWRTaXplXTtcbiAgICAgICAgdGVtcC5zcGxpY2Uoc2VsZWN0ZWRTaXplLmluZGV4T2YodmFsKSwgMSk7XG4gICAgICAgIGZpbHRlckNvbnRleHQuc2V0U2VsZWN0ZWRTaXplKHRlbXApXG5cbiAgICAgICAgcm91dGVyLnB1c2goYCR7dXJsfT8ke2ZpbHRlckNvbnRleHQuc3RhdGV9JmJyYW5kPSR7dGVtcH0mY29sb3I9JHtzZWxlY3RlZENvbG9yfSZzaXplPSR7dGVtcH0mbWluUHJpY2U9JHtzZWxlY3RlZFByaWNlLm1pbn0mbWF4UHJpY2U9JHtzZWxlY3RlZFByaWNlLm1heH1gKVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ29sb3IgPSAoKSA9PiB7XG4gICAgICAgIGZpbHRlckNvbnRleHQuc2V0U2VsZWN0ZWRDb2xvcihcIlwiKVxuICAgICAgICByb3V0ZXIucHVzaChgJHt1cmx9PyR7ZmlsdGVyQ29udGV4dC5zdGF0ZX0mYnJhbmQ9JHtzZWxlY3RlZEJyYW5kc30mY29sb3I9JHtzZWxlY3RlZENvbG9yfSZzaXplPSR7c2VsZWN0ZWRTaXplfSZtaW5QcmljZT0ke3NlbGVjdGVkUHJpY2UubWlufSZtYXhQcmljZT0ke3NlbGVjdGVkUHJpY2UubWF4fWApXG4gICAgfVxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1tYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1maWx0ZXItdGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEJyYW5kcy5tYXAoKGJyYW5kLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJmaWx0ZXJfdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJhbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUJyYW5kKGJyYW5kKX0gPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQ29sb3I/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwiZmlsdGVyX3RhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiBvbkNsaWNrPXtyZW1vdmVDb2xvcn0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemUubWFwKChzaXplLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtudWxsfSBjbGFzc05hbWU9XCJmaWx0ZXJfdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNsb3NlXCIgb25DbGljaz17KCkgPT4gcmVtb3ZlU2l6ZShzaXplKX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwiZmlsdGVyX3RhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZToge3NlbGVjdGVkUHJpY2UubWlufS0ge3NlbGVjdGVkUHJpY2UubWF4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24tcHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXRvcC1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFub1NpZGViYXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1tYWluLWJ0blwiIG9uQ2xpY2s9eygpID0+IG9wZW5TaWRlYmFyKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItYnRuIGJ0biBidG4tdGhlbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbHRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZmlsdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YSA/IGBTaG93aW5nIFByb2R1Y3RzIDEtJHtkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aH0gb2YgJHtkYXRhLnByb2R1Y3RzLnRvdGFsfWAgOiAnbG9hZGluZyd9IFJlc3VsdDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24tdmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10aCBncmlkLWxheW91dC12aWV3XCIgb25DbGljaz17KCkgPT4geyBzZXRMYXlvdXQoJycpOyBzZXRHcmlkKCdjb2wtbGctMycpIH19PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1saXN0LXVsIGxpc3QtbGF5b3V0LXZpZXdcIiBvbkNsaWNrPXsoKSA9PiB7IHNldExheW91dCgnbGlzdC12aWV3Jyk7IHNldEdyaWQoJ2NvbC1sZy0xMicpIH19PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1ncmlkLXZpZXdcIiBzdHlsZT17bGF5b3V0ID09PSAnbGlzdC12aWV3JyA/IHsgJ29wYWNpdHknOiAwIH0gOiB7ICdvcGFjaXR5JzogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9pbWFnZXMvaWNvbi8yLnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC0yLWxheW91dC12aWV3XCIgb25DbGljaz17KCkgPT4gc2V0R3JpZCgnY29sLWxnLTYnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvYXNzZXRzL2ltYWdlcy9pY29uLzMucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LTMtbGF5b3V0LXZpZXdcIiAgb25DbGljaz17KCkgPT4gc2V0R3JpZCgnY29sLWxnLTQnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9pbWFnZXMvaWNvbi80LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC00LWxheW91dC12aWV3XCIgb25DbGljaz17KCkgPT4gc2V0R3JpZCgnY29sLWxnLTMnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvYXNzZXRzL2ltYWdlcy9pY29uLzYucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LTYtbGF5b3V0LXZpZXdcIiBvbkNsaWNrPXsoKSA9PiBzZXRHcmlkKCdjb2wtbGctMicpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3Qtd3JhcHBlci1ncmlkICR7bGF5b3V0fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgQm94ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghZGF0YSB8fCAhZGF0YS5wcm9kdWN0cyB8fCAhZGF0YS5wcm9kdWN0cy5pdGVtcyB8fCBkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCA9PT0gMCB8fCBsb2FkaW5nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEgJiYgZGF0YS5wcm9kdWN0cyAmJiBkYXRhLnByb2R1Y3RzLml0ZW1zICYmIGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBlbXB0eS1jYXJ0LWNscyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC9hc3NldHMvaW1hZ2VzL2VtcHR5LXNlYXJjaC5qcGdgfSBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItNCBteC1hdXRvXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzdHJvbmc+WW91ciBDYXJ0IGlzIEVtcHR5PC9zdHJvbmc+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkV4cGxvcmUgbW9yZSBzaG9ydGxpc3Qgc29tZSBpdGVtcy48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTAgbWFyZ2luLWRlZmF1bHQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGEgJiYgZGF0YS5wcm9kdWN0cy5pdGVtcy5tYXAoKHByb2R1Y3QsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkfSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIGRlcz17dHJ1ZX0gcHJvZHVjdD17cHJvZHVjdH0gc3ltYm9sPXtzeW1ib2x9IGNhcnRDbGFzcz1cImNhcnQtaW5mbyBjYXJ0LXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29tcGFyZT17KCkgPT4gY29tcGFyZUNvbnRleHQuYWRkVG9Db21wYXJlKHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkV2lzaGxpc3Q9eygpID0+IHdpc2hsaXN0Q29udGV4dC5hZGRUb1dpc2gocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDYXJ0PXsoKSA9PiBjYXJ0Q29udGV4dC5hZGRUb0NhcnQocHJvZHVjdCxxdWFudGl0eSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhsPVwiMTJcIiBtZD1cIjEyXCIgc209XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnByb2R1Y3RzICYmIGRhdGEucHJvZHVjdHMuaGFzTW9yZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdpbmF0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgdmFyaWFudD1cImxpZ2h0XCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9