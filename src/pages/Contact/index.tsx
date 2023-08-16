import { ContactDiv, ContactString, Container, EmailsDiv, EmailString } from './styles';

const openEmailInNewTab = () => {
    window.open('mailto:caioaugustobrg@gmail.com');
};

const Contact = () => {
    return (
        <Container>
            <ContactDiv>
                <ContactString>Contact</ContactString>
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
