import {
    ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO,
    ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS
} from "../constants/cartConstants"
import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {

    const { data } = await axios.get(`http://localhost:5000/getsingleproduct/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.productName,
            price: data.productPrice,
            image: data.productImage[0].img,
            stock: data.productstock,
            quantity,
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
};

export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/getAllproduct`);

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/admin/users`);

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message,
        });
    }
};

