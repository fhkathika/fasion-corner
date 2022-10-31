import { publicRequest, userRequest } from "../../src/requestMethods"
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"
import { getUserFailure, getUserStart, getUserSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login=async (dispatch,user)=>{
    dispatch(loginStart())
        try{
const res=await publicRequest.post("/auth/login",user)
dispatch(loginSuccess(res.data))
        }catch(err){
dispatch(loginFailure())
        }   
}
//Get all user
export const getAllUsers=async (dispatch)=>{
        dispatch(getUserStart())
            try{
    const res=await publicRequest.get("/users/")
    dispatch(getUserSuccess(res.data))
            }catch(err){
    dispatch(getUserFailure())
            }   
    }
//     get all product
export const getProducts=async (dispatch)=>{
    dispatch(getProductStart())
        try{
const res=await publicRequest.get("/product")
dispatch(getProductSuccess(res.data))
        }catch(err){
dispatch(getProductFailure())
        }
    
}
export const deleteProduct=async (id,dispatch)=>{
        dispatch(deleteProductStart())
            try{
    const res=await userRequest.delete(`/product/${id}`)
    dispatch(deleteProductSuccess(id))
            }catch(err){
    dispatch(deleteProductFailure())
            }
        
    }

    export const updateProduct=async (id,product,dispatch)=>{
        dispatch(updateProductStart())
            try{
    const res=await userRequest.delete(`/product/${id}`)
    dispatch(updateProductSuccess({id:id,product:product}))
            }catch(err){
    dispatch(updateProductFailure())
            }
        
    }  
     export const addProduct=async (product,dispatch)=>{
        dispatch(addProductStart())
            try{
    const res=await userRequest.post(`/product`,product)
    dispatch(addProductSuccess(res.data))
            }catch(err){
    dispatch(addProductFailure())
            }
        
    }