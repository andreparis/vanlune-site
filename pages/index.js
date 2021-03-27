import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../public/assets/images/favicon/1.png'
import Banner from '../components/banner/banner'

const Home = () => {
  return (
    <>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
      </Helmet>
      <Banner />
    </>
  )
}

export default Home;