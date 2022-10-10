import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../pages/api/data';
import Product from './Product';
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = ({ cat, filter, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat
                    ? `http://localhost:5000/api/product?categories=${cat}`
                    : "http://localhost:5000/api/product")
               console.log(res.data);
               setFilteredProducts(res.data);
               setProducts(res.data);
            } catch (err) {

            }
        }
        getProducts()
    }, [cat])
    useEffect(()=>{
cat &&
 setFilteredProducts(
    products.filter((item)=> 
    Object.entries(filter).every(([key,value])=>
    item[key].includes(value)
    )
)
)
    },[products,cat,filter])
    return (
        <Container>
            {filteredProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;