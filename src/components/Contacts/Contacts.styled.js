import styled from "styled-components";

export const ListContacts = styled.ul`
display:flex;
flex-direction:column;

`

export const ItemContacts = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 5px;
`

export const Btn = styled.button`
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background:#D6EAF8; 
    color: 52, 73, 94;
    cursor: pointer;
    outline: none;
    
    &:hover: {
    background-color: 214, 234, 248, 0.5;
    color: 52, 73, 94;
    }
`