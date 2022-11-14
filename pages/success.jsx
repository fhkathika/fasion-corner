import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { publicRequest, userRequest } from "../pages/requestMethod";


const Success = () => {
  const router=useRouter()

const data = router.query.stripeData;
const cart = router.query.products;

  console.log('cart..',cart!=null && JSON.parse(cart).products);
  const currentUser = useSelector((state) => state.user.currentUser);
  const {loginUser} = useSelector((state) => state.cart);
  const [orderId, setOrderId] = useState([]);
  const [userOrder, setuserOrder] = useState([]);
console.log(cart!=null && JSON.parse(cart));
let count=0;
useEffect(() => {
  const createOrder = async () => {
    try {
        const res = await userRequest.post("/order", {
          userId: currentUser._id,
        products: cart!=null && JSON.parse(cart).products?.map((item) => ({
          productId: item._id,
          productName:item.title,
          img:item.img,
          quantity: item._quantity,
        })),
        amount:  cart!=null && JSON.parse(cart).total,
        address: data!=null && JSON.parse(data).billing_details.address,
      });
     
      console.log(res.data);
    
      
    } catch (err){
      console.log(err.message);
    }
  };
  data && count++
  data && count==1 && createOrder();
}, [ ]);
console.log('count',count);
  //Get USER Order
   useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await userRequest.get(`/order/find/${currentUser?._id}`);
        setuserOrder(res.data);
console.log(res.data);
      
      } catch(err) { console.log(err.message);}
    };
   getUserOrder();
  }, [userOrder ]);


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
      {
      userOrder?.map((item)=>(
        <>
         <ul>
          <li>{item.amount}</li>
          <li>{
            item.products.map((pr)=>(
              <>
              <p>{pr.productName}</p>
              {/* <img src={pr.img} alt="" /> */}
              </>
            ))
            }
          </li>
          <li></li>
        </ul>
        </>
       
      ))
      }
      <button style={{ padding: 10, marginTop: 20 }} >Go to Homepage </button>
    </div>
  );
};

export default Success;