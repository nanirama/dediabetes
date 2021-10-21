import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'twin.macro'

const query = graphql`
  {
    file(relativePath: { eq: "cover-dieta-diabetes.jpg" }) {
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
  console.log(file.childImageSharp.fluid)
  return (
    <div className="flex flex-col">
      <Image className="align-self-center">
        <Img
          fluid={file.childImageSharp.fluid}
          alt="Portada dieta de diabetes"
        />
      </Image>

      <div className="rounded-lg m-6 p-6 text-center">
        <h2>Guia de Diabetes</h2>
        La guía de dieta para diabeticos que te permite alimentarte de forma
        nutritiva y gratificante, de manera que puedas controlar los niveles de
        azúcar en sangre (glicemia) así como tu peso corporal.
        <div className="flex justify-around p-4">
          <button className="bg-gradient-to-b from-blue-300 to-blue-600 hover:from-blue-700 px-8 py-2 capitalized rounded-full text-black font-bold">
            <Link to="/guias/guia-de-diabetes/">Mas información</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product1
