import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

import Footer from '../components/Articles/Footer'
import Hero from '../components/Articles/Hero.js'

//img imports
import syHero from '../img/syn-email-hero.jpg'
import syBefo from '../img/syn-email-before.gif'
import sySyna from '../img/syn-artemail-01.jpg'
import sySyns from '../img/syn-synemail-01.jpg'
import syEmai from '../img/syn-email-full.jpg'
import syResu from '../img/syn-email-results2.png'


const Wiredrive = () => (<div>

  <Hero
    company="Artlist Paris"
    titlei="Web —"
    title=" Arlist Email"
    description="Having recently completed a website overhaul, and on the verge of launching their image licensing syndication site, ArtList needed to re-do their email communications as well, unifying all communication assets and adapting to new device formats."
    category="Art Direction — Graphic Design — Web Development"
  />


  <Container className="pb-5 text-center">
    <Row>
      <div className="col-10 col-lg-10 mx-auto">
        <img src={syHero} alt="New Emails"/>
      </div>
    </Row>
  </Container>

    <section className="bg-light">
    <Container className="py-5 text-left">
      <Row className="d-flex align-items-center">
        <Col className="col-12 col-md-6 col-lg-5 mx-auto">
            <h3>Starting Point</h3>
            <p>The launching point for this project was the single existing template, wrote by hand in HTML, which had to be adapted every time a communication needed to go out, slowing down the process and leading to several problems.
            </p>
            <p>Issues to address:</p>
            <ul>
              <li>All email content is image-based, hence having a higher chance of landing directly in the spam box</li>
              <li>There was no text-version being generated</li>
              <li>The template was not responsive</li>
              <li>Images not retina-ready</li>
              <li>No clear CTA defined in message</li>
            </ul>
            {/*<a href="http://www.google.com/" target="_blank"><p>see example ></p></a>*/}
          </Col>
          <Col className="col-12 col-md-6 col-lg-5 mx-auto ">
            <img src={syBefo} alt="Event Invitation Social"/>
        </Col>
      </Row>
    </Container>
    </section>

    <Container className="py-5 text-center align-items-center">
      <Row>
        <Col className="col-10 col-lg-6 mx-auto">
            <h3>Two brands, one messge</h3>
            <p>In adittion to creating a new customizable template for ArtList, a separate one needed to be created to their Syndication site, bearing their logo and distinct content, but retaining the brand's look & feel.</p>
          </Col>
        </Row>
      <Row>
        <Col className="col-12 col-lg-6 mx-auto">
            <img src={sySyna} alt="Email Template Artlist"/>
          </Col>
          <Col className="col-12 col-lg-6 mx-auto">
            <img src={sySyns} alt="Email Template Syndication"/>
        </Col>
      </Row>
    </Container>

  <Container className=" py-5 text-center align-items-center">
    <Row>
      <Col className="col-10 col-lg-8 mx-auto">
          <h3>New Template</h3>
          <p>ArtList handles their email via Mailjet, and having previously worked with MJML for Wiredrive, the choice was a no-brainer. A master template was created with image 'modules' that can be swapped out and re-arranged, creating different layouts for each newsletter and allowing images to be easily dropped into them.</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 col-md-6 mx-auto pt-4">
          <img src={syEmai} alt="Event Invitation Social"/>
          <a href="http://6xru.mjt.lu/nl2/6xru/l20p2.html" target="_blank"><p>see it live →</p></a>
      </Col>
    </Row>
  </Container>


  <section className="bg-light">
  <Container className="pt-5 text-left">
    <Row className="d-flex align-items-center">
      <Col className="col-12 col-md-6 col-lg-5 mx-auto order-2 order-md-1">
        <img src={syResu} alt="Email results" style={{marginBottom: '0px'}}/>
      </Col>
      <Col className="col-12 col-md-6 col-lg-5 mx-auto order-1 order-md-2">
          <h3>Results</h3>
          <p>Upon launching the updated templates, we saw an immediate boost in overall click-thru  delivery rates improved. The unsubscribe numbers also went down.</p>
          <p>Improvements seen:</p>
          <ul>
            <li>Delivery results have increased</li>
            <li>Unsubscribe rates have reduced </li>
            <li>Better rendering due to image and layout optimizations</li>
            <li>Smaller overall email size</li>
            <li>Increased accesability/readability</li>
          </ul>
          {/*<a href="http://www.google.com/" target="_blank"><p>see example ></p></a>*/}
        </Col>

    </Row>
  </Container>
  </section>


  <Container className=" py-5 text-center align-items-center">
    <Row>
      <Col className="col-10 col-lg-8 mx-auto">
          <h3>Next Steps</h3>
          <p>Given that the majority of our list are apple mail users (particularly on iPhone), we have the opportunity to further enhance user experience and add interactivity to our newsletters. In the coming weeks we're going to start experimenting with in-email slideshows, responsive image swaps, and custom fonts.</p>
        </Col>
      </Row>

  </Container>






  {/*}<Container className=" py-5 text-center align-items-center">
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
  </Container>*/}




<Footer/>

</div> //all-enclosing div
)
export default Wiredrive
