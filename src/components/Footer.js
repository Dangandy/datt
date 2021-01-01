import React from 'react';
import styled from 'styled-components';
import { FadeIn } from '../styles/FadeIn';
import Rocket from './Rocket';

const FooterStyles = styled.footer`
  display: grid;
  place-content: center;
  padding: 0rem 0rem 4rem 0rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FadeIn>
        {/* Made with ♥ by Andy Dang &copy; {new Date().getFullYear()} */}

        <Rocket />
      </FadeIn>
    </FooterStyles>
  );
}
