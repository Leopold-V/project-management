import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

export const Headbar = () => {
    return (
        <Wrapper>
            <Title>Open<span>Board</span></Title>
            <User>
                <div>test@test.com</div>
                <Button><i class="fas fa-user-edit"></i></Button>
                <Button><i class="fas fa-sign-out-alt "></i></Button>
            </User>
        </Wrapper>
    )
}

const User = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.div`
    font-weight: 900;
    font-size: 1.5rem;
    & > span {
        color: #46cf7a;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 4rem;
    border-radius: 8px;
    padding: 0 2rem;
    background-color: #1c1b20;
`