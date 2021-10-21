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

export const Hiper1 = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                  Marca
                </th>
                <th colspan="1" role="columnheader">
                  Generico
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell">Simvastatin Oral</td>
                <td role="cell">Zocor (Genérico)</td>
              </tr>
              <tr role="row">
                <td role="cell">Lipitor Oral (artovastatina)</td>
                <td role="cell">Lipitor (Genérico)</td>
              </tr>
              <tr role="row">
                <td role="cell">Crestor Oral </td>
                <td role="cell">Crestor (Genérico)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
