/**
 * Animated the react logo because that's all I know
 */

import React from 'react';
import styled from 'styled-components';

const Atom = styled.div`
  border-radius: 50%;
  width: var(--atomRadius);
  height: var(--atomRadius);
  background-color: var(--purple);
  position: relative;
  top: 450px;
  left: 450px;
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg) translateX(500px) rotateZ(-0deg) rotateY(-60deg);
    }
    100% {
      transform: rotateZ(360deg) translateX(500px) rotateZ(-360deg)
        rotateY(-60deg);
    }
  }

  animation: rotate 6s infinite linear;
`;

const Orbit = styled.div`
  border: solid 2px var(--grey);
  border-radius: 50%;
  width: 1000px;
  height: 1000px;
  position: absolute;
  transform: translateZ(1000px) rotateZ(0deg) rotateY(73deg);
  transform-style: preserve-3d;
`;
const Orbit2 = styled.div`
  border: solid 2px var(--pink);
  border-radius: 50%;
  width: 1000px;
  height: 1000px;
  position: absolute;
  transform: translateZ(1000px) rotateZ(-60deg) rotateY(73deg);
  transform-style: preserve-3d;
`;
const Orbit3 = styled.div`
  border: solid 2px var(--orange);
  border-radius: 50%;
  width: 1000px;
  height: 1000px;
  position: absolute;
  transform: translateZ(1000px) rotateZ(60deg) rotateY(73deg);
  transform-style: preserve-3d;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  --atomRadius: 100px;
  --orbitRadius: 500px;
`;

export default function About() {
  return (
    <Container>
      <Orbit>
        <Atom>FRONTEND</Atom>
      </Orbit>
      <Orbit2>
        <Atom>BACKEND</Atom>
      </Orbit2>
      <Orbit3>
        <Atom>DATA SCIENCE</Atom>
      </Orbit3>
      Click to view projects
    </Container>
  );
}
