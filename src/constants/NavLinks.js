import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const MenuLink = styled.div`
  ${tw`flex flex-row items-center text-lg font-bold text-left capitalize bg-transparent rounded-lg md:w-auto focus:outline-none text-white hover:cursor-pointer justify-start`}
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 11px;
  }
  :first-of-type {
    margin-right: 12px;
  }
`;

export default function NavLinks({ tablet }) {
  return (
    <>
      {/* <MenuLink>
        <Link className="px-3 xl:px-3 py-3" to="/">
          Inicio
        </Link>
      </MenuLink> */}
      <MenuLink>
        <Link className="px-3 xl:px-3 py-3" to="/recetas">
          Recetas
        </Link>
      </MenuLink>

       <div className="relative group">
        <MenuLink>
          <button
            className="px-3 xl:px-4 py-3 outline-none border-none focus:outline-none"
            aria-label="Sobre Diabetes"
            style={{ font: 'inherit' }}
          >
            Sobre Diabetes &#9660;
          </button>
        </MenuLink>
        <div
          className="absolute z-10 hidden group-hover:block w-full right-full shadow-xl"
          style={tablet ? { top: 0, left: '100%' } : {}}
        >
          <div
            className="flex flex-col gap-4 rounded-lg text-center"
            style={{
              border: '2px solid #7d080e',
              borderTop: 'none',
              background: '#7d080e',
            }}
          >
            <MenuLink>
              <Link className="px-3 xl:px-4 py-3" to="/diabetes/causas/">
                Causas
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className="px-3 xl:px-3 py-3" to="/diabetes/diagnostico/">
                Diagnóstico
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className="px-3 xl:px-3 py-3" to="/diabetes/diabetes-tipo-1/">
                Diabetes Tipo 1
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className="px-3 xl:px-3 py-3" to="/diabetes/diabetes-tipo-2/">
                Diabetes Tipo 2
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className="px-3 xl:px-3 py-3" to="/diabetes/prediabetes/">
                Prediabetes
              </Link>
            </MenuLink>
            <MenuLink>
              <Link className="px-3 xl:px-3 py-3" to="/diabetes/sintomas/">
                Sintomas
              </Link>
            </MenuLink>

          </div>
        </div>
      </div>
      <div className="relative group w-40 min-w-min">
        <MenuLink>
          <button
            className="pl-3 py-3 outline-none border-none focus:outline-none"
            aria-label="Sobre Diabetes"
            style={{ font: 'inherit' }}
          >
            Cuidado &#9660;
          </button>
        </MenuLink>
        <div
          className="absolute z-10 hidden group-hover:block w-full shadow-xl"
          style={tablet ? { top: 0, left: '100%' } : {}}
        >
          <div
            className="flex flex-col  gap-4  rounded-lg"
            style={{
              border: '2px solid #94030b',
              borderTop: 'none',
              background: '#670308',
            }}
          >
            <MenuLink>
              <Link className="pl-3 py-3" to="/diabetes/alimentacion/">
                Alimentacion
              </Link>
            </MenuLink>
            <MenuLink>
              <Link
                className="px-3 xl:px-3 py-3"
                to="/diabetes/complicaciones/"
              >
                Complicaciones
              </Link>
            </MenuLink>
            <MenuLink>
              <Link
                className="pl-3 xl:px-3 py-3"
                to="/diabetes/controlar-la-diabetes/"
              >
                Controlar la Diabetes
              </Link>
            </MenuLink>
            <MenuLink>
              <Link
                className="pl-3 xl:px-3 py-3"
                to="/diabetes/insulina/"
              >
                Tratamiento de Insulina
              </Link>
            </MenuLink>
            <MenuLink>
              <Link
                className="pl-3 xl:px-3 py-3"
                to="/diabetes/tratamiento/"
              >
                Tratamiento
              </Link>
            </MenuLink>
            <MenuLink>
              <Link
                className="pl-3 xl:px-3 py-3"
                to="/diabetes/vivir-con-diabetes/"
              >
                Vivir con Diabetes
              </Link>
            </MenuLink>
          </div>
        </div>
      </div>
    </>
  );
}
