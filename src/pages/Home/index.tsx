import React from "react";
import { Container,MyInformations,Name,
  SocialMedia,
  StyledAiFillGithub,
  StyledAiFillLinkedin,
  StyledAiMediumSquare
} from "./styles";
import myPicture from '../../assets/myPicture.jpeg'

const Home = () => {    

  return (
            <Container>
              <MyInformations>

              <div
                    style={{
                      margin: 'auto',
                      width: '200px',
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
                  <h4>Desenvolvedor full-stack</h4>
                  <SocialMedia>
                  <StyledAiFillLinkedin />
                  <StyledAiFillGithub />
                  <StyledAiMediumSquare />
                  </SocialMedia>
                      </MyInformations>
                </Container>
      
    )
}
export default Home;