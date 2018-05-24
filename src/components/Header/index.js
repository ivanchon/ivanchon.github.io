import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
    }}
  >
      <header className="site-header">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Ivan Chon</Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Work
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:hello@ivanchon.com"> Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  </div>
)

export default Header
