import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
const breakpoint = "768px";
export const Container = styled.main`
  font-family: Arial, sans-serif;
  margin: auto;
  display: flex;
  z-index: 4999;
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media (max-width: ${breakpoint}) {
width: 95%;
display: flex;
justify-content: center;
}
`;

export const ContactInfo = styled.div`
  margin-bottom: 10px;
`;

export const ContactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ContactDetail = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

export const ProfileLink = styled(Link)`
  font-weight: bold;
`;

export const Education = styled.div`
  margin: 20px 0;
  @media (max-width: ${breakpoint}) {
justify-content: center;
width: 90%}
`;

export const EducationTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const EducationDetails = styled.ul`
  list-style: disc;
  margin-left: 20px;
 p {
  text-align: justify;
   margin-left: 20px;
   margin-bottom: 7px;
   text-indent: 50px;
  
     }
      @media (max-width: ${breakpoint}) {
 margin-top:15px ;
}

`;

export const SkillList = styled.ul`
flex-direction: column;
//flex-wrap: wrap;
  gap: 10px;
    list-style: disc;

  margin-top: 10px;
  padding-left: 20px;
`;

export const SkillItem = styled.li`
list-style: circle;
  font-size: 1rem;
  margin-left: 20px;
  text-align: justify;
   
`;
export const SkillBigItem = styled.li`
  a {
    color: inherit;
    text-decoration: underline;
  }
  margin: 10px 0;
  font-size: 1rem;
 
`;

export const Summary = styled.div`
  margin-top: 20px;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const SummaryText = styled.p`
  font-size: 1rem;
text-align: justify;
 p {
  text-align: justify;
   margin-bottom: 10px;
   text-indent: 50px;
 }
`;




export const Publication = styled.main`
width: 100%;
max-width: 800px;
text-align: left;
/* padding: 20px; */
height: 705px;
margin: 20px auto;
`;
export const Year = styled.div`
margin-right: 1.8em;
font-size: 1.8em;
opacity: .6;
margin-bottom: 45px;

`;

export const PostList = styled.ul`

`;

export const PostItem = styled.li`
     list-style: circle;
    border-bottom: 1px grey dashed;
    align-items: baseline;
    padding: 12px 0;
    cursor: pointer;
    &:hover {
        color: #6fb7ed;
    }
`;
export const Post = styled.div`
display: flex;
//justify-content: center;
align-items: center;
`;

export const ThisPublication = styled.div`
z-index: 499;
width: 100%;
 max-width: 720px;
height: auto;
margin:20px auto;
text-align: justify;
align-items: center;
p {
  text-align: justify;
   margin-bottom: 7px;
   text-indent: 50px;
   a {
    color: #6fb7ed;
   }
   }
   div {
    display: flex;
    text-align: justify;
   }
`;

export const PublicationTitle = styled.h2`
 font-size: 1.5rem;
  margin-bottom: 10px;
 a {
    color: inherit;
 }
 :hover {
        color: #6fb7ed;
    }
`;

export const StyledBsArrowLeft = styled(BsArrowLeft)`
    cursor: pointer;
    width: 25px;
    height: 30px;
    margin-right: 10px;
    &:hover {
        color: #6fb7ed;
    }
`;