import React from 'react';
import Slider from 'react-slick';
import { Product2 } from '../../services/script';
import { Container, Row, Col, Media } from 'reactstrap';
import cart from '../../public/assets/images/banner/wow.ico';
import cart2 from '../../public/assets/images/banner/lol.png';
import { setLocalGame } from '../../services/game';

const Banner = () => {

    const handleClick = (game) => {
        setLocalGame(game);        
    }

  return (
    <div className="image-bg-full image">
      <Container>
            <section className="section-b-space border-top-0">
                <Row>
                    <Col>
                        <Slider {...Product2} className="slide-6 no-arrow">
                          <div className="category-block-home">
                            <a href="/games?game=wow" onClick={() => handleClick("wow")}>
                                <div className="category-image"><Media  src={cart} alt="World of Warcraft" /></div>
                            </a>
                        </div>
                        <div className="category-block-home">
                            <a href="">
                                <div className="category-image"><Media  src={cart2} alt="In Development" /></div>
                            </a>
                        </div>
                        </Slider>
                    </Col>
                </Row>
            </section>
        </Container>
    </div>
  )
}

export default Banner;