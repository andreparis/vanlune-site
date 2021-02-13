import React from 'react';
import Banner from './layouts/Fashion/Components/Banner'
import SpecialProducts from '../components/common/Collections/TabCollection1';
import ServiceLayout from '../components/common/Service/service1';
import FooterFive from '../components/footers/footer-five';
import HeaderThree from '../components/headers/header-three';
import { withApollo } from '../helpers/apollo/apollo';
import { Product4 } from '../services/script';
import Helmet from 'react-helmet';
import favicon from '../public/assets/images/favicon/1.png'
import CenterImage from './MainPage/Component/CenterImage';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
      </Helmet>
      <HeaderThree logoName={'logo.png'} topClass="top-header" />
      <Banner /> 
      <SpecialProducts type="fashion" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space" inner="title-inner1"  designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" /> 
      <ServiceLayout sectionClass="border-section small-section" />
      <div className="section-b-space">
      </div>
      <FooterFive logoName={'logo.png'} />
    </>
  )
}

export default withApollo(Home);