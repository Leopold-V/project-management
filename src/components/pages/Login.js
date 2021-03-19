import React, { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { auth } from '../../firebase';

import { ButtonLink, Container, ContainerForm, BlockLeft, Form, TitleMain, Button, InputGroup, Input, Icon, ParticlesStyled, WrapperTitle } from '../Form/FormAuth';

export const Login = () => {

  const ref_input = useRef(null);

  const [input, setinput] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setinput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email) {
      return toast.error('Please provide an email address');
    } 
    if (!input.password) {
      return toast.error('Please provide a password');
    }
    toast.promise(
      auth.signInWithEmailAndPassword(input.email, input.password), 
      {
        loading: 'Loading',
        success: () => 'Successfully Login 🔥',
        error: err => { return err.message },
      }
    );
  };

  useEffect(() => {
    ref_input.current.focus();
  }, [input.email]);

  return (
    <Container>
      <ParticlesStyled
        params={particleParams} 
      />
      <ContainerForm>
        <Toaster position="bottom-center" reverseOrder={true} />
        <BlockLeft >
          <TitleMain>Welcome on <span style={{color: '#4d84e2'}}>ReactProject</span></TitleMain>
          <img width='110' src='./tasks.svg' alt='tasks_image' />
          <h2>Are you new here ?</h2>
          <ButtonLink to={'/register'} className="transparent">New account</ButtonLink>
        </BlockLeft>
        <Form onSubmit={handleSubmit}>
          <WrapperTitle>
            <h1>Sign in</h1>
          </WrapperTitle>
          <InputGroup>
            <Icon className="fas fa-user"></Icon>
            <Input ref={ref_input} type="text" name="email" placeholder="Email" onChange={handleChange} value={input.email} />
          </InputGroup>
          <InputGroup>
            <Icon className="fas fa-lock"></Icon>
            <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={input.password} />
          </InputGroup>
          <Button>Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

const particleParams = {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 4,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
}