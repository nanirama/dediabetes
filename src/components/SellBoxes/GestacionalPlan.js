import React from 'react'
import CustomList from '../CustomList'
import styled from 'styled-components'
import tw from 'twin.macro'

const LandingSellBox = styled.div`
  ${tw`flex flex-row p-5 justify-center`}
  li:before {
    content: '\2605';
  }
`

const LandingSellbox1 = styled.div`
  ${tw`md:w-1/2`}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  background-color: LightSteelBlue;
  margin: 35px;
`

const BlandaPlan = () => {
  return (
    <LandingSellBox>
      <LandingSellbox1>
        <div className="p-10">
          <h2 className="text-center">Dieta Básica</h2>
          <p className="text-6xl text-center py-8">$US7</p>
          <h3 className="text-center">Menu de 7 días</h3>
          <CustomList
            icon="✔"
            items={[
              'Menú de 7 días: 3 comidas y 2 meriendas diarias',
              'Claves de una dieta para la diabetes  exitosa',
              'Preguntas frecuentes sobre alimentación para la diabetes',
            ]}
          />
        </div>

        <div className="flex justify-center mb-10">
        <button
            className="bg-gradient-to-b from-yellow-300 to-yellow-600 hover:from-yellow-700 px-4 py-2 capitalized rounded-full text-black font-bold"
          >
            <a href="https://gum.co/VlQvG">Comprar Ahora</a>
          </button>
        </div>
      </LandingSellbox1>
    </LandingSellBox>
  )
}

export default BlandaPlan
