import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: linear-gradient(to bottom right, var(--orange), var(--yellow));
  width: 100vw;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Container>
        <Nav />
        {children}
        <Footer />
      </Container>
    </>
  );
}
