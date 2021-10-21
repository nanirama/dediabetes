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

export const PesoMujer = () => {
  return (
    <Wrapper>
      <div className="app">
        <div className="containers">
          <table class="table table-bordered table-hover table-condensed">
            <thead>
              <tr>
                <th title="Field #1">Pies</th>
                <th title="Field #2">Metros</th>
                <th title="Field #3">Libras</th>
                <th title="Field #4">Kilogramos</th>
              </tr>
            </thead>
            <tbody>
            <tr>
        <td>4'9</td>
        <td>1.45</td>
        <td>134</td>
        <td>60.78</td>
    </tr>
    <tr>
        <td>4'10</td>
        <td>1.47</td>
        <td>137</td>
        <td>62.14</td>
    </tr>
    <tr>
        <td>4'11</td>
        <td>1.5</td>
        <td>140</td>
        <td>63.5</td>
    </tr>
    <tr>
        <td>5'0</td>
        <td>1.52</td>
        <td>143</td>
        <td>64.86</td>
    </tr>
    <tr>
        <td>5'1</td>
        <td>1.55</td>
        <td>146</td>
        <td>66.22</td>
    </tr>
    <tr>
        <td>5'2</td>
        <td>1.57</td>
        <td>150</td>
        <td>68.04</td>
    </tr>
    <tr>
        <td>5'3</td>
        <td>1.6</td>
        <td>154</td>
        <td>69.85</td>
    </tr>
    <tr>
        <td>5'4</td>
        <td>1.63</td>
        <td>157</td>
        <td>71.21</td>
    </tr>
    <tr>
        <td>5'5</td>
        <td>1.65</td>
        <td>161</td>
        <td>73.03</td>
    </tr>
    <tr>
        <td>5'6</td>
        <td>1.68</td>
        <td>164</td>
        <td>74.39</td>
    </tr>
    <tr>
        <td>5'7</td>
        <td>1.7</td>
        <td>168</td>
        <td>76.2</td>
    </tr>
    <tr>
        <td>5'8</td>
        <td>1.73</td>
        <td>172</td>
        <td>78.02</td>
    </tr>
    <tr>
        <td>5'9</td>
        <td>1.75</td>
        <td>175</td>
        <td>79.38</td>
    </tr>
    <tr>
        <td>5'10</td>
        <td>1.78</td>
        <td>178</td>
        <td>80.74</td>
    </tr>
    <tr>
        <td>5'11</td>
        <td>1.8</td>
        <td>182</td>
        <td>82.55</td>
    </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
