import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/consola.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Consola;
    src: url(${font});
  }

  html {
    font-family: Consola,monospace,ui-monospace;
    color: var(--green);
  }
`;
export default Typography;
