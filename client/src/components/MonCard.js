import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class MonCard extends Component{
  constructor (props) {
    super(props);
    this.state = {
      id: props.mon.id,
      showModal: false
    }
  }

  onClick() {
    const { id } = this.state
  }

  render() {
    const { mon } = this.props;
    return (
      <div className="col col-sm-6 col-md-3" onClick={this.onClick.bind(this)}>
        <div className="card my-3 border border-danger card-bg">
          <img src={mon.default_img} alt={mon.name}></img>
          <hr/>
          <div className="card-body">
            <h3 className="text-center">
              {`#${mon.id} ${mon.name.toUpperCase()}`}
            </h3>
          </div>
        </div>
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

MonCard.propTypes = {
  mon: Proptypes.shape({
    default_img: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonCard);
