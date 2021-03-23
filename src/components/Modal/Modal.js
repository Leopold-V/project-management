import React from 'react'
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonIcon } from '../Button';

export const Modal = ({show, toggle, children}) => {

    if (!show) {
        return null;
    }
    return (
        <Wrapper>
            <ModalStyled>
                <WrapperButton>
                    <ButtonIcon onClick={toggle}><i className="fas fa-times-circle fa-2x"></i></ButtonIcon>
                </WrapperButton>
                {children}
            </ModalStyled>
        </Wrapper>
    )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};
  
Modal.defaultTypes = {
    show: 'false',
};

const WrapperButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const opening = keyframes`
    0% {
        transform: scale(2);
	    opacity: 0;
    }
    100% {
        transform: scale(1);
	    opacity: 1;
    }
`;

const ModalStyled = styled.div`
    position: relative;
    background-color: #27262b;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 30rem;
    min-height: 20rem;
    animation: ${opening} .4s;
`

