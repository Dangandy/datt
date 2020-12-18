import React from 'react';
import styled from 'styled-components';
import { FadeIn } from '../styles/FadeIn';

const FooterStyles = styled.footer`
  display: grid;
  place-content: center;
  padding: 2rem 0rem 2rem 0rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FadeIn>
        Made with ♥ by Andy Dang &copy; {new Date().getFullYear()}
      </FadeIn>
    </FooterStyles>
  );
}
