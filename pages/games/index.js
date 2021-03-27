import React from 'react';
import SpecialProducts from '../../components/common/Collections/TabCollection1';
import ServiceLayout from '../../components/common/Service/service1';
import CommonLayout from '../../components/shop/common-layout';
import { Product4 } from '../../services/script';

const Games = () => {
  return (
      <CommonLayout parent="home" >
        <div className="section-b-space" />
          <SpecialProducts type="fashion" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space" inner="title-inner1"  designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" /> 
          <ServiceLayout sectionClass="border-section small-section" />
          <div className="section-b-space">
        </div>
      </CommonLayout>
  )
}

export default Games;