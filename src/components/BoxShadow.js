import React from 'react'

const BoxShadow = ({ children }) => {
  const shadow = {
    boxShadow: '3px 3px 3px 3px #9E9E9E',
    display: 'flex',
    margin: '5rem auto',
  }
  return <div style={shadow}>{children}</div>
}

export default BoxShadow
