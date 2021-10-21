import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  table {
    border-spacing: 10px;
    border: 1 px solid white;
    width: 100%;
  }
  table thead {
    border-bottom: 5px solid red;
  }

  table tr:nth-child(even) {
    background: #ccc;
  }
  .app,
  .containers {
    width: 100%;
    height: 100%;
  }
  .containers {
    font-size: 16px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const GuiaFrutas= () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                Frutas - Sin Gluten
                </th>
                <th colspan="1" role="columnheader">
                Frutas – Pueden tener Gluten
                </th>
                <th colspan="1" role="columnheader">
                Frutas – Con Gluten
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td>Toda la fruta y frutos secos crudos</td>
        <td>Frutos secos fritos y tostados con sal</td>
        <td>Frutas secas enharinadas</td>
    </tr>
   
    </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
