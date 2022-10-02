import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../pages/responsive';
const Container=styled.div`
 display: flex; 
 ${mobile({flexDirection:"column"})}  
`;
const Left=styled.div`
 flex:1 ;
 display: flex;
 flex-direction: column;
 padding: 20px;
`;
const Logo=styled.h1``;
const Desc=styled.p`
margin: 20px 0px;
`;
const SocialContainer=styled.div`

display: flex;

`;
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`;

const Center=styled.div`
  flex:1 ; 
  padding: 20px;  
  ${mobile({display:"none"})}
`;
const Title=styled.h3`
 margin-bottom: 30px;
 
`;
const List=styled.ul`
margin: 0;
padding: 0;
list-style :none ;
display: flex;
flex-wrap: wrap;
`;
const ListItem=styled.li`
 width: 50%;
 margin-bottom: 10px;
 
`;

const Right=styled.div`
    flex:1 ; 
    padding: 20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`;
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
 
`;
const Payment=styled.img`
   width: 10%;
   margin: 5px;
   cursor: pointer;
`;

const Footer = () => {
    return (
        <Container>
         <Left>
            <Logo>FASION CORNER</Logo>
       
         <Desc>There are many various pfpasages</Desc>
         <SocialContainer>
            <SocialIcon color='385999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='E60023'>
                <Pinterest/>
            </SocialIcon>
         </SocialContainer>
         </Left>
         <Center>
            <Title>useful link</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fasion</ListItem>
                <ListItem>Women Fasion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
             
            </List>
         </Center>
         <Right>
            <Title></Title>
            <ContactItem>
             <Room style={{marginRight:"10px"}}/>   159 ,road 3 dhaka,Bangladesh
            </ContactItem>
            <ContactItem>
              <Phone  style={{marginRight:"10px"}}/> +880 1988789779
            </ContactItem>
            <ContactItem>
              <Email  style={{marginRight:"10px"}}/> Info@gmail.com
            </ContactItem>
            <Payment src='https://i.ibb.co/YP7cTZk/bksh.png'/>
           
            <Payment src='https://i.ibb.co/64K8VVm/Nagod.png'/>
            <Payment src='https://i.ibb.co/61FHMCG/rocket.png'/>
           
            <Payment src='https://i.ibb.co/dGZh41h/Master-card.png'/>
            <Payment src='https://i.ibb.co/DkzXWJr/Visa-card.png'/>
            </Right>   
        </Container>
    );
};

export default Footer;