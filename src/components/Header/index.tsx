import React, { useEffect, useState } from "react";
import { Container,
MyName,
Propeties,
NameText,
OpenedCurlyBraces,
ClosedCurlyBraces,
StyledAiOutlineMenu,
MenuToMobile} from "./styles";
const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileMenu, setMobileMenu] = useState(false)
    let openedCurlyBrances = '{' 
    let closedCurlyBraces = '}'
    // console.log(Caio)
    useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

    let menuOptions = [
        {
            title: 'CV'
        },
        {
            title: 'Projects'
        },
        {
            title: 'Publications'
        },
        {
            title: 'Contact'
        },
        {
            title: 'en'
        },

    ]
    const openMenu = () => {
        setMobileMenu(!mobileMenu)
    }
    return (
        <>
        {windowWidth > 768 ? (

            <Container>
            
            <MyName>
            <NameText>let</NameText><NameText>Caio</NameText><NameText>=</NameText><OpenedCurlyBraces>{openedCurlyBrances}</OpenedCurlyBraces>
            </MyName>
       
            {menuOptions.map((item, index) => (
                        <ul key={index}>
                    <Propeties >{item.title}</Propeties>
                        </ul>
        ))}
          
            <ClosedCurlyBraces>{closedCurlyBraces}</ClosedCurlyBraces>

        </Container>
            ) : (
                <Container>
                     <MyName>
            <NameText>let</NameText><NameText>Caio</NameText><NameText>=</NameText><OpenedCurlyBraces>{openedCurlyBrances}</OpenedCurlyBraces>
            </MyName>
                    <StyledAiOutlineMenu onClick={openMenu} />
                  
                    {mobileMenu && (
                    <MenuToMobile>
                    {menuOptions.map((item, index) => (
                        <ul key={index}>
                    <Propeties >{item.title}</Propeties>
                        </ul>
        ))}
        <ClosedCurlyBraces>{closedCurlyBraces}</ClosedCurlyBraces>
    </MenuToMobile>
)}
                 

                    
                </Container>
            )}
        </>
    )
}
export default Header;