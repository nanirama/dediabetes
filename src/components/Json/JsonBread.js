import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const JsonBread = ({ title, category, slug }) => {
  const { site } = useStaticQuery(query)

  const { siteUrl } = site.siteMetadata

  const schemaBread = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category,
        item: `${siteUrl}/${category}/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${siteUrl}/${slug}/`,
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaBread)}</script>
    </Helmet>
  )
}

export default JsonBread

JsonBread.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  slug: PropTypes.string,
}

JsonBread.defaultProps = {
  title: null,
  category: null,
  slug: null,
}

const query = graphql`
  query SEOJson {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
  }
`
