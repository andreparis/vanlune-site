import React, { Fragment } from 'react';
import { Container, Media} from 'reactstrap';
import banner1 from '../../../public/assets/images/beauty/example.jpg';

const CenterImage = () => {
    return (
        <Fragment>
            <section className="pb-0">
                <Container>
                    <div className="center" >
                    <Media src={banner1} className="img-fluid" alt="" />
                    </div>
                </Container>
            </section>
        </Fragment>
    );
}

export default CenterImage;