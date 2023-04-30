import React from 'react'
import Header from '../page/Header'
import { Row, Col, Container, Carousel } from "react-bootstrap"
import { AiOutlineRight } from "react-icons/ai"
import Footer from '../page/Footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom"
import img from "../image/login-user.svg"
import jenil from "../image/jenil.jfif"
import akash from "../image/akash-.png"
import ritesh from "../image/ritesh.jpeg"
import { BsArrowRightShort } from "react-icons/bs"
const AboutUs = () => {
    return (
        <div>
            <Header />
            <div className='about-banner'>
                <Row className='g-0 m-0'>
                    <Col>
                        <Container>
                            <h1>Organic Store</h1>
                            <h3>Home <AiOutlineRight /> About us</h3>
                        </Container>
                    </Col>
                </Row>
            </div>

            <Container>
                <Row className="argriculture">
                    <Col className='about-argri' lg={6} md={12}>
                        <h5>WHAT WE’RE OFFERING</h5>
                        <h3>Pure Agriculture and </h3>
                        <h2>Organic <span>Farm.</span></h2>
                        <h6>Organic Foods and Café is a family run company founded in 2004 that runs organic supermarkets</h6>
                        <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhe sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray strea catfish jewfish, Spanish mackerel yellow weaver sixgill.</p>

                    </Col>
                    <Col lg={6} md={12}>
                        <Carousel indicators="false">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 about-carousel-height"
                                    src={require("../image/gallery1.jpg")}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 about-carousel-height"
                                    src={require("../image/gallery2.jpg")}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 about-carousel-height"
                                    src={require("../image/gallery3.jpg")}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>


            <section className='our-about-product'>
                <Container>
                    <Row>
                        <Col className='about-argri mb-5' style={{ textAlign: "center" }} lg={12}>
                            <h5>OUR SERVICES</h5>
                            <h3>We Are Offering Some</h3>
                            <h2>Our Best <span>Services</span></h2>
                        </Col>
                        <Col className='fresh-product' lg={3} md={6} sm={12}>
                            <img src={require("../image/service1.jpg")} />
                            <div className='fresh-product-details'>
                                <h2>Fresh Vegetables</h2>
                                <p>Walleye poolfish san goby butterfly ray strea catfish jewfish, Spanish</p>
                                <Link to="/allproduct">View Details <BsArrowRightShort /></Link>
                            </div>
                        </Col>
                        <Col className='fresh-product' lg={3} md={6} sm={12}>
                            <img src={require("../image/service4.jpg")} />
                            <div className='fresh-product-details'>
                                <h2>Fresh Fruit</h2>
                                <p>Walleye poolfish san goby butterfly ray strea catfish jewfish, Spanish</p>
                                <Link to="/allproduct">View Details <BsArrowRightShort /></Link>
                            </div>
                        </Col>
                        <Col className='fresh-product' lg={3} md={6} sm={12}>
                            <img src={require("../image/service03.jpg")} />
                            <div className='fresh-product-details'>
                                <h2>Dairy Products</h2>
                                <p>Walleye poolfish san goby butterfly ray strea catfish jewfish, Spanish</p>
                                <Link to="/allproduct">View Details <BsArrowRightShort /></Link>
                            </div>
                        </Col>
                        <Col className='fresh-product' lg={3} md={6} sm={12}>
                            <img src={require("../image/service2.jpg")} />
                            <div className='fresh-product-details'>
                                <h2>Organic Products</h2>
                                <p>Walleye poolfish san goby butterfly ray strea catfish jewfish, Spanish</p>
                                <Link to="/allproduct">View Details <BsArrowRightShort /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <Row className="contact-us-page m-0 g-0" id="meet-us">
                <Col className="help-you">
                    <div>
                        <h2>Meet Our Team</h2>
                        <img src={require("../image/contact-page.webp")} />
                    </div>
                </Col>
            </Row>

            <Container>
                <Carousel variant='dark' >
                    <Carousel.Item>
                        <div className='meet-our-team'>
                            <img
                                width={100}
                                src={ritesh}
                                alt="First slide"
                                style={{ borderRadius: "48%" }}
                            />
                            <p>Ritesh is the visionary behind our e-commerce website. He is passionate about creating an online shopping experience that is both convenient and enjoyable for customers.</p>
                            <h6 style={{ textTransform: "uppercase", fontSize: "14px" }}>Ritesh Bhadani</h6>
                            <span>(CEO)</span>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='meet-our-team'>
                            <img
                                width={100}
                                src={akash}
                                alt="First slide"
                                style={{ borderRadius: "50%" }}
                            />
                            <p> Akash is the friendly voice on the other end of the phone when customers need assistance with their orders. He has a deep knowledge of our products and is committed to providing the highest level of customer service.</p>
                            <h6 style={{ textTransform: "uppercase", fontSize: "14px" }}>Akash Odedara</h6>
                            <span>(Customer Service Manager)</span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='meet-our-team'>
                            <img
                                width={100}
                                src={jenil}
                                alt="First slide"
                                style={{ borderRadius: "50%" }}
                            />
                            <p> Jenil is the mastermind behind our website's design and functionality. With years of experience in web development, she is always looking for ways to optimize the user experience and make online shopping as easy as possible.</p>
                            <h6 style={{ textTransform: "uppercase", fontSize: "14px" }}>Jenil Finaviya </h6><span>(Web Developer)</span>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </Container>

            <Footer />

        </div >
    )
}

export default AboutUs;