import React from 'react'
import CustomList from '../CustomList'
import styled from 'styled-components'
import tw from 'twin.macro'

const LandingSellBox = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 p-5`}
  li:before {
    content: '\2605';
  }
`

const LandingSellbox1 = styled.div`
  ${`flex flex-col`}
  justify-content: space-between;
  padding: 4px;
  background-color: LightSteelBlue;
  margin: 35px;
`

const LandingSellbox2 = styled(LandingSellbox1)`
  background-color: SteelBlue;
  padding: 0px;
  margin: 0px;
`

const BlandaPlan = () => {
  return (
    <LandingSellBox>
      <LandingSellbox1>
        <div className="p-10">
          <h2 className="text-center">Dieta Básica</h2>
          <p className="text-6xl text-center py-8">US$7</p>
          <h3 className="text-center">Menu de 7 días</h3>
          <CustomList
            icon="✔"
            items={[
              'Menú de 7 días: 3 comidas y 2 meriendas diarias',
              'Claves de una dieta para diabéticos exitosa',
              'Preguntas Frecuentes sobre alimentación para la diabetes',
            ]}
          />
          <h3 className="text-center">No Incluye </h3>
          <CustomList
            icon="❌"
            items={['Cálculo de aporte de carbohidratos por comida']}
          />
        </div>

        <div className="flex justify-center mb-10">
<button
            className="bg-gradient-to-b from-yellow-300 to-yellow-600 hover:from-yellow-700 px-4 py-2 capitalized rounded-full text-black font-bold"
          >
            <a href="https://gum.co/mINoo">Comprar Ahora</a>
          </button>
        </div>
      </LandingSellbox1>

      <LandingSellbox2>
        <div className="p-10">
          <h2 className="text-center">Dieta Completa</h2>
          <p className="text-6xl text-center py-8">US$12</p>
          <h3 className="text-center">Menu de 28 días</h3>
          <CustomList
            icon="✔"
            items={[
              'Menú de 28 días: 3 comidas y 3 meriendas diarias',
              'Cálculo de aporte de carbohidratos por comida',
              '​Claves para implementar una dieta blanda',
              'Preguntas Frecuentes sobre una dieta blanda',
            ]}
          />
        </div>

        <div className="flex justify-center mb-10 p-10">
          <button
            className="bg-gradient-to-b from-yellow-300 to-yellow-600 hover:from-yellow-700 px-4 py-2 capitalized rounded-full text-black font-bold"
          >
            <a href="https://gum.co/ToNmd">Comprar Ahora</a>
          </button>
        </div>
      </LandingSellbox2>
    </LandingSellBox>
  )
}

export default BlandaPlan
