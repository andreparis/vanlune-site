import React, { useEffect, useState } from 'react';
import '../public/assets/scss/app.scss';
import { ToastContainer } from 'react-toastify';
import TapTop from '../components/common/widgets/Tap-Top';
import { MenuContextProvider } from '../helpers/menu/MenuContext';
import CartContextProvider from '../helpers/cart/CartContext';
import LoginProvider from '../helpers/login/LoginContext';
import { WishlistContextProvider } from '../helpers/wishlist/WishlistContext';
import FilterProvider from '../helpers/filter/FilterProvider';
import SettingProvider from '../helpers/theme-setting/SettingProvider';
import { CompareContextProvider } from '../helpers/Compare/CompareContext';
import { CurrencyContextProvider } from '../helpers/Currency/CurrencyContext';
import Helmet from 'react-helmet';


export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add('light');
    setTimeout(function () {
      setIsLoading(false);      
    }, 1000);

  }, []);
  return (
    <>
      {
        isLoading ?

          <div className="loader-wrapper" >
            {
              url === 'Christmas' ?
                <div id="preloader"></div>
                :
                <div className="loader"></div>
            }


          </div>
          :
          <>
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>PLAYER2 - Best ecommerce for Gamers</title>
          </Helmet>
            <div>
              <SettingProvider>
                <LoginProvider>
                  <CompareContextProvider>
                    <CurrencyContextProvider>
                      <CartContextProvider>
                        <WishlistContextProvider>
                          <MenuContextProvider>
                            <FilterProvider>
                              <Component {...pageProps} />
                            </FilterProvider>
                          </MenuContextProvider>
                        </WishlistContextProvider>
                      </CartContextProvider>
                    </CurrencyContextProvider>
                  </CompareContextProvider>
                  </LoginProvider>
              </SettingProvider>             
              <ToastContainer />
              <TapTop />
            </div>
          </>
      }

    </>
  )
}