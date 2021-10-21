import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import tw from 'twin.macro';
import CookTime from '../assets/cook-time.svg';
import Portions from '../assets/portions.svg';
import PrepTime from '../assets/prep-time.svg';
import RecipeBttmDsktp from '../components/Advertising/RecipeBttmDsktp';
import RecipeBttmMob from '../components/Advertising/RecipeBttmMob';
import TopHomepage from '../components/Advertising/TopHomepage';
import TopHomepageMob from '../components/Advertising/TopHomepageMob';
import BookmarkWidget2 from '../components/BookmarkWidget2';
import useFirebase from '../components/firebase/useFirebase';
import Hero from '../components/Hero';
import JsonBread from '../components/Json/JsonBread';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SubscribeSide from '../components/Subscribe/SideOptIn2';
import SubscribePost from '../components/Subscribe/PostOptin';
import Top5PostsImage from '../components/Top5PostsImage';
import Halfpage from '../components/Advertising/Halfpage';
import Sidebar1Desktop from '../components/Advertising/Sidebar1Desktop';
import Top5Posts from '../components/Top5Posts';
import { TableChartOutlined } from '@material-ui/icons';



const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '2rem',
    '@media (min-width: 375px)': {
      maxWidth: '325px',
    },
    '@media (min-width: 640px)': {
      marginRight: '0.5rem',
      '&:last-child': {
        marginRight: 0,
      },
    },

    '@media (min-width: 768px)': {
      marginTop: 0,
      marginRight: '1rem',
      '&:last-child': {
        marginRight: 0,
      },
    },
    '@media (min-width: 1024px)': {
      marginRight: '2rem',
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  card: {
    width: '100%',
    height: '100%',
    '@media (min-width: 375px)': {
      maxWidth: '325px',
    },
  },
  media: {
    height: 180,
  },
});

