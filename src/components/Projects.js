import React from 'react';
import styled from 'styled-components';
import ScrollCarousel from './ScrollCarousel';

const AboutWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  /* need to hardcode box sizes, else images loading throws off calculations */
  /* could be a job for imagesLoaded */
  width: 70rem;
  height: 100vh;
  margin: 0 2rem;
`;

export default function About() {
  return (
    <ScrollCarousel>
      <AboutWrapper>
        <img
          src="https://picsum.photos/720/540/?image=88"
          alt=""
          className="img"
        />
      </AboutWrapper>
      <AboutWrapper>
        <img
          src="https://picsum.photos/720/540/?image=512"
          alt=""
          className="img"
        />
      </AboutWrapper>
      <AboutWrapper>
        <img
          src="https://picsum.photos/720/540/?image=472"
          alt=""
          className="img"
        />
      </AboutWrapper>
    </ScrollCarousel>
  );
}
