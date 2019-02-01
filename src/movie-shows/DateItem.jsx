import { updateMovieShowDate } from './actions';
import React from 'react';
import { connect } from 'react-redux';
import { getDate } from '../constants.js';

class DateItem extends React.Component {
    render() {
        let date = this.props.date;
        let className = (getDate(date) === this.props.movieShowDate) ? 'date-item active' : 'date-item';
        return (
            <div className={className} onClick={() => this.onDateUpdate(getDate(date))}>
                <div>{date.toString().split(' ')[0]}</div>
                <div>{date.getDate()}</div>
            </div>
        );
    }

    onDateUpdate = (dateValue) => {
        if (dateValue)
            this.props.updateMovieShowDate(dateValue);
    }
}


export default connect(
    (state) => ({
        movieShowDate: state.movieShows.movieShowDate
    }),
    (dispatch) => ({
        updateMovieShowDate: (date) => dispatch(updateMovieShowDate(date))
    })
)(DateItem);