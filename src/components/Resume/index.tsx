import {ContactDetail,
        ContactInfo,
        ContactTitle,
        Container,
        Education,
        EducationDetails,
        EducationTitle,
        Link,
        SkillBigItem,
        SkillItem,
        SkillList,
        Summary,
        SummaryText,
        SummaryTitle
             } from './styles';


const Resume = () => {
  return (

        <Container>
          <Education>
            <EducationTitle>Education</EducationTitle>
            <EducationDetails>
              <SkillItem>História (Licenciatura) 2019-2023 Universidade de Brasília (UnB)</SkillItem>
              <SkillItem>Ciência da Computação (Bacharelado) 2022-2026 Universidade Católica de Brasília (UCB)</SkillItem>
            </EducationDetails>
          </Education>

          <Education>
            <EducationTitle>Professional experience</EducationTitle>
            <EducationDetails>
              <li>Grupo Doctor</li>
            </EducationDetails>
          </Education>
          
          <Education>
            <EducationTitle>Skills</EducationTitle>
            <EducationDetails>
              <SkillBigItem>Back end developer</SkillBigItem>
              <SkillItem>Javascript</SkillItem>
              <SkillItem>Node.js</SkillItem>
              <SkillItem>Express.js</SkillItem>
              <SkillItem>SQL</SkillItem>
              <SkillItem>Typescript</SkillItem>
              <SkillBigItem>Front end developer</SkillBigItem>
              <SkillItem>Javascript</SkillItem>
              <SkillItem>Typescript</SkillItem>
              <SkillItem>React.js</SkillItem>
              <SkillItem>HTML</SkillItem>
              <SkillItem>CSS</SkillItem>
              <SkillBigItem>Version control system</SkillBigItem>
              <SkillItem>GIT</SkillItem>
              <SkillBigItem>Storage</SkillBigItem>
              <SkillItem>Amazon S3</SkillItem>
              <SkillItem>Bunny.net</SkillItem>
              <SkillBigItem>Others</SkillBigItem>
              <SkillItem>English</SkillItem>
              <SkillItem>Teamwork</SkillItem>
              <SkillItem>Communication</SkillItem>
              




              
            </EducationDetails>
          </Education>
    
          <Summary>
            <SummaryTitle>Resumo Profissional</SummaryTitle>
            <SummaryText>
              Sou desenvolvedor front end, estou cursando o último semestre do curso de História
              (Licenciatura) pela universidade federal de Brasília. Entretanto, houve algo nos algoritmos que me encantou (tanto que dei início ao curso de Ciência da Computação). Atualmente estou desenvolvendo um projeto (remotamente), para o Simplifica Doctor. Plataforma escrita em linguagem Javascript; onde estou tendo a oportunidade de aplicar e desenvolver habilidades de: Trabalho em equipe, Amazon S3, Desenvolvedor de back end, Express.js, Banco de dados, HTML5, Desenvolvedor de front end, Desenvolvedor de software, Inglês, TypeScript, Git, React.js, JavaScript, CSS.
              Instrutor voluntário de programação SkCoders – ano de 2023, onde desenvolvi habilidades de trabalho em equipe e JavaScript.
              Programo todos os dias e isso tornou-se um hábito, estou sempre em busca de conhecimento e aperfeiçoamento.
            </SummaryText>
          </Summary>
        </Container>
      );
    };
    export default Resume;