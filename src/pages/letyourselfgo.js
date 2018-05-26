import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import lygAds1 from '../img/lyg-ads-1.jpg'
import lygAds2 from '../img/lyg-ads-2.jpg'
import lygAds3 from '../img/lyg-ads-3.jpg'

import lygBil1 from '../img/lyg-billboard-1.jpg'
import lygBil2 from '../img/lyg-billboard-2.jpg'

import lygWeb1 from '../img/lyg-nylon-web.jpg'

import lyeCase from '../img/lye-case.jpg'
import lyeTote from '../img/lye-tote.jpg'

import lygImg1 from '../img/lyg-img-1.jpg'
import lygImg2 from '../img/lyg-img-2.jpg'
import lygImg3 from '../img/lyg-img-3.jpg'


const LYGCampaign = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Fall 14 —"
    title=" #LETYOURSELFGO"
    description="Starring Georgia May Jagger and Jon Kortajarena, the campaign hones in on self-expression by combining feisty attitudes and rebellious free-jumping images. The Two muses embody the legacy of british cool and the liberating free spirit of Los Angeles. When the British and Californian freedom irreverence meet, rock, rebellious spirit of the brand is revealed. #letyourselfgo."
    category="Art Direction - Graphic Design"
  />


  <div className="container pb-5 text-center">
    <h3>Campaign Ads</h3>
    <div className="row">
      <div className="col">
        <img src={lygAds1} alt=""/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={lygAds2} alt=""/>
      </div>
    </div>
  </div>



  <div className="container pb-5 text-right">
    <div className="row pb-5">
      <div className="col">
        <img src={lygWeb1} alt="Nylon website"/>
        <span className="work-caption px-3">Website Takeover on Nylon.com</span>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-md-7">
        <img src={lygBil2} alt=""/>
        <span className="work-caption px-3">Campaign billboard in NYC</span>
      </div>
      <div className="col-md-5">
        <img src={lygBil1} alt=""/>
        <span className="work-caption px-3">Campaign billboard in LA</span>
      </div>
    </div>
  </div>

  <div className="container pb-5 text-right ">
    <div className="row align-items-center">
      <div className="col-md-5">
        <img src={lyeTote} alt=""/>
        <p className="work-caption pb-3">Custom tote</p>
      </div>
      <div className="col-md-7">
        <img src={lyeCase} alt=""/>
        <p className="work-caption pb-3">iPhone Cases</p>
      </div>

    </div>
  </div>

  <div className="container pb-5 text-center">
    <h3>Campaign Images</h3>
    <div className="row">

      <div className="col">
        <img src={lygImg1} alt=""/>
      </div>
      <div className="col">
        <img src={lygImg2} alt=""/>
      </div>
      <div className="col">
        <img src={lygImg3} alt=""/>
      </div>
    </div>
  </div>



<Footer/>

</div> //all-enclosing div
)
export default LYGCampaign
