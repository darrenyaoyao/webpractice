import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Answerlist from './components/Answerlist';
import Question from './components/Question';
import NotFoundPage from './components/NotFoundPage';


export default (
  <Route path="/">
    <IndexRedirect to="/question" />
    <Route path="/question" component={Question}>
    <Route path="/answerlist" component={Answerlist}>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
