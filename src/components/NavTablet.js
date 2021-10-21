import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NavLinks from '../constants/NavLinks';

const MenuWrapper = styled.div`
  ${tw`absolute hidden rounded-lg`}
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  min-width: 257px;
  max-width: unset;
  height: auto;
  background: #8e030b;
  right: 0;

  display: ${props => (props.toggleMenu ? 'block' : 'none')};
`;

const DropDownWrapper = styled.div`
  ${tw`hidden  xl:hidden z-10 relative`}
  margin-left: auto;

  @media (min-width: 701px) and (max-width: 1279px) {
    display: block;
  }

  &:hover ${MenuWrapper} {
    display: block;
  }
`;

const ButtonLink = styled.button`
  ${tw`text-lg font-bold capitalize bg-transparent rounded-lg md:w-auto focus:outline-none text-white hover:cursor-pointer justify-center px-3 xl:px-3 py-3 border-none`}
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 11px;
  }
`;

const NavTablet = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setToggleMenu(false)}>
      <DropDownWrapper onClick={() => setToggleMenu(menu => !menu)}>
        <ButtonLink>
          <MenuIcon fontSize="large" />
        </ButtonLink>
        <MenuWrapper toggleMenu={toggleMenu}>
          <NavLinks tablet />
        </MenuWrapper>
      </DropDownWrapper>
    </ClickAwayListener>
  );
};

export default NavTablet;
