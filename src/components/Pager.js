import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const Pagerdiv = styled.div`
  column-gap: 1rem;
  ${tw`grid grid-cols-2 font-bold text-xl text-center`}
`

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <Pagerdiv>
      {previousPagePath && (
        <span>
          <button className="bg-red-300 rounded-md p-3 m-3">
            <Link to={`${previousPagePath}/`}> Resultados Anteriores</Link>
          </button>
        </span>
      )}
      {nextPagePath && (
        <span>
          <button className="bg-red-300 rounded-md p-3 m-3">
            <Link to={`${nextPagePath}/`}>Siguientes Resultados </Link>
          </button>
        </span>
      )}
    </Pagerdiv>
  )
}

export default Pager