const RecipeTemplate1 = ({ data, pageContext }) => {
  const {
    recipesdata,
    rel1,
    rel2,
    rel3,
    pageViews,
  } = data;
  console.log('page Contetxt', pageContext)
  const { auth, db } = useFirebase();

  const [user, setUser] = useState('unknown');
  const [isBookmarked, setIsBookmarked] = useState();

  useEffect(() => {
    const unregisterAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        db.collection('users')
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              const user = doc.data();
              setIsBookmarked(
                user.recipes.filter(recipe => recipe.slug === recipesdata.data.slug).length > 0
                  ? true
                  : false
              );
            }
          });
      } else {
        setUser(null);
      }
    });

    return () => {
      unregisterAuth();
    };
  }, [auth, db, recipesdata.data.slug]);

  const classes = useStyles();

  // const PasosJson = recipesdata.data.instrucciones.map(({ id, paso }) => ({
  //   '@type': 'HowToStep',
  //   text: paso,
  // }));

  const totalTime = recipesdata.data.preptime + recipesdata.data.cooktime;

  const schemaRecipe = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    //name: `${recipesdata.data.title1.text} - Pagina ${currentPage}`,
    image: `https:/dediabetes.com${recipesdata.data.image.localFile.childImageSharp.fluid.src}`,
    //description: `Receta de ${recipesdata.data.title1.text} - Pagina ${currentPage}`,
    //keywords: Object.values(recipesdata.data.tags.recipe_tag),
    author: {
      '@type': 'Person',
      name: 'Dediabetes',
    },
    datePublished: recipesdata.data.date,
    recipeCategory: `Recetas para Diabeticos`,
    prepTime: `PT${recipesdata.data.preptime}M`,
    cookTime: `PT${recipesdata.data.cooktime}M`,
    totalTime: `PT${recipesdata.data.totalTime}M`,
    recipeYield: `${recipesdata.data.servings1}`,
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipesdata.data.calories1} cal`,
      fatContent: `${recipesdata.data.fat1} g`,
      proteinContent: `${recipesdata.data.protein1} g`,
      carbohydrateContent: `${recipesdata.data.carb1} g`,
      fiberContent: `${recipesdata.data.fiber1} g`,
    },
    recipeIngredient: Object.values(recipesdata.data.ingredientes),
    //recipeInstructions: Object.values(PasosJson),
  };

console.log(recipesdata.data.description.text === "")

const descSEO = recipesdata.data.description.text === "" ? `Receta de ${recipesdata.data.title1.text}` : recipesdata.data.description.text

console.log(recipesdata.data.description.text)

  const fullRecipe = (
    <article className="col-span-2 md:col-span-1 mx-autoleading-losse my-6 xl:px-24">
      <div className="flex flex-col bg-white p-6 md:px-6 lg:px-12">
        <div className="flex flex-col">
              <div className="flex flex-col ">
                <div>
                <span className="flex flex-row justify-start m-0 p-0 leading-tight">
                  {recipesdata.data.tags.map((item, i) => (
                  <ul key={i} className="my-0 mr-4 py-0 list-none ml-0">
                  <li>
                    <button className="border border-gray-500 rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2 text-base">
                    <Link to={`/recetas/${item.recipe_tag}/`}>
                      {item.recipe_tag}
                      </Link>
                    </button>
                    </li>
                  </ul>
                  ))}
                </span>
                <h1 className="m-0 p-0 leading-tight capitalize">{recipesdata.data.title1.text}</h1>
               
                </div>
                
         
          {recipesdata.data.description.text &&  <p className="italic my-4">{recipesdata.data.description.text} {pageViews && pageViews.allTimeViews
                  ? `• ${pageViews.allTimeViews} views` 
                  : ''}

              </p> } 


              </div>
              <div className="flex flex-row leading-tight">
              <BookmarkWidget2
                user={user}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
                slug={recipesdata.data.slug}
                title={recipesdata.data.title1.text}
                recipe
              />
                            

              </div>


          
           
            <div>

            </div>
     
        </div>

      </div>
      <div className="overflow-hidden mb-4 xl:-mx-24 leading-3">
          <Image
            fluid={recipesdata.data.image.localFile.childImageSharp.fluid}
            className="w-full overflow-hidden"
            alt={recipesdata.data.title1.text}
          />
      </div>
         <div className="border-4 md:ml-6 lg:ml-12 md:p-4 lg:pl-12">
         <div className="grid grid-cols-3 mt-4 divide-x-4">
              <div className="my-0">
                <img
                  src={PrepTime}
                  alt="Tiempo de preparación"
                  className="h-10 mx-auto"
                />
                <p className="text-center my-0">Preparación</p>
                <p className="text-center my-0">{recipesdata.data.preptime} min.</p>
              </div>
              <div className="">
                <img
                  src={CookTime}
                  alt="Tiempo de coccion"
                  className="h-10 mx-auto"
                />
                <p className="text-center my-0">Cocción</p>
                <p className="text-center my-0">{recipesdata.data.cooktime} min.</p>
              </div>
              <div className="">
                <img src={Portions} alt="Porciones" className="h-10 mx-auto" />
                <p className="text-center my-0">Porciones</p>
                <p className="text-center my-0">{recipesdata.data.servings1}</p>
              </div>
            </div>

        <h3 className="text-center my-4">Información Nutricional (por porción)</h3>
      
        <div className="grid md:grid-cols-2 pl-2">
          <div>
            <p className="my-2">Calorías: {recipesdata.data.calories1} Kcal</p>
            <p className="my-2">Grasas: {recipesdata.data.fat1} g</p>
            <p className="my-2">Carbohidratos: {recipesdata.data.carb1}g</p>
            <p className="my-2">Fibras: {recipesdata.data.fiber1}g</p>
          </div>
          <div>
          <p className="my-2">Proteínas: {recipesdata.data.protein1} g </p>
          <p className="my-2">Vitamina A: {recipesdata.data.VitaminaA} ug </p>
          <p className="my-2">Magnesio: {recipesdata.data.Magnesio} mg </p>
          <p className="my-2">Rac Carb: {recipesdata.data.racCarb}</p>

          </div>
       
      </div>
      </div>
      <div className="flex flex-col max-w-full-xl mx-auto m-0 hidden">
        <p>{recipesdata.data.descriptionB}</p>
      </div>
      <div className="md:flex flex-row justify-center m-6 hidden md:visible">
        <TopHomepage />
      </div>
      <div className="flex flex-row justify-center mt-6 md:hidden ">
        <TopHomepageMob />
      </div>
      <div className="flex flex-row justify-center mt-6 md:hidden ">
              <SubscribePost />
       </div>   
      <div className="pl-6 md:pl-6 lg:pl-12 leading-loose">
        <h2 className="border-b-2 border-gray-400">Ingredientes</h2>
            
            <div className="">
              {recipesdata.data.ingredientes.map((item, i) => (
                <ul key={i} className="m-0">
                  <li className="list-none my-0">{item.ingrediente_name}</li>
                </ul>
              ))}
            </div>
         
          <div className="mb-10">
            <h2 className="border-b-2 border-gray-400">Preparación</h2>
            <table className="table-fixed">
              {recipesdata.data.instrucciones.map((item, index) => (
                <tr key={index} className="hover:bg-themeLighter">
                
                    <td className="w-1/12 font-bold">{index+1}</td>
                
                     <td id={`Paso#${item.id}`} className='my-4'>{item.instruccione.text}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="flex flex-row leading-tight">
              <BookmarkWidget2
                user={user}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
                slug={recipesdata.data.slug}
                title={recipesdata.data.title1.text}
                recipe
              />
                            

              </div>
      
        <div className="md:flex flex-row justify-center m-6 hidden md:visible">
          <RecipeBttmDsktp />
        </div>
        <div className="flex flex-row justify-center mt-6 md:hidden ">
          <RecipeBttmMob />
        </div>
        <div className="flex justify-center">
          <button className="border border-themeBrandColor rounded-full hover:bg-themeBrandColor hover:text-white  mt-4 flex justify-center">
            <Link
              to="/recetas"
              className="link text-themeBrandColor hover:text-white py-1 px-2"
            >
              REGRESAR AL RECETARIO
            </Link>
          </button>
        </div>
      </div>
    </article>
  );

  

  return (
    <Layout>
      <SEO
        title={`${recipesdata.data.title1.text}`}
        date={recipesdata.data.date}
        image={recipesdata.data.image.localFile.childImageSharp.fluid.src}
        description={descSEO}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaRecipe)}
        </script>
      </Helmet>
      <JsonBread
        title={`${recipesdata.data.title1.text}`}
        category={`recetas`}
        slug={`recetas/${recipesdata.data.slug}`}
      ></JsonBread>
      <Hero />

      <div className="grid grid-cols-blog w-full container mx-auto gap-x-4">
      

      {recipesdata.data.privateRecipe ? (
        user ? (
          user === 'unknown' ? (
            ''
          ) : (
            fullRecipe
          )
        ) : (
          <h1 style={{ textAlign: 'center', margin: '0 auto' }}>
            You need to be signed in to view this recipe. <br /> <br />
            Click on top right profile button to login.
          </h1>
        )
      ) : (
        fullRecipe
      )}


