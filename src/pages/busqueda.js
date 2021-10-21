import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Index } from 'elasticlunr';

const Result = styled.div`
  ${tw`mb-6`}
  & {
    h3 {
      ${tw`text-4xl`}
    }
    p {
      ${tw`-mb-2`}
    }
    a {
      ${tw`hover:text-themeBrandColor`}
    }
  }
`;

const Busqueda = ({ data }) => {
  const [term, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const index = Index.load(data.siteSearchIndex.index);

  const search = e => {
    const query = e.target.value;
    const results = index.search(query, { expand: true }).map(({ ref }) => {
      return index.documentStore.getDoc(ref);
    });

    setQuery(query);
    setResults(results);
  };

  return (
    <Layout>
      {/* <div className="justify-center h-screen mt-40 overflow-scroll grid grid-rows-2 md:grid-cols-2 divide-x-4"> */}
      <div className="mt-12">
        <div className="text-center">
          <h1>Busqueda de Contenido</h1>
          <div className="mt-6">
            <form>
              <input
                className="rounded outline-none border-2 border-themeBrandColor p-2"
                type="text"
                value={term}
                onChange={search}
                placeholder="Termino de búsqueda"
              />
            </form>
          </div>
        </div>
        <div className="justify-start max-w-xl p-6 m-auto overflow-x-auto">
          {results.map(result => (
            <div key={result.id}>
              <Result>
                <h4>{result.title}</h4>
                <p>{result.excerpt}</p>
                <a className="block mt-4" href={`/${result.path}`}>
                  Sigue leyendo
                </a>
              </Result>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Busqueda;

export const query = graphql`
  {
    siteSearchIndex {
      index
    }
    allMdx {
      nodes {
        frontmatter {
          slug
          title
        }
        excerpt
      }
    }
  }
`;
