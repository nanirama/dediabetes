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
    <div className="mx-auto text-center w-auto rounded-lg m-6 p-6">
      <h2 className="mb-5 text-3xl font-bold m-6">
        Recibe tu plan semanal ahora!
      </h2>
      <h3 className="pb-10">Confirma tu email</h3>
      <form action="" className="relative" onSubmit={submitForm}>
        <input
          ref={inputRef}
          className="block w-full px-2 mb-4 text-lg bg-transparent bg-white border border-gray-600 rounded-none md:w-64 lg:w-48 md:inline"
          type="email"
          name="email"
          id="email-input"
          placeholder="Tu email"
        />
        <button
          className="lg:w-48 text-white uppercase bg-blue-600 border border-gray-200 hover:bg-green-800"
          type="submit"
        >
          Registrate Ya!
        </button>
      </form>
      {error && <small className={`text-red-400`}>{error}</small>}
      {success && <small className={`text-green-400`}>{success}</small>}
    </div>
  );
};

export default Newsletter;
