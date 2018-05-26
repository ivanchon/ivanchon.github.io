import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'


import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import vrHero from '../img/vr-invitation.jpg'
import vrDein from '../img/vr-invite-device-01.jpg'
import vrDeem from '../img/vr-invite-email-01.jpg'


import vrBo01 from '../img/vr-booth-01.gif'
import vrBo02 from '../img/vr-booth-02.gif'
import vrBo03 from '../img/vr-booth-03.gif'
import vrBo04 from '../img/vr-booth-04.gif'
import vrBo05 from '../img/vr-booth-05.gif'

import vrFx01 from '../img/vr-foxtales-ui-01.jpg'
import vrFx02 from '../img/vr-foxtales-ui-03.jpg'
import vrFx03 from '../img/vr-foxtales-ui-03.jpg'

import vrSnap from '../img/vr-snap-filters.png'
import vrDisp from '../img/vr-display.jpg'


const items = [
  {
    src: '/static/vr-foxtales-ui-01.jpg',
    altText: 'Slide 1',
    caption: ' ',
    header: ' '
  },
  {
    src:'/static/vr-foxtales-ui-02.jpg',
    altText: 'Slide 2',
    caption: ' ',
    header: ' '
  },
  {
    src: '/static/vr-foxtales-ui-03.jpg',
    altText: 'Slide 3',
    caption: ' ',
    header: ' '
  }
];



//img imports
import lyeInvi from '../img/lye-invite.jpg'
import lyeFly1 from '../img/lye-flyer-1.jpg'
import lyeFly2 from '../img/lye-flyer-2.jpg'
import lyeCase from '../img/lye-case.jpg'
import lyeTote from '../img/lye-tote.jpg'
import lyeImg1 from '../img/lye-img-1.jpg'
import lyeImg2 from '../img/lye-img-2.jpg'
import lyeImg3 from '../img/lye-img-3.jpg'
import lyeImg4 from '../img/lye-img-4.jpg'
import lyeImg5 from '../img/lye-img-5.jpg'
import lyeImg6 from '../img/lye-img-6.jpg'


const Wiredrive = () => (<div>

  <Hero
    company="Wiredrive"
    titlei="Event —"
    title=" VR Mixer"
    description="To launch the VRLA expo and present upcoming app features, Wiredrive hosted a mixer in their LA headquarters. Guest were treated to special cocktails, gifts, a custom interactive photobooth, product previews, and insights into how new technologies are shifting the digital landscape."
    category="Art Direction — Graphic Design — Web Development"
  />


  <Container className="pt-5 text-center">
    <Row>
      <div className="col-10 col-lg-6 mx-auto">
        <img src={vrHero} alt="Event Invitation"/>
      </div>
    </Row>
      <Row className="pt-5">
        <Col lg="8" className="mx-auto">
          <p>Given that VR is one of the newest technologies and it …. we decided to do a 180 on the concept and instead play with the idea of ‘retrofuturisim’ our image of the future during the inception of computers in the 1980’s.</p>
        </Col>
      </Row>
  </Container>


    <Container className="pb-5 text-center align-items-center">
      <Row>
        <Col className="col-10 col-lg-6 mx-auto">
            <img src={vrDeem} alt="Event Invitation Email"/>
          </Col>
          <Col className="col-10 col-lg-6 mx-auto">
            <img src={vrDein} alt="Event Invitation Social"/>
        </Col>
      </Row>
    </Container>


  <section className="bg-light">
  <Container className=" py-5 text-center align-items-center">
    <Row>
      <Col className="col-10 col-lg-6 mx-auto">
          <h3>Snapchat Filters</h3>
          <p>Filters were a new technology at the time, so we decided to take advantage of them to further align with the theme of the event. Three custom geolocation filters were created for snapchat in order to further enhance the event experience and incentivize guests to share their favorite moments from the night.</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 mx-auto pt-4">
          <img src={vrSnap} alt="Event Invitation Social"/>
      </Col>
    </Row>
  </Container>
  </section>

  <Container className=" py-5 text-center align-items-center">
    <Row>
      <Col className="col-10 col-lg-6 mx-auto">
          <h3>Custom Photobooth</h3>
          <p>A custom photohooth was themed out for the event, taking either single shots, a sequence, or video, and offering direct sharing to social media platforms.</p>
        </Col>
      </Row>
      <Row>
        <Col className="col mx-auto">
          <UncontrolledCarousel items={items} />
      </Col>
    </Row>
  </Container>


  <Container className="container pb-5 text-center">
    <h3>Photobooth Images</h3>
    <Row>
      <Col>
        <img src={vrBo03} alt="Photobooth images"/>
      </Col>
      <Col>
        <img src={vrBo02} alt="Photobooth images"/>
      </Col>
      <Col>
        <img src={vrBo05} alt="Photobooth images"/>
      </Col>
    </Row>
  </Container>

  <Container className=" py-5 text-center align-items-center">
    <Row>
      <Col className="col-10 col-lg-8 mx-auto pb-3">
          <h3>Interactive Displays</h3>
          <p>A javascript-based installation was placed in screens around the venue to foster technology interaction. The installation takes the live feed from a camera mounted above the display, separates the RBG channels, and places a delay on each channel, giving viewers a delayed effect and the sensation warped time.</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 mx-auto">
          <img src={vrDisp} alt="Interactive Display"/>
      </Col>
    </Row>
  </Container>


{/*}
  <Container className="container pb-5 text-center">
    <h3>Event Images</h3>
    <Row>
      <Col>
        <img src={lyeImg1} alt=""/>
      </Col>
      <Col>
        <img src={lyeImg2} alt=""/>
      </Col>
      <Col>
        <img src={lyeImg3} alt=""/>
      </Col>
      <div className="w-100"></div>
      <Col>
        <img src={lyeImg1} alt=""/>
      </Col>
      <Col>
        <img src={lyeImg2} alt=""/>
      </Col>
      <Col>
        <img src={lyeImg3} alt=""/>
      </Col>
    </Row>
  </Container>
  */}



<Footer/>

</div> //all-enclosing div
)
export default Wiredrive
