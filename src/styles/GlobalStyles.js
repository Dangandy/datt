import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #59886b;
    --red: #c05555;
    --orange: #ffc85c;
    --yellow: #fff8c1;
  }
  body {
    background-color: var(--green);
    margin: 0px;
  }
`;

export default GlobalStyles;
