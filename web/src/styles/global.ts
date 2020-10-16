import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: #ebf2f5;
  }

  body, button, input, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  button {
    cursor: pointer;
  }

  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
