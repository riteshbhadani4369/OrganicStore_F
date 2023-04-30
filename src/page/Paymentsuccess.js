import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from 'react-router-dom'

const Paymentsuccess = () => {

    const params = useParams()
    const dispatch = useDispatch();
    const getid = localStorage.getItem("Userid")

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const paymentInfo = {
        id: params.id
    }

    useEffect(() => {

        axios.post("http://localhost:5000/send-sms")
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.post("http://localhost:5000/order/new", {
            shippingInfo,
            orderItems: cartItems,
            itemsPrice: orderInfo.subtotal,
            taxPrice: orderInfo.tax,
            shippingPrice: orderInfo.shippingCharges,
            totalPrice: orderInfo.totalPrice,
            user: getid,
            paymentInfo: paymentInfo
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div>
            {/* <Header /> */}
            <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "100vh" }} >
                <div className='d-flex flex-column align-items-center' style={{ padding: "20px", width: "50%" }}>
                    <img src={require("../image/success.gif")} alt="" width={200} />
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "24px" }}>Payment Success</h3>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>Transaction Number : {params.id}</p>
                    <div>
                        <Link to="/orders" className='me-2'><button style={{ border: "none", padding: "8px 15px", fontFamily: "'Poppins', sans-serif", color: "#fff", backgroundColor: "#e2bb53" }}>View Order</button></Link>
                        <Link to="/allproduct"><button style={{ border: "none", padding: "8px 15px", fontFamily: "'Poppins', sans-serif", color: "#fff", backgroundColor: "#275c53" }}>View more Product</button></Link>
                    </div>
                </div>
            </div >
            {/* <Footer /> */}
        </div >
    )
}

export default Paymentsuccess