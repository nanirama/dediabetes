import React from 'react'

const CustomList = ({ icon, items }) => {
  const grid = {
    display: 'grid',
    margin: '1em auto',
    gridTemplateColumns: 'min-content auto',
    gridGap: '1em',
    height: 'auto',
  }
  return (
    <div>
      {items.map(item => (
        <div style={grid}>
          <div>{icon}</div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default CustomList
