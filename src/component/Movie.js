import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './Movies';

class Movie extends React.Component {
    render() {
        return (
            <Movies
                flag={this.props.flag}
                info={this.props.info}
            />
        );
    }
}

export default Movie;
