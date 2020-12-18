import React, { useState } from 'react';
import styled from 'styled-components';
import { FadeIn } from '../styles/FadeIn';
import MenuIcon from './MenuIcon';

const NavGrid = styled.nav`
  width: 100%;
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

  @media (max-width: 420px) {
    display: none;
  }
  display: grid;
`;

const Container = styled.div`
  width: 100%;
`;

const NavBlock = styled.nav`
  display: none;
`;

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <NavGrid>
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
      </NavGrid>
      <MenuIcon setToggle={setToggle} toggle={toggle} />
    </Container>
  );
}
