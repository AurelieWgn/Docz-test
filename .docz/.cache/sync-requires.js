const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/README.md"))),
  "component---src-components-alert-mdx": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/src/components/Alert.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/src/index.mdx"))),
  "component---src-components-super-text-mdx": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/src/components/SuperText.mdx"))),
  "component---src-components-button-mdx": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/src/components/Button.mdx"))),
  "component---src-components-index-mdx": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/src/components/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/aurelie.wagner/aurelie-sandbox/my-docz-app/.docz/src/pages/404.js")))
}

