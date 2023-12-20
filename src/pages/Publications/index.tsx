/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unescaped-entities */
import  { useState } from "react";
import MainTitle from "../../components/MainTitle";
import { Container,Year,PostList,PostItem,Post,Publication,ThisPublication, PublicationTitle, StyledBsArrowLeft } from "./styles";



const Publications = () => {
	const [showPublication, setShowPublication] = useState(false);
	const handlePublication = () => {
		setShowPublication(!showPublication);
	};
	return (

		<Container>
			{
				showPublication ? (
					<ThisPublication>
						<div>

							<StyledBsArrowLeft onClick={handlePublication} />
							<PublicationTitle><a href="https://medium.com/@caioaugustobrg" target="_blank" rel="noopener noreferrer">
           Como criar um servidor em Node.js/Express.js
							</a></PublicationTitle>
						</div>
						<p>
          The article aims to instruct on creating a Node.js server using the Express.js framework. It begins by illustrating the initial steps in setting up
          the project structure: creating a directory named "server" within a folder labeled "My Application" and executing the "npm init -y" command to generate
          the package.json file, which manages the project's dependencies.
						</p>
						<p>
              Following this, we add Express.js to the project using the "npm install express" command. As a front-end developer, it's vital to become acquainted
              with this phase, as Express.js is a robust tool for constructing servers in Node.js. Subsequently, we craft a file named "server.js" within the "server"
              folder.
						</p>
						<p>
             The primary question when it comes to frontend development is the choice of a JavaScript technology that makes programming a site of similar
              scope to Simplifica Doctor feasible. The choice for Simplifica Doctor was React. By using React, developers can focus on the logic and behavior
              of the user interface without being directly concerned with DOM manipulation and the like. 
						</p>
						<p>
           The server's code employs Express.js to define two routes: a main route ("/") and an information route ("/about"). As someone who works with React.js and
          JavaScript, utilizing Express.js for route creation can prove highly beneficial in web application development. Furthermore, the server incorporates
          middleware that executes if the URL doesn't match any of the defined routes.
						</p>
						<p>
            I encourage the reader, who is also studying Node.js, SQL, and Express.js, to delve deeper into researching Express.js request and response objects,
             HTTP verbs, and the status codes assignable to server responses. Additionally, understanding CORS is crucial.
						</p>
						<p>
  The article is pedagogically written, offering comprehensive explanations of the commands and concepts employed throughout the server creation process. Serving
   as a developer who also employs GIT and operates within a Linux environment, it's important to adhere to the article's guidance and refer to the official Express.js documentation for a better grasp.
						</p>
						<p>
    In conclusion, I extend gratitude to the reader for perusing the article and provide my contact information, including my LinkedIn profile, to facilitate ongoing
     knowledge sharing regarding React.js, JavaScript, Node.js, SQL, Express.js, GIT, and Linux.
						</p><p>
            Read the text on: <a
								href="https://medium.com/@caioaugustobrg/como-criar-um-servidor-em-node-js-express-js-7619fd5d18ac"
								target="_blank"
								rel="noopener noreferrer"
							>MEDIUM</a> 
						</p>
					</ThisPublication>
				) : (
					<Publication>

						<MainTitle title="Publications" />
						<Post>
							<Year>2023</Year>
							<PostList>
								<PostItem onClick={handlePublication} >
             Como criar um servidor em Node.js/Express.js
								</PostItem>
								<PostItem>
									<a href="https://www.academia.edu/111775745/Entre_os_zeros_e_uns_de_uma_m%C3%A1quina_h%C3%A1_o_trabalho_do_historiador" target="_blank" rel="noopener noreferrer">
									Entre os zeros e uns de uma máquina há o trabalho do historiador

									</a>
							
								</PostItem>
							</PostList>
						</Post>
					</Publication>
				)
			}
		</Container>
     
	);
};
export default Publications;