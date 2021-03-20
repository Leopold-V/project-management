import React from 'react'

import { auth } from '../../firebase';

import { Container } from '../Container';

export const Profile = () => {
    return (
        <Container>
            Profile page
            <ul>
                <li>{auth.currentUser.email}</li>
                <li>{auth.currentUser.uid}</li>
            </ul>
        </Container>
    )
}
