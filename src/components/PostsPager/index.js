import React from 'react';
import Pager from '../Pager';
import styled from 'styled-components';
import tw from 'twin.macro';
import PostDisplay from '../PostDisplay';

const Heading = styled.h1`
  ${tw`font-bold text-6xl text-center`}
`;

const PostsPagers = ({ posts, title, pageContext }) => {
  return (
    <section className="mt-10">
      <Heading className="leading-snug mb-10 capitalize">{title}</Heading>
      <div className="grid grid-cols-8 max-w-full">
        {/* posts column */}
        <article className="border-gray-400 col-start-1 col-span-8">
          {posts.map(post => {
            return <PostDisplay key={post.id} {...post} />;
          })}
          <Pager pageContext={pageContext} />
        </article>
      </div>
    </section>
  );
};

export default PostsPagers;
