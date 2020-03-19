import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    background-image: linear-gradient(to right, #d299c2 0%, #fef9d7 100%);
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 12px;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: none; 
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0,0,0,0.4); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.25); 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(0,0,0,0.2); 
}
`;

export default GlobalStyles;
