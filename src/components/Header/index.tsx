import React from "react";
import { Container, MyName,Propeties, LetText ,NameText,EqualSign, CurlyBraces} from "./styles";

const Header = () => {
    let openningCurlyBrances = '{' 
    // console.log(Caio)
    return (
        <Container>
            <MyName>
            <LetText>let</LetText><NameText>Caio</NameText><EqualSign>=</EqualSign><CurlyBraces>{openningCurlyBrances}</CurlyBraces>
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


        </Container>
    )
}
export default Header;