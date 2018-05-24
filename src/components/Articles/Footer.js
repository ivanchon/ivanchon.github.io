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
        <div className="col text-center padtb3">
          <Link className="btn-unde" to="/">
            <p className="work-caption">
              ⌃ Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
