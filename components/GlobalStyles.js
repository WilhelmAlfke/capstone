import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "poppins";
    src: url("/fonts/poppins/Poppins-Light.ttf"); 
    
}
@font-face {
    font-family: "prestage";
    src: ("/fonts/prestage/Prestage Regular.ttf");
}
    html,
    body {
        
        font-family: "poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
font-weight: bold;
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
    --fourth-color: #231F20;
    --fifth-color: #e97f7f;
}
`;

export default GlobalStyles;
