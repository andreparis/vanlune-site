import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import { Row, Container } from 'reactstrap';
import ProductList from './common/productList';

const ShopPage = () => {
    return (
        <CommonLayout title="ShopPage" parent="home" >
             <section className="section-b-space">
            <Container>
                <Row>
                    <ProductList colClass="col-lg-2 col-6 col-grid-box" layoutList='' noSidebar={true} />
                </Row>
            </Container>
            </section>
        </CommonLayout>
    )
}

export default withApollo(ShopPage);