import React from 'react';
import { connect } from 'react-redux';
import { fetchMovieShowsByDate } from './actions';
import DropDown from '../drop-down/DropDown';
import DateItem from './DateItem';
import './MovieShows.css';

const DatesWrapper = ({ dates }) => {
  return (
    <div className="dates-wrapper d-flex">
      {dates.map((date, index) => {
        return <DateItem key={index} date={date} />;
      })}
    </div>
  );
};

class MovieShows extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieShowsByDate(id, this.props.movieShowDate);
  }

  componentDidUpdate(prevProps) {
    if (this.props.movieShowDate !== prevProps.movieShowDate) {
      const { id } = this.props.match.params;
      this.props.fetchMovieShowsByDate(id, this.props.movieShowDate);
    }
  }

  showLoading() {
    return <div>loading...</div>;
  }

  render() {
    const { movieShows, fetching } = this.props.movieShows;

    if (fetching || !movieShows) {
      return this.showLoading();
    }

    const shows =
      movieShows && movieShows.length > 0 ? (
        movieShows.map(
          (
            {
              movieName,
              theaterName,
              runtime,
              capacity,
              startTime,
              experience,
              language
            },
            index
          ) => {
            return (
              <tr key={index}>
                <td>
                  {movieName}
                  <br />
                  {language}     {runtime} minutes
                </td>
                <td>
                  <span className="movie-certificate">A</span>
                </td>
                <td>{theaterName}</td>
                <td>{experience}</td>
                <td>
                  <span className="showtime available">
                    {new Date(startTime).toLocaleTimeString()}
                  </span>
                </td>
              </tr>
            );
          }
        )
      ) : (
          <tr>
            <td colSpan="5" className="text-center">No shows for the selected date.</td>
          </tr>
        );
    const ticketRange = Array.from(
      new Array(10),
      (val, index) => index + 1
    ).map(val => {
      return { key: val, value: val };
    });

    const dates = [];
    let date = new Date();
    for (let index = 0; index < 7; index++) {
      var nextDate = new Date(date);
      dates.push(nextDate);
      date.setDate(date.getDate() + 1);
    }

    return (
      <div className="movie-shows-container">
        <header className="d-flex align-items-center mt-2 mb-2">
          <div className="right-arrow-after">Tickets</div>
          <div className="mr-2">
            <DropDown listItems={ticketRange} />
          </div>
          <div className="right-arrow-after">Date</div>
          <DatesWrapper dates={dates} />
        </header>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Certification</th>
              <th>Cinema</th>
              <th>Experience</th>
              <th>Showtime</th>
            </tr>
          </thead>
          <tbody>{shows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    movieShows: state.movieShows,
    movieShowDate: state.movieShows.movieShowDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieShowsByDate: (id, date) => dispatch(fetchMovieShowsByDate(id, date))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieShows);
