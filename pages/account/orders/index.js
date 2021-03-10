import React, {useState, useEffect, useContext} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import LoginContext from '../../../helpers/login';
import axios from 'axios';
import {Router, useRouter} from 'next/router';
import { Spinner, Container, Row, Col, Table } from 'reactstrap';

const Order = () => {
    const loginContext = useContext(LoginContext);
    const [user, setUser] = useState(loginContext.userState);
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // if (loginContext.state.status == 1)
        //     router.push('/');
        async function fetchOrder () {
            setIsLoading(true);

            try {
                console.log(user);                
                console.log('id = '+ user.id);
                let result = await axios
                .get(process.env.ORDERS_URL + "/user?user=5", 
                    { headers: {
                            AuthorizationToken: loginContext.state.token
                        }
                    });
                if (result.status != 200)
                    throw "";
                console.log(result.data);
                setOrders(result.data.Content);
            }
            catch (error){ console.log(error) }
            setIsLoading(false);
        };
        fetchOrder();
    }, [user]);

    const ShowLoading = () => ( 
        <Spinner cstyle={{ width: '3rem', height: '3rem' }} type="grow" color="dark"/>
    )

    return (
        <CommonLayout parent="home" title="my orders">
            {isLoading ?
                <ShowLoading /> :
                <section className="wishlist-section section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <Table className="table cart-table table-responsive-xs">
                                    <thead>
                                        <tr className="table-head">
                                            <th scope="col">order</th>
                                            <th scope="col">product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">price</th>
                                            <th scope="col">variant</th>
                                            <th scope="col">amount</th>
                                            <th scope="col">status</th>
                                        </tr>
                                    </thead>
                                    {orders.map((item, i) =>
                                        <tbody key={i}>
                                            <tr>
                                                <td>
                                                    <p>{item.id}</p>
                                                </td>
                                                <td> {item.product.title} </td>
                                                <td>
                                                    <p>{item.quantity}</p>
                                                </td>
                                                <td>
                                                    <p>{item.price}</p>
                                                </td>
                                                <td>
                                                    <p>{item.variant.name + " - " + item.variant.factor}</p>
                                                </td>
                                                <td>
                                                    <p>{item.amount}</p>
                                                </td>
                                                <td> {item.status == 1?
                                                        <p style={{color: "orange"}}><b>In progress</b></p> :
                                                        item.status == 2?
                                                        <p style={{color: "green"}}><b>Completed</b></p> :
                                                        <p style={{color: "red"}}><b>Canceled</b></p>
                                                    }                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
        </CommonLayout>
    )
}

export default Order;