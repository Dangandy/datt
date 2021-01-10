/**
 * Manatory loading animation that useer sees when they load the screen
 */
import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  transform: skew(-2deg, -2deg);
  width: 100vw;
  height: 100vh;
  color: var(--white);

  div {
    display: flex;
    flex-direction: row;
  }
`;

export default function Loading() {
  const {
    scaleL,
    scaleO,
    scaleA,
    scaleD,
    scaleI,
    scaleN,
    scaleG,
    scaleDot1,
    scaleDot2,
  } = useSpring({
    to: async (next) => {
      while (1) {
        await next({ scaleL: 1.1 });
        await next({ scaleO: 1.1, scaleL: 0.9 });
        await next({ scaleA: 1.1, scaleL: 1, scaleO: 0.9 });
        await next({ scaleD: 1.1, scaleO: 1, scaleA: 0.9 });
        await next({ scaleI: 1.1, scaleA: 1, scaleD: 0.9 });
        await next({ scaleN: 1.1, scaleD: 1, scaleI: 0.9 });
        await next({ scaleG: 1.1, scaleI: 1, scaleN: 0.9 });
        await next({ scaleDot1: 1.1, scaleN: 1, scaleG: 0.9 });
        await next({ scaleDot2: 1.1, scaleG: 1, scaleDot1: 0.9 });
        await next({ scaleDot2: 0.9, scaleDot1: 1 });
        await next({ scaleDot2: 1 });
      }
    },
    from: {
      scaleL: 1,
      scaleO: 1,
      scaleA: 1,
      scaleD: 1,
      scaleI: 1,
      scaleN: 1,
      scaleG: 1,
      scaleDot1: 1,
      scaleDot2: 1,
    },
  });
  return (
    <Container>
      <div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleL.to((value) => `scale(${value})`),
          }}
        >
          L
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleO.to((value) => `scale(${value})`),
          }}
        >
          o
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleA.to((value) => `scale(${value})`),
          }}
        >
          a
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleD.to((value) => `scale(${value})`),
          }}
        >
          d
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleI.to((value) => `scale(${value})`),
          }}
        >
          i
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleN.to((value) => `scale(${value})`),
          }}
        >
          n
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleG.to((value) => `scale(${value})`),
          }}
        >
          g
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleDot1.to((value) => `scale(${value})`),
          }}
        >
          .
        </animated.div>
        <animated.div
          style={{
            fontSize: '4rem',
            transform: scaleDot2.to((value) => `scale(${value})`),
          }}
        >
          .
        </animated.div>
      </div>
    </Container>
  );
}
