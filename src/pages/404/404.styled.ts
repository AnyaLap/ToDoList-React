import styled from 'styled-components'

export const NotFoundWrapper = styled.div`    
     
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    background: linear-gradient(45deg, #210133, #ca0d0d);
    overflow: hidden;
    width: 100%;
    height: 100%;
`
export const NotFoundTitle = styled.h1`

    font-size: 150px;
    margin-bottom: 10px;
    animation: glow 2s infinite alternate;

 @keyframes glow {
    0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
    }
    100% {
    text-shadow: 0 0 15px #FF0080, 0 0 20px #FF8C00, 0 0 25px #FF0080;
    }
}
`
export const NotFoundText = styled.p`
    font-size: 30px;
    margin-bottom: 20px;
`
export const NotFoundLink = styled.a`
    text-decoration: none;
    color: #fff;
    background-color: #000;
    padding: 10px 20px;
    border-radius: 5px;
`