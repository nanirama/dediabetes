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

export const VerdurasAzucarBajo2 = () => {
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
            <tr><td>Coliflor</td><td>1.9</td></tr>
 <tr><td>Repollo</td><td>3.2</td></tr>
 <tr><td>Berro</td><td>4.4</td></tr>
 <tr><td>Bok Choy</td><td>1.18</td></tr>
 <tr><td>Brócoli</td><td>1.7</td></tr>
 <tr><td>Coles de Bruselas</td><td>1.19</td></tr>
 <tr><td>Lechuga</td><td>1.97</td></tr>
 <tr><td>Espinaca</td><td>0.42</td></tr>
 <tr><td>Berro</td><td>0.2</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
