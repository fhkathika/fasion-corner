import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { publicRequest, registeruserRequest } from './requestMethod';
import { mobile } from './responsive';
const Container = styled.div`
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

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;
const Title = styled.h1`
font-style: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;



const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px  0px;
padding: 10px;
`;

const Aggrement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;


const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
background-color: teal;
justify-content: center;
color: white;
cursor: pointer;
`;
const Warning = styled.span`
    color: teal;
    margin-top: 10px;
    
   
`;
const NextRoute = styled.span`
    color: teal;
    text-decoration: underline;
    display: block;
    margin-top: 40px;
    
   
`
const Register = () => {


    const [inputs, setInputs] = useState({})
    const [record, setRecord] = useState([])
    const [registration, setRegistration] = useState(false)
    const [show, setShow] = useState(true)
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 9000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);
    const handleChange = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    // console.log(inputs)
    const handleSignup = (e) => {
        e.preventDefault()
        const newRecord = { ...inputs, _id: new Date().getTime().toString() }
        setInputs([...record, newRecord])


        const createUser = async () => {
            try {
                await publicRequest.post("/auth/register", inputs)
                console.log('data registered');
                setRegistration(true)
            } catch (err) {
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

                    <Input placeholder="username" required value={inputs.username} type="text" name="username" onChange={handleChange} />
                    <Input placeholder="email" required type="text" value={inputs.email} name="email" onChange={handleChange} />

                    <Input placeholder="password" required type="password" value={inputs.password} name="password" onChange={handleChange} />
                    {/* <Input placeholder="confirm password"/> */}
                    <Aggrement>by creating account,I concent to the processing of my personal data in accoundance with the <b>PRIVACY POLICY</b></Aggrement>
                    <Button onClick={handleSignup} >CREATE</Button>
                    {
                        registration == true ?
                            <>
                                {
                                    show==false && <Warning> Successfully Registered</Warning>
                                }
                                {<NextRoute> <Link href='/'>go to home page</Link></NextRoute>
                                }



                            </>

                            : ''
                    }
                </Form>
            </Wrapper>

        </Container>
    );
};

export default Register;