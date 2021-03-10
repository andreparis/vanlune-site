import React,{useState,useEffect,useContext} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col, Button, Alert } from 'reactstrap';
import firebase ,{googleProvider,facebookProvider} from '../../../config/base'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import LoginContext from '../../../helpers/login';
import { Spinner } from 'reactstrap';
import axios from 'axios';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );
    const loginContext = useContext(LoginContext);
    const setUserInfo = loginContext.setUser;
    const setAuthToken = loginContext.setAuthorizationToken;
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const [alertText, setAlertText] = useState([]);

    useEffect(() => {
        loginContext.logOut();
    }, []);
    useEffect(() => {
        localStorage.setItem('Name', name);
    }, [name]);

    const loginAuth = async (email,password) => {
        setIsLoading(true);
        try {
            let payload = new Object();
            payload.email = email;
            payload.password = password;
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
                    let authToken = {token: result.data.Content.access_token, status: 0}
                    loginContext.logIn(user, authToken);
                    router.push('/');
                }
            });            
        } catch (error) {
            toast.error("Try again later!", error);
        }
        setIsLoading(false);
    }

    const ShowLoading = () => ( 
            <Spinner cstyle={{ width: '3rem', height: '3rem' }} type="grow" color="dark"/>
    )

    const recoverPassword = async (email) => {
        setIsLoading(true);
        let text = []
        if (email == undefined ||
            email == '') {
            text.push("You must inform your e-mail");
            setAlertText(text);

            return;
        }
        try {
            await axios
            .post(process.env.ACCOUNT_URL + '/recover/email', { email: email })
            .then(function (result) {
                if (result.status != 200)
                    throw "";
                alert("Check your e-mail!");
            });                
        }
        catch {
            text.push("E-mail to recover password not sent. Please, try again later!");
            setAlertText(text);
        }
        setIsLoading(false);
    }
    
    const googleAuth = async () => {
        try {
                firebase.auth().signInWithPopup(googleProvider).then(function (result) {
                setName(result.user.displayName);
                setTimeout(() => {
                    router.push(`/account/checkout.html`);
                }, 200);
            
            });
        } catch (error) {
            setTimeout(() => {
                toast.error("Oppss.. The password is invalid or the user does not have a password.");
            }, 200);
        }
    };
    
    const facebookAuth = async () => {
        try {
                firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
                setName(result.user.displayName)
                setTimeout(() => {
                    router.push(`/account/checkout.html`);
                }, 200);
            });
        } catch (error) {
            setTimeout(() => {
                toast.error("Oppss.. The password is invalid or the user does not have a password.");
            }, 200);
        }
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
                                        <Input type="text" defaultValue={email} onChange={e => setEmail(e.target.value)} className="form-control"  placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">Password</Label>
                                        <Input type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} className="form-control" id="review"
                                            placeholder="Enter your password" required="" />
                                    </div>
                                    <div className="form-group">
                                    {isLoading ? 
                                        <ShowLoading /> : 
                                        <a href="#" className="btn btn-solid" onClick={() => loginAuth(email,password)}>Login</a>
                                    }
                                    </div>
                                    <div className="form-group">
                                        <Button color="link" size="sm" onClick={() => recoverPassword(email)}>Forget Password?</Button>
                                    </div>  
                                    <div className="footer-social">
                                    
                                    {/* <ul>
                                        <li onClick={facebookAuth}><i className="fa fa-facebook" aria-hidden="false"></i></li>
                                        <li onClick={googleAuth}><a><i className="fa fa-google-plus" aria-hidden="false"></i></a></li>
                                    </ul>                                    */}
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;