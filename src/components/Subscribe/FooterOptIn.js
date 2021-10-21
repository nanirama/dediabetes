import axios from 'axios';
import { navigate } from 'gatsby';
import React, { useRef, useState } from 'react';

const Newsletter = () => {
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

  <section className="text-gray-600 body-font bg-themeLighterAlt mt-12">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-col text-center w-full">
      <h5 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase my-2">Únete a nuestra comunidad</h5>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base xl:px-48 my-4">Recibe en  exclusivo nuestro menú de 7 días y manténte informado de la actualidad sobre el cuidado de la Diabetes</p>
    </div>

    <form action="" className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end" onSubmit={submitForm}>
      <div className="relative flex-grow w-full">
        
        <input
          ref={inputRef}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
        />
        
        </div>
        
        <button
          className="w-full md:w-1/3 rounded border-2 border-themeBrandColor border-solid bg-themeBrandColor hover:bg-white text-white hover:text-themeBrandColor py-2 px-8 focus:outline-none rounded text-lg"
          type="submit"
        >
          Suscribirme
        </button>
        
      </form>
      </div>
    

</section>

  );
};

export default Newsletter;
