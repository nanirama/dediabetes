import React from 'react';
import authors from '../data/authors.json';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';

import { graphql } from 'gatsby';
import AuthorPosts from '../components/AuthorPosts';
import Avatar from '../components/Avatar';

export default function AuthorTemplate({ data, pageContext }) {
  const { id } = pageContext;

  let { totalArticles } = data;

  let author = authors.filter(author => author.id === id);
  author = author[0];
  const theme = useTheme();

  return (
    <Layout>
      <SEO
        title={`${author.name} Articulos`}
        description={`${author.name} Articulos de DeDiabetes`}
      />
      <main className="text-center mt-5">
        <Avatar id={id} authorPage />

        <h1>
          {author.name}, {author.certifications}
        </h1>
        
        <div>
          {author['linkedIn'] ? (
            <a href={author['linkedIn']} target="_blank" rel="noreferrer">
              <IconButton
                aria-label={`${author.name} LinkedIn`}
                style={{
                  color: theme.palette.info.main,
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          ) : (
            ''
          )}
          {author['facebook'] ? (
            <a href={author['facebook']} target="_blank" rel="noreferrer">
              <IconButton
                aria-label={`${author.name} Facebook`}
                style={{
                  color: theme.palette.info.main,
                }}
              >
                <FacebookIcon />
              </IconButton>
            </a>
          ) : (
            ''
          )}
          {author['twitter'] ? (
            <a href={author['twitter']} target="_blank" rel="noreferrer">
              <IconButton
                aria-label={`${author.name} Twitter`}
                style={{
                  color: theme.palette.info.main,
                }}
              >
                <TwitterIcon />
              </IconButton>
            </a>
          ) : (
            ''
          )}
          {author['personalink'] ? (
            <a href={author['personalink']} target="_blank" rel="noreferrer">
              <IconButton
                aria-label={`${author.name} personal website`}
                style={{
                  color: theme.palette.info.main,
                }}
              >
                <LaunchIcon />
              </IconButton>
            </a>
          ) : (
            ''
          )}
        </div>
        <p className="max-w-xl mx-auto mt-2">{author.description}</p>
      </main>
      <section
        className="p-10 text-center mt-8"
        style={{
          background:
            'linear-gradient(to bottom, rgb(229, 231, 235) 16%, #fff 16%, #fff 100%)',
        }}
      >
        <p
          className="border-b-2 border-solid inline-block"
          style={{ borderColor: '#5a5759' }}
        >
          Artículos de {author.name} ({totalArticles.nodes.length})
        </p>

        <AuthorPosts totalArticles={totalArticles} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query authorQuery($id: Int) {
    totalArticles: allMdx(filter: { frontmatter: { authorID: { eq: $id } } }) {
      nodes {
        frontmatter {
          title
          description
          slug
        }
      }
    }
  }
`;
