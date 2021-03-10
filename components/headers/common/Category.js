import React from 'react';
import Slider from 'react-slick';
import { Product4 } from '../../../services/script';
import { Container, Row, Col, Media } from 'reactstrap';
import cart from '../../../public/assets/images/icon/gold.png';
import cart2 from '../../../public/assets/images/icon/raids.png';
import cart3 from '../../../public/assets/images/icon/mythic_.png';
import cart4 from '../../../public/assets/images/icon/pvp.png';


const Category = () => {
    return (
        <Container>
            <section className="section-b-space border-section border-top-0">
                <Row>
                    <Col>
                        <Slider {...Product4} className="slide-6 no-arrow">
                            <div className="category-block">
                                <a href="/shop.html?product=gold">
                                    <div className="category-image"><Media src={cart} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="/shop?product=gold">
                                        <h5>gold</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="/shop.html?product=raids">
                                    <div className="category-image"><Media src={cart2} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="/shop.html?product=raids">
                                        <h5>raids</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="/shop.html?product=mythic">
                                    <div className="category-image"><Media src={cart3} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="/shop.html?product=mythic">
                                        <h5>mythic</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="/shop.html?product=pvp">
                                    <div className="category-image"><Media src={cart4} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="/shop.html?product=pvp">
                                        <h5>pvp</h5>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Category;