import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import Img from 'gatsby-image'

const Image = styled.div`
  ${tw`bg-red-200`}
`

const query = graphql`
  {
    file(relativePath: { eq: "logo-small.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

const CenterLogo = () => {
  const { file } = useStaticQuery(query)
  return (
    <div className="grid grid-cols-3 h-24 justify-items-start justify-around align-middle">
      <div className="bg-gray-600 flex justify-self-stretch">1</div>

      <div className=" bg-gray-600">
        <Image className="justify-center">
          <Img
            fluid={file.childImageSharp.fluid}
            alt="DeDiabetes Logo"
            className="justify-self-center"
          />
        </Image>
      </div>
      <div className="flex justify-self-stretch bg-gray-600 items-center">
        3
      </div>
    </div>
  )
}

export default CenterLogo
