import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
      textTransform: 'uppercase',
    }}
  >
      <header className="site-header">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Ivan Chon</Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Work
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              /*<li className="nav-item">
                <Link className="nav-link" to="#">Strays</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
              </li>*/
            </ul>
          </div>
        </nav>
      </header>
  </div>
)

export default Header
