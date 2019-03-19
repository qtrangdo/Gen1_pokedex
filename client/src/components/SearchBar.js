import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import {setSearchField} from '../actions/actions';


class SearchBar extends Component {
  onChange(event) {
    const { onSearchChange } = this.props;
    onSearchChange(event.target.value)
  }

  render() {
    return (
      <div >
        <div className="bar">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Pokemon's Name"
            onChange={this.onChange.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    onSearchChange: (str) => dispatch(setSearchField(str)),
  }
);

SearchBar.propTypes = {
  onSearchChange: Proptypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(SearchBar);