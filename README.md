# OpenLineage Docs

NOTE: These docs are a work in progress. For current documentation, consult the various `README.md` files that can be found in the [OpenLineage Repository](https://github.com/OpenLineage/openlineage).

This is a Docusaurus site, and all content can be found in `docs/`. Contributions are welcome in the form of issues or pull requests. Pages that require attention have been marked with Docusaurus Admonitions.

## Local development

First, clone the repo.

Install the [node version manager](https://github.com/nvm-sh/nvm) and use it to create a Node 16 environment:

```
$ nvm install 16
$ nvm use 16
```

Install Yarn and the Gatsby CLI:

```
$ npm install -g yarn gatsby-cli
```

Run Yarn to install all of the Node dependencies for the project:

```
$ yarn
```

Tell Yarn to start a development server:

```
$ yarn start
```

This command provides a URL where the doc site can be viewed. Most changes are reflected live without having to restart the server.

## Local site build

```
$ yarn build
```

This command generates static content into the `build` directory. If you want to look at it, try `cd build && python3 -m http.server`.

## Deployment

Once the site has been launched, pull requests to `main` will cause a new doc site to be shipped via GitHub Pages.
