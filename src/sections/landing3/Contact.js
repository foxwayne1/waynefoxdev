import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import GlobalContext from '../../context/GlobalContext'
import { Section, Title, ButtonIcon } from '../../components/Core'
import Availability from '../../components/Availability'

const Hero = () => {
  const gContext = useContext(GlobalContext)

  return (
    <>
      <Section>
        <Container>
          <Row className='text-center justify-content-center'>
            <Col lg='10' xl='9'>
              <Availability />
              <div className='text-center my-5'>
                {/* <Title>Do you have Web Development project? Let's talk.</Title> */}
                <Title>
                  Do you have a project that needs a Frontend Developer, Say Hi
                </Title>
              </div>
              <div className='text-center'>
                <ButtonIcon
                  onClick={e => {
                    e.preventDefault()
                    gContext.toggleContact()
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hero
