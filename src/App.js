import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/ui-form";
import { loadBracket, SearchTournament, SearchPlayer } from "./lib";

class App extends Component {

  state = {
    currentSearch: "",
    player1Results: "",
    searchResults: ""
  }

  handleInputChange = (evt) => {
    evt.preventDefault();
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value
    })
  }

  handleSearchSubmit = (evt) =>  {
    evt.preventDefault();
    const tournamentId = SearchTournament(this.state.currentSearch);
    const playerId = SearchPlayer(this.state.player1Results);
    this.setState({
      searchResults: playerId
    })
    //console.log(tournamentId);
    //loadBracket([tournamentId])
      //.then(response => //response.entities.seeds.map((i) => 
        //console.log(response.entities.seeds)) 
        //this.setState({
        //searchResults: response.entities.seeds[0].mutations.participants[playerId].gamerTag
      //})
    //)
      //.then(console.log("It works!"));
  }

  handlePlayerName = (evt) => {
    evt.preventDefault();
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    console.log('Nope');
  }

  render() {

    const submitSearchHandler = this.state.currentSearch ? this.handleSearchSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rankings</h2>
        </div>
        <p className="App-intro">Welcome to Rankings</p>
        <SearchForm
          handleInputChange={this.handleInputChange}
          currentSearch={this.state.currentSearch}
          player1Results={this.state.player1Results}
          handleSubmit={submitSearchHandler}
        />
        <p>{this.state.searchResults}</p>
      </div>
    );
  }
}

export default App;
