import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {



    render() {
        return (
            <div className="App">
                <>
                    {this.props.flag &&
                        this.props.info.map((item, idx) => {
                            return (
                                <Card key={idx} style={{ width: '18rem' }}>
                                    <Card.Body>

                                        <Card.Text>Title: {item.title}</Card.Text>
                                        <Card.Text>Overview: {item.overview}</Card.Text>
                                        <Card.Text>Average Votes: {item.average_votes}</Card.Text>
                                        <Card.Text>Total Votes: {item.total_votes}</Card.Text>
                                        <Card.Img variant="top" src={item.image_url} alt="" />
                                        {/* {() => {
                                            try {
                                                <Card.Img variant="top" src={item.image_url} alt="" />
                                            } catch {
                                                <Card.Text>IMAGE NOT FOUND</Card.Text>
                                            }
                                        }
                                        } */}


                                        <Card.Text>Popularity: {item.popularity}</Card.Text>
                                        <Card.Text>Released On: {item.released_on}</Card.Text>
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


export default Movies;
