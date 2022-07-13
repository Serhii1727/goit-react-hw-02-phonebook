import styled from "styled-components";

export const FormContact = styled.form`
    display: flex;
    flex-direction: column; 
    border: 1px solid black;
    padding 10px;
`

export const Name = styled.p`
    margin-top: 0;
    margin-bottom: 5px;
`

export const Input = styled.input`
    margin-bottom: 5px;
    width: 200px;
`

export const Button = styled.button`
    cursor: pointer;
    border: none;
    width: 100px;
    border-radius: 20px;
    padding: 5px;

    :hover {
        background-color: rgb(88, 240, 240);
        color: white;
    }
`