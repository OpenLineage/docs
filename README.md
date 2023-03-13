# OpenLineage Docs

NOTE: These docs are a work in progress. For current documentation, consult the various `README.md` files that can be found in the [OpenLineage Repository](https://github.com/OpenLineage/openlineage).

This is a Docusaurus site, and all content can be found in `docs/`. Contributions are welcome in the form of issues or pull requests. Pages that require attention have been marked with Docusaurus Admonitions.

### New posts

We love new blog posts, and welcome content about OpenLineage! Topics include:
* experiences from users of all kinds
* supporting products and technologies
* proposals for discussion

If you are familiar with the GitHub pull request process, it is easy to propose a new blog post:

1. Fork this project.
2. Make a new directory in `/blog`. The name of the directory will become part of the posts's URL, so choose something descriptive and unique.
2. Create an `index.mdx` file in the new directory containing your blog content. Use one of the other posts as a template. The `title`, `date`, `author`, `image`, `banner`, and `description` front matter fields are all required.
3. Create artwork! The `banner.svg` image will be shown at the top of the blog post, and should have dimensions of 670x160. The `image.svg` will be shown in the blog index, and should have dimensions of 670x480. These should both be SVG files.
4. Build the site locally if you want to see it in a browser and build confidence in your formatting choices.
5. Commit your changes and submit a pull request. 

To match the artwork on the rest of the site, you can use sketchbeast.com to create your images:

1. First, choose a source image to use as inspiration - perhaps something thematically related to your post, or an inside joke. It'll be our little secret.
2. Then, upload the image to sketchbeast.com, change "mixed shapes" to "rectangles", and click the button. Feel free to play with the other settings as you like, but stick with rectangles.
3. Download the resulting SVG using the button on the image in the film strip at the bottom of the screen, and crop to the proper size.
4. Delight in being the only person who knows what the source image was; resolve to choose something more subversive/clever next time.

(If you'd rather not go through all of this, feel free to submit your PR without artwork and we'll make something for you - we like doing it, it's fun!) 

### Changes to basepages

If you want to make a change to a basepage - e.g. to add a new member to the Ecosystem page - the best way is to submit a pull request.

These basepages can be found in `src/pages`, and are formatted in markdown.

### Building openapi docs

To build the openapi docs using `redoc-cli`, run:

```
% yarn run build:docs
```

## Local development

First, clone the repo.

Install the [node version manager](https://github.com/nvm-sh/nvm) and use it to create a Node 16 environment:

```
$ nvm install 16
$ nvm use 16
```

Run Yarn to install all of the Node dependencies for the project:

```
$ yarn
```

## Local site build

You need to first build the documentation contents. This is necessary before starting the docusaurus server.

```
$ yarn build
```

This command generates static content into the `build` directory. If you want to look at it, try `cd build && python3 -m http.server`.

## Local server start

Tell Yarn to start a development server:

```
$ yarn start
```

This command provides a URL where the doc site can be viewed. Most changes are reflected live without having to restart the server.

By default, the server port will be set to 3000. In case the port is already being used, you can specify the port number when starting the server:

```
$ yarn start --port 3001
```

## Deployment

Once the site has been launched, pull requests to `main` will cause a new doc site to be shipped via GitHub Pages.

The site is deployed using the [Gatsby Publish GitHub action](https://github.com/OpenLineage/docs/blob/main/.github/workflows/deploy.yml) whenever a change is merged into `main`. 

This GitHub Action will:
* Execute `scripts/build-docs.sh`, which performs a build of the OpenAPI docs based on the latest version of the spec that has been published into `static/spec` by the [OpenLineage release script](https://github.com/OpenLineage/OpenLineage/blob/main/spec/release.sh). The resulting docs are placed into `static/apidocs/openapi`.
* Execute `yarn run build`, which performs a build of the Gatsby landing pages and places them into `public/`. The `static/` directory, containing the OpenAPI and Java client documentation, is copied into `public/` during this step.
* Replace the contents of the `gh-pages` branch of the [org domain repo](https://github.com/OpenLineage/OpenLineage.github.io) with the contents of `public/`. This will cause that repo's GitHub Action to deploy the new content.