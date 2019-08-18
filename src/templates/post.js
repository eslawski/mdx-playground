import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from "../components/Layout";
import {ImageMap } from "../components/contexts/image-map-context"
import Hero from "../components/Hero"
import SEO from "../components/Seo"
import AllImages from "../components/AllImages"


const PostContent = styled.div`
  max-width: ${props => props.theme.maxWidths.post};
  margin: 0 auto;
  padding: 1rem 1.0875rem 1.45rem;
`

function generateImageMap(edges) {
  const imageMap = {};
  edges.forEach(edge => {
    const { node: { childImageSharp, fields: {captureDate} } } = edge;
    imageMap[childImageSharp.lowRes.originalName] = {captureDate: captureDate, ...childImageSharp}
  })

  return imageMap
}

const Post = ({pageContext: {slug},
                data: {
                  mdx: postNode,
                  allFile: {edges: allFileEdges}
                },
              }) => {

  const post = postNode.frontmatter,
        imageMap = generateImageMap(allFileEdges)

  return (
    <Layout>
      <SEO title={post.title} description={post.description}/>
      <Hero title={post.title} date={post.date} image={post.image.childImageSharp}/>
      <ImageMap.Provider value={imageMap}>
        <PostContent>
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </PostContent>
        <AllImages imageNames={Object.keys(imageMap)}/>
      </ImageMap.Provider>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query postBySlug($slug: String!, $imageDir: String!) {
    mdx(fields: { slug: { eq: $slug} }) {
      body
      excerpt
      frontmatter {
        title
        description
        date(formatString: "MM/DD/YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1700, quality: 70) {
                ...GatsbyImageSharpFluid
             }
          }
        }
      }
    }
    allFile(filter: { relativePath: { regex: $imageDir }}, sort: { fields: [fields___captureDate], order: ASC }) {
      edges {
        node {
          name
          birthTime
          relativePath
          relativeDirectory
          fields {
            captureDate
          }
          childImageSharp {
             id
             lowRes: fluid(maxWidth: 350, quality: 70) {
                ...GatsbyImageSharpFluid
                originalName
                presentationWidth
                presentationHeight
             }
             highRes: fluid(maxWidth: 1000, quality: 60) {
                ...GatsbyImageSharpFluid
             }
          }
        }
      }
    }
  }
`