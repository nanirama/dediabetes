import axios from 'axios';
import { navigate } from 'gatsby';
import React, { useRef, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const SideOptin2 = () => {
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
    
    <section className="text-gray-600 body-font">
          <Card>
        <CardContent>
  
    <div className="bg-themeLighterAlt rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-700 text-lg font-medium title-font mb-5 text-center">Únete a nuestra comunidad y recibe <u>exclusivo</u> nuestro menú de 7 días </h2>
      <form action="" className="relative mb-4" onSubmit={submitForm}>
        <input
          ref={inputRef}
          className="w-full bg-white border-2 border-themeBrandColor border-solid  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 my-4 leading-8 transition-colors duration-200 ease-in-out"
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
        />
        <button
          className="w-full rounded border-2 border-themeBrandColor border-solid bg-themeBrandColor hover:bg-white text-white hover:text-themeBrandColor py-2 px-8 focus:outline-none rounded text-lg"
          type="submit"
        >
          Suscribirme
        </button>
        
      </form>
      <p className="text-xs text-gray-500 mt-3">{error && <small className={`text-red-400`}>{error}</small>}
                                        {success && <small className={`text-green-400`}>{success}</small>}</p>
  </div>
  </CardContent>
  </Card> 
                                   
</section>
  );
};

export default SideOptin2;
