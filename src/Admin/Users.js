import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from "../image/logo.png"
import logo1 from "../image/favicon.ico"

const Users = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/admin/users")
            .then(function (response) {
                // console.log(response);
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const btndeletehandle = (id) => {
        axios.get(`http://localhost:5000/userDelete/${id}`)
            .then(function (response) {
                // console.log(response);
                // setCatagory(response.data)
                navigate("/dashboard")
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="container-scroller">
                {/* partial:../../partials/_navbar.html */}
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
                                <h3 className="page-title"> Users</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Users</li>
                                    </ol>
                                </nav>
                            </div>
                            <div class="col-lg-12 stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Users</h4>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th> User Id </th>
                                                    <th> User Name </th>
                                                    <th> User Email </th>
                                                    <th> User Number </th>
                                                    <th> User Account delete </th>
                                                </tr>
                                            </thead>
                                            {
                                                user.map((val, i) => {
                                                    return (

                                                        <tbody key={i}>
                                                            <tr class="table-info">
                                                                <td> {val._id} </td>
                                                                <td> {val.name} </td>
                                                                <td> {val.email} </td>
                                                                <td> {val.mobileno} </td>
                                                                <td> <button onClick={() => btndeletehandle(val._id)} style={{ padding: "10px 15px", color: "#fff", backgroundColor: "red", border: "none" }}>Delete</button></td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                        </table>

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
        </div>
    )
}

export default Users