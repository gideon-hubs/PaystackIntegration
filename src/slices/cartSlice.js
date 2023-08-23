import {createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems:[],
    shippingAddress:[],
    count:1,
    price:125,
    

}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) => {
const item=action.payload;
const existItem = state.cartItems.find(
    (cartItem) =>cartItem.id===item.id
);
if(existItem){
    state.cartItems=state.cartItems.map((cartItem) => cartItem.id ===existItem.id ? item : cartItem);
}
else {
    state.CartItems =[...state.cartItems,item]
}
        },
        editCart:(state,action) => {
const {id,updatedItem} =action.payload;
state.cartItems = state.cartItems.map((cartItem) =>
      cartItem.id === id ? updatedItem : cartItem) ;
    
    },

    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload
        );
      },
  
      increaseCart: (state) => {
        state.count += 1;
      },
      decreaseCart: (state) => {
        if (state.count > 0) {
          state.count -= 1;
        }
      },

      increasePrice:(state, action)=> {
        state.price=action.payload
      },

      clearCartItems: (state) => {
        state.cartItems = [];
        localStorage.setItem("cart", JSON.stringify(state));
      },
    },

  
})

export const {
    addToCart,
    editCart,
    removeFromCart,
    increaseCart,
    decreaseCart,
    //saveShippingAddress,
    //savePaymentMethod,
    clearCartItems,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;




