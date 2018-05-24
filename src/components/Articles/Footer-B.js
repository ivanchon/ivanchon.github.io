import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: 'transparent',
      padding: '8em 0',
      textTransform: 'uppercase',
    }}
  >
    <div className="container ">
      <div className="row">
        <div className="col text-left padtb3">
          <Link class="btn-unde" to="/instacampaign/">
            <p className="work-caption">
              <span class="lnr lnr-arrow-left"></span>
              ← Previous
            </p>
          </Link>
        </div>
        <div className="col text-center padtb3">
          <Link class="btn-unde" to="/">
            <p className="work-caption">
              ⌃ Home
            </p>
          </Link>
        </div>
        <div className="col text-right padtb3">
          <Link class="btn-unde" to="/instacampaign/">
            <p className="work-caption">
              <span class="lnr lnr-arrow-right"></span>
              Next →
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
