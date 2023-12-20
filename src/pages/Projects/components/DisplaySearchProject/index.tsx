/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PublicationTitle, StyledBsArrowLeft, ThisPublication } from "./styles";
import { Container } from "./styles";

interface DisplayProjectProps {
  toggleContent: () => void;
}

const DisplaySearchProject: React.FC<DisplayProjectProps> = ({
	toggleContent,
}) => {
	return (
		<Container>
			<ThisPublication>
				<div>
					<StyledBsArrowLeft onClick={toggleContent} />
					<PublicationTitle>
						<a
							href="https://medium.com/@caioaugustobrg"
							target="_blank"
							rel="noopener noreferrer"
						>
						Oxossi
						</a>
					</PublicationTitle>
				</div>
				<p>
          I'm developing a search engine for articles about colonial Brazil, which
          is a "sister" project to the "Goyaz" project. This heuristic tool is
          being thought of as a kind of "google" tailor-made for historians.
          That is, with specialized search fields so that the search returns
          are, in effect, more precise.
				</p>
				<p>
          I'm developing the search engine using Javascript (with Typescript).
          On the back-end: I'm using express to handle the http methods; I'm
          applying some design patterns such as the repository pattern, and I'm
          also writing the back-end following clean architecture. Tests written
          using Jest. Of course, the paradigm here is OOP.
				</p>

				<p>
          The front-end repository on:{" "}
					<a
						href="https://github.com/CaioAugustobrg/Buscador-de-documentos-coloniais-front"
						target="_blank"
						rel="noopener noreferrer"
					>
            GITHUB
					</a>
				</p>
				<p>
                The back-end repository on:{" "}
					<a
						href="https://github.com/CaioAugustobrg/Buscador-de-documentos-coloniais-back"
						target="_blank"
						rel="noopener noreferrer"
					>
            GITHUB
					</a>
				</p>
			</ThisPublication>
		</Container>
	);
};

export default DisplaySearchProject;
