import React from 'react'
import styled from 'styled-components'

const IconInfo = styled.svg`
  position: ${props => props.position || 'absolute'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  background: ${props => props.background || 'transparent'};
  transform: ${props => props.translate || 'translate(0%, 0%)'};
  border-radius: ${props => props.radius || 0};
  border: ${props => props.border || ''};
  width: ${props => `${props.size}px` || '40px'};
  height: ${props => `${props.size}px` || '40px'};
  display: inline-block;
  vertical-align: ${props => props.vertical || 'middle'};

  path {
    fill: ${props => props.color || 'red'};
  }
`

export const IconBlock = props => {
  return (
    <IconInfo
      viewBox={props.viewBox ? props.viewBox : '"0 0 490 490'}
      size={props.size}
      color={props.color}
      background={props.background}
      translate={props.translate}
      top={props.top}
      left={props.left}
      position={props.position}
      radius={props.radius}
      vertical={props.vertical}
      border={props.border}
    >
      <path d={props.icon}></path>
    </IconInfo>
  )
}
