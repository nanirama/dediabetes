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

export const GuiaPescados = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                Pescado, carne y huevos – Sin Gluten
                </th>
                <th colspan="1" role="columnheader">
                Pescado, carne y huevos – Pueden tener Gluten
                </th>
                <th colspan="1" role="columnheader">
                Pescado, carne y huevos – Con Gluten
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td>Cecina</td>
        <td>Conservas De Carne Con Salsas</td>
        <td>Carne o pescado empanado</td>
    </tr>
    <tr>
        <td>Huevos</td>
        <td>Conservas De Pescado Con Salsas</td>
        <td>Carne o pescado enharinado</td>
    </tr>
    <tr>
        <td>Jamón Cocido Calidad Extra</td>
        <td>Embutidos</td>
        <td>Carne o pescado con salsas con gluten</td>
    </tr>
    <tr>
        <td>Jamón Serrano</td>
        <td>Patés Diversos</td>
        <td></td>
    </tr>
    <tr>
        <td>Mariscos Frescos</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Pescados Frescos Y Congelados Sin Rebozar</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Pescados Y Mariscos En Conserva Al Natural O En Aceite.</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Todo Tipo De Carnes Y Vísceras Frescas</td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
