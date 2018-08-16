import React, {Component} from 'react';
import Star from './Star';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universes: [],
      stars: []
    };
  }
  componentWillMount() {
    this.setState({universes: this.props.route.universeData, stars: this.props.route.starData});
  }

  render() {
    const universes = this.state.universes;
    const stars = this.state.stars;

    const starNode = stars.map((star) => {
      let universeOfStar = {};
      universes.map((universe) => {
        if (star.universeId === universe.id) {
          universeOfStar.name = universe.name;
        }
      })

      return (<Star color={star.color} key={star.id} name={star.name} universe={universeOfStar.name}/>)
    });
    return (<div>
      <h1>Stars</h1>
      <div className="Stars">
        {starNode}
      </div>
    </div>);
  }
}

export default Stars;
