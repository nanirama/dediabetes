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

export const GuiaLacteos = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                Productos Lacteos – Sin Gluten
                </th>
                <th colspan="1" role="columnheader">
                Productos Lacteos – Pueden tener Gluten
                </th>
                <th colspan="1" role="columnheader">
                Productos Lacteos – Con Gluten
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td>Cuajada</td>
        <td>Batidos De Leche Preparados</td>
        <td>Cereales Con Gluten</td>
    </tr>
    <tr>
        <td>Nata</td>
        <td>Cremas</td>
        <td>Galletas Con Gluten</td>
    </tr>
    <tr>
        <td>Quesos</td>
        <td>Flanes</td>
        <td>Yogur Con Malta</td>
    </tr>
    <tr>
        <td>Requesón</td>
        <td>Pudding</td>
        <td></td>
    </tr>
    <tr>
        <td>Yogures Naturales</td>
        <td>Quesos Fundidos De Untar Y De Sabores (En Porciones)</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Yogures De Sabores Y Con Trocitos De Fruta</td>
        <td></td>
    </tr>
    </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
