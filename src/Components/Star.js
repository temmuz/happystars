import React, {Component} from 'react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

render() {

  return (
<div className={`Star ${this.props.color}`}>
  <h4>{this.props.name}</h4>
<span>{`is from the universe '${this.props.universe}'`}</span>
</div>
)
}
}

export default Star;
