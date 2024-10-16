import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #edf0f1;
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container{
        display: flex;
        align-items: center;
        padding: 20px;
        flex-direction: column;
    }
    .error{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;
        background: linear-gradient(45deg, #0e5fc9, #ff2a04);
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .error__title {
        font-size: 150px;
        margin-bottom: 10px;
        animation: glow 2s infinite alternate;
    }
    @keyframes glow {
        0% {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
        }
        100% {
        text-shadow: 0 0 15px #FF0080, 0 0 20px #FF8C00, 0 0 25px #FF0080;
        }
    }
    .error__text {
        font-size: 30px;
        margin-bottom: 20px;
    }
    .error__link {
        text-decoration: none;
        color: #fff;
        background-color: #000;
        padding: 10px 20px;
        border-radius: 5px;
    }
`