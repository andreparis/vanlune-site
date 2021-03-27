import React, {useState, useEffect, useContext} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import LoginContext from '../../../helpers/login';
import axios from 'axios';
import { Spinner, Container, Row, Col, Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';

const Order = () => {
    const loginContext = useContext(LoginContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState({ currentPage: 0, offset: 1, perPage: 5});

    useEffect(() => {
        if (!loginContext.isValid())
            loginContext.logOut();
        getOrder();
    }, []);

    useEffect(() => {
        handlePageClick({
            selected: 0
        });
    }, [orders]);
    
    const getOrder = () => {
        setIsLoading(true);        
        try {
            let user = loginContext.getUser();
            let userId = user['id'];
            let token = loginContext.getAuthToken();
            axios.get(process.env.ORDERS_URL + "/user?user="+userId, 
            { 
                headers: {
                    AuthorizationToken: token,
                }
            }).then ((result) => {
                if (result.status != 200)
                    throw "error in network";
                setOrders(result.data.Content);
                setIsLoading(false);
            })
            .catch((error) => {
                getOrder();
            });
        }
        catch (error) { 
            setIsLoading(false);
            getOrder();
            console.log(error);
        }
    }

    const handlePageClick = (e) => {
        if (orders.length == 0)
            return;
        console.log("handlePageClick");
        console.log(e);
        console.log(orders);
        const selectedPage = e.selected;
        const offset = selectedPage * state.perPage;
        console.log("offset = "+ offset + "; state.perPage = "+ state.perPage);
        const slice = orders.slice(offset, offset + state.perPage);
        console.log(slice);
        const postData = items(slice);
        setState({
            perPage: 5,
            currentPage: selectedPage,
            offset: offset,
            pageCount: Math.ceil(orders.length / state.perPage),
            postData
        });
    };

    const items = (products) => {
        return products.map((item, i) => 
            <tbody key={i}>
                <tr>
                    <td>
                        <p>{item.id}</p>
                    </td>
                    <td> {item.product.title} </td>
                    <td>
                        <p>{item.quantity}</p>
                    </td>
                    <td >
                        <p>{item.price}</p>
                    </td>
                    <td>
                        <p>{item.variant.name + " - " + item.variant.factor}</p>
                    </td>
                    <td>
                        <p>{item.amount}</p>
                    </td>
                    <td> {item.status == 1?
                            <p style={{color: "orange"}}><b>In Service</b></p> :
                            item.status == 2?
                            <p style={{color: "green"}}><b>Delivered</b></p> :
                            item.status == 3?
                            <p style={{color: "red"}}><b>Canceled</b></p> :
                            <p style={{color: "black"}}><b>Waiting for Service</b></p>
                        }                                                    
                    </td>
                </tr>
            </tbody>);
    }

    const TableFragment = () => (
        <>
            { orders.length > 0 ? state.postData : '' }
        </>
    )

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
                                    <TableFragment />                                   
                                </Table>
                                <ReactPaginate
                                        previousLabel={"prev"}
                                        nextLabel={"next"}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={state.pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination"}
                                        subContainerClassName={"pages pagination"}
                                        activeClassName={"active"}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            }
        </CommonLayout>
    )
}

export default Order;