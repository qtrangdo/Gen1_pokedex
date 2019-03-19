import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: ''
    }
  }

  onChange(event) {
    this.props.onChange(event.target.value)
    this.setState({
      searchStr: event.target.value
    })
  }

  render() {
    return (
      <div >
        <div className="bar">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Pokemon's Name"
            value={this.state.searchStr}
            onChange={this.onChange.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;