import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';
import background from '../assets/images/background.svg';
import Background2 from './Background2';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* background: linear-gradient(to bottom right, var(--orange), var(--yellow)); */
  /* background-image: url(${background}); */
  width: 100vw;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Background2 />
      <Container>
        <Nav />
        {children}
      </Container>
      <Footer />
    </>
  );
}
