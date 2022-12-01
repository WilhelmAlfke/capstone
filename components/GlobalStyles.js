import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: #d2b9a5;
    }
    
    
body {
    margin: 0;
    /* padding: 0; */
}
    main {
margin-top: 0px;
padding-bottom: 0;

  
    
    }
h1 {
    position: relative;
    z-index: 10;
padding-left: 11px;
margin-top: -60px;
font-size: 50px;
color: #d2b9a5;


}

h2 {
    padding-left: 10px;
    margin-top: 40px;
}
`;

export default GlobalStyles;
