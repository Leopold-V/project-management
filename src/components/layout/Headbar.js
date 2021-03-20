import React from 'react';
import styled from 'styled-components';

import { auth } from '../../firebase';

import { ButtonSmall } from '../Button/Button';
import { Search } from '../Search/Search';

export const Headbar = () => {

    const handleSearch = () => {
        alert('TODO')
    }

    const handleLogout = () => {
        auth.signOut();
    }

    return (
        <Wrapper>
            <Search parentsubmit={handleSearch} width='17rem' />
            <User>
                <div>test@test.com</div>
                <ButtonSmall><i className="fas fa-user-edit"></i></ButtonSmall>
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