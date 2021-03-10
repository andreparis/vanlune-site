import React from 'react';
import HeaderShop from '../headers/header-shop';
import FooterFive from '../footers/footer-five';
import Breadcrubs from '../common/widgets/breadcrubs';
import Helmet from 'react-helmet';
import favicon from '../../public/assets/images/favicon/1.png'
import Category from '../headers/common/Category'

const CommonLayout = ({ children, title, parent ,subTitle }) => {
    return (
        <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        </Helmet>
            <HeaderShop topClass="top-header" logoName="logo.png" />
                <Category />
                <Breadcrubs title={title} parent={parent} subTitle={subTitle}  />
                <>{children}</>
            <FooterFive />
        </>
    )
}

export default CommonLayout;