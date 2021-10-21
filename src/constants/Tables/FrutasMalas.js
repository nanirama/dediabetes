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

export const FrutasMalas = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                Fruta
                </th>
                <th colspan="1" role="columnheader">
                Porcion de consumo habitual
                </th>
                <th colspan="1" role="columnheader">
                g de HC*
                </th>
                <th colspan="1" role="columnheader">
                Indice Glucémico**
                </th>
                <th colspan="1" role="columnheader">
                Carga Glucémica***
                </th>
              </tr>
            </thead>
            <tbody>
            <tr><td>Chirimoya</td><td>Unidad mediana ( g)</td><td>40 g (4 r)</td><td>35</td><td>14</td></tr>
 <tr><td>Papaya</td><td>Una tajada (250g)</td><td>20 g (2 r)</td><td>55</td><td>11</td></tr>
 <tr><td>Mango</td><td>Unidad mediana ( g)</td><td>20 g (2 r)</td><td>50</td><td>10</td></tr>
 <tr><td>Plátano</td><td>Unidad pequeña ( g)</td><td>20 g (2 r)</td><td>50</td><td>10</td></tr>
 <tr><td>Granada</td><td>Unidad mediana (175g)</td><td>25 g (2,5 r)</td><td>35</td><td>8.75</td></tr>
 <tr><td>Manzana asada</td><td>Unidad mediana (120g)</td><td>25 g (2,5 r)</td><td>35</td><td>8.75</td></tr>
 <tr><td>Piña en su jugo</td><td>Dos rodajas ( g)</td><td>16 g (1,6 r)</td><td>50</td><td>8</td></tr>
 <tr><td>Manzana</td><td>Unidad mediana ( g)</td><td>20 g (2 r)</td><td>35</td><td>7</td></tr>
 <tr><td>Melocotón</td><td>Unidad mediana ( g)</td><td>20 g (2 r)</td><td>35</td><td>7</td></tr>
 <tr><td>Naranja</td><td>Unidad mediana ( g)</td><td>20 g (2 r)</td><td>35</td><td>7</td></tr>
 <tr><td>Melón</td><td>Una tajada mediana ( g)</td><td>10 g (1 r)</td><td>60</td><td>6</td></tr>
 <tr><td>Kiwi</td><td>Unidad mediana ( g)</td><td>10 g (1 r)</td><td>50</td><td>5</td></tr>
 <tr><td>Litchi</td><td>6 unidades (70g)</td><td>10 g (1 r)</td><td>50</td><td>5</td></tr>
 <tr><td>Dátil</td><td>Unidad (12g)</td><td>7 g (0,7 r)</td><td>70</td><td>4.9</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
