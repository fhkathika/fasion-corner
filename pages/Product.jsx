import { Add, Remove } from '@mui/icons-material';

import React from 'react';
import styled from 'styled-components';
import Announcement from '../Conponents/Announcement';
import Footer from '../Conponents/Footer';
import Navbar from '../Conponents/Navbar';
import Newsletter from '../Conponents/Newsletter';
const Container=styled.div``;
const Wraper=styled.div`
padding: 50px;
display: flex;
`;
const ImageConatiner=styled.div`
flex: 1;
`;

const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

`;

const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;
`;

const Title=styled.h1`
font-weight: 200;
`;

const Desc=styled.p`
margin: 20px 0px;
`;

const Price=styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterConatiner=styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;
const Filter=styled.div`
display: flex;
align-items: center;
`;
const FilterTitle=styled.span`
font-style: 20px;
font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption=styled.option`

`;
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:0px 5px;
`;
const Button=styled.button`
padding: 15px;
border: 2px solid teal ;
background-color: white;
cursor: pointer;
font-weight: 500;

:hover{
    background-color: #f8f4f4;
}

`;
const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wraper>
                <ImageConatiner>
                 <Image src='https://i.ibb.co/N11QYVD/51r-Do-Dio7d-L-UL1500-removebg-preview.png'/>   
                </ImageConatiner>
                <InfoContainer>
                    <Title>Denim jumsuit</Title>
                    <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos impedit commodi omnis exercitationem. Excepturi, provident autem soluta voluptatibus totam quis voluptas dolore laudantium qui omnis commodi, beatae corrupti veritatis nemo!</Desc>
                    <Price>$20</Price>
                    <FilterConatiner>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize color="black">
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                          
                          
                        </Filter>
                    </FilterConatiner>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wraper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;
