module.exports = {
  pathPrefix: `/classes/MAS.863/EECS/people/mattfeng`,
  siteMetadata: {
    title: `/mattfeng/how to make almost anything`,
    description: `how to make almost anything fall 2021`,
    author: `@mattfeng`,
    siteUrl: `http://fab.cba.mit.edu/classes/MAS.863/EECS/people/mattfeng/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
