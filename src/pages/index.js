import React from 'react'

import '../statics/style.css'
import ImagePoster from '../images/cover.jpg'

import SEO from '../components/seo'
import Card from '../components/card'
import Layout from '../components/layout'
import VideoCover from '../components/videoCover'



const IndexPage = () => (
  <Layout background={ImagePoster}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <VideoCover/>
    <Card/>
  </Layout>
)

export default IndexPage
