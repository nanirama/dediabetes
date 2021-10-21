import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CustomList from '../components/CustomList';

const query = graphql`
  {
    allFile(filter: { relativePath: { regex: "/.*cover.*/" } }) {
      nodes {
        absolutePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const LandingBox = styled.div`
  box-shadow: ${props => (props.shadow ? '3px 3px 3px 3px #9E9E9E' : '')};
  ${tw`flex flex-col md:flex-row p-10 justify-center justify-items-stretch`}

  ${tw`my-8`};
  .col1 {
    ${tw`md:w-1/4 content-center place-items-center`}
  }
  .col2 {
    ${tw`md:w-3/4 md:pl-10`}
  }
`;

const Box2Col = ({ cover, alt, items, icon, product, shadow }) => {
  const data = useStaticQuery(query);

  const ImgBlanda = data.allFile.nodes.find(x =>
    x.absolutePath.includes('cover-dieta-blanda')
  );

  const ImgDiab = data.allFile.nodes.find(x =>
    x.absolutePath.includes('cover-dieta-diabetes')
  );

  const ImgVeg = data.allFile.nodes.find(x =>
    x.absolutePath.includes('cover-dieta-vegetariana')
  );

  const ImgGes = data.allFile.nodes.find(x =>
    x.absolutePath.includes('cover-dieta-gestacional')
  );

  const ImgPlan = data.allFile.nodes.find(x =>
    x.absolutePath.includes('cover-plan-comidas')
  );

  const Imgq =
    product === 'blanda'
      ? ImgBlanda
      : product === 'diabetes'
      ? ImgDiab
      : product === 'gestacional'
      ? ImgGes
      : product === 'vegetariana'
      ? ImgVeg
      : product === 'plan'
      ? ImgPlan
      : ImgDiab;

  if (shadow === 'yes') {
    return (
      <LandingBox shadow>
        <div className="col1">
          <Img
            fluid={Imgq.childImageSharp.fluid}
            alt={alt}
            className="justify-self-center"
          />
        </div>
        <div className="col2">
          <CustomList icon={icon} items={items} />
        </div>
      </LandingBox>
    );
  }

  if (shadow === 'no') {
    return (
      <LandingBox>
        <div>
          <Img fluid={Imgq.childImageSharp.fluid} alt={alt} />
        </div>
        <div className="col2">
          <CustomList icon={icon} items={items} />
        </div>
      </LandingBox>
    );
  } else {
    return (
      <LandingBox>
        <div>
          <Img fluid={Imgq.childImageSharp.fluid} alt={alt} />
        </div>
        <div className="col2">
          <CustomList icon={icon} items={items} />
        </div>
      </LandingBox>
    );
  }
};
export default Box2Col;
