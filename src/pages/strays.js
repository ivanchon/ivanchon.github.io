import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

import Footer from '../components/Articles/Footer'
import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

injectGlobal`
  .card img {
    margin-bottom: 0;
  }
`;

//img imports
import strImg1 from '../img/strays/str-hudson-barber-schmoozing.jpg'
import strImg2 from '../img/strays/str-hudson-barber.jpg'
import strImg3 from '../img/strays/str-hudson-gifted.jpg'
import strImg4 from '../img/strays/str-hudson-happy.jpg'
import strImg5 from '../img/strays/str-hudson-preview.jpg'
import strImg6 from '../img/strays/str-hudson-soiree.jpg'
import strImg7 from '../img/strays/str-hudson-soiree.jpg'

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

const Strays = () => (<div>

  <Hero
    company="HUDSON"
    titlei="Work —"
    title=" Strays"
    description="A collection of singles and one-off pieces from the archives"
    category=" "
  />

  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="card-columns">
          <div className="card">
            <img className="card-img img-fluid" src={strImg1} alt="Card image"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg2} alt="Card image"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg3} alt="Hudson Jeans - Chaos to denim"/>
            <img className="card-img img-fluid" src={strImg4} alt="Hudson Jeans - Chaos to denim"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg5} alt="Hudson Jeans - Chaos to denim"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg6} alt="Card image"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg7} alt="Card image"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg7} alt="Card image"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg1} alt="Card image"/>
          </div>
          <div className="card">
            <img className="card-img img-fluid" src={strImg1} alt="Card image"/>
          </div>

        </div>
      </div>
    </div>
  </div>


  <div className="container pb-5 text-center">
    <div className="row">
      <div className="col">
        <Link className="work-caption py-3" to="/">Back</Link>
      </div>
    </div>
  </div>


</div> //all-enclosing div
)
export default Strays
