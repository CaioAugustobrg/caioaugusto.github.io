/* eslint-disable react/react-in-jsx-scope */
import MainTitle from "../../components/MainTitle";
import { ContactDiv, Container, EmailsDiv, EmailString } from "./styles";
//import React from "react";

const openEmailInNewTab = () => {
	window.open("mailto:caioaugustobrg@gmail.com");
};

const Contact = () => {
	return (
		<Container>
			<ContactDiv>
				<MainTitle title='Contact' />
				<EmailsDiv>
					<EmailString>E-mails:</EmailString>
					<li>
						<a onClick={openEmailInNewTab}>
                            caioaugustobrg@gmail.com
						</a>
					</li>
					<EmailString>
						<a href="https://linktr.ee/caioaugustobraga" target="_blank" rel="noopener noreferrer">
                            Linktree
						</a>
					</EmailString>
				</EmailsDiv>
			</ContactDiv>
		</Container>
	);
};

export default Contact;
