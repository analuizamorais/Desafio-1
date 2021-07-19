import styled from 'styled-components';

export const Input = styled.input `
border: 1px solid #ddd;
height: 2rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;
margin-left: 5%;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
` 
export const Content = styled.div `
    background-color: #D3D3D3;
`

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius; 0 .35rem .25rem 0;
    margin-top: 1rem;
    margin-left: 30%;

    &:focus,
    &:active {
        outline: none;
        boc-shadow: none;
    }
`

export const FormContainer = styled.div `
    display: block;
    flex-direction: column;
    max-height: 40%;
    margin-left: 25%;
    max-width: 50vw;
    background-color: whitesmoke;
    margin-top: 10px;
    padding: 15px;
    border-radius: 10%;
    margin-left: auto;
    margin-right: auto;
    justify: center;
`