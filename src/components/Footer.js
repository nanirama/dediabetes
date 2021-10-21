import { Link } from 'gatsby';
import React from 'react';
import SocialLinks from '../constants/socialLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col p-10 font-bold text-gray-900 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
          <ul className="list-none">
              <li className="hover:text-themeBrandColor">
                <Link to="/recetas/">Recetas</Link>
              </li>
              <li className="hover:text-themeBrandColor">
                <Link to="/articles">
                  Artículos
                </Link>
              </li>
            </ul>
          </div>

          <div>
          <ul className="list-none">
            <li className="hover:text-themeBrandColor">
                <Link to="/aviso-legal-politica-privacidad">
                  Politica de Privacidad
                </Link>
              </li>
              <li className="hover:text-themeBrandColor">
                <Link to="/politica-publicidad">Politica de Publicidad</Link>
              </li>
              <li className="hover:text-themeBrandColor">
                <Link to="/politica-de-cookies">
                  Politica de Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none">
            <li className="hover:text-themeBrandColor">
                <Link to="/verificacion-contenido">
                  Verificación de Contenido
                </Link>
              </li>
              <li className="hover:text-themeBrandColor">
                <Link to="/filosofia-comidas">Filosofia de Comidas</Link>
              </li>
              <li className="hover:text-themeBrandColor">
                <Link to="/colabora">Colabora</Link>
              </li>

            </ul>
          </div>
          <div>
          <ul className="list-none">
          <li className="hover:text-themeBrandColor">
                <Link to="/anunciate">Anunciate</Link>
              </li>

              <li className="hover:text-themeBrandColor">
                <a href="mailto:info@dediabetes.com">Email</a>
              </li>
              <li className="hover:text-themeBrandColor">
                <Link to="/sobre-nosotros">Sobre Nosotros</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex justify-center">
          <p>
            &copy;{new Date().getFullYear()} DeDiabetes. Todos los derechos
            reservados
          </p>
        </div>

        <div>
          <SocialLinks styleClass="footer-icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
