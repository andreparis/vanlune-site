import React, {useContext} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import firebase from '../../../config/base'
import { useRouter } from 'next/router';
import LoginContext from '../../../helpers/login';

const TopBarDark = ({ topClass, fluid }) => {
    const router = useRouter();
    const loginContext = useContext(LoginContext);
    const isLogged = loginContext.state.status == 0;

    const logout = () => {
        loginContext.logOut();

        router.push('/');
    }

    return (
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to PLAYER2</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist">
                                <Link href="/account/wishlist.html">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> wishlist</a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> My Account
                                    <ul className="onhover-show-div">
                                    { !isLogged ?
                                    <>
                                        <li>
                                            <Link href={`/account/login.html`}>
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/account/register.html`}>
                                                <a>Register</a>
                                            </Link>
                                        </li>
                                    </> : <>
                                        <li>
                                            <Link href={`#`}>
                                                <a>Orders</a>
                                            </Link>
                                        </li>
                                    </>
                                    }
                                    <li onClick={() => logout()}>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default TopBarDark;