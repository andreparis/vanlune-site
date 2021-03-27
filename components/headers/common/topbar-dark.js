import React, {useContext} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginContext from '../../../helpers/login';
import {setLocalGame} from '../../../services/game';
import { GiGamepad, GiAstronautHelmet  } from 'react-icons/gi';

const TopBarDark = ({ topClass, fluid }) => {
    const router = useRouter();
    const loginContext = useContext(LoginContext);
    const isLogged = loginContext.isValid();

    const handleClick = (game) => {
        setLocalGame(game);
        
    }

    const handleClickAlert = () => {
        alert('Thank you to try visit LoL store. However, we are still customizing the best kits for you!');
        
    }

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
                            <li className="onhover-dropdown mobile-account">
                                    <GiGamepad  />Games
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link href={`/games&game=wow`} onClick={() => handleClick('wow')}>
                                                <a><b>WoW</b></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" onClick={handleClickAlert}>
                                                <a><b>LoL</b></a>
                                            </Link>
                                        </li>                                   
                                </ul>
                            </li>
                            <li className="mobile-wishlist">
                                <Link href="/account/wishlist">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> wishlist</a>
                                </Link>
                            </li>
                            <li className="onhover-dropdown mobile-account">
                                <GiAstronautHelmet /> My Account
                                    <ul className="onhover-show-div">
                                    { !isLogged ?
                                    <>
                                        <li>
                                            <Link href={`/account/login`}>
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                    </> : <>
                                        <li>
                                            <Link  href={`/account/orders`}>
                                                <a>Orders</a>
                                            </Link>
                                        </li>
                                        <li onClick={() => logout()}>
                                            <a>Logout</a>
                                        </li>
                                    </>
                                    }                                    
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