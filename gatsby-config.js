module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`],
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};


module.exports = {
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options:{
        path: `${__dirname}/src`,
        name: `src`,

      }
    },
    'gatsby-transformer-remark',
  ],
};

module.exports = {
  pathPrefix: `/js.ivanchon.com`,
}


plugins: [
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: `${__dirname}/src/img/favicon.png`,
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  }
];
