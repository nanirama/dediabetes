require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `DeDiabetes`,
    description: `Información precisa y respaldada científicamente sobre diabetes: causas, síntomas, complicaciones, tratamientos y cuidado. Recetas y planes de comidas.`,
    titleTemplate: `%s | DeDiabetes`,
    url: `https://dediabetes.com`,
    siteUrl: `https://dediabetes.com`,
    image: `DD_ProfPic.jpg`,
    twitter: 'https://twitter.com/dediabetescom',
    twitterUsername: '@dediabetes',
    facebook: `https://www.facebook.com/cuidadodiabetes`,
    type: `article`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authors images`,
        path: `${__dirname}/src/images/authors/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imagesrecipes`,
        path: `${__dirname}/src/images/recipes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
          recipes: require('./custom_types/recipe.json'),
          an_unused_type: {},
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-awesome-pagination`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.dediabetes.com',
        sitemap: `https://www.dediabetes.com/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        fields: ['title', 'excerpt', 'path'],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            excerpt: node => node.excerpt,
            path: node => node.frontmatter.slug,
          },
        },
      },
    },

    {
      resolve: 'gatsby-remark-related-posts',
      options: {
        posts_dir: `${__dirname}/src/posts`,
      },
    },
    // {
    //   resolve: `@isamrish/gatsby-plugin-google-adsense`,
    //   options: {
    //     googleAdClientId: '',
    //     head: true, // Optional
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images' },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-remark-reading-time',
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Raleway',
              variants: ['500'],
            },
            {
              family: 'Raleway',
              variants: ['300'],
            },
            {
              family: 'Raleway',
              variants: ['200'],
            },
            {
              family: 'Montserrat',
              variants: ['600'],
            }
          ],
        },
        formats: ['woff2'],
        useMinify: true,
        //usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-75913714-1', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://static.mailerlite.com/webforms/submit/n2v8c6',
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: 'UA-75913714-1',
    //       cookieName: 'gatsby-gdpr-google-analytics',
    //     },
    //     // facebookPixel: {
    //     //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
    //     // },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dediabetes`,
        short_name: `DeDiabetes`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/author_std.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        develop: false,
        ignore: ['/main.css'],
      },
    },

    // `gatsby-plugin-force-trailing-slashes`,
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
    // `gatsby-plugin-perf-budgets`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    // `gatsby-plugin-preact`,
  ],
};
