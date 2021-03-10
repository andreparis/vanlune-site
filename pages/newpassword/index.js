import React, { useState, useEffect, useContext } from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col, Spinner, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

const NewPasswordPage = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const [alertText, setAlertText] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');
    const [isValidToken, setIsValidToken] = useState(false);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook


    useEffect(() => {
        console.log(router.query.u17);
        setToken(router.query.u17);
        async function validateToken() {
            let payload = new Object();
            payload.verification = router.query.u17;
            try {
                await axios
                .post(process.env.ACCOUNT_URL+"/recover/password", JSON.stringify(payload))
                .then(function (result) {
                    if (result.status != 200) {
                        throw '';
                    }
                    setIsValidToken(true);
                });
            }
            catch {
                alert("Please, try again later!");
            }            
        };
        validateToken();
    }, []);

    const onSubmit = data => {
        let text = [];        
        if (data['newpwd'].length < 5) 
            text.push('Password must contain at least 5 characters')
        if (data['newpwd'] != data['confirmpwd'])
            text.push('Confirmed Password are not the same as Password');        
        if (text.length > 0) {
            setAlertText(text);
            return;
        }

        let user = new Object();
        user.password = data['newpwd'];
        user.verification = token;
        sendRegister(JSON.stringify(user));
    };    

    const sendRegister = async (user) => {
        setIsLoading(true);
        let errorMsg = "Password not updated. Try again later!"; 
        try {
            await axios
            .post(process.env.ACCOUNT_URL+"/recover/password", user)
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
                    //router.push('/account/login.html');
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

    useEffect(() => {
        if (alertText.length > 0)
            setVisible(true);
    },[alertText]);
    
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
            {!isValidToken ? <ShowLoading /> :
            <section className="register-page section-b-space">
                <Container>
                <div className="register-form">
                        <Row>
                        <Col lg="12">
                            <h3>Recover Password</h3>
                            <div className="theme-card">
                                {visible ? <AlertComponent /> : ''}
                                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md="6">
                                            <Label for="review">New Password</Label>
                                            <span className="error-message">{errors.newpwd && '  Required'}</span>
                                            <Input type="password" className={`${errors.newpwd?'error_border':''}`} name="newpwd" placeholder="New Password" innerRef={register({ required: true })}/>
                                            
                                        </Col>                                      
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label for="review">Confirm New Password</Label>
                                            <span className="error-message">{errors.confirmpwd && '  Required'}</span>
                                            <Input type="password" className={`${errors.confirmpwd ? 'error_border':''}`} name="confirmpwd" placeholder="Confirm New Password" innerRef={register({ required: true })}/>
                                            
                                        </Col>
                                    </Row>
                                    <Row>
                                        {isLoading ?
                                            <ShowLoading /> :
                                            <button type="submit" className="btn-solid btn" >Save</button>
                                        }  
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section>
            }
        </CommonLayout>
       
    )
}

export default NewPasswordPage;