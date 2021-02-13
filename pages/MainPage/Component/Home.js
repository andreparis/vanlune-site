import React from 'react';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';

const HomeSlider = () => {
    return (
        <section className="p-0">
        <Slider className="slide-1 home-slider">
            <div>
                <div className="home text-center home36">
                    <Container>
                        <Row>
                            <Col>
                                <div className="slider-contain">
                                    <div>
                                        <h4>You find only here</h4>
                                        <h1>The best offer for you</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Slider>
    </section>
    )
}

export default HomeSlider;