import { styled } from "styled-components";
const breakpoint = "768px";
export const Container = styled.div`
 width: 100%;
 max-width: 720px;
 text-align: left;
 height: 90vh;

 //padding: 20px;
overflow: hidden;
 margin-bottom: 15px;
  @media (max-width: ${breakpoint}) {
width: 95%;
display: flex;
justify-content: center;

}
`;

export const ContactDiv = styled.main`
width: 100%;
max-width: 800px;
text-align: left;
/* padding: 20px; */
height: 705px;
margin: 20px auto;

`;

export const ContactString = styled.h2`
font-size: 38px;
font-weight: 600;
`;

export const EmailsDiv = styled.ul`
list-style: disc;
margin-bottom: 45px;
li {
    font-size: 16px;
    margin-left: 70px;
    text-decoration: underline;
    
    a {
      cursor: pointer;
      color: inherit;
    }
}
`

export const EmailString = styled.h2`
 padding: 15px 0 10px 25px;
 a {
      color: inherit;
      text-decoration: underline;

    };
`
