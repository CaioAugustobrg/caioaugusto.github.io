/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */

import MainTitle from "../../components/MainTitle";
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
} from "./styles";
const Resume = () => {
	return (

		<Container>
			<Education>
				<MainTitle title='Curriculum in a nutshell' />
				<EducationTitle>Education</EducationTitle>
				<EducationDetails>
					<SkillBigItem>História (Licenciatura) -- 2019-2023 -- Universidade de Brasília (UnB)</SkillBigItem>
					<SkillBigItem>Ciência da Computação (Bacharelado) -- 2022-2026 -- Universidade Católica de Brasília (UCB)</SkillBigItem>
					<SkillBigItem>English -- 2019-2025 -- Wizard by Pearson</SkillBigItem>
				</EducationDetails>
			</Education>

			<Education>
				<EducationTitle>Professional experience</EducationTitle>
				<EducationDetails>
					<SkillBigItem><a href='https://simplificadoctor.com' target="_blank" rel="noopener noreferrer">Simplifica Doctor</a> -- (04/2023 - Today)  </SkillBigItem>
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
					<SkillItem>Nest.js</SkillItem>
					<SkillItem>SQL: Prisma and TypeORM</SkillItem>
					<SkillItem>Typescript</SkillItem>
					<SkillItem>Jest - Tests</SkillItem>
					<SkillItem>Design Patterns</SkillItem>
					<SkillItem>Clean Architecture</SkillItem>
					<SkillItem>MVC</SkillItem>
					<SkillItem>SOLID</SkillItem>
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
				<SummaryTitle>Professional Summary</SummaryTitle>
				<SummaryText>
					<p>
					I am a developer and I am in the last semester of my History degree.
              (at the Federal University of Brasilia. However, there was something about algorithms that sparked my interest (so much so that I started the Computer Science course). I am currently developing a project (remotely) for Simplifica Doctor. A platform written in Javascript language, where I am having the opportunity to apply and develop skills in: Teamwork, Amazon S3, Back end developer, Express.js, Tests with Jest, Database, HTML5, Front end developer, Software developer, English, TypeScript, Git, React.js, JavaScript, CSS.
              SkCoders volunteer programming instructor - year 2023, where I developed teamwork and JavaScript skills.
              I program every day and this has become a habit, I am always looking for knowledge and improvement.
					</p>
				</SummaryText>
			</Summary>
		</Container>
	);
};
export default Resume;