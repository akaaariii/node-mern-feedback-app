import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header'
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './SurveyNew';

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
