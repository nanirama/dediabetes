import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero'
import CustomList from '../components/CustomList.js'

const EmailConfirmation = () => {
  return (
    <Layout>


      <div className="flex justify-center mt-16">

          <h1>SUSCRIPCION EXITOSA</h1>
      
      </div>

      <div className="flex justify-center	 mt-4 text-3xl">
        <div className="flex justify-center	 mt-16">

          <CustomList
            icon = "🔸"
            items = {["Chequea tu buzón de email.","Busca el email que te enviamos de info@dediabetes.com","Haz click en el enlace para confirmar", "Al completar sus datos, tendrá acceso a descargar la dieta de 7 días"]}
          />

        </div>


      </div>

      <div className="flex justify-center">
<p className="mt-8 text-2xl italic font-bold">¡Muchas gracias y bienvenidos!</p>
</div>
      <Hero showPerson />
    </Layout>
  );
};

export default EmailConfirmation;
