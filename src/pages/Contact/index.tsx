import { ContactDiv, ContactString, Container,EmailsDiv,EmailString } from "./styles";

const Contact = () => {
    return (
        <Container>
            <ContactDiv>
            <ContactString>
                Contact
                </ContactString>
                <EmailsDiv>
                <EmailString>
                E-mails:
                </EmailString>
                <li><a href="#">
                    caioaugustobrg@gmail.com
                    </a>
                    </li>
                    <EmailString>
                    <a href="https://linktr.ee/caioaugustobraga" target="_blank">
                Linktree
                    </a>
                </EmailString>
                </EmailsDiv>
                
            </ContactDiv>
            </Container>

    )
}
export default Contact;