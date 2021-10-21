import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  table {
    border-spacing: 10px;
    border: 1 px solid white;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  table thead {
    border-bottom: 5px solid red;
    font-weight: bold;
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

export const PreDiabetesDef = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table class="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th title="Field #1">Definición</th>
                <th title="Field #2">Normal</th>
                <th title="Field #3">Prediabetes</th>
                <th title="Field #4">Diagnóstico de Diabetes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WHO-FPG</td>
                <td>FPG&lt;6.1 mmol/L (110 mg/dL)</td>
                <td>FPG 6.1–6.9 mmol/L (110–124 mg/dL)</td>
                <td>
                  Indentificación personal de diabetes, uso de medicamentos
                  contra la diabetes y/o FPG≥7.0 mmol/L (126 mg/dL) at
                  follow-up.
                </td>
              </tr>
              <tr>
                <td>ADA-FPG</td>
                <td>FPG&lt;5.6 mmol/L (101 mg/dL)</td>
                <td>FPG 5.6–6.9 mmol/L (101–124 mg/dL)</td>
                <td> </td>
              </tr>
              <tr>
                <td>2hPG</td>
                <td>2hPG&lt;7.8 mmol/L (141 mg/dL)</td>
                <td>2hPG 7.8–11.0 mmol/L (141–198 mg/dL)</td>
                <td>
                  Indentificación personal de diabetes, uso de medicamentos
                  contra la diabetes, FPG≥7.0 mmol/L (126 mg/dL) y/o
                  2hPG≥11.1 mmol/L (200 mg/dL) at follow-up.
                </td>
              </tr>
              <tr>
                <td>ADA-HbA1c</td>
                <td>HbA1c&lt;5.7% (39 mmol/mol)</td>
                <td>HbA1c 5.7%–6.4% (39–47 mmol/mol)</td>
                <td>
                  Indentificación personal de diabetes, uso de medicamentos
                  contra la diabetes y/o HbA1c≥6.5% (48 mmol/mol) at follow-up.
                </td>
              </tr>
              <tr>
                <td>IEC-HbA1c</td>
                <td>HbA1c&lt;6.0% (42 mmol/mol)</td>
                <td>HbA1c 6.0%–6.4% (42–47 mmol/mol)</td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td colspan="4" className="text-left">
                  Notas: ADA, American Diabetes Association; FPG, Glucosa
                  Plasmática en Ayunas / Fasting Plasma Glucose; HbA1c,
                  hemoglobina glucosilada /glycated hemoglobin; 2hPG, 2-hour
                  Glucosa Plasmática de 2 horas / 2-h plasma glucose ; IEC,
                  Comité Internacional de Expertos / International Expert
                  Committee.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
