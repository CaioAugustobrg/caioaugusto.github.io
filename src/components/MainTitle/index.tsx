import React from "react";
import { Container } from "./styles";

interface MainTitleProps {
  title: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
	return (
		<Container>
			{title}
		</Container>
	);
};

export default MainTitle;
