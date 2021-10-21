import React, { useState } from 'react';
import styled from 'styled-components';
import Cardpost from './Post';

const Wrapper = styled.div`
  margin: 32px 16px 16px;

  @media (min-width: 1024px) {
    max-width: 1270px;
    margin: 32px auto;
  }
`;

const Nothing = styled.p`
  text-align: center;
  font-style: italic;
`;

const Perfil = ({ userContent, popularContent }) => {
  const [selectedDiv, setSelectedDiv] = useState('0');

  return (
    <Wrapper className="flex flex-col p-8 shadow-2xl bg-white overflow-hidden">
      <div className="perfil-toggle flex-wrap">
        <button
          onClick={() => {
            setSelectedDiv('0');
          }}
          className={selectedDiv === '0' ? 'toggled' : 'not-toggled'}
        >
          TUS ARTICULOS
        </button>
        <button
          onClick={() => {
            setSelectedDiv('1');
          }}
          className={selectedDiv === '1' ? 'toggled' : 'not-toggled'}
        >
          TUS RECETAS
        </button>
        <button
          onClick={() => {
            setSelectedDiv('2');
          }}
          className={selectedDiv === '2' ? 'toggled' : 'not-toggled'}
        >
          ARTICULOS POPULARES
        </button>
        <button
          onClick={() => {
            setSelectedDiv('3');
          }}
          className={selectedDiv === '3' ? 'toggled' : 'not-toggled'}
        >
          RECETAS POPULARES
        </button>
      </div>

      <div>
        {selectedDiv === '0' ? (
          <div className="perfil-articles mt-6">
            {userContent.posts.length > 0 ? (
              userContent.posts.map((post, i) => {
                return <Cardpost key={i} slug={post.slug} title={post.title} />;
              })
            ) : (
              <Nothing>No hay artículos favoritos</Nothing>
            )}
          </div>
        ) : selectedDiv === '1' ? (
          userContent.recipes.length > 0 ? (
            <div className="perfil-recipes grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
              {userContent.recipes.map((r, i) => {
                return (
                  <Cardpost
                    key={i}
                    slug={`recetas/${r.slug}`}
                    title={r.title}
                    recipe
                  />
                );
              })}
            </div>
          ) : (
            <Nothing className="my-6">No hay recetas favoritas</Nothing>
          )
        ) : selectedDiv === '2' ? (
          <div className="perfil-articles">
            {popularContent.posts.length > 0 ? (
              popularContent.posts.map((post, i) => {
                return <Cardpost key={i} slug={post.slug} title={post.title} />;
              })
            ) : (
              <Nothing className="mt-6">No hay artículos favoritos</Nothing>
            )}
          </div>
        ) : selectedDiv === '3' ? (
          popularContent.recipes.length > 0 ? (
            <div className="perfil-recipes grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
              {popularContent.recipes.map((r, i) => {
                return (
                  <Cardpost
                    key={i}
                    slug={`recetas/${r.slug}`}
                    title={r.title}
                    recipe
                  />
                );
              })}
            </div>
          ) : (
            <Nothing className="my-6">No hay recetas favoritas</Nothing>
          )
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  );
};

export default Perfil;
