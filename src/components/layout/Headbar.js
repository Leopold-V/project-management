import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';

import { ButtonSmall } from '../Button';
import { Search } from '../Search/Search';

export const Headbar = () => {

    let history = useHistory();

    const handleSearch = () => {
        alert('TODO')
    }

    const redirectToProfile = () => {
        history.push('/profile');
    };

    const handleLogout = () => {
        auth.signOut();
    }

    return (
        <Wrapper>
            <Search parentsubmit={handleSearch} width='17rem' />
            <User>
                <Email>test@test.com</Email>
                <ButtonSmall onClick={redirectToProfile}><i className="fas fa-user-edit"></i></ButtonSmall>
                <ButtonSmall onClick={handleLogout}><i className="fas fa-sign-out-alt "></i></ButtonSmall>
            </User>
        </Wrapper>
    )
}


const User = styled.div`
    display: flex;
    align-items: center;
    & > button {
        margin: 0 .5rem;
    }
    & > div {
        margin: 0 .5rem;
    }
`

const Email = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 5rem;
    border-radius: 5px;
    margin: 1rem 1.3rem;
    padding: 0 2rem;
    background-color: #1c1b20;
`