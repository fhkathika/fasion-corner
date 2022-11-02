import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { userRequest } from "../pages/requestMethod";


const Success = () => {
const router=useRouter()
  const data = JSON.parse(router.query.stripeData);
  const cart = JSON.parse(router.query.products);
  console.log('cart',cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/order", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            productName: item.title,
            quantity: item._quantity,
           
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data.products);
      
      } catch(err) { console.log(err.message);}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

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
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;