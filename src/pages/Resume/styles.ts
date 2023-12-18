import styled from "styled-components";
const breakpoint = "768px";
export const Container = styled.main`
  font-family: Arial, sans-serif;
  margin: auto;
  display: flex;
  width: 720px;
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
   @media (max-width: ${breakpoint}) {

}
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
