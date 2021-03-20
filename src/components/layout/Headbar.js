import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';

import { ButtonSmall } from '../Button';
import { ContainerHeadBar } from '../Container';
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
        <ContainerHeadBar>
            <Search parentsubmit={handleSearch} width='17rem' /> {/*bind data*/}
            <User>
                <div>test@test.com</div> {/*bind data*/}
                <ButtonSmall onClick={redirectToProfile}><i className="fas fa-user-edit"></i></ButtonSmall>
                <ButtonSmall onClick={handleLogout}><i className="fas fa-sign-out-alt "></i></ButtonSmall>
            </User>
        </ContainerHeadBar>
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