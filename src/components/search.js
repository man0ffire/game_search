import React, {Component} from 'react';
import '../styles/search.css';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: ""
    };
  }

  submitForm(e){
    e.preventDefault();
    this.props.onSearchNameLevelIcon(this.refs.inputText.value.replace(/ /g,'').toLowerCase());
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.submitForm.bind(this)}>
        <div className="form-group col-md-8">
          <input type="text" className="form-control input-lg" placeholder="Enter your summoner's name" ref="inputText" />
        </div>
          <button type="submit" className='btn btn-lg btn-danger' /*onSubmit={submitForm}*/>GO</button>
      </form>
    );
  }
}
