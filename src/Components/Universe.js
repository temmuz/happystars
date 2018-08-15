import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Universe extends Component {
    handleRedirect(){
        browserHistory.push('/universes');
    }
    render(){
        const universes = this.props.route.universeData;
        const id = this.props.params.id;

        const universe = universes.filter(universe => {
            if(universe.id == id) {

                return universe;
            }
        });
console.log(universe)
        return (
            <div>
                <h1>{universe[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {universe[0].name}</li>

                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Universes</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Universe;
