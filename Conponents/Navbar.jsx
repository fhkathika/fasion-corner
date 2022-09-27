import { Search } from '@mui/icons-material';
import React from 'react';
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div`
/* height:50px; */
`;
const Wrapper = styled.div`
    padding:10px 20px;
    align-items: center;
    display: flex;
    justify-content: space-between ;
`;

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span`
font-size:14px;
cursor:pointer;
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
`;
const Logo = styled.h1`
font-weight:bold;
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
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
  
`;



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchConatiner>
                        <Input></Input>
                        <Search style={{ color: "gray", fontSize: '17px' }}></Search>
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
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;