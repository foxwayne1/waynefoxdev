import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import { Title, ButtonIcon, Section, Box } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";
// import imgL from '../../assets/image/jpg/wf-nbg.png'
import imgL from "../../assets/image/jpg/transparent-removebg-preview.png";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          {/* <Box pb="40px">
            <img
              src={imgL}
              alt=""
              css={`
                border-radius: 50rem !important;
                max-width: 250px;
              `}
            />
          </Box> */}
          <Row className="align-items-lg-end">
            <Col lg="12" sm="12" className="mb-5 mb-lg-0">
              <Box>
                <Title variant="hero">I'm Wayne a Frontend Developer.</Title>
              </Box>
            </Col>
            <Col lg="12" sm="12">
              <Box pl="1.25rem">
                <ButtonIcon
                  style={{ marginTop: "50px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
