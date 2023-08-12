import React from "react";
import { Container, MyName,Propeties, LetText ,NameText,EqualSign, OpenedCurlyBraces,ClosedCurlyBraces} from "./styles";

const Header = () => {
    let openedCurlyBrances = '{' 
    let closedCurlyBraces = '}'
    // console.log(Caio)
    return (
        <Container>
            <MyName>
            <LetText>let</LetText><NameText>Caio</NameText><EqualSign>=</EqualSign><OpenedCurlyBraces>{openedCurlyBrances}</OpenedCurlyBraces>
            </MyName>
            <Propeties>
           CV
            </Propeties>

            <Propeties>
            Projects
            </Propeties>

            <Propeties>
            Publications
            </Propeties>

            <Propeties>
            Contact
            </Propeties>
            <Propeties>
            en
            </Propeties>
            <ClosedCurlyBraces>{closedCurlyBraces}</ClosedCurlyBraces>

        </Container>
    )
}
export default Header;