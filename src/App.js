import './App.css';
import React from 'react';
import axios from 'axios';
import CardInfo from './component/CardInfo';
import Weather from './component/Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cites: {},
      cite: "",
      flag: false,
      lon: "",
      lat: "",
      data: []
    }

  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      cite: e.target.cite.value
    })
    // console.log("asdnasjdnaskd saofns"+process.env.REACT_APP_LOCATIONIQ_KEY);



    //http://localhost:3001/weather?searchQuery=Seattle&lat=47.60621&lon=-122.33207
    let loc = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cite}&format=json`;



    let result = await axios.get(loc);
    console.log(result.data[0]);

    await this.setState({
      cites: result.data[0],
      lat: result.data[0].lat,
      lon: result.data[0].lon,
      flag: true
    })
    let loc2 = `${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.cite}&lat=${this.state.lat}&lon=${this.state.lon}`;
console.log("this.state.citethis.state.cite"+loc2);
    let result2 = await axios.get(loc2);
    console.log(this.state.cite, this.state.lat, this.state.lon);
    console.log("result2result2result2result2" + result2);
    console.log("result2result2result2result2" + result2.data);

    await this.setState({
      data: result2.data
    })
  }

  render() {
    return (
      <div className="App">
        <>
          <h1> Cites</h1>
          {/* <button onClick={this.getLocation}> Click on me </button> */}
          <form onSubmit={this.getLocation}>
            <input type="text" placeholder="Plz Choice Cite" name="cite" />
            <button>Explore!</button>
          </form>

          <CardInfo
            cites={this.state.cites}
            cite={this.state.cite}
            flag={this.state.flag}

          />

          <Weather
            flag={this.state.flag}
            info={this.state.data}
          />
          {/* {this.state.flag && <p>{this.state.cite} lat:{this.state.cites.lat} loc:{this.state.cites.lon}</p>} */}
        </>
      </div>
    );
  }
}


export default App;
