import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import authors from '../../data/authors.json';

const ASEO = ({
  title,
  description,
  language,
  authorID,
  date,
  lastmodified,
  featuredImage,
  imageFB,
  type,
  question,
  answer,
}) => {
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
    defaultType,
  } = site.siteMetadata;

  let author = authors.filter(author => author.id === authorID);

  author = author[0] ? author[0] : {};

  let authorName;
  if (author.name) authorName = author.name;
  else authorName = 'DeDiabetes';

  // console.log(authorName)
  // console.log(author.descriptionShort)

  let authorHeadshot;
  if (author.headshot) authorHeadshot = author.headshot;
  else authorHeadshot = '/author_std.jpg';

  let authorSlug;
  if (author.slug) authorSlug = `${author.slug}/#author`;
  else authorSlug = '#author';

  // console.log(authorSlug)

  let authorDes;
  if (author.descriptionShort) authorDes = author.descriptionShort;
  else authorDes = defaultDescription;

  const aseo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${imageFB || `/${defaultImage}`}`,
    imageFB: `${siteUrl}${imageFB || `/${defaultImage}`}`,
    url: `${siteUrl}${pathname}`,
    lang: language || 'es-ES',
    type: type || defaultType,
  };

  const OrgJson = {
    '@type': 'Organization',
    id: `${siteUrl}/#organization`,
    name: `${defaultTitle}`,
    url: `${siteUrl}`,
    sameAs: [twitter, facebook],
    logo: {
      type: 'ImageObject',
      id: `${siteUrl}/#logo`,
      url: `${siteUrl}/${defaultImage}`,
      contentUrl: `${siteUrl}/${defaultImage}`,
      caption: `DeDiabetes`,
      image: { id: `${siteUrl}/#logo` },
    },
  };

  const WebsJson = {
    '@type': 'WebSite',
    id: `${siteUrl}#website`,
    url: `${siteUrl}`,
    name: `${defaultTitle}`,
    description: 'Cuidado de la Diabetes',
    publisher: { id: `${siteUrl}/#organization` },
  };

  const PageJson = {
    '@type': 'WebPage',
    id: `${aseo.url}#webpage`,
    url: `${aseo.url}`,
    name: `${aseo.title}`,
    inLanguage: `${aseo.lang}`,
    isPartOf: { '@id': `${siteUrl}#website` },
    image: {
      '@type': 'ImageObject',
      '@id': `${aseo.url}#primaryimage`,
    },
  };

  const schemaBread = {
    '@type': 'BreadcrumbList',
    '@id': `${aseo.url}#breadcrumb`,

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: { '@type': 'Thing', '@id': `${siteUrl}` },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${aseo.title}`,
        item: { '@type': 'Thing', '@id': `${aseo.url}` },
      },
    ],
  };

  const JsonPostArt = {
    '@type': 'Article',
    '@id': `${aseo.url}#article`,
    isPartOf: { '@id': `${aseo.url}#webpage` },
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/autores/${authorSlug}`,
      name: `${authorName}`,
    },
    publisher: {
      '@id': `${siteUrl}#organization`,
    },

    headline: `${aseo.title}`,
    datePublished: date,
    dateModified: lastmodified || date,
    mainEntityOfPage: `${siteUrl}#webpage`,
    image: `${aseo.image}`,
  };

  const PersonJson = {
    '@type': 'Person',
    id: `${siteUrl}/autores/${authorSlug}`,
    name: `${authorName}`,
    description: `${authorDes}`,
    image: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}#personlogo`,
      url: `${siteUrl}${authorHeadshot}`,
      caption: `${authorName}`,
      sameAs: [author.linkedIn, author.twitter],
    },
  };

  const JsonPost = {
    '@context': 'https://schema.org',
    '@graph': [
      OrgJson,
      WebsJson,
      PageJson,
      schemaBread,
      JsonPostArt,
      PersonJson,
    ],
  };

  return (
    <Helmet title={aseo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={aseo.description} />
      <link href={aseo.url} rel="canonical"/>
      <meta name="image" content={aseo.image} />
      {aseo.url && <meta property="og:url" content={aseo.url} />}
      <meta property="og:type" content={aseo.type} />
      {aseo.title && <meta property="og:title" content={aseo.title} />}
      {aseo.description && (
        <meta property="og:description" content={aseo.description} />
      )}
      {aseo.image && <meta property="og:image" content={aseo.imageFB} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitter}></meta>
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {aseo.title && <meta name="twitter:title" content={aseo.title} />}
      {aseo.description && (
        <meta name="twitter:description" content={aseo.description} />
      )}
      {aseo.image && <meta name="twitter:image" content={aseo.imageFB} />}
      {<script type="application/ld+json">{JSON.stringify(JsonPost)}</script>}
      <html lang={aseo.lang} />z
      <meta
        name="google-site-verification"
        content="Km_c_WD44bBTFK6nGK5iTeNlTc6H-owjgPLVxMkLEB8"
      />
    </Helmet>
  );
};

export default ASEO;

ASEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.string,
  imageFB: PropTypes.string,
  article: PropTypes.bool,
  type: PropTypes.string,
};

ASEO.defaultProps = {
  title: null,
  description: null,
  featuredImage: null,
  imageFB: null,
  article: false,
};

const query = graphql`
  query ASEO {
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
