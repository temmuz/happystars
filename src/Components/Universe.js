import React, {Component} from 'react';
import Star from './Star';
import StarColor from './StarColor';
import {browserHistory} from 'react-router';

class Universe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      starName: '',
      starColor: 'BLACK',
      universeId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.setState({
      universeId: parseInt(this.props.params.id)
    })
  }
  handleClick = () => {
    this.setState({clicked: true});
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleDelete = (e) => {
    fetch(`https://happy-stars.herokuapp.com/api/star/${e.target.getAttribute('data-key')}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    e.target.parentNode.classList.add("deleted");
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://happy-stars.herokuapp.com/api/star', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({color: `${this.state.starColor}`, name: `${this.state.starName}`, universeId: `${this.state.universeId}`})
    }).then(() => {
      this.setState({clicked: false});
    })
  }
  handleColorChange = (event) => {
    //console.log(event.target.getAttribute('color'))
    this.setState({starColor: event.target.getAttribute('color')});
  }
  componentDidUpdate() {}

  handleRedirect() {
    browserHistory.push('/universes');
  }
  render() {
    const universes = this.props.route.universeData;
    const stars = this.props.route.starData;
    const id = this.props.params.id;
    const universe = universes.filter(universe => {
      if (universe.id == id) {
        return universe;
      }
    })
    const colors = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'BLACK'];
    const starNodeArr = [];
    stars.map((star) => {
      if (star.universeId === universe[0].id) {
        starNodeArr.push(star);
      }
    });
    const starNode = starNodeArr.map((star) => {
      return (<Star handleDelete={(key) => this.handleDelete(key)} color={star.color} datakey={star.id} key={star.id} name={star.name}/>)
    })
    return (<div>
      <h1>Stars of {universe[0].name}</h1>
      <div className="Stars ofUniverse">
        {starNode}
        <div className={`Star addStar ${this.state.clicked
            ? 'activated'
            : ''} ${this.state.starColor}`} onClick={this.handleClick}>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.starName} name="starName" placeholder="Name of the Star" type="text"/>

            <span className="ChooseStarColor">
              {
                colors.map((color, i) => {
                  return (<StarColor handleClick={this.handleColorChange} key={i} color={color}/>)
                })
              }
            </span>
            <button>Create Star</button>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default Universe;
