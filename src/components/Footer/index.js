import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  footer {
    background-color: transparent;
    font-size: 0.8rem;
      &:a {
        background-color: #333;
      }
      &:a:link {
        background-color: #222;
      }
    @media screen and (min-width: 768px) {
      .col-l{
        text-align: left;
      }
      .col-r{
        text-align: right;
      }
    }
  }
`;


const Footer = () => (
  <div>
  <footer>
    <div className="container py-3 text-center">
      <div className="row">
        <div className="col-sm-4 col-l">
          <p>©2018 - Built with GatsbyJS</p>
        </div>
        <div className="col-sm-4">
          <p>
            <a className=" " href="mailto:hello@ivanchon.com" data-rel="external">hello@ivanchon.com</a>
          </p>
        </div>
        <div className="col-sm-4 col-r">
          <p>
            <a className="" href="http://www.instagram.com/ivan.chon" target="_blank">instagram</a> —
            {/*<a className="" href="http://www.behance.com/ivanchon" target="_blank"> be</a> —*/}
            <a className="" href="http://www.linkedin.com/in/ivanchon/" target="_blank"> linkedin</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  </div>
)

export default Footer
