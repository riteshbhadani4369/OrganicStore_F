import React from "react";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import login_user from "../image/login-user.svg"
import login2 from "../image/login2.svg"
import login1 from "../image/login1.png"
import Aos from "aos"
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const EMAIL_REGEX = /^[A-za-z0-9]+[@][a-z]+[\.][a-z]{2,3}$/;
const loginSchema = yup.object({
    email: yup.string().matches(EMAIL_REGEX, "Please enter valid email address").required(),
    password: yup.string().matches(PASSWORD_REGEX, "Please enter strong password").required(),
})

const Login = () => {

    const navigate = useNavigate();

    const onSubmit = (values) => {
        const { email, password } = values;

        axios.post('http://localhost:5000/userLogin', {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);

                var username = response.data.name;
                var userid = response.data._id;
                var userEmail = response.data.email;
                var userMobileno = response.data.mobileno;

                localStorage.setItem("Username", username);
                localStorage.setItem("Userid", userid);
                localStorage.setItem("Useremail", userEmail);
                localStorage.setItem("Usermobileno", userMobileno);

                var getUserName = localStorage.getItem("Username");
                var getUserId = localStorage.getItem("Usernid");

                if (getUserName != "") {
                    navigate("/");
                }
            })
            .catch(function (error) {
                console.log(error);
                toast.error('Invalid credentials!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    }

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: loginSchema
    })
    // console.log("ERROR", formik.errors);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Row className="login g-0 m-0">
                    <Col className="d-none d-lg-block" data-aos="fade-up" data-aos-delay="50">
                        <div className="login-img">
                            <div>
                                <img src={login1} style={{ width: "450px", height: "100vh" }} />
                            </div>
                            <div className="loginimg">
                                <img src={login2} className="mx-5 p-5" style={{ width: "100%", height: "auto", marginTop: "20px" }} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Row className="login-form g-0 m-0">
                            <Col lg={12}>
                                <img src={login_user} width={80} />
                            </Col>
                            <Col lg={12}>
                                <h1>Welcome</h1>
                            </Col>
                            <Col lg={12}>
                                <div className="login-input">
                                    <div>
                                        <MdEmail style={{ color: "d9d9d9", fontSize: "23px" }} />
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingInput" label="Email address" width={200} className="mb-1">
                                            <Form.Control type="email" placeholder="name@example.com" autoComplete="off" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <p style={{ margin: "0", color: "red" }}>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</p>
                            </Col>
                            <Col lg={12}>
                                <div className="login-input">
                                    <div>
                                        <FaLock style={{ color: "d9d9d9", fontSize: "20px" }} />
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingPassword" label="Password" width={200} className="mb-1">
                                            <Form.Control type="password" placeholder="Password" autoComplete="off" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <p style={{ margin: "0", color: "red" }}>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>

                            </Col>
                            <Col lg={12} >
                                <button className="login-button" type="submit" >Login</button>
                                <ToastContainer />
                            </Col>
                            <Col>
                                <Link to="/register"><p>Register a new membership</p></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default Login;