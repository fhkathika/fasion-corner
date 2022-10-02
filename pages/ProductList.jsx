import React from 'react';
import styled from 'styled-components';
import Announcement from '../Conponents/Announcement';
import Footer from '../Conponents/Footer';
import Navbar from '../Conponents/Navbar';
import Newsletter from '../Conponents/Newsletter';
import Products from '../Conponents/Products';
import { mobile } from './responsive';
const Conatiner=styled.div`
    
`;
const Title=styled.h1`
    margin: 20px;
`;
const FilterContainer=styled.div`
  display: flex;
  justify-content  : space-between;
`;
const Filter=styled.div`
/* display: flex; */
  margin: 20px; 
  ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})} 
`;
const FilterText=styled.div`
 font-size: 20px;
 font-weight:600 ;
 margin-right: 20px;
 ${mobile({marginRight:"0px"})}
`;
const Select=styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:" 10px 0px"})}
`;
const Option=styled.option``;

const ProductList = () => {
    return (
        <Conatiner>
           <Navbar/>
           <Announcement/>
           <Title>Dresses</Title>
           <FilterContainer>
            <Filter> 
                <FilterText>Filter Products:</FilterText>
            <Select>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select >
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
               
            </Select>
            </Filter>
            <Filter> <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price(asc)</Option>
                <Option>Price(des)</Option>
            </Select>
            </Filter>
           </FilterContainer>
           <Products/>
           <Newsletter/>
           <Footer/>
        </Conatiner>
    );
};

export default ProductList;