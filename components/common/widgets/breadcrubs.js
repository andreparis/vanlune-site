import React, { useEffect, useState } from 'react';
import { Container, Row ,Col } from 'reactstrap';
import {getHome} from '../../../services/game';

const Breadcrubs = ({title ,parent ,subTitle}) => {
    const [home, setHome] = useState('/');

    useEffect(()=>{
        setHome(getHome());
    }, []);

    return (
        <div className="breadcrumb-section">
            <Container>
                <Row>
                    <Col sm="6">
                        <div className="page-title">
                            <h2>{title}</h2>
                        </div>
                    </Col>
                    <Col sm="6">
                        <nav aria-label="breadcrumb" className="theme-breadcrumb">
                            <ol className="breadcrumb">
                               {home ? <li className="breadcrumb-item"><a href={home} >{parent}</a></li> : ''}
                                <li className="breadcrumb-item" aria-current="page">{title}</li>
                                {
                                    subTitle === undefined ?
                                    ''
                                    :
                                    <li className="breadcrumb-item active" aria-current="page">{subTitle}</li>
                                }
                                
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Breadcrubs;