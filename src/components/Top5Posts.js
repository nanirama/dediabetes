import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
    allPageViews {
      nodes {
        id
        last30DayViews
      }
    }
  }
`;

export default function Top5Posts() {
  const {
    allMdx: { nodes: allPosts },
    allPageViews: { nodes: allViews },
  } = useStaticQuery(query);

  function* filter(array, condition, maxSize) {
    if (!maxSize || maxSize > array.length) {
      maxSize = array.length;
    }
    let count = 0;
    let i = 0;
    while (count < maxSize && i < array.length) {
      const check = condition(array[i]);
      if (check) {
        yield check;
        count++;
      }
      i++;
    }
  }

  const posts = Array.from(
    filter(
      allViews,
      all => {
        const post = allPosts.filter(
          post => post.frontmatter.slug === all.id.replace('/', '')
        );
        if (post.length > 0) {
          return post[0];
        }
        return false;
      },
      5
    )
  );

  return (
    <div className="mt-4">
      <Card>
        <CardContent>
        <div className="bg-themeLighterAlt rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h4 className="text-center">Artículos Populares</h4>
            {posts.map((post, i) => (
              <Link
                to={`/${post.frontmatter.slug}/`}
                key={i}
                className="my-4 capitalize block text-sm underline"
              >
                {post.frontmatter.title}
              </Link>
            ))}
</div>
        </CardContent>



      </Card>
      
    </div>
  );
}
