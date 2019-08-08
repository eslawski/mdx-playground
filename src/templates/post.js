import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from "../components/layout";
import {ImageMap } from "../components/image-map-context"
import Grid from "../components/grid"


const Content = styled.article`
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  margin-top: 4rem;
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

  return (
    <Layout>
      <ImageMap.Provider value={imageMap}>
        <Content>
          <Title>Title: "{post.title}"</Title>
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