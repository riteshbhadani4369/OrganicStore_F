import React from 'react'
import Header from './Header'
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
      <Header />
      <Row className='g-0 m-0'>
        <Col className="error-page">
          <img src={require("../image/404.jpg")} style={{ width: "500px" }} />
          <Link to="/"><button>back home</button></Link>
        </Col>
      </Row>
    </div >
  )
}

export default Error404