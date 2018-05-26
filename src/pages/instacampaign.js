import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import insAds1 from '../img/ins-ads-1.jpg'
import insAds2 from '../img/ins-ads-2.jpg'
import insAds3 from '../img/ins-ads-3.jpg'

import insBil1 from '../img/ins-billboard-1.jpg'
import insBil2 from '../img/ins-billboard-2.jpg'
import insTaxi from '../img/ins-taxi-1.jpg'

import insFam1 from '../img/ins-fam-1.jpg'
import insFam2 from '../img/ins-fam-2.jpg'
import insFam3 from '../img/ins-fam-3.jpg'


const InstaCampaign = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Spring 13 —"
    title=" Instacampaign"
    description="IInspired by the explosion of social networking, the campaign invites to discover the privacy of Georgia and his brother through their favorite places in London. Brand fans are invited to follow the baseline of the campaign via the hashtags #LETYOURSELFGO and #instacampaign."
    category="Graphic Design — Digital Design"
  />


  <div className="container padb5 text-center">
    <div className="row">
      <div className="col">
        <h3>Campaign Ads</h3>
      </div>
    </div>
      <div className="col">
        <img src={insAds1} alt=""/>
      </div>
    <div className="row">
      <div className="col">
        <img src={insAds2} alt=""/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={insAds3} alt=""/>
      </div>
    </div>
  </div>

  <div className="container padb5 text-right">
    <div className="row">
      <div className="col-md-9 text-right">
        <img src={insBil1} alt=""/>
        <p className="work-caption text-right padtb3">Campaign billboard in NYC</p>
      </div>
      <div className="col-md-3">
        <img src={insBil2} alt=""/>
        <p className="work-caption padtb3">Campaign billboard in LA</p>
        <br/>
        <img src={insTaxi} alt=""/>
        <p className="work-caption padtb3">Hudson Taxi for NYFW</p>
      </div>
    </div>
  </div>

  <div className="container py-5 text-center">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h3>The #InstaFam Campaign</h3>
        <p>To align with the concept of social media, top influencers and bloggers where chosen as partners. Susie Lau (Style Bubble), Chiara Ferragni (The Blonde Salad), and Aime Song (Song of Style) shared a day where they 'let themselves go' with Hudson Jeans, giving a glimpse into their world, activities, and interests. Featured in Nylon, Teen Vogue, and InStyle Magazine. </p>
      </div>
    </div>
      <div className="col">
        <img src={insFam1} alt=""/>
      </div>
    <div className="row">
      <div className="col">
        <img src={insFam2} alt=""/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={insFam3} alt=""/>
      </div>
    </div>
  </div>



<Footer/>

</div> //all-enclosing div
)
export default InstaCampaign
