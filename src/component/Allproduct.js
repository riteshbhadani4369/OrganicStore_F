import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom'
import axios from "axios"
import Header from '../page/Header'
import Footer from '../page/Footer'
import { AiOutlineRight } from "react-icons/ai"

const Allproduct = () => {

    const [view, setView] = useState([])
    const [CatagoryName, setCatagoryName] = useState([])


    useEffect(() => {
        getCatagory()
    }, [])

    const getCatagory = async (NAME) => {

        const category = NAME;
        const Allproductdata = await axios.get("http://localhost:5000/getAllproduct");
        const filterdata = Allproductdata.data.filter((categorydata) => categorydata.category === category)


        if (category == "" || category == undefined) {
            setView(Allproductdata.data)
        }
        else {
            setView(filterdata)
        }

        const Allcategorydata = await axios.get("http://localhost:5000/getallCatagory");
        setCatagoryName(Allcategorydata.data)
    }

    return (
        <div>
            <Header />
            <div className='about-banner'>
                <Row className='g-0 m-0'>
                    <Col>
                        <Container>
                            <h1>Organic Store</h1>
                            <h3>Home <AiOutlineRight /> All product</h3>
                        </Container>
                    </Col>
                </Row>
            </div>

            <section>
                <Container>
                    <Row className='product-client'>
                        <Col lg={3}>
                            <h2 style={{ fontFamily: " 'Poppins', sans-serif", textDecoration: "underline", textTransform: "uppercase", fontSize: "20px", textUnderlineOffset: "5px", marginBottom: "20px" }}>category</h2>
                            <p style={{ cursor: "pointer" }} onClick={() => getCatagory("")}>All</p>
                            {
                                CatagoryName.map((curElem) => {
                                    return (
                                        <p style={{ cursor: "pointer", fontSize: "15px", textTransform: "capitalize" }} onClick={() => getCatagory(curElem.catagoryname)}>{curElem.catagoryname}</p>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={9}>
                            <Row>
                                <h2 style={{ fontFamily: " 'Poppins', sans-serif", textDecoration: "underline", textTransform: "uppercase", fontSize: "20px", textUnderlineOffset: "5px", marginBottom: "20px" }}>organic Product</h2>
                                {
                                    view.map((val) => {
                                        return (
                                            <Col className='view-product-client' id="vpc" lg={4} md={6} sm={12} key={val._id}>
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
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Allproduct