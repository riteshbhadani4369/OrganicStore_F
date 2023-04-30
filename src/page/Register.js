import React, { useState } from "react"
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import login_user from "../image/login-user.svg"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"
import AOS from 'aos';
import { useFormik } from 'formik';
import * as yup from "yup"

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const MOBILE_NO = /^[6789][0-9]{9}$/;
const EMAIL_REGEX = /^[A-Za-z0-9]+[@][a-z]+[\.][a-z]{2,4}$/;

const registerSchema = yup.object({
    name: yup.string().min(2).required("Name is required!"),
    email: yup.string().email("Please enter valid email address").matches(EMAIL_REGEX,"Please enter valid email address").required(),
    password: yup.string().matches(PASSWORD_REGEX, "Please enter strong password").required(),
    mobileno: yup.string().matches(MOBILE_NO, "Please enter valid mobile number").required()
})

const Register = () => {

    const navigate = useNavigate()

    const onSubmit = async (values) => {

        const { name, email, password, mobileno } = values;

        axios.post('http://localhost:5000/userRegister', {
            name: name,
            email: email,
            password: password,
            mobileno: mobileno
        })
            .then(function (response) {
                console.log(response);
                navigate("/login")
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "", mobileno: "" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: registerSchema
    });
    // console.log("ERROR", formik.errors);


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Row className="login g-0 m-0" >
                    <Col className="d-none d-lg-block" data-aos="fade-right" data-aos-delay="50">
                        <div className="login-img">
                            <div>
                                <img src={require("../image/login.jpg")} className="mx-5 px-5" style={{ width: "100%", height: "auto", marginTop: "20px" }} />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Row className="login-form g-0 m-0">
                            <Col lg={12}>
                                <img src={login_user} width={80} />
                            </Col>
                            <Col lg={12}>
                                <h1>Register</h1>
                            </Col>
                            <Col lg={12}>

                                <div className="login-input">
                                    <div>
                                        <FaUserAlt style={{ color: "d9d9d9", fontSize: "20px" }} />
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingInput" label="Full Name" width={200} className="mb-1">
                                            <Form.Control type="text" autoComplete="off" placeholder="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <p style={{ margin: "0", color: "red" }}>{formik.touched.name && formik.errors.name ? formik.errors.name : ""}</p>
                            </Col>

                            <Col lg={12}>
                                <div className="login-input">
                                    <div>
                                        <MdEmail style={{ color: "d9d9d9", fontSize: "24px" }} />
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-1">
                                            <Form.Control type="email" autoComplete="off" placeholder="name@example.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
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
                                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-1">
                                            <Form.Control type="password" autoComplete="off" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <p style={{ margin: "0", color: "red" }}>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</p>
                            </Col>
                            <Col lg={12}>
                                <div className="login-input">
                                    <div>
                                        <FaPhoneAlt style={{ color: "d9d9d9", fontSize: "20px" }} />
                                    </div>
                                    <div>
                                        <FloatingLabel controlId="floatingInput" label="Mobile Number" className="mb-1">
                                            <Form.Control type="text" autoComplete="off" placeholder="mobile" name="mobileno" value={formik.values.mobileno} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <p style={{ margin: "0", color: "red" }}>{formik.touched.mobileno && formik.errors.mobileno ? formik.errors.mobileno : ""}</p>
                            </Col>
                            <Col lg={12}>
                                <button className="login-button" type="submit" >Register</button>
                            </Col>
                            <Col>
                                <Link to="/login"><p>I already have a membership</p></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </form>
        </>
    )
}

export default Register;