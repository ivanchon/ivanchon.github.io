import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, injectGlobal } from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

injectGlobal`
  .hero-pad{
    margin: 10% auto 5%;

    @media (max-width: 767.98px) {
      margin-top: 5rem;
    }

  }
`;


const Company = styled.p`
  font-size: 0.8em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 500;
  margin: 0 0 12px 0;
  padding: 0;
`;

const TitleI = styled.span`
  padding: 0;
  font-family: "ITC Clearface Std";
`;

const Description = styled.p`
`;

const Category = styled.p`
  font-size: 0.8em;
`;


const Hero = props => (
  <Container className="hero-pad">
    <Row>
      <Col className="col-10 col-lg-8 mx-auto text-center">
        <Company>{props.company}</Company>
        <Title>{props.titlei}<TitleI>{props.title}</TitleI></Title>
        <Description>{props.description}</Description>
        <Category>{props.category}</Category>
      </Col>
    </Row>
  </Container>
);

export default Hero