<aside className=" hidden md:block md:visible mx-autoleading-losse bg-white my-6">

<SubscribeSide />
          <div className="">
            <Sidebar1Desktop />
          </div>
          
          <Top5Posts />
          <div className="my-3">
            <Halfpage />
          </div>
</aside>
</div>
      <section className="mt-8 border-t-8 border-themeBrandColor">
        <h2 className="text-center my-8">Otras Recetas</h2>
        <div className="m-4 sm:mx-6 flex flex-col md:flex-row items-center justify-center md:items-stretch max-w-full-xl xl:mx-auto">
          {recipesdata.data.related_recipes.map((rel, i) => {
            console.log('Related', rel)
            return(
            <Link to={`/recetas/${rel.related_recipe.uid}`} className={classes.root} key={i}>
              <Card className={classes.card}>
                <CardActionArea style={{ outline: 'none' }}>
                  <CardMedia className={classes.media}>
                    <Image
                      fluid={rel.related_recipe.document.data.image.localFile.childImageSharp.fluid}
                      className={classes.media}
                      alt={rel.related_recipe.document.data.title1.text}
                    />
                  </CardMedia>
                  <CardContent>
                    <h3>{rel.related_recipe.document.data.title1.text}</h3>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          )})}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Recetas(
    $slug1: String
    $rel1: String
    $rel2: String
    $rel3: String
    $fullSlug: String
  ) {
    recipesdata : prismicRecipes(uid: { eq: $slug1 }) {
      slug: uid
      data {
        related_recipes {
          related_recipe {
            id
            uid
            document {
              ... on PrismicRecipes {
                id
                data {
                  title1 {
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
        title1 {
          text
        }
        date
        ingredientes {
          ingrediente_name
        }
        instrucciones {
          instruccione {
            text
          }
        }
        description {
          text
          html
        }
        descriptionb {
          text
          html
        }
        tags {
          recipe_tag
        }
        preptime
        cooktime
        servings1
        calories1
        carb1
        protein1
        fat1
        fiber1
        raccarb
        magnesio
        vitaminaa
        vitamin_a
        private_recipe
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                src
              }
            }
          }
        }
      }
    }
    rel1: recipesJson(slug: { eq: $rel1 }) {
      slug
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    rel2: recipesJson(slug: { eq: $rel2 }) {
      slug
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    rel3: recipesJson(slug: { eq: $rel3 }) {
      slug
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    pageViews(id: { eq: $fullSlug }) {
      allTimeViews
    }
  }
`;

// const Wrapper = styled.section`
//   width: 85vw;
//   margin: 0 auto;
//   margin-bottom: 4rem;
//   display: flex;

//   .top-row {
//     @media (min-width: 992px) {
//       & {
//         width: 92vw;
//       }
//     }
//     @media (min-width: 1170px) {
//       & {
//         max-width: var(--max-width);
//         margin-bottom: 1.5rem;
//       }
//     }
//   }

//   .top-grid {
//     @media (min-width: 992px) {
//       & {
//         width: 92vw;
//       }
//     }
//     @media (min-width: 1170px) {
//       & {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         column-gap: 4rem;
//         max-width: var(--max-width);
//         margin-bottom: 1.5rem;
//       }
//     }
//   }
//   .lower-grid {
//     @media (min-width: 992px) {
//       & {
//         width: 92vw;
//       }
//     }
//     @media (min-width: 1170px) {
//       & {
//         display: grid;
//         grid-template-columns: 1fr 0.7fr;
//         column-gap: 4rem;
//         max-width: var(--max-width);
//       }
//     }
//   }

//   .post-info {
//     margin: 2rem 0 4rem 0;
//     text-align: center;
//     span {
//       background: var(--clr-primary-5);
//       color: var(--clr-white);
//       border-radius: var(--radius);
//       padding: 0.25rem 0.5rem;
//       text-transform: uppercase;
//       letter-spacing: var(--spacing);
//     }
//     h2 {
//       margin: 1.75rem 0;
//       font-weight: 400;
//     }
//     p {
//       color: var(--clr-grey-5);
//     }
//     .underline {
//       width: 5rem;
//       height: 1px;
//       background: var(--clr-grey-9);
//       margin: 0 auto;
//       margin-bottom: 1rem;
//     }
//   }

//   /* Recipes Formatting */

//   .recipe {
//     font-size: 1.25rem;
//     color: black;

//     p {
//       color: black;
//     }

//     h3 {
//       font-size: 1.5rem;
//       text-transform: uppercase;
//       margin-bottom: 1rem;
//       line-height: 1.4;
//       position: relative;
//     }

//     h3:after {
//       display: inline-block;
//       margin-left: 16px;
//       width: 80%;
//       content: '';
//       border-top: 1px solid #eaecf0;
//       position: absolute;
//       top: 50%;
//     }

//     li {
//       padding: 1rem 0 2rem;
//       margin-bottom: 1rem;
//       border-bottom: 1px solid #eaecf0;
//       width: 100%;
//     }
//   }
//   .recipe-summary {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     margin: 10px;
//     text-align: start;
//   }
//   .recipe-prep {
//     width: 100%;
//   }
//   .recipe-details-columns {
//     @media (min-width: 992px) {
//       & {
//         width: 92vw;
//       }
//     }
//     @media (min-width: 1170px) {
//       & {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//         flex-wrap: wrap;
//         width: 100%;
//         align-items: center;
//       }
//     }
//   }

//   .recipe-details-columns-item {
//     overflow: hidden;
//     box-shadow: 3px 3px 3px 3px #9e9e9e;
//     display: flex;
//     justify-content: space-around;
//     margin: 0rem 0px;
//     max-height: 100px;
//     max-width: 150px;
//   }

//   .recipe-ingredients {
//     width: 40%;
//   }

//   .recipe-image {
//     border-radius: 50%;
//   }

//   .img {
//     max-width: 100%;
//     max-height: 100%;
//   }

//   .shadow-box {
//     height: 60px;
//   }

//   @media (min-width: 992px) {
//     & {
//       width: 92vw;
//       flex-direction: column;
//       flex-wrap: wrap;
//     }
//   }
//   @media (min-width: 1170px) {
//     & {
//       display: flex;
//       max-width: var(--max-width);
//       flex-direction: column;
//       flex-wrap: wrap-reverse;
//     }
//   }
// `

// <BackgroundImage
//   fluid={image.childImageSharp.fluid}
//   className="w-full"
// >
//   text should go here
// </BackgroundImage>

export default RecipeTemplate1;
