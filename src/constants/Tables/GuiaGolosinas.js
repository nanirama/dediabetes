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

export const GuiaGolosinas= () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                Golosinas y edulcorantes – Sin Gluten
                </th>
                <th colspan="1" role="columnheader">
                Golosinas y edulcorantes – Pueden tener Gluten
                </th>
                <th colspan="1" role="columnheader">
                Golosinas y edulcorantes – Con Gluten
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td>Aceites Vegetales</td>
        <td>Cubitos De Caldo</td>
        <td>Salsa Besamel</td>
    </tr>
    <tr>
        <td>Manteca De Cerdo</td>
        <td>Extractos De Levadura</td>
        <td>Salsas Preparadas</td>
    </tr>
    <tr>
        <td>Mantequilla</td>
        <td>Levadura Deshidratada En Polvo</td>
        <td></td>
    </tr>
    <tr>
        <td>Margarina</td>
        <td>Levadura Deshidratada Granulada</td>
        <td></td>
    </tr>
    <tr>
        <td>Vinagre</td>
        <td>Pimentón</td>
        <td></td>
    </tr>
    <tr>
        <td>Especias Puras</td>
        <td>Preparados De Especias</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Salsas De Soja</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Salsas Preparadas</td>
        <td></td>
    </tr>
    </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
