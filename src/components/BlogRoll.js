import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'

class BlogRoll extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark

        return (
            <div className="columns is-multiline">
                {posts &&
                posts.map(({node: post}) => (
                    <div className="column is-6" key={post.id}>
                        <div className="card article-preview">
                            <header className="card-header">
                                <Link
                                    className="card-header-title"
                                    to={post.fields.slug}
                                >
                                    {post.frontmatter.title}
                                </Link>
                                <small className="card-header-title has-text-weight-light">{post.frontmatter.date}</small>
                            </header>
                            <div className="card-content">
                                    <p>{post.excerpt}</p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <Link to={post.fields.slug}>
                                        Читать далее →
                                    </Link>
                                </p>
                            </footer>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <BlogRoll data={data} count={count}/>}
    />
)
