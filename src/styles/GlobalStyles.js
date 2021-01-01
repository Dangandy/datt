import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #4b3c6b;
    --pink: #eb0c7b;
    --darkpink: #da0f7a;
    --orange: #edbc87;
    --darkorange: #ffa283;
    --blue: #16f2db;
    --darkblue: #13cdcd;
    --maroon: #8a447a;
    --grey: #6a6a8a;
    --white:#FDFFF7;
    --lg: 1140px;
    --sm: 420px;
  }
  body{
    margin: 0px;
    overflow-x:hidden;
  }
  html{
    scrollbar-width: thin;
    scrollbar-color: var(--pink) var(--purple);
  }
`;

export default GlobalStyles;
