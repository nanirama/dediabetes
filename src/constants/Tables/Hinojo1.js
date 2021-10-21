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

export const Hinojo1 = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                  Nutriente
                </th>
                <th colspan="1" role="columnheader">
                  Cantidad
                </th>
                <th colspan="1" role="columnheader">
                  (%) Valor Diario
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell">Proteína</td>
                <td role="cell">1.08 g</td>
                <td role="cell">2</td>
              </tr>
              <tr role="row">
                <td role="cell">Carbohidratos</td>
                <td role="cell">6.35 g</td>
                <td role="cell">3</td>
              </tr>
              <tr role="row">
                <td role="cell">Grasa - total</td>
                <td role="cell">0.17 g</td>
                <td role="cell">--</td>
              </tr>
              <tr role="row">
                <td role="cell">Fibra dietética</td>
                <td role="cell">2.70 g</td>
                <td role="cell">11</td>
              </tr>
              <tr role="row">
                <td role="cell">Calorías</td>
                <td role="cell">26.97</td>
                <td role="cell">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
