import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {



    render() {
        return (
            <div className="App">
                <>
                    {this.props.flag && <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>date: {this.props.info.data}</Card.Text>
                            <Card.Text>description: {this.props.info.description}</Card.Text>
                        </Card.Body>
                    </Card>}

                </>
            </div>
        );
    }
}


export default Weather;
