import React from 'react';
import { render } from 'react-dom';
import ChatApp from './components/ChatApp';
import Home from './components/Home'
import './chatroom.css';
import { Router, Route, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="chat" component={ChatApp}/>
  </Router>
  , document.getElementById('root'));