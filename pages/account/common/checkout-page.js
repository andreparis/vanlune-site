import React, { useContext, useState, useEffect } from 'react';
import { Media, Container, Form, Row, Input, Col, Button } from 'reactstrap';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import CartContext from '../../../helpers/cart';
import paypal from '../../../public/assets/images/paypal.png';
import { useForm } from 'react-hook-form';
import {useRouter} from 'next/router';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import countryList from '../../../constants/countries';
import LoginContext from '../../../helpers/login';
import axios from 'axios';
import { Spinner } from 'reactstrap';


const CheckoutPage = () => {    
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.state;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol
    const [editForm, setEditForm] = useState(false);
    const [payment, setPayment] = useState('stripe');
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const router = useRouter();
    const [servers, setServer] = useState([])
    const [wowServer, setWowServer] = useState('');
    const [cartTotal, setCartTotal] = useState(cartContext.cartTotal);
    const loginContext = useContext(LoginContext);
    const [obj, setObj] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let name = loginContext.userState.name != undefined ? 
                (loginContext.userState.name + "").split(' ') : 
                ['', ''];
        setObj({
            first_name: name[0],
            last_name: name[1],
            char_name: '',
            wowServer: '',
            phone: loginContext.userState.phone,
            country: loginContext.userState.country,
            email: loginContext.userState.email
        });
    }, []);

    useEffect(() => {
        setWowServer(servers[0]);
    }, [servers]);

    useEffect(() => {
        let vars = []
        for(var i = 0.; i < cartItems.length; i++) {
            let variants = cartItems[i].variants
            for(let j = 0; j < variants.length; j++){
                if (!vars.includes(variants[j].name)) {
                    vars.push(variants[j].name);
                }
            }
        }
        setServer(vars);
    }, [cartItems])

    useEffect(() => {
        setCartTotalValue(wowServer);    
    }, [wowServer])

    const onSelectServer = (event) => {
        setWowServer(event.target.value);
    };

    const getFactForItem = (variants) => {
        for(let j = 0; j < variants.length; j++){
            if (variants[j].name == wowServer) {
                return variants[j].factor;
            }
        }
    }; 

    const getVariantForItem = (variants) => {
        for(let j = 0; j < variants.length; j++){
            if (variants[j].name == wowServer) {
                return variants[j];
            }
        }
    }

    const setCartTotalValue = (server) => {
        if (wowServer == undefined || 
            wowServer == '') {
                setCartTotal(cartContext.cartTotal);
                return;
            }
        let total = 0;
        for(var i = 0.; i < cartItems.length; i++) {
            let variants = cartItems[i].variants;
            let price = cartItems[i].price;
            let qdty = cartItems[i].qty;
            
            for(let j = 0; j < variants.length; j++){
                if(variants[j].name == server) {
                    total += (price * qdty * variants[j].factor)
                }
            }
        }
        setCartTotal(Math.round((total + Number.EPSILON) * 100) / 100);  
    };

    const checkhandle = (value) => {
        setPayment(value)
    }

    const onSuccess = (payment) => {
        router.push({
            pathname: '/account/order-success.html',
            state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
        })

    }

    const onSubmit = data => {
        if (data == '' || data == undefined) {
            errors.showMessages();
            return;
        }
        try {
            var char = new Object();
            char.name = data.char_name;
            char.game = "WoW";
            char.server = data.wowServer;

            var user = new Object();
            user.id = loginContext.userState.id;

            var orders = new Object();
            orders.orders = [];
            for (let i = 0; i < cartItems.length; i++) {
                var order = new Object();
                order.user = user;
                order.status = 1;
                order.product = cartItems[i];
                order.price = order.product.price;
                order.quantity = order.product.qty;
                order.variant = getVariantForItem(order.product.variants);
                order.amount = order.price * order.quantity * order.variant.factor;
                order.payment = 1;

                console.log(order);

                orders.orders.push(order);
            }
            postAxios(JSON.stringify(orders))
            .then(() => {
                alert('Order submited success!');
                //router.push("https://wa.me/+5527996609851?text="+whatsappText());
            }); 
        } catch { }
    }; 

    const whatsappText = () => {
        var text = "PLAYER2,\n\nPlayer 1, "+obj.first_name+" ("+obj.char_name+"), needs you! \n\n*Requested items*:";
        text += "\n\n*PRODUCT*       |    *PRICE*     ";
        for(let i = 0; i < cartItems.length; i++) {
            text+="\n"+cartItems[i].title+"  |  "+cartItems[i].price
        }
        text += "\n\n*Server*: "+wowServer+" with factor "+getFactForItem(cartItems[0].variants)
        text += "\n\n*Total*: R$ "+ cartTotal;

        return window.encodeURIComponent(text);
    };
    
    const postAxios = async (payload) => {
        try {
            let result = await axios.post(process.env.ORDERS_URL, payload);
            let data = result.data;
            console.log(data);    
            
            alert('Order submited success!');           
        } catch (e) {
            console.log(e);

            alert('Something got wrong!');
        }
    }

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj);
    }

    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        console.log("Error!", err);
    }

    const client = {
        sandbox: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
    }

    const onClickEditForm = async () => {
        if (editForm) {
            var payload = new Object();
            payload.Id = loginContext.userState.id;
            payload.name = obj.first_name + " " +obj.last_name;
            payload.email = obj.email;
            payload.country = obj.country;
            payload.phone = obj.phone;
            payload.characters = [];
            payload.idRoles = [];
            payload.password = "";
            payload.isActive = false;
            setIsLoading(true);
            try {
                await axios
                .put(process.env.ACCOUNT_URL,  
                    JSON.stringify(payload), {
                        headers: {
                            AuthorizationToken: loginContext.state.token
                        }
                    })
                .then(function(result) {
                    if (result.status != 200) {
                        throw "";                
                    }
                    loginContext.setUser({
                        name: payload.name,
                        country: payload.country,
                        email: payload.email,
                        phone: payload.phone
                    });
                });
            }
            catch (error){
                console.log(error);
                alert("Failed to update.Try again later!");
            }
            setIsLoading(false);            
        }
        setEditForm(!editForm)
    }

    const InputComponent = (value = "") => {   
        return (<input type="text" value={value.name} />);
    }

    const ShowLoading = () => ( 
        <Spinner cstyle={{ width: '3rem', height: '3rem' }} type="grow" color="dark"/>
    )

    return (
        <section className="section-b-space">
            <Container>
                <div className="checkout-page">
                    <div className="checkout-form">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col lg="6" sm="12" xs="12">
                                    <div className="checkout-title">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row check-out">
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Character Name</div>
                                            <input type="text" className={`${errors.char_name?'error_border':''}`} name="char_name" ref={register({ required: true })} />
                                            <span className="error-message">{errors.char_name && 'Character name is required'}</span>
                                           
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">WoW Server</div>
                                            <select name="wowServer" onChange={onSelectServer}  className={`${errors.wowServer?'error_border':''}`} ref={register({ required: true })}>
                                                {servers ?
                                                    servers.map((server, i) => {
                                                        return (<option key={i} value={server}>{server}</option>)
                                                    })
                                                    : ''
                                                }                                            
                                            </select>
                                            <span className="error-message">{errors.wowServer && 'WoW Server is required'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Your First Name</div>
                                            {editForm ? 
                                                <input type="text" placeholder={obj.first_name} onChange={setStateFromInput} className={`${errors.first_name?'error_border':''}`} name="first_name" ref={register({ required: true })} />:
                                                <InputComponent name={obj.first_name}/>                                                
                                            }
                                            <span className="error-message">{errors.first_name && 'First name is required'}</span>                                           
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Last Name</div>
                                            {editForm ?
                                            <input type="text" placeholder={obj.last_name} className={`${errors.last_name?'error_border':''}`}  name="last_name" ref={register({ required: true })} /> :
                                            <InputComponent name={obj.last_name}/>
                                            }                                            
                                            <span className="error-message">{errors.last_name && 'Last name is required'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Phone</div>
                                            {editForm ? 
                                            <input type="text" placeholder={obj.phone} name="phone" className={`${errors.phone?'error_border':''}`} ref={register({ pattern: /\d+/ })} /> :
                                            <InputComponent name={obj.phone}/>
                                            }
                                            <span className="error-message">{errors.phone && 'Please enter number for phone.'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Email Address</div>
                                            {editForm ?
                                            <input className="form-control" placeholder={obj.email} className={`${errors.email?'error_border':''}`} type="text" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} /> :
                                            <InputComponent name={obj.email}/>
                                            }
                                            <span className="error-message">{errors.email && 'Please enter proper email address .'}</span>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Country</div>
                                            {editForm ?
                                            <select name="country" ref={register({ required: true })}>
                                            <option>{obj.country}</option>
                                            {countryList ?
                                                countryList.map((country, i) => {
                                                    return (<option key={i} value={country}>{country}</option>)
                                                })
                                                : ''
                                            }
                                            </select> :
                                            <InputComponent name={obj.country}/>
                                            }
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            {isLoading ?
                                                <ShowLoading /> :
                                                editForm ?
                                                    <Button onClick={onClickEditForm}> Save </Button> :
                                                    <Button onClick={onClickEditForm}> Edit </Button>
                                                
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" sm="12" xs="12">
                                    {cartItems && cartItems.length > 0 > 0 ?
                                        <div className="checkout-details">
                                            <div className="order-box">
                                                <div className="title-box">
                                                    <div>Product <span>Total</span><span>Server</span></div>
                                                </div>
                                                <ul className="qty">
                                                    {cartItems.map((item, index) =>

                                                        <li key={index}>{item.title} × {item.qty} <span>{symbol}{Math.round((item.total*getFactForItem(item.variants) + Number.EPSILON) * 100) / 100}</span><span>{getFactForItem(item.variants)}</span></li>
                                                    )}
                                                </ul>
                                                <ul className="sub-total">
                                                    <li>Subtotal <span className="count">{symbol}{cartTotal}</span></li>
                                                </ul>
                                                <ul className="total">
                                                    <li>Total <span className="count">{symbol}{cartTotal}</span></li>
                                                </ul>
                                            </div>
                                            <div className="payment-box">
                                                {(cartTotal !== 0) ?
                                                    <div className="text-right">
                                                        {(payment === 'stripe') ? 
                                                        isLoading ? 
                                                        <ShowLoading /> :
                                                        <button type="submit" className="btn btn-solid btn-green">
                                                            Order & Whatsapp
                                                        </button> :
                                                        
                                                        <PaypalExpressBtn env={'sandbox'} client={client} currency={'USD'} total={cartTotal} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
                                                    </div>
                                                    : ''}
                                            </div>
                                        </div>
                                        : ''}

                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CheckoutPage;