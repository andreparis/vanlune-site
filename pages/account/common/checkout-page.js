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
import {IoLogoWhatsapp} from 'react-icons/io';
import {goHome} from '../../../services/game';
import { toast } from 'react-toastify';


const CheckoutPage = () => {    
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.state;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const currency = curContext.state.currency;
    const [editForm, setEditForm] = useState(false);
    const [payment, setPayment] = useState(1);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const router = useRouter();
    const [servers, setServer] = useState([])
    const [wowServer, setWowServer] = useState('');
    const [cartTotal, setCartTotal] = useState(cartContext.cartTotal);
    const loginContext = useContext(LoginContext);
    const [obj, setObj] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isPaying, setIsPaying] = useState(false);

    useEffect(() => {
        if (cartItems.length == 0) {
            goHome();
        }
        let user = loginContext.userState;
        let name = user.name != undefined ? 
                (user.name + "").split(' ') : 
                ['', ''];
        setObj({
            first_name: name[0],
            last_name: name[1],
            char_name: '',
            wowServer: '',
            phone: user.phone,
            country: user.country,
            email: user.email
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
    }, [cartItems]);

    const checkhandle = (value) => {
        setPayment(value)
    }       

    const onSubmit = async data => {
        if (data == '' || data == undefined) {
            errors.showMessages();
            return;
        }
        setIsPaying(true);
        try {
            var char = new Object();
            char.name = data.char_name;
            char.game = "WoW";
            char.server = data.wowServer;

            var user = new Object();
            user = loginContext.userState;

            var orders = new Object();
            orders.orders = [];
            for (let i = 0; i < cartItems.length; i++) {
                var order = new Object();
                order.user = user;
                order.status = 1;
                order.product = cartItems[i];
                order.price = order.product.price;
                order.quantity = order.product.qty;
                order.variant = order.product.variants[0];
                order.customizes = order.product.customizes;
                order.amount = cartItems[i].total;
                order.payment = payment;
                if (payment > 1 && data['paymentStatus'])
                    order.paymentStatus = data['paymentStatus']
                if (payment > 1 && data['externalId'])
                    order.externalId = data['externalId']

                orders.orders.push(order);
            }

            await postAxios(JSON.stringify(orders));

            cartContext.cleanCart();
            router.push("https://wa.me/+5527996609851?text="+whatsappText()); 
        } 
        catch { toast.error('Something got wrong!'); }

        setIsPaying(false);
    }; 

    const whatsappText = () => {
        var text = "PLAYER2,\n\nPlayer 1, "+obj.first_name+" ("+(obj.char_name ? 'No char informed' : obj.char_name)+"), needs you! \n\n*Requested items*:";
        text += "\n\n    *PRODUCT*    |    *PRICE*    |    *SERVER*    |    *EXTRAS*";
        for(let i = 0; i < cartItems.length; i++) {
            text+="\n"+cartItems[i].title+"  |    "+cartItems[i].price + "    |    "+cartItems[i].variants[0]['name']+"    |     "+getExtrasAsString(cartItems[i]['customizes'])
        }
        text += "\n\n*PAYMENT METHOS*: "+ (payment == 1 ? 'PIX' : 'PAYPAL');
        text += "\n\n*Total*: R$ "+ cartTotal;

        return window.encodeURIComponent(text);
    };

    const getExtrasAsString = (extras) => {
        var text = '';
        for(var i = 0; i < extras.length; i++) {
            let extra = extras[i];
            text += extra['name']+": "+extra['value'][0]['name']+';'
        }
        return text;
    }
    
    const postAxios = async (payload) => {
        try {
            let token = loginContext.getAuthToken();
            let result = await axios
            .post(process.env.ORDERS_URL, payload, { 
                headers: {
                    AuthorizationToken: token,
                }   
        });
            let data = result.data;   
            
            toast.success('Order submited success!');           
        } catch (e) {
            throw e;
        }
    }

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj);
    }

    const onSuccess = async (payment) => {
        console.log(payment);
        if (payment && 
            payment['paid'] && 
            payment['paymentID']) {
                toast.success("PayPal has accepted your payment!");
                toast.info("Please, don't close the windows!");
                obj['paymentStatus'] = payment['event_type'];
                obj['externalId'] = payment['paymentID'];
                await onSubmit(obj);
        }
    } 

    const onCancel = (data) => {
        toast.error('PayPal had sent you cancel your payment! In case that information is a mistake, please, contact us +55(27) 9 9660-9851 on WhatsApp.');
    }

    const onError = (err) => {
        toast.error('PayPal had sent get an error with your payment! In case that information is a mistake, please, contact us +55(27) 9 9660-9851 on WhatsApp.');
    }

    const client = {
        sandbox: 'AWVhxA675d_OAD6u86QHfFaJXKRcZsDyUGGjbQXuwh6Sv4o3xzZjq3CEPWfHAywW_F27JMdCSTYU-ujR',
        production: 'EEhUW_L02PWPi_ZwuNiqkiq67bCfyqr_wZFYaMIXC1Z11mk57KzCndVAfT7w93zDsM3826DaTBLLOuXJ',
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
                let token = loginContext.getAuthToken();
                await axios
                .put(process.env.ACCOUNT_URL,  
                    JSON.stringify(payload), {
                        headers: {
                            AuthorizationToken: token
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
                toast.error("Failed to update.Try again later!");
            }
            setIsLoading(false);            
        }
        setEditForm(!editForm)
    }

    const InputComponent = (value = "") => {   
        return (<input readOnly  type="text" value={value.name} />);
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
                                                        <li key={index}>{item.title} × {item.qty} <span>{symbol}{item.total}</span><span>{item.variants[0]['name']}</span></li>
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
                                                <div className="upper-box">
                                                    <div className="payment-options">
                                                        <ul>
                                                            <li>
                                                                <div className="radio-option stripe">
                                                                    <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => checkhandle(1)} />
                                                                    <label htmlFor="payment-2">PIX/TED</label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="radio-option paypal">
                                                                    <input type="radio" name="payment-group" id="payment-1" onClick={() => checkhandle(2)} />
                                                                    <label htmlFor="payment-1">PayPal<span className="image">
                                                                        <Media src={paypal} alt="" /></span></label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {(cartTotal !== 0) ?
                                                    <div className="text-right">
                                                        {isPaying? 
                                                        <li>Please, wait while we redirect you... <ShowLoading /></li>
                                                        :
                                                        (payment === 1) ? 
                                                            <button type="submit" className="btn btn-solid btn-green" > <IoLogoWhatsapp /> Place Order</button> :
                                                            <PaypalExpressBtn env={'sandbox'} client={client} currency={currency} total={cartTotal} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />}
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