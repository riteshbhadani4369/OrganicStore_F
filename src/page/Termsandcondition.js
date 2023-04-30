import React from 'react'
import Header from './Header'
import { Row, Col, Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai"
import Footer from './Footer';

const Termsandcondition = () => {
    return (
        <div>
            <Header />
            <div className='about-banner'>
                <Row className='g-0 m-0'>
                    <Col>
                        <Container>
                            <h1>Organic Store</h1>
                            <h3>Home <AiOutlineRight /> Terms & condition</h3>
                        </Container>
                    </Col>
                </Row>
            </div>
            <Container>
                <h3 className='text-center my-5' style={{ fontFamily: "'Poppins', sans-serif" }}>Terms and conditions</h3>
                <p className='my-5' style={{ fontFamily: " 'Nunito', sans-serif" }}>
                    The terms and conditions for an organic store e-commerce website should include the following points:<br></br><br></br><br></br>

                    1. Payment terms: Information on payment methods accepted and details on refunds, cancellations, and returns policies.<br></br><br></br>

                    2. Shipping and Delivery: Information on shipping methods, delivery times, and shipping costs.<br></br><br></br>

                    3. Product Information: A description of the products available on the site, including their quality, price, and any restrictions on sale.<br></br><br></br>

                    4. User Account Information: Details on creating and maintaining a user account, including password protection and responsibilities of the user.<br></br><br></br>

                    5. Privacy Policy: Information on how the site collects, uses, and protects the personal information of its users.<br></br><br></br>

                    6. Intellectual Property: Information on the ownership and use of trademarks, logos, and copyrighted material on the site.<br></br><br></br>

                    7. Limitation of Liability: A statement of the site's liability for damages and limitations on its responsibilities to users.<br></br><br></br>

                    8. Dispute Resolution: Information on how disputes between the site and its users will be resolved.<br></br><br></br>

                    9. Governing Law: Information on the governing law that will apply to the site and its terms and conditions.<br></br><br></br>

                    10. Changes to the Terms and Conditions: Information on how the site can modify its terms and conditions and the process for notification of these changes to its users.
                </p>
            </Container>
            <Footer />
        </div >
    )
}

export default Termsandcondition