import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home home1 text-center">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>welcome to Vanlune</h4>
                        <h1>For Gamers</h1>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  )
}

export default Banner