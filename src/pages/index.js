import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import CardList from "../components/CardList"
import Card from "../components/Card"
import styled from 'styled-components'
import SEO from "../components/Seo"


const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
`

const PageHeading = styled.h1`
  font-size: 5em;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 2rem;
  border-bottom: 2px solid black;
`

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props
    const posts = data.allMdx.edges

    return (
      <Layout>
        <SEO title={"All Blogs Test"}/>
        <Wrapper>
          <PageHeading>Blogs</PageHeading>
          <CardList>
            {posts.map(({ node: post }) => (
              <Card
                key={post.id}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
                image={post.frontmatter.image.childImageSharp}
                favorite={post.frontmatter.favorite}
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
            favorite
            description
            image {
              childImageSharp {
                fluid(maxWidth: 350) {
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
