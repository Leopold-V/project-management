import React, { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { auth } from '../../firebase';

import { ButtonLink, Container, ContainerForm, BlockLeft, Form, TitleMain, Button, InputGroup, Input, Icon, ParticlesStyled, WrapperTitle } from '../Form/FormAuth';

export const Login = () => {

  const ref_log = useRef(null);

  const [log, setlog] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setlog({...log, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (log.email && log.password) {
      toast.promise(
        auth.signInWithEmailAndPassword(log.email, log.password), 
        {
          loading: 'Loading',
          success: () => {
            return 'Successfully Login 🔥';
          },
          error: (err) => { return err.message },
        },
      );
    }
    if (!log.email) {
      toast.error('Please provide an email address');
    } 
    if (!log.password) {
      toast.error('Please provide a password');
    }
  };

  useEffect(() => {
    ref_log.current.focus();
  }, [log.email]);

  return (
    <Container>
      <ParticlesStyled
          params={{
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
          }} 
      />
      <ContainerForm>
        <Toaster
          position="bottom-center"
          reverseOrder={true}
        />
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
            <Input ref={ref_log} type="text" name="email" placeholder="Email" onChange={handleChange} value={log.email} />
          </InputGroup>
          <InputGroup>
            <Icon className="fas fa-lock"></Icon>
            <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={log.password} />
          </InputGroup>
          <Button>Login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}