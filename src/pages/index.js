import { graphql, Link } from 'gatsby';
import React from 'react';
import Halfpage from '../components/Advertising/Halfpage';
import Sidebar1Desktop from '../components/Advertising/Sidebar1Desktop';
import TopHomepage from '../components/Advertising/TopHomepage';
import TopHomepageMob from '../components/Advertising/TopHomepageMob';
import Hero from '../components/Hero';
import Recetas from '../components/HomePage/Recetas';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import SEO from '../components/SEO';
import SubscribeSide from '../components/Subscribe/SideOptIn';
import Top10Posts from '../components/Top10Posts';
import Top10Recipes from '../components/Top10Recipes';
import HeroCta from '../components/Subscribe/HeroCta'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  const {
    allPrismicRecipes: { edges: recipes },
  } = data;
  return (
    <Layout>
      <SEO
      title="Información y Herramientas para la Diabetes"
        description="Tu fuente de información para el cuidado de la diabetes. Te brindamos herramientas y educación para el manejo de la diabetes y sus complicaciones"
        type="website"
      />
<HeroCta/>
      {/* <HeroOptin/> */}
      {/* <div className="md:flex flex-row justify-center m-6 hidden md:visible">
        <TopHomepage />
      </div>
      <div className="flex flex-row justify-center mt-6 md:hidden ">
        <TopHomepageMob />
      </div> */}
      
    
    
      <div className="mx-autoleading-losse my-6 container mx-auto">
      <Hero showPerson/>
          <Posts posts={posts} title="Ultimos Artículos" className="grid grid-cols-3" />
          
          <div className="flex items-center justify-center p-8 text-2xl">
        <button className="border-2 border-themeBrandColor rounded hover:bg-themeBrandColor hover:text-white p-4 mb-2 mr-2 focus:outline-none">
          <Link to="/articles/">Mas Artículos</Link>
        </button>
      </div>
          
      <div className="mx-autoleading-losse my-6 w-full container mx-auto">
        
        <Recetas recipes={recipes} className=""></Recetas>
        <Top10Posts />
        <Top10Recipes/>
        
      </div>
        
      </div>
      

      
      
      

    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(
      filter: {}
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          type
          authorID
          category
          categories
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(formatString: "MMM DD, YYYY", locale: "es-ES")
          slug
        }
        id
      }
    }
    allPrismicRecipes(limit: 6, sort: {fields: data___date, order: DESC}) {
      edges {
        node {
          slug: uid
          data {
            title: title1 {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
