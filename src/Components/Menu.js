import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render(){
    return(
      <div className="Menu">
        <ul>
          <li><Link to='/universes' activeClassName="active">Universes</Link></li>
          <li><Link to="/stars" activeClassName="active">Stars</Link></li>
          <li><Link to="/imprint" activeClassName="active">Imprint</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu;
