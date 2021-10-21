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

export const NivelGlucosa = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                  Tiempo (minutos)
                </th>
                <th colspan="1" role="columnheader">
                  Valor máximo de glucosa basal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell">En Ayunas</td>
                <td role="cell">105 mg/dl</td>
              </tr>
              <tr role="row">
                <td role="cell">60</td>
                <td role="cell">190 mg/dl</td>
              </tr>
              <tr role="row">
                <td role="cell">120</td>
                <td role="cell">165 mg/dl</td>
              </tr>
              <tr role="row">
                <td role="cell">180</td>
                <td role="cell">145 mg/dl</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
