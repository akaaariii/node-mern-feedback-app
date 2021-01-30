import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header'
const Landing = () => (<div>Landing</div>);
const Dashboard = () => (<div>Dashboard</div>);
const SurveyNew = () => (<div>SurveyNew</div>);

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/surveys" exact component={Dashboard} />
      <Route path="/surveys/new" component={SurveyNew} />
    </div>
  )
}

export default App
