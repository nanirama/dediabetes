import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Disclosure } from '../blogsupport/Disclosure.js';
import BlogBttmDsktp from '../components/Advertising/BlogBttmDsktp';
import BlogBttmMob from '../components/Advertising/BlogBttmMob';
import BlogTopDsktp from '../components/Advertising/BlogTopDsktp';
import Halfpage from '../components/Advertising/Halfpage';
import Sidebar1Desktop from '../components/Advertising/Sidebar1Desktop';
import TopBlogMob from '../components/Advertising/TopBlogMob';
import AuthorName from '../components/AuthorName';
import Avatar from '../components/Avatar';
import BookmarkWidget2 from '../components/BookmarkWidget2';
import useFirebase from '../components/firebase/useFirebase';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PostCategoryDisplay from '../components/PostCategoryDisplay';
import ASEO from '../components/SEO/SeoArticle';
import PostOptin from '../components/Subscribe/PostOptin';
import Top5Recipes from '../components/Top5Recipes';
import Top5PostsImage from '../components/Top5PostsImage';
import Verificado from '../components/Verificado';
import experts from '../data/experts.json';
import Image from 'gatsby-image';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 250,
    marginBottom: '1rem',
    '@media (min-width: 768px)': {
      marginRight: '1.5rem',
      maxWidth: 'calc(31.5%)',

      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MainBody = styled.div`
  a {
    color: #eb4a4b;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: {
        title,
        // category,
        date,
        lastmodified,
        slug,
        description,
        featuredImage,
        featuredArtist,
        featuredAlt,
        imageFB,
        verified,
        authorID,
        expertID,
        language,
        categories,
        privatePost,
      },
      body,
      fields: {
        readingTime: { minutes },
      },
    },
    related1,
    related2,
    related3,
    pageViews,
  } = data;

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
                user.posts.filter(post => post.slug === slug).length > 0
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
  }, [auth, db, slug]);

  const timeRead = Math.round(minutes);
  const classes = useStyles();
  const expert = experts.filter(expert => expert.id === expertID);

  const imageFB2 = imageFB ? `${imageFB.childImageSharp.gatsbyImageData.images.fallback.src}` : ""


const imageFeatured = featuredImage
  ? `${featuredImage.childImageSharp.gatsbyImageData.images.fallback.src}`
  : '';

  const imageFacebook = (imageFB2 == "" && imageFeatured != "") ? imageFeatured : imageFB2 ;

  const fullPost = (
    <div>
      <div className="grid grid-cols-blog w-full container mx-auto gap-x-4">
        <article className="col-span-2 md:col-span-1 mx-autoleading-losse my-6 xl:px-24">

          <div className="flex flex-col min-h-64 bg-white p-6 md:px-6 lg:px-12">
          <div className="mt-6 flex flex-row gap-2">
          <span className="capitalize">{date}</span>
          <div>
          {categories &&
                  categories.map((category, i) => (
                    <PostCategoryDisplay key={i} category={category} />
                  ))}

          </div>

              </div>
            <div className="flex flex-col flex-wrap">
              <div className="sm:flex py-2">
                <h1 className="leading-none capitalize">{title}</h1>
                {verified ? <Verificado /> : ''}
              </div>

              <div className="sm:flex items-center clear-both mb-6">
                <Avatar id={authorID} />
                <div className="flex flex-col mt-2 sm:mt-0">
                  <div className="leading-6 mt-6">
                    {authorID ? (
                      <AuthorName authorID={authorID} />
                    ) : (
                      <span>Dediabetes</span>
                    )}
                    
                    <span className="italic"> • {timeRead}min</span>
                    <span>
                      {pageViews && pageViews.allTimeViews
                        ? ` • ${pageViews.allTimeViews} views`
                        : ''}
                    </span>
                  </div>
                  {verified ? (
                    <p className="mt-0 leading-6">
                      Revisado por{' '}
                      <Link
                        to="/experts/"
                        className="underline hover:text-red-600"
                      >
                        {expert[0].name},{expert[0].certifications}
                      </Link>
                    </p>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="flex flex-row leading-tight">
              <BookmarkWidget2
                user={user}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
                slug={slug}
                title={title}
              />
              </div>
            </div>
          </div>
          <div className=" xl:-mx-24 leading-3">
            

                            {
                    featuredImage && (
                      <Image
                        fluid={featuredImage.childImageSharp.fluid}
                        alt={featuredAlt}
                      
                      />

                    )
                  }
   
                  {
                    featuredArtist && (
                  <p className='text-xs text-center -mt-1'>Imagen de {featuredArtist}</p>
                    )
                  }


          </div>
    
          <div className="md:flex flex-row justify-center mt-6 -ml-6 hidden md:visible clear-both">
              <BlogTopDsktp />
            </div>
            <div className="flex flex-row justify-center mt-6 md:hidden ">
              <TopBlogMob />
            </div>    
         
  
          <div className="clear-both">
            <MainBody className="-mt-4 px-4 md:px-6 lg:px-12 bg-white">
            <div className="flex flex-row justify-center mt-6">
              <PostOptin />
            </div>   
              <MDXRenderer>{body}</MDXRenderer>
            </MainBody>
            <div className="md:px-6 lg:px-12 mt-8 px-2 leading-tight"> <BookmarkWidget2
                user={user}
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
                slug={slug}
                title={title}
              /></div>
           
            <Disclosure />
            

          </div>
          <div className="md:flex flex-row justify-center -ml-6 hidden md:visible">
            <BlogBttmDsktp />
          </div>
          <div className="flex flex-row justify-center mt-6 md:hidden ">
            <BlogBttmMob />
          </div>
        </article>
        <aside className=" hidden md:block md:visible mx-autoleading-losse bg-white my-6">
          <div className="">
            <Sidebar1Desktop />
          </div>
          
          <Top5Recipes />
          <div className="my-3">
            <Halfpage />
          </div>
   
        </aside>
      </div>
      <section className="mt-6 border-t-8 border-themeBrandColor">
        <h2 className="text-center my-8">Artículos Relacionados</h2>
        <div className="m-2 mt-4 sm:mx-4 flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center  max-w-full-xl xl:mx-auto">
          {related1 &&
            related2 &&
            related3 &&
            [related1, related2, related3].map((related, i) => (
              <Card className={classes.root} key={i}>
                <CardContent>
                  <Link to={`/${related.frontmatter.slug}`}>
                    <h3 className="mb-4">{related.frontmatter.title}</h3>
                  </Link>
                  <p className="m-0">{related.frontmatter.description}</p>
                </CardContent>
                <CardActions>
                  <Link to={`/${related.frontmatter.slug}`}>
                    <Button size="small">Sigue leyendo</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
        </div>
      </section>
      <Top5PostsImage/>
    </div>
  );
  return (
    <Layout>
      <ASEO
        title={`${title}`}
        date={date}
        description={`${description}`}
        article={true}
        lastmodified={lastmodified}
        authorID={authorID}
        language={language}
        featuredImage={imageFeatured}
        imageFB={imageFacebook}
        
      />

      <Hero />

      {privatePost ? (
        user ? (
          user === 'unknown' ? (
            ''
          ) : (
            fullPost
          )
        ) : (
          <h1 style={{ textAlign: 'center', margin: '0 auto' }}>
            You need to be signed in to view this post. <br /> <br />
            Click on top right profile button to login
          </h1>
        )
      ) : (
        fullPost
      )}
    </Layout>
  );
};

export const query = graphql`
  query postQuery(
    $slug: String
    $related1: String
    $related2: String
    $related3: String
    $fullSlug: String
  ) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      fields {
        readingTime {
          minutes
        }
      }
      
      frontmatter {
        privatePost
        slug
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData(width: 1200, layout: FIXED, formats: JPG)
          }
        }
        imageFB {
          childImageSharp {
            gatsbyImageData(width: 1200, layout: FIXED, formats: JPG)
          }
        }
        date(formatString: "MMM DD, YYYY", locale: "es-ES")
        lastmodified
        featuredAlt
        featuredArtist
        category
        description
        verified
        authorID
        expertID
        categories
        language
      }
    }
    related1: mdx(frontmatter: { slug: { eq: $related1 } }) {
      frontmatter {
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    related2: mdx(frontmatter: { slug: { eq: $related2 } }) {
      frontmatter {
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    related3: mdx(frontmatter: { slug: { eq: $related3 } }) {
      frontmatter {
        slug
        title
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    pageViews(id: { eq: $fullSlug }) {
      allTimeViews
    }
  }
`;

export default PostTemplate;

ASEO.propTypes = {
  src: PropTypes.string,
  imageFacebook: PropTypes.string,
  imageFeatured: PropTypes.string,
};

ASEO.defaultProps = {
  src: null,
  imageFacebook: null,
  imageFeatured: null,
};
