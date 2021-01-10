import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Headline from '../components/Headline';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Logo from '../components/Logo';
import Rocket from '../components/Rocket';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const HomeStyles = styled.div`
  display: grid;
  place-content: center;
`;

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  // Force loading
  useEffect(() => {
    //
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
          <HomeStyles>
            <Logo />
            <Headline />
          </HomeStyles>
        </Layout>
      )}
    </>
  );
}
