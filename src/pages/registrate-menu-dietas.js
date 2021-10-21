import React from "react"
import Logo from './../images/DD01.png';
import background from './../images/slice4.png'
import background2 from './../images/slice5.png'
import Card1 from './../images/slice3.png'
import Card2 from './../images/slice2.png'
import Card3 from './../images/slice1.png'
import SubscribeSide from '../components/Subscribe/LandOptin';
import LandFooterOptin from '../components/Subscribe/LandFooterOptin';



export default () => {
  return (
    <div>
      <div className="grid justify-items-center">
        <img src={Logo} alt="logo" />
      </div>
      {/* ==============================> <========================================= */}
      <div className="hidden md:visible lg:flex flex-warp lg:px-40 pt-10">
        <div className="xl:w-3/4 pt-20 pr-10 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})`, height: "auto" }}>
          <ul className="w-3/4 list-none -mt-20">
            <li className="lg:text-5xl md:text-3xl sm:text-2xl text-red-400 leading-tight">¡<span className="text-red-600 font-bold underline">GRATIS</span>, Recibe tu dieta para diabetes cada semana !</li>
          </ul>
          <ul className="w-3/5 list-disc ml-8 pt-2 leading-loose lg:text-xl md:text-xl sm:text-lg">
            <li className="mr-28">Diseñadas <b>específicamente</b> para la diabetes</li>
            <li className="mr-28">Comidas deliciosas todos los días</li>
            <li className="mr-28">Recetas para desayuno, almuerzo (comida) y cena</li>
            <li className="mr-28">Lista de compras semanal para tu comodidad</li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>


        </div>
        <div className="xl:w-1/4 container shadow-2xl shadow-gray-800 ml-2">
          <br />
          <br />
          <SubscribeSide/>
        </div>
      </div>
      <div className="lg:hidden">

        <img src={background2} alt="logo" class="center" />

              <h2 className="text-2xl text-red-400 leading-tight text-center mt-8">¡<span className="text-red-600 font-bold underline">GRATIS</span>, Recibe tu dieta para diabetes cada 
            </h2>
            <ul className="list-disc ml-8 pt-2 leading-loose text-lg">
              <li>Diseñadas <b>específicamente</b> para la diabetes</li>
              <li>Comidas deliciosas todos los días</li>
              <li>Recetas para desayuno, almuerzo (comida) y cena</li>
              <li>Lista de compras semanal para tu comodidad</li>
            </ul>
            <SubscribeSide/>
        <div className="xl:w-1/4 container shadow-2xl shadow-gray-800 ml-2">
          <br />
          <br />

        </div>

      </div>

      {/* ==============================> <========================================= */}
      <h2 className="text-center text-4xl mt-10 capitalize">Cada plan semanal incluye</h2>
      <div class="p-10 lg:px-40">
        <div className="flex flex-wrap">
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2">
            <div className="w-full h-full rounded p-8 border border-gray-600">
              <h3 className="text-center lg:text-3xl md:text-3xl sm:text-3xl">Deliciosas comidas para todos los días</h3>
              <div className="grid justify-items-center mt-8">
                <img src={Card1} alt="logo" />
              </div>
              <p className="text-center lg:text-3xl md:text-3xl sm:text-3xl mt-8">
                  <span className="font-bold">Es una realidad,</span> puedes comer comidas deliciosas y beneficiosas para el cuidado de la deabetes
              </p>
            </div>
          </div>
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2">
            <div className=" w-full h-full rounded p-8 border border-gray-600">
              <h3 className="text-center lg:text-3xl md:text-3xl sm:text-3xl">Un plan para cada día de la semana</h3>
              <div className="grid justify-items-center mt-8">
                <img src={Card2} alt="logo" />
              </div>
              <p className="text-center lg:text-3xl md:text-3xl sm:text-3xl mt-8">
                <span className="text-center lg:text-3xl md:text-3xl sm:text-3xl font-bold">
                  No mas adivinar o tomar decisiones de ultima hora,
                </span>
                <br/>solo sigue nuestro plan
              </p>
            </div>
          </div>
          <div class="w-full  lg:w-1/3 md:w-2/4  sm:w-1/1  pb-4 p-2 ">
            <div className="w-full h-full rounded p-8 border border-gray-600" >
              <h3 className="text-center lg:text-3xl md:text-3xl sm:text-3xl">Lista de compras semanales</h3>
              <div className="grid justify-items-center mt-8">
                <img src={Card3} alt="logo" />
              </div>
              <p className="text-center lg:text-3xl md:text-3xl sm:text-3xl mt-8">
                <p className="text-center lg:text-3xl md:text-3xl sm:text-3xl ">
                  <span className="font-bold">Incluye la lista de ingredientes que tienes que comprar.</span><br/>No mas anotar y hacer cálculos
                </p>
              
              </p>
            </div>
          </div>
        </div>
      </div>
<div className="md:mx-40 -mt-8 bg-blue-600 ">
<LandFooterOptin/>

</div>

    </div>
  )
}
