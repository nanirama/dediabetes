import React, { useState } from 'react'
import { IconBlock } from '../components/Icons'
import { ICONS } from '../constants/icons'
import DownIcon from '../components/DownIcon'
import HomeLogo from './home-logo.svg'
import Collapse from 'react-collapse'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MobileNavbar = ({ toggle, isOpen }) => {
  const menuToggler = {
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
  }

  return (
    <header className="relative">
      <nav className="relative flex justify-center md:hidden align-center">
        <Link to="/">
          <HomeLogo className="w-32 justify-self-center" />
        </Link>
        <div
          className="absolute flex"
          style={{ right: 0, top: '50%', transform: 'translateY(-50%)' }}
        >
          <Link to="/busqueda">
            <IconBlock
              icon={ICONS.SEARCH}
              size={40}
              color="rgb(90,87,89)"
              position="relative"
              viewBox="-50 -50 600 600"
              // top="12px"
            ></IconBlock>
          </Link>
         
          <button
            onClick={toggle}
            // style={menuToggler}
            aria-label="menu electronicos"
          >
            <IconBlock
              icon={ICONS.MENU}
              size={40}
              color="rgb(90,87,89)"
              position="relative"
              viewBox="-50 0 2500 2500"
              top="2px"
            ></IconBlock>
          </button>
        </div>
      </nav>
      <StyledMenu>
        <Collapse isOpened={isOpen}>
          <ul className="ml-8">
            <li>
                <Link to="/recetas">Recetas</Link>
            </li>
            <li>
                <Link to="/diabetes/dieta-para-diabeticos">Dieta para Diabeticos</Link>
            </li>
            <li>
              <SubMenu title="Sobre Diabetes">
                <li>
                  <Link to="/diabetes/causas">Causas</Link>
                </li>
                <li>
                  <Link to="/diabetes/sintomas">Sintomas</Link>
                </li>
                <li>
                  <Link to="/diabetes/diagnostico">Diagnóstico</Link>
                </li>
              </SubMenu>
            </li>
            <li>
              <SubMenu title="Viviendo con Diabetes">
                <li>
                  <Link to="/diabetes/alimentacion">Alimentación</Link>
                </li>
                <li>
                  <Link to="/diabetes/vivir-con-diabetes">Vivir con Diabetes</Link>
                </li>
                <li>
                  <Link to="/diabetes/complicaciones">Complicaciones</Link>
                </li>
                <li>
                  <Link to="/diabetes/tratamiento">Tratamiento</Link>
                </li>
              </SubMenu>
            </li>
          </ul>
        </Collapse>
      </StyledMenu>
    </header>
  )
}

const StyledMenu = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  background-color:white;
`

const SubMenu = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <a onClick={() => setIsOpen(!isOpen)}>
      {title} <DownIcon />
      <Collapse
        theme={{ collapse: 'ReactCollapse--collapse', content: 'no-shadow' }}
        isOpened={isOpen}
      >
        <ul className="pl-2">{children}</ul>
      </Collapse>
    </a>
  )
}
export default MobileNavbar
