import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';


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



const Recetas = ({ recipes }) => {
  return (
    <PostBox className="bg-white leading-3 mx-1 md:mx-3 lg:mx-8 mt-4">
      <h2 className="text-center text-4xl">Ultimas Recetas</h2>
      <div className="">
<article className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 border-gray-300">
        {recipes.map((item, index) => {
          console.log('Items item', item)
          return(
          <div
            key={index}
            className="bg-white leading-loose p-8 lg:p-4 items-stretch border-2 border-solid"
          >
            <Link
              to={`/recetas/${item.node.slug}/`}
              className="h-16 text-lg font-bold hover:text-themeBrandColor"
            >
                <Image
                fluid={item.node.data.image.localFile.childImageSharp.fluid}
                style={{minHeight: 'calc(40vh - 3rem)' }}
                className="rounded-lg"
                alt={item.title}
              />
              {item.node.data.title.text}
            </Link>
          </div>
        )})}
      </article>

        
      </div>
      
      <div className="flex items-center justify-center p-8 text-2xl">
        <button className="border-2 border-themeBrandColor rounded hover:bg-themeBrandColor hover:text-white p-4 mb-2 mr-2 focus:outline-none">
          <Link to="/recetas/">Mas Recetas</Link>
        </button>
      </div>
    </PostBox>
  );
};

export default Recetas;
