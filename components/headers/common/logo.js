import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import {getHome} from '../../../services/game';

const LogoImage = ({ logo }) => {
    const [home, setHome] = useState('/');

    useEffect(()=>{
        setHome(getHome());
    }, []);

    return (
        <Fragment>
            {home ? <Link href={home} >
                <a>
                    <img src={`/assets/images/icon/${logo?logo:'logo.png'}`} alt="" className="img-fluid" />
                </a>
            </Link> : ''}
        </Fragment>
    )
}

export default LogoImage;