import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectBlock from "../components/project-block"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProjectBlock blockTitle={"Lily Croskey Englert"} blockText ={"Hi! I’m a product designer and frontend developer based in New York. In December 2019 I graduated from Cornell University with a masters in Information Science. Before that, I was a design intern at IBM Watson in Boston bulding a design system for Watson Health." }>
    </ProjectBlock>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>placeholder</p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ProjectBlock></ProjectBlock>
  </Layout>
)

export default IndexPage
