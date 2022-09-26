import { Search } from '@mui/icons-material';
import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div`
height:60px;

`
const Wrapper = styled.div
/*css*/`{
    padding:10px 20px;
display:flex;
align-items:center;
justify-content: space-between ;
} `

const Left = styled.div
/*css*/`{
flex:1;
display:flex;
align-items:center;
}`
const Language = styled.span
/*css*/`{
font-size:14px;
cursor:pointer;
}`
const SearchConatiner = styled.div
/*css*/`{
   border:0.5px solid lightgray;
   display:flex;
   align-items:center;
   margin-left:25px;
   padding:5px;
}`
const Input=styled.input
/*css*/`{
border:none;
}` 
const Logo=styled.h1
/*css*/`
{
font-weight:bold;
}`
const MenuItem=styled.div
/*css*/`{
font-size:14px;
cursor:pointer;
}` 
const Center = styled.div
/*css*/`{
    flex:1;
    text-align:center;
}`
const Right = styled.div
/*css*/`{
    flex:1;
}`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchConatiner>
                        <Input></Input>
                        <Search></Search>
                    </SearchConatiner>
                </Left>
                <Center>
                    <Logo>FASION CORNER</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;