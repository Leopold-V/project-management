import styled from 'styled-components';

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