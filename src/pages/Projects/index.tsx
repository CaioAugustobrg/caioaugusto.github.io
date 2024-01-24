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
							<Year>
								<p>
								2023
								</p>
							</Year>
							<PostList>
								<PostItem onClick={() => handleProjectClick("goyaz")}>
                                    Goyaz
								</PostItem>
								<PostItem onClick={() => handleProjectClick("search")}>
                                    Oxossi
								</PostItem>
								<PostItem>
								
									<a
										href="https://github.com/CaioAugustobrg/online-mall.git"
										target="_blank"
										rel="noopener noreferrer"
									>
                  Online Mall
									</a>
								</PostItem>
								<PostItem>
									<a
										href="https://github.com/CaioAugustobrg"
										target="_blank"
										rel="noopener noreferrer"
									>
                  More projects at my github
									</a>
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