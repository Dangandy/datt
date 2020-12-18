import React from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Logo from '../components/Logo';

const HomeStyles = styled.div`
  display: grid;
  place-content: center;
`;

export default function Home() {
  return (
    <Layout>
      <HomeStyles>
        <Logo />
        <Headline />
      </HomeStyles>
    </Layout>
  );
}
