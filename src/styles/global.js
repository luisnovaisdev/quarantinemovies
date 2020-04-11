import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto', cursive;
  }
  html,body{
    height: 100%;
  }
  html{
    --sidebar-bg: #1A1919;
    --sidebar-text: #fff;

    --header-bg: #1F1F1F;
    --header-text: #fff;

    --main-bg: #282526;
    --main-text: #fff;
    
  }
  #root{
    height: 100%;
    display: grid;
    grid-template-areas:
        "sidebar header"
        "sidebar main";
    grid-template-columns: 230px 1fr;
    grid-template-rows: 60px auto;
  }
`