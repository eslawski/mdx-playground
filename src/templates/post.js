import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/layout";


const Content = styled.article`
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  margin-top: 4rem;
`

const Post = ({ pageContext: { slug }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter

  return (
    <Layout>
      <Content>
        <Title>Title: "{post.title}"</Title>
        <PostContent>
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </PostContent>
      </Content>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
      }
    }
  }
`