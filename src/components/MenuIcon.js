/**
 * Menu icon forked from: https://www.jomor.design/
 */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const MenuIconStyles = styled.a`
  position: fixed;
  top: 50px;
  right: 50px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  cursor: pointer;

  ${({ hover, toggle }) =>
    hover || toggle
      ? css`
          border: 2px solid var(--red);
          transition: 0.3s ease-out;
        `
      : css`
          border: 2px solid var(--white);
          transition: 0.3s ease-out;
        `}

  & .line {
    width: 20px;
    height: 2px;
    margin-top: 8px;
    margin-bottom: 8px;
    ${({ hover, toggle }) =>
      hover || toggle
        ? css`
            background-color: var(--red);
            transition: 0.3s ease-out;
          `
        : css`
            background-color: var(--white);
            transition: 0.3s ease-out;
          `}
  }

  & .line1 {
    z-index: 1;
    ${({ hover }) =>
      hover &&
      css`
        transform: rotateZ(180deg);
        margin: 0;
        transition: 0.3s ease-out;
      `}
    ${({ toggle }) =>
      toggle &&
      css`
        transform: translate3d(0.5px, 2px, 5px) rotateZ(45deg);
        margin: 0;
        transition: 0.3s ease-out;
      `}
  }
  & .line2 {
    z-index: 2;
    ${({ hover }) =>
      hover &&
      css`
        /* transform: translate3d(0px, -8px, 0px) rotateZ(270deg); */
        transform: rotateZ(270deg);
        margin: 0;
        transition: 0.3s ease-out;
      `}
    ${({ toggle }) =>
      toggle &&
      css`
        transform: rotateZ(135deg);
        margin: 0;
        transition: 0.3s ease-out;
      `}
  }
  @media (max-width: 420px) {
    display: grid;
    place-content: center;
  }
  display: none;
`;

export default function MenuIcon({ toggle, setToggle }) {
  const [hover, setHover] = useState(false);
  return (
    <MenuIconStyles
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setToggle(!toggle)}
      toggle={toggle}
      hover={hover}
    >
      <div className="line line1" />
      <div className="line line2" />
    </MenuIconStyles>
  );
}
