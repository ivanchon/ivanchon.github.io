import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import prtWast from '../img/prt-wasteland.jpg'
import prtCard from '../img/prt-cardinal.jpg'
import prtStre from '../img/prt-street.jpg'
import prtAnim from '../img/prt-animal.jpg'



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
