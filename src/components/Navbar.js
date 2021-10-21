import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavLinks from '../constants/NavLinks';
import Login from './firebase/Login';
import { NavLogo } from './home-logo.svg';
import NavMobile from './NavMobile';
import NavTablet from './NavTablet';
import NavSearchBar from './NavSearchBar';
import NavSearchResults from './NavSearchResults';

const NavGrid = styled.div`
  ${tw`grid py-6 px-4 2xl:p-8 max-w-full justify-center items-center gap-2 2xl:gap-6`}
  grid-template-columns: 1fr 1fr;
  @media (min-width: 476px) {
    grid-template-columns: 1fr max-content minmax(min-content, 400px);
  }
  .sign-in-btn {
    transition: all 1s ease;
    border: 3px solid black;
    background-color: white;
    padding: 5px 10px;
    font-weight: bold;
    color: black;
    border-radius: 25px;
  }
  .sign-in-btn:hover {
    background-color: black;
    color: white;
    border: 3px solid white;
  }
  .sign-in-btn:active {
    transition: 0.3s ease;
    background-color: red;
    color: grey;
  }
  .userpfp {
    max-width: 50px;
    border-radius: 30px;
  }
  @media (min-width: 701px) {
    grid-template-columns: 1fr max-content minmax(min-content, 400px) 4.375rem;
  }
`;

const Navbar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <div className="bg-themeBrandColor ">
      <NavGrid>
        <Link to="/" className="mx-4">
          <NavLogo className="h-8" />
        </Link>

        <NavMobile />
        
        
          <div className="hidden xl:flex gap-6 items-center">
          <NavLinks />
         </div>
    
        <NavSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <NavTablet />
        <Login />
      </NavGrid>
      {searchTerm && <NavSearchResults searchTerm={searchTerm} />}
    </div>
  );
};

export default Navbar;
