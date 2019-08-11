import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from "../components/Layout";
import {ImageMap } from "../components/contexts/image-map-context"
import ImageGrid from "../components/ImageGrid"
import Hero from "../components/Hero"


const Content = styled.article`
`

const GridWrapper = styled.div`
  padding-left: ${props => props.theme.blog.allImagesSectionPadding};
  padding-right: ${props => props.theme.blog.allImagesSectionPadding};
  
  @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
    padding-left: ${props => props.theme.blog.allImagesSectionPaddingSmall};
    padding-right: ${props => props.theme.blog.allImagesSectionPaddingSmall};
  }
`

const AllImagesTitle = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1rem;
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

  return (
    <Layout>
      <Hero title={post.title} date={post.date} image={post.image.childImageSharp} height={"50vw"}/>
      <ImageMap.Provider value={imageMap}>
        <Content>
          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>

          <GridWrapper>
            <AllImagesTitle>All Images</AllImagesTitle>
            <ImageGrid imageNames={Object.keys(imageMap)}/>
          </GridWrapper>
        </Content>
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
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
                ...GatsbyImageSharpFluid
             }
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: $imageDir }}, sort: { fields: [name], order: ASC }) {
      edges {
        node {
          name
          birthTime
          relativePath
          relativeDirectory
          childImageSharp {
             id
             lowRes: fluid(maxWidth: 700, quality: 70) {
                ...GatsbyImageSharpFluid
                originalName
                presentationWidth
                presentationHeight
             }
             highRes: fluid(maxWidth: 1000, quality: 80) {
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