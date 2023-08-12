import React from "react";
import { Container,MyInformations,Name,
  SocialMedia,
  StyledAiFillGithub,
  StyledAiFillLinkedin,
  StyledAiMediumSquare
} from "./styles";
import myPicture from '../../assets/myPicture.jpeg'

const Home = () => {    
  //let myPicture ='https://caioaugusto.s3.sa-east-1.amazonaws.com/caioPicture.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXNhLWVhc3QtMSJHMEUCIEJQW4IoQsYDDRZ0sHxfSZS3YV8yFX27e76hJKFUydrRAiEAgLDMAVCz%2B46CArOMf%2BsPKiPiD3RQGmIBpH%2FQZWxcozsq7QII4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzODE1Njc2MjMyMjUiDPrNO5MBC70GBvX9xirBAkFKKv1iB5Sf%2F7zBOr6UBVEi%2FWa2aQLIHKqZkweVMZzJyJgHznFNHTJQnVznCVJiEA4vJ6i5AMI4MgX5ZNlEwSRtisyokmO3xGVGrXsx%2FAtP3a8DiAABT7dCLjobxDNHI1U7HA0SOZ%2BYY7fJDk2%2BKv9MIuyT2DrBG1nGRy0LsiH7cN3zgj8tZTOVCOSzBnVvRU%2BAxNsIS1PKn%2FS4Jde%2FE9IDoTA3yyIbUnTAs8riWq2wu6Zjjc02EcppXbp5eYMXcv2vL66IQpDsGxitBkZgbclqVhxEg1vFv2wlt3DcO0zyty8NGhQcPhe5y%2B%2FDAadnK71C1l1LNLyIciR94PIINUGf6rpkVcMg4JYt7iWd%2Fj%2BhsKZPg9FCTWVw%2BEytN%2BvgPMF7Ekr%2FvkGIRL3cJm%2Bf32IC6KuVnw3ChnREn1KGvttA7jCm1tumBjqzAkp%2FlmqsHR0Jq8abZEViSHQNxGR3gEfoAEWJHT0tpGlejFvjikAicTI5tmZL48w1S5RSzAHWXb5wk4V%2B75KNpy1D14CpmwmAoiSLpqSmggwVJK5odv3aeQJqPiZ62RVtTyTblT94WIAM1jW78f8MiZQOJEAEhJjdcPKongBnBFfh1ijc4m8mB80VOOqGMAkmS%2F3967vUlFD%2BqIUmM%2FwmpA9svNofOp2UuRxlCaHesuFvelQtVMRi6e5cL8UaFhnaQLzIFWfKzkxr1P1nOuyA4wYlYpTvXF13zSOjVm403RR455mYPc8NswwGAJNcl3lSv9ayAKGcafwCEIwYCuKwD2MkA%2Fht7TB9qBdfbSl7UpSOTt3pIL7R7vhB72OkX0QZ1GFAMQKSjuAOTO%2B4ScPSk8F3zJg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T025323Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVRVZT4A45BY3G6OV%2F20230812%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6357322d5938b20355fef5e43e95e8090e2ad78a69e81d79c11cf40542371a2a'
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