import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends React.Component {
    render() {
        return (
            <div className="App">
                <>
                    {this.props.flag &&
                        this.props.info.map((item, idx) => {

                            return (
                                <Card key={idx} style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Text>date: {item.date}</Card.Text>
                                        <Card.Text>description: {item.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }

                </>
            </div>
        );
    }
}


export default WeatherDay;
