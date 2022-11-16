import {  ShoppingCartCheckoutOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Product = ({item}) => {
  return (
    <Container>
      {/* <Title>{item.title}</Title> */}
     <Image src= {item.img} />
     <Info>
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

const Info = styled.div`
opacity:0;
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0; 
 display:flex;
 align-items:center;
 justify-content:center;
 transition: all 0.5s ease;
 cursor:pointer;
`

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;

&:hover ${Info}{
opacity:1; 
`

const Image = styled.img`
height:75%;`


const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;

&:hover{
   background-color: #e9f5f5;
   transform:scale(1.1);
}
}`

// const Title = styled.div``







export default Product