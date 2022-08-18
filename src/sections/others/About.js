import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
// import imgPhoto from "../../assets/image/jpg/Untitled-design-dark-blue.png";
import imgPhoto from "../../assets/image/jpg/removebg-preview.png";
import imgSignLight from "../../assets/image/png/signature.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Wayne Fox
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  Frontend Developer - Specializing in JavaScript with React and
                  Next JS
                </Text>
                <Text color="light" className="mt-4">
                  Working hard to build a future in the web.
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:hello@folio.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">fox.wayne1@gmail.com</Span>
                    </a>
                  </Text>
                </div>
                <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Wayne Fox
                </Text>
                <Text color="light" variant="small">
                  Frontend Developer
                </Text>
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.twitter.com/waynefoxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.linkedin.com/in/waynefoxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Linkedin
                  </LinkSocial>
                  {/* <LinkSocial
                    href="https://www.frontendfox.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Portfolio
                  </LinkSocial> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
