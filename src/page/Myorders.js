import React, { Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../redux/actions/orderAction";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import LaunchIcon from '@mui/icons-material/Launch';
import Footer from "./Footer"
import Header from "./Header"
import { AiOutlineRight } from "react-icons/ai"
import { Row, Col, Container } from "react-bootstrap"



const MyOrders = () => {
    const dispatch = useDispatch();
    const getname = localStorage.getItem("Username");

    const { loading, error, orders } = useSelector((state) => state.myOrders);

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 150,
            flex: 0.5,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 150,
            flex: 0.3,
        },

        {
            field: "amount",
            headerName: "Amount",
            type: "number",
            minWidth: 270,
            flex: 0.5,
        },

        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Link to={`/order/${params.getValue(params.id, "id")}`}>
                        <LaunchIcon />
                    </Link>
                );
            },
        },
    ];
    const rows = [];

    orders &&
        orders.forEach((item, index) => {
            rows.push({
                itemsQty: item.orderItems.length,
                id: item._id,
                status: item.orderStatus,
                amount: item.totalPrice,
            });
        });

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }

        dispatch(myOrders());
    }, [dispatch, alert, error]);

    return (
        <>
            <Header />
            <div className='about-banner'>
                <Row className='g-0 m-0'>
                    <Col>
                        <Container>
                            <h1>Organic Store</h1>
                            <h3>Home <AiOutlineRight /> Order</h3>
                        </Container>
                    </Col>
                </Row>
            </div>
            <Fragment>
                {/* <MetaData title={`${user.name} - Orders`} /> */}

                {loading ? (
                    <Loader />
                ) : (
                    <div className="myOrdersPage">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            disableSelectionOnClick
                            className="myOrdersTable"
                            autoHeight
                        />

                        <Typography id="myOrdersHeading">{getname}'s Orders</Typography>
                    </div>
                )}
            </Fragment>
            <Footer />
        </>
    );
};

export default MyOrders;