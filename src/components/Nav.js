import React from 'react';
import styled from 'styled-components';
import { FadeIn } from '../styles/FadeIn';

const NavStyles = styled.nav`
  width: 100%;
  display: grid;
  place-content: center;
  margin-top: 6rem;

  ul {
    max-width: var(--lg);
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
  }

  li {
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    div {
      :hover {
        color: var(--red);
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavStyles>
      <ul className="nav-container">
        <li>
          <FadeIn>About</FadeIn>
        </li>
        <li>
          <FadeIn>Projects</FadeIn>
        </li>
        <li>
          <FadeIn>Contact</FadeIn>
        </li>
      </ul>
    </NavStyles>
  );
}
