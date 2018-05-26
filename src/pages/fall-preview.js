import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import fpmi from '../img/fp-mi.jpg'
import fpwi from '../img/fp-wi.jpg'

const FallPreview = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Fall 14 —"
    title=" Press Preview"
    description="Invites and deliverables for Hudson's Fall '14 Press Preview. Xerox copies from lookbook imagery, over/underexposed to achieve contrast, then ripped and reassembled by hand to create new pattern from collage. Composite later scanned, retouched and prepared for digital delivery."
    category="Graphic Design — Photo Editing"
  />


  <div className="container pb-5 text-right">
    <div className="row">
      <div className="col">
        <img src={fpmi} alt="Men's Invitation" className="fpi-box"/>
        <p className="work-caption pb-3">Men's Invitation</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={fpwi} alt="Women's Invitation" className="fpi-box"/>
        <p className="work-caption pb-3">Women's Invitation</p>
      </div>
    </div>
  </div>

<Footer/>

</div> //all-enclosing div
)
export default FallPreview
