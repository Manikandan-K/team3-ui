import React from 'react';
import MovieGrid from '../movies/MovieGrid';
import Location from '../locations/Location';


class Home extends React.Component{

  render(){
    return (
      <div className="home">
        <Location onUpdate={this.onLocationUpdate}/>
        <MovieGrid />
      </div>  
    );
  }

  onLocationUpdate=(newLocation)=>{
  };
}

Home.defaultProps = {};

export default Home;