import React from 'react';
import {Router} from 'react-router-dom';
import Routes from './routes'
import GlobalStyle from './styles/global'

import SideBar from './components/Sidebar';
import Header from './components/Header';
import history from './services/history';

function App(){
  return(
    <Router history={history}>
      <SideBar/>
      <Header/>
      <Routes/>
      <GlobalStyle />
    </Router>
  )
};

export default App;