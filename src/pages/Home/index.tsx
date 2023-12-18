import { Container,MyInformations,Name,
	Position,
	SocialMedia,
	StyledAiFillGithub,
	StyledAiFillLinkedin,
	StyledAiMediumSquare
} from "./styles";
import React from "react";
import myPicture from "../../assets/myPicture.jpeg";

const Home = () => {    

	return (
		<Container>
			<MyInformations>
				<div
					style={{
						margin: "auto",
						width: "200px",
						height: "235px",
						backgroundRepeat: "no-repeat",
						filter: "grayscale(1px)",
						borderRadius: "2px",
						backgroundPosition: "center",
						backgroundImage: `url(${myPicture})`,
						backgroundSize: "cover",
					}}
				></div>
				<Name>Caio Augusto</Name>
				<Position>Desenvolvedor full-stack</Position>
				<SocialMedia>
					<a href="https://www.linkedin.com/in/caioaugustobrg/" target="_blank" rel="noreferrer">
						<StyledAiFillLinkedin />
					</a>
					<a href="https://github.com/CaioAugustobrg" target="_blank" rel="noreferrer">
						<StyledAiFillGithub />
					</a>
					<a href="https://medium.com/@CaioAugustobrg" target="_blank" rel="noreferrer">
						<StyledAiMediumSquare />
					</a>
				</SocialMedia>
			</MyInformations>
		</Container>
      
	);
};
export default Home;