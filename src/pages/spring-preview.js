import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

//img imports
import sprMin from '../img/spr-men-invite.jpg'
import sprMca from '../img/spr-men-card.jpg'
import sprWin from '../img/spr-wom-invite.jpg'
import sprWca from '../img/spr-wom-card.jpg'

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

const SpringPreview = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Spring 15 —"
    title=" Press Preview"
    description="For this season's preview imagert, we re-created the feel of gelatin silver process with type overlays for our deliverables. Digital, printed invitations, line book and gifting cards."
    category="Graphic Design — Photo Editing"
  />


  <div className="container padb5 text-right">
    <div className="row">
      <div className="col">
        <img src={sprMin} alt=""/>
        <p className="work-caption padtb3">Men's Invitation</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={sprMca} alt=""/>
        <p className="work-caption padtb3">Men's Gifting Card</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={sprWin} alt=""/>
        <p className="work-caption padtb3">Women's Invitation</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={sprWca} alt=""/>
        <p className="work-caption padtb3">Women's Gifting Card</p>
      </div>
    </div>
  </div>

<Footer/>

</div> //all-enclosing div
)
export default SpringPreview
