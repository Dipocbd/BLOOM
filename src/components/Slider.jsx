import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

const Container = styled.div`
 width:100%;
 height:100vh;
 display:flex;
 background-color:coral;
 position:relative;`

 const Arrow = styled.div`
 width:50px;
 height:50px;
 background-color:#fff7f7;
 border-radius:50%;
 display:flex;
 align-items:center;
 justify-content:center;
 position:absolute;
 top:0;
 bottom:0;
 margin:auto;`

export default Slider