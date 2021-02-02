import { use } from 'passport';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header'
const Landing = () => (<div>Landing</div>);
const Dashboard = () => (<div>Dashboard</div>);
const SurveyNew = () => (<div>SurveyNew</div>);

const App = ({ fetchUser }) => {

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/surveys" exact component={Dashboard} />
      <Route path="/surveys/new" component={SurveyNew} />
    </div>
  )
}

export default connect(null, actions)(App)
