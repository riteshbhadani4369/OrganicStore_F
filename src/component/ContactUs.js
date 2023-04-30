import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../page/Header";
import { AiOutlineRight } from "react-icons/ai"
import { HiOutlineMapPin } from "react-icons/hi2"
import { CiMobile4 } from "react-icons/ci"
import { TfiEmail } from "react-icons/tfi"
import Footer from "../page/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [textMessage, setTextMessage] = useState("");

    const name = localStorage.getItem("Username");
    const email = localStorage.getItem("Useremail");
    const mobile = localStorage.getItem("Usermobileno");

    const navigate = useNavigate();
    const btnhandle = (e) => {
        e.preventDefault()
        if (name != null) {
            axios.post("http://localhost:5000/help", {
                name: name,
                email: email,
                mobileno: mobile,
                textMessage: textMessage
            })
                .then(function (response) {
                    console.log(response.data);
                    navigate("/")
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else 
        {
            navigate("/login")
        }
    }


    return (
        <>
            <Header />
            <div className='about-banner'>
                <Row className='g-0 m-0'>
                    <Col>
                        <Container>
                            <h1>Organic Store</h1>
                            <h3>Home <AiOutlineRight /> Contact us</h3>
                        </Container>
                    </Col>
                </Row>
            </div>
            <Row className="contact-us-page m-0 g-0">
                <Col className="help-you">
                    <div>
                        <h2>How We Can Help You?</h2>
                        <img src={require("../image/contact-page.webp")} />
                        <p>Got a question? We had love to hear from you. Send us a message and we will respond as soon as possible.</p>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col className="contact-form">
                        <Row>
                            <h5>Get In Touch</h5>
                            <Col className="contact-touch" lg={4} md={12}>
                                <HiOutlineMapPin style={{ fontSize: "38px", marginTop: "5px" }} />
                                <p>navarangpura , ahemadabad</p>
                            </Col>
                            <Col className="contact-touch" lg={4} md={12}>
                                <CiMobile4 style={{ fontSize: "38px", marginTop: "5px" }} />
                                <p>Phone: 7201886693</p>
                            </Col>
                            <Col className="contact-touch" lg={4} md={12}>
                                <TfiEmail style={{ fontSize: "38px", marginTop: "5px" }} />
                                <p>organic4u_@gmail.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <h5 style={{ marginTop: "10px" }}>Drop Us Message</h5>
                            <Col>
                                <Row>
                                    <Col lg={6}>
                                        <form className="contact-massage">
                                            <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                                            <input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            <input type="tel" placeholder="Your Mobile" value={mobile} onChange={(e) => setMobileno(e.target.value)} />
                                        </form>
                                    </Col>
                                    <Col lg={6} className="contact-massage">
                                        <textarea placeholder="Your message here..." rows={5} value={textMessage} onChange={(e) => setTextMessage(e.target.value)}>
                                        </textarea>
                                    </Col>
                                </Row>
                                <button className="contact-button" onClick={btnhandle}>submit</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ContactUs