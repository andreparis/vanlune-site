import React,{useState,useEffect,useContext} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col, Button, Alert } from 'reactstrap';
import { toast } from 'react-toastify';
import LoginContext from '../../../helpers/login';
import { Spinner } from 'reactstrap';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import axios from 'axios';  
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginContext = useContext(LoginContext);
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const [alertText, setAlertText] = useState([]);

    useEffect(() => {
        if (alertText.length > 0)
            setVisible(true);
    }, [alertText]);

    const loginAuth = async (email,password) => {
        let payload = new Object();
        payload.email = email;
        payload.password = password;
        await login(payload);
    }

    const ShowLoading = () => ( 
            <Spinner cstyle={{ width: '3rem', height: '3rem' }} type="grow" color="dark"/>
    )

    const recoverPassword = async (email) => {
        let text = []
        if (email == undefined ||
            email == '') {
            text.push("You must inform your e-mail");
            setAlertText(text);

            return;
        }
        setIsLoading(true);
        try {
            await axios
            .post(process.env.ACCOUNT_URL + '/recover/email', { email: email },
            {
                headers:{
                    origin: 'player2.store'
            }})
            .then(function (result) {
                if (result.status != 200)
                    throw "";
                toast.success("Check your e-mail!");
            });                
        }
        catch {
            text.push("E-mail to recover password not sent. Please, try again later!");
            setAlertText(text);
        }
        setIsLoading(false);
    }
        
    const responseFacebook = async (response) => {
        if (response['accessToken'] && response['email'] && response['name']) {
            await login({facebookLogin: response});
        }
        else if (response['status'] == 'not_authorized') {
            toast.error("You must authorize when facebook login request!");
        }
        else {
            toast.error("Facebook has not authorizes you...");
        }
    }

    const responseFbRegister = (response) => {
        if (response['accessToken'] && response['email'] && response['name']) {
            router.push('/account/register?email='+response['email']+'&name='+response['name']);
        }
        else {
            toast.error("Facebook has not authorizes you...");
        }
    }

    const responseGoogle = async (response) => {
        if (response['accessToken'] && response['profileObj']['email'] && response['profileObj']['name']) {
            await login({googleLogin: response});
        }
        else {
            console.log(response);
            toast.error("Google has not authorizes you login...");
        }
    }

    const responseGgRegister = (response) => {
        if (response['accessToken'] && response['profileObj']['email'] && response['profileObj']['name']) {
            router.push('/account/register?email='+response['profileObj']['email']+'&name='+response['profileObj']['name']);
        }
        else {
            console.log(response);
            toast.error("Google has not authorizes you register...");
        }
    }
    
    const login = async (payload) => {
        setIsLoading(true);
        try {
            await axios
            .post(process.env.ACCOUNT_URL+'/auth', JSON.stringify(payload))
            .then(function (result) {
                if (result.data.Error != undefined &&
                    result.data.Error != '') {
                    toast(result.data.Error);
                }
                else {
                    if (result.data.Content.access_token == '' ||
                    result.data.Content.access_token == undefined ||
                    result.data.Content.user == undefined) 
                        throw "";
                    let user = result.data.Content.user;
                    let authToken = {token: result.data.Content.access_token}
                    loginContext.logIn(user, authToken);
                }
            });            
        } catch (error) {
            toast.error("Try again later!", error);
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

    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                { visible ? 
                                <AlertComponent /> : ''}
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label for="email">Email</Label>
                                        <Input type="text" defaultValue="" onChange={e => setEmail(e.target.value)} className="form-control"  placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">Password</Label>
                                        <Input type="password" defaultValue="" onChange={e => setPassword(e.target.value)} className="form-control" id="review"
                                            placeholder="Enter your password" required="" />
                                    </div>
                                    <div className="form-group">
                                    {isLoading ? 
                                        <li>Please, wait... <ShowLoading /></li>: 
                                        <a href="#" className="btn btn-solid" onClick={() => loginAuth(email,password)}>Login</a>
                                    }
                                    </div>
                                    <div className="form-group">
                                        <Button color="link" size="sm" onClick={() => recoverPassword(email)}>Forget Password?</Button>
                                    </div>  
                                    <div className="footer-social">
                                    
                                    {isLoading ? '':
                                    <ul>
                                        <FacebookLogin
                                            appId="369496744123960"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            callback={responseFacebook} 
                                            render={renderProps => (
                                                <li onClick={renderProps.onClick}><a><i className="fa fa-facebook" aria-hidden="false"></i></a></li>
                                            )}
                                        />
                                        <GoogleLogin
                                            clientId="708505409639-99gttc3dhg4mk1lokljo9hg0ojl5pi9q.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <li onClick={renderProps.onClick}><a><i className="fa fa-google-plus" aria-hidden="false"></i></a></li>
                                            )}
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />  
                                    </ul> }
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create an Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                            able to order from our shop. To start shopping click register.</p><a href="register"
                                    className="btn btn-solid">Create an Account</a>
                                <div className="footer-social">
                                    {isLoading ? '' :
                                    <ul>
                                        <FacebookLogin
                                            appId="369496744123960"
                                            autoLoad={false}
                                            fields="name,email,picture" 
                                            callback={responseFbRegister} 
                                            render={renderProps => (
                                                <li onClick={renderProps.onClick}><a><i className="fa fa-facebook" aria-hidden="false"></i></a></li>
                                        )}
                                        />
                                        <GoogleLogin
                                            clientId="137329362622-05heoijbr8gstfa0d7c026lln5qbl8q0.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <li onClick={renderProps.onClick}><a><i className="fa fa-google-plus" aria-hidden="false"></i></a></li>
                                            )}
                                            onSuccess={responseGgRegister}
                                            onFailure={responseGgRegister}
                                            cookiePolicy={'single_host_origin'}
                                        />  
                                    </ul> }
                                </div>
                            </div> 
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;