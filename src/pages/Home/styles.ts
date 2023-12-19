import styled from "styled-components";
import {AiFillLinkedin, AiOutlineGithub,AiFillMediumSquare} from "react-icons/ai";
export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 64vh;
  //background-color: green;
  align-items: center;

  justify-content: center;
  /* height: auto;   */
  text-align: center;
  flex-direction: column;
  
`;

export const Name = styled.h1`
font-weight: bold;
margin-top: 15px;
margin-bottom: 15px;
`;

export const SocialMedia = styled.div`
width: auto;
min-width: 50px;
height: 100px;
display: flex;
margin: auto;
align-items: center;
justify-content: center;
gap: 15px;
a {
  color: #a9a9b3;
  width: 35px;
  height: 35px;
}
`;

export const StyledAiFillLinkedin = styled(AiFillLinkedin)`
font-size: 35px;
&:hover {
    cursor: pointer;
    transition: all .2s ease-out;
  transform: scale(1.1);
    
}
/* color: #a9a9b3 */
`;
export const StyledAiFillGithub = styled(AiOutlineGithub)`
font-size: 35px;
&:hover {
    cursor: pointer;
    transition: all .2s ease-out;
  transform: scale(1.1);
    
}
`;
export const StyledAiMediumSquare = styled(AiFillMediumSquare)`
font-size: 35px;
&:hover {
    cursor: pointer;
    transition: all .2s ease-out;
  transform: scale(1.1);
    
}
`;
export const MyInformations = styled.main`
margin: 200px auto auto auto;
height: 500px;
/* width: 500px; */
flex-direction: column;
`;

export const Position = styled.h3`
min-width: 50px;
padding: 0  30px;
font-weight: 350;
`;