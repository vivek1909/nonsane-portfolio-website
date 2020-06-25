import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "../images/bgImage.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <p className="hero-first-name">ARYAN</p>
      <hr />
      <p className="hero-last-name">bhatia</p>
      <p className="hero-skill">Wanderlust photographer</p>
      <div className="hero-btn">
        <Link to="/work" className="link">
          EXPLORE
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
