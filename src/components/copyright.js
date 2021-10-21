import React from 'react'
import SocialLinks from '../constants/socialLinks'
import { Link } from "gatsby"
import tw from 'twin.macro'


const copyright = () => {

    return (
        <div className="flex flex-col mt-10">
        <div className="flex justify-center">
        <p>
           &copy;{new Date().getFullYear()} DeDiabetes. Todos los derechos
           reservados
       </p>

        </div>

        <div>
        <SocialLinks styleClass="footer-icons"/>

        </div>


      </div>
  )
}

export default copyright



