import { styled } from "styled-components";

export const Container = styled.footer`
width: 100%;
height: 70px;
margin-top: 120px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #1b1c1d; */
outline: 0;
bottom: 0;
span::after {
    content: "•";
    padding: 0 10px;

}

a {
    
    text-decoration: underline;
    color: #a9a9b3;

}
`