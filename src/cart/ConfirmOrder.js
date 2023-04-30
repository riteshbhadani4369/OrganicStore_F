import React, { Fragment } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Header from "../page/Header"
import Footer from "../page/Footer"
import axios from 'axios'

const ConfirmOrder = () => {

    const navigate = useNavigate()
    const getname = localStorage.getItem("Username")
    const getid = localStorage.getItem("Userid")
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    // const { user } = useSelector((state) => state.user);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );

    const shippingCharges = subtotal > 1000 ? 0 : 100;

    const tax = subtotal * 0.18;

    const totalPrice = subtotal + tax + shippingCharges;

    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;


    const proceedToPayment = async (amount) => {


        const data = {
            subtotal,
            shippingCharges,
            tax,
            totalPrice,
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(data));

        const { data: { key } } = await axios.get("http://localhost:5000/getkey")

        const { data: { order } } = await axios.post("http://localhost:5000/checkout", {
            amount
        })

        // await axios.post("http://localhost:5000/checkout", {
        //     amount: amount,
        // })
        //     .then(function (response) {
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Organic Store",
            description: "Organic Store",
            image: "data:image/jpeg;base64,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",
            order_id: order.id,
            // callback_url: "http://localhost:5000/paymentverification",
            handler: function (response) {
                console.log(response, +"22");
                axios.post("http://localhost:5000/paymentverification", {
                    response: response
                })
                    .then(function (res) {
                        navigate(`/paymentsuccess/${response.razorpay_payment_id}`)
                    })
                    .catch(function (error) {
                        console.log(error + "error");
                    })
            },
            prefill: {
                name: getname,
                email: "",
                contact: ""
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    return (
        <>
            <Header />
            <Fragment>
                {/* <MetaData title="Confirm Order" /> */}
                <CheckoutSteps activeStep={1} />
                <div className="confirmOrderPage">
                    <div>
                        <div className="confirmshippingArea">
                            <Typography>Shipping Info</Typography>
                            <div className="confirmshippingAreaBox">
                                <div>
                                    <p>Name:</p>
                                    <span>{getname}</span>
                                </div>
                                <div>
                                    <p>Phone:</p>
                                    <span>{shippingInfo.phoneNo}</span>
                                </div>
                                <div>
                                    <p>Address:</p>
                                    <span>{address}</span>
                                </div>
                            </div>
                        </div>
                        <div className="confirmCartItems">
                            <Typography>Your Cart Items:</Typography>
                            <div className="confirmCartItemsContainer">
                                {cartItems &&
                                    cartItems.map((item) => (
                                        <div key={item.product}>
                                            <img src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${item.image}`)} alt="abc" />
                                            {/* <img src={item.image} alt="Product" /> */}
                                            <Link to={`/buynow/${item.product}`}>
                                                {item.name}
                                            </Link>{" "}
                                            <span>
                                                {item.quantity} X ₹{item.price} ={" "}
                                                <b>₹{item.price * item.quantity}</b>
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div className="orderSummary">
                            <Typography>Order Summery</Typography>
                            <div>
                                <div>
                                    <p>Subtotal:</p>
                                    <span>₹{subtotal}</span>
                                </div>
                                <div>
                                    <p>Shipping Charges:</p>
                                    <span>₹{shippingCharges}</span>
                                </div>
                                <div>
                                    <p>GST:</p>
                                    <span>₹{tax}</span>
                                </div>
                            </div>

                            <div className="orderSummaryTotal">
                                <p>
                                    <b>Total:</b>
                                </p>
                                <span>₹{totalPrice}</span>
                            </div>

                            <button onClick={() => proceedToPayment(totalPrice)}>Proceed To Payment</button>
                        </div>
                    </div>
                </div>
            </Fragment>
            <Footer />
        </>
    );
};

export default ConfirmOrder;