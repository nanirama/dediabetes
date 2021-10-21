import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import PostDisplay from './PostDisplay';

const Heading = styled.div`
width: 10rem;

@media (min-width: 640px) {
  width: 11rem;
}

@media (min-width: 768px) {
  width: 14.5rem;
}
`;

const HeroBox = () => {
  const herodata = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { frontmatter: { featured: { eq: "yes" } } }) {
          nodes {
            frontmatter {
              type
              title
              slug
              date(formatString: "MMM DD, YYYY", locale: "es-ES")
              categories
              authorID
            }
          }
        }
      }
    `
  );

  return (
    <div className="flex">
      <Heading className="bg-themeBrandColor p-4 sm:p-6 flex">
        <h2 className="m-auto text-white text-lg">Tema de la Semana</h2>
      </Heading>
      <ScrollContainer className="flex" vertical={false}>
        {herodata.allMdx.nodes.map((item, index) => (
          <PostDisplay key={index} frontmatter={item.frontmatter} heroBox />
        ))}
      </ScrollContainer>
    </div>
  );
};
export default HeroBox;
