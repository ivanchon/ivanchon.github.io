import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

//img imports
import lyeInvi from '../img/lye-invite.jpg'
import lyeFly1 from '../img/lye-flyer-1.jpg'
import lyeFly2 from '../img/lye-flyer-2.jpg'
import lyeCase from '../img/lye-case.jpg'
import lyeTote from '../img/lye-tote.jpg'
import lyeImg1 from '../img/lye-img-1.jpg'
import lyeImg2 from '../img/lye-img-2.jpg'
import lyeImg3 from '../img/lye-img-3.jpg'
import lyeImg4 from '../img/lye-img-4.jpg'
import lyeImg5 from '../img/lye-img-5.jpg'
import lyeImg6 from '../img/lye-img-6.jpg'


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

const FallPreview = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Event —"
    title=" Let Yourself Go at American Rag"
    description="To celebrate the launch of the Fall '13 Campaign, Hudson hosted a special evening at American Rag. Guests and shoppers were treated to live music, craft beer from Glendale Brewery, handcrafted Hudson Whiskey cocktails, and freebies like custom Hudson totes and iPhone cases with the imagery from the campaign. Shoppers were also entered into a raffle for a Lakers game."
    category="Graphic Design — In-store Installations"
  />


  <div className="container pb-5">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <img src={lyeInvi} alt=""/>
        <p className="work-caption py-3">Men's Invitation</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={lyeFly1} alt=""/>
      </div>
      <div className="col text-right">
        <img src={lyeFly2} alt=""/>
        <p className="work-caption py-3">Women's Invitation</p>
      </div>
    </div>
  </div>

  <div className="container pb-5 text-right ">
    <div className="row align-items-center">
      <div className="col-md-7">
        <img src={lyeCase} alt=""/>
        <p className="work-caption pb-3">iPhone Cases</p>
      </div>
      <div className="col-md-5">
        <img src={lyeTote} alt=""/>
        <p className="work-caption pb-3">Custom tote</p>
      </div>
    </div>
  </div>

  <div className="container pb-5 text-center">
    <h3>Event Images</h3>
    <div className="row ">
      <div className="col">
        <img src={lyeImg1} alt=""/>
      </div>
      <div className="col">
        <img src={lyeImg2} alt=""/>
      </div>
      <div className="col">
        <img src={lyeImg3} alt=""/>
      </div>

    <div className="w-100"></div>
      <div className="col">
        <img src={lyeImg4} alt=""/>
      </div>
      <div className="col">
        <img src={lyeImg5} alt=""/>
      </div>
      <div className="col">
        <img src={lyeImg6} alt=""/>
      </div>
    </div>
  </div>

<Footer/>

</div> //all-enclosing div
)
export default FallPreview
