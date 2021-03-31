import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { auth } from '../../firebase';

import { Container, ContainerForm } from '../Container';
import { ParticlesBackground } from '../Particles';
import { BlockLeft, FormAuth, TitleMain, WrapperTitle } from '../Form/FormAuth';
import { InputGroup, Input, Icon, ButtonForm } from '../Form';
import { MainTitle, TitlePrimary } from '../Typography';

export const Login = () => {
  let history = useHistory();

  const ref_input = useRef(null);

  const [input, setinput] = useState({
    email: '',
    password: '',
  });

  const redirectToRegister = () => {
    history.push('/register');
  };

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email) {
      return toast.error('Please provide an email address');
    }
    if (!input.password) {
      return toast.error('Please provide a password');
    }
    toast.promise(auth.signInWithEmailAndPassword(input.email, input.password), {
      loading: 'Loading',
      success: () => 'Successfully Login 🔥',
      error: (err) => {
        return err.message;
      },
    });
  };

  useEffect(() => {
    ref_input.current.focus();
  }, [input.email]);

  return (
    <Container>
      <ParticlesBackground />
      <ContainerForm>
        <BlockLeft>
          <TitleMain>
            Welcome on <span style={{ color: '#46cf7a' }}>ProjectBoard</span>
          </TitleMain>
          <img width="110" src="./tasks.svg" alt="tasks_image" />
          <TitlePrimary>Are you new here ?</TitlePrimary>
          <ButtonForm onClick={redirectToRegister} className="transparent">
            New account
          </ButtonForm>
        </BlockLeft>
        <FormAuth onSubmit={handleSubmit}>
          <WrapperTitle>
            <MainTitle>Sign in</MainTitle>
          </WrapperTitle>
          <InputGroup>
            <Icon className="fas fa-user"></Icon>
            <Input
              ref={ref_input}
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={input.email}
            />
          </InputGroup>
          <InputGroup>
            <Icon className="fas fa-lock"></Icon>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={input.password}
            />
          </InputGroup>
          <ButtonForm>Login</ButtonForm>
        </FormAuth>
      </ContainerForm>
    </Container>
  );
};
