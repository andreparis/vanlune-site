import React from 'react';
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
import { Container, Row, Col } from 'reactstrap';

const ServiceLayout = ({sectionClass}) => {
    return (
        <Container>
            <section className={sectionClass}>
                <Row>
                    <Col md='7' className="service-block">
                        <div className="media">
                            <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                            <div className="media-body">
                                <h4>24 X 7 service</h4>
                                <p>Always online for you</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='4' className="service-block">
                        <div className="media">
                            <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                            <div className="media-body">
                                <h4>festival offer</h4>
                                <p>Subscribe for new offers</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default ServiceLayout;