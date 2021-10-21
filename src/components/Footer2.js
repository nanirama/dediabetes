import { navigate, useStaticQuery, graphql, Link} from 'gatsby';
import React from 'react';
import Img from 'gatsby-image'

const query = graphql`
{
  file(relativePath: { eq: "DD01.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`



const Footer2 = () => {

  const { file } = useStaticQuery(query)

  return (

   <footer className="text-gray-600 body-font leading-3">
  <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <Img fluid={file.childImageSharp.fluid}/>
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      </a>
      <p className="mt-2 text-sm text-gray-500"></p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-0"><Link className="text-gray-900 hover:text-themeBrandColor hover:underline" to="/recetas/">RECETAS</Link></h2>
        <nav className="list-none mb-10">
          <li>
          <Link to="/recetas/carne" className="text-gray-600 hover:text-themeBrandColor hover:underline">Carne</Link>
          </li>
          <li>
          <Link to="/recetas/desayuno" className="text-gray-600 hover:text-themeBrandColor hover:underline">Desayuno</Link>
          </li>

          <li>
          <Link to="/recetas/merienda" className="text-gray-600 hover:text-themeBrandColor hover:underline">Meriendas</Link>
          </li>
          <li>
          <Link to="/recetas/pescado" className="text-gray-600 hover:text-themeBrandColor hover:underline">Pescado</Link>
          </li>
          <li>
          <Link to="/recetas/pollo" className="text-gray-600 hover:text-themeBrandColor hover:underline">Pollo</Link>
          </li>
          <li>
          <Link to="/recetas/vegetariana" className="text-gray-600 hover:text-themeBrandColor hover:underline">Vegetarianas</Link>
          </li>
        </nav >


      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-0">SOBRE DIABETES</h2>
        <nav className="list-none mb-10">
        <li>
          <Link to="/diabetes/causas" className="text-gray-600 hover:text-themeBrandColor hover:underline">Causas</Link>
          </li>
          <li>
          <Link to="/diabetes/diagnostico" className="text-gray-600 hover:text-themeBrandColor hover:underline">Diagnóstico</Link>
          </li>
          <li>
          <Link to="/diabetes/diabetes-tipo-1" className="text-gray-600 hover:text-themeBrandColor hover:underline">Diabetes Tipo 1</Link>
          </li>
          <li>
          <Link to="/diabetes/diabetes-tipo-2" className="text-gray-600 hover:text-themeBrandColor hover:underline">Diabetes Tipo 2</Link>
          </li>
        <li>
          <Link to="/diabetes/prediabetes" className="text-gray-600 hover:text-themeBrandColor hover:underline">Prediabetes</Link>
          </li>

          <li>
          <Link to="/diabetes/sintomas" className="text-gray-600 hover:text-themeBrandColor hover:underline">Sintomas</Link>
          </li>

        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-0">CUIDADO</h2>
        <nav className="list-none mb-10">
        <li>
          <Link to="/diabetes/alimentacion" className="text-gray-600 hover:text-themeBrandColor hover:underline">Alimentación</Link>
          </li>
          <li>
          <Link to="/diabetes/complicaciones" className="text-gray-600 hover:text-themeBrandColor hover:underline">Complicaciones</Link>
          </li>
          <li>
          <Link to="/diabetes/controlar-la-diabetes" className="text-gray-600 hover:text-themeBrandColor hover:underline">Controlar la Diabetes</Link>
          </li>
          <li>
          <Link to="/diabetes/insulina" className="text-gray-600 hover:text-themeBrandColor hover:underline">Insulina</Link>
          </li>
          <li>
          <Link to="/diabetes/tratamiento" className="text-gray-600 hover:text-themeBrandColor hover:underline">Tratamiento</Link>
          </li>
          <li>
          <Link to="/diabetes/vivir-con-diabetes" className="text-gray-600 hover:text-themeBrandColor hover:underline">Vivir con Diabetes</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 mt-0">DEDIABETES.COM</h2>
        <nav className="list-none mb-10">
        <li>
          <Link to="/sobre-nosotros" className="text-gray-600 hover:text-themeBrandColor hover:underline">Sobre Nosotros</Link>
          </li>
        <li>
          <Link to="/verificacion-contenido" className="text-gray-600 hover:text-themeBrandColor hover:underline">Verificación de Contenido</Link>
          </li>
          <li>
          <Link to="/filosofia-comidas" className="text-gray-600 hover:text-themeBrandColor hover:underline">Filosofía de Comidas</Link>
          </li>
        <li>
        <Link to="/contacto" className="text-gray-600 hover:text-themeBrandColor hover:underline">Email</Link>
          </li>
          <li>
          <Link to="/anunciate" className="text-gray-600 hover:text-themeBrandColor hover:underline">Anúnciate</Link>
          </li>
          <li>
          <Link to="/colabora" className="text-gray-600 hover:text-themeBrandColor hover:underline">Escribe para Nosotros</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left p-0 m-0">&copy;{new Date().getFullYear()} DeDiabetes. Todos los derechos reservados.
      </p>


      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <p className="text-sm text-center sm:text-left p-0 my-0 mx-2">
          <Link to="/aviso-legal-politica-privacidad" className="text-gray-500 hover:text-themeBrandColor hover:underline">Politica de Privacidad</Link>
      </p>
      <p className="text-sm text-center sm:text-left p-0 my-0 mx-2">
      <Link to="/politica-de-cookies" className="text-gray-500 hover:text-themeBrandColor hover:underline">
                  Politica de Cookies
                </Link>
      </p>
        <a href="https://www.facebook.com/cuidadodiabetes" rel="noopener noreferrer"
          target="_blank" aria-label="Enlace pagina facebook" className="text-gray-500 mx-px">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/dediabetescom" rel="noopener noreferrer"
          target="_blank" aria-label="Enlace pagina facebook" className="text-gray-500 mx-px">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/dediabetescom/" rel="noopener noreferrer"
          target="_blank" aria-label="Enlace pagina facebook" className="text-gray-500 mx-px">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  
  );
};

export default Footer2;
