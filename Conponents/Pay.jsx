import axios from 'axios';
import React,{useState,useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';

// const KEY = 
// "pk_test_51LpldqH2YJhKnvBhdIzQTz5xqUxiKY96lh69eXQMcZOOXUi9hPb4uiJGEMMSpmDLErQtuZT97qsi2d1MF0UAkY0X00oPLbqD47"
const Pay = () => {
    const[stripeToken,setStripeToken]=useState(null)
    
const onToken=(token)=>{
    console.log(token)
   setStripeToken(token)
}
useEffect(()=>{
const makeRequest=async()=>{
    try{
const res=await axios.post("http://localhost:5000/api/stripe/payment",{
    tokenId:stripeToken.id,
    amount:2000,
}
);
// history.push("/index")
console.log(res?.data);
    }catch(err){
        console.log(err)
    }
}
stripeToken && makeRequest();
},[stripeToken])
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* {
                stripeToken?(
                    <span>Processing.please wait</span>
                )
                : (
                    <StripeCheckout name="Fasion Corner"
                    image="https://i.ibb.co/6RLtCxz/ff6a8e03edf24b14b241299ea7fef5f5.png"
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
                )
            }
       */}
        </div>
    );
};

export default Pay;