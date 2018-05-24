import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
/*import ScrollReveal from 'scrollreveal'

window.sr = ScrollReveal()*/


import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ivan Chon"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />

    <div
      style={{
        margin: '0 auto',
        /*maxWidth: 1140,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,

        {
          this.props.location.pathname !== '/' ? '' : <Header />
        }

        */
      }}
    >
      {children()}
    </div>
    <Footer />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper
