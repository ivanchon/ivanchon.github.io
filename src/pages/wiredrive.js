import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

//img imports
import wrdHero from '../img/wrd-hero.png'
import wrdVid1 from '../img/wrd-desktop-web.mp4'
import wrdVid2 from '../img/wrd-mobile-web.mp4'

import wrdImg1 from '../img/wrd-header.png'
import wrdImg2 from '../img/wrd-create.png'
import wrdImg3 from '../img/wrd-library.png'
import wrdImg4 from '../img/wrd-collab.png'
import wrdImg5 from '../img/wrd-presentations.png'
import wrdImg6 from '../img/wrd-testimonials.png'
import wrdImg7 from '../img/wrd-integrations.png'
import wrdImg8 from '../img/wrd-uses.png'
import wrdImg9 from '../img/wrd-transcoding.png'



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

const Wiredrive = () => (<div>

  <Hero
    company="Wiredrive"
    titlei="Website —"
    title=" Wiredrive"
    description="To better align with new company goals and showcase a newly released version of our SaaS, we |relaunched the Wiredrive website, with a primary focus on simplicity easy of use and clarity. The site |is built on a Wordpress base, with custom fields and integrations like Mixpanel, Pardot and Salesforce."
    category="Art Direction — Web Development — UI/UX Design"
  />


  <div className="container pb-5 text-center">
    <div className="row">
      <div className="col">
        <img src={wrdHero} alt="Wiredrive Homepage"/>
      </div>
    </div>
  </div>

  <section className="bg-light">
  <div className="container py-5 text-center align-items-center">
    <div className="row">
      <div className="col-md-6 mx-auto my-auto pb-3">
        <div className="embed-responsive embed-responsive-16by9">
          <video autoPlay loop mute className="embed-responsive-item">
            <source src={wrdVid1} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="col-md-5 mx-auto my-auto">
        <video autoPlay="autoplay" loop="loop" mute="mute" height="440" class="embed-responsive-item">
          <source src={wrdVid2} type="video/mp4"/>
        </video>
      </div>
    </div>
  </div>
  </section>

  <div className="container py-5 text-center">
    <div className="row">
      <div className="col-10 mx-auto">
        <img src={wrdImg1} alt=""/>
        <img src={wrdImg2} alt=""/>
        <img src={wrdImg3} alt=""/>
        <img src={wrdImg4} alt=""/>
        <img src={wrdImg5} alt=""/>
        <img src={wrdImg6} alt=""/>
        <img src={wrdImg7} alt=""/>
        <img src={wrdImg8} alt=""/>
        <img src={wrdImg9} alt=""/>
      </div>
    </div>
  </div>



<Footer/>

</div> //all-enclosing div
)
export default Wiredrive
