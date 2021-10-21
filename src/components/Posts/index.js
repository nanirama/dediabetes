import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import PostDisplayNoExc from '../PostDisplayNoExc';

const Heading = styled.h1`
  ${tw`font-bold text-4xl text-center`}
`;

const Posts = ({ posts, title }) => {
  return (
    <section className="mt-4">
      <Heading className="leading-snug mb-4">{title}</Heading>
      <div className="flex flex-col flex-wrap max-w-full">
        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border-gray-300 lg:mx-4">
          {posts.map((post, i) => {
            return <PostDisplayNoExc key={i} {...post} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default Posts;
