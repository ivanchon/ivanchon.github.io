import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

//img imports
import prtWast from '../img/prt-wasteland.jpg'
import prtCard from '../img/prt-cardinal.jpg'
import prtStre from '../img/prt-street.jpg'
import prtAnim from '../img/prt-animal.jpg'

const Hero = props => (
  <HeroWrapper className="container">
    <div className="row">
      <div className="col-sm-8 ml-auto mr-auto text-center">
        <Company>{props.company}</Company>
        <Title>{props.titlei}<TitleI>{props.title}</TitleI></Title>
        <Description>{props.description}</Description>
        <Category>{props.category}</Category>
      </div>
    </div>
  </HeroWrapper>
);

const Wrapped = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Prints —"
    title=" Chaos to Denim"
    description="A collection of textile patterns created for the Hudsdon FW14 season: Chaos to denim."
    category="Graphic Design — Textile Design"
  />

  <div className="container padb5 text-right">
    <div className="row">
      <div className="col">
        <img src={prtWast} alt="Krista Super Skinny in Wasteland"/>
        <p className="work-caption padtb3 text-right">Krista Super Skinny in Wasteland</p>
        <img src={prtCard} alt=""/>
        <p className="work-caption padtb3 text-right">Vanish Chino in Cardinal Punk Plaid</p>
        <img src={prtStre} alt=""/>
        <p className="work-caption padtb3 text-right">Nico Super Skinny in Streetside</p>
        <img src={prtAnim} alt=""/>
        <p className="work-caption padtb3 text-right">Spark Super Skinny in Animal Instincts</p>
      </div>
    </div>
  </div>


<Footer/>

</div> //all-enclosing div
)
export default Wrapped
