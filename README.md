# Personal Website

Welcome to my website. This website built from scratch using [gatsbyJS](https://www.gatsbyjs.org/)

This image heavy blog heavily utilizes the image processing features of Gatsby and takes advantage of `mdx` to create complex reusable components that can be used in markdown.

### Writing Blogs
1) Create a new directory under `/blogs`. This will also become the url slug.
2) Add an `/images` subdirectory. Place any images that will be used in the blog here. It is okay if they are unoptimized. Gatsby will handle this at build time. **Images are automatically sorted by the date of the photo taken (exif metadata).** If photos were taken with an iPhone they might be in heic format. You can convert them on a Mac using the "Export" option. Thankfully the metadata is preserved too.
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
Looks like Gatsby might also be able be pull images from external locations. This might help with the repo size, but probably won't help with build performance. See https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/

```sh
npm run deploy
```

### Gotchas
* Sometimes Gatsby gets confused. Sometimes a `gatsby clean` and rebuild can fix things. It essentially deletes the `.cache` and `/public` directories.
* Sometimes the processing of thumbnails will fail due to "Segmentation Fault". Usually a clean and retry will fix this.
* Sometimes you might see "captureDate is null" error. Usually you just need to restart the server. I think it gets confused when you add/modify images with hot reloading.
* This blog doesn't like heic photos taken by iPhones. You can convert them to a proper jpeg by using Mac's "export" option.
* Sometimes the aspect ratio for portrait images is incorrect, leading to weird cropping and a bad looking grid. For whatever reason portrait images when placed in Webstorm can remain landscape. You can fix this by just rotating the images a few times on Mac.
* Sometimes you can get some weird "frontmatter" errors. I have noticed sometimes `!` characters can be the cause. You should be able to escape them.

### Future Ideas
* Add categories to posts
* Improve the build performance in some way. Maybe look into alternative ways to host images instead of requiring Gatsby to process them. Netlify has features like this worth exploring.
* Forward/next posts
* Visual dividers on the index page seperated by year.

### Personal Notes
* The image grids are organized by "Date Captured". This date is pulled from each image's metadata (exif). Some photos might not have this metadata. You can debug these dates by turning on the secret function in `Image.js`.
* You can easily modify metadata on Windows using: https://www.colorpilot.com/exif.html
* TODO: Does reading the exif data modify the image in some way that causes gatsby to reprocess the image?

