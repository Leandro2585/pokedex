import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;
        margin: 10vh 20vw;
    }
    main{
      width: 60vw;
      height: 80vh;
      position: relative;
    }
    main svg{
      width: 60vw;
      height: 80vh;
    }
    main button{
      position: absolute;
      background: transparent;
      border: 0;
      margin: 0 auto;
      outline: 0;
      color: white;
      font-weight: bold;
      top: 73.3%;
      left: 57%;
      width: calc(2 * 36.6px);
      height: calc(2 * 13px);
      font-size: 12px;
      z-index: 2;
    }
    main button.listen{
      top: 73.3%;
      left:75.5%;
    }
    main button:active{
        background:rgba(0,0,0,0.4);
    }
    main label{
      font-size: 24px;
      opacity: 0.9;
      position: absolute;
      top: 45%;
      left: 60%;
      font-weight: bold;

      text-transform: uppercase;
    }
    main div{
     width:18.5vw;
     height: 18vh;
     left: 7%;
     top: 36.5%;
     border-radius: 5px;
     position: absolute;
     z-index: 2;
     display: flex;
     align-items: center;
     justify-content: center;
    }
    main div img{
      border: 0;
      background: transparent;
      color: rgba(0,0,0,0);
    }
    @media screen and (max-width: 360px){
      body {
        margin: 0;
      }
      main{
        margin:0;
        width: 99.5vw;
        height: 97vh;
        position: relative;
      }
      main svg{
        width: 90%;
        height: 100%;
        margin-left: 5%;
      }
     main div{
      width:28vw;
      height: 10vh;
      left: 11.2%;
      top: 43.8%;
      border-radius: 5px;
      position: absolute;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
     }
     main div img{
       width:80%;
       height: auto;
       border: 0;
       background: transparent;
       color: rgba(0,0,0,0);
     }
     main label{
       font-size: 12px;
       opacity: 0.9;
       position: absolute;
       top: 48%;
       left: 60%;
       font-weight: bold;

       text-transform: uppercase;
     }
     main button{
       position: absolute;
       background: transparent;
       border: 0;
       margin: 0 auto;
       outline: 0;
       color: white;
       font-weight: bold;
       top: 61%;
       left: 56%;
       width: 36.6px;
       height:13px;
       font-size: 6px;
       z-index: 2;
     }
     main button.listen{
       top: 61%;
       left: 72%;
     }

    }
`;
