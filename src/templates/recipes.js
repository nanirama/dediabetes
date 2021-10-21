import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import elasticlunr from 'elasticlunr';
import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DownIcon from '../components/DownIcon';
import Layout from '../components/Layout';
import RecipeDisplay from '../components/RecipeDisplay';
import SEO from '../components/SEO';

const useStyles = makeStyles({
  search: {
    width: '100%',
    maxWidth: '350px',
    marginLeft: 'auto',
    '& label.Mui-focused': {
      color: '#b70610',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#b70610',
    },
    '& .MuiOutlinedInput-root': {
      color: '#5a5759',

      '& fieldset': {
        borderColor: '#929292de',
      },
      '&:hover fieldset': {
        borderColor: '#b92a32',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#b70610',
      },
    },
  },
});

const Recipes = ({ data, pageContext }) => {
  const tag = pageContext.tag;
  const isTagPage = pageContext.tag !== '/.*/';
  const prefix = isTagPage ? `/recetas/${tag}` : '/recetas';
  const hasNext = pageContext.currentPage < pageContext.numPages;
  const hasPrev = pageContext.currentPage > 1;
  const nextPath = `${prefix}/${pageContext.currentPage}`;
  const prevPath =
    pageContext.currentPage !== 2
      ? `${prefix}/${hasPrev ? pageContext.currentPage - 2 : ''}`
      : `${prefix}/`;

  // const title = isTagPage ? `Recetas: ${tag}` : 'Recetas';
  const tagMod = isTagPage ? `${tag}s` : '';
  const titleMod = isTagPage
    ? `Recetas de ${tagMod} para Diabeticos`
    : `Recetas`;
  const {
    filteredRecipes: { nodes: recipes },
  } = data;

  
  const tagLinks = data.allTags.distinct.map((t, i) => (
    <p key={i}>
      <Link to={`/recetas/${t}`}>{t.toUpperCase()}</Link>
    </p>
  ));
  
  // const renderTags = () => {
  //   let a = recipes.filter(
  //     recipe => !recipe.tags.includes(new Set(recipe.tags))
  //   );
  // };
  // renderTags();

  const classes = useStyles();

  // everything below before return is for search
  const defaultRecipes = tag === '/.*/' ? data.allRecipes.nodes : recipes;
  //const defaultRecipes = data.allRecipes.nodes;

  const allRecipesForSearch = data.allRecipesForSearch.nodes;

  const [searchedText, setSearchedText] = React.useState('');
  const [displayedRecipes, setDisplayedRecipes] = React.useState(
    defaultRecipes
  );

  // creates recipe search index based on todas or specific tag
  let searchIndex = React.useRef(null);

  React.useEffect(() => {
    searchIndex.current = elasticlunr(function () {
      this.setRef('title');
      this.addField('title');
      allRecipesForSearch.forEach(function (recipe) {
        this.addDoc(recipe);
      }, this);
    });
  }, [allRecipesForSearch]);

  const searched = e => {
    setSearchedText(e.target.value);
    if (e.target.value.length === 0) setDisplayedRecipes(defaultRecipes);
    else {
      let results = [];
      searchIndex.current
        .search(e.target.value, {
          expand: true,
        })
        .forEach(({ ref }) => {
          // Get doc by ref
          results.push(searchIndex.current.documentStore.getDoc(ref));
        });
      setDisplayedRecipes(results);
    }
  };



const DescSEO = (tagMod === "") ? "" : `de ${tagMod} `



  return (
    <Layout>
      <SEO
        title={`Recetas ${DescSEO}para diabéticos`}
        description={`Lista de recetas ${DescSEO}para diabéticos. Sencillas, deliciosas y fáciles de preparar, especialmente seleccionadas para el cuidado y control del azúcar en la sangre.`}
      />
      <div className="my-12 max-w-6xl m-auto md:grid grid-cols-5">
        <h1 className="col-start-1 col-end-4 capitalize justify-self-end text-center self-center mr-2">
          {titleMod}
        </h1>
        <TextField
          id="search"
          label="Busca recetas..."
          variant="outlined"
          value={searchedText}
          onChange={searched}
          className={`col-start-4 col-end-6 mx-4 justify-self-end ${classes.search}`}
        />
      </div>
      <div className="max-w-6xl m-auto md:grid grid-cols-5">
       <p className="col-span-5 text-center p-2">
       Cuidar de la diabetes no significa que tienes que sacrificar el disfrutar de la buena comida. DeDiabetes ofrece más de 100 recetas saludables y especialmente seleccionadas para aquella persona con diabetes, incluidos postres, comidas bajas en carbohidratos, comidas bajas en azúcar, y opciones vegetarianas. Tode esto con el objectivo de ofrecerte ideas de comidas no solo saludables sino también sabrosas.
      </p>
      </div>
     
      <div className="max-w-6xl m-auto md:grid grid-cols-5">
        <div className="md:hidden group relative capitalize flex justify-center align-center">
          <p className="relative z-10 text-center my-4">
            {isTagPage ? tag : 'Todas'} <DownIcon />
          </p>
          <StyledTagList className="absolute z-10 hidden text-center bg-white shadow-md group-hover:block list-none my-2 group-hover:w-full">
            {isTagPage && (
              <li>
                <p>
                  <Link to="/recetas">Todas</Link>
                </p>
              </li>
            )}
            {data.allTags.distinct
              .filter(t => t !== tag)
              .map((t, i) => (
                <li key={i} className="my-4">
                  <Link to={`/recetas/${t}`}>{t}</Link>
                </li>
              ))}
          </StyledTagList>
        </div>
        <aside className="hidden text-center col-span-1 md:block">
          <div className="sticky" style={{ top: '10px' }}>
            <p>
              <Link to="/recetas">TODAS</Link>
            </p>
            {tagLinks}
          </div>
        </aside>
        <section className="px-16 py-5 col-span-4 md:p-0 md:grid grid-cols-2 lg:grid-cols-3 gap-3">
          {displayedRecipes.map((r, i) => (
            <RecipeDisplay r={r} key={i} />
          ))}
        </section>
        <div className="flex justify-between col-start-2 col-span-4">
          {[
            hasPrev && (
              <Link className="inline-block" to={prevPath} key="1">
                ← Anterior
              </Link>
            ),
            hasNext && (
              <Link className="inline-block" to={nextPath} key="2">
                Siguiente →
              </Link>
            ),
          ]}
        </div>
      </div>
    </Layout>
  );
};

const StyledTagList = styled.ul`
  padding: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
`;

export const query = graphql`
  query($skip: Int!, $limit: Int!, $tag: String) {
    allTags: allRecipesJson {
      distinct(field: tags)
    }
    filteredRecipes: allPrismicRecipes(filter: {data: {tags: {elemMatch: {recipe_tag: {eq: $tag}}}}}) {
      nodes {
        slug: uid
        data {
          title: title1 {
            text
          }
          tags {
            recipe_tag
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
    allRecipes: allPrismicRecipes(skip: $skip, limit: $limit) {
      nodes {
        slug: uid
        data {
          title: title1 {
            text
          }
          tags {
            recipe_tag
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
    allRecipesForSearch: allPrismicRecipes {
      nodes {
        slug: uid
        data {
          title: title1 {
            text
          }
          tags {
            recipe_tag
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
`;

export default Recipes;
