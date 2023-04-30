import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
    return (
        <div className="CartItemCard">
            <img src={require(`G:/BCA/SAM-6/SDP/server/src/uploads/${item.image}`)} alt="abc" />
            <div>
                <Link to={`/buynow/${item.product}`}>{item.name}</Link>
                <span>{`Price: ₹${item.price}`}</span>
                <p onClick={() => deleteCartItems(item.product)}>Remove</p>
            </div>
        </div>
    );
};

export default CartItemCard;