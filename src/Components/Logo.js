import React, {Component} from 'react';
import {Link} from 'react-router';

class Logo extends Component {
  render() {
    return (<Link to='/' activeClassName="active" className="Logo">
      <img src={this.props.src} alt=""/>
    </Link>);
  }

}

export default Logo;
