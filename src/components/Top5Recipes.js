import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const query = graphql`
  {
    allRecipesJson {
      nodes {
        title
        slug
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

export default function Top5Recipes() {
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
    filter(allViews, all => all.id.match(/^\/recetas\/./), 5)
  );

  return (
    <div className="mt-4">
      <Card>
        <CardContent>
      <div className="bg-themeLighterAlt rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h4 className="text-center">Recetas Populares</h4>

          {recipes.map((recipe, i) => (
   
            <Link
              to={`/recetas/${recipe.slug}/`}
              key={i}
              className="my-4 capitalize block text-sm underline"
            >
              {recipe.title}
            </Link>
        
          ))}


      </div>
        </CardContent>


        </Card>
       

    </div>
  );
}
