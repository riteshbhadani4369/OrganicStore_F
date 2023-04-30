import React from "react"
import { Nav, Container, Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import { BsPersonCircle } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.png"
import { useSelector, useDispatch } from "react-redux";

const Header = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const getUserName = localStorage.getItem("Username");


    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    if (getUserName != null) {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="light" style={{borderBottom:"8px solid"}}>
                    <Container fluid className="container-margin">
                        <Navbar.Brand className="me-lg-5"><Link to="/" ><img src={logo} width={150} /></Link></Navbar.Brand>
                        <Nav.Link className="d-flex align-items-center justify-content-center">
                            <div className="d-lg-none d-block d-flex align-items-center justify-content-center me-4">
                                <div className="me-2">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <BsPersonCircle style={{ fontSize: "22px" }} />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                                <li><button className="dropdown-item" type="button" onClick={logout}>Logout</button></li>
                                                {/* <li><Link to="/viewprofile"><button className="dropdown-item" type="button">View profile</button></Link></li> */}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/cart">
                                    <div className="cart-counter">
                                        <FaShoppingCart style={{ fontSize: "22px" }} />
                                        <span className='badge'> {cartItems.length} </span>
                                    </div>
                                </Link>
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </Nav.Link>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/allproduct">All Product</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                                <Nav.Link><Link to="/orders">Order</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className="d-lg-block d-none">
                                    <div className="d-flex align-items-center">
                                        <p style={{ margin: "0", fontWeight: "bold", textTransform: "capitalize", color: "#000" }}>{getUserName}</p>
                                        <div>
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <BsPersonCircle style={{ fontSize: "22px" }} />
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                                        <li><button className="dropdown-item" type="button" onClick={logout}>Logout</button></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link to="/cart">
                                            <div className="cart-counter">
                                                <FaShoppingCart style={{ fontSize: "22px" }} />
                                                <span className='badge'> {cartItems.length} </span>
                                            </div>
                                        </Link>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </>
        )
    }
    else {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Container fluid className="container-margin">
                        <Navbar.Brand><Link to="/" ><img src={logo} width={150} /></Link></Navbar.Brand>
                        <Nav.Link className="d-flex align-items-center justify-content-center">
                            <Nav.Link className="d-lg-none d-block d-flex align-items-center justify-content-center me-4">
                                <div className="me-2">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <BsPersonCircle style={{ fontSize: "22px" }} />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                                <li><Link to="/login"><button className="dropdown-item" type="button">Login</button></Link></li>
                                                <li><Link to="/register"><button className="dropdown-item" type="button">Register</button></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/cart">
                                    <div className="cart-counter">
                                        <FaShoppingCart style={{ fontSize: "22px" }} />
                                        <span className='badge'> {cartItems.length} </span>
                                    </div>
                                </Link>
                            </Nav.Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        </Nav.Link>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/allproduct">All Product</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className="d-lg-block d-none">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <BsPersonCircle style={{ fontSize: "22px" }} />
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                                        <li><Link to="/login"><button className="dropdown-item" type="button">Login</button></Link></li>
                                                        <li><Link to="/register"><button className="dropdown-item" type="button">Register</button></Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link to="/cart">
                                            <div className="cart-counter">
                                                <FaShoppingCart style={{ fontSize: "22px" }} />
                                                <span className='badge'> {cartItems.length} </span>
                                            </div>
                                        </Link>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            </>
        )
    }
}
export default Header;