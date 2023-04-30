import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Row, Col, Container, Accordion } from "react-bootstrap"
import { AiOutlineRight } from "react-icons/ai"


const FAQs = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Header />
      <div className='about-banner'>
        <Row className='g-0 m-0'>
          <Col>
            <Container>
              <h1>Organic Store</h1>
              <h3>Home <AiOutlineRight />FAQ</h3>
            </Container>
          </Col>
        </Row>
      </div>
      <h3 className='text-center my-5' style={{ fontFamily: "'Poppins', sans-serif" }}>Frequently Asked Questions</h3>
      <Container>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I sign up?</Accordion.Header>
            <Accordion.Body>
              To sign up for a service, you typically need to provide some basic information such as your name, email address, and choose a password. Some services may also require additional information such as a phone number or payment information. The exact process can vary depending on the service you're trying to sign up for.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I sign in?</Accordion.Header>
            <Accordion.Body>
              To sign in to a service, you'll need to have an account with that service. The process is typically as follows:<br></br><br></br>

              1. Visit the website or launch the app for the service you want to sign in to.<br></br>

              2. Look for a "Sign In" or "Log In" button, often found in the top right corner of the page.<br></br>

              3. Enter the email address or username associated with your account.<br></br>

              4. Enter your password.<br></br>

              5. Click the "Sign In" or "Log In" button to access your account.<br></br>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How i purchase product?</Accordion.Header>
            <Accordion.Body>
              The process of buying a product online typically involves the following steps:<br></br><br></br>

              1. Find the product you want to buy in our website , Search for the product using the search bar.<br></br>

              2. Add the product to your cart: Click on the "Add to Cart" or "Buy Now" button on the product page.<br></br>

              3. Review your cart: Review the items in your shopping cart and make sure that the quantities and selections are correct.<br></br>

              4. Proceed to checkout: Click on the "Checkout" button to proceed with the purchase.<br></br>

              5. Enter your shipping information: Enter your shipping address and select a shipping method.<br></br>

              6. Choose a payment method: Choose a payment method such as a credit card, PayPal, or bank transfer.<br></br>

              7. Review and place your order: Review your order details and make any necessary changes. Once you are satisfied, click the "Place Order" or "Pay" button to complete the transaction.<br></br>

              8. Confirm your order: You will receive a confirmation of your order, either on the screen or by email.<br></br>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </div >
  )
}

export default FAQs