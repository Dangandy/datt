import React from 'react';
import styled from 'styled-components';
import { FadeIn } from '../styles/FadeIn';

const Container = styled.div`
  width: clamp(200px, 61%, 484px);
  margin: 0 auto;
  text-align: center;
`;

export default function Headline() {
  return (
    <Container>
      <FadeIn>
        A Full Stack developer
        <br /> with an interest in Data Science.
      </FadeIn>
    </Container>
  );
}
