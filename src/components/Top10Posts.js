import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import PostDisplay from './PostDisplay';

const Heading = styled.div`
  width: 10rem;

  @media (min-width: 640px) {
    width: 11rem;
  }

  @media (min-width: 768px) {
    width: 14.5rem;
  }
`;

const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          authorID
          category
          date(formatString: "MMM Do, YYYY")
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

const Top10Posts = () => {
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
      10
    )
  );

  return (
    <div className="flex mx-1 md:mx-4 lg:mx-8 mt-8">
      <Heading className="bg-themeBrandColor p-4 sm:p-6 flex">
        <h2 className="m-auto text-lg text-white">Artículos Más Populares</h2>
      </Heading>
      <ScrollContainer className="flex" vertical={false}>
        {posts &&
          posts.map((item, index) => (
            <PostDisplay key={index} frontmatter={item.frontmatter} heroBox />
          ))}
      </ScrollContainer>
    </div>
  );
};
export default Top10Posts;
