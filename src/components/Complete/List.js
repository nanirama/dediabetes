import React from 'react'

const UList = ({ children }) => {
  return <ul className="list-disc">{children}</ul>
}

const OList = ({ children }) => {
  return <ul className="list-decimal">{children}</ul>
}

export default { UList, OList }
