import React, { useEffect } from 'react'
import logo from "../image/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/orderAction.js";
import { getAdminProduct, getAllUsers } from '../redux/actions/cartAction';
import { Doughnut, Line } from "react-chartjs-2";
import PersonIcon from '@mui/icons-material/Person';
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend } from "chart.js";
import logo1 from "../image/favicon.ico"

chartjs.register(
    LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend
)

const Dashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = localStorage.getItem("Username");
    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.users);

    let outOfStock = 0;

    products &&
        products.forEach((item) => {
            if (item.productstock === 0) {
                outOfStock += 1;
            }
        });

    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
    }, [dispatch]);

    let totalAmount = 0;
    orders &&
        orders.forEach((item) => {
            totalAmount += item.totalPrice;
        });

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, totalAmount],
            },
        ],
    };

    const options = {
        plugins: {
            legend: true
        }
    }
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, products.length - outOfStock],
            },
        ],
    };


    return (
        <div>
            <div className="container-scroller">
                {/* partial:partials/_navbar.html */}
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
                                        <img src="assets/images/faces/face1.jpg" alt="image" />
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
                    {/* partial:partials/_sidebar.html */}
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span className="menu-title">Dashboard</span>
                                    <i className="mdi mdi-home menu-icon" />
                                </a>
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
                                    {/* <i className="mdi mdi-crosshairs-gps menu-icon" /> */}
                                    <i className="mdi mdi-format-list-bulleted menu-icon" />
                                </a>
                                <div className="collapse" id="ui-basic">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item">
                                            <Link to="/dashboard/addproduct" className="nav-link" >Add product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/dashboard/viewproduct" className="nav-link" >View Product</Link>
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
                                <h3 className="page-title">
                                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                                        <i className="mdi mdi-home" />
                                    </span> Dashboard
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-4 stretch-card grid-margin">
                                    <div className="card bg-gradient-danger card-img-holder text-white">
                                        <div className="card-body">
                                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                            <h4 className="font-weight-normal mb-3">Total Order <i className="mdi mdi-chart-bar mdi-24px float-right" />
                                            </h4>
                                            <h2 className="mb-5">{orders && orders.length}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 stretch-card grid-margin">
                                    <div className="card bg-gradient-info card-img-holder text-white">
                                        <div className="card-body">
                                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                            <h4 className="font-weight-normal mb-3">Total Product <i className="mdi mdi-format-list-bulleted  mdi-24px float-right" />
                                            </h4>
                                            <h2 className="mb-5">{products && products.length}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 stretch-card grid-margin">
                                    <div className="card bg-gradient-success card-img-holder text-white">
                                        <div className="card-body">
                                            <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                                            <h4 className="font-weight-normal mb-3">Total Users <i className="mdi mdi-account mdi-24px float-right" />
                                            </h4>
                                            <h2 className="mb-5">{users && users.length}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-7 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="clearfix">
                                                <h4 className="card-title float-left">Sales Statistics</h4>
                                            </div>
                                            <Line data={lineState} options={options} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Stock</h4>
                                            <Doughnut data={doughnutState} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content-wrapper ends */}
                        {/* partial:partials/_footer.html */}
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


        </div>
    )
}

export default Dashboard