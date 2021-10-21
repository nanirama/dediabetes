import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

const RecipeBox = styled.div`
  min-width: 250px;

  > div {
    height: 142px;
  }

  @media (min-width: 768px) {
    min-width: 300px;

    > div {
      height: 165px;
    }
  }

  @media (min-width: 1280px) {
    min-width: 350px;

    > div {
      height: 198px;
    }
  }
`;

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
    allRecipesJson {
      nodes {
        title
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
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

const Top10Recipes = () => {
  const {
    allRecipesJson: { nodes: allRecipes },
    allPageViews: { nodes: allViews },
  } = useStaticQuery(query);

  function* filter(array, condition, maxSize) {
    if (!maxSize || maxSize > array.length) {
      maxSize = array.length;
    }
    let count = 0;
    let i = 0;
    while (count < maxSize && i < array.length) {
      if (condition(array[i])) {
        const word = array[i].id.replace('/recetas/', '');
        const recipe = allRecipes.filter(
          recipe => recipe.slug === word.replace('/', '')
        );
        if (recipe.length > 0) {
          yield recipe[0];
          count++;
        }
      }
      i++;
    }
  }

  const recipes = Array.from(
    filter(allViews, all => all.id.match(/^\/recetas\/./), 10)
  );

  return (
    <div className="flex mx-1 md:mx-4 lg:mx-8 mt-8">
      <Heading className="bg-themeBrandColor p-4 sm:p-6 flex">
        <h2 className="m-auto text-white text-lg">Recetas Más Populares</h2>
      </Heading>
      <ScrollContainer className="flex" vertical={false}>
        {recipes &&
          recipes.map((item, index) => (
            <RecipeBox
              className="border-2 p-4 md:p-6 bg-white"
              key={index}
            >
              <Image
                fluid={item.image.childImageSharp.fluid}
                alt={item.title}
              />
              <Link
                to={`recetas/${item.slug}/`}
                className="mt-4 text-md font-bold block hover:text-themeBrandColor"
              >
                {item.title}
              </Link>
            </RecipeBox>
          ))}
      </ScrollContainer>
    </div>
  );
};
export default Top10Recipes;
