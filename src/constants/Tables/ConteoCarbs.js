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

export const ConteoCarbs = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                DESAYUNO
                </th>
                <th colspan="1" role="columnheader">
                Cantidad consumida
                </th>
                <th colspan="1" role="columnheader">
                Raciones de Carbohidratos
                </th>
                <th colspan="1" role="columnheader">
                Cantidad de Carbohidratos por cada ración
                </th>
                <th colspan="1" role="columnheader">
                Total de Carbohidratos consumidos
                </th>
              </tr>
            </thead>
            <tbody>
            <tr><td>Pan </td><td>2 rebanadas </td><td>2 </td><td>15 </td><td>30</td></tr>
 <tr><td>Queso </td><td>1 lonja </td><td>0 </td><td>0 </td><td>0</td></tr>
 <tr><td>Jamón </td><td>1 lonja </td><td>0 </td><td>0 </td><td>0</td></tr>
 <tr><td>Margarina </td><td>1 cucharadita </td><td>0 </td><td>0 </td><td>0</td></tr>
 <tr><td>Yogurt </td><td>½ Taza </td><td>1/2 </td><td>12 </td><td>6</td></tr>
 <tr><td>Fresa </td><td>6 Unidades Grandes </td><td>1 </td><td>15 </td><td>15</td></tr>
 <tr><td>Gramos totales de carbohidratos consumidos </td><td></td><td></td><td></td><td>51</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
