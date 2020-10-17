/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "${__dirname}/src/pages/styles";`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cristobal Szkutnik`,
        short_name: `Cristobal Szkutnik`,
        start_url: `/`,
        background_color: `#131323`,
        theme_color: `#131323`,
        display: `standalone`,
        icon: `src/assets/logo.svg`
      },
    }
  ],
}
