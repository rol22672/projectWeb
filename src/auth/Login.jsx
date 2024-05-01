
import { Button, Form, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import  { useState } from 'react';
import NotificationService from '../common/AlertNotification';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);


    const handleLogin = async() => {

        if (!email || !password) {
            NotificationService.error("Por favor complete todos los campos");
            return;
        }

        try {
            let credentials = {
                "email":email,
                "password":password,
                "getToken":true
            }
            const response = await api.post("/login",credentials);
            console.log('Respuesta del backend:', response);
            if(response.data.user){
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("token", JSON.stringify(response.data.token));
                NotificationService.success(response.data.message);
                navigate('/admin');
                window.dispatchEvent(new Event('authChange'));
            }
            // Manejar respuesta
          } catch (error) {
            console.error('Error al registrar:', error);
            NotificationService.error("Error al registrar");
            // Manejar error
        }
    };

    return (
        <>
        <section className="vh-100 row align-items-center m-0">
            <Container fluid className="h-custom">
                <Row className="d-flex justify-content-center align-items-center h-100">
                <Col md={9} lg={6} xl={5}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="img-fluid" alt="Sample" />
                </Col>
                <Col md={8} lg={6} xl={4} >
                    <Form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <InputGroup className="mb-4">
                            <FormControl
                            type="email"
                            placeholder="Enter a valid email address"
                            value={email}
                            onChange={handleEmailChange}
                            aria-label="Email address"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={handlePasswordChange}
                            aria-label="Password"
                            />
                        </InputGroup>
                        
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <Button type="submit" variant="primary" className="btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</Button>
                        </div>
                    </Form>
                </Col>
                </Row>
            </Container>
        </section>
        </>
    );

}


export default Login;