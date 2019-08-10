import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import CardList from "../components/CardList"
import Card from "../components/Card"
import styled from 'styled-components'


const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
`

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props
    const posts = data.allMdx.edges

    console.log(posts)

    return (
      <Layout>
        <Wrapper>
          <CardList>
            {posts.map(({ node: post }) => (
              <Card
                key={post.id}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
                image={post.frontmatter.image.childImageSharp}
              />
            ))}
          </CardList>
        </Wrapper>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
