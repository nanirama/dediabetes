import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const ErrorPage = () => {
  return (
    <Layout>
      <div className="footer p-10 text-gray-900 font-bold">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-20 mt-10"></div>
        <div className="flex justify-center text-9xl">
          <p>404</p>
        </div>
        <div className="flex justify-center">
          <p>Oops, no hay nada aquí.</p>
        </div>
        <div className="flex justify-center">
          <p>Parece que no se encontró nada en este lugar.</p>
        </div>
        <div className="flex justify-center">
          <p>
            Intente volver al{' '}
            <Link to="/" className="text-red-600 hover:underline">
              INICIO.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
