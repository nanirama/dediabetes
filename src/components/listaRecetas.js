import React from 'react'
import CustomList from './CustomList'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const listaRecetas =() => {

      const query = graphql`
    {
      allRecipesJson {
        nodes {
          ingredientes
          instrucciones {
            id
            paso
          }
          preptime
          protein
          racCarb
          servings
          title
          tags
        }
      }
    }`

    const data = useStaticQuery(query)

    return (

      <div>

test


      </div>
    )





}

export default listaRecetas


