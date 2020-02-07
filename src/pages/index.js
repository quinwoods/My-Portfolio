import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>An Unabriged Collection of Work</h1>
    <p>Explore the site to learn more!</p>
    <Link to="/page-2/">Git hub test!</Link>
  </Layout>
)

export default IndexPage
