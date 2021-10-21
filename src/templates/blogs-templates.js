import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PostsPager from '../components/PostsPager';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

const BlogsTemplate = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <SEO
        title={`Archivo de Articulos`}
        description={`Archivo de Articulos de DeDiabetes`}
      />
      <Hero />
      <PostsPager
        posts={posts}
        title="Archivo de Artículos"
        pageContext={pageContext}
      />
    </Layout>
  );
};

export const query = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: {} }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          authorID
          type
          category
          categories
          date(formatString: "MMM Do, YYYY")
          slug
        }
        id
      }
    }
  }
`;

export default BlogsTemplate;
