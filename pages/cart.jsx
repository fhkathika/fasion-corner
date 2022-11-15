import { Add, Remove } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../Conponents/Announcement';
import Footer from '../Conponents/Footer';
import Navbar from '../Conponents/Navbar';
import { mobile } from './responsive';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { userRequest } from '../pages/requestMethod';
import { useHistory } from 'react-router-dom';
import {useRouter} from 'next/router'
import { clearCart } from '../redux/cartRedux';
// const KEY=process.env.REACT_APP_STRIPE;
const KEY =
  "pk_test_51LpldqH2YJhKnvBhdIzQTz5xqUxiKY96lh69eXQMcZOOXUi9hPb4uiJGEMMSpmDLErQtuZT97qsi2d1MF0UAkY0X00oPLbqD47"
const Container = styled.div`
    
`;
const Wrapper = styled.div`
   padding: 20px; 
   ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
 font-weight: 300;
 text-align  :center ;
`;
const Top = styled.div`
   display: flex; 
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};

color: ${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
   display: flex; 
   justify-content: space-between;
   ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex  : 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
 width: 200px;
`;
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;
const ProductName = styled.span`
 color: teal;
`;
const ProductId = styled.span`
color: gray;
`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`;
const ProductSize = styled.span`
color: gray;

`;
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.span`
color: gray;
margin: 5px;
${mobile({ margin: "5px  15px" })}
`;
const ProductPrice = styled.div`
color: teal;
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;


const Summary = styled.div`
   flex :1 ;
   border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
  
`;
const SummaryItem = styled.div`
 margin  : 30px 0px;
 display: flex;
 justify-content: space-between;
  font-weight: ${props => props.type == "total" && "500"};
  font-size: ${props => props.type == "total" && "24px"};
`;
const SummaryItemText = styled.span`
 
  
`;
const SummaryItemPrice = styled.span`

  
`;
const Button = styled.button`
 width: 100%;
 padding: 10px;
  background-color: black;
  color: white;
`;
const Cart = () => {
  const cart = useSelector(state => state.cart)
 const dispatch=useDispatch()
  // const {loginUser,products,total}= useSelector((state) => state.cart)
  const {currentUser}= useSelector((state) => state.user)
  //  const singleCart=cart.products?.filter((item)=>item?.userId==loginUser
  // ?._id)
  const history = useHistory();
  const [stripeToken, setStripeToken] = useState(null)
  const router=useRouter()
console.log('cRT',cart)

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        }
        );
        

    console.log('sent');
      router.push({
        pathname: "/order/success",
        query: {
          stripeData: JSON.stringify(res.data),
          products: JSON.stringify(cart),
        },
      })
      dispatch(clearCart())
      } catch (err) {
        console.log(err.message)
      }
    }
 
 
    stripeToken  && makeRequest();
  
  }, [stripeToken, cart.total,router])

  const onToken = (token) => {
    setStripeToken(token)
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        {/* <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top> */}
        <Bottom>
          <Info>
            
          
            {
              cart.products?.filter((item)=>item?.userId==currentUser?._id).map((product) => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName><span>{product.title}</span></ProductName>
                        <ProductId><span>ID: </span>{product._id}</ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize><span>Size: </span>{product.size}</ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        {/* <Add /> */}
                        <ProductAmount><span>Quantity:</span> {product.quantity}</ProductAmount>
                        {/* <Remove /> */}
                      </ProductAmountContainer>
                      <ProductPrice>${product.price * product.quantity}</ProductPrice>
                    </PriceDetail>
                  </Product>
                </>
              ))
            
            }
            
        
            




            <Hr />

          </Info>
         
          {
              cart.loginUser.userId==currentUser?._id ?
                <Summary>
            <SummaryTitle> Order Summery</SummaryTitle>
        
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$  {cart.total} </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout name="Fasion Corner"
              image="https://i.ibb.co/6RLtCxz/ff6a8e03edf24b14b241299ea7fef5f5.png"
              billingAddress
              shippingAddress
              description={`Your total is $ ${cart.total}`}
              amount={cart.total * 100}
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
                CHECKOUT
              </button>
            </StripeCheckout>
          </Summary>
          :
          <Summary>
          <SummaryTitle> Order Summery</SummaryTitle>
      
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 0 </SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>$0</SummaryItemPrice>
          </SummaryItem>
      
        </Summary>
    
      

          }
       
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;