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

export const Hinojo2 = () => {
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
                <th colspan="1" role="columnheader">
                  Calificación como fuente del nutriente
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell">Vitamina C</td>
                <td role="cell">10.44 mg</td>
                <td role="cell">14</td>
                <td role="cell">excelente</td>
              </tr>
              <tr role="row">
                <td role="cell">Fibra</td>
                <td role="cell">2.70 g</td>
                <td role="cell">11</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Potasio</td>
                <td role="cell">360.18 mg</td>
                <td role="cell">10</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Molibdeno</td>
                <td role="cell">4.35 mcg</td>
                <td role="cell">10</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Manganeso</td>
                <td role="cell">0.17 mg</td>
                <td role="cell">9</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Cobre</td>
                <td role="cell">0.06 mg</td>
                <td role="cell">7</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Fósforo</td>
                <td role="cell">43.50 mg</td>
                <td role="cell">6</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Folato</td>
                <td role="cell">23.49 mcg</td>
                <td role="cell">6</td>
                <td role="cell">muy buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Calcio</td>
                <td role="cell">42.63 mg</td>
                <td role="cell">4</td>
                <td role="cell">buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Acido Pantoténico</td>
                <td role="cell">0.20 mg</td>
                <td role="cell">4</td>
                <td role="cell">buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Magnesio</td>
                <td role="cell">14.79 mg</td>
                <td role="cell">4</td>
                <td role="cell">buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Hierro</td>
                <td role="cell">0.64 mg</td>
                <td role="cell">4</td>
                <td role="cell">buena</td>
              </tr>
              <tr role="row">
                <td role="cell">Vitamin B3</td>
                <td role="cell">0.56 mg</td>
                <td role="cell">4</td>
                <td role="cell">buena</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
