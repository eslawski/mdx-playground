import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from "../components/Layout";
import {ImageMap } from "../components/contexts/image-map-context"
import ImageGrid from "../components/ImageGrid"
import Hero from "../components/Hero"
import SEO from "../components/Seo"
import MediaQuery from 'react-responsive';
import { ThemeConsumer } from 'styled-components'
import {rhythm, scale} from "../styles/typography"


const Content = styled.article`
`

const GridWrapper = styled.div`
  padding: 0 1rem 2rem 1rem;
  max-width: ${props => props.theme.maxWidthImageSection};
  margin: auto;
`

const AllImagesTitle = styled.h2`
  ${scale(.8)}
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 2px solid black;
`

const PostContent = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem 1.0875rem 1.45rem;
  
  & > p {
    ${scale(.3)}
      @media screen and (max-width: ${props => props.theme.breakpoints.phone}) {
      ${scale(.01)}
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
        <Content>
          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>

          <GridWrapper>
            <AllImagesTitle>All Images</AllImagesTitle>
            <ThemeConsumer>
              {(theme) => {
                  return <MediaQuery maxWidth={theme.breakpoints.phone}>
                    {(matches) => {
                      let columns = matches ? 3 : 4;
                      return <ImageGrid imageNames={Object.keys(imageMap)} columns={columns}/>
                    }}
                  </MediaQuery>
                }
              }
            </ThemeConsumer>
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
        description
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 60) {
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