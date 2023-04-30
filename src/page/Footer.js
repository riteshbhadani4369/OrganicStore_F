import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import logo from "../image/logo.png"
import { AiFillPhone, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { MdEmail, MdLocationPin } from "react-icons/md"
import { GrFacebookOption } from "react-icons/gr"
import { Link } from "react-router-dom"
import axios from "axios"

const Footer = () => {

    const [news, setNews] = useState("");

    const btnhandle = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/userNews", {
            email: news
        }).then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
                console.log(error);
            })
    }



    return (
        <div className='footer-img'>
            <Container>
                <Row className='footer-main'>
                    <Col className='footer-logo' lg={3} md={12} sm={12}>
                        <img src={logo} width={150} />
                        <h4>We’re providing every day fresh and quality products for you.</h4>
                        <a href='https://www.facebook.com/people/Organic-STORE/100054476349449/'><GrFacebookOption id='footer-icon' /></a>
                        <a href='https://twitter.com/OrganicIndia'><AiOutlineTwitter id='footer-icon' /></a>
                        <a href='https://www.instagram.com/theorganicstores/?hl=en'><AiOutlineInstagram id='footer-icon' /></a>
                    </Col>
                    <Col className='footer-explore' lg={3} md={6} sm={12}>
                        <h2>Explore</h2>
                        <p><Link to="/about">About Us</Link></p>
                        <p><Link to="/contact">Contact Us</Link></p>
                        <p><Link to="/faq">FAQs</Link></p>
                        <p><Link to="/privacypolicy">Privacy Policy</Link></p>
                        <p><Link to="/termsandcondition">Terms & Condition</Link></p>
                    </Col>
                    <Col className='footer-contact' lg={3} md={6} sm={12}>
                        <h2>Contact</h2>
                        <div className='d-flex'>
                            <div>
                                <AiFillPhone id="footer-contect-icon" />
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <p>+91 7201886693</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <MdEmail id="footer-contect-icon" />
                            </div>
                            <div>
                                <h5>Email</h5>
                                <p>organic4u_@gmail.com</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <MdLocationPin id="footer-contect-icon" />
                            </div>
                            <div>
                                <h5>Address</h5>
                                <p>navarangpura , ahemadabad</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={12} sm={12} className="footer-contact">
                        <h2>Newsletter</h2>
                        <div className='d-flex' style={{ flexDirection: "column" }}>
                            <input type="email" placeholder='Enter Your Email' value={news} onChange={(e) => setNews(e.target.value)} />
                            {/* <a> */}
                            <button className='btn-hover btn-after' onClick={btnhandle}>
                                <span>subscribe</span>
                            </button>
                            {/* </a> */}
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Footer