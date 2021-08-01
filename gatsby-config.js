module.exports = {
  siteMetadata: {
    title: `Jez Milledge | Software Developer`,
    description: `The portfolio and writings of Jez Milledge, a Sydney-based software developer, former medtech consultant, and perfectly-weighted through-ball enthusiast.`,
    author: `Jez Milledge`,
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
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "jezzzm",
        linkResolver: () => post => `/${post.uid}`,
      },
    }
  ],
};
