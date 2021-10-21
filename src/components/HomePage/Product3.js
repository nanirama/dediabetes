import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'twin.macro'

const query = graphql`
  {
    file(relativePath: { eq: "cover-dieta-vegetariana.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image = styled.div`
  ${tw`overflow-hidden rounded-lg w-1/2 place-self-center`}
`

const Product1 = () => {
  const { file } = useStaticQuery(query)
  return (
    <div className="flex flex-col">
      <Image className="align-self-center">
        <Img
          fluid={file.childImageSharp.fluid}
          alt="Portada guia vegetariana de diabetes"
        />
      </Image>

      <div className="rounded-lg m-6 p-6 text-center">
        <h2>Guia Vegetariana de Diabetes</h2>
        Descubre como lograr un consumo saludable de proteinas siguiendo una
        dieta vegetariana Implementa tu dieta vegetarian inmediatamente, con
        este plan de alimentación de 7 días
        <div className="flex justify-around p-4">
          <button className="bg-gradient-to-b from-blue-300 to-blue-600 hover:from-blue-700 px-8 py-2 capitalized rounded-full text-black font-bold">
            <Link to="/guias/guia-vegetariana-diabetes/">Mas información</Link>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Product1
