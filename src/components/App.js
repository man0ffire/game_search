import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/App.css';

const API_KEY = "RGAPI-92d2bc4a-a0db-410f-9fde-b59929bcaccc";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      proba: "proba",
      summoner: []
    };

    this.searchUsername('xahko');
  }

  searchUsername(username){
    $.ajax({
      url: 'https://euw.api.riotgames.com/api/lol/EUW/v1.4/summoner/by-name/'+username+'?api_key='+API_KEY,
      //headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({summoner: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.proba}</h2>
      </div>
    );
  }
}

export default App;
