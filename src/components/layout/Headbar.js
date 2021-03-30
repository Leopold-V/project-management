import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import getCurrentUser from '../../utils/user';
import { auth } from '../../firebase';

import { ButtonSmall } from '../Button';
import { ContainerHeadBar } from '../Container';
import Switch from '../Switch';

export const Headbar = () => {
  let history = useHistory();
  const theme = useSelector((state) => state.switch);

  const redirectToProfile = () => {
    history.push('/profile');
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <ContainerHeadBar theme={theme}>
      <Switch />
      <User>
        <div>{getCurrentUser()?.email}</div>
        <ButtonSmall light onClick={redirectToProfile}>
          <i className="fas fa-user-edit"></i>
        </ButtonSmall>
        <ButtonSmall light onClick={handleLogout}>
          <i className="fas fa-sign-out-alt "></i>
        </ButtonSmall>
      </User>
    </ContainerHeadBar>
  );
};

const User = styled.div`
  display: flex;
  align-items: center;
  & > button {
    margin: 0 0.5rem;
  }
  & > div {
    margin: 0 0.5rem;
  }
`;
