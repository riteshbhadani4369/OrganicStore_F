import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import logo from "../image/logo.png"
import logo1 from "../image/favicon.ico"
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Typography from '@mui/material/Typography';
import Loader from "../page/Loader";
import { getOrderDetails, clearErrors, updateOrder, } from "../redux/actions/orderAction";
import { UPDATE_ORDER_RESET } from "../redux/constants/orderConstants";
import "./processOrder.css";

const ProcessOrder = () => {

    const params = useParams()

    const { order, error, loading } = useSelector((state) => state.orderDetails);
    const { error: updateError, isUpdated } = useSelector((state) => state.order);

    // console.log(order);
    const updateOrderSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("status", status);

        dispatch(updateOrder(params.id, myForm));
    };

    const dispatch = useDispatch();

    const [status, setStatus] = useState("");

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        if (updateError) {
            alert(updateError);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert("Order Updated Successfully");
            dispatch({ type: UPDATE_ORDER_RESET });
        }

        dispatch(getOrderDetails(params.id));
    }, [dispatch, alert, params.id, isUpdated, updateError]);

    return (
        <div>
            <div className="container-scroller">
                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <Link className="navbar-brand brand-logo" to="/dashboard"><img src={logo} alt="logo" /></Link>
                        <Link className="navbar-brand brand-logo-mini" to="/dashboard"><img src={logo1} alt="logo" /></Link>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu" />
                        </button>
                        <div className="search-field d-none d-md-block">
                            <form className="d-flex align-items-center h-100" action="#">
                                <div className="input-group">
                                    <div className="input-group-prepend bg-transparent">
                                        <i className="input-group-text border-0 mdi mdi-magnify" />
                                    </div>
                                    <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                                </div>
                            </form>
                        </div>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-profile dropdown">
                                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="nav-profile-img">
                                        <img src="../../assets/images/faces/face1.jpg" alt="image" />
                                        <span className="availability-status online" />
                                    </div>
                                    <div className="nav-profile-text">
                                        <p className="mb-1 text-black">Admin</p>
                                    </div>
                                </a>
                                <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        <i className="mdi mdi-logout me-2 text-primary" /> Signout </a>
                                </div>
                            </li>
                            <li className="nav-item d-none d-lg-block full-screen-link">
                                <a className="nav-link">
                                    <i className="mdi mdi-fullscreen" id="fullscreen-button" />
                                </a>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="mdi mdi-menu" />
                        </button>
                    </div>
                </nav>
                {/* partial */}
                <div className="container-fluid page-body-wrapper">
                    {/* partial:../../partials/_sidebar.html */}
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    <span className="menu-title">Dashboard</span>
                                    <i className="mdi mdi-home menu-icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/addcatagory">
                                    <span className="menu-title">Add categoy</span>
                                    <i className="mdi mdi-border-color menu-icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/user">
                                    <span className="menu-title">Users</span>
                                    <i className="mdi mdi-contacts menu-icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/orders">
                                    <span className="menu-title">Order</span>
                                    <i className="mdi mdi-chart-bar menu-icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                    <span className="menu-title">Product</span>
                                    <i className="menu-arrow" />
                                    <i className="mdi mdi-crosshairs-gps menu-icon" />
                                </a>
                                <div className="collapse" id="ui-basic">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard/addproduct">Add Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard/viewproduct">View Product</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {/* partial */}
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title"> Process Order </h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Orders</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-12 stretch-card">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="newProductContainer">
                                            {loading ? (
                                                <Loader />
                                            ) : (
                                                <div
                                                    className="confirmOrderPage"
                                                    style={{
                                                        display: order.orderStatus === "Delivered" ? "block" : "grid",
                                                    }}
                                                >
                                                    <div>
                                                        <div className="confirmshippingArea">
                                                            <Typography>Shipping Info</Typography>
                                                            <div className="orderDetailsContainerBox">
                                                                <div>
                                                                    <p>Name:</p>
                                                                    <span>{order.user && order.user.name}</span>
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
                                                        <div className="confirmCartItems">
                                                            <Typography>Your Cart Items:</Typography>
                                                            <div className="confirmCartItemsContainer">
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
                                                    <div
                                                        style={{
                                                            display: order.orderStatus === "Delivered" ? "none" : "block",
                                                        }}
                                                    >
                                                        <form
                                                            className="updateOrderForm"
                                                            onSubmit={updateOrderSubmitHandler}
                                                        >
                                                            <h1 style={{ fontSize: "22px" }}>Process Order</h1>

                                                            <div>
                                                                <AccountTreeIcon />
                                                                <select onChange={(e) => setStatus(e.target.value)}>
                                                                    <option value="">Choose Category</option>
                                                                    {order.orderStatus === "Processing" && (
                                                                        <option value="Shipped">Shipped</option>
                                                                    )}

                                                                    {order.orderStatus === "Shipped" && (
                                                                        <option value="Delivered">Delivered</option>
                                                                    )}
                                                                </select>
                                                            </div>

                                                            <Button
                                                                id="createProductBtn"
                                                                type="submit"
                                                                disabled={
                                                                    loading ? true : false || status === "" ? true : false
                                                                }
                                                            >
                                                                Process
                                                            </Button>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content-wrapper ends */}
                        {/* partial:../../partials/_footer.html */}
                        <footer className="footer">
                            <div className="container-fluid d-flex justify-content-between">
                                <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright ©</span>
                            </div>
                        </footer>
                        {/* partial */}
                    </div>
                    {/* main-panel ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>
        </div >
    )
}


export default ProcessOrder