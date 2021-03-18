import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Logo from '../components/Logo';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const PageStyles = styled.div`
  display: grid;
  place-content: center;
  height: 70vh;
`;

export default function Home() {
  const [showLoading, setShowLoading] = useState(false);

  // Force loading
  useEffect(() => {
    const timer1 = setTimeout(() => setShowLoading(null), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Typography />
      {showLoading && <Loading />}
      {!showLoading && (
        <Layout>
          <PageStyles>
            <Logo />
            <Headline />
          </PageStyles>
        </Layout>
      )}
    </>
  );
}
