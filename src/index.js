import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import AppStory from './components/AppStory';
import Summary from './components/Summary';
import Category from './components/Category';
import Search from './components/Search';
import Type from './components/Type';
import Rank from './components/Rank';
import Shelf from './components/Shelf';
import Home from './components/Home';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Render the main component into the dom
ReactDOM.render(
  (<Router history={hashHistory}>

    <Route path="/" component={App} />
    <Route path="/story" component={AppStory} >
      <IndexRoute component={Home}/>
      <Route path="type" component={Type}/>
      <Route path="rank" component={Rank}/>
      <Route path="shelf/:username" component={Shelf}/>
    </Route>
    <Route path="/story/summary/:_id" component={Summary} />
    <Route path="/story/category/:_id" component={Category} />
    <Route path="/story/search/(:storyname)" component={Search} />
    <Route path="*" component={App}/>
  </Router>),
  document.getElementById('app'));
