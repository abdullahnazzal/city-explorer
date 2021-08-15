import './App.css';
import React from 'react';
import axios from 'axios';
import CardInfo from './component/CardInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cites: {},
      cite: "",
      flag: false
    }

  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      cite: e.target.cite.value
    })
console.log("asdnasjdnaskd saofns"+process.env.REACT_APP_LOCATIONIQ_KEY);
    let loc = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cite}&format=json`;

    let result = await axios.get(loc);
    console.log(result.data[0]);

    this.setState({
      cites: result.data[0],
      flag: true
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
          {/* {this.state.flag && <p>{this.state.cite} lat:{this.state.cites.lat} loc:{this.state.cites.lon}</p>} */}
        </>
      </div>
    );
  }
}


export default App;
