import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: var(--third-color);
    }
    
    
body {
    margin: 0;
    /* padding: 0; */
}
    main {
margin-top: 0px;
padding-bottom: 0;
background-color: var(--third-color);

  
    
    }
h1 {
    position: relative;
    z-index: 10;
padding-left: 11px;
margin-top: -60px;
font-size: 50px;
color: var(--primary-color);


}

h2 {
    padding-left: 10px;
    margin-top: 40px;
}

:root {
    --primary-color: #9eb5b3; 
    --secondary-color: #475e76;
    --third-color: #EDE9E8;
    --fourth-color: #24a0ed;
}
`;

export default GlobalStyles;
