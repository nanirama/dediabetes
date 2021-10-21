import { Index } from 'elasticlunr';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

export default function NavSearchResults({ searchTerm }) {
  let siteIndex = useStaticQuery(graphql`
    {
      siteSearchIndex {
        index
      }
    }
  `);
  const index = React.useRef(null);
  index.current = Index.load(siteIndex.siteSearchIndex.index);
  const [results, setResults] = React.useState([]);
  const showResults = React.useRef(null);

  React.useEffect(() => {
    const results = index.current
      .search(searchTerm, { expand: true })
      .map(({ ref }) => {
        return index.current.documentStore.getDoc(ref);
      });
    showResults.current = results.length;
    setResults(results);
  }, [searchTerm]);

  if (showResults.current < 1)
    return <span style={{ width: 0, height: 0 }}></span>;

  return (
    <>
      <div className="p-6 pt-0">
        {results.slice(0, 3).map((result, i) => (
          <div key={i} className="mt-12 text-white">
            <h4 className="text-white">{result.title}</h4>
            <p>{result.excerpt}</p>
            <Link className="block mt-4 underline" to={`/${result.path}`}>
              Sigue leyendo
            </Link>
          </div>
        ))}
      </div>
      <Link to="/articles" state={{ searchTerm }} className="text-center block">
        <button
          className="border-none rounded bg-white text-themeBrandColor px-4 py-2 mb-10 text-base whitespace-nowrap"
          style={{ whiteSpace: 'nowrap' }}
        >
          See all search results &#8594;
        </button>
      </Link>
    </>
  );
}
