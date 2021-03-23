import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { auth } from '../../firebase';

import { Container, ContainerForm } from '../Container';
import { ParticlesBackground } from '../particles';
import { BlockLeft, FormAuth, TitleMain, WrapperTitle } from '../Form/FormAuth';
import { InputGroup, Input, Icon, ButtonForm } from '../Form';

export const Register = () => {
  let history = useHistory();

  const ref_input = useRef(null);

  const [input, setinput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const redirectToLogin = () => {
    history.push('/login');
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
    if (!input.passwordConfirm) {
      return toast.error('Please confirm your password');
    }
    if (input.password !== input.passwordConfirm) {
      return toast.error('Your password and confirm password are not equal !');
    }
    toast.promise(auth.createUserWithEmailAndPassword(input.email, input.password), {
      loading: 'Loading',
      success: () => 'Successfully Login 🔥',
      error: (err) => err.message,
    });
  };

  useEffect(() => {
    ref_input.current.focus();
  }, [input.email]);

  return (
    <Container>
      <ParticlesBackground />
      <ContainerForm>
        <Toaster position="bottom-center" reverseOrder={true} />
        <BlockLeft>
          <TitleMain>
            Welcome on <span style={{ color: '#46cf7a' }}>OpenBoard</span>
          </TitleMain>
          <img width="110" src="./tasks.svg" alt="tasks_image" />
          <h2>Already member ?</h2>
          <ButtonForm onClick={redirectToLogin} className="transparent">
            login
          </ButtonForm>
        </BlockLeft>
        <FormAuth onSubmit={handleSubmit}>
          <WrapperTitle>
            <h1>Sign up</h1>
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
          <InputGroup>
            <Icon className="fas fa-lock"></Icon>
            <Input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={input.passwordConfirm}
            />
          </InputGroup>
          <ButtonForm>Sign up</ButtonForm>
        </FormAuth>
      </ContainerForm>
    </Container>
  );
};
