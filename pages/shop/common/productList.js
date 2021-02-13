import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Media, Button, Spinner } from 'reactstrap';
import Menu2 from '../../../public/assets/images/mega-menu/2.jpg';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import FilterContext from '../../../helpers/filter/FilterContext';
import ProductItem from '../../../components/common/product-box/ProductBox1';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import { useRouter } from 'next/router';
import PostLoader from '../../../components/common/PostLoader';
import CartContext from '../../../helpers/cart';
import {WishlistContext} from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';

const GET_PRODUCTS = gql`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!,$color:String!,$brand:[String!]!,$sortBy:_SortBy!,$priceMax:Int!,$priceMin:Int!) {
        products (type: $type ,indexFrom:$indexFrom ,limit:$limit ,color:$color ,brand:$brand ,sortBy:$sortBy ,priceMax:$priceMax,priceMin:$priceMin){
            total
            hasMore
            items {
                id
                title
                description
                type
                brand
                category 
                price
                new
                sale
                stock
                discount
                variants{
                    id
                    sku
                    size
                    color
                    image_id
                }
                images{
                    image_id
                    id
                    alt
                    src
                }
            }
        }
    }
`;


const ProductList = ({ colClass, layoutList,openSidebar,noSidebar }) => {
    const cartContext = useContext(CartContext);
    const quantity = cartContext.quantity;
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const router = useRouter();
    const [limit, setLimit] = useState(8)
    const curContext = useContext(CurrencyContext);
    const [grid, setGrid] = useState(colClass)
    const symbol = curContext.state.symbol;
    const filterContext = useContext(FilterContext);
    const selectedBrands = filterContext.selectedBrands;
    const selectedColor = filterContext.selectedColor;
    const selectedPrice = filterContext.selectedPrice;
    const selectedCategory = filterContext.state;
    const selectedSize = filterContext.selectedSize
    const [sortBy, setSortBy] = useState('AscOrder');
    const [isLoading, setIsLoading] = useState(false);
    const [layout, setLayout] = useState(layoutList);
    const [url, setUrl] = useState();

    useEffect(() => {
        const pathname = window.location.pathname;
        setUrl(pathname);
        router.push(`${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`)
        
    }, [selectedBrands, selectedColor, selectedSize, selectedPrice]);

    var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
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
    });
    
    const handlePagination = () => {
        setIsLoading(true);
        setTimeout(() =>
            fetchMore({
                variables: {
                    indexFrom: data.products.items.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    setIsLoading(false)
                    return {
                        products: {
                            __typename: prev.products.__typename,
                            total: prev.products.total,
                            items: [...prev.products.items, ...fetchMoreResult.products.items],
                            hasMore: fetchMoreResult.products.hasMore,
                        },
                    };
                }


            }), 1000)
    }

    const removeBrand = (val) => {
        const temp = [...selectedBrands];
        temp.splice(selectedBrands.indexOf(val), 1);
        filterContext.setSelectedBrands(temp)

        router.push(`${url}?${filterContext.state}&brand=${temp}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`)

    }
   
    return (
        <Col className="collection-content">
            <div className="page-main-content">
                <Row>
                    <Col sm="12">
                        <div className="collection-product-wrapper">
                            <div className="product-top-filter">
                                {!noSidebar?
                                <Row>
                                    <Col xl="12">
                                        <div className="filter-main-btn" onClick={() => openSidebar()}>
                                            <span className="filter-btn btn btn-theme">
                                                <i className="fa fa-filter" aria-hidden="true"></i> Filter
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                :""
                                } 
                            </div>
                            <div className={`product-wrapper-grid ${layout}`}>
                                <Row>
                                    {/* Product Box */}
                                    {(!data || !data.products || !data.products.items || data.products.items.length === 0 || loading) ?
                                        (data && data.products && data.products.items && data.products.items.length === 0) ?
                                            <Col xs="12">
                                                <div>
                                                    <div className="col-sm-12 empty-cart-cls text-center">
                                                        <img src={`/assets/images/empty-search.jpg`} className="img-fluid mb-4 mx-auto" alt="" />
                                                        <h3><strong>Your Cart is Empty</strong></h3>
                                                        <h4>Explore more shortlist some items.</h4>
                                                    </div>
                                                </div>
                                            </Col>
                                            :
                                            <div className="row mx-0 margin-default mt-4">
                                         <div className="col-xl-3 col-lg-4 col-6">
                                             <PostLoader />
                                         </div>
                                         <div className="col-xl-3 col-lg-4 col-6">
                                             <PostLoader />
                                         </div>
                                         <div className="col-xl-3 col-lg-4 col-6">
                                             <PostLoader />
                                         </div>
                                         <div className="col-xl-3 col-lg-4 col-6">
                                             <PostLoader />
                                         </div>
                                     </div>
                                        : data && data.products.items.map((product, i) =>
                                            <div className={grid} key={i}>
                                                <div className="product">
                                                    <div>
                                                        <ProductItem des={true} product={product} symbol={symbol} cartClass="cart-info cart-wrap"
                                                            addCompare={() => compareContext.addToCompare(product)}
                                                            addWishlist={() => wishlistContext.addToWish(product)}
                                                            addCart={() => cartContext.addToCart(product,quantity)} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </Row>
                            </div>
                            <div className="section-t-space">
                                <div className="text-center">
                                    <Row>
                                        <Col xl="12" md="12" sm="12">
                                            {data && data.products && data.products.hasMore &&
                                                <Button onClick={() => handlePagination()}>
                                                    {isLoading &&
                                                        <Spinner animation="border" variant="light" />}
                                                    Load More
                                                </Button>}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default ProductList;