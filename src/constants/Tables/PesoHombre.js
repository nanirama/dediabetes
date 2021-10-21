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

export const PesoHombre = () => {
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
        <td>5'1</td>
        <td>1.55</td>
        <td>157</td>
        <td>71.21</td>
    </tr>
    <tr>
        <td>5'2</td>
        <td>1.57</td>
        <td>160</td>
        <td>72.57</td>
    </tr>
    <tr>
        <td>5'3</td>
        <td>1.6</td>
        <td>162</td>
        <td>73.48</td>
    </tr>
    <tr>
        <td>5'4</td>
        <td>1.63</td>
        <td>165</td>
        <td>74.84</td>
    </tr>
    <tr>
        <td>5'5</td>
        <td>1.65</td>
        <td>168</td>
        <td>76.2</td>
    </tr>
    <tr>
        <td>5'6</td>
        <td>1.68</td>
        <td>172</td>
        <td>78.02</td>
    </tr>
    <tr>
        <td>5'7</td>
        <td>1.7</td>
        <td>175</td>
        <td>79.38</td>
    </tr>
    <tr>
        <td>5'8</td>
        <td>1.73</td>
        <td>179</td>
        <td>81.19</td>
    </tr>
    <tr>
        <td>5'9</td>
        <td>1.75</td>
        <td>182</td>
        <td>82.55</td>
    </tr>
    <tr>
        <td>5'10</td>
        <td>1.78</td>
        <td>186</td>
        <td>84.37</td>
    </tr>
    <tr>
        <td>5'11</td>
        <td>1.8</td>
        <td>190</td>
        <td>86.18</td>
    </tr>
    <tr>
        <td>6'0</td>
        <td>1.83</td>
        <td>194</td>
        <td>88</td>
    </tr>
    <tr>
        <td>6'1</td>
        <td>1.85</td>
        <td>199</td>
        <td>90.26</td>
    </tr>
    <tr>
        <td>6'2</td>
        <td>1.88</td>
        <td>203</td>
        <td>92.08</td>
    </tr>
    <tr>
        <td>6'3</td>
        <td>1.91</td>
        <td>209</td>
        <td>94.8</td>
    </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  )
}
