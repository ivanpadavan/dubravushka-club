import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TopSlide from "../components/TopSlide";
import {slidePropTypes} from "./index-page";
import BlogRoll from "../components/BlogRoll";

export const NewsPageTemplate = ({ slide, content, contentComponent }) => {
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

            <section className="section">
                <div className="container">
                    <div className="content">
                        <BlogRoll />
                    </div>
                </div>
            </section>
        </div>
    )
}

NewsPageTemplate.propTypes = {
    slide: slidePropTypes,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const NewsPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <NewsPageTemplate
                contentComponent={HTMLContent}
                slide={post.frontmatter.slide}
                content={post.html}
            />
        </Layout>
    )
}

NewsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default NewsPage

export const NewsPageQuery = graphql`
    query NewsPage($id: String!) {
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
