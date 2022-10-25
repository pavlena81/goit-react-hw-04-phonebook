import styled from 'styled-components';

export const Label = styled.label`
display: flex;

flex-direction: column;
padding:10px;
padding-top: 20px;
`

export const Btn = styled.button`
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #D6EAF8;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    
    cursor: pointer;
    outline: none;
    
    &:hover: {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    
    }
`