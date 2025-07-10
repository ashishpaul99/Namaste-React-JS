import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";
const appStore=configureStore({
    reducer:{  //app reducer
        cart:cartReducer, // cart reducer
    }
});
export default appStore;

