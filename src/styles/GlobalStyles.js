import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --green: #59886b;
    --red: #c05555;
    --orange: #ffc85c;
    --yellow: #fff8c1;
    --lg: 1140px;
    --sm: 420px;
  }
  body{
    margin: 0px;
  }
`;

export default GlobalStyles;