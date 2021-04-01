import React, { useContext, useEffect, useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import CheckoutPage from '../common/checkout-page';
import Login from '../login'
import LoginContext from '../../../helpers/login';

const Checkout = () => {
    const loginContext = useContext(LoginContext);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(loginContext.isValid());
    }, []);


    return (
        <>
        {isLogged ?
            <CommonLayout parent="home" title="checkout">
                <CheckoutPage />
            </CommonLayout>
        :
        <Login/>
        }
        </>
    )
}

export default Checkout;