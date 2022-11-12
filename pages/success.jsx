import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { userRequest } from "../pages/requestMethod";


const Success = () => {
  const router=useRouter()

const data = router.query.stripeData;
const cart = router.query.products;

  console.log('cart..',cart!=null && JSON.parse(cart).products);
  const currentUser = useSelector((state) => state.user.currentUser);
  const {loginUser} = useSelector((state) => state.cart);
  const [orderId, setOrderId] = useState([]);
// console.log(loginUser);
useEffect(() => {
  const createOrder = async () => {
    try {
        const res = await userRequest.post("/order", {
          userId: currentUser._id,
        products: cart!=null && JSON.parse(cart).products?.map((item) => ({
          productId: item._id,
          quantity: item._quantity,
        })),
        amount: cart.total,
        address: data.billing_details.address,
      });
      setOrderId(res.data._id);
      console.log(res);
      console.log(products);
      
    } catch {}
  };
  data && createOrder();
}, [cart, data, currentUser]);
console.log(orderId);
  //Get USER Order
   useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await userRequest.get(`order/find/${loginUser.userId}`);
        // setOrderId(res.data.products);
console.log(res);
      
      } catch(err) { console.log(err.message);}
    };
   getUserOrder();
  }, [ currentUser?._id,currentUser]);


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId?.map((item)=>(
        <>
         <ul>
          <li>{item.productName}</li>
          <li>{item.productId}</li>
          <li>quantity{item.quantity}</li>
        </ul>
        </>
       
      ))}
      <button style={{ padding: 10, marginTop: 20 }} >Go to Homepage </button>
    </div>
  );
};

export default Success;