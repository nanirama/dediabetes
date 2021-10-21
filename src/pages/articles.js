import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import elasticlunr from 'elasticlunr';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import SEO from '../components/SEO';
import CategoryName from '../components/CategoryName'

const useStyles = makeStyles({
  search: {
    width: '100%',
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

export default function Articles({ location }) {
  const [selectedCategories, setSelectedCategories] = React.useState(['All']);
  const [numDisplayedPosts, setNumDisplayedPosts] = React.useState(6);
  const [searchedText, setSearchedText] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  const [displayedPosts, setDisplayedPosts] = React.useState([]);

  const allPostsData = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMM DD, YYYY", locale: "es-ES")
            categories
            type
            authorID
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___categories)
      }
      allCategoriesJson {
        nodes {
          label
          slug
        }
      }
    }
  `);

  const allPosts = allPostsData.allMdx.nodes;
  const distinctCatgs = allPostsData.categories.distinct;
  const allCategoriesData = allPostsData.allCategoriesJson.nodes;

  React.useEffect(() => {
    let allCategories = [];

    distinctCatgs.forEach(category =>
      allCategoriesData.forEach(catg => {
        if(catg.slug === category) {
          allCategories.push(catg)
        }
      })
    );

    allCategories = new Set(allCategories);
    setCategories([{
      label: 'All',
      slug: 'All'
    }, ...allCategories]);
  }, [allPosts]);

  const searchIndex = React.useRef(null);
  const postsInCategory = React.useRef(null);

  React.useEffect(() => {
    // displays posts based on selected category
    const filteredPosts = posts => {
      if (
        selectedCategories.length < 0 ||
        (selectedCategories.length === 1 && selectedCategories[0] === 'All')
      )
        return posts;
      else
        return posts.filter(post => {
          let passedTests = 0;
          if (!post.frontmatter.categories) return false;
          selectedCategories.forEach(category => {
            if (!post.frontmatter.categories.includes(category)) return;
            else passedTests += 1;
          });
          return passedTests === selectedCategories.length;
        });
    };
    postsInCategory.current = filteredPosts(allPosts);
    setDisplayedPosts(postsInCategory.current);

    // creates posts search index based on selected category or categories
    searchIndex.current = elasticlunr(function () {
      this.setRef('excerpt');
      this.addField('title');
      this.addField('excerpt');
      postsInCategory.current.forEach(function (doc) {
        this.addDoc({
          title: doc.frontmatter.title,
          excerpt: doc.excerpt,
        });
      }, this);
    });
  }, [selectedCategories, allPosts]);

  const categorySelected = eValue => {
    setNumDisplayedPosts(6);

    if (eValue === 'All') return setSelectedCategories(['All']);
    let filteredCategories = [...selectedCategories];
    if (
      eValue !== 'All' &&
      filteredCategories.length === 1 &&
      filteredCategories[0] === 'All'
    )
      filteredCategories.pop();
    if (filteredCategories.includes(eValue)) {
      filteredCategories.splice(filteredCategories.indexOf(eValue), 1);
      filteredCategories.length === 0
        ? setSelectedCategories(['All'])
        : setSelectedCategories([...filteredCategories]);
    } else setSelectedCategories([...filteredCategories, eValue]);
  };
  const searched = e => {
    setSearchedText(e.target.value);
    setNumDisplayedPosts(6);
    if (!e.target.value) setDisplayedPosts(postsInCategory.current);
    else {
      let results = searchIndex.current.search(e.target.value, {
        expand: true,
      });
      setDisplayedPosts(
        results
          .map(result =>
            postsInCategory.current.filter(post => post.excerpt === result.ref)
          )
          .flat()
      );
    }
  };
  const classes = useStyles();

  const locationSearchTerm =
    typeof window !== 'undefined' && location.state
      ? location.state.searchTerm
      : '';

  React.useEffect(() => {
    if (locationSearchTerm && searchIndex.current)
      searched({ target: { value: locationSearchTerm } });
  }, [locationSearchTerm]);


  return (
    <Layout>
      <SEO
        title={`Archivo de Articulos`}
        description={`Archivo de Articulos de DeDiabetes`}
      />
      <div className=" grid grid-cols-8 w-full auto-rows-min">
        <p
          style={{ color: 'grey' }}
          className="col-start-1 lg:col-start-2 col-span-8 lg:col-span-6 mb-0 ml-6 my-6 self-end"
        >
          Seleccione una o varias categorías para filtrar la lista de artículos.
        </p>
        <div className="col-start-1 lg:col-start-2 col-span-8 lg:col-span-6 mx-6">
          {categories.map((category, i) => (
            <button
              value={category.slug}
              onClick={() => categorySelected(category.slug)}
              key={i}
              className={clsx(
                'border-2 border-themeBrandColor rounded hover:bg-themeBrandColor hover:text-white px-3 py-1 mb-2 mr-2 focus:outline-none',
                !selectedCategories.includes(category.slug) &&
                  'text-themeBrandColor',
                selectedCategories.includes(category.slug) &&
                  'bg-themeBrandColor text-white'
              )}
            >
           {category.label}
            </button>
          ))}
        </div>
        <form
          onSubmit={searched}
          className="col-start-1 lg:col-start-2 col-span-8 lg:col-span-6 my-2 mt-4 mx-6 flex"
        >
          <TextField
            id="search"
            label="Buscar la lista filtrada..."
            variant="outlined"
            value={searchedText}
            onChange={searched}
            className={`${classes.search} `}
          />
        </form>
      </div>
      <div className="md:mx-48">
      {displayedPosts && (
        <Posts posts={displayedPosts.slice(0, numDisplayedPosts)}/>
      )}
      {displayedPosts.length > numDisplayedPosts && (
        <button
          onClick={() => setNumDisplayedPosts(posts => posts + 5)}
          className="border-2 border-themeBrandColor rounded text-themeBrandColor hover:bg-themeBrandColor hover:text-white px-3  my-2 ml-auto mr-auto focus:outline-none block"
        >
          Carga Más
        </button>
      )}
      </div>

    </Layout>
  );
}
