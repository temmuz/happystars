import React, {Component} from 'react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let display = {
      display: `${this.props.universe
        ? 'inline'
        : 'none'}`
    }
    return (<div className={`Star ${this.props.color}`}>
      <h4>{this.props.name}</h4>
      <span style={display}>{
          this.props.universe
            ? `is from the universe '${this.props.universe}'`
            : ''
        }</span>
      <span onClick={this.props.handleDelete} data-key={this.props.datakey} className="deleteStar"></span>
    </div>)
  }
}

export default Star;
