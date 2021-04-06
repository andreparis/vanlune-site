import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container } from 'reactstrap';
import {goHome} from '../../../services/game';

const TermsPage = () => {

    const handleClick = () => {
        goHome();
    };

    return (
        <CommonLayout parent="home" title="Delete Account Steps">
                <Container>
<h3>Welcome to PLAYER2!</h3>
<p>In order to delete your accounts, you must follow these steps:</p>
<ul>
    <li>Login with your account</li> <br /> 

    <li>Go to dashboard</li> <br /> 
 
    <li>Click delete my account button</li> <br /> 

    <li>Confirm it</li> <br />
</ul>
                                <a href="" onClick={handleClick} className="btn btn-solid">back to home</a>
                </Container>
        </CommonLayout>
    )
}
export default TermsPage;