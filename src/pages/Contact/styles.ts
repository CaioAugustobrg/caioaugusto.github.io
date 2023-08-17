import { styled } from "styled-components";
const breakpoint = '768px'
export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  //background-color: green;
  align-items: center;
  margin: auto;
  justify-content: center;
  /* height: auto;   */
  text-align: center;
  flex-direction: column;
  @media (max-width: ${breakpoint}) {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }
`;

export const ContactDiv = styled.main`
margin: 200px auto auto auto;
height: 500px;
width: 680px;
text-align: left;
/* width: 500px; */
flex-direction: column

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
