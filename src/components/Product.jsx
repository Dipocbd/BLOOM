import {  ShoppingCartCheckoutOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Product = ({item}) => {
  return (
    <Container>
     <Image src= {item.img} />
     <Info>
        <Title>{item.title}</Title>
     <Icon>
        <ShoppingCartCheckoutOutlined />
     </Icon>
     <Icon>
        <SearchOutlined />
     </Icon>
     <Icon>
        <FavoriteBorderOutlined />
     </Icon>
     </Info>
    </Container>
    
  )
};

const Container = styled.div`
flex:1;
margin:5px;
height:350px;`

const Image = styled.img`
height:75%;`
const Info = styled.div``
 // eslint-disable-next-line
const Icon = styled .div``;
const Title = styled.h5`
color:green;

`

export default Product