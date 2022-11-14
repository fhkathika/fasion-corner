import { publicRequest } from "../pages/requestMethod"
import { clearCart } from "./cartRedux"
import { loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux"

export const login=async (dispatch,user)=>{
    dispatch(loginStart())
        try{
const res=await publicRequest.post("/auth/login",user)
dispatch(loginSuccess(res.data))

        }catch(err){
dispatch(loginFailure())
        }
    
}

export const logout=async (dispatch)=>{
        dispatch(logoutStart())
            try{
    const res=await publicRequest.post("/auth/logout")
    dispatch(logoutSuccess(res))
    
            }catch(err){
    dispatch(logoutFailure())
            }
        
    }
