import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { publicRequest } from './requestMethod';
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
width: 40%;
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
flex-wrap: wrap;
`;



const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px  0px;
padding: 10px;
`;

const Aggrement=styled.span`
font-size: 12px;
margin: 20px 0px;
`;


const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  
    
    const [inputs,setInputs]=useState({})
    
    const handleChange = (e) => {
        setInputs(prev => {
          return { ...prev, [e.target.name]: e.target.value }
        })
      }
      const handleSignup=(e)=>{
          e.preventDefault()
          const createUser=async()=>{
            try{
                await publicRequest.post("/auth/register",{
                  "body":JSON.stringify(inputs)
                   
               })
               console.log(inputs)
             }catch(err){
                 console.log(err.message);
             }
          }
          createUser()
      }
  
    
    return (
        <Container>
            <Wrapper>
                <Title>
                  CREATE AN ACOUNT  
                </Title>
                <Form>
                    {/* <Input placeholder=" name" type="text" onChange={(e)=>setFName(e.target,value)}/>
                    <Input placeholder="last name" type="text" onChange={(e)=>setLName(e.target,value)}/> */}
                    <Input placeholder="username" required type="text" name="username" onChange={handleChange}/>
                    <Input placeholder="email" required type="text" name="email" onChange={handleChange}/>
                  
                    <Input placeholder="password" required type="password" name="password" onChange={handleChange}/>
                    {/* <Input placeholder="confirm password"/> */}
                    <Aggrement>by creating account,I concent to the processing of my personal data in accoundance with the <b>PRIVACY POLICY</b></Aggrement>
                    <Button  onClick={handleSignup} >CREATE</Button>
                </Form>
            </Wrapper>
            
        </Container>
    );
};

export default Register;