import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Image from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';

const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
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
    allFile(filter: {relativePath: {regex: "/standard_featured/"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;


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




export default function Top4PostsImages() {
  const {
    allMdx: { nodes: allPosts },
    allPageViews: { nodes: allViews },
    allFile: {nodes: standardImage}
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
      3
    )
  );

  
  // let featimage
  // if (posts[0].frontmatter.featuredImage.childImageSharp.fluid) featimage=posts[0].frontmatter.featuredImage.childImageSharp.fluid
   
  // else 
   
  //  featimage=standardImage.childImageSharp.fluid

  return (
    <div className="mt-6 border-t-8 border-themeBrandColor">
      <h2 className="text-center my-8">Artículos Populares</h2>
      <div className="grid md:grid-cols-3 gap-6 border-gray-300 mx-4"> 
        {posts.map((post, i) => (
          <Card className="">
          
          <CardContent>
        
          <Link
            to={`/${post.frontmatter.slug}/`}
            key={i}
            className=" mb-4 capitalize block text-sm"
          >
            
            {post.frontmatter.featuredImage &&  <Image fluid={post.frontmatter.featuredImage.childImageSharp.fluid}/>}
            
            
            
           <h3 className="mb-4">{post.frontmatter.title}</h3>
            
          </Link>
 
          </CardContent>
          
        </Card>
        ))}
  
          
  
  
  

      </div>
     
      
    </div>
  );
}
