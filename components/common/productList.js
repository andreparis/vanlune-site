import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Media, Button, Spinner } from 'reactstrap';
import ProductItem from './product-box/ProductBox8';
import { CurrencyContext } from '../../helpers/Currency/CurrencyContext';
import { useRouter } from 'next/router';
import PostLoader from './PostLoader';
import CartContext from '../../helpers/cart';
import {WishlistContext} from '../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../helpers/Compare/CompareContext';
import axios from 'axios';


const ProductList = ({ colClass, layoutList,openSidebar,noSidebar }) => {
    const cartContext = useContext(CartContext);
    const quantity = cartContext.quantity;
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const router = useRouter();
    const curContext = useContext(CurrencyContext);
    const [grid, setGrid] = useState(colClass)
    const symbol = curContext.state.symbol;
    const [isLoading, setIsLoading] = useState(false);
    const [layout, setLayout] = useState(layoutList);
    const [product, setProduct] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        setProduct(router.query.product);

    }, [router.query.product]);

    useEffect(() => {
        setIsLoading (true);
        getProducts(product)
        .then(setIsLoading (false));       
    },
    [product]);

    const getProducts = async (product) => {
        if (product == undefined || product == '') return;
        try {
            const result = await axios.get(process.env.PRODUCTS_URL + '/filters', {
                params: {
                    categoryName: product
                }
            });
            setData(result.data.Content);            
        } catch (e) {
        }        
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
                                    {(!data || isLoading) ?
                                        (data && data.length === 0) ?
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
                                        : data && data.map((product, i) =>
                                            <div className={grid} key={i}>
                                                <div className="product">
                                                    <div>
                                                        <ProductItem des={true} product={product} symbol={symbol} cartClass="cart-info cart-wrap"
                                                            addCompare={() => compareContext.addToCompare(product)}
                                                            addWishlist={() => wishlistContext.addToWish(product)}
                                                            addCart={(customize, variant) => cartContext.addToCart(product,quantity,customize, variant)} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default ProductList;