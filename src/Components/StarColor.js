import React, {Component} from 'react';

class StarColor extends Component {
  render() {
    return (<span className="StarColor" onClick={this.props.handleClick} color={this.props.color}></span>)
  }
}

export default StarColor
