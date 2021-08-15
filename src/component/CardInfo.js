import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CardInfo extends React.Component {
 
  

  render() {
    return (
      <div className="App">
        <>
          {this.props.flag && <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cites.lat},${this.props.cites.lon}`} />
            <Card.Body>
              <Card.Title>Name: {this.props.cite}</Card.Title>
              <Card.Text>latitude: {this.props.cites.lat}</Card.Text>
              <Card.Text>longitude: {this.props.cites.lon}</Card.Text>
            </Card.Body>
          </Card>}
          {/* <h1> Cites</h1> */}
          {/* <button onClick={this.getLocation}> Click on me </button> */}
          {/* <form onSubmit={this.getLocation}>
            <input type="text" placeholder="Plz Choice Cite" name="cite" />
            <button>Explore!</button>
          </form> */}
          {/* {this.state.flag && <p>{this.state.cite} lat:{this.state.cites.lat} loc:{this.state.cites.lon}</p>} */}
        </>
      </div>
    );
  }
}


export default CardInfo;
