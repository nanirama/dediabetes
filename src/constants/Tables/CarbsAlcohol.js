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

export const CarbsAlcohol = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table role="table">
            <thead>
              <tr role="row">
                <th colspan="1" role="columnheader">
                  Alcohol
                </th>
                <th colspan="1" role="columnheader">
                  Tamaño de la Porcion
                </th>
                <th colspan="1" role="columnheader">
                  Tipo
                </th>
                <th colspan="1" role="columnheader">
                  Net Carb (g)
                </th>
                <th colspan="1" role="columnheader">
                  Azúcar (g)
                </th>
                <th colspan="1" role="columnheader">
                  Total Carb (g)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell">Cerveza</td>
                <td role="cell">1 lata o botella</td>
                <td role="cell">Cerveza regular</td>
                <td role="cell">12.64</td>
                <td role="cell">-</td>
                <td role="cell">12.64</td>
              </tr>
              <tr role="row">
                <td role="cell">Cerveza</td>
                <td role="cell">1 lata o botella</td>
                <td role="cell">Cerveza ligera</td>
                <td role="cell">5.81</td>
                <td role="cell">0.32</td>
                <td role="cell">5.81</td>
              </tr>
              <tr role="row">
                <td role="cell">Vino</td>
                <td role="cell">5 fl oz.</td>
                <td role="cell">Vino Rojo</td>
                <td role="cell">3.84</td>
                <td role="cell">0.91</td>
                <td role="cell">3.84</td>
              </tr>
              <tr role="row">
                <td role="cell">Vino</td>
                <td role="cell">5 fl oz.</td>
                <td role="cell">Vino Blanco</td>
                <td role="cell">3.82</td>
                <td role="cell">1.41</td>
                <td role="cell">3.82</td>
              </tr>
              <tr role="row">
                <td role="cell">Vino</td>
                <td role="cell">5 fl oz.</td>
                <td role="cell">Vino de mesa</td>
                <td role="cell">4.03</td>
                <td role="cell">1.17</td>
                <td role="cell">4.03</td>
              </tr>
              <tr role="row">
                <td role="cell">Vino</td>
                <td role="cell">1 copa</td>
                <td role="cell">Champaña</td>
                <td role="cell">2.8</td>
                <td role="cell">0.81</td>
                <td role="cell">2.8</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Bourbon</td>
                <td role="cell">0.04</td>
                <td role="cell">-</td>
                <td role="cell">0.04</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Brandy</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Gin</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Ron</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Tequila</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Vodka</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
                <td role="cell">-</td>
              </tr>
              <tr role="row">
                <td role="cell">Licores</td>
                <td role="cell">1 shot o medida 1.5 fl oz</td>
                <td role="cell">Whisky</td>
                <td role="cell">0.04</td>
                <td role="cell">-</td>
                <td role="cell">0.04</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Bourbon y Soda</td>
                <td role="cell">0.05</td>
                <td role="cell">-</td>
                <td role="cell">0.05</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Gin and Tonic</td>
                <td role="cell">15.77</td>
                <td role="cell">14.96</td>
                <td role="cell">15.77</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Ron y Cola</td>
                <td role="cell">15.12</td>
                <td role="cell">12.87</td>
                <td role="cell">15.32</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Scotch y Soda</td>
                <td role="cell">0.04</td>
                <td role="cell">-</td>
                <td role="cell">0.04</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Bloody Mary</td>
                <td role="cell">4.48</td>
                <td role="cell">3.6</td>
                <td role="cell">4.88</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Caipirinha</td>
                <td role="cell">14.52</td>
                <td role="cell">9.65</td>
                <td role="cell">16.62</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Cape Cod</td>
                <td role="cell">12.86</td>
                <td role="cell">11.3</td>
                <td role="cell">12.86</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Daiquiri</td>
                <td role="cell">4.11</td>
                <td role="cell">3.38</td>
                <td role="cell">4.21</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Saltamontes</td>
                <td role="cell">15.31</td>
                <td role="cell">14.06</td>
                <td role="cell">15.31</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">High Ball</td>
                <td role="cell">0.05</td>
                <td role="cell">-</td>
                <td role="cell">0.05</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Kamikaze</td>
                <td role="cell">15.3</td>
                <td role="cell">13.7</td>
                <td role="cell">15.4</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Long Island Iced Tea</td>
                <td role="cell">9.87</td>
                <td role="cell">8.7</td>
                <td role="cell">9.87</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Mai Tai</td>
                <td role="cell">29.76</td>
                <td role="cell">24.78</td>
                <td role="cell">29.76</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Manhattan</td>
                <td role="cell">2.07</td>
                <td role="cell">1.15</td>
                <td role="cell">2.07</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Margarita</td>
                <td role="cell">10.57</td>
                <td role="cell">9.82</td>
                <td role="cell">10.67</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Mint Julep</td>
                <td role="cell">4.21</td>
                <td role="cell">4.16</td>
                <td role="cell">4.21</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Mojito</td>
                <td role="cell">24.44</td>
                <td role="cell">23.47</td>
                <td role="cell">24.94</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Seabreeze</td>
                <td role="cell">19.86</td>
                <td role="cell">17.75</td>
                <td role="cell">19.86</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Screwdriver</td>
                <td role="cell">18.09</td>
                <td role="cell">14.36</td>
                <td role="cell">18.49</td>
              </tr>
              <tr role="row">
                <td role="cell">Cocteles</td>
                <td role="cell">1 coctel</td>
                <td role="cell">Tequila Sunrise</td>
                <td role="cell">14.57</td>
                <td role="cell">11.21</td>
                <td role="cell">14.77</td>
              </tr>
              <tr role="row">
                <td role="cell">Others</td>
                <td role="cell">1 vaso</td>
                <td role="cell">Liqueur</td>
                <td role="cell">8.84</td>
                <td role="cell">8.8</td>
                <td role="cell">8.84</td>
              </tr>
              <tr role="row">
                <td role="cell">Others</td>
                <td role="cell">1 vaso</td>
                <td role="cell">Alcoholic Fruit Punch</td>
                <td role="cell">7.85</td>
                <td role="cell">5.88</td>
                <td role="cell">7.85</td>
              </tr>
              <tr role="row">
                <td role="cell">Others</td>
                <td role="cell">1 vaso</td>
                <td role="cell">Sangria</td>
                <td role="cell">22.39</td>
                <td role="cell">19.08</td>
                <td role="cell">22.59</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
