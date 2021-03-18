import React from 'react';

import { Button, BlockLeft, Container, ContainerForm, Form, Icon, Input, InputGroup, ParticlesStyled, Title, TitleMain } from '../Form/FormAuth';

export const Register = () => {
    return (
			<Container>
				<ContainerForm>
					<BlockLeft >
						<TitleMain>Welcome on <span style={{color: '#4d84e2'}}>ReactProject</span></TitleMain>
						<h2>Already member ?</h2>
						<Button to={'/login'} className="transparent">Sign in</Button>
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
						<Button>Sign in</Button>
					</Form>
				</ContainerForm>
			</Container>
  	)
}

