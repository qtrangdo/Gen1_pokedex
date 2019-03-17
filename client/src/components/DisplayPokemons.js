import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import requestAllMons from '../actions/actions';

class DisplayPokemons extends Component {
  componentDidMount() {
    const { onRequestAllMons } = this.props;
    onRequestAllMons();
  }

  render() {
    const { pending, allMons } = this.props;
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
        {/* <div className={style.photodiv}>
          {sortPhotos.map(link => <Photo key={link.photoId} link={link} />)}
          <button type="button" className={style.button} onClick={this.togglePhotoModal.bind(this)}>
            {`${photos.length} PHOTOS ▷`}
          </button>
        </div> */}
        check check
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    allMons: state.pokemons.allMons,
    pending: state.pokemons.pending,
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
  onRequestAllMons: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPokemons);