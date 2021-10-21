import React from 'react'
import styled from 'styled-components'
import { ICONS } from '../../constants/icons'
import { IconBlock } from '../Icons'

const Blockquote = ({ children, display }) => {
  if (display === 'warning')
    return (
      <Wrapper>
        <div className="container warning">
          <IconBlock
            icon={ICONS.WARNING}
            size="50"
            color="blue"
            viewBox="-100 -400 1000 1500"
            background="white"
            translate="translate(-50%, -50%)"
            left="-3px"
            radius="50%"
            border="6px solid white"
          ></IconBlock>
          {children}
        </div>
      </Wrapper>
    )
  if (display === 'info')
    return (
      <Wrapper>
        <div className="container info">
          <IconBlock
            icon={ICONS.INFO}
            size="50"
            color="blue"
            viewBox="0 0 512 512"
            background="white"
            translate="translate(-25%, -25%)"
            left="-3px"
            radius="50%"
            border="6px solid white"
          ></IconBlock>
          {children}
        </div>
      </Wrapper>
    )
  if (display === 'test') {
    return (
      <Wrapper className="p-10">
        <div className="quote">
          <IconBlock
            icon={ICONS.TWITTER}
            size="80"
            color="blue"
            viewBox="-25 0 550 550"
            left="-12px"
            top="-12px"
            position="relative"
          ></IconBlock>
          {children}
        </div>
      </Wrapper>
    )
  }
  if (display === 'default') {
    return (
      <Wrapper>
        <div className=" default">{children}</div>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper className="p-10">
        <div className="quote">
          <IconBlock
            icon={ICONS.QUOTE}
            size="80"
            color="blue"
            viewBox="-25 0 550 550"
            left="-12px"
            top="-12px"
            position="relative"
          ></IconBlock>
          {children}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.blockquote`
  .container {
    padding: 2rem 1.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    color: var(--clr-grey-1);
    border-left: 3px solid var(--clr-grey-5);
    position: relative;
    margin: 2rem 0;
  }
  @media (min-width: 1170px) {
    .container {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid var(--clr-white);
  }
  .info {
    background: #fffaeb;
    color: var(--clr-primary-1);
    border-color: var(--clr-primary-5);
    .icon {
      color: var(--clr-primary-5);
    }
  }
  .warning {
    background: #fffaeb;
    color: #513c06;
    border-color: #f7d070;
    .icon {
      color: #f7d070;
    }
  }
  .default {
    padding: 2rem 6rem 2rem 6rem;
    background: white;
    position: relative;
  }
  @media (min-width: 1170px) {
    .default {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }
  .quote {
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    font-style: italic;
    color: var(--clr-grey-5);
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.2rem;
    margin: 2rem 0;
    .quote-icon {
      font-size: 6rem;
      color: var(--clr-primary-5);
    }
  }
`
export default Blockquote
