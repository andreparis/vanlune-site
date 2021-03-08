import React, { useState, useContext, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductItem from '../product-box/ProductBox1';
import CartContext from '../../../helpers/cart/index'
import { Container, Row, Col, Media } from 'reactstrap';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import PostLoader from '../PostLoader';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import emptySearch from '../../../public/assets/images/empty-search.jpg';
import axios from 'axios';

const SpecialProducts = ({ type, fluid, designClass, cartClass, heading, noTitle, title, inner, line, hrClass, backImage }) => {
    const [activeTab, setActiveTab] = useState('new');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(CartContext);
    const wishListContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const quantity = context.quantity;

    useEffect(() => {
        async function fetchData () {
            setIsLoading(true);
            try {
                await axios
                .get(process.env.PRODUCTS_URL+"/tag?tag="+activeTab+'&game=1')
                .then(function (result) {
                    if (result.status != 200)
                        throw "";
                    setData(result.data.Content);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            catch {
                setActiveTab(activeTab);
                console.log('failed');
            }
            setIsLoading(false);            
        }
        fetchData();
    }, [activeTab]);
    return (
        <div>
            <section className={designClass}>
                <Container fluid={fluid} >
                    {
                        noTitle ?
                            ''
                            :
                            <div className={title}>
                                <h4>{heading}</h4>
                                {/* exclusive products */}
                                <h2 className={inner}>special products</h2>
                                {
                                    line ?
                                        <div className="line"></div>
                                        :
                                        hrClass ?
                                            <hr role="tournament6"></hr>
                                            : ''
                                }
                            </div>
                    }

                    <Tabs className="theme-tab">
                        <TabList className="tabs tab-title">
                            <Tab className={activeTab == type ? 'active' : ''} onClick={() => setActiveTab('new')}>NEW ARRIVAL</Tab>
                            <Tab className={activeTab == 'furniture' ? 'active' : ''} onClick={() => setActiveTab('sale')}>SALES </Tab>
                            <Tab className={activeTab == 'furniture' ? 'active' : ''} onClick={() => setActiveTab('special')}>SPECIAL</Tab>
                        </TabList>

                        <TabPanel>
                            <Row className="no-slider">
                                {isLoading ?
                                <div className="row mx-0 margin-default">
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
                                </div> :
                                data.length === 0 ?
                                        <Col xs="12">
                                            <div>
                                                <div className="col-sm-12 empty-cart-cls text-center">
                                                    <Media src={emptySearch} className="img-fluid mb-4 mx-auto" alt="" />
                                                    <h3><strong>Your Cart is Empty</strong></h3>
                                                    <h4>Explore more shortlist some items.</h4>
                                                </div>
                                            </div>
                                        </Col> :
                                        data && data.slice(0, 8).map((product, i) =>
                                            <ProductItem key={i} product={product} symbol={currency.symbol}
                                                addCompare={() => compareContext.addToCompare(product)}
                                                addCart={() => context.addToCart(product, quantity)}
                                                addWishlist={() => wishListContext.addToWish(product)}
                                                cartClass={cartClass} backImage={backImage} />
                                        )
                                }
                            </Row>

                        </TabPanel>
                    </Tabs>
                </Container>
            </section>
        </div>
    )
}

export default SpecialProducts;