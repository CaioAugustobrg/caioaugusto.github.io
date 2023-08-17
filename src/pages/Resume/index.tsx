import {
        Container,
        Education,
        EducationDetails,
        EducationTitle,
        SkillBigItem,
        SkillItem,
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
              <SkillBigItem>História (Licenciatura) -- 2019-2023 -- Universidade de Brasília (UnB)</SkillBigItem>
              <SkillBigItem>Ciência da Computação (Bacharelado) -- 2022-2026 -- Universidade Católica de Brasília (UCB)</SkillBigItem>
            </EducationDetails>
          </Education>

          <Education>
            <EducationTitle>Professional experience</EducationTitle>
            <EducationDetails>
            <SkillBigItem><a href='https://simplificadoctor.com' target="_blank" rel="noopener noreferrer">Simplifica Doctor</a></SkillBigItem>

            <p>
            Once upon a time, there was no need for an intersection between dental education and teaching software. However, today,
              an indispensable platform will be created to offer users interested in dentistry the possibility of accessing knowledge produced by its experts.
              
              </p>
              <p>
              Moving forward, i have got an objective: to examine the "Simplifica Doctor" platform in order to highlight the choices made during its development.
              This platform is written in the JavaScript language; the preference for this language is quite simple: it is undoubtedly the best language
              for developing websites like this. Besides that, new selections need to be considered regarding the platform's frontend and its backend.
              </p>
             <p>
             The primary question when it comes to frontend development is the choice of a JavaScript technology that makes programming a site of similar
              scope to Simplifica Doctor feasible. The choice for Simplifica Doctor was React. By using React, developers can focus on the logic and behavior
              of the user interface without being directly concerned with DOM manipulation and the like. 
             </p>
           <p>
             Now, onto its backend.          
             Developing the backend for the site involves choosing a technology that is efficient and allows the construction of a robust server to meet the application's needs.
             One of the popular options is Node.js in conjunction with the Express.js framework. 
           </p>
            <p>
            By using Node.js with Express.js, developers can leverage the benefits of a JavaScript runtime environment on the server and an efficient web development
            framework. This combination allows for the construction of a powerful and scalable backend for "Simplifica Doctor," with support for data manipulation,
            authentication, database integration, third-party APIs, and much more.
            </p>
  <p>
    Finally, I thank José and André for trusting in my development capabilities and collaborating on a project like this.
    </p>

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
              <p>
              Sou desenvolvedor front end, estou cursando o último semestre do curso de História
              (Licenciatura) pela universidade federal de Brasília. Entretanto, houve algo nos algoritmos que me encantou (tanto que dei início ao curso de Ciência da Computação). Atualmente estou desenvolvendo um projeto (remotamente), para o Simplifica Doctor. Plataforma escrita em linguagem Javascript; onde estou tendo a oportunidade de aplicar e desenvolver habilidades de: Trabalho em equipe, Amazon S3, Desenvolvedor de back end, Express.js, Banco de dados, HTML5, Desenvolvedor de front end, Desenvolvedor de software, Inglês, TypeScript, Git, React.js, JavaScript, CSS.
              Instrutor voluntário de programação SkCoders – ano de 2023, onde desenvolvi habilidades de trabalho em equipe e JavaScript.
              Programo todos os dias e isso tornou-se um hábito, estou sempre em busca de conhecimento e aperfeiçoamento.
              </p>
            </SummaryText>
          </Summary>
        </Container>
      );
    };
    export default Resume;