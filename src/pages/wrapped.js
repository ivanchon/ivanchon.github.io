import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import wrpGift from '../img/wrp-gift.jpg'
import wrpVic1 from '../img/wrp-vicious-1.jpg'
import wrpVic2 from '../img/wrp-vicious-2.jpg'
import wrpVic3 from '../img/wrp-vicious-3.jpg'
import wrpVan1 from '../img/wrp-vanish-1.jpg'
import wrpVan2 from '../img/wrp-vanish-2.jpg'
import wrpVan3 from '../img/wrp-vanish-3.jpg'


const Wrapped = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Brand —"
    title=" Wrap your present like a designer"
    description="Part of Elle's Holiday Gift Guide, this custom gift box was created using prints and fabrics from our Fall '14 'Chaos to Denim' Line. It features a red/black plaid wrap-around print with a hand-disrtressed black-waxed fabric overlay, adding a Hudson leather name tag as a finishing touch."
    category="Graphic Design — Photo Editing"
  />


  <div className="container pb-5">
    <div className="row">
      <div className="col">
        <img src={wrpGift} alt="wrapped gift"/>
        <p className="work-caption py-3 text-right">Hand-made gift package</p>
      </div>
    </div>
  </div>



  <div className="container pb-5 text-right">
    <div className="row">
      <div className="col">
        <img src={wrpVic1} alt=""/>
      </div>
      <div className="col">
        <img src={wrpVic2} alt=""/>
      </div>
      <div className="col">
        <img src={wrpVic3} alt=""/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p className="work-caption pb-3">Vicious Skinny in Gauge</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={wrpVan1} alt=""/>
      </div>
      <div className="col">
        <img src={wrpVan2} alt=""/>
      </div>
      <div className="col">
        <img src={wrpVan3} alt=""/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p className="work-caption pb-3">Vanish Chino in Cardinal Punk Plaid + Signature Jacket in Wasteland</p>
      </div>
    </div>
  </div>

<Footer/>

</div> //all-enclosing div
)
export default Wrapped
