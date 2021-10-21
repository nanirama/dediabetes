import axios from 'axios';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import React, { useRef, useState } from 'react';
import Img from 'gatsby-image'

const query = graphql`
  {
    file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



const HeroCta = () => {
 // Success and error messages
 const [error, setError] = useState(null);
 const [success, setSuccess] = useState(null);
 const { file } = useStaticQuery(query)


 // Input reference
 const inputRef = useRef();

 const subscriberEndpoint =
   process.env.SUBSCRIBER_ENDPOINT || '/.netlify/functions/subscribe';

 const errorHandler = err => {
   setSuccess(null);
   if (err.response.status === 409) {
     setError('Email ya registrado.');
     return;
   }
   setError('Hubo un error con nuestros servidores.');
 };

 const successHandler = res => {
   setError(null);
   setSuccess('Email registrado!');
   inputRef.current.value = '';
   localStorage.setItem('subscribed', '1');
   navigate('/email-confirmation');
 };
 const submitForm = e => {
   e.preventDefault();
   const userEmail = e.target[0].value.toLowerCase().trim();
   if (!userEmail) {
     setSuccess(null);
     setError('Email no válido.');
     return;
   }
   axios
     .post(subscriberEndpoint, JSON.stringify({ email: userEmail }))
     .then(res => {
       if (res.status === 200) {
         successHandler();
       }
     })
     .catch(errorHandler);
 };

    return (
      <div className="flex flex-col bg-themeLighter">
        
        <div className="md:mx-auto md:container px-4">
        <div className="pt-6 md:pt-28">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center pb-12">
                    <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                        <div className="py-2 text-color">
                            <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Subscríbete para recibir GRATIS un menú para diabetes de 7 días saludable, delicioso y fácil de preparar</h2>
                             <p className="mb-8 leading-relaxed">Por que sabemos que vivir con diabetes no es fácil. Nuestra misión es ayudar a cuantas personas sea posible a mejorar su dieta y vivir una vida plena.</p>

                      <div className="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200">
                      <form action="" className="flex flex-row justify-start w-full max-w-md shadow-xl border-t border-b border-gray-200" onSubmit={submitForm}>
                            <input
                                ref={inputRef}
                                className="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0"
                                type="email"
                                name="email"
                                id="email-input"
                                placeholder="Email"
                            />
                            <button
                                className="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 rounded border-2 border-themeBrandColor border-solid bg-themeBrandColor hover:bg-white text-white hover:text-themeBrandColor "
                                type="submit"
                            >
                                Suscribirme
                            </button>
                            
                        </form>
                    
                       </div>
                            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
                                        {error && <small className={`text-red-400`}>{error}</small>}
                                        {success && <small className={`text-green-400`}>{success}</small>}
                                </p>
                                    </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                    
                        <div className="relative z-10 p-2 w-10/12">
                        
                        <Img fluid={file.childImageSharp.fluid}/>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>

      </div>
    )
  }
  
  export default HeroCta
  
