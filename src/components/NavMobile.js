import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavLinks from '../constants/NavLinks';
import Login from './firebase/Login';

const MobileNav = styled.div`
  ${tw`col-span-full`}
  max-width: 475px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: max-content;
  justify-content: center;
  display: ${props => (props.toggleMenu ? 'grid' : 'none')};
  @media (min-width: 425px) {
    grid-template-columns: max-content max-content;
    justify-content: space-between;
  }
  @media (min-width: 701px) {
    display: none;
  }
  @media (min-width: 476px) {
    order: 9999;
  }
`;
const MobileNavBtn = styled.button`
  ${tw`text-lg font-bold capitalize bg-transparent rounded-lg md:w-auto focus:outline-none text-white hover:cursor-pointer justify-center px-3 xl:px-3 py-3 border-none justify-self-end `}
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 11px;
  }
  @media (min-width: 701px) {
    display: none;
  }
`;

export default function NavMobile() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const innerWidth = typeof window !== 'undefined' && window.innerWidth < 700;
  const [mobileLogin, setMobileLogin] = React.useState(innerWidth);

  React.useEffect(() => {
    function handleChange() {
      this.setTimeout(() => {
        if (window.innerWidth > 700) setMobileLogin(false);
        else setMobileLogin(true);
      }, 20);
    }
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, []);
  return (
    <>
      <MobileNavBtn onClick={() => setToggleMenu(menu => !menu)} className="flex flex-row items-center">
      {mobileLogin ? <Login mobile /> : ''}
        <MenuIcon fontSize="large" />
      </MobileNavBtn>
      
      <MobileNav toggleMenu={toggleMenu}>
        

        <NavLinks />
      </MobileNav>
    </>
  );
}