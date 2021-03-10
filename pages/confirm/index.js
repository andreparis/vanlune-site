import React, {useEffect, useState } from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import axios from 'axios'

const ConfirmPage = () => {
    const router = useRouter();
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            setIsConfirmed(false);
            console.log(router.query.u19);
            let payload = { link: router.query.u19 };
            try {
                await axios
                .post(process.env.ACCOUNT_URL+'/confirm', JSON.stringify(payload))
                .then(function (result) {
                    if (result.status != 200) throw "";       
                    setMessage("E-mail Confirmed");
                });
            }
            catch {
                setMessage("Something got wrong... Please, try again later!");
            }
            setIsConfirmed(true);
          }
        fetchData();        
    }, []);



    return (
        <CommonLayout title="ConfirmPage" parent="home" >
            <section className="p-0">
                <Container>
                    <Row>
                        <Col sm="12">
                            <div className="error-section">
                                {isConfirmed ? <>
                                <h1>Thank You</h1>
                                <h2>{message}</h2> </> :
                                <h1>Wait</h1>
                                }
                                
                                <a href="/" className="btn btn-solid">back to home</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default ConfirmPage;