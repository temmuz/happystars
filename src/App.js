import React, {Component} from 'react';

import Menu from './Components/Menu';
import Logo from './Components/Logo';
import logo from './Assets/logo.svg';
import './scss/App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <div className="Header">
        <Logo src={logo}/>
        <Menu/>
      </div>

      <div className="Container">
        {this.props.children}
      </div>
    </div>);
  }
}

export default App;
