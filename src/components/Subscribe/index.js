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
    <div className="p-6 px-6 mx-auto text-center md:p-10 md:px-12">
      <h1 className="mb-5 text-2xl font-bold text-white md:text-3xl">
        Subscríbete para recibir gratis la dieta de 7 dias.
      </h1>
      <form action="" className="relative" onSubmit={submitForm}>
        <input
          ref={inputRef}
          className="block w-full py-5 mb-4 text-lg bg-transparent border-b-2 border-gray-700 outline-none hover:border-gray-200 "
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
        />
        <button
          className="w-full px-12 py-3 mr-5 text-lg font-bold bg-transparent border-4 border-white hover:bg-white hover:text-black"
          type="submit"
        >
          Suscribirme
        </button>
      </form>
      {error && <small className={`text-red-400`}>{error}</small>}
      {success && <small className={`text-green-400`}>{success}</small>}
    </div>
  );
};

export default Newsletter;
