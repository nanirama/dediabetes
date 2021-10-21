import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AuthorName from './AuthorName';
import Avatar from './Avatar';
import PostCategoryDisplay from './PostCategoryDisplay';

const PostBox = styled.div`
  min-width: 250px;
  max-width: ${({ heroBox }) => (heroBox ? '400px' : '100%')};

  :first-of-type {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    min-width: 300px;
  }

  @media (min-width: 1280px) {
    min-width: 350px;
  }
`;

const AuthorWrapper = styled.div(({ heroBox }) => [
  tw`text-sm md:text-lg  `,
  heroBox && tw`xl:pl-0 xl:pt-4 xl:pb-3`,
  `
  button {
    text-align: left !important;
  }
  @media(min-width: 476px) {
    padding-left: 0.75rem;
  }`,
]);

export default function PostDisplay({ frontmatter, excerpt, heroBox }) {
  const { title, slug, date, categories, type, authorID } = frontmatter;

  return (
    <PostBox
      className={clsx(
        heroBox
          ? 'flex flex-col border-2 px-4 pt-2 bg-white justify-between'
          : 'bg-white border-t border-b mx-1 md:mx-3 px-2 py-6 lg:px-4'
      )}
      heroBox={heroBox}
    >
      <div> 

        <p className=" my-1 ">
          <span className="capitalize mr-3 text-base md:text-md">
            {!type ? 'Articulo' : type}
          </span>{' '}
          <span className="capitalize">{date}</span>
        </p>
        {heroBox &&
          categories &&
          categories.map((category, i) => (
            <div className="inline-block" key={i}>
              <PostCategoryDisplay category={category} />
            </div>
          ))}
        <Link to={`/${slug}/`}>
          <h2 className={clsx(
            heroBox
            ? "hover:text-themeBrandColor my-2 text-md md:text-lg leading-none"
            : "hover:text-themeBrandColor my-2 text-xl md:text-3xl leading-none")}>
            {title}
          </h2>
        </Link>


      </div>

      <div className={clsx(heroBox && '')}>
        <div className="mb-6 items-center flex">
          <Avatar id={authorID} />
          <AuthorWrapper>
            <AuthorName authorID={authorID} />
          </AuthorWrapper>
        </div>

        {excerpt && (
          <div>
            <p className="text-base md:text-lg my-2">{excerpt}</p>
          </div>
        )}
        <Link to={`/${slug}/`} className={clsx(
          heroBox
          ? "hidden"
          : "visible")}>
          <p className="font-bold hover:text-themeBrandColor underline text-base md:text-lg mb-4 mt-2">
            Sigue leyendo
          </p>
        </Link>
      </div>
      {!heroBox && categories && (
        <div className="mb-4 text-sm md:text-base">
          {categories.map((category, i) => (
            <div className=" inline-block" key={i}>
              <PostCategoryDisplay category={category} />
            </div>
          ))}
        </div>
      )}
    </PostBox>
  );
}
