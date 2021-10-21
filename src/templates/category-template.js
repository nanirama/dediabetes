import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Halfpage from '../components/Advertising/Halfpage';
import Sidebar1Desktop from '../components/Advertising/Sidebar1Desktop';
import TopHomepage from '../components/Advertising/TopHomepage';
import TopHomepageMob from '../components/Advertising/TopHomepageMob';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PostsPager from '../components/PostsPager';
import Top5Posts from '../components/Top5Posts.js';
import Top5Recipes from '../components/Top5Recipes';
import SEO from '../components/SEO';
import SubscribeSide from '../components/Subscribe/SideOptIn';

const CategoryTemplate = props => {
  const {
    pageContext: { category, page },
  } = props;
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props;
  const {
    data: {
      allCategoriesJson: { nodes: catinfo },
    },
  } = props;

  const catname = catinfo[0].catname ? catinfo[0].catname : 'no name';
  const catdesc = catinfo[0].catdesc ? catinfo[0].catdesc : 'no desc';
  const page2 = page + 1;

  const Heading = styled.h1`
    ${tw`font-bold text-6xl text-center`}
  `;

  return (
    <Layout>
      <Hero />
      <SEO
        title={`Articulos de la categoría ${catname} - Pagina ${page2}`}
        description={`${catdesc}`}
      />
      <div className="md:flex flex-row justify-center m-6 hidden md:visible">
        <TopHomepage />
      </div>
      <div className="flex flex-row justify-center mt-6 md:hidden ">
        <TopHomepageMob />
      </div>
      <div className="lg:px-24 lg:py-4">
      <Heading className="leading-snug mb-10 text-center capitalize">
            {catname}
          </Heading>
          <p className="italic px-2 md:px-3 lg:px-6">{catdesc}</p>
        </div>
      <div className="grid grid-cols-blog w-full container mx-auto gap-x-4">
        <div className="col-span-2 md:col-span-1 mx-autoleading-losse  my-6">

          <PostsPager pageContext={props.pageContext} posts={posts} />
        </div>

        <aside
          className="hidden md:block md:visible mx-autoleading-losse bg-white my-6"
          style={{ marginBottom: '110px' }}
        >
          {/* <SubscribeSide /> */}
          <div className="">
            <Sidebar1Desktop />
          </div>
          <Top5Recipes />
          <Top5Posts />
          <div className="my-3">
            <Halfpage />
          </div>
        </aside>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($skip: Int!, $limit: Int!, $category: String!) {
    allMdx(
      filter: { frontmatter: { categories: { eq: $category } } }
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
          date(formatString: "MMM DD, YYYY", locale: "es-ES")
          slug
        }
        id
      }
    }
    allCategoriesJson(filter: { children: {}, slug: { eq: $category } }) {
      nodes {
        catname: name
        catdesc: desc
      }
    }
  }
`;

export default CategoryTemplate;
