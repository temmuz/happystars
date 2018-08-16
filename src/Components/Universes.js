import React, {Component} from 'react';
import {Link} from 'react-router';

class Universes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      universeName: '',
      universeSize: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      if (this.state.universeSize > 200) {
        this.setState({universeSize: 200});
      }
    });
  }
  handleClick = () => {
    this.setState({clicked: true});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://happy-stars.herokuapp.com/api/universe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: `${this.state.universeName}`, maxSize: `${this.state.universeSize}`})
    }).then(() => {
      this.setState({clicked: false});
    })
  }

  render() {
    const universes = this.props.route.universeData;
    const stars = this.props.route.starData;
    stars.map((star) => {})
    universes.map((universe) => {})
    const universeNode = universes.map((universe) => {
      let starNumber = [];
      stars.map((star) => {
        if (star.universeId === universe.id) {
          starNumber.push(star);
        }
      })
      let result = (starNumber.length * 100) / universe.maxSize;
      let spanWidth = {
        width: `${result}%`
      };
      return (<Link to={"/universes/" + universe.id} className="Universe" key={universe.id}>
        <h4>
          {universe.name}</h4>

        <span className="universe-info">
          <span>{`Max Size: ${universe.maxSize}`}</span>
          <span>{`Current Stars: ${starNumber.length}`}</span>
          <span>{'Universe capacity:'}</span>
        </span>
        <span className="percentage">
          <span style={spanWidth} className="value"></span>
        </span>
      </Link>)
    });
    return (<div>
      <h1>Universes</h1>
      <div className="Universes">
        {universeNode}
        <div className={`Universe addUniverse ${this.state.clicked
            ? 'activated'
            : ''}`} onClick={this.handleClick}>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.universeName} name="universeName" placeholder="Name of the Universe" type="text"/>

            <input onChange={this.handleChange} value={this.state.universeSize} name="universeSize" placeholder="Size of the Universe" type="number"/>

            <button>Create Universe</button>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default Universes;
