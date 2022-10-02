import React from 'react';
import styled from 'styled-components';
import { mobile } from './responsive';
const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    #d786867f,
    rgba(255,255,255,0.5)), 
url("https://i.ibb.co/dKPFBvZ/61333501-pastel-theme-mood-board-with-fashion-accessories-bag-sunglasses-scarf-for-girls-white-rusti.webp" );
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`;

const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}
`;
const Title=styled.h1`
font-style: 24px;
font-weight: 300;
`;
const Form=styled.form`
display: flex;
flex-direction: column;
`;



const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px ;
padding: 10px;
`;

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom:10px ;
`;
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                 SIGN IN  
                </Title>
                <Form>
                   
                    <Input placeholder="username"/>
                  
                    <Input placeholder="password"/>
                 <Button>LOGIN</Button>
                    <Link>DO YOU REMEMBER THE PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
            
        </Container>
    );
};

export default Login;