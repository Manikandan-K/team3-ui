import React from 'react';
import MovieGrid from '../movies/MovieGrid';
import Location from '../locations/Location';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      locationId:1
    };
  }

  render(){
    return (
      <div className="home">
        <Location onUpdate={this.onLocationUpdate}/>
        <MovieGrid locationId={this.state.locationId} />
      </div>  
    );
  }

  onLocationUpdate=(newLocationId)=>{
    let locId=newLocationId ? parseInt(newLocationId,10) : this.state.locationId ;
    this.setState({locationId:locId});
  };
}

Home.defaultProps = {};

export default Home;