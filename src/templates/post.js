import React from 'react'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from "../components/layout";
import {ImageMap } from "../components/image-map-context"


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
    const { node } = edge;

    imageMap[node.lowRes.originalName] = node;

  })

  return imageMap
}

const Post = ({
                pageContext: {slug},
                data: {
                  mdx: postNode,
                  allImageSharp: {edges: imageSharpEdges}
                }
              }) => {
  const post = postNode.frontmatter

  return (
    <Layout>
      <ImageMap.Provider value={generateImageMap(imageSharpEdges)}>
        <Content>
          <Title>Title: "{post.title}"</Title>
          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>
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
    allImageSharp {
     edges {
         node {
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
`