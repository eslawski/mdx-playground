const { createFilePath } = require(`gatsby-source-filesystem`)


// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: `blogs` })
    console.log("Path created: " + slug)
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.js')
  // const categoryTemplate = require.resolve('./src/templates/category.js')
  // TODO must add categories back into the

  const result = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `)
  )

  const posts = result.data.allMdx.nodes

  posts.forEach((n, index) => {
    const next = index === 0 ? null : posts[index - 1]
    const prev = index === posts.length - 1 ? null : posts[index + 1]

    createPage({
      path: n.fields.slug,
      component: postTemplate,
      context: {
        slug: n.fields.slug,
        imageDir: n.fields.slug.concat("images").substring(1),
        prev,
        next,
      },
    })
  })

  // Example: https://minimal-blog.lekoarts.de/categories/
  // const categorySet = new Set()
  //
  // _.each(posts, n => {
  //   if (_.get(n, 'frontmatter.categories')) {
  //     n.frontmatter.categories.forEach(cat => {
  //       categorySet.add(cat)
  //     })
  //   }
  // })
  //
  // const categories = Array.from(categorySet)
  //
  // categories.forEach(category => {
  //   createPage({
  //     path: `/categories/${_.kebabCase(category)}`,
  //     component: categoryTemplate,
  //     context: {
  //       category,
  //     },
  //   })
  // })
}