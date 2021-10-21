import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

export default function RecipeDisplay({ r }) {
  console.log('My recipe,', r.data.image.localFile)
  const facebooklink = `https://www.facebook.com/sharer/sharer.php?u=https://dediabetes.com/${r.slug}`;
  const textfortwitter = `${r.title} @dediabetes`;
  const twitterlink = `https://twitter.com/intent/tweet?url=https://www.dediabetes.com/${r.slug}&text=%20${textfortwitter}%20%23tag1%20%23tag2`;
  // const pinterestlink = `http://pinterest.com/pin/create/button/?url=${r.slug}&media=&description=`;

  return (
    <div className="mb-10">
      {r.data.image && <Link to={`/recetas/${r.slug}/`}>
        <BackgroundImage
          fluid={r.data.image.localFile.childImageSharp.fluid}
          tag="div"
          style={{ paddingBottom: '56.5%' }}
          className="w-full"
        />{' '}
      </Link>}

      <div
        style={{
          display: 'flex',
          width: '50%',
          justifyContent: 'space-between',
          margin: '10px auto',
        }}
      >
      </div>
      <Link to={`/recetas/${r.slug}/`}>
        <h4 className="hover:text-themeBrandColor my-0 font-medium">{r.data.title.text}</h4>
      </Link>
    </div>
  );
}
