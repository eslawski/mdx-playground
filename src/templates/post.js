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

const GridWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

const AllImagesTitle = styled.h2`
  margin: 1rem;
  font-size: 2em;
  font-weight: bold;
`

const PostContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem 1.0875rem 1.45rem;
  & > p {
    font-size: ${props => props.theme.blog.fontSize};
    margin-bottom: ${props => props.theme.blog.spacing};
    
    @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: ${props => props.theme.blog.fontSizeSmall};
    }
  }
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

          <AllImagesTitle>All Images</AllImagesTitle>
          <GridWrapper>
            <Grid imageNames={Object.keys(imageMap)}/>
          </GridWrapper>
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
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 90) {
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