/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Container,
	MyName,
	Propeties,
	NameText,
	OpenedCurlyBraces,
	ClosedCurlyBraces,
	StyledAiOutlineMenu,
	LetText,
	EqualSign,
	MenuToMobile} from "./styles";

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [mobileMenu, setMobileMenu] = useState(false);
	const openedCurlyBrances = "{"; 
	const closedCurlyBraces = "}";
	// console.log(Caio)
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const menuOptions = [
		{
			title: "CV",
			path: "/resume"
		},
		{
			title: "Projects",
			path: "/projects"
		},
		{
			title: "Publications",
			path: "/publications"
		},
		{
			title: "Contact",
			path: "/contact"
		},
	
	
		

	];
	const openMenu = () => {
		setMobileMenu(!mobileMenu);
	};
	return (
		<>
			{windowWidth > 768 ? (

				<Container>
            
					<MyName>
						<LetText>let</LetText><NameText>Caio</NameText><EqualSign>=</EqualSign><OpenedCurlyBraces>{openedCurlyBrances}</OpenedCurlyBraces>
					</MyName>
       
					{menuOptions.map((item, index) => (
						<ul key={index}>
							<Propeties>
								<a href={item.path}>{item.title}</a>
							</Propeties>

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
									<Propeties><a href={item.path}>{item.title}</a></Propeties>
								</ul>
							))}
							<ClosedCurlyBraces>{closedCurlyBraces}</ClosedCurlyBraces>
						</MenuToMobile>
					)}
                 

                    
				</Container>
			)}
		</>
	);
};
export default Header;