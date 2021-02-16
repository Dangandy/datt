import styled from 'styled-components';

export const FadeIn = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  font-size: clamp(0.5rem, 2.5vh, 1rem);
  animation: fadeIn 2.3s ease forwards;
`;
