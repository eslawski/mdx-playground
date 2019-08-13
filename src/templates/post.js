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


const Content = styled.article`
`

const GridWrapper = styled.div`
  padding: 0 1rem 2rem 1rem;
  max-width: ${props => props.theme.maxWidthImageSection};
  margin: auto;
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

const Post = (props) => {
  const {pageContext: {slug},
    data: {
      mdx: postNode,
      allFile: {edges: allFileEdges}
    },
  } = props;
  console.log(props)
  const post = postNode.frontmatter,
        imageMap = generateImageMap(allFileEdges)

  console.log(post.description)
  return (
    <Layout>
      <SEO title={post.title} description={post.description}/>
      <Hero title={post.title} date={post.date} image={post.image.childImageSharp} height={"50vw"}/>
      <ImageMap.Provider value={imageMap}>
        <Content>
          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>

          <GridWrapper>
            <AllImagesTitle>All Images</AllImagesTitle>
            <MediaQuery maxWidth={600}>
              {(matches) => {
                let columns = matches ? 3 : 4;
                return <ImageGrid imageNames={Object.keys(imageMap)} columns={columns}/>
              }}
            </MediaQuery>
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
            fluid(maxWidth: 1250, quality: 60) {
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
                srcSet
                sizes
             }
          }
        }
      }
    }
  }
`