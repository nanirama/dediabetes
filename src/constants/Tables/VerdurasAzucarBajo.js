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

export const VerdurasAzucarBajo = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                  Vegetales
                </th>
                <th colspan="1" role="columnheader">
                  Contenido de azucar (por 100 gramos)
                </th>
              </tr>
            </thead>
            <tbody>
            <tr><td>Hongos</td><td>1.98</td></tr>
 <tr><td>Pimenton Verde</td><td>2.4</td></tr>
 <tr><td>Esparrago</td><td>1.88</td></tr>
 <tr><td>Apio</td><td>1.34</td></tr>
 <tr><td>Pepino (con concha)</td><td>1.67</td></tr>
 <tr><td>Cebolla</td><td>2.3</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
