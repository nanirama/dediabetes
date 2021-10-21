import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  table {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  table thead {
    font-weight: bold;
    background: #d3d3d3;
  }

  table th {
    border: 2px solid black;
  }

  table td {
    border: 2px solid black;
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

export const ExamSangre = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table class="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th title="Field #1">Fecha y Hora de toma</th>
                <th title="Field #2">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><br /></td>
                <td><br /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
