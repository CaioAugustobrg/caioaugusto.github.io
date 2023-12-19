/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PublicationTitle, StyledBsArrowLeft, ThisPublication } from "./styles";
import { Container } from "./styles";

interface DisplayProjectProps {
  toggleContent: () => void;
}

const DisplayGoyazProject: React.FC<DisplayProjectProps> = ({ toggleContent }) => {
	return (
		<Container>
			<ThisPublication>
				<div>
					<StyledBsArrowLeft onClick={toggleContent} />
					<PublicationTitle>
						
              Goyaz
						
					</PublicationTitle>
				</div>
				<p>
          I'm excited to inform you that I'm participating in the development of
          this software as part of an extension project at the University of
          Brasilia (UnB). This project arose from an invitation that Tiago Gil,
          associate professor of American History in the History Department at
          UnB, and Amanda gave me.
				</p>
				<p>
          Together, we are working to create software that uses react-leaflet to
          render a map of the world, with a special focus on Brazil. Our aim is
          to highlight some of the geographical peculiarities of Goiás (or
          Goyaz, as it was called in the 19th century) during Brazil's colonial
          period.
				</p>
				<p>
          As a front-end and back-end developer, I'm responsible for turning
          these ideas into functional code. After extensive research, Amanda
          developed the markings in .shp (shapefile) format, and Tiago converted
          them into GeoJson format. The files include the location of the blocks
          and houses in Goiás, superimposed on the contemporary map, during the
          period of Colonial Brazil.
				</p>
				<p>
          In this project, we are going to implement various functionalities
          beyond simply rendering the information contained in the GeoJson
          files. We are planning to allow selective visualization of some houses
          and blocks, as well as the possibility of hiding other specific
          information as needed.
				</p>
				<p>
          I would like to thank Tiago and Amanda for the trust they have placed
          in me by inviting me to participate in this extension project. I'm
          excited to contribute my ability to write good JavaScript code using
          React.js, and GIT for versioning. Soon, we will provide a link to
          deploy the software, allowing others to get to know and interact with
          the application.
				</p>
				<p>
            The repository on: <a
						href="https://github.com/CaioAugustobrg/Goyaz"
						target="_blank"
						rel="noopener noreferrer"
					>GITHUB</a> 
				</p>
				<p>
            The web application hosted on: <a
						href="https://goiaz33.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>VERCEL</a> 
				</p>
			</ThisPublication>
		</Container>
	);
};

export default DisplayGoyazProject;
