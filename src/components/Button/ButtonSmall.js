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
transition: all .2s;
&:hover {
   box-shadow: 0rem 0rem .5rem rgba(70, 207, 122);
}
&.transparent {
    color: #01b075;
    border: 2px solid #01b075;
    font-weight: 600;
    background-color: transparent; 
}
`