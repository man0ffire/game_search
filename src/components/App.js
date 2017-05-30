import React, { Component } from 'react';
//import $ from 'jquery';
import '../styles/App.css';
import SearchBar from './search';
import API_KEY from '../api_key';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      summonerName: '',
      icon: '',
      level: ''
    };

  //  this.searchNameLevelIcon('xahko');
  }

  searchNameLevelIcon(username){

    axios.get('https://euw.api.riotgames.com/api/lol/EUW/v1.4/summoner/by-name/'+username+'?api_key='+API_KEY)
    .then((response) => {
      let name = response.data[username].name;
      let icon = response.data[username].profileIconId;
      let level = response.data[username].summonerLevel;
      this.setState({summonerName: name, icon: icon, level:level}, function(){
        console.log(response);
      });
    })
    .catch((error) => {
      console.log(error);
  });


    // $.ajax({
    //   url: 'https://euw.api.riotgames.com/api/lol/EUW/v1.4/summoner/by-name/'+username+'?api_key='+API_KEY,
    //   //headers: { 'Allow-Control-Allow-Origin': '*' },
    //   crossDomain: true,
    //   xhrFields: {
    //     withCredentials: false
    //   },
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data){
    //     let info = data[username];
    //     let name = info['name'];
    //     let icon = info['profileIconId'];
    //     let level = info['summonerLevel'];
    //     //let thename = data[username[name]];
    //     this.setState({summonerName: name, icon: icon, level:level}, function(){
    //       console.log(info);
    //     })
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //   }
    // });
  }


  render() {
    if (this.state.summonerName === '') {
      return (
        <div className="container">
          <SearchBar onSearchNameLevelIcon = {this.searchNameLevelIcon.bind(this)} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <SearchBar onSearchNameLevelIcon = {this.searchNameLevelIcon.bind(this)} /> <br/>
          <img alt="summoner icon" src={ 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/' + this.state.icon +'.png' } />
          <h2>{this.state.summonerName}</h2>
          <h2>{this.state.level}</h2>
        </div>
      );
    }
  }
}

export default App;
