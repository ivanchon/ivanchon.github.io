import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

//img imports
import fpmi from '../img/fp-mi.jpg'
import fpwi from '../img/fp-wi.jpg'

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
    titlei="Fall 14 —"
    title=" Press Preview"
    description="Invites and deliverables for Hudson's Fall '14 Press Preview. Xerox copies from lookbook imagery, over/underexposed to achieve contrast, then ripped and reassembled by hand to create new pattern from collage. Composite later scanned, retouched and prepared for digital delivery."
    category="Graphic Design — Photo Editing"
  />

  <div className="section hero-denim-darek">
    <div className="container padtb10">
      <div className="row">
        <div className="col-sm-8 ml-auto mr-auto text-center">
          <p className="work-proj-cat">HUDSON</p>
          <h1 className="h1lg">Fall 14
            <span>— Press Preview</span>
          </h1>
          <p>Invites and deliverables for Hudson's Fall '14 Press Preview. Xerox copies from lookbook imagery, over/underexposed to achieve contrast, then ripped and reassembled by hand to create new pattern from collage. Composite later scanned, retouched and prepared for digital delivery.</p>
          <p className="work-proj-cat">Graphic Design — Photo Editing</p>
        </div>
      </div>
    </div>
  </div>

  <div className="container padb5 text-right">
    <div className="row">
      <div className="col">
        <img src={fpmi} alt=""/>
        <p className="work-caption padtb3">Men's Invitation</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={fpwi} alt=""/>
        <p className="work-caption padtb3">Women's Invitation</p>
      </div>
    </div>
  </div>

  <div className="container padb5">
    <div className="row">
      <div className="col text-left padtb3">
        <Link class="btn-unde" to="/instacampaign/">
          <p className="work-caption">
            <span class="lnr lnr-arrow-left"></span>
            Previous Project
          </p>
        </Link>
      </div>
      <div className="col text-center padtb3">
        <Link class="btn-unde" to="/">
          <p className="work-caption">
            Home
          </p>
        </Link>
      </div>
      <div className="col text-right padtb3">
        <Link class="btn-unde" to="/instacampaign/">
          <p className="work-caption">
            <span class="lnr lnr-arrow-right"></span>
            Next Project
          </p>
        </Link>
      </div>
    </div>
  </div>
</div> //all-enclosing div
)
export default FallPreview
