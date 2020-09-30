import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>Welcome to your new Gatsby site with TypeScript.</p>
    <p>Now on to the next thing...</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/app/random-person/1">Go to app/random-person/1</Link>
    </p>
    <p>
      <Link to="/app/random-person/5">Go to app/random-person/5</Link>
    </p>
    <p>
      <Link to="/app/biz-listing-table">Go to app/biz-listing-table</Link>
    </p>
  </Layout>
)

export default IndexPage
