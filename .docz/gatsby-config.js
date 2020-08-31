const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Basic',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Basic',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app',
          templates:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/node_modules/docz-core/dist/templates',
          docz: '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz',
          cache:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/.cache',
          app: '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/app',
          appPackageJson:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/package.json',
          appTsConfig:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/tsconfig.json',
          gatsbyConfig:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/gatsby-config.js',
          gatsbyBrowser:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/gatsby-browser.js',
          gatsbyNode:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/gatsby-node.js',
          gatsbySSR:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/gatsby-ssr.js',
          importsJs:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/app/imports.js',
          rootJs:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/app/root.jsx',
          indexJs:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/app/index.jsx',
          indexHtml:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/app/index.html',
          db:
            '/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
