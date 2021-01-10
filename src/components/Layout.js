import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import Background from './Background';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <div>
      <Background />
      <Container onScroll={() => console.log('scrolling from layout')}>
        <Nav />
        {children}
        <Footer />
      </Container>
    </div>
  );
}
