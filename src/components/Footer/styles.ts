// styles.js
import { styled } from "styled-components";
const breakpoint = 768;

export const Container = styled.footer`
    width: 100%;
    margin-top: 35px; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: 0;
    margin-bottom: 10px; 
    

    @media (max-width: ${breakpoint}px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const Rights = styled.span`
    ::after {
        content: "•";
        padding: 0 15px;
    }
`;

export const ToHome = styled.span`
    a {
        text-decoration: underline;
        color: #a9a9b3;
    }
`;
