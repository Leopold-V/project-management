import React from 'react';

import { Button, ButtonLink, BlockLeft, Container, ContainerForm, Form, Icon, Input, InputGroup, ParticlesStyled, Title, TitleMain } from '../Form/FormAuth';

export const Register = () => {
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
						<img width='110' src='./tasks.svg' alt='tasks_image' />
						<h2>Already member ?</h2>
						<ButtonLink to={'/login'} className="transparent">Login</ButtonLink>
					</BlockLeft>
					<Form>
						<Title>Sign in</Title>
						<InputGroup>
							<Icon className="fas fa-user"></Icon>
							<Input type="text" placeholder="Username" />
						</InputGroup>
						<InputGroup>
							<Icon className="fas fa-envelope"></Icon>
							<Input type="email" placeholder="Email" />
						</InputGroup>
						<InputGroup>
							<Icon className="fas fa-lock"></Icon>
							<Input type="password" placeholder="Password" />
						</InputGroup>
						<Button>Sign up</Button>
					</Form>
				</ContainerForm>
			</Container>
  	)
}

