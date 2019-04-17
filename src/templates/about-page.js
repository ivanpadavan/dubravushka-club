import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TopSlide from "../components/TopSlide";
import {slidePropTypes} from "./index-page";

export const AboutPageTemplate = ({ slide, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      <div>
        <TopSlide { ...slide }></TopSlide>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
                  <PageContent className="content" content={content} />
            </div>
          </div>
        </section>
      </div>
  )
}

AboutPageTemplate.propTypes = {
  slide: slidePropTypes,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        slide={post.frontmatter.slide}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slide {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          subheading
          imageHeight
        }
      }
    }
  }
`
