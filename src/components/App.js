import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/App.css';
import SearchBar from './search';

const API_KEY = "RGAPI-92d2bc4a-a0db-410f-9fde-b59929bcaccc";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      proba: 'proba',
      summonerName: '',
      icon: '',
      level: ''
    };

    this.searchNameLevelIcon('xahko');
  }

  searchNameLevelIcon(username){
    $.ajax({
      url: 'https://euw.api.riotgames.com/api/lol/EUW/v1.4/summoner/by-name/'+username+'?api_key='+API_KEY,
      //headers: { 'Access-Control-Allow-Origin': '*' },
      crossDomain: true,
      dataType: 'json',
      cache: false,
      success: function(data){
        let info = data[username];
        let name = info['name'];
        let icon = info['profileIconId'];
        let level = info['summonerLevel'];
        //let thename = data[username[name]];
        this.setState({summonerName: name, icon: icon, level:level}, function(){
          console.log(info);
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
        <h2>{this.state.proba2}</h2>
        <img alt="summoner icon" src={ 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/' + this.state.icon +'.png' } />
        <h2>{this.state.summonerName}</h2>
        <h2>{this.state.level}</h2>
        <SearchBar onSearchNameLevelIcon = {this.searchNameLevelIcon.bind(this)} />
      </div>
    );
  }
}

export default App;
