import React from 'react';

import { auth } from '../../firebase';

import { ContainerSection } from '../Container';

export const Profile = () => {
  return (
    <ContainerSection>
      <h2>Profile page</h2>
      <ul>
        <li>{auth.currentUser.uid}</li>
        <li>{auth.currentUser.email}</li>
      </ul>
    </ContainerSection>
  );
};
