module.exports = {
  siteMetadata: {
    title: "Static Job Listings | Frontend Mentor",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["spartan:500,700"],
        display: "swap",
      },
    },
  ],
};
