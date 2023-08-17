import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  color: #a9a9b3;
  background-color: #232425;
  letter-spacing: 0.08em;

}

/* Remove list styles on ul, ol elements */
ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
} 

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  height: 100%;
  //font-family: 'Inter', sans-serif;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif;
}

/* Remove text-decoration on links */
a {
  text-decoration: none;
}

/* Reset button styles */
button {
  appearance: none;
  outline: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
}

/* Remove outline on focused elements */
:focus {
  outline: 0;
}

  // body {
  //   box-sizing: border-box;
  //   margin: 0;
  //   padding: 0;
	// 	height: 100vh;
  //   overflow-x: auto; 
  //   border: 1px solid red;
  //   height: auto;
  //   display:flex;

	// 	min-width: 100vw;
	// 	background-color: #fff;
	// 	color: #fff;
  //   width: 100%;
  //   font-size: 16px;
  //   @media (max-width: 768px) {
  //     width: 100%;
  //   overflow-x: hidden ;
  // }
  // }
  
  `;
export default GlobalStyle;