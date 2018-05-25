import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

/*import ScrollReveal from 'scrollreveal'*/

/*img imports*/

import gridart from '../img/grid-artemail.jpg'
import gridalp from '../img/grid-ecf.gif'
import gridvrm from '../img/grid-vrmixer2.jpg'
import gridwrd from '../img/grid-wdsite2.jpg'
import gridfpw from '../img/grid-fapw.jpg'
import gridlyg from '../img/grid-lyg1.jpg'
import gridmpw from '../img/grid-mpw.jpg'
import griddnm from '../img/grid-denim.jpg'
import gridamr from '../img/grid-lye.jpg'
import gridins from '../img/grid-insta2.jpg'
import gridprn from '../img/grid-text.jpg'
import gridwrp from '../img/grid-wrapped.jpg'


const Container = styled.div`
  margin: 3rem auto;
`;

const UserWrapper = styled.div`
  margin 15px 0;
  &:first-child {
    margin-bottom: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:a:link {
    text-decoration: none;
  }
`;

const Image = styled.img`
  margin: 0;
  transition: transform .4s;

  &:hover {
    transform: scale(1.005);

  }
`;

const Description = styled.div`
  padding: 12px;


`;

const Title = styled.h4`
  font-weight: 500;
  color: #222;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: #222;
`;


const User = props => (
  <UserWrapper className={props.class}>
  <Link to={props.link}>
    <Image src={props.image} alt="" />
    <Description>
      <Title>{props.title}</Title>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </Link>
  </UserWrapper>
);

const IndexPage = ({}) => (
<div>
    <div className="container hero-home" id="work">
      <div className="row">
        <div className="col-md-9">
          <h1 className="hero-h1"><span>Ivan Chon</span> — is a Paris-based digital designer and front-end developer from Los Angeles. Currently working at Artlist Paris.</h1>
          <p>I help create brand experiencies through digital and print, I value white space and sharp type. I'm currently taking on freelance projects. Want to work together? <a className="" href="mailto:hello@ivanchon.com">Get in touch</a>
          </p>
        </div>
      </div>
    </div>


  <Container className="container home-grid" id="work">
    <div className="row">
      <User
        class="col-md-6 home-grid-block"
        image={gridalp}
        title="Artlist Paris - Emmanuel Caurel"
        excerpt="Motion Graphics"
        link="/artlist/"
      />
      <User
        class="col-md-5 ml-auto home-grid-block"
        image={gridart}
        title="Artlist Email"
        excerpt="Web Design"
        link="/artlist-email/"
      />
    </div>

      <div className="row">
        <User
          class="col-md-5 mx-auto home-grid-block"
          image={gridvrm}
          title="VR Mixer"
          excerpt="Event"
          link="/vr-mixer/"
        />
        <User
          class="col-md-6 mx-auto home-grid-block"
          image={gridwrd}
          title="Wiredrive"
          excerpt="Web Design"
          link="/wiredrive/"
        />

      </div>
      <div className="row">
        <User
          class="col-md-7 home-grid-block"
          image={gridfpw}
          title="Fall Preview"
          excerpt="Event"
          link="/fall-preview/"
        />
        <User
          class="col-md-4 ml-auto home-grid-block"
          image={gridlyg}
          title="#LETYOURSELFGO"
          excerpt="Campaign"
          link="/letyourselfgo/"
        />
      </div>
      <div className="row">
        <User
          class="col-md-5 home-grid-block"
          image={gridmpw}
          title="Spring Preview"
          excerpt="Event"
          link="/spring-preview/"
        />
        <User
          class="col-md-6 ml-auto home-grid-block"
          image={griddnm}
          title="Denim After Dark"
          excerpt="Event"
          link="/denim-dark/"
        />
      </div>
      <div className="row">
        <User
            class="col-md-6 mr-auto home-grid-block"
            image={gridins}
            title="Instacampaign"
            excerpt="Event"
            link="/instacampaign/"
          />
        <User
          class="col-md-5 mr-auto home-grid-block"
          image={gridamr}
          title="Let Yourself Go"
          excerpt="Event"
          link="/lyg-event/"
        />
      </div>
      <div className="row">
        <User
          class="col-md-5 ml-auto home-grid-block"
          image={gridwrp}
          title="Wrapped in Denim"
          excerpt="Brand / Packaging"
          link="/wrapped/"
        />
        <User
            class="col-md-6 ml-auto home-grid-block"
            image={gridprn}
            title="Prints + Patterns"
            excerpt="Event"
            link="/prints/"
          />

      </div>
  </Container>

</div>
)

/*window.sr.reveal('.row')*/
export default IndexPage
