import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonLink = styled(NavLink)`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: .7rem .8rem;
    color: white;
    cursor: pointer;
    box-shadow: ${(props) => props.light ? '0rem 0rem .5rem rgba(70, 207, 122)' : 'none'};
    transition: all .3s;
    &:hover {
       color: white;
       background-color: #01b075;
    }
    &.active {
        color: white;
        background-color: #01b075;
    }
`

export const ButtonSmall = styled.button`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: .7rem .8rem;
    background-color: #01b075;
    color: white;
    cursor: pointer;
    box-shadow: ${(props) => props.light ? '0rem 0rem .5rem rgba(70, 207, 122)' : 'none'};
    transition: all .3s;
    &:hover {
       opacity: 0.8; 
    }
`