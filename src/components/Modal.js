import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ICONS } from '../constants/icons';
import { IconBlock } from './Icons';
import useStickyState from './useStickyState';

const Modal = ({ children }) => {
  const {
    file: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "optin" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // works like useState except it takes default value and localStorage key as arguments
  const [showModal, setShowModal] = useStickyState('show', 'subscribed');

  const closeModal = () => setShowModal('hide');

  return showModal === 'show' ? (
    <StyledModal>
      <ClickAwayListener onClickAway={closeModal}>
        <Div className="w-full max-w-2xl p-5 text-white bg-black shadow-lg">
          <Cross onClick={closeModal}>
            <IconBlock
              icon={ICONS.CLOSE}
              size={25}
              // color="rgb(90,87,89)"
              color="black"
              position="relative"
              viewBox="-50 -50 600 600"
              // top="12px"
            ></IconBlock>
          </Cross>
          <div className="border-4 border-white">
            <BackgroundImage tag="div" fluid={image} className="h-48" />
            {children}
          </div>
        </Div>
      </ClickAwayListener>
    </StyledModal>
  ) : (
    ''
  );
};

const popup = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }

`;

const Cross = styled.div`
  z-index: 10;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Div = styled.div`
  animation: ${popup} 0.2s ease-in forwards;
`;

const StyledModal = styled.div`
  padding: 0 10px;
  z-index: 2000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .overlay {
    z-index: -1;
  }
`;

export default Modal;
