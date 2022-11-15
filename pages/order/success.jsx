import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Announcement from "../../Conponents/Announcement";
import Navbar from "../../Conponents/Navbar";
import { publicRequest, userRequest } from "../requestMethod";
import styles from './order.module.scss'


const Success = () => {
  const router = useRouter()

  const data = router.query.stripeData;
  const cart = router.query.products;

  console.log('cart..', cart != null && JSON.parse(cart).products);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { loginUser } = useSelector((state) => state.cart);
  const [orderId, setOrderId] = useState([]);
  const [userOrder, setuserOrder] = useState([]);
  console.log(cart != null && JSON.parse(cart));
  let count = 0;
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/order", {
          userId: currentUser._id,
          products: cart != null && JSON.parse(cart).products?.map((item) => ({
            productId: item._id,
            productName: item.title,
            img: item.img,
            quantity: item._quantity,
          })),
          amount: cart != null && JSON.parse(cart).total,
          address: data != null && JSON.parse(data).billing_details.address,
        });

        console.log(res.data);


      } catch (err) {
        console.log(err.message);
      }
    };
    data && count++
    data && count == 1 && createOrder();
    console.log('count', count);
  }, []);

  //Get USER Order
  useEffect(() => {
    const getUserOrder = async () => {
      try {
        const res = await userRequest.get(`/order/find/${currentUser?._id}`);
        setuserOrder(res.data);
        console.log(res.data);

      } catch (err) { console.log(err.message); }
    };
    userOrder && getUserOrder();
  }, []);


  return (
    <div

    >

      <Navbar />
      <Announcement />
      <div className={styles.widgetLg}>
        <h3 className={styles.widgetLgTitle}>My Order</h3>
        <table className={styles.widgetLgTable}>
          <tr className={styles.widgetLgTr}>
            <th className={styles.widgetLgTh}>Order Id</th>
            <th className={styles.widgetLgTh}>Product Name</th>
            <th className={styles.widgetLgTh}>Image</th>
            {/* <th className={styles.widgetLgTh}>Status</th> */}
          </tr>

          {
            userOrder?.map((item) => (
              <>

                {

                  item.products.map((pr) => (
                    <>

                      <tr className={styles.widgetLgTr} key={pr._id}>
                        <td className={styles.widgetLgAmount}>{pr._id}</td>
                        <td className={styles.widgetLgUser}>

                          <span className={styles.widgetLgName}>{pr.productName}</span>
                        </td>

                        <td><img className={styles.widgetLgImg} src={pr.img} alt="" /></td>

                      </tr>
                     
             
                     
                    </>
                  ))

                }
                


              </>

            ))
          }


        </table>
      </div>


    </div>
  );
};

export default Success;