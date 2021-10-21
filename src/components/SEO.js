import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article, date, type }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    twitter,
    facebook,
    language,
    defaultType,
  } = site.siteMetadata;

  

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    lang: language,
    type: type || defaultType,
  };

 
 
  const JsonPostHome = {
    '@context': 'https://schema.org',
    '@type': 'webpage',
    name: `${seo.title}`,
    url: `${siteUrl}/${defaultImage}`,
    description: `${seo.description}`,
    sameAs: [twitter, facebook],
  };

  const JsonPostArt = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${seo.url}`,
    },
    headline: `${seo.title}`,
    image: `${seo.image}`,
    author: {
      '@type': 'Person',
      name: 'Dediabetes',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dediabetes',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/${defaultImage}`,
      },
    },
    sameAs: [twitter, facebook],
    datePublished: date,
    dateModified: date,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <link href={seo.url} rel="canonical"/>
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content={seo.type} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter}></meta>
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {/* {(article ? true : null) && <script type="application/ld+json">{JSON.stringify(JsonPostArt)}</script>} */}
      {/* {article !== true && <script type="application/ld+json">{JSON.stringify(JsonPostArt)}</script>} */}
      {(article ? true : null) && (
        <script type="application/ld+json">
          {JSON.stringify(JsonPostArt)}
        </script>
      )}
      {article === false && (
        <script type="application/ld+json">
          {JSON.stringify(JsonPostHome)}
        </script>
      )}
      <html lang="es-ES" />z
      <meta
        name="google-site-verification"
        content="Km_c_WD44bBTFK6nGK5iTeNlTc6H-owjgPLVxMkLEB8"
      />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  type: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        twitter
        facebook
        defaultType: type
      }
    }
  }
`;
