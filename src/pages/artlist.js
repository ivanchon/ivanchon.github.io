import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

import Footer from '../components/Articles/Footer'
import { HeroWrapper, Company, Title, TitleI, Description, Category } from '../components/Articles/Hero.js';

injectGlobal`
  .clrf {
    margin-top: 0.5em;
    margin-bottom: 0px;
  }
`;


//img imports
import alpVid1 from '../img/alp-loewe-web.mp4'
import alpVid2 from '../img/alp-carven-web.mp4'
import alpVid3 from '../img/alp-chanel-web.mp4'
import alpVid4 from '../img/alp-shu-web.mp4'
import alpVid5 from '../img/alp-giamba-web.mp4'

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

const VidBlock = props => (
  <div className="container text-center py-5">
    <div className="row align-items-center">
      <div className="col-md-7 ml-sm-auto mr-sm-auto bg-carven">
          <video autoPlay loop muted playsInline width="100%" className="video">
            <source src={props.video} type="video/mp4"/>
          </video>
      </div>
      <div className="col-md-3 ml-sm-auto mr-sm-auto">
        <h3 className="clrf">{props.title}</h3>
        <p>{props.description}<br/>{props.subdesc}</p>
      </div>
    </div>
  </div>
);



const Artlist = () => (<div>

  <Hero
    company="Artlist Paris"
    titlei="Video —"
    title=" Emmanuel Caurel"
    description="Emmanuel Caurel is a Sound Designer from Paris, France. This series of video loops were created in html + javascript by using filters over the images, then passed into Adobe After Effects and Final Cut Pro for editing."
    category="Motion Graphics — Video Editing"
  />


  <VidBlock
    video={alpVid1}
    title="Loewe"
    description="Spring 2016 Runway Show"
    subdesc="After Party"
  />

  <VidBlock
    video={alpVid2}
    title="Carven"
    description="Spring 2016 Campaign Launch"
    subdesc="After Party"
  />

  <VidBlock
    video={alpVid3}
    title="Chanel"
    description="Fall 2019 Runway Show"
    subdesc="After Party"
  />

  <VidBlock
    video={alpVid4}
    title="Shu Uemura"
    description="Spring 2017 Collection Launch"
    subdesc="After Party"
  />

  <VidBlock
    video={alpVid5}
    title="Giambattista Valli"
    description="Collaboration Launch Party"
    subdesc="2015"
  />

<Footer/>

</div> //all-enclosing div
)
export default Artlist
