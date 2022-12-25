import React, {useState} from "react"
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
width:35%;
padding:20px;
background-color:white;
${mobile({ width: "75%" })};`

const Title = styled.h1`
font-size:24px;
font-weight:300;`

const Form = styled.form`
display:flex;
flex-wrap:wrap;`

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;`

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;`


const Register = () => {

const[name, setName] = useState('')
console.log(name);
const[lastName, setlastName] = useState('')
const[userName, setuserName] = useState('')
const[email, setEmail] = useState('')
console.log(email);
const[password, setPassword] = useState('')
const[confirmPassword, setconfirmPassword] = useState('')

const handleSubmit =(e) =>{
  e.preventDefault();
}

  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
                <Input type="text" name="name" placeholder="last name"value={lastName} onChange={(e)=>setlastName(e.target.value)} />
                <Input type="text" name="name" placeholder="username"value={userName} onChange={(e)=>setuserName(e.target.value)} />
                <Input type="email" name="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Input type='password' name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Input type='password'placeholder="confirm password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} />
                <Agreement>
                    By creating an account on this website, I consent to the processing of my personal
                    data in accordance with the <b >PRIVACY POLICY </b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register