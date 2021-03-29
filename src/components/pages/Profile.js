import React from 'react';
import styled from 'styled-components';

import getCurrentUser from '../../utils/user';

import { ContainerCard, ContainerSection } from '../Container';
import { Card } from '../Card/Card';
import { WrapperTransition } from '../Container/WrapperTransition';

export const Profile = () => {
  const user = getCurrentUser();

  return (
    <WrapperTransition>
    <ContainerSection>
      <ContainerCard>
        <Card>
          <h2>Profile :</h2>
          <List>
            <li>
              <span style={{ fontWeight: 'bold' }}>Id : </span>
              {user.uid}
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Email : </span>
              {user.email}
            </li>
          </List>
        </Card>
      </ContainerCard>
    </ContainerSection>
    </WrapperTransition>
  );
};

const List = styled.ul`
  list-style: none;
  & > li {
    margin: 0.5rem 0;
  }
`;
