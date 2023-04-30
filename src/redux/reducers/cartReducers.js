import {
    ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO, ADMIN_PRODUCT_FAIL
    , ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS
} from "../constants/cartConstants"
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload),
            };

        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload,
            };

        default:
            return state;
    }
}

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ADMIN_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case ADMIN_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
            return {
                loading: true,
                users: [],
            };
        case ALL_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case ALL_USERS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}