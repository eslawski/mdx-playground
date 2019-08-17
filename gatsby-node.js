const { createFilePath } = require(`gatsby-source-filesystem`)
const readExif = require('read-exif');



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
    createNodeField({ node, name: 'slug', value: slug })
  } else if (node.internal.type === 'File') {
    const imageTypes = [".jpg", ".jpeg", ".png"]
    if (imageTypes.includes(node.ext.toLowerCase())) {
      readExif(node.absolutePath).then(response => {
        const exif = response.Exif;
        if (exif) {
          createNodeField({
            node,
            name: "captureDate",
            value: exif['36867'] // https://www.exiv2.org/tags.html
          });
        } else {
          console.log("Could not determine timestamp for: " + node.absolutePath)
        }

      })
    }
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

    // Very finky, but used in regex to match on relativePath. Helped to play
    // around with the __graphql editor locally. Noticed a difference on Windows
    // where the relativeDirectory was escaped funny. Hence using relativePath instead.
    const imageDirRegex = n.fields.slug.concat("images").substring(1).concat("/")

    createPage({
      path: n.fields.slug,
      component: postTemplate,
      context: {
        slug: n.fields.slug,
        imageDir: imageDirRegex,
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