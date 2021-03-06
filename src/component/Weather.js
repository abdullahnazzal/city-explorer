import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

    render() {
        return (
            <WeatherDay
                flag={this.props.flag}
                info={this.props.info}
            />
        );
    }
}


export default Weather;
