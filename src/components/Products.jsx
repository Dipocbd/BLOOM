import { PeopleOutlineSharp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { trendingProducts } from '../data'
import Product from './Product'


const Products = () => {
  return(
    <Container>
        {trendingProducts.map((item) =>(

            <Product item ={item} key={item.id} />
            
            
        ))}
    </Container>
  );
  
};


const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;`

export default Products