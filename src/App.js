import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.headers.common['auth'] = process.env.REACT_APP_KEY;
const clanTag = 'RPJ0V';
const playerTag = 'Y20Y80JP';

class App extends Component {
  state = {
    name: '',
    members: ''
  }
  componentWillMount = () => {
    axios.get(`https://api.royaleapi.com/clan/${clanTag}`)
    .then(results => this.setState({
      name: results.data.name,
      members : results.data.members,
    }));
  }
  render() {
    console.log(this.state.members)
    return (
      this.state.name ? (
        <div>
          { this.state.name }
          { this.state.members.map((member, index) => {
            return <li key={index}>
            Name: { member.name } | Donations: { member.donations }
            </li>
          }) }
        </div>
      ) : <h1>Waiting for Data</h1>
    );
  }
    // axios.get(`https://api.royaleapi.com/player/${playerTag}`)
    // .then(r => console.log(r));
    
}

export default App;
