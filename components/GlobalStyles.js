import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    font-family: "poppins", "poppins-semi-bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

@font-face {
    font-family: "poppins";
    src: url("/fonts/poppins/Poppins-Light.ttf"); 
    
}
@font-face {
    font-family: "poppins-semi-bold";
    src: url("/fonts/poppins/Poppins-SemiBold.ttf")
}

    html,
    body {
        
        
        background-color: var(--third-color);
        /* color: var(--fourth-color); */
        padding: 0;
        margin: 0;
    }
    
    


    body, main {
        width: 100%;
        margin-bottom: 60px;
padding: 0;
margin: 0;
background-color: var(--third-color);
  margin-bottom: 70px;

  
    
    }
h1 {
    position: absolute;
    margin: 0;
transform: skew(-45deg);
margin-top: 5px;
margin-left: 70px;
font-size: 120%;
font-family: poppins-semi-bold;
color: var(--primary-color);


}

h2 {
    padding-left: 10px;
    margin-top: 40px;
    margin-left: 25px;
    font-size: 0.8rem;
}

:root {
    --primary-color: #9eb5b3; 
    --secondary-color: #475e76;
    --third-color: #ede9e8;
    --fourth-color: #231F20;
    --fifth-color: #e97f7f;
}
`;

export default GlobalStyles;
