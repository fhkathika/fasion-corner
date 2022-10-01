import React from 'react';
import styled from 'styled-components';
import Announcement from '../Conponents/Announcement';
import Footer from '../Conponents/Footer';
import Navbar from '../Conponents/Navbar';
const Container=styled.div`
    
`;
const Wrapper=styled.div`
   padding: 20px; 
`;
const Title=styled.h1`
 font-weight: 300;
 text-align  :center ;
`;
const Top=styled.div`
   display: flex; 
   align-items: center;
   justify-content: space-between;
`;
const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
background-color: ${props=>props.type==="filled" ? "black" : "transparent" };
border: ${props=>props.type==="filled" && "none" };
color: ${props=>props.type==="filled" && "none" };
`;
const TopTexts=styled.div`

`;
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;
const Bottom=styled.h1`
    
`;
const Cart = () => {
    return (
        <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom></Bottom>
          </Wrapper>
          cart
          <Footer/>  
        </Container>
    );
};

export default Cart;