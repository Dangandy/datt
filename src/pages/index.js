import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import GlobalStyles from '../styles/GlobalStyles';

const Screen1 = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-content: center;
`;

export default function Home() {
  return (
    <Screen1>
      <GlobalStyles />
      <Logo />
    </Screen1>
  );
}
