import { useSelect } from "@mui/base";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const cartSlice=createSlice(
    {
    name:"cart",
    initialState:{
        currentUser:null,
        products:[],
        quantity:0,
        total:0,

    },
    reducers:{
       addProduct: (state,action)=>{
           state.currentUser=action.payload
           state.quantity += 1;
           state.products.push(action.payload);
           state.total += action.payload.price * action.payload.quantity;
          
       },
       clearCart:(state)=>{
state.products=[]
       }
    }

})
export const {addProduct,clearCart}=cartSlice.actions;
export default cartSlice.reducer;