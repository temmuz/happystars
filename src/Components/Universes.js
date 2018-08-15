import React, { Component } from 'react';
import { Link } from 'react-router';

class Universes extends Component {
    render(){
        // Get data from route props
        const universes = this.props.route.universeData;
        const stars = this.props.route.starData;
        // Map through cars and return linked cars
        stars.map((star)=>{
          //console.log(star.universeId);
        })
        universes.map((universe)=>{
          //console.log(universe);
        })
        const universeNode = universes.map((universe) => {
          let starNumber = [];
          stars.map((star)=>{
            if(star.universeId === universe.id){
              starNumber.push(star);
            }
          })
          let result =(starNumber.length * 100) / universe.maxSize;
          let spanWidth = {
            width:`${result}%`
          };
            return (
                <Link
                    to={"/universes/"+universe.id}
                    className="Universe"
                    key={universe.id}>
                    <h4>
                    {universe.name}</h4>

                  <span className="universe-info">
                    <span>{`Max Size: ${universe.maxSize}`}</span>
                  <span>{`Current Stars: ${starNumber.length}`}</span>
                <span>{'Universe capacity:'}</span>
                  </span>
                  <span className="percentage"><span style={spanWidth} className="value"></span></span>
                </Link>
            )
        });
        return (
            <div>
                <h1>Universes</h1>
              <div className="Universes">
                    {universeNode}
                </div>
            </div>
        );
    }
}

export default Universes;
