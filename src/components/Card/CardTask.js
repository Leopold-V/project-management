import React from 'react'
import styled from 'styled-components';
import { Button } from '../Button';

export const CardTask = ({title, task}) => {

    const addTask = () => {
        alert('TODO');
    }

    return (
        <Wrapper>
            <CardHeader>
                <h4>Todo</h4>
            </CardHeader>
            <CardBody>
                <Item>Project page</Item>
                <Item>Profile to complete</Item>
                <Item>Redux firebase data</Item>
            </CardBody>
            <Button onClick={addTask} className="transparent"><i class="fas fa-plus-circle fa-2x"></i></Button>
        </Wrapper>
    )
};

export const CardHeader = styled.div`
    min-height: 3rem;
    background-color: #01b075;
    text-align: center;
`

const Item = styled.div`
    background-color: whitesmoke;
    margin-bottom: 1rem;
    text-align: center;
    color: black;
    padding: .7rem 1rem;
    border-radius: 5px;
    max-height: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`

export const CardBody = styled.div`
    padding: 2rem;
`

export const Wrapper = styled.div`
    background-color: #27262b;
    border: 2px solid transparent;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 20rem;
    transition: all .3s;
    overflow: hidden;
    & > p {
        max-height: 15rem;
        overflow-y: auto;
        color: #9b9b9b;
    }
`