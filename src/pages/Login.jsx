import React, {useState} from 'react'
import styled from "styled-components"
import {mobile} from "../Responsive"

const Container = styled.div`
width:100vw;
height:100vh;
background:url("");
background-size:cover;
display:flex;
align-items:center;
justify-content:center;`

const Wrapper = styled.div`
width:25%;
padding:20px;
background-color:white;
${mobile({ width: "75%" })};`

const Title = styled.h1`
font-size:24px;
font-weight:300;`

const Form = styled.form`
display:flex;
flex-direction:column;`

const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;`

const Link = styled.a`
margin:10px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;`

const Login = () => {

const [userName, setUserName] = useState('')
console.log(userName);
const[password, setPassword] = useState('')

const changePassword = (e) =>{
  setPassword(e.target.value)
}

const handleSubmit = (e) =>{
 e.preventDefault();
}

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit}>
                <Input type = 'username' placeholder="username"  value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <Input type ='password' placeholder="password" value={password} onChange={changePassword} />
                <Button type = 'submit'>LOG IN</Button>
                <Link> DO NOT REMEMBER PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login