import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { requestAllMons } from '../actions/actions';
import MonCard from './MonCard'
import SearchBar from './SearchBar';

class DisplayPokemons extends Component {
  componentDidMount() {
    const { onRequestAllMons } = this.props;
    onRequestAllMons();
  }

  render() {
    const { pending, allMons, searchField } = this.props;
    const filterPokemons = allMons.filter(mon => {
      return mon.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (pending && !allMons.length) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">
              Loading...
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <SearchBar />
        <div className="d-flex flex-wrap">
          {filterPokemons.map(mon => (
            <MonCard mon={mon} key={mon.id} />
          ))}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    allMons: state.pokemons.allMons,
    pending: state.pokemons.pending,
    searchField: state.pokemons.searchField,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onRequestAllMons: () => dispatch(requestAllMons()),
  }
);

DisplayPokemons.propTypes = {
  allMons: Proptypes.instanceOf(Array).isRequired,
  pending: Proptypes.bool.isRequired,
  searchField: Proptypes.string.isRequired,
  onRequestAllMons: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPokemons);