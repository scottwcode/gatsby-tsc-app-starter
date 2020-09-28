import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/app/random-person/1">Go to app/random-person/1</Link>
    </p>
    <p>
      <Link to="/app/random-person/5">Go to app/random-person/5</Link>
    </p>
  </Layout>
)

export default IndexPage
