import React from 'react';

import { Container, ContainerForm, BlockLeft, Form, Title, TitleMain, Button, InputGroup, Input, Icon, ParticlesStyled } from '../Form/FormAuth';

export const Login = () => {
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
          <BlockLeft >
            <TitleMain>Welcome on <span style={{color: '#4d84e2'}}>ReactProject</span></TitleMain>
            <h2>You are new here ?</h2>
            <Button to={'/register'} className="transparent">Sign up</Button>
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