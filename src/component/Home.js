import React, { useEffect, useState } from "react";
import Header from "../page/Header";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from "../page/Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Loader from "../page/Loader";



const Home = () => {
    const [view, setView] = useState([])
    const [loader, setLoader] = useState(false)
    const [news, setNews] = useState("");

    const navigate = useNavigate()

    const btnhandle = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/userNews", {
            email: news
        }).then(function (response) {
            // console.log(response.data);
            navigate("/")
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/getAllproduct")
            .then(function (res) {
                setView(res.data)
                setLoader(true)
                // console.log(res.data);

            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    return (
        <>
            {
                loader
                    ?
                    <div>
                        <div className="modal" tabIndex="-1" role="dialog" id="myModal">
                            <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="modal-button">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal_body">
                                            {/* <img src={require('../image/logo.png')} /> */}
                                            <h1>Organic Store</h1>
                                            <h3>SIGN UP OUR NEWSLETTER</h3>
                                            <input type="email" placeholder='email address' value={news} onChange={(e) => setNews(e.target.value)} />
                                            <button onClick={btnhandle}>Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Header />

                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-height"
                                    src={require("../image/agricultrul-slider-2.jpg")}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-height"
                                    src={require("../image/banner-3453.jpg")}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-height"
                                    src={require("../image/slider-img-3.jpg")}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-height"
                                    src={require("../image/slider2.jpg")}
                                    alt="First slide"
                                />
                            </Carousel.Item>

                        </Carousel>
                        <section>
                            <Container>
                                <Row className='product-client'>
                                    <h2 style={{ fontFamily: " 'Poppins', sans-serif", textDecoration: "underline", textTransform: "uppercase", fontSize: "20px", textUnderlineOffset: "5px", marginBottom: "20px" }}>Product</h2>
                                    {
                                        view.map((val, i) => {
                                            return (
                                                <Col key={i} className='view-product-client' lg={4} md={6} sm={12}>
                                                    <div>
                                                        <Carousel variant="dark" indicators="true">
                                                            <Carousel.Item>
                                                                <img
                                                                    className="d-block w-100"
                                                                    src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${val.productImage[0].img}`)}
                                                                    alt="First slide"
                                                                />

                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <img
                                                                    className="d-block w-100"
                                                                    src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${val.productImage[1].img}`)}
                                                                    alt="Second slide"
                                                                />
                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <img
                                                                    className="d-block w-100"
                                                                    src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${val.productImage[2].img}`)}
                                                                    alt="Second slide"
                                                                />
                                                            </Carousel.Item>
                                                        </Carousel>
                                                        {/* <img src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${val.productImage[0].img}`)} /> */}
                                                        <h4>{val.productName}</h4>
                                                        <h5>₹{val.productPrice}</h5>
                                                        <Link to={`/buynow/${val._id}`}><button>Buy now</button></Link>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Container>
                        </section>
                        <Container>
                            <Row className="my-5">
                                <Col>
                                    <OwlCarousel className='owl-theme' margin={10} dotsClass="false" >
                                        <div className='item'>
                                            <img src={require("../image/organic_logo.webp")} alt="" />
                                        </div>
                                        <div className='item'>
                                            <img src={require("../image/organic_logo1.webp")} alt="" />
                                        </div>
                                        <div className='item'>
                                            <img src={require("../image/organic_logo2.webp")} alt="" />
                                        </div>
                                        <div className='item'>
                                            <img src={require("../image/organic_logo3.webp")} alt="" />
                                        </div>
                                    </OwlCarousel>
                                </Col>
                            </Row>
                        </Container>
                        <Footer />
                    </div>
                    : <Loader />

            }
        </>
    )
}

export default Home