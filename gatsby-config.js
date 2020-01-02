module.exports = {
  siteMetadata: {
    title: `Jez Milledge | Software Developer`,
    description: `Portfolio of Jez Milledge, a Sydney-based software developer.`,
    author: `Jez Milledge | zej.com.au`,
    url: "https://zej.com.au",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-155136362-1"],
        pluginConfig: { head: true },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "jezzzm",
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jez-milledge-portfolio`,
        short_name: `Jez Milledge`,
        start_url: `/`,
        background_color: `#dbedf3`,
        theme_color: `#f73859`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
