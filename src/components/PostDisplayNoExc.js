import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AuthorName from './AuthorName';
import Avatar from './Avatar';
import Image from 'gatsby-image';
import PostCategoryDisplay from './PostCategoryDisplay';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

export default function PostDisplayNoExc({ frontmatter, heroBox }) {
  const { title, slug, date, categories, type, featuredImage, authorID } = frontmatter;

  return (
    <PostBox
      className={clsx(
        heroBox
          ? 'flex flex-col border-2 p-6 bg-white shadow-2xl justify-between'
          : 'bg-white leading-3 mx-1 md:mx-3 px-2 lg:px-4 items-stretch border-2 border-solid'
      )}
      heroBox={heroBox}
    >

      <div className="p-0">
        <p className="mb-1">
          <span className="capitalize mr-3 text-base md:text-lg font-bold mt-10 leading-tight">
            {!type ? 'Articulo' : type}
          </span>{' '}
          <span className="capitalize">{date}</span>
        </p>
        {!heroBox && categories && (
        <div className="mb-4 text-sm md:text-base">
          {categories.map((category, i) => (
            <div className=" inline-block" key={i}>
              <PostCategoryDisplay category={category} />
            </div>
          ))}
        </div>
      )}
      
        <Link to={`/${slug}/`}>
        {featuredImage &&  <Image fluid={featuredImage.childImageSharp.fluid}/>}
          <h2 className="hover:text-themeBrandColor my-4 text-xl leading-none ">
            {title}
          </h2>
        </Link>

        {heroBox &&
          categories &&
          categories.map((category, i) => (
            <div className="inline-block" key={i}>
              <PostCategoryDisplay category={category} />
            </div>
          ))}
      </div>

      <div className={clsx(heroBox && ' mt-4')}>
        <div className="mx-6 my-2 items-center flex">
          <Avatar id={authorID} />
          <AuthorWrapper>
            <AuthorName authorID={authorID} />
          </AuthorWrapper>
        </div>

        {/* {excerpt && (
          <div>
            <p className="text-base md:text-lg">{excerpt}</p>
          </div>
        )} */}
        {/* <Link to={`/${slug}/`}>
          <p className="font-bold hover:text-themeBrandColor underline text-base md:text-lg mb-6">
            Sigue leyendo
          </p>
        </Link> */}
      </div>

    </PostBox>
  );
}
