import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px;
  display: flex;
  flex-direction: column;
  
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
`;

export const EducationTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const EducationDetails = styled.ul`
  list-style: disc;
  margin-left: 20px;
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
`;
export const SkillBigItem = styled.li`
  
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
`;
