import React, { useState, useEffect } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col, Spinner, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
import countryList from '../../../constants/countries';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const [alertText, setAlertText] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [defaultValues, setDefaultValues] = useState({});

    useEffect(() => {
        let defaultValues = {};
        if (router.query.email)
            defaultValues['email'] = router.query.email;
        if (router.query.name)
            defaultValues['name'] = decodeURI(router.query.name);
        setDefaultValues(defaultValues);
    }, []);

    useEffect(() => {
        if (alertText.length > 0)
            setVisible(true);
    },[alertText]);

    const onSubmit = data => {
        let text = [];        
        if (data['pwd'].length < 5) 
            text.push('Password must contain at least 5 characters')
        if (data['pwd'] != data['confirmpwd'])
            text.push('Confirmed Password are not the same as Password');        
        if (text.length > 0) {
            setAlertText(text);
            return;
        }

        let user = new Object();
        user.name = data['first_name'] +' '+ data['last_name'];
        user.password = data['pwd'];
        user.email = data['email'];
        user.country = data['country'];
        user.phone = data['phone'];
        user.idRoles = [];
        user.characters = [];
        sendRegister(JSON.stringify(user));
    };

    const sendRegister = async (user) => {
        setIsLoading(true);
        let errorMsg = "Your account was not created. Try again later!"; 
        try {
            await axios
            .post(process.env.ACCOUNT_URL, user)
            .then((result) => { 
                console.log(result);
                if (result.status != 200) {
                    throw "";
                }
                
                let hasContent =  result.data.Content != '' && result.data.Content != undefined;      
                if (result.data.Error != undefined &&
                    result.data.Error != '') {
                        let text = [];
                        if (hasContent)
                            text.push(result.data.Content);
                        text.push(result.data.Error);  
                        setAlertText(text);
                    }
                else if (hasContent) {
                    alert(result.data.Content);
                    router.push('/account/login');
                }
            })
            .catch(error => {
                alert(errorMsg);
            });
        }
        catch {
            alert(errorMsg);
        }

        setIsLoading(false);
    }

    const AlertComponent = () => (
        <Alert color="danger" isOpen={visible} toggle={onDismiss}>
          {alertText.map((text, i) => {
              return (
              <div key={i}> 
              <p>{text} </p> <hr />
              </div>)
          })}
        </Alert>
      )
    
    const ShowLoading = () => ( 
        <Spinner cstyle={{ width: '3rem', height: '3rem' }} type="grow" color="dark"/>
    )

    return (       
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                <div className="register-form">
                        <Row>
                        <Col lg="12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                {visible ? <AlertComponent /> : ''}
                                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                    <Col md="6">
                                            
                                            <Label for="first_name">First Name <br/></Label> 
                                            <span className="error-message">{errors.first_name && '  Required'} <br/></span>                                           
                                            {defaultValues['name'] ?
                                                <Input type="text" defaultValue={String(defaultValues['name']).split(' ')[0]} className={`${errors.first_name?'error_border':''}`} name="first_name" id="first_name" placeholder="First Name" innerRef={register({ required: true })}/>
                                            :   <Input type="text" className={`${errors.first_name?'error_border':''}`} name="first_name" id="first_name" placeholder="First Name" innerRef={register({ required: true })}/>}
                                        </Col>
                                        <Col md="6">
                                            <Label for="last_name">Last Name</Label>
                                            <span className="error-message">{errors.last_name && '  Required'}</span>
                                            {defaultValues['name'] ?
                                            <Input type="text" defaultValue={String(defaultValues['name']).split(' ')[1]} className={`${errors.last_name?'error_border':''}`} name="last_name" placeholder="Last Name" innerRef={register({ required: true })}/>
                                            : <Input type="text" className={`${errors.last_name?'error_border':''}`} name="last_name" placeholder="Last Name" innerRef={register({ required: true })}/>}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">                                            
                                            <Label for="email">Email</Label>
                                            <span className="error-message">{errors.email && '  Please enter proper email address'}</span>
                                            {defaultValues['email'] ? 
                                                <Input type="text" defaultValue={String(defaultValues['email'])} className={`${errors.email?'error_border':''}`} name= "email" id="email" placeholder="Email" innerRef={register({ required: true, pattern: /^\S+@\S+$/i })}/>
                                            :   <Input type="text" className={`${errors.email?'error_border':''}`} name= "email" id="email" placeholder="Email" innerRef={register({ required: true, pattern: /^\S+@\S+$/i })}/>}                                            
                                        </Col>
                                        <Col md="6">                                            
                                            <Label for="country">Country</Label>
                                            <span className="error-message">{errors.country && '  Required'}</span>
                                            <Input type="select" className={`${errors.country?'error_border':''}`} name= "country" id="country" placeholder="Country" innerRef={register({ required: true })} >        
                                                <option>Brazil</option>
                                                    {countryList ?
                                                        countryList.map((country, i) => {
                                                            return (<option key={i} value={country}>{country}</option>)
                                                        })
                                                        : ''
                                                    }  
                                            </Input>                                  
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">                                            
                                            <Label for="phone">Phone</Label>
                                            <span className="error-message">{errors.phone && '  Please enter number for phone.'}</span>
                                            <Input type="text" className={`${errors.phone?'error_border':''}`} name= "phone" id="phone" placeholder="Phone" innerRef={register({ required: true, pattern: /\d+/ })}/>                                            
                                        </Col>
                                        
                                    </Row>
                                    <Row>
                                    <Col md="6">
                                            <Label for="review">Password</Label>
                                            <span className="error-message">{errors.pwd && '  Required'}</span>
                                            <Input type="password" className={`${errors.pwd?'error_border':''}`} name="pwd" placeholder="Password" innerRef={register({ required: true })}/>
                                            
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Confirm Password</Label>
                                            <span className="error-message">{errors.confirmpwd && '  Required'}</span>
                                            <Input type="password" className={`${errors.confirmpwd ? 'error_border':''}`} name="confirmpwd" placeholder="Confirm Password" innerRef={register({ required: true })}/>
                                            
                                        </Col>
                                        {isLoading ?
                                        <ShowLoading /> :
                                        <button type="submit" className="btn-solid btn" >Register</button>
                                        }                                       
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section>
        </CommonLayout>
       
    )
}

export default Register;