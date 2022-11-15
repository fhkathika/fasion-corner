import { CleanHands, Search } from '@mui/icons-material';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from '../pages/responsive'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logout } from '../redux/apiCalls';
import { clearCart } from '../redux/cartRedux';
// import logout from '../pages/logout';
const Container = styled.div`
/* height:70px; */
/* ${mobile({height:"50px"})} */
`;
const Wrapper = styled.div`
    padding:10px 20px;
    align-items: center;
    display: flex;
    justify-content: space-between ;
    ${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`;
const SearchConatiner = styled.div`
   border:0.5px solid lightgray;
   display:flex;
   align-items:center;
   margin-left:25px;
   padding:5px;
`;
const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`;
const Logo = styled.h1`
font-weight:bold;
cursor: pointer;
${mobile({fontSize:"24px" })}
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`;
const Center = styled.div`
    flex:1;
    text-align:center;
`;
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex:2,justifyContent:"center"})}
  
`;
const Username=styled.div`
    color: teal;
    font-size:14px;
`



const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity)
    const activeUser=useSelector(state=>state.user.currentUser)
    const userCart=useSelector(state=>state.cart)
    const [user,setUser]=useState(activeUser)
    const [cart,setCart]=useState(userCart)
    const dispatch=useDispatch()
// console.log('userCart',userCart)
    const router=useRouter()
    const handleGoToHome=()=>{
        router.push('/')
    }
   const handleRegister=(e)=>{
       e.preventDefault()
router.push("/Register")
   }
 const handleSignIn=()=>{
    router.push("/login")
 } 
 const handleSignOut=()=>{
    // router.push("/login")
    logout(dispatch)
    setUser(null)
  
 
    // setCart(null)
//    localStorage.clear()
// console.log('my cart',cart)
 }
 
 const handleOrder=()=>{
     router.push('/order/success')
 }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchConatiner>
                        <Input placeholder='Search'/>
                        <Search style={{ color: "gray", fontSize: '17px' }}></Search>
                    </SearchConatiner>
                </Left>
                <Center>
                    <Logo onClick={handleGoToHome}>FASION CORNER</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
                    {
                        user?
                        <>
                        <MenuItem onClick={handleSignOut}>LOG OUT <Username> {user.username}</Username></MenuItem>
                        <MenuItem onClick={()=>handleOrder(activeUser._id)}>Orders</MenuItem>
                        </>
                        
                        :
                        <MenuItem onClick={handleSignIn}>SIGN IN</MenuItem>
                    }
                    
                    <Link href="/cart">
                    <MenuItem>
                    {
                        userCart.loginUser.userId==activeUser?._id  &&
                        <Badge badgeContent= {  quantity }color="primary"  >
                        <ShoppingCartIcon color="action" />
                    </Badge>
                    }
                       
                    </MenuItem>
                    </Link>
                   
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;