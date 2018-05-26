import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import denInvi from '../img/den-invite.jpg'
import denWin1 from '../img/den-win-1.jpg'
import denWin2 from '../img/den-win-2.jpg'
import denWin3 from '../img/den-win-3.jpg'
import denImg1 from '../img/den-img-1.jpg'
import denImg2 from '../img/den-img-2.jpg'
import denImg3 from '../img/den-img-3.jpg'
import denImg4 from '../img/den-img-4.jpg'
import denImg5 from '../img/den-img-5.jpg'
import denImg6 from '../img/den-img-6.jpg'


const DenimDark = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Event —"
    title=" Denim After Dark"
    description="To mark the launch of HUDSON's first Men's Skinny Line, we teamed up with Details Magazine and Atrium NYC to host a special invite-only event for industry insiders, influencer and a couple of the top Atrium customers. That included handcrafter Hudson Whiskey cocktails, a gift package containing a custom Hudson whiskey flask, wrapped in denim from the collection and engraved with the customers name at the event, along with Hudson whiskey ice rocks. A lucky winner was awarded a pair of passes to a Brooklyn nets game."
    category="Art Direction - Graphic Design — In-store Installations"
  />


  <div className="container padb5 text-right">
    <div className="row">
      <div className="col">
        <img src={denInvi} alt=""/>
        <p className="work-caption padtb3">Event Invitation</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={denWin1} alt=""/>

      </div>
      <div className="col">
        <img src={denWin2} alt=""/>
        <p className="work-caption padtb3">Window displays semi-transparent vinyl over glass application</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={denWin3} alt=""/>
        <p className="work-caption padtb3">Installed Window displays</p>
      </div>
    </div>
  </div>

  <div className="container padb5 text-right">
    <div className="row">
      <div className="col">
        <img src={denImg1} alt=""/>
      </div>
      <div className="col">
        <img src={denImg2} alt=""/>
      </div>
      <div className="col">
        <img src={denImg3} alt=""/>
      </div>

    <div className="w-100"></div>
      <div className="col">
        <img src={denImg4} alt=""/>
      </div>
      <div className="col">
        <img src={denImg5} alt=""/>
      </div>
      <div className="col">
        <img src={denImg6} alt=""/>
      </div>
    </div>
  </div>

<Footer/>

</div> //all-enclosing div
)
export default DenimDark
