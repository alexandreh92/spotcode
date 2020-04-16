import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  background-color: hsl(0, 0%, 21%);
}

body {
  -webkit-font-smoothing: antialiased;
}

form, input, button {
  font: 14px 'Roboto', sans-serif
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`;
