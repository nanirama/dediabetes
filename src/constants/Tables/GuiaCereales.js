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

export const GuiaCereales = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                Cereales – Sin Gluten
                </th>
                <th colspan="1" role="columnheader">
                Cereales – Pueden tener Gluten
                </th>
                <th colspan="1" role="columnheader">
                Cereales – Con Gluten
                </th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td>Amaranto</td>
        <td>puré de papas (patatas)</td>
        <td>Avena</td>
    </tr>
    <tr>
        <td>Arroz</td>
        <td>chips de papas (patatas)</td>
        <td>Bulgur</td>
    </tr>
    <tr>
        <td>Goma Guar</td>
        <td>papas (patatas) bravas</td>
        <td>Cebada</td>
    </tr>
    <tr>
        <td>Harina De Algarroba</td>
        <td>arroz inflado</td>
        <td>Centeno</td>
    </tr>
    <tr>
        <td>Maíz</td>
        <td></td>
        <td>Escanda Común</td>
    </tr>
    <tr>
        <td>Mijo</td>
        <td></td>
        <td>Espelta</td>
    </tr>
    <tr>
        <td>Patata</td>
        <td></td>
        <td>Grano De Espelta Verde</td>
    </tr>
    <tr>
        <td>Quinoa</td>
        <td></td>
        <td>Kamut</td>
    </tr>
    <tr>
        <td>Tapioca</td>
        <td></td>
        <td>Sémola De Trigo</td>
    </tr>
    <tr>
        <td>Trigo Sarraceno o Alforfón</td>
        <td></td>
        <td>Trigo</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Trigo Silvestre</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Triticale</td>
    </tr>
    </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
