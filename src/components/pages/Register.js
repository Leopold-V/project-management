import React, { useState, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { auth } from '../../firebase';

import { Button, ButtonLink, BlockLeft, Container, ContainerForm, Form, Icon, Input, InputGroup, ParticlesStyled, TitleMain, WrapperTitle } from '../Form/FormAuth';

export const Register = () => {

    const ref_log = useRef(null);

    const [log, setlog] = useState({
      email: '',
      password: '',
      passwordConfirm: ''
    });
  
    const handleChange = (e) => {
      setlog({...log, [e.target.name]: e.target.value});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (log.email && log.password && log.passwordConfirm) {
        if (log.password !== log.passwordConfirm) {
            return toast.error('Your password and confirm password are not equal !');
        }
        toast.promise(
          auth.createUserWithEmailAndPassword(log.email, log.password), 
          {
            loading: 'Loading',
            success: () => {
              return 'Successfully Login 🔥';
            },
            error: (err) => err.message,
          }
        );
      }
      if (!log.email) {
        toast.error('Please provide an email address');
      } 
      if (!log.password) {
        toast.error('Please provide a password');
      }
      if (!log.passwordConfirm) {
        toast.error('Please confirm your password');
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
						<h2>Already member ?</h2>
						<ButtonLink to={'/login'} className="transparent">Login</ButtonLink>
					</BlockLeft>
					<Form onSubmit={handleSubmit}>
                        <WrapperTitle>
						    <h1>Sign up</h1>
                        </WrapperTitle>
                        <InputGroup>
                            <Icon className="fas fa-user"></Icon>
                            <Input ref={ref_log} type="text" name="email" placeholder="Email" onChange={handleChange} value={log.email} />
                        </InputGroup>
                        <InputGroup>
                            <Icon className="fas fa-lock"></Icon>
                            <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={log.password} />
                        </InputGroup>
                        <InputGroup>
                            <Icon className="fas fa-lock"></Icon>
                            <Input type="password" name="passwordConfirm" placeholder="Confirm your password" onChange={handleChange} value={log.passwordConfirm} />
                        </InputGroup>
						<Button>Sign up</Button>
					</Form>
				</ContainerForm>
			</Container>
  	)
}

