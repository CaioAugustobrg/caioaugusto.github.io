/* eslint-disable react/react-in-jsx-scope */
import { Container, Rights, ToHome } from "./styles";
//import React from "react";

const Footer = () => {
	return (
		<Container>
            
			<Rights><p>
                © 2023
			</p>
			</Rights>
			<ToHome> <a  href="/">
    Caio Augusto da Silva Braga - Home
			</a>
			</ToHome>

		</Container>
	);
};
export default Footer;