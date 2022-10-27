import { createSlice } from "@reduxjs/toolkit";

export const productSlice=createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching:false,
        error:false,
    },
    reducers:{
//GET ALL
getProductStart:(state)=>{
  state.isFetching =true 
  state.products=false
},
getProductSuccess:(state,action)=>{
  state.isFetching =true 
  state.products=action.payload
},
getProductFailure:(state)=>{
  state.isFetching =true 
  state.error=true
}
    },
});
export const {
getProductStart,getProductSuccess,getProductFailure
}=productSlice.actions;
export default productSlice.reducer