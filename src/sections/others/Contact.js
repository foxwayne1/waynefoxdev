import React from 'react'
import Link from 'next/link'
import { rgba } from 'polished'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Section, Title, Text, Span, Box } from '../../components/Core'
import ContactForm from '../../components/ContactForm'
import { device } from '../../utils'
import Button from '../../components/Core/Button'

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 250px;
  }
`

const Contact = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg='10'>
              <Box className='pr-lg-5'>
                <Title color='light' variant='secSm' mb='2rem'>
                  Say Hi
                </Title>
                <Text color='light' mb='2.75rem'>
                  Looking to hire me? I'm always open to new opportunities.
                </Text>
                <Text color='light' mb='2.75rem'>
                  I'm a full time Frontend Developer working with JavaScript and
                  React JS including Next JS.
                </Text>
                <Text color='light' mb='2.75rem'>
                  It's easy to get hold of my through the twitter and linkedin
                  links below, if you need a fulltime developer who works with
                  React and JavaScript, then Say Hi.
                </Text>
                {/* <ContactForm theme='dark' /> */}
                <Row>
                  <Col lg='4' className='mb-4 mb-lg-0'>
                    <Link href='https://twitter.com/waynesdev'>
                      <a target='_blank'>
                        <Button>Twitter</Button>
                      </a>
                    </Link>
                  </Col>
                  <Col lg='4' className='mb-4 mb-lg-0'>
                    <Link href='https://www.linkedin.com/in/waynesdev/'>
                      <a target='_blank'>
                        <Button>Linkedin</Button>
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Box>
            </Col>
            <Col lg='5'>
              {/* <ContactCard className='p-5 ml-lg-5'>
                <div>
                  <Text color='light'>Email me at</Text>

                  <a
                    href='mailto:fox.wayne1@gmail.com'
                    className='font-weight-bold'
                  >
                    <Span color='primary'>fox.wayne1@gmail.com</Span>
                  </a>
                </div>
                <div className='mt-5'>
                  <Text color='light'>Use twitter</Text>

                  <div>
                    <a
                      href='https://twitter.com/frontendfox_'
                      className='font-weight-bold'
                    >
                      <Span color='primary'>Tweet Me</Span>
                    </a>
                  </div>
                </div>
              </ContactCard> */}
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Contact
