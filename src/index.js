import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Universes from './Components/Universes';
import Universe from './Components/Universe';
import Stars from './Components/Stars';
import Imprint from './Components/Imprint';
import {getApi} from './Components/api';

import {Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
const universes = [];
const stars = [];
getApi('universe').then(function(response) {
  return response.json();
}).then(function(myJson) {
  myJson.universes.map((universe) => {
    universes.push(universe);
  })
})
getApi('star').then(function(response) {

  return response.json();
}).then(function(myJson) {
  myJson.stars.map((star) => {
    stars.push(star);
  })
}).then(function() {
  ReactDOM.render(<Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>

      <Route path="/universes" component={Universes} starData={stars} universeData={universes}/> {/* Parameter route */}
      <Route path="/universes/:id" component={Universe} starData={stars} universeData={universes}/>

      <Route path="/stars" component={Stars} starData={stars} universeData={universes}/>
      <Route path="/imprint" component={Imprint}/>

    </Route>
  </Router>, document.getElementById('root'));
});

registerServiceWorker();
