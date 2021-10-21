import axios from 'axios';
import React, { useRef, useState } from 'react';

const PostOptin = () => {
  // Success and error messages
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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

  <section className="text-gray-600 body-font bg-themeLighterAlt mt-0 p-2">
  <div className="container py-2 mx-auto">
  
      <p className="mx-auto leading-relaxed text-base text-center my-2 px-6">Subscríbete para recibir un plan de comidas para la diabetes de 7 dias, <u><b>gratis</b></u></p>


    <form action="" className="flex lg:w-2/3 w-full lg:flex-row flex-col mx-auto sm:space-x-4 sm:space-y-2 space-y-4 sm:px-2 items-center md:items-end" onSubmit={submitForm}>
      <div className="relative flex-grow w-full pl-2">
        
        <input
          ref={inputRef}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
          type="email"
          name="email"
          id="email-input"
          placeholder="tucorreo@dominio.com"
        />
        
        </div>
       
        <button
          className="w-full lg:w-1/3 rounded border-2 border-themeBrandColor border-solid bg-themeBrandColor hover:bg-white text-white hover:text-themeBrandColor focus:outline-none rounded py-1 mr-2 px-2 text-lg"
          type="submit"
        >
          Suscribirme
        </button>
        
      </form>
      </div>
    

</section>

  );
};

export default PostOptin;
