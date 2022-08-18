import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import imgWorkCover from "../assets/image/jpg/details/manage-main.png";
import imgS1 from "../assets/image/jpg/details/manage-github.png";
import imgS2 from "../assets/image/jpg/details/details-11.jpg";
import imgS3 from "../assets/image/jpg/details/details-10.jpg";
import imgS4 from "../assets/image/jpg/details/details-9.jpg";
import imgS5 from "../assets/image/jpg/details/details-14.jpg";
import imgS6 from "../assets/image/jpg/details/details-13.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper lightTheme>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Text variant="tag">HTML, CSS, TAILWIND</Text>
                  <Title className="my-4">
                    Manage Landing Page <br /> Frontend Mentor Challenge.
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                    A great starter project built using HTML and Tailwind CSS,
                    stored on Githhub and deployed with Netlify.
                  </Text>
                </Box>
              </Col>
            </Row>

            <Box pt={["4rem", null, null, "6.25rem"]}>
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Box>
          </Container>
        </Section>

        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Link href="https://github.com/foxwayne1/FM-Manage-Landing-Page">
                  <a target="_blank">
                    <Button arrowRight>Github Repo</Button>
                  </a>
                </Link>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Link href="https://fm-manage-landing-page-wf.netlify.app/">
                  <a target="_blank">
                    <Button arrowRight>Deployed Site</Button>
                  </a>
                </Link>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Link href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">
                  <a target="_blank">
                    <Button arrowRight>Challenge</Button>
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5 pb-0">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              {/* <Col xs='12' className='mb-5'>
                <img src={imgS2} alt='' className='img-fluid w-100' />
              </Col>
              <Col lg='6' className='mb-5 mb-lg-0 pr-lg-4'>
                <img src={imgS3} alt='' className='img-fluid w-100' />
              </Col>
              <Col lg='6' className='mb-5 pl-lg-4'>
                <img src={imgS4} alt='' className='img-fluid w-100' />
              </Col> */}
            </Row>
          </Container>
        </Section>

        {/* <Section bg='dark' className='pt-0'>
          <Container>
            <Row>
              <Col xs='12' className='mb-5'>
                <img src={imgS5} alt='' className='img-fluid w-100' />
              </Col>
              <Col xs='12' className='mb-5'>
                <img src={imgS6} alt='' className='img-fluid w-100' />
              </Col>
            </Row>

            <div className='text-center mt-lg-5'>
              <Text variant='tag' className='mb-1' color='lightShade'>
                Next Project
              </Text>
              <Link href='/portfolio-details'>
                <a>
                  <Button
                    arrowRight
                    className='border-0 bg-transparent shadow-none text-capitalize py-3'
                    css={`
                    font-weight: 700
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                  >
                    Replace
                  </Button>
                </a>
              </Link>
            </div>
          </Container>
        </Section> */}
        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
