import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectBlock from "../components/project-block"

const IndexPage = () => (
  <Layout>
    <SEO title="Lily Croskey Englert" />
    {/* <ProjectBlock blockTitle={"Lily Croskey Englert"} blockText ={"Hi! I’m a product designer and frontend developer based in New York. In December 2019 I graduated from Cornell University with a masters in Information Science. Before that, I was a design intern at IBM Watson in Boston bulding a design system for Watson Health."} blockVarient = {"simple-left"} >
    </ProjectBlock>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br> */}
    <div className = 'center'>
    <p className = 'placeholder-text'> <a>Hey, thanks for stopping by!</a> I'm currently updating my site and would love for you to see it when it's done. If you'd like a pdf version of my portfolio, shoot me an email at <a>lmc327@cornell.edu </a> — Lily</p>
    </div>
  </Layout>
)

export default IndexPage
