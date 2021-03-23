import React from 'react';
import styled from 'styled-components';

import getCurrentUser from '../../utils/user';

import { ContainerCard, ContainerSection } from '../Container';
import { Card } from '../Card/Card';

export const Profile = () => {
  const user = getCurrentUser();

  return (
    <ContainerSection>
      <h2>Profile page</h2>
      <ContainerCard>
        <Card>
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
  );
};

const List = styled.ul`
  list-style: none;
  & > li {
    margin: 0.5rem 0;
  }
`;
