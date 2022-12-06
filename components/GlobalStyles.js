import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

@font-face {
    font-family: "poppins";
    src: url("/fonts/poppins/Poppins-Light.ttf"); 
    
}

    html,
    body {
        
        font-family: "poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: var(--third-color);
        color: var(--fourth-color);
        padding: 0;
        margin: 0;
    }
    
    


    body, main {
padding: 0;
margin: 0;
background-color: var(--third-color);

  
    
    }
h1 {
transform: skew(-45deg);
margin-top: 0;
margin-left: 60px;
font-size: 2.5rem;
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
