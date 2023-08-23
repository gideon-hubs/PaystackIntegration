import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import brandsReducer from "../slices/brandsSlice"

export default configureStore({
    reducer:{
        carts:cartReducer,
        brands:brandsReducer,
    }
   

});