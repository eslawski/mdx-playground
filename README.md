# Personal Website

Welcome to my website. This website built from scratch using [gatsbyJS](https://www.gatsbyjs.org/)

This image heavy blog heavily utilizes the image processing features of Gatsby and takes advantage of `mdx` to create complex reusable components that can be used in markdown.

### Writing Blogs
1) Create a new directory under `/blogs`. This will also become the url slug.
2) Add an `/images` subdirectory. Place any images that will be used in the blog here. It is okay if they are unoptimized. Gatsby will handle this at build time. **Images are automatically sorted by the date of the photo taken (exif metadata).**
3) Copy a sample `index.mdx` file.
4) Complete all the required frontmatter fields.
5) Write the blog! Use the image components contained in `/components/blog` (see [examples](https://github.com/eslawski/personal-website/blob/master/docs/samples.txt))

### Developing locally
```sh
nvm use 10
npm install
gatsby develop
```

### Deploying
This app is currently deployed using [Netlify](https://www.netlify.com). Due to the shear amount images contained in this static site, I am unable to utilize the CI features Netlify offers. As a result, the site must be built and deployed locally. The Netlify CLI is pretty great though in that it will hash all the files, and only upload those it needs.

```sh
npm run deploy
```

### Gotchas
* Sometimes Gatsby gets confused. Sometimes a `gatsby clean` and rebuild can fix things. It essentially deletes the `.cache` and `/public` directories.
* I think reading the exif data sometimes generates a copy of the image which causes Gatsby to think it needs to reprocess the image. Worth more investigation.
* The image grids are organized by "Date Captured". This date is pulled from each image's metadata (exif). Some photos might not have this metadata. You can debug these dates by turning on the secret function in `Image.js`.
* Keep an eye on how reading this `exif` performs during the build process. I have noticed that it might alter the image in some way causing gatsby to think it needs to reprocess it.
* Another potential improvement that can be made to the build process is the use the `regex` for the imageDir. Might be quicker to just use `eq` instead. Be cafeful though, because I noticed some issues with using certain queries on Windows machines.

### Images

### Future Ideas
* Add categories to posts
* Improve the build performance in some way. Maybe look into alternative ways to host images instead of requiring Gatsby to process them. Netlify has features like this worth exploring.
* Forward/next posts
* Visual dividers on the index page seperated by year.
