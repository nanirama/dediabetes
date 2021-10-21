import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import PostCategoryDisplay from './PostCategoryDisplay';

export default function CategoriesNav() {
  let allCategories = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            categories
          }
        }
      }
    }
  `);

  allCategories = allCategories.allMdx.nodes;

  let allUniqueCategories = [];
  allCategories.forEach(post => {
    if (post.frontmatter.categories) {
      post.frontmatter.categories.forEach(category =>
        allUniqueCategories.push(category)
      );
    }
  });
  allUniqueCategories = new Set(allUniqueCategories);
  allUniqueCategories = [...allUniqueCategories];
  allUniqueCategories = allUniqueCategories.sort((a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });

  const container = useRef(null);

  useEffect(() => {
    const el = container.current.getElement();
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <header
      style={{
        boxShadow: '0 4px 20px 0 rgb(0,0, 0,12%)',
        background: '#fff',
        zIndex: 1,
      }}
    >
      <ScrollContainer ref={container} className="flex p-4 relative">
        {allUniqueCategories.map((category, i) => (
          <PostCategoryDisplay category={category} key={i} />
        ))}
        <Link
          to="/articles/"
          className="border border-gray-500 rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2text-base px-2"
          style={{ whiteSpace: 'nowrap' }}
        >
          {' '}
          Todos los articulos &#8594;
        </Link>
      </ScrollContainer>
    </header>
  );
}
