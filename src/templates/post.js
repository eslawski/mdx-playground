import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from "../components/layout";
import {ImageMap } from "../components/image-map-context"
import Grid from "../components/grid"
import Hero from "../components/hero"


const Content = styled.article`
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem 1.0875rem 1.45rem;
`

function generateImageMap(edges) {
  const imageMap = {};
  edges.forEach(edge => {
    const { node: { childImageSharp } } = edge;

    imageMap[childImageSharp.lowRes.originalName] = childImageSharp

  })

  return imageMap
}

const Post = ({ pageContext: {slug},
                data: {
                  mdx: postNode,
                  allFile: {edges: allFileEdges}
                }
              }) => {
  const post = postNode.frontmatter,
        imageMap = generateImageMap(allFileEdges)
  console.log(post)

  return (
    <Layout>
      <Hero title={post.title} date={post.date} image={post.image.childImageSharp} height={"50vw"}/>
      <ImageMap.Provider value={imageMap}>
        <Content>
          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>
          <Grid imageNames={Object.keys(imageMap)}/>
        </Content>
      </ImageMap.Provider>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug} }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 65) {
                ...GatsbyImageSharpFluid
             }
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { regex: "$slug/images/" }}) {
      edges {
        node {
          relativePath
          relativeDirectory
          childImageSharp {
             id
             lowRes: fluid(maxWidth: 700, quality: 65) {
                ...GatsbyImageSharpFluid
                originalName
                presentationWidth
                presentationHeight
             }
             highRes: fluid(maxWidth: 1200, quality: 80) {
                srcSet
                sizes
                originalName
             }
          }
        }
      }
    }
  }
`