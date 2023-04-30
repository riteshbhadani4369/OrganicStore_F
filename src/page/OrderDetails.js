import React, { Fragment, useEffect, useState } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { getOrderDetails, clearErrors } from "../redux/actions/orderAction";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import { jsPDF } from "jspdf";
import logo from "../image/logo.png";
import html2canvas from "html2canvas";
const OrderDetails = () => {

    const params = useParams()
    const getname = localStorage.getItem("Username")
    const { order, error, loading } = useSelector((state) => state.orderDetails);

    console.log(order);
    // console.log(order.orderItems);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        dispatch(getOrderDetails(params.id));
    }, [dispatch, alert, error, params.id]);


    const pdfHandlar = async () => {
        window.html2canvas = html2canvas;
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.addImage(logo, 'PNG', 65, 20, 500, 400);
        doc.html(document.querySelector(".orderDetailsPage"), {
            callback: function (pdf) {
                pdf.save("order.pdf");
            }
        })

        // var htmlElement = document.querySelector('.orderinvoice');
        // const opt = {
        //     // doc.addImage(logo, 'PNG', 65, 20, 500, 400);
        //     callback: function (doc) {
        //         doc.save("Order.pdf");
        //     },
        //     margin: [72, 72, 72, 72],
        //     autoPaging: 'text',
        //     html2canvas: {
        //         allowTaint: true,
        //         dpi: 300,
        //         letterRendering: true,
        //         logging: false,
        //         scale: .8
        //     }
        // }
        // doc.html(htmlElement, opt);

    }
    return (
        <>
            <Header />

            <Fragment>
                {loading ? (
                    <Loader />
                ) : (
                    <Fragment>
                        {/* <MetaData title="Order Details" /> */}
                        <div className="orderDetailsPage">
                            <div className="orderDetailsContainer">
                                <div className="d-flex justify-content-between">
                                    <Typography component="h1">Order #{order && order._id}</Typography>
                                    <button onClick={pdfHandlar}>Download Invoice</button>
                                </div>
                                <Typography>Shipping Info</Typography>
                                <div className="orderDetailsContainerBox">
                                    <div>
                                        <p>Name:</p>
                                        <span>{getname}</span>
                                    </div>
                                    <div>
                                        <p>Phone:</p>
                                        <span>
                                            {order.shippingInfo && order.shippingInfo.phoneNo}
                                        </span>
                                    </div>
                                    <div>
                                        <p>Address:</p>
                                        <span>
                                            {order.shippingInfo &&
                                                `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                                        </span>
                                    </div>
                                </div>
                                <Typography>Payment</Typography>
                                <div className="orderDetailsContainerBox">
                                    <div>
                                        <p
                                            className={
                                                order.paymentInfo &&
                                                    order.paymentInfo.status === "succeeded"
                                                    ? "greenColor"
                                                    : "redColor"
                                            }
                                        >
                                            {order.paymentInfo &&
                                                order.paymentInfo.status === "succeeded"
                                                ? "PAID"
                                                : "NOT PAID"}
                                        </p>
                                    </div>

                                    <div>
                                        <p>Amount:</p>
                                        <span>{order.totalPrice && order.totalPrice}</span>
                                    </div>
                                </div>

                                <Typography>Order Status</Typography>
                                <div className="orderDetailsContainerBox">
                                    <div>
                                        <p
                                            className={
                                                order.orderStatus && order.orderStatus === "Delivered"
                                                    ? "greenColor"
                                                    : "redColor"
                                            }
                                        >
                                            {order.orderStatus && order.orderStatus}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="orderDetailsCartItems">
                                <Typography>Order Items:</Typography>
                                <div className="orderDetailsCartItemsContainer">
                                    {order.orderItems &&
                                        order.orderItems.map((item) => (
                                            <div key={item.product}>
                                                <img src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${item.image}`)} alt="Product" />
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
                    </Fragment>
                )}
            </Fragment>
            <Footer />
        </>
    );
};
export default OrderDetails;