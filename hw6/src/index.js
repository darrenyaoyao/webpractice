import React from 'react';
import { render } from 'react-dom';
import ChatApp from './components/ChatApp';
import Home from './components/Home'
import Users from './components/Users'
import User from './components/User'
import './chatroom.css';
import { Router, Route, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="chat" component={ChatApp}/>
    <Route path="users" component={Users}>
    	<Route path=":userId" component={User}/>
  	</Route>
  </Router>
  , document.getElementById('root'));