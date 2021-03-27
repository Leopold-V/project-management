import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import { ButtonIcon } from '../Button';

export const Modal = ({ show, toggle, type, who, children }) => {
  if (!show.state || show.type !== type || show.who !== who) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    toggle();
  };

  return (
    <Wrapper onClick={handleClose}>
      <ModalStyled
        transition={{ duration: .3 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        key={who}
      >
        <WrapperButton>
          <ButtonIcon onClick={toggle}>
            <i className="fas fa-times-circle fa-2x"></i>
          </ButtonIcon>
        </WrapperButton>
        {children}
      </ModalStyled>
    </Wrapper>
  );
};

Modal.defaultProps = {
  show: { state: false, type: '', who: '' },
  who: '',
  type: '',
};

Modal.propTypes = {
  show: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  who: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const WrapperButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

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
`;

const ModalStyled = styled(motion.div)`
  position: relative;
  background-color: #27262b;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  max-width: 50rem;
  line-break: anywhere;
  text-align: center;
  min-height: 20rem;
  z-index: 3000;
  `;