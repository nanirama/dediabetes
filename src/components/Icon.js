import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const IconInfo = props => styled.svg`
  position: absolute;
  top: 0;
  left: -10px;
  background: var(--clr-white);
  transform: translate(-50%, -50%);
  border-radius: 70%;
  border: 6px solid var(--clr-white);
`;

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  }(props);
  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={props.viewBox}
    >
      <path style={styles.path} d={props.icon}></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  viewBox: PropTypes.string,
  background: PropTypes.string,
  transform: PropTypes.string,
  position: PropTypes.string,
};

Icon.defaultProps = {
  size: 58,
  viewBox: '0 0 1024 1024',
  transform: 'translate(-50%, -50%)',
  background: 'white',
  top: '30px',
  position: 'absolute',
};

export default Icon;
