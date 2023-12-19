/* eslint-disable react/react-in-jsx-scope */
import  { useState } from "react";
import MainTitle from "../../components/MainTitle";
import { Publication, Post, Year, PostList, PostItem } from "../Publications/styles";
import { Container } from "./styles";
import DisplayGoyazProject from "./components/DisplayGoyazProject";
import DisplaySearchProject from "./components/DisplaySearchProject";

type ProjectContentType = "goyaz" | "search";

const Projects = () => {
	const [activeTabComponent, setActiveTabComponent] = useState<ProjectContentType>("search");
	const [showProjectContent, setShowProjectContent] = useState(false);

	const handleProjectClick = (projectContent: ProjectContentType) => {
		setActiveTabComponent(projectContent);
		setShowProjectContent(true);
	};

	const toggleContent = () => {
		setShowProjectContent(!showProjectContent);
	};

	const projectScreen: Partial<Record<ProjectContentType, JSX.Element>> = {
		goyaz: <DisplayGoyazProject toggleContent={toggleContent} />,
		search: <DisplaySearchProject toggleContent={toggleContent}/> , // Pode ser null se não houver componente associado
	};

	return (
		<Container>
			<Publication>
				{showProjectContent ? (
					<div>{projectScreen[activeTabComponent]}</div>
				) : (
					<>
						<MainTitle title="Projects" />
						<Post>
							<Year>2023</Year>
							<PostList>
								<PostItem onClick={() => handleProjectClick("goyaz")}>
                                    Goyaz
								</PostItem>
								<PostItem onClick={() => handleProjectClick("search")}>
                                    Buscador de artigos sobre o Brasil colônia
								</PostItem>
							</PostList>
						</Post>
					</>
				)}
			</Publication>
		</Container>
	);
};

export default Projects;