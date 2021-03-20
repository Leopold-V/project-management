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
    border: 2px solid transparent;
    cursor: pointer;
    transition: all .3s;
    & > i {
        margin-right: .2rem;
    }
    &:hover {
       color: white;
       background-color: #1c1b20;
       border: 2px solid #01b075;
       box-shadow: ${(props) => props.light ? '0rem 0rem 1.5rem rgba(70, 207, 122, .5)' : 'none'};
    }
    &.active {
        color: white;
        background-color: #01b075;
        box-shadow: ${(props) => props.light ? '0rem 0rem 1.5rem rgba(70, 207, 122, .5)' : 'none'};
    }
`