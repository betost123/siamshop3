import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import OpeningHours from "../components/OpeningHours"
import Recipes from "../components/Recipes"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Recipes heading="Våra favoritrecept" />
      <About />
      <OpeningHours />
    </Layout>
  )
}

export default IndexPage
