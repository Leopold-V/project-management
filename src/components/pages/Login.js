import React from 'react';

import { Container, ContainerForm, BlockLeft, Form, Title, TitleMain, Button, InputGroup, Input, Icon } from '../Form/FormAuth';

export const Login = () => {
    return (
      <Container>
        <ContainerForm>
          <BlockLeft >
            <TitleMain>Welcome on <span style={{color: '#4d84e2'}}>ReactProject</span></TitleMain>
            <h2>You are new here ?</h2>
            <Button to='/register' className="transparent">Sign up</Button>
          </BlockLeft>
          <Form>
            <Title>Sign in</Title>
            <InputGroup>
              <Icon className="fas fa-user"></Icon>
              <Input type="text" placeholder="Username" />
            </InputGroup>
            <InputGroup>
              <Icon className="fas fa-lock"></Icon>
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <Button>Sign in</Button>
          </Form>
        </ContainerForm>
      </Container>
    )
}