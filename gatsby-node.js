const path = require('path');
const { paginate } = require(`gatsby-awesome-pagination`);
const { node } = require('prop-types');
const authors = require('./src/data/authors');
const relatedPosts = require('./src/data/relatedp.json');
const relatedRecipes = require('./src/data/relatedrec.json');
const faq = require('./src/data/faq.json');
const crypto = require('crypto');
const { google } = require('googleapis');
require('dotenv').config();

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            category
            categories
            slug
            authorID
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___categories)
      }
      allRecipesJson {
        nodes {
          title
          tags
          slug1: slug
        }
      }
      recipeTags: allRecipesJson {
        distinct(field: tags)
      }
    }
  `);

  const recipes = result.data.allRecipesJson.nodes;
  const perPage = 18;

  // Create recipes pages
  numPages = Math.ceil(recipes.length / perPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/recetas/` : `/recetas/${i}`,
      component: path.resolve('./src/templates/recipes.js'),
      context: {
        tag: '/.*/',
        skip: i * perPage,
        limit: perPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create recipe tag pages
  result.data.recipeTags.distinct.forEach(tag => {
    const tagged = recipes
      .filter(r => !!r.tags)
      .filter(r => r.tags.includes(tag));
    numPages = Math.ceil(tagged.length / perPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/recetas/${tag}` : `/recetas/${tag}/${i}`,
        component: path.resolve('./src/templates/recipes.js'),
        context: {
          tag: tag,
          skip: i * perPage,
          limit: perPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });

  // Create Post list Pages with Pagination

  paginate({
    createPage,
    items: result.data.allMdx.nodes,
    itemsPerPage: 10,
    pathPrefix: `/articulos-blog`,
    component: path.resolve('src/templates/blogs-templates.js'),
  });

  // Create Single Post Pages
  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    const [relatedP] = relatedPosts.filter(post => post.Articulo === slug);

    createPage({
      path: `/${slug}/`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
        fullSlug: `/${slug}/`,
        related1: relatedP.Post1,
        related2: relatedP.Post2,
        related3: relatedP.Post3,
      },
    });
  });

  // Create author pages
  authors.forEach(author => {
    createPage({
      path: `/autores/${author.slug}/`,
      component: path.resolve(`src/templates/author-template.js`),
      context: {
        id: author.id,
      },
    });
  });

  // Create FAQ pages
  // faq.forEach(faq => {
  //   createPage({
  //     path: `/faq/${faq.slug}/`,
  //     component: path.resolve(`src/templates/faq-template.js`),
  //     context: {
  //       slug3: faq.slug,
  //       // id3: faq.id,
  //       // preguntas3: faq.preguntas,
  //     },
  //   });
  // });

  //   for faq
  // exports.createSchemaCustomization = ({ actions }) => {
  //   const { createTypes } = actions;
  //   const typeDefs = `
  //     type FaqJsonPreguntas implements Node {
  //       answer1: String
  //     }
  //   `;
  //   createTypes(typeDefs);
  // };

  // Create Single Recipe Pages
  result.data.allRecipesJson.nodes.forEach(({ slug1 }) => {
    const [relatedR] = relatedRecipes.filter(recipe => recipe.Recipe === slug1);

    createPage({
      path: `/recetas/${slug1}/`,
      component: path.resolve(`src/templates/recipe-template.js`),
      context: {
        slug1,
        fullSlug: `/recetas/${slug1}/`,
        rel1: relatedR.rel1,
        rel2: relatedR.rel2,
        rel3: relatedR.rel3,
      },
    });
  });

  // Category pages creation
  const categoryTemplate = path.resolve('./src/templates/category-template.js');
  console.log(JSON.stringify(result.data.categories), 'Catg');
  console.log(JSON.stringify(result.data.allMdx.nodes), 'Nodes');

  result.data.categories.distinct.forEach(category => {
    const items = result.data.allMdx.nodes
      .filter(Boolean)
      .filter(n => n.frontmatter.category === category);
    const numPages = Math.ceil(items.length / 10);
    const prefix = `/diabetes/${category}/`;

    Array.from({ length: numPages }).forEach((_, i) => {
      const isLastPage = i + 1 === numPages;
      const isFirstPage = i === 0;
      const isSecondPage = i === 1;
      let previousPagePath = `${prefix}${i - 1}`;
      let nextPagePath = `${prefix}${i + 1}`;
      if (isFirstPage) {
        previousPagePath = null;
      }
      if (isLastPage) {
        nextPagePath = null;
      }
      if (isSecondPage) {
        previousPagePath = prefix;
      }
      createPage({
        path: isFirstPage ? prefix : `${prefix}${i}`,
        component: categoryTemplate,
        context: {
          category,
          skip: i * 10,
          limit: 10,
          nextPagePath,
          previousPagePath,
          page: i,
        },
      });
    });
  });
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // google auth logic
  const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
  const jwt = new google.auth.JWT(
    process.env.GATSBY_G_CLIENT_MAIL,
    null,
    process.env.GATSBY_G_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    scopes
  );
  await jwt.authorize();

  const analyticsReporting = google.analyticsreporting({
    version: 'v4',
    auth: jwt,
  });

  // Analytics Reporting v4 query for top posts and recipes
  const result = await analyticsReporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: process.env.GATSBY_G_VIEW_ID,
          dateRanges: [
            {
              startDate: '30DaysAgo',
              endDate: 'today',
            },
            {
              startDate: '2021-06-01',
              endDate: 'today',
            },
          ],
          metrics: [
            {
              expression: 'ga:uniquePageviews',
            },
          ],
          dimensions: [
            {
              name: 'ga:pagePath',
            },
          ],
          orderBys: [
            {
              sortOrder: 'DESCENDING',
              fieldName: 'ga:uniquePageviews',
            },
          ],
        },
      ],
    },
  });
  // Add analytics data to graphql
  const { rows } = result.data.reports[0].data;
  for (const { dimensions, metrics } of rows) {
    const path = dimensions[0];
    const last30DayViews = metrics[0].values[0];
    const allTimeViews = metrics[1].values[0];
    createNode({
      allTimeViews: Number(allTimeViews),
      last30DayViews: Number(last30DayViews),
      id: path,
      internal: {
        type: `PageViews`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify({ last30DayViews, allTimeViews }))
          .digest(`hex`),
        mediaType: `text/plain`,
        description: `Page views per path`,
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
