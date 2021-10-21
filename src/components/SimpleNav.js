import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PostCategoryDisplay from './PostCategoryDisplay';

export default function SimpleNav() {
  return (
    <header
      style={{
        boxShadow: '0 4px 20px 0 rgb(0,0, 0,12%)',
        background: '#fff',
        zIndex: 1,
      }}
    >
      <nav
        className="flex p-4 relative overflow-x-auto whitespace-nowrap justify-center"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#bd7c809f #fcced2e3',
        }}
        id="categoriesNavHideScrollBar"
      >
        <Link
          to="/"
          className="border border-gray-500 rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2 mr-3 text-base "
          style={{ whiteSpace: 'nowrap' }}
        >
          {' '}
          Inicio
        </Link>
        <Link
          to="/articles/"
          className="border border-gray-500 rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2 mr-3 text-base "
          style={{ whiteSpace: 'nowrap' }}
        >
          {' '}
          Articulos
        </Link>
        <Link
          to="/recetas/"
          className="border border-gray-500 rounded hover:bg-themeBrandColor text-themeBrandColor hover:text-white px-2 mr-3 text-base "
          style={{ whiteSpace: 'nowrap' }}
        >
          {' '}
          Recetas
        </Link>
              
      </nav>
    </header>
  );
}
